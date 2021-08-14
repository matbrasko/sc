import React from 'react';
import Image from './image';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='container flex'>
        <div style={{ minWidth: '62%', paddingRight: 48 }}>
          <h4>About this project</h4>
          <p>
            <i>Sweet City</i> is a project that runs from August to the local
            election in November 2021. Throughout this period, up to 20
            events/meetings/podcasts will take place in and around Aarhus. This
            website gathers information and activities of the project - and will
            be updated continuously.
          </p>

          <p>
            <i>
              After more than a year of political state of emergency, it is time
              to reflect and to dream.
            </i>
          </p>
          <h4>Contact</h4>
          <p>
            <span className='blue'>Mathias Brander Skovsted</span>
            <br />
            mathias@frontloberne.dk
          </p>
        </div>
        <div>
          <h4>
            Sweet City is developed and run by the Aarhusian youth cultural
            platforms <a href='https://www.frontloberne.dk/'>Frontløberne</a> x{' '}
            <a href='https://ungdomskulturhuset.com/en-gb/home-en/'>
              Ungdomskulturhuset - UKH
            </a>{' '}
            x <a href='https://institutforx.dk/'>Institut for X</a>
          </h4>
          <div className='flex'>
            <Image path='/fl.png' nameClass='inverted' />
            <Image path='/x.png' nameClass='inverted medium' />
            <Image path='/ukh.jpeg' />
          </div>
          <h4>
            supported by <a>Tuborgfondet</a>
          </h4>
          <Image path='/tf.png' nameClass='inverted large' />

          <p>
            <a href='https://www.instagram.com/Clovek_v_tisni/' target='_blank'>
              <i className='fa fa-instagram' aria-hidden='true'></i>
            </a>
            <a href='https://www.facebook.com/clovekvtisni' target='_blank'>
              <i className='fa fa-facebook' aria-hidden='true'></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
