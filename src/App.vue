<script>

//importo i componenti presenti nella cartella components
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

  export default {
    //creo la proprietà components per la configurazione dei componenti nella pagina corrente
    components:{
      HeaderComponent,
      MainComponent
    }
  }

</script>

<template>
  <HeaderComponent />
  <MainComponent />
</template>

<style lang="scss" scoped>

</style>