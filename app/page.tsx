import styles from './page.module.sass';
import Navbar from './components/layout/navbar/Navbar';
import PokeGrid from './components/grid/PokeGrid';
import { getAllPokemons } from './axios/pokemon';
import PokemonList from './interface/Pokemon';

export const getAllPokemonsList = async () => {
  const response = await getAllPokemons();
  return response;
}

export default async function Home() {
  const pokemonList = await getAllPokemonsList() as PokemonList[];

  return (
    <section className={styles.home}>
      <Navbar />
      <PokeGrid pokemonList={pokemonList} />
    </section>
  );
}
