import Pokemon from '../interface/Pokemon';
import $axios from "./config";

export const getAllPokemons = async () => {
  const response = await $axios({
    method: "GET",
    params: { limit: 1300 },
  });

  return response.data.results;
};

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  const response = await $axios({
    method: "GET",
    url: `/${id}`,
  });

  return response.data;
};

