<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store: store
    }
  },

  //creo la props per richiamarmi i valori dello store dal MainComponent
  // props:{
  //   movie: {
  //       type: Object
  //   },
  //   serie: {
  //       type: Object
  //   }
  // }
}
</script>

<template>

  <!-- creo un ciclo v-for in cui scorro l'array movies nello store -->
  <li v-for="(movie, i) in store.movies" :key="i">
    <h2>{{ movie.title }}</h2>
    <p> {{ movie.originalTitle }}</p>
    <span>{{ movie.language }}</span>
    <span> {{ movie.vote }}</span>
  </li>

   <!-- creo un ciclo v-for in cui scorro l'array tvSeries nello store -->
  <li v-for="(serie, i) in store.tvSeries" :key="i">
    <h2>{{ serie.titleSerie }}</h2>
    <p> {{ serie.originalTitleSerie }}</p>
    <span>{{ serie.languageSerie }}</span>
    <span> {{ serie.voteSerie }}</span>
  </li>

</template>

<style lang="scss" scoped></style>
