// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import PokemonList from '../components/PokemonList.vue';
import PokemonMain from '../components/PokemonMain.vue';
import PokemonDetail from '../components/PokemonDetails.vue';

const routes = [
    { path: '/', component: PokemonMain },
    { path: '/pokemon/:id', name: 'PokemonDetail', component: PokemonDetail, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;