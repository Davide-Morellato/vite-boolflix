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
    logo() {
      const logoImg = `https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`;
      return logoImg;
    },

    //creo una funzione che si colleghi all'url e si prenda come parametri le proprietà presenti in store.js
    getResponseMovies() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: store.api_key,
            query: store.query,
          },
        })
        .then((res) => {
          this.store.movies = [];
          //dichiaro una variabile in cui richiamo l'oggetto data
          const dataMovies = res.data;
          // console.log(dataMovies)

          //dichiaro una variabile in cui richiamo results nei data
          const movieResults = dataMovies.results;
          console.log(movieResults);

          //creo un ciclo for per scorrere results e inserirli nell'array (.push)
          for (let i = 0; i < movieResults.length; i++) {
            //mi prendo il singolo elemento dall'array
            const singleResultMovie = movieResults[i];

            //creo le variabili degli elementi che mi interessano
            const title = singleResultMovie.title;

            const originalTitle = singleResultMovie.original_title;

            const language = singleResultMovie.original_language;

            const vote = singleResultMovie.vote_average;

            const image = singleResultMovie.poster_path;

            const overview = singleResultMovie.overview;

            store.movies.push({
              title,
              originalTitle,
              language,
              vote,
              image,
              overview,
            });
          }
        });
    },

    getResponseSeries() {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: store.api_key,
            query: store.query,
          },
        })
        .then((res) => {
          this.store.tvSeries = [];
          //dichiaro una variabile in cui richiamo l'oggetto data
          const dataSeries = res.data;
          // console.log(dataSeries)

          //dichiaro una variabile in cui richiamo results nei data
          const resultsSeries = dataSeries.results;
          console.log(resultsSeries);

          //creo un ciclo for per scorrere results e inserirli nell'array (.push)
          for (let j = 0; j < resultsSeries.length; j++) {
            //mi prendo il singolo elemento dall'array
            const singleResultSerie = resultsSeries[j];

            //creo le variabili degli elementi che mi interessano
            const nameSerie = singleResultSerie.name;

            const originalNameSerie = singleResultSerie.original_name;

            const languageSerie = singleResultSerie.original_language;

            const voteSerie = singleResultSerie.vote_average;

            const imageSerie = singleResultSerie.poster_path;

            const overviewSerie = singleResultSerie.overviewSerie;

            store.tvSeries.push({
              nameSerie,
              originalNameSerie,
              languageSerie,
              voteSerie,
              imageSerie,
              overviewSerie,
            });
          }
        });
    },

    getResponse() {
      this.getResponseMovies();
      this.getResponseSeries();
    },
  },
};
</script>

<template>
  <header class="header_section">
    <div class="container">
      <div class="row">
        <a href="#" class="logo">
          <img :src="logo()" alt="netflix_logo" />
        </a>
        <div class="links">
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> SerieTv </a>
            </li>
            <li>
              <a href="#"> Films </a>
            </li>
            <li>
              <a href="#"> Originali </a>
            </li>
            <li>
              <a href="#"> Aggiunti di Recente </a>
            </li>
            <li>
              <a href="#"> La mia lista </a>
            </li>
          </ul>
        </div>
        <div class="search">
          <!-- collego il v-model per prendermi il valore inserito e salvarlo nella query dello store -->
          <!-- applico il keyup.enter per la ricerca rilasciando il tasto enter -->
          <input
            type="text"
            placeholder="Cosa vuoi guardare?"
            v-model="store.query"
            @keyup.enter="getResponse()"
          />

          <!-- collego la funzione al button mediante il @click (v-on:click) per la ricerca in base al valore della query -->
          <button class="btn_header" @click="getResponse()">Cerca</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/HeaderComponent";
</style>
