import React from 'react';

const Section = ({ children, color, title }) => {
  return (
    <section className={`center bg-${color}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
