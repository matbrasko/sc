import React from 'react';
import Timeline from '../components/timeline';
import Event from '../components/event';
import MetaTags from '../components/metaTags';

import events from '../events.json';
import eventTypes from '../event-types.json';

import { slugify } from '../utils/slugify';

const Type = ({ match }) => {
  let title = match.path.substring(1);
  const type = eventTypes.find((type) => slugify(type.name) === title);
  const types = events.filter((event) => event.type === type.name);
  const color = 'black';
  return (
    <>
      <MetaTags name={type.name} description={type.description} />
      <section className='bg-black evtypes'>
        <div className='container-wide center'>
          <div className='flex'>
            <Event
              type={type.name}
              color='black'
              nameClass='type-event'
              slug={slugify(type.name)}
            >
              <h1
                style={{ textShadow: 'none', fontSize: 50 }}
                className={color}
              >
                {type.name}
              </h1>
            </Event>

            <div className='right'>
              <h3>{type.name}</h3>
              <p>{type.description}</p>
            </div>
          </div>
        </div>
      </section>
      {types.length > 0 && <Timeline events={types} />}
    </>
  );
};
export default Type;
