import React from 'react';
import './UnderLineHeader.scss';

export default function UnderLineHeader({ children }) {
  return (
    <h4 className="text-uppercase border-bottom border-2 d-inline-block p-3 mb-3">
      {children}
    </h4>
  );
}
