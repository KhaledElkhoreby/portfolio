import React from 'react';
import Button from '../../layout/buttons/Button';
import './AboutMe.scss';

export default function AboutMe() {
  return (
    <div className="AboutMe row row-cols-1 row-cols-xl-2">
      <h1 className="mb-4 text-center text-xl-start col">About Me</h1>
      <div>
        <p className="lh-lg text-center text-lg-start col">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, sint
          eaque praesentium cumque animi minima autem dolores quia id quisquam
          repellat unde. Quam quasi laudantium dolor, unde veniam esse omnis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          obcaecati, dicta esse expedita ab est enim placeat sed? Corrupti,
          illum sapiente. Cum quos minus saepe accusantium adipisci laudantium
          similique nam.
        </p>
        <a
          href="./Khaled Mohamed El-Khoreby.pdf"
          download="Khaled Mohamed El-khoreby.pdf"
        >
          <Button>Download Resume</Button>
        </a>
      </div>
    </div>
  );
}
