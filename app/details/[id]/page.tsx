import { FC } from 'react';
import styles from '@/app/page.module.sass';
import { getPokemonById } from '@/app/axios/pokemon';
import DetailsView from '@/app/components/views/details/DetailsView';

const getPokemonByIdSsr = async (id: number) => {
  const pokemon = await getPokemonById(id);
  return pokemon;
}

interface DetailPokemon {
  params: {
    id: string;
  }
}

export default async function DetailPokemon(props: DetailPokemon) {
  const pokemon = await getPokemonByIdSsr(Number(props.params.id));

  return (
    <section className={styles.home}>
      <DetailsView pokemon={pokemon}/>
    </section>
  );
}
