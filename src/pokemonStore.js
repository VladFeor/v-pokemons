// Ваше сховище usePokemonStore

import { defineStore } from 'pinia';

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    pokemons: [],
    nextUrl: ''
  }),
  actions: {
    setPokemons(pokemons) {
      this.pokemons = pokemons;
    },
    async loadPokemons() {
      try {
        // const url = 
        const response = await fetch(this.nextUrl == '' ? 'https://pokeapi.co/api/v2/pokemon?limit=18&offset=0' : this.nextUrl);
        const data = await response.json();
        console.log(data)
        this.setPokemons([...this.pokemons, ...data.results]);
        this.totalPages = Math.ceil(data.count / this.pageSize);
        this.nextUrl = data.next;
      } catch (error) {
        console.error('Error loading pokemons:', error);
      }
    },
  },
});
