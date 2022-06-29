import React from 'react';

export default function OutLineBtn({ children }) {
  return (
    <button className="btn btn-outline-dark text-uppercase py-2 px-5 h1 border-3 border-white text-white">
      {children}
    </button>
  );
}
