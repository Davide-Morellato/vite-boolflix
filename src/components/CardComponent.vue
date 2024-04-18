<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store: store,
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
    flag(language){

      const flagPath = `/img_flags/${language}.svg`
    
      return flagPath

    },

    //creo una funzione per recuperare il percorso del poster e inserirla nel template
    poster(image){
      const imgPath = `https://image.tmdb.org/t/p/w500/${image}.jpg`
    
      return imgPath
    },

    //creo una funzione che mi arrotondi e dividi il voto
    solStar(vote){
      const votes = Math.floor(vote/2)
      return votes
    },

    //creo una funzione che mi arrotondi, sottrae e dividi il voto
    regStar(vote){
      const regStarVote = parseInt(5 - (Math.floor(vote/2)))
      return regStarVote
    }
  },

}
</script>

<template>

  <li>
    <h1>FILM</h1>
  </li>
  <!-- creo un ciclo v-for in cui scorro l'array movies nello store -->
  <li v-for="(movie, i) in store.movies" :key="i" >
    <div>
      <img :src="poster(movie.image)" alt="">
    </div>

    <h2>{{ movie.title }}</h2>
    <p> {{ movie.originalTitle }}</p>
    <!-- collego le bandiere tramite la props -> :src="`/img_flags/${movie.language}.svg`" -->
    <!-- collego la funzione che mi restituisce la bandiera -->
    <img class="flag" :src="flag(movie.language)" :alt="movie.language">
    <span>
      <font-awesome-icon :icon="['fas', 'star']" v-for="star in solStar(movie.vote)" />
      <font-awesome-icon :icon="['far', 'star']" v-for="star in regStar(movie.vote)" />
    </span>
  </li>

   
   <li>
    <h1>SERIE TV</h1>
   </li>
   <!-- creo un ciclo v-for in cui scorro l'array tvSeries nello store -->
  <li v-for="(serie, i) in store.tvSeries" :key="i" >
    <div>
      <img :src="poster(serie.imageSerie)" alt="">
    </div>
    <h2>{{ serie.nameSerie }}</h2>
    <p> {{ serie.originalNameSerie }}</p>

    <!-- collego le bandiere tramite la props -> :src="`/img_flags/${serie.languageSerie}.svg`" -->
    <!-- collego la funzione che mi restituisce la bandiera -->
    <img class="flag" :src="flag(serie.languageSerie)" :alt="serie.languageSerie">
    
    <span>
      <font-awesome-icon :icon="['fas', 'star']" v-for="star in solStar(serie.voteSerie)"/>
      <font-awesome-icon :icon="['far', 'star']" v-for="star in regStar(serie.voteSerie)"/>
    </span>
  </li>

</template>

<style lang="scss" scoped>
.flag{
  width: 30px;
  height: 15px;
}
</style>
