import React from 'react';
import './SkillLevelBar.scss';

export default function SkillLevelBar({ skill, level }) {
  return (
    <div className="skillContainer bg-white text-black d-flex align-items-stretch rounded-2">
      <span className="skill d-inline-block px-2 py-1  rounded-start ">
        {skill}
      </span>
      <span className="level d-inline-block h-100 w-100">
        <span
          className="py-1 d-inline-block text-end pe-2 rounded-end"
          style={{
            backgroundColor: 'rgb(182, 181, 181)',
            width: `${level}%`,
          }}
        >
          {`${level}%`}
        </span>
      </span>
    </div>
  );
}
