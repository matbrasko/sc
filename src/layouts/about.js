import React from 'react';
import events from '../events.json';

const Home = () => {
  const eventsWithQuotes = events.filter((event) => 'quotes' in event);
  let allquotes = [];
  eventsWithQuotes.map(
    (event) => (allquotes = [...allquotes, ...event.quotes])
  );
  return (
    <>
      <section className='bg-lightgray'>
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
          <p>
            Approaching the local elections in November 2021, Sweet City is a
            project that facilitates dialogue and amplifies the dreams and
            criticisms of the Aarhusian youth.
          </p>
          <p>
            In Aarhus, more than 45% of the population are under 30 years old.
            Aarhus is the most youthful city in Denmark. And yet, too many young
            people don’t feel heard and prioritized in the city development and
            the political debate. We are here to change that.
          </p>
          <p>
            Only by engaging, you can make a change. There are many ways to
            shape a better world and in Sweet City we do it by engaging in the
            political debate, by creating new political foras and by talking in
            new ways.
          </p>
        </div>
      </section>
    </>
  );
};
export default Home;
