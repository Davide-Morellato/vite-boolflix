
<script>
//importo axios
import axios from "axios";

//importo lo store.js
import { store } from "../store.js";


export default {
  data() {
    return {
      //richiamo le variabili impostate nello store.js
      // api_key: store.api_key,
      // query: store.query,
      store: store,

    };
  },

  methods: {
  //creo una funzione che si colleghi all'url e si prenda come parametri le proprietà presenti in store.js
    getResponseMovies() {
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: store.api_key,
          query: store.query,
        },
      }).then((res) => {

        //dichiaro una variabile in cui richiamo l'oggetto data
        const dataMovies = res.data
        console.log(dataMovies)

        //dichiaro una variabile in cui richiamo results nei data
        const movieResults = dataMovies.results
        console.log(movieResults)

        //creo un ciclo for per scorrere results e inserirli nell'array (.push)
        for(let i = 0; i < movieResults.length; i++){
          
          //mi prendo il singolo elemento dall'array
          const singleResultMovie = movieResults[i]

          //creo le variabili degli elementi che mi interessano
          const title = singleResultMovie.title;

          const originalTitle = singleResultMovie.original_title;

          const language = singleResultMovie.original_language;

          const vote = singleResultMovie.vote_avarage;

          store.movies.push({title, originalTitle, language, vote})
          
        }
      });
    },

    getResponseSeries() {
      axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: store.api_key,
          query: store.query,
        },
      }).then((res) => {

        //dichiaro una variabile in cui richiamo l'oggetto data
        const dataSeries = res.data
        console.log(dataSeries)

        //dichiaro una variabile in cui richiamo results nei data
        const resultsSeries = dataSeries.results
        console.log(resultsSeries)

        //creo un ciclo for per scorrere results e inserirli nell'array (.push)
        for(let j = 0; j < resultsSeries.length; j++){
          
          //mi prendo il singolo elemento dall'array
          const singleResultSerie = resultsSeries[j]

          //creo le variabili degli elementi che mi interessano
          const nameSerie = singleResultSerie.name;

          const originalNameSerie = singleResultSerie.original_name;

          const language = singleResultSerie.original_language;

          const voteSerie = singleResultSerie.vote_avarage;

          store.tvSeries.push({nameSerie, originalNameSerie, language, voteSerie})
          
        }
      });
    },

    getResponse(){
      this.getResponseMovies()
      this.getResponseSeries()
    }
  },

};
</script>

<template>
  <div>
    <!-- collego il v-model per prendermi il valore inserito e salvarlo nella query dello store -->
    <input type="text" placeholder="inserisci titolo da cercare" v-model="store.query" />

    <!-- collego la funzione al button mediante il @click (v-on:click) per la ricerca in base al valore della query -->
    <button @click="getResponse()">INVIO</button>
  </div>
</template>

<style lang="scss" scoped></style>
