import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

const cx = className.bind(styles);

const introText: string = `Blah Blah
Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
`;

const ContactSection: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('contact-card')}>
        <p>{introText}</p>
        <div className={cx('contact-box')}>
          <label>Kakao ID:</label>
          <span>krlico</span>
        </div>
        <div className={cx('contact-box')}>
          <label>Gmail:</label>
          <span>hsk.coder@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
