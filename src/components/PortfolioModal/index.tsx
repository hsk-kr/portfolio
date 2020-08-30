import React, { useCallback } from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

// components
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

// interfaces
import { Portfolio } from 'containers/PortfolioList';

interface Props {
  portfolio: Portfolio;
  onClose: Function;
}

const cx = className.bind(styles);

const PortfolioModal: React.FC<Props> = ({ portfolio, onClose }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const images = portfolio.imgSrcList.map((imgSrc) => ({
    original: imgSrc,
    thumbnail: imgSrc,
  }));

  return (
    <div className={cx('portfolio-modal')}>
      <div className={cx('portfolio-modal-cover')} onClick={handleClose} />
      <div className={cx('portfolio-content')}>
        <div className={cx('portfolio-toolbar')}>
          <span
            className={cx('modal-close-btn')}
            role="img"
            aria-label="close"
            onClick={handleClose}
          >
            ❌
          </span>
        </div>
        <div>
          <ImageGallery items={images} />
          <hr />
          <div className={cx('portfolio-info')}>
            <h1>{portfolio.title}</h1>
            <div className={cx('portfolio-detail')}>
              <div className={cx('label')}>Client:</div>
              <div className={cx('client')}>{portfolio.client}</div>
            </div>
            <div className={cx('portfolio-detail')}>
              <div className={cx('label')}>Skills:</div>
              <div className={cx('skills')}>
                {portfolio.skills.map((skill, idx) => (
                  <div key={idx} className={cx('skill')}>
                    {skill.length > 0 &&
                      skill[0].toUpperCase() + skill.substring(1)}
                  </div>
                ))}
              </div>
            </div>
            <div className={cx('portfolio-description')}>
              {portfolio.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
