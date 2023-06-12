'use client';
import React from 'react';
import style from './PokeCard.module.sass';
import TypeButton from '../../common/type/TypeButton';
import TypeContainer from '../../common/wrappers/type/TypeContainer';
import Link from 'next/link';

const PokeCard = ({ pokemon }: any) => {
  return (
    <Link href={`/details/${pokemon.id}`} className={style.cardContainer}>
      <h2>{pokemon.name}</h2>
      <span>{pokemon.id}</span>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <TypeContainer>
        {pokemon.types.map((type: any, index: number) => (
          <TypeButton key={index} type={type.type.name} />
        ))}
      </TypeContainer>
    </Link>
  );
};

export default PokeCard;
