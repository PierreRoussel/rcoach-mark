import React from 'react';
import './styles.css';
import Cupcake from '../../assets/undraw_cupcake.svg';
import Smiley from '../../assets/undraw_smiley-face.svg';
import Sneaker from '../../assets/undraw_sneaker.svg';
import Rocket from '../../assets/undraw_rocket.svg';
import Image from 'next/image';
import CreativeCard from '@/components/Cards/Creative/CreativeCard';

export default function OtherFeatures() {
  const imagesSize = 60;
  return (
    <div className='other-features d-flex flex-align-center flex-justify-center flex-gap'>
      <CreativeCard
        img={Cupcake}
        link='#'
        linkText='Nutrition'
        text='On simplifie la nutrition, pas de comptage de calories !'
      />
      <CreativeCard
        img={Smiley}
        link='#'
        linkText='Humeur et énergie'
        text="Le sport et la nutrition ont impact direct sur l'énergie et l'humeur. Mais c'est réciproque, suivez les ressentis quotidien pour avoir une vision complète"
      />
      <CreativeCard
        img={Rocket}
        link='#'
        linkText='Objectifs'
        text='Créez un programme sur 1, 2 ou 3 mois et atteignez vos objectifs grâce à une programmation simple et rapide'
      />
      <CreativeCard
        img={Sneaker}
        link='#'
        linkText='Entraînements'
        text="Faites votre entraînement, validez les séries et le suivi est fait, pas besoin d'autres étapes"
      />
    </div>
  );
}
