<template>
  <div class="container">
    <h1>Pokemon's</h1>
    <PokemonList :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
  </div>
</template>
  
<script>
import PokemonList from './PokemonList.vue';

export default {
  data: () => {
    return {
      apiUrl: 'https://pokeapi.co/api/v2/pokemon?limit=18&offset=0',
      pokemonUrl: '',
      showDetail: false
    }
  },
  components: {
    PokemonList,
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = '';
      this.showDetail = false;
    }
  }
}
</script>
  
<style  scoped>
h1 {
  text-align: center;
}
</style>