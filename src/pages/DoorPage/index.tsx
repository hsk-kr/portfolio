import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// components
import Button, { ButtonType } from 'components/Input/Button';

// resources
import bgImg from 'resources/images/home-bg.jpg';

const cx = classNames.bind(styles);

const introText = `Hi! I'm Lico.
I'm a junior Web Developer in South Korea.
If you need my help, I'll help you!
Don't worry. It's Free. No charges at all.
If you want to know more about me, Come on in!`;
const textAnimDelay = 50;
let once = false;

const DoorPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleTextLength, setVisibleTextLength] = useState<number>(0);
  const [btnEanbled, setBtnEnabled] = useState<boolean>(false);
  const history = useHistory();

  const srtTextAnim = useCallback(() => {
    let textLength = 0;

    const timeoutCallback = () => {
      textLength += 1;
      setVisibleTextLength(textLength);

      if (textLength < introText.length) {
        setTimeout(timeoutCallback, textAnimDelay);
      } else {
        setBtnEnabled(true);
      }
    };

    setTimeout(timeoutCallback, textAnimDelay);
  }, []);

  const navigateToAboutMe = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      history.push('/home');
    },
    [history]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.addEventListener('animationend', () => {
      if (once) return; // prevent to execute duplicated animation.

      once = true;
      srtTextAnim();
    });
  }, [srtTextAnim]);

  return (
    <div className={cx('container')} ref={containerRef}>
      <img src={bgImg} alt="Home Background" className={cx('bg')} />
      <div className={cx('contents')}>
        <div className={cx('introduction')}>
          <h1 className={cx('introduction-text')}>
            {introText.substring(0, visibleTextLength)}
          </h1>
        </div>
        <Button
          type={ButtonType.Green}
          className={cx('join-btn')}
          disabled={!btnEanbled}
          onClick={navigateToAboutMe}
        >
          {btnEanbled ? 'YES!' : 'Hmm...'}
        </Button>
      </div>
    </div>
  );
};

export default DoorPage;
