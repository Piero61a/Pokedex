'use client';

import React from 'react';
import style from './PokeGrid.module.sass';
import Pokemon from '@/app/interface/Pokemon';
import GetPokemons from '../services/getPokemon';
import { ViewContainer } from '../common/wrappers/ViewContainer/ViewContainer';

interface PokeGrid {
  pokemonList: Pokemon[]
}

const PokeGrid = async ({ pokemonList }: PokeGrid) => {
  return (
    <ViewContainer>
      <div className={style.pokeGrid} id="poke-list">
        <GetPokemons pokemonList={pokemonList} />
      </div>
    </ViewContainer>
  );
};



export default PokeGrid;
