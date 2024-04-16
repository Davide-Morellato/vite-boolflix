<template>
  <div>
    <input type="text" placeholder="inserisci titolo da cercare" />
    <!-- collego la funzione al button mediante il @click (v-on:click) -->
    <button @click="getResponseButton()">INVIO</button>
  </div>
</template>

<script>
//importo axios
import axios from "axios";

//importo lo store.js
import { store } from "../store.js";

export default {
  data() {
    return {
      //richiamo le variabili impostate nello store.js
      api_key: store.api_key,
      query: store.query,
    };
  },

  methods: {
  //creo una funzione che si colleghi all'url e si prenda come parametri le proprietà presenti in store.js
    getResponseButton() {
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: this.api_key,
          query: this.query,
        },
      }).then((res) =>{

        //dichiaro una variabile in cui richiamo l'oggetto data
        const data = res.data
        console.log(data)

        //dichiaro una variabile in cui richiamo results nei data
        const results = data.results
        console.log(results)

      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
