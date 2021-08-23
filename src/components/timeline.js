import React from 'react';
import TimelineSection from './timelineSection';
import { getCurrentDate } from '../utils/date';

const Timeline = ({ events }) => {
  var upcoming = [];
  var passed = [];
  var reversed = false;
  var color = 'white';
  events.map((event) =>
    event.date > getCurrentDate() ? upcoming.push(event) : passed.push(event)
  );
  console.log(getCurrentDate());
  if (upcoming.length % 2 !== 0) {
    reversed = true;
  }

  return (
    <div
      style={{ paddingTop: 80 }}
      className={`center bg-${upcoming.length > 0 ? color : 'black'}`}
    >
      <h2>Timeline</h2>
      {upcoming.length !== 0 && (
        <TimelineSection events={upcoming} color={color} title='timeline' />
      )}
      {passed.length !== 0 && (
        <TimelineSection
          events={passed}
          color='black'
          title='events that have passed'
          reversed={reversed}
        />
      )}
    </div>
  );
};
export default Timeline;
