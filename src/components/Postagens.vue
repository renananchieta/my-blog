<template>
  <v-container>
    <v-responsive class="d-block justify-center">
      <v-row>
        <v-col
          class="ml-15"
          >
          <h1 class="text-h4 font-weight-bold ml-2 mb-5 text-white"><b>{{ tituloBlog }}</b></h1>
        </v-col>
        </v-row>
      <v-row>
        <v-col
          class="ml-15"
          cols="7"
          >
          <v-sheet 
            elevation="12"
            color="white"
            class="pa-2 ml-2" >
            <article>
              <h2 class="text-h2 font-weight-medium mt-5 mb-5 ml-5"><b>{{tituloArtigo}}</b></h2>
              <v-divider class="ma-5"></v-divider>

              <p
                v-if="showResumo"
                class="ml-5 ma-3"
              >{{ resumo }}</p>
              <p
                v-else="showArtigo"
                class="ma-2 ml-5"
              >{{ artigo }}</p>

              <p @click="leiaMais()" class="text-grey-darken-1 ml-5"><b>Leia mais >>></b></p>
              <v-divider class="ma-2"/>
              <span class="ma-2 ml-5">
                Postado por: 
                <v-btn
                @click="irParaPaginaSobreAutor()"
                  variant="text" 
                  density="compact" 
                  color="text-grey-darken-4"
                  >{{ autor }}
                </v-btn>
              </span>
            </article>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet
            class="pa-2"
            color="white"
            elevation="12"
          >
          
          </v-sheet>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import router from '@/router';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

  
  /**
   * Data
   */
  const showResumo = ref(true);
  const showArtigo = ref(false);
  const autor = ref('Renan Anchieta');
  const tituloBlog = ref('Blog do Estagiário');
  const tituloArtigo = ref('Bem vindo ao Blog do Estagiário');
  const resumo = ref('É com muita satisfação que eu aprensento a você o Meu primeiro Blog, o Blog do estagiário. Me chamo Renan, tenho 29 anos e comecei a minha história com a programação muito antes de entrar na faculdade de Análise e Desenvolvimento de Sistemas. ');
  const artigo = ref('É com muita satisfação que eu aprensento a você o Meu primeiro Blog, o Blog do estagiário. Me chamo Renan, tenho 29 anos e comecei a minha história com a programação muito antes de entrar na faculdade de Análise e Desenvolvimento de Sistemas. Tudo começou quando meu irmão entrou para faculdade de Sistemas de Informação e não demorou muito para ele comprar um computador e me apresentar esse incrível mundo da programação. Lá por volta de 2009, quando eu ainda estava no ensino médio, meu irmão chegava tarde da noite e começava a estudar sem parar. Passando de 01:00 am ele ainda estava estudando e diversas vezes ele parava para me explicar tudo que ele estava fazendo. Obviamente eu não entendia nada do que ele me ensinava mas eu ficava fascinado em como ele escrevia aqueles códigos naquela tela branca (que causava dor nos olhos) do NetBeans e conseguia executar altas coisas mirabolantes na minha cabeça. "Como é que isso tá funcionando?" eu me perguntava e ele me explicando sem cansar. Ele sempre foi ótimo em ensinar. Em 2012 finalmente eu entrei para Universidade Federal do Estado do Pará na cidade de Castanhal e foi ali que minha jornada começou. Nesse meio tempo até agora, mais precisamente dia 4 de julho de 2023, mais de 10 anos depois, e depois de ter enfrentado todos os altos e baixos possíveis como: Sair da UFPA de Castanhal, entrar no curso de Engenharia Ambiental no antigo Instituto de Estudos Superiores da Amazônia (IESAM), cursar um semestre de Agronomia na Universidade Federal Rural da Amazônia, trocar para o curso de Engenharia Civil por amar matemática, eu finalmente voltei para a área de Tecnologia da Informação e já na metade do curso de Análise e Desenvolvimento de Sistemas, criei meus trabalhos particulares e vou postar aqui o que eu aprendo no dia a dia do meu atual trabalho (estágio). Aqui vem a cereja do bolo, estagiar no setor de desenvolvimento da Polícia Civil do Estado do Pará já me proporcionol mais conhecimento do que eu poderia sonhar em alcançar sozinho. Quero agradeçar ao meu irmão por ter me mostrado o mundo da programação anos atrás, aos meus colegas de trabalho que me incentivam a sempre melhorar e aprender mais e mais e a minha família que ficou do meu lado nesse tempo todo enquanto eu procurava fazer aquilo que eu amava... E hoje eu encontrei!');
  const listaArtigos = ref([]);
  
  /**
   * Métodos
   */
  
  const irParaPaginaSobreAutor = () => {
    router.push('/sobre');
  }
  const leiaMais = () => {
    showResumo.value = !showResumo.value;
    showArtigo.value = !showArtigo.value;
    console.log('Exibir e esconder!');
  }

</script>
