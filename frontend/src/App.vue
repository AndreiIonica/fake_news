<template>
  <div id="app">
    <top-bar />
    <div id="phrase">
      Rely On Us
    </div>
    <div id="news-container"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './components/TopBar.vue';
import News from './components/News.vue';
import { toateStirile } from './lib/DataManager';

export default {
  name: 'App',
  components: {
    TopBar,
  },
  async mounted() {
    const newsData = await toateStirile();
    console.log(newsData);
    const N = Vue.extend(News);
    for (let i = 0; i < 2; i += 1) {
      new N({
        propsData: {
          imgSrc: 'https://www.timesnewroman.ro/wp-content/uploads/2021/04/rusiinucraina.jpg',
          title: 'Un rus a dat mingea peste gard până în Ucraina. 40.000 de soldaţi, trimişi după ea',
          description: 'Un rus a dat mingea peste gard până în Ucraina. 40.000 de soldaţi, trimişi după ea',
        },
      }).$mount('#news-container');
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Stoke&display=swap');
:root {
  --blue: #008088;
}

body {
  margin: 0;
}

#phrase {
  color: var(--blue);
  text-align: center;
  font-family: 'Stoke', serif;
  margin: 1%;
  font-size: 1.5rem;
}
</style>
