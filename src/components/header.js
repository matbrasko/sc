import React from 'react';
import Image from './image';
import MenuItem from './menuItem';
import { Link } from 'react-router-dom';

import eventTypes from '../event-types.json';

const Header = () => {
  return (
    <div class='menu flex desktop bg-black'>
      <Link to='/'>
        <Image path='/sweetcity_logo.png' />
        <h4 className='second logo'>Sweet City</h4>
      </Link>
      {eventTypes.map((item, index) => (
        <MenuItem item={item.name} number={index + 1} color={item.color2} />
      ))}
    </div>
  );
};
export default Header;
