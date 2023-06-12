import React from 'react';
import style from './DetailsPokeCard.module.sass';
import { Sprites } from '@/app/interface/Pokemon';

interface DetailsPokeCardProps {
  sprites: Sprites;
}

const DetailsPokeCard = ({ sprites }: DetailsPokeCardProps) => {
  return (
    <article className={style.detailsCardContainer}>
      <img src={sprites?.front_default} alt="bulbasaur" />
      <div className={style.miniContainer}>
        <img src={sprites?.front_default} alt="mini-bulbasaur" />
        <img src={sprites?.back_default} alt="mini-bulbasaur" />
      </div>
    </article>
  );
};

export default DetailsPokeCard;
