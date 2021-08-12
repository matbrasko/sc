import React from 'react';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, number, color }) => {
  return (
    <Link to={`/${slugify(item)}`}>
      <img src={`../sc/images/0${number}.png`} alt={item} />
      <h4 className={`${slugify(item)} ${color}`}>{item}</h4>
    </Link>
  );
};
export default MenuItem;
