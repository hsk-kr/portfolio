import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

const cx = className.bind(styles);

const AboutMePage: React.FC = () => {
  return <div className={cx(styles['container'])}>About Me</div>;
};

export default AboutMePage;
