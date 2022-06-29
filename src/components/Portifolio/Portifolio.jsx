import React from 'react';
import Tech from './Tech';

export default function Portifolio() {
  return (
    <div>
      <h1 className="mb-5 text-center text-lg-start">Portifolio</h1>
      <div className="d-flex flex-wrap justify-content-around gap-4">
        <Tech header>Web design</Tech>
        <Tech header dark>
          mobile design
        </Tech>
        <Tech header>logo Design</Tech>
        <Tech header dark>
          Web application development
        </Tech>
        <Tech header>Web application development</Tech>
        <Tech header dark>
          Web application development
        </Tech>
      </div>
    </div>
  );
}
