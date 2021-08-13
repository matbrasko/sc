import React from 'react';
import Image from './image';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, number, color }) => {
  return (
    <Link to={`/${slugify(item)}`}>
      <Image path={`/0${number}.png`} />
      <h4 className={`${slugify(item)} ${color}`}>{item}</h4>
    </Link>
  );
};
export default MenuItem;
