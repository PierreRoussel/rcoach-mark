import Image from 'next/image';
import React from 'react';

interface CreateCardProps {
  img: HTMLImageElement;
  link: string;
  linkText: string;
  text: string;
}

export default function CreativeCard({
  img,
  link,
  linkText,
  text,
}: CreateCardProps) {
  return (
    <div className='card-column'>
      <div className='card-details'>
        <div className='card-icons'>
          <Image
            className='light-icon'
            src={img}
            width='80'
            height='80'
            alt='icon'
          />
        </div>
        <h3>
          <a href={link}>{linkText}</a>
        </h3>
        <p>{text}</p>
        <a className='read-more-btn' href={link}>
          <i className='iconoir-fast-arrow-right'></i>
        </a>
      </div>
    </div>
  );
}
