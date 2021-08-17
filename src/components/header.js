import React, { useState } from 'react';
import Image from './image';
import MenuItem from './menuItem';
import Hamburger from './hamburger';

import { Link } from 'react-router-dom';

import eventTypes from '../event-types.json';
import MegaMenu from './megaMenu';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div class='menu flex bg-black'>
        <Link to='/'>
          <Image path='/sweetcity_logo.png' />
          <h4 className='second logo'>Sweet City</h4>
        </Link>
        {eventTypes.map((item, index) => (
          <MenuItem item={item} number={index + 1} />
        ))}
        <div className='hamburger mobile' onClick={() => setOpen(!open)}></div>
        <Hamburger open={open} handleClick={() => setOpen(!open)} />
        <MegaMenu open={open} handleClick={() => setOpen(!open)} />
      </div>
    </>
  );
};
export default Header;
