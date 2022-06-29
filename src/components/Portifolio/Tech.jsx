import React from 'react';
import UnderLineHeader from '../../layout/Headers/UnderLineHeader';
import './Tech.scss';

export default function Tech({ children, dark, header }) {
  let className = 'Teck text-uppercase shadow p-5';
  if (dark) className += ' bg-dark text-light';
  return (
    <div className={className}>
      {header ? <UnderLineHeader>{children}</UnderLineHeader> : children}
    </div>
  );
}
