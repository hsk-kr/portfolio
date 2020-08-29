import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

const cx = className.bind(styles);

interface Props {
  contents: React.ReactNode[];
  index: number;
  delay?: number;
}

const SlideContents: React.FC<Props> = ({ contents, index, delay = 1 }) => {
  return (
    <div
      className={cx(styles['sections'])}
      style={{
        transform: `translateX(-${index * 100}vw)`,
        transition: `${delay}s`,
      }}
    >
      {contents.map((section, idx) => {
        return (
          <div
            key={idx}
            className={cx(styles['section'])}
            style={{ left: `calc(${idx * 100}%)` }}
          >
            {section}
          </div>
        );
      })}
    </div>
  );
};

export default SlideContents;
