import React, { useState } from 'react';
import Image from '../components/image';

import { slugify } from '../utils/slugify';

const Event = ({ nameClass, color, type, children, slug }) => {
  const image = `url(/images/events/${slug}.jpg)`;
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
        <Image path={`/${slugify(type)}.png`} nameClass={`filter-${color}`} />
      </div>
    </div>
  );
};

const inside = (image) => ({
  backgroundImage: image,
});

export default Event;
