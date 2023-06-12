import React from 'react';
import DetailsPokeCard from '../detailsCards/DetailsPokeCard';
import DetailsInformationCards from '../detailsInformationCards/DetailsInformationCards';
import style from './Details.module.sass'
import { Pokemon } from '@/app/interface/Pokemon';
import { ViewContainer } from '@/app/components/common/wrappers/ViewContainer/ViewContainer';

interface DetailsProps {
  pokemon: Pokemon;
}

const Details = ({ pokemon }: DetailsProps) => {
  return (
    <ViewContainer>
      <div className={style.detailsContainer}>
        <DetailsPokeCard sprites={pokemon?.sprites} />
        <DetailsInformationCards pokemon={pokemon} />
      </div>
    </ViewContainer>
  );
};

export default Details;
