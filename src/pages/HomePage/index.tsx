import React, { useState, useEffect, useCallback } from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';
import SlideContents from 'containers/SlideContents';

// components
import ProfileSection from 'containers/ProfileSection';
import PortfolioSection from 'containers/PortfolioSection';
import ContactSection from 'containers/ContactSection';
import Navbar from 'containers/Navbar';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

// resources
const cx = className.bind(styles);

const contents: React.ReactNode[] = [
  <ProfileSection />,
  <PortfolioSection />,
  <ContactSection />,
];

const HomePage: React.FC = () => {
  const [contentsIdx, setContentsIdx] = useState<number>(0);

  const handleNavigate = useCallback((idx: number) => {
    setContentsIdx(idx);
    console.log(idx);
  }, []);

  return (
    <div className={cx(styles['container'])}>
      <Navbar onNavigate={handleNavigate} index={contentsIdx} />
      <SlideContents contents={contents} index={contentsIdx} />
    </div>
  );
};

export default HomePage;
