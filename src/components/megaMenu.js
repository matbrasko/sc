import React from 'react';
import Image from './image';
import eventTypes from '../event-types.json';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

const MegaMenu = ({ open, handleClick }) => {
  return (
    <div
      className={`flex box-container megamenu bg-black ${!open && 'gone'}`}
      onClick={handleClick}
    >
      {eventTypes.map((type) => (
        <Link to={`/${slugify(type.name)}`}>
          <div className='box'>
            <h2>{type.name}</h2>
            <p>{type.short}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default MegaMenu;
