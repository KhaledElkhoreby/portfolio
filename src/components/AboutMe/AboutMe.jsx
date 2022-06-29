import React from 'react';
import Button from '../../layout/buttons/Button';
import './AboutMe.scss';

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1 className="mb-4 text-center text-lg-start">About Me</h1>
      <div>
        <p className="lh-lg text-center text-lg-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, sint
          eaque praesentium cumque animi minima autem dolores quia id quisquam
          repellat unde. Quam quasi laudantium dolor, unde veniam esse omnis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          obcaecati, dicta esse expedita ab est enim placeat sed? Corrupti,
          illum sapiente. Cum quos minus saepe accusantium adipisci laudantium
          similique nam.
        </p>
        <Button>Download Resume</Button>
      </div>
    </div>
  );
}
