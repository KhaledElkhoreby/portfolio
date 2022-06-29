import React from 'react';
import OutLineBtn from '../../layout/buttons/OutLineBtn';
import './Cover.scss';

export default function Cover() {
  return (
    <div className="cover">
      <div className="text align-self-center align-self-lg-start">
        <h1 className="display-1 fw-bold">Khaled El-Khoreby</h1>
        <h1>Full Stack Developer</h1>
        <OutLineBtn>Contact Me</OutLineBtn>
      </div>
    </div>
  );
}
