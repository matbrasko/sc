import React from 'react';
import Image from './image';

const Footer = () => {
  return (
    <>
      <footer className='bg-black'>
        <div className='container flex'>
          <div style={{ minWidth: '62%', paddingRight: 48 }}>
            <h4>About this project</h4>
            <p>
              <i>Sweet City</i> is a project that runs from August to the local
              election in November 2021. Throughout this period, up to 20
              events/meetings/podcasts will take place in and around Aarhus.
              This website gathers information and activities of the project -
              and will be updated continuously.
            </p>

            <p>
              <i>
                After more than a year of political state of emergency, it is
                time to reflect and to dream.
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
              platforms <a href='https://www.frontloberne.dk/'>Frontløberne</a>{' '}
              x{' '}
              <a href='https://ungdomskulturhuset.com/en-gb/home-en/'>
                Ungdomskulturhuset - UKH
              </a>{' '}
              x{' '}
              <a href='https://institutforx.dk/' target='_blank'>
                Institut for X
              </a>
            </h4>
            <div className='flex' style={{ alignItems: 'center' }}>
              <a
                href='https://www.frontloberne.dk/'
                target='_blank'
                className='imagelink large'
              >
                <Image path='/logos/fl.png' nameClass='inverted' />
              </a>
              <a
                href='https://institutforx.dk/'
                target='_blank'
                className='imagelink medium'
              >
                <Image path='/logos/x.png' nameClass='inverted' />
              </a>
              <a
                href='https://ungdomskulturhuset.com/en-gb/home-en/'
                target='_blank'
                className='imagelink medium'
              >
                <Image path='/logos/ukh.jpeg' />
              </a>
            </div>
            <h4>
              supported by <a>Tuborgfondet</a>
            </h4>
            <a href='https://www.tuborgfondet.dk' target='_blank'>
              <Image path='/logos/tf.png' nameClass='imagelink large' />
            </a>
            <h4>
              SWEET CITY, 2021 | illustration and code by{' '}
              <a href='http://anetacamo.github.io'>Aneta Camo</a>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
