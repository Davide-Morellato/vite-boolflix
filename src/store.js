import { reactive } from "vue";

//creo due variabili in cui definisco la query e l'api_key (dal sito: themoviedb.org )
export const store = reactive({
  api_key: "0b6cbc7537d3c13c1d28e60343ff3ece",
  query: "",

  //creo un array vuoto in cui inserire gli elementi movies dall'axios
  movies: [],

  //creo un array vuoto in cui inserire gli elementi tvseries dall'axios
  tvSeries: []
});
