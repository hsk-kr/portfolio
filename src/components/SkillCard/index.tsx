import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

const cx = className.bind(styles);

interface Props {
  name: string;
  percentage: number;
  className?: string;
}

const SkillCard: React.FC<Props> = ({ name, percentage, className }) => {
  const style = {
    width: `${percentage}%`,
    borderTopRightRadius: percentage >= 100 ? 0 : 10,
    borderBottomRightRadius: percentage >= 100 ? 0 : 10,
  };

  return (
    <div className={cx('skill-card', className)}>
      <span className={cx('skill-name')}>{name}</span>
      <div className={cx('gauge')}>
        <div className={cx('progress')} style={style} />
      </div>
    </div>
  );
};

export default SkillCard;
