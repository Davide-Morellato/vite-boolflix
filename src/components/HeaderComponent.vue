<template>
  <div>
    <input type="text" />
    <button></button>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store.js";

export default {
  methods: {
    getResponse() {
      axios.get("https://api.themoviedb.org/3/search/movie"),
        {
          params: {
            query: query,
            api_key: api_key,
          },
        };
    },
  },
};
</script>

<style lang="scss" scoped></style>
