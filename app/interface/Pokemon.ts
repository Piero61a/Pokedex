export default interface PokemonList {
  name: string;
  url: string;
}

export  interface Pokemon {
  id: number;
  sprites: Sprites;
  height: number;
  name: string;
  weight: number;
  types: Type[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  animated?: Sprites;
}