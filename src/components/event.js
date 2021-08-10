import React, { useState } from 'react';
import { slugify } from '../utils/slugify';

const Event = ({ nameClass, color, type, children, slug }) => {
  const image = `url(../images/events/${slug}.jpg)`;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`ev-container ${nameClass}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className={`${slugify(type)} text`}>{children}</div>
      <div
        className={`inside ${slugify(type)}`}
        style={hovered ? inside(image) : null}
      >
        <img
          src={`/images/${slugify(type)}.png`}
          className={`filter-${color}`}
          alt={slug}
        />
      </div>
    </div>
  );
};

const inside = (image) => ({
  backgroundImage: image,
});

export default Event;
