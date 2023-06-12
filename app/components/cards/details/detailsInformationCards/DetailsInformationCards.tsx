import React from 'react';
import style from './DetailsInformationCards.module.sass';
import TypeButton from '@/app/components/common/type/TypeButton';
import TypeContainer from '@/app/components/common/wrappers/type/TypeContainer';
import { Pokemon, Type } from '@/app/interface/Pokemon';

interface DetailsInformationCardsProps {
  pokemon: Pokemon;
}

const DetailsInformationCards = ({ pokemon }: DetailsInformationCardsProps) => {
  return (
    <section className={style.informationContainer}>
      <article>
        <div className={style.titleContainer}>
          <h1>{pokemon.name}</h1>
          <TypeContainer>
            {pokemon.types.map(({ type }: Type, index: number) => (
              <TypeButton key={index} type={type.name} />
            ))}
          </TypeContainer>
        </div>
        <div className={style.contentContainer}>
          <div className={style.itemContent}>
            <h2>Pokedex Number</h2>
            <p>{pokemon.id}</p>
            <hr />
          </div>
          <div className={style.itemContent}>
            <h2>Height</h2>
            <p>{pokemon.height}</p>
            <hr />
          </div>
          <div className={style.itemContent}>
            <h2>Weight</h2>
            <p>{pokemon.weight}</p>
            <hr />
          </div>
          <div className={style.itemContent}>
            <h2>Shiny</h2>
            <div>
              <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
              <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DetailsInformationCards;
