<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store: store,
      imgPath: ''  //creo una proprietà per l'assegnazione della bandiera
    }
  },

  //creo la props per richiamarmi la bandiera
  // props:{
  //   flag: {
  //     type: Object
  //   },
  // },

  methods:{
    //creo una funzione per recuperare il percorso della bandiera e inserirla nel template
    flag(flagItem){

      this.imgPath = `/img_flags/${flagItem.language}.svg`
    }
  },

  mounted(){
    this.flag(this.flagItem)
  }
}
</script>

<template>

  <!-- creo un ciclo v-for in cui scorro l'array movies nello store -->
  <li v-for="(movie, i) in store.movies" :key="i">
    <h2>{{ movie.title }}</h2>
    <p> {{ movie.originalTitle }}</p>
    <div>
      <span>{{ movie.language }}</span>
      <!-- collego le bandiere tramite la props -->
      <!-- :src="`/img_flags/${flag.language}.svg`" -->
      <img :src="imgPath" :alt="movie.language">
    </div>
    <span> {{ movie.vote }}</span>
  </li>

   <!-- creo un ciclo v-for in cui scorro l'array tvSeries nello store -->
  <li v-for="(serie, i) in store.tvSeries" :key="i">
    <h2>{{ serie.nameSerie }}</h2>
    <p> {{ serie.originalNameSerie }}</p>
    <div>
      <span>{{ serie.language }}</span>
      <!-- collego le bandiere tramite la props -->
      <!-- :src="`/img_flags/${flag.languageSerie}.svg`" -->
      <img :src="imgPath" :alt="serie.language">
    </div>
    <span> {{ serie.voteSerie }}</span>
  </li>

</template>

<style lang="scss" scoped></style>
