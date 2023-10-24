<template>
  <div>
    <button @click="this.$router.push('/')">Повернутися</button>
    <h2>Details for Pokemon {{ pokemon ? pokemon.name.toUpperCase() : 'Loading...' }}</h2>
    <ul v-if="pokemon && pokemon.moves && pokemon.moves.length">
      <li v-for="(moves, index) in pokemon.moves" :key="'move' + index">
        <h3>{{ moves.move.name }}   <a :href="moves.move.url" target="_blank">More info</a> </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      pokemon: null
    };
  },
  async mounted() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
      const data = await response.json();
      this.pokemon = data;
      console.log(data)
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  }
};
</script>

<style scoped>
button {
  position: absolute;
  top: 20px;
  left: 20px;
}
ul{
  text-align: center;
  list-style: none;
}
li{
  padding: 10px 20px;
  margin: 0 auto;
  width: 300px;
  border: 1px solid rgba(91, 58, 182, 0.548);
  margin-bottom: 10px;
}
h2 {
  text-align: center;
}
</style>
