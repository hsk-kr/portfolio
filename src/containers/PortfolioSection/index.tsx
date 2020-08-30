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
    description:
      'test\nfsdafadsfsdafasnsadfasdfasdf\nasdfasdfasdfasd\fnasdfasdfasdf\nasdfasdfasdfasnfasdfasdfasdfasdfasdfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasdfasdfasdf\nasdfasfasdfasdfasf',
    client: 'Lico',
    imgSrcList: [Bg, Bg, Bg],
    skills: [
      'react',
      'javascript',
      'html',
      'scss',
      'css',
      'webpack',
      'docker',
      'html',
      'scss',
      'css',
      'webpack',
      'docker',
    ],
  },
  {
    title: 'Test',
    description:
      'test\nfsdafadsfsdafasnsadfasdfasdf\nasdfasdfasdfasd\fnasdfasdfasdf\nasdfasdfasdfasnfasdfasdfasdfasdfasdfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasdfasdfasdf\nasdfasfasdfasdfasf',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
  {
    title: 'Test',
    description: 'test',
    client: 'Lico',
    imgSrcList: [Bg],
    skills: ['react'],
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>My Portfolios</h1>
      <PortfolioList portfolios={portfolios} />
    </div>
  );
};

export default PortfolioSection;
