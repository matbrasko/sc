import React from 'react';

const Image = ({ nameClass, path }) => {
  const staticPath = '/sc';
  return (
    <img
      src={`/..${staticPath}/images${path}`}
      className={nameClass ? nameClass : null}
      alt={path}
    />
  );
};
export default Image;
