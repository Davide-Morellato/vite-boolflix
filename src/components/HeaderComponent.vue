<template>
  <div>
    <input type="text" placeholder="inserisci titolo da cercare" />
    <button @click="getResponseButton()">INVIO</button>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store.js";

export default {
  data() {
    return {
      api_key: store.api_key,
      query: store.query,
    };
  },

  methods: {
    getResponseButton() {
      axios.get("https://api.themoviedb.org/3/search/movie", {
        parameters: {
          api_key: this.api_key,
          query: this.query,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
