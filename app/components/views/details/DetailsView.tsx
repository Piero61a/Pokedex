import React from 'react';
import Navbar from '../../layout/navbar/Navbar';
import style from './DetailsView.module.sass';
import Details from '../../cards/details/details/Details';
import Pokemon from '@/app/interface/Pokemon';

interface DetailsViewProps {
  pokemon: Pokemon;
}

const DetailsView = ({ pokemon }: DetailsViewProps) => {
  return (
    <section className={style.detailsContainer}>
      <Navbar />
      <Details pokemon={pokemon} />
    </section>
  );
};

export default DetailsView;
