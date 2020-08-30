import React, { useReducer, useCallback, useContext, useEffect } from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

// components
import PortfolioModal from 'components/PortfolioModal';

// context
import { AppContext } from 'context/AppContext';

export interface Portfolio {
  title: string;
  description: string;
  imgSrcList: string[];
  client: string;
  skills: string[];
}

interface Props {
  className?: string;
  portfolios: Portfolio[];
}

interface ModalState {
  visible: boolean;
  portfolioIdx: number;
}

type ModalAction = { type: 'OPEN'; portfolioIdx: number } | { type: 'CLOSE' };

const cx = className.bind(styles);
const initModalState: ModalState = {
  // visible: false,
  // portfolioIdx: -1,
  visible: true,
  portfolioIdx: 0,
};

const modalReducer = (state: ModalState, action: ModalAction) => {
  switch (action.type) {
    case 'OPEN':
      return {
        visible: true,
        portfolioIdx: action.portfolioIdx,
      };
    case 'CLOSE': {
      return {
        visible: false,
        portfolioIdx: -1,
      };
    }
  }
};

const PortfolioList: React.FC<Props> = ({ className, portfolios }) => {
  const [modalState, modalDispatch] = useReducer(modalReducer, initModalState);
  const { setNavbarVisible } = useContext(AppContext);

  const handlePortfolioClick = useCallback((idx) => {
    modalDispatch({
      type: 'OPEN',
      portfolioIdx: idx,
    });
  }, []);

  const handleModalClose = useCallback(() => {
    modalDispatch({
      type: 'CLOSE',
    });
  }, []);

  useEffect(() => {
    setNavbarVisible(!modalState.visible);
  }, [modalState, setNavbarVisible]);

  return (
    <div className={cx('portfolio-list', className)}>
      {modalState.visible && (
        <PortfolioModal
          portfolio={portfolios[modalState.portfolioIdx]}
          onClose={handleModalClose}
        />
      )}
      {portfolios.map(({ title, client, imgSrcList }, idx) => (
        <div
          key={idx}
          className={cx('portfolio')}
          onClick={() => handlePortfolioClick(idx)}
        >
          <img
            src={imgSrcList[0]}
            alt="portfolio"
            className={cx('portfolio-img')}
          />
          <div className={cx('portfolio-title')}>
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
