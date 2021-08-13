import React from 'react';
import Event from './event';

import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const EventTypes = ({ type, description, isEven, color }) => {
  const slug = slugify(type.name);
  return (
    <div className={`flex ${isEven ? 'reversed' : 'null'}`}>
      <Link to={`/${slug}`}>
        <Event type={type.name} color={color} nameClass='type-event'>
          <h2 className={color}>{type.name}</h2>
        </Event>
      </Link>

      <div className={isEven ? 'left' : 'right'}>
        <h3>{type.name}</h3>
        <p>{description}</p>
        <Link to={`/${slug}`}>
          <button className={`btn-${type.color2}`}> upcoming events</button>{' '}
        </Link>
      </div>
    </div>
  );
};
export default EventTypes;
