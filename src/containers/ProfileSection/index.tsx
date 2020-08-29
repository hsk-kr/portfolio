import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

// components
import CircleImage from 'components/Input/CircleImage';

// resources
import imgMe from 'resources/images/me.png';
import SkillCard from 'components/SkillCard';

const cx = className.bind(styles);

const aboutmeText = `My Korean name is Seong-Guk Han. 
I'm using 'Lico' as my nickname. I really wanted to work abroad but I realized my english level is not enough to work abroad and my programming skills is also.
So, I was thinking about that how can I make my english and career grow up together. 
And that's why I've made up this website. I'll make simple apps you want. you just have to help me learning English as much as you can.
My skills can be not enough to make your apps. but I'll try my best.
(Your apps will show up in portfolio section in this site.)`;

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
    <div className={cx(styles['container'])}>
      <div className={cx(styles['profile-card'])}>
        <CircleImage
          src={imgMe}
          size={200}
          className={cx(styles['profile-image'])}
        />
        <h1>About Me</h1>
        <p className={cx(styles['aboutme-text'])}>{aboutmeText}</p>
      </div>
      <div className={cx(styles['skill-level-card'])}>
        <h1>My Skills</h1>
        {skills.map((skill, idx) => (
          <SkillCard
            key={idx}
            name={skill.name}
            percentage={skill.percentage}
            className={cx(styles['skill'])}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
