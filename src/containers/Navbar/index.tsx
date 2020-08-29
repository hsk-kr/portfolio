import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faProjectDiagram,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  onNavigate: (idx: number) => void;
  index: number;
}

const cx = className.bind(styles);
const ICON_SIZE = '3x';

const Navbar: React.FC<Props> = ({ onNavigate, index }) => {
  return (
    <div className={cx(styles['navbar'])}>
      <FontAwesomeIcon
        icon={faHome}
        size={ICON_SIZE}
        color={index === 0 ? '#c8d6e5' : 'black'}
        onClick={() => onNavigate(0)}
      />
      <FontAwesomeIcon
        icon={faProjectDiagram}
        size={ICON_SIZE}
        color={index === 1 ? '#c8d6e5' : 'black'}
        onClick={() => onNavigate(1)}
      />
      <FontAwesomeIcon
        icon={faPhone}
        size={ICON_SIZE}
        color={index === 2 ? '#c8d6e5' : 'black'}
        onClick={() => onNavigate(2)}
      />
    </div>
  );
};

export default Navbar;
