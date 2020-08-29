import React, { useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

export enum ButtonType {
  Default,
  Green,
}

interface Props {
  className?: string;
  children?: React.ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const cx = classNames.bind(styles);

const classNameByType = (type: ButtonType): string => {
  switch (type) {
    case ButtonType.Green:
      return 'green-btn';
    default:
      return 'default-btn';
  }
};

const Button: React.FC<Props> = ({
  className = '',
  children,
  onClick,
  type = ButtonType.Default,
  disabled,
}) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick && !disabled) {
        onClick(e);
      }
    },
    [disabled, onClick]
  );

  return (
    <div
      className={cx(
        styles['button'],
        classNameByType(type),
        className,
        disabled ? 'disabled' : null
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Button;
