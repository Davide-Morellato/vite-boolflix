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

  <li v-for="(movie, i) in store.movies" :key="i">
    <h2>{{ movie.title }}</h2>
    <p> {{ movie.originalTitle }}</p>
    <span>{{ movie.language }}</span>
    <span> {{ movie.vote }}</span>
  </li>

  <li v-for="(serie, i) in store.tvSeries" :key="i">
    <h2>{{ serie.titleSerie }}</h2>
    <p> {{ serie.originalTitleSerie }}</p>
    <span>{{ serie.languageSerie }}</span>
    <span> {{ serie.voteSerie }}</span>
  </li>

  <!-- <div>
    <ul>
      <li>{{ movie.title }}</li>
      <li>{{ movie.originalTitle }}</li>
      <li>{{ movie.language }}</li>
      <li>{{ movie.vote }}</li>
    </ul>
  </div> -->

  <!-- <div>
    <ul>
      <li>{{ serie.titleSerie }}</li>
      <li>{{ serie.originalTitleSerie }}</li>
      <li>{{ serie.languageSerie }}</li>
      <li>{{ serie.voteSerie }}</li>
    </ul>
  </div> -->
</template>

<style lang="scss" scoped></style>
