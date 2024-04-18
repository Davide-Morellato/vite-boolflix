<script>
//importo lo store
import { store } from "../store.js";

//importo il componente Card
import CardComponent from "./CardComponent.vue";

export default {
  //collego il componente
  components: {
    CardComponent,
  },

  data() {
    return {
      //richiamo lo store
      store: store,
    };
  },
};
</script>

<template>
  <main class="main_section">
    <section>
      <div class="container">
        <ul class="row">
          <!-- collego il componente card scorrendo l'array movies nello store, e collegandogli la props -->
          <!--  v-for="(movie, i) in store.movies" :key="i" :movie="movie" -->
          <CardComponent />
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/MainComponent";
</style>
