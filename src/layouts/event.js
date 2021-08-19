import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import events from '../events.json';
import eventTypes from '../event-types.json';

import Quotes from '../components/quotes';
import EventsInLine from '../components/eventsInLine';
import Event from '../components/event';
import MetaTags from '../components/metaTags';

import { slugify } from '../utils/slugify';
import { getCurrentDate } from '../utils/date';

const EventLayout = ({ match }) => {
  let title = match.params.name;
  const event = events.find((event) => slugify(event.name) === title);

  const slug = slugify(event.name);
  const nameLength = event.name.length;

  const eventType = event.type;
  const sameType = events.filter((event) => event.type === eventType);
  const type = eventTypes.find((type) => type.name === eventType);

  const color2 = type.color2;

  const [eventText, setEventText] = useState('');

  var upcoming = [];

  events.map((event) =>
    event.date > getCurrentDate() ? upcoming.push(event) : null
  );

  useEffect(() => {
    import(`../events/${slug}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setEventText(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    console.log(match);
    console.log(event);
  }, []);

  return (
    <>
      <MetaTags name={event.name} description={event.description} />
      <section className='bg-black evtypes'>
        <div className='container-wide center'>
          <div className='flex'>
            <div className='left'>
              <h4 style={{ marginBottom: -20 }}>{event.date}</h4>
              <h4 style={{ marginBottom: -8 }}>{event.location}</h4>
              {event.codename ? null : (
                <h1
                  style={nameLength > 24 ? { fontSize: 60 } : { fontSize: 90 }}
                  className={`shadow-${color2}`}
                >
                  {event.name}
                </h1>
              )}

              <h1 dangerouslySetInnerHTML={{ __html: event.codename }}></h1>
              <p>{event.description}</p>
            </div>
            <Event type={eventType} color='black' nameClass='type-event' />
          </div>
        </div>
      </section>
      <section>
        <h2 className='blue' style={{ textShadow: '5px 5px black' }}>
          About the event
        </h2>
        <ReactMarkdown children={eventText} allowDangerousHtml={true} />
      </section>

      {'quotes' in event && <Quotes quotations={event.quotes} />}

      {upcoming.length > 1 && (
        <EventsInLine color='black' title='Upcoming events' events={upcoming} />
      )}
      <EventsInLine
        color={color2}
        title={`other ${eventType}`}
        events={sameType}
      />
    </>
  );
};
export default EventLayout;
