import React from 'react';
import './styles.css';
import Instant from '../../assets/features/undraw_instant_information_re_c5v5.svg';
import Time from '../../assets/features/undraw_time_management_re_tk5w.svg';
import Money from '../../assets/features/undraw_transfer_money_re_6o1h.svg';
import Winner from '../../assets/features/undraw_winners_re_wr1l.svg';
import SimpleCard from '@/components/Cards/Simple/Simple';

export default function SocialProof() {
  const imagesSize = 140;
  return (
    <div className='social-proof d-flex flex-align-center flex-justify-between flex-gap-l'>
      <SimpleCard img={Time} imgSize={imagesSize} text='Gagner du temps' />
      <SimpleCard
        img={Winner}
        imgSize={imagesSize}
        text='Fidéliser tes clients'
      />
      <SimpleCard
        img={Instant}
        imgSize={imagesSize}
        text='Faciliter ton travail'
      />
      <SimpleCard
        img={Money}
        imgSize={imagesSize}
        text='Optimiser tes revenus'
      />
    </div>
  );
}
