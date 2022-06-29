import React from 'react';
import UnderLineHeader from '../../layout/Headers/UnderLineHeader';
import SkillLevelBar from './SkillLevelBar';
import './Skills.scss';

export default function Skills() {
  const skills = [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 90 },
    { skill: 'JavaScript', level: 80 },
    { skill: 'React', level: 80 },
    { skill: 'Photoshop', level: 90 },
    { skill: 'Adobe XD', level: 70 },
    { skill: 'Node.js', level: 60 },
    { skill: 'WordPress', level: 50 },
  ];
  return (
    <div className="text-center d-flex flex-column gap-4">
      <h1>Skills</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit
        incidunt dolore sit iste atque assumenda eveniet. Aspernatur, provident
        repudiandae explicabo consequuntur animi nesciunt iusto fugit. Iusto
        esse eveniet animi dolore sunt facilis at debitis voluptatem facere
        ratione aliquid autem error et cumque rerum exercitationem similique eum
        odit, ducimus voluptas!
      </p>
      <div className="text-start d-flex flex-wrap justify-content-center gap-4">
        <div className="myFocus">
          <UnderLineHeader>My Focus</UnderLineHeader>
          <ul className="list-unstyled px-3 lh-lg">
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
          </ul>
        </div>
        <div className="skillsLevel">
          {skills.map((skill, index) => (
            <SkillLevelBar
              skill={skill.skill}
              level={skill.level}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
