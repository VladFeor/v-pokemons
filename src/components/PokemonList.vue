<template>
    <div class="list">
        <article v-for="(pokemon, index) in pokemonStore.pokemons" :key="'poke' + index" @click="goToPokemonDetail(pokemon)">
            <h3>{{ pokemon.name }}</h3>
        </article>
        <div v-if="currentPage < totalPages" ref="infinitescrolltrigger"></div>
        <button @click="next" class="loader" >Load More</button>
    </div>
</template>
  
<script>
import {  onMounted } from 'vue';
import { usePokemonStore } from '../pokemonStore';
export default {
    data() {
        return {
            pokemons: [],
            nextUrl: '',
            currentUrl: ''
        };
    },
    setup() {
        const pokemonStore = usePokemonStore();
        onMounted(async () => {
            await pokemonStore.loadPokemons(); 
        });

        return {
            pokemonStore,
        };
    },
    props: ['apiUrl'],
    
    methods: {
        goToPokemonDetail(pokemon) {
            this.$router.push({ name: 'PokemonDetail', params: { id: pokemon.name }, props: { pokemon } });
        },
        next() {
            this.pokemonStore.loadPokemons()
        }
    },
    created() {
        this.currentUrl = this.apiUrl;
    }
};
</script>
  
  
<style lang="scss" scoped>
.list {
    margin: 0 auto;
    width: 400px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
}

article {
    margin: 0 auto;
    display: flex;
    cursor: pointer;
    width: 120px;
    height: 120px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.158);
    margin-bottom: 50px;
}

.loader {
    width: 500px;
    height: 100px;
    display: block;
}

h3 {
    margin: 0;
}
</style>
  