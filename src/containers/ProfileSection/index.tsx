import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

// components
import CircleImage from 'components/Input/CircleImage';

// resources
import imgMe from 'resources/images/me.png';
import SkillCard from 'components/SkillCard';

const cx = className.bind(styles);

const aboutmeText = `My Korean name is SeongKuk Han. 
I'm using 'Lico' as my nickname. I really want to work abroad but my English level is quite not good enough to work with foreigners and so is my programming skills.
So, I was thinking about what can I do to make my English and career improve. 
That's why I've made up this website. I'll help you as much as I can.
I'll wait for your message!`;

const skills = [
  {
    name: 'Javascript',
    percentage: 30,
  },
  {
    name: 'React',
    percentage: 30,
  },
  {
    name: 'Python',
    percentage: 25,
  },
  {
    name: 'Design (HTML/CSS/UI/UX)',
    percentage: 15,
  },
  {
    name: 'React Native',
    percentage: 10,
  },
];

const ProfileSection: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('profile-card')}>
        <CircleImage src={imgMe} size={200} className={cx('profile-image')} />
        <h1>About Me</h1>
        <p className={cx('aboutme-text')}>{aboutmeText}</p>
      </div>
      <div className={cx('skill-level-card')}>
        <h1>My Skills</h1>
        {skills.map((skill, idx) => (
          <SkillCard
            key={idx}
            name={skill.name}
            percentage={skill.percentage}
            className={cx('skill')}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
