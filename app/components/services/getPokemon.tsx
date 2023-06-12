'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PokeCard from '../cards/homeCards/PokeCard';
import { getPokemonById } from '@/app/axios/pokemon';
import PokemonList from '@/app/interface/Pokemon';

interface GetPokemonsProps {
  pokemonList: any[];
}

export default function GetPokemons({ pokemonList }: GetPokemonsProps) {
  const [pagination, setPagination] = useState({ page: 1, limit: 15 });
  const [pokemonListFiltered, setPokemonListFiltered] = useState<PokemonList[]>(
    []
  );

  const [pokemons, setPokemons] = useState<any[]>([]);
  const search = useSearchParams().get('search');

  const { page, limit } = pagination;

  const router = useRouter();

  const getPokemonsByPage = async (
    page: number,
    pokemonsHistory: PokemonList[]
  ) => {
    const offset = (page - 1) * limit;
    const pokemonsByPage = pokemonsHistory.slice(offset, page * limit);

    if (pokemonsByPage.length === 0) return;

    const resPromise = Promise.all(
      pokemonsByPage.map(async ({ url }: any) => {
        const urlSplited = url.split('/');
        const id = urlSplited[urlSplited.length - 2];

        const pokemon = await getPokemonById(id);
        return pokemon;
      })
    );

    resPromise.then((data: any[]) =>
      setPokemons((prev) => (page > 1 ? [...prev, ...data] : data))
    );
  };

  const scrollEvent = (e: any) => {
    const $pokeListElement = document.getElementById(
      'poke-list'
    ) as HTMLDivElement;

    const scrollHeight = e.target?.clientHeight + $pokeListElement.scrollTop;
    const maxScrollHeight = $pokeListElement.scrollHeight;

    if (Math.floor(scrollHeight) > maxScrollHeight - 2) {
      setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  useEffect(() => {
    const $pokeListElement = document.getElementById(
      'poke-list'
    ) as HTMLDivElement;

    $pokeListElement.addEventListener('scroll', scrollEvent);
    return () => $pokeListElement.removeEventListener('scroll', scrollEvent);
  }, []);

  useEffect(() => {
    getPokemonsByPage(page, search ? pokemonListFiltered : pokemonList);
  }, [pagination]);

  useEffect(() => {
    if (search) {
      const filtered = filterPokemonList(pokemonList, search);
      setPokemonListFiltered(filtered);
      setPagination((prev) => ({ ...prev, page: 1 }));
    }
  }, [search]);

  function filterPokemonList(
    pokemonList: PokemonList[],
    search: string
  ): PokemonList[] {
    return pokemonList.filter((pokemon) => {
      const { name, url } = pokemon;
      const nameMatch = name.includes(search);

      if (!isNaN(Number(search))) {
        const regex = /pokemon\/(\d+)\//;
        const match = url.match(regex);
        const numberMatch = match && match[1] ? match[1] === search : false;
        return nameMatch || numberMatch;
      }

      return nameMatch;
    });
  }

  return (
    <>
      {pokemons.map((pokemon, index) => (
        <PokeCard key={index} pokemon={pokemon} />
      ))}
    </>
  );
}
