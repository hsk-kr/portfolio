import React, { useState, useEffect } from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';
import SlideContents from 'containers/SlideContents';

// resources
const cx = className.bind(styles);

const HomePage: React.FC = () => {
  const [contentsIdx, setContentsIdx] = useState<number>(0);
  const [contents, setContents] = useState<React.ReactNode[]>([
    <div onClick={() => setContentsIdx(1)}>Section1</div>,
    <div>Section2</div>,
    <div>Section3</div>,
  ]);

  return (
    <div className={cx(styles['container'])}>
      <SlideContents contents={contents} index={contentsIdx} />
    </div>
  );
};

export default HomePage;
