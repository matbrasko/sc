import React from 'react';
import Image from './image';
import postlist from '../posts.json';
import { slugify } from '../utils/slugify';
import { Link, BrowserRouter } from 'react-router-dom';

const MegaMenu = () => {
  return (
    <div className='container-wide'>
      <div className='flex box-container'>
        {postlist.map((item) =>
          item.menu ? (
            <BrowserRouter basename='/sc'>
              <Link to={slugify(item.title)}>
                <div className='box'>
                  <Image path={`/${slugify(item.title)}.png`} />
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </Link>
            </BrowserRouter>
          ) : null
        )}
      </div>
    </div>
  );
};
export default MegaMenu;
