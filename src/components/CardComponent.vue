<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store: store,
    };
  },

  //creo la props per richiamarmi la bandiera
  // props:{
  //   flag: {
  //     type: Object
  //   },
  // },

  methods: {
    //creo una funzione per recuperare il percorso della bandiera e inserirla nel template
    flag(language) {
      const flagPath = `/img_flags/${language}.svg`;
      return flagPath;
    },

    //creo una funzione per recuperare il percorso del poster e inserirla nel template
    poster(image) {
      const imgPath = `https://image.tmdb.org/t/p/w342/${image}.jpg`;
      return imgPath;
    },

    //creo una funzione che mi arrotondi e dividi il voto
    solStar(vote) {
      const solStarVote = Math.floor(vote / 2);
      return solStarVote;
    },

    //creo una funzione che mi arrotondi, sottrae e dividi il voto
    regStar(vote) {
      const regStarVote = parseInt(5 - Math.floor(vote / 2));
      return regStarVote;
    },
  },
};
</script>

<template>
  <!-- creo un ciclo v-for in cui scorro l'array movies nello store -->
  <li class="col" v-for="(movie, i) in store.movies" :key="i">
    <div>
      <!-- :src="movie.image !== null ? poster(movie.image) : '/not_available/coming-soon.jpg' " -->
      <img class="info" :src="movie.image" :alt="movie.image" />
    </div>
    <div class="hover">
      <div>
        <h4>Titolo: {{ movie.title }}</h4>
      </div>
      <div>
        <h4>Titolo Originale: {{ movie.originalTitle }}</h4>
      </div>
      <div>
        <h4 class="d-inline">Lingua Originale:</h4>
        <!-- collego le bandiere tramite la props -> :src="`/img_flags/${movie.language}.svg`" -->
        <!-- collego la funzione che mi restituisce la bandiera -->
        <img class="flag" :src="flag(movie.language)" :alt="movie.language" />
      </div>
      <div>
        <h4 class="d-inline">Rating:</h4>
        <font-awesome-icon
          class="star_yellow"
          :icon="['fas', 'star']"
          v-for="star in solStar(movie.vote)"
        />
        <font-awesome-icon
          class="star_yellow"
          :icon="['far', 'star']"
          v-for="star in regStar(movie.vote)"
        />
      </div>
      <div>
        <h4>Trama:</h4>
        <p>
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </li>

  <!-- creo un ciclo v-for in cui scorro l'array tvSeries nello store -->
  <li class="col" v-for="(serie, i) in store.tvSeries" :key="i">
    <div>
      <img
        class="info"
        :src="serie.imageSerie !== null ? poster(serie.imageSerie) : '/not_available/coming-soon.jpg'"
        :alt="serie.imageSerie"
      />
    </div>
    <div class="hover">
      <div>
        <h4>Titolo: {{ serie.nameSerie }}</h4>
      </div>
      <div>
        <h4>Titolo Originale: {{ serie.originalNameSerie }}</h4>
      </div>
      <div>
        <h4 class="d-inline">Lingua Originale:</h4>
        <!-- collego le bandiere tramite la props -> :src="`/img_flags/${serie.languageSerie}.svg`" -->
        <!-- collego la funzione che mi restituisce la bandiera -->
        <img
          class="flag"
          :src="flag(serie.languageSerie)"
          :alt="serie.languageSerie"
        />
      </div>
      <div>
        <h4 class="d-inline">Rating:</h4>
        <span>
          <font-awesome-icon
            class="star_yellow"
            :icon="['fas', 'star']"
            v-for="star in solStar(serie.voteSerie)"
          />
          <font-awesome-icon
            class="star_yellow"
            :icon="['far', 'star']"
            v-for="star in regStar(serie.voteSerie)"
          />
        </span>
      </div>
      <div>
        <h4>Trama:</h4>
        <p>
          {{ serie.overviewSerie }}
        </p>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use '../style/partials/CardComponent';
</style>
