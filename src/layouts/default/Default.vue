<template>
  <v-app>
    <v-toolbar
    prominent
    color="grey-darken-3"
    >
    <v-toolbar-title><b class="corDeLetra">Blog do Estagiário</b> </v-toolbar-title>
       
    <router-link 
      to="/"
    >
      <span class="corDeLetra ma-2">Postagens </span> 
    </router-link>
    <router-link 
      to="/sobre"
    >
      <span class="corDeLetra ma-2">Sobre o Autor</span>
    </router-link>
    
      <v-spacer></v-spacer>
    <v-btn 
     icon
     @click="consultarApi()"
    >
      <v-icon class="corDeLetra">mdi mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
    <v-main class="gradiente">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
/**
 * Imports
 */
import axios from 'axios';
import { ref } from 'vue';

/**
 * Data
 */
const nomes = ref([]);

/**
 * Methods
 */
const consultarApi = () => {
  axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    nomes.value = response.data.results;
    
    console.log(nomes.value);
  })
  .catch(function(error){
    console.log(error);
  })
  .finally(function(){});
};

</script>

<style>
  .corDeLetra {
    color: rgb(255, 255, 255);
  }
  
  .gradiente{
    background-image: linear-gradient(rgb(46, 46, 46)1% , rgb(255, 255, 255)99%);
  }
</style>