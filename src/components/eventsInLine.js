import React from 'react';
import TimelineEvent from './timelineEvent';

const EventsInLine = ({ color, title, events }) => {
  return (
    <section className={`center bg-${color}`}>
      <h2>{title}</h2>
      <div className='flex-wrap flex-center'>
        {events.map(
          (event, index) =>
            index < 3 && (
              <TimelineEvent
                event={event}
                color={color}
                nameClass='carousel-event'
              />
            )
        )}
      </div>
    </section>
  );
};
export default EventsInLine;
