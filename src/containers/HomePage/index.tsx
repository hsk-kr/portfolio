import React, { useEffect, useRef, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

// components
import Button, { ButtonType } from 'components/Input/Button';

// resources
import bgImg from 'resources/images/home-bg.jpg';

const cx = classNames.bind(styles);

const introText = `Hi! I'm Lico.
A Junior Software Engineer in South Korea.
Could you help me learning English?
INSTEAD! I make your app for FREE.
I'm not sure I can make your app.
BUT! I PROMISE. I'll do my best for YOU.`;
const textAnimDelay = 50;
let once = false;

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleTextLength, setVisibleTextLength] = useState<number>(0);
  const [btnEanbled, setBtnEnabled] = useState<boolean>(false);

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
        >
          {btnEanbled ? 'OKAY' : 'Hmm...'}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
