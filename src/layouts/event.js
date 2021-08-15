import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import events from '../events.json';
import eventTypes from '../event-types.json';

import Quotes from '../components/quotes';
import EventsInLine from '../components/eventsInLine';
import Event from '../components/event';
import MetaTags from '../components/metaTags';

const EventLayout = ({ match }) => {
  console.log(match);
  let title = match.params.name;
  console.log(title);
  const slug = event.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

  const item = events.filter((event) => title === slug);
  console.log('item', item);
  let event = item[0];

  console.log(event);
  const namelength = event.name.length;

  const type = event.type;
  const sameType = events.filter((item) => item.type === type);

  const typeItem = eventTypes.filter((event) => event.name === type);

  const color2 = typeItem[0].color2;

  const [eventText, setEventText] = useState('');

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
                  style={namelength > 24 ? { fontSize: 60 } : { fontSize: 90 }}
                  className={`shadow-${color2}`}
                >
                  {event.name}
                </h1>
              )}

              <h1 dangerouslySetInnerHTML={{ __html: event.codename }}></h1>
              <p>{event.description}</p>
            </div>
            <Event type={type} color='black' nameClass='type-event' />
          </div>
        </div>
      </section>
      <section>
        <h2 className='blue' style={{ textShadow: '5px 5px black' }}>
          About the event
        </h2>
        <ReactMarkdown children={eventText} allowDangerousHtml={true} />
      </section>

      {'quotes' in event ? <Quotes quotations={event.quotes} /> : null}

      <EventsInLine color='black' title='Upcoming events' events={events} />
      <EventsInLine color={color2} title={`other ${type}`} events={sameType} />
    </>
  );
};
export default EventLayout;
