import axios from 'axios';

const $axios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  headers: {
    'Accept': 'application/json',
  }
})

export default $axios;