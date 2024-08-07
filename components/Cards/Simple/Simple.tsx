import Image from 'next/image';
import React from 'react';
import '../cards.css';

export default function SimpleCard({
  img,
  imgSize,
  text,
}: {
  img: HTMLImageElement;
  imgSize: number;
  text: string;
}) {
  return (
    <div className='simple-card d-flex flex-align-center flex-gap'>
      <Image height={imgSize} width={imgSize} src={img} alt={text} />
      {text}
    </div>
  );
}
