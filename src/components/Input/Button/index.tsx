import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

export enum ButtonType {
  Default,
  Green,
}

interface Props {
  className?: string;
  children?: React.ReactNode;
  type?: ButtonType;
  disabled?: boolean;
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
  type = ButtonType.Default,
  disabled,
}) => {
  return (
    <div
      className={cx(
        'button',
        classNameByType(type),
        className,
        disabled ? 'disabled' : null
      )}
    >
      {children}
    </div>
  );
};

export default Button;
