import React, { useState, useEffect } from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';
import SlideContents from 'containers/SlideContents';

// components
import ProfileSection from 'containers/ProfileSection';
import PortfolioSection from 'containers/PortfolioSection';
import ContactSection from 'containers/ContactSection';

// resources
const cx = className.bind(styles);

const contents: React.ReactNode[] = [
  <ProfileSection />,
  <PortfolioSection />,
  <ContactSection />,
];

const HomePage: React.FC = () => {
  const [contentsIdx, setContentsIdx] = useState<number>(0);

  return (
    <div className={cx(styles['container'])}>
      <SlideContents contents={contents} index={contentsIdx} />
    </div>
  );
};

export default HomePage;
