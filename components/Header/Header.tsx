import React from 'react';
import Link from 'next/link';
import Logo from '../../assets/logo.png';
import Image from 'next/image';
import './header.css';
import Button, { ButtonVariant } from '../Button/Button';

export default function Header() {
  return (
    <div className='header d-flex flex-justify-between flex-align-center'>
      <div className='header--inner d-flex flex-align-center'>
        <Link
          href='/'
          className='header--inner_brand d-flex flex-centered flex-gap'
        >
          <Image width={'75'} height={'75'} src={Logo} alt='RCoach' />
        </Link>
        <div className='d-flex flex-align-center flex-gap-l header--inner_links'>
          <Link href='#'>Fonctionnalités</Link>
          <Link href='#'>Comment ça marche</Link>
          <Link href='#'>Tarifs</Link>
          <Link href='/posts/tru'>Blog</Link>
          <Link href='#'>A propos</Link>
        </div>
      </div>
      <div className='d-flex flex-centered flex-gap-l'>
        <Button variant={ButtonVariant.primaryOutline}>Connexion</Button>
        <Button variant={ButtonVariant.primaryGradient}>
          Essayer gratuitement
        </Button>
      </div>
    </div>
  );
}
