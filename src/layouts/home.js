import React from 'react';

import Image from '../components/image';
import EventTypes from '../components/eventTypes';
import Timeline from '../components/timeline';
import Quotes from '../components/quotes';

import { Link } from 'react-router-dom';

import eventTypes from '../event-types.json';
import events from '../events.json';

const Home = () => {
  const eventsWithQuotes = events.filter((event) => 'quotes' in event);
  let allquotes = [];
  eventsWithQuotes.map(
    (event) => (allquotes = [...allquotes, ...event.quotes])
  );
  return (
    <>
      <section className='full bg-black flex intro'>
        <div className='intro-bg'></div>
        <div className='container'>
          <h2 className='blue vertical'>11.8.</h2>
          <h1>Sweet City 2021</h1>
          <p>Only by engaging, you can make a change!</p>

          <Image path='/sweetcity_logo.png' nameClass='logo' />
          <div className='boom'>
            <Image path='/boom.png' />
            <h3>mm so yummy!</h3>
          </div>
        </div>
      </section>

      <section className='bg-lightgray center'>
        <div className='container'>
          <h2 className='blue'>About this project</h2>

          <p>
            Sweet City is a project that runs from August to the local election
            in November 2021. Throughout this period, up to 20
            events/meetings/podcasts will take place in and around Aarhus. This
            website gathers information and activities of the project – and will
            be updated continuously.
          </p>
          <p>
            <i>
              After more than a year of political state of emergency, it is time
              to reflect and to dream.
            </i>
          </p>
          <Link to='/about'>
            <button>Read more about</button>
          </Link>
        </div>
      </section>

      <section className='center bg-black evtypes'>
        <h2>Make a change</h2>
        <p>
          Through four different formats, we seek to raise the voice of the
          youth and promote their reality at this vital political time:
        </p>
        <div className='container-wide center'>
          {eventTypes.map((type, index) => (
            <EventTypes
              type={type}
              description={type.short}
              isEven={index % 2 === 0}
              color='black'
            />
          ))}
        </div>
      </section>

      <Timeline events={events} color='white' />
      <Quotes quotations={allquotes} maxSlides={3} />
    </>
  );
};
export default Home;
