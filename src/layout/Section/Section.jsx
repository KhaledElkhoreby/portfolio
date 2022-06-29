import React from 'react';
import './Section.scss';

export default function Section({ children, dark, fullview }) {
  let className = 'Section';
  if (dark) className += ' bg-dark';
  if (fullview) className += ' min-vh-100';

  return (
    <div className={className}>
      <div className={dark ? 'container text-light' : 'container'}>
        {children}
      </div>
    </div>
  );
}
