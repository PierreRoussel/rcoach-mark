'use client';
import React from 'react';
import './styles.css';
import Button from '@/components/Button/Button';
import Main from '../../assets/main-rco.png';
import Image from 'next/image';
import Tilty from 'react-tilty';

export default function Hero() {
  return (
    <section className='home-hero d-flex flex-column flex-centered w-100'>
      <div className='d-flex flex-column flex-gap flex-centered'>
        <h1>Le sport intelligent</h1>
        <h2>
          Sportif, coach, pilotez l'entraînement avec l'
          <a href='https://rcoach-app.vercel.app/' className='home-hero--link'>
            application
          </a>{' '}
          et le{' '}
          <a
            href={'https://rcoach-admin-react.vercel.app'}
            className='home-hero--link'
          >
            dashboard
          </a>
          .
        </h2>
        <Button variant='primary-gradient'>
          Essayer gratuitement
          <i className='iconoir-nav-arrow-right'></i>
        </Button>
      </div>
      <Tilty className='hero-image' max={5} scale={1.05}>
        <Image width={1000} height={1000} src={Main} alt='RCoach' />
      </Tilty>
    </section>
  );
}
