import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

const cx = className.bind(styles);

const introText: string = `I may be busy with my work and some people may have messaged me beforehand.

I'll reply you as quick as possible. Thank you!`;
const ContactSection: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('contact-card')}>
        <h1>Contact Me</h1>
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
