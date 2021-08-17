import React from 'react';
import Image from './image';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, number }) => {
  return (
    <Link to={`/${slugify(item.name)}`}>
      <Image path={`/0${number}.png`} nameClass='desktop' />
      <h4 className={` ${item.color2} desktop hover-${item.colorHover}`}>
        {item.name}
      </h4>
    </Link>
  );
};
export default MenuItem;
