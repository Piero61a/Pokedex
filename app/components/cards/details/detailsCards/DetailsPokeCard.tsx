import React from 'react';
import style from './DetailsPokeCard.module.sass';
import { Pokemon, Sprites } from '@/app/interface/Pokemon';

interface DetailsPokeCardProps {
  pokemon: Pokemon;
}

const DetailsPokeCard = ({ pokemon }: DetailsPokeCardProps) => {
  return (
    <article className={style.detailsCardContainer}>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <div className={style.miniContainer}>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites?.back_default} alt={pokemon.name} />
      </div>
    </article>
  );
};

export default DetailsPokeCard;
