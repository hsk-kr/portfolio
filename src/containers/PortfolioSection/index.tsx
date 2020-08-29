import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

// components
import PortfolioList, { Portfolio } from 'containers/PortfolioList';

// temp
import Bg from 'resources/images/home-bg.jpg';

const cx = className.bind(styles);

const portfolios: Portfolio[] = [
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    introduction: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <div className={cx(styles['container'])}>
      <h1 className={cx(styles['title'])}>My Portfolios</h1>
      <PortfolioList portfolios={portfolios} />
    </div>
  );
};

export default PortfolioSection;
