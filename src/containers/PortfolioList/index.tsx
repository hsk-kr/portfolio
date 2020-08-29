import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

export interface Portfolio {
  title: string;
  introduction: string;
  imgSrcList: string[];
  client: string;
  skills: string[];
}

interface Props {
  className?: string;
  portfolios: Portfolio[];
}

const cx = className.bind(styles);

const PortfolioList: React.FC<Props> = ({ className, portfolios }) => {
  return (
    <div className={cx(styles['portfolio-list'], className)}>
      {portfolios.map(({ title, client, imgSrcList }, idx) => (
        <div className={cx(styles['portfolio'])}>
          <img
            src={imgSrcList[0]}
            alt="portfolio"
            className={cx(styles['portfolio-img'])}
          />
          <div className={cx(styles['portfolio-title'])}>
            <h2>
              {title} - {client}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
