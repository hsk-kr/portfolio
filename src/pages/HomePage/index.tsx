import React, { useState, useCallback, useContext } from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';
import SlideContents from 'containers/SlideContents';

// components
import ProfileSection from 'containers/ProfileSection';
import PortfolioSection from 'containers/PortfolioSection';
import ContactSection from 'containers/ContactSection';
import Navbar from 'containers/Navbar';

// context
import { AppContext } from 'context/AppContext';

// resources
const cx = className.bind(styles);

const contents: React.ReactNode[] = [
  <ProfileSection />,
  <PortfolioSection />,
  <ContactSection />,
];

const HomePage: React.FC = () => {
  const [contentsIdx, setContentsIdx] = useState<number>(1);
  const { navbarVisible } = useContext(AppContext);

  const handleNavigate = useCallback((idx: number) => {
    setContentsIdx(idx);
    console.log(idx);
  }, []);

  return (
    <div className={cx('container')}>
      {navbarVisible && (
        <Navbar onNavigate={handleNavigate} index={contentsIdx} />
      )}
      <SlideContents contents={contents} index={contentsIdx} />
    </div>
  );
};

export default HomePage;
