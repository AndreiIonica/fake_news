<template>
  <div id="app">
    <top-bar />
    <div id="phrase">
      Rely On Us
      <div id="search-container">
        <input type="text" placeholder="Search.." name="search" v-model="searchString" />
      </div>
    </div>
    <div id="news-container">
      <news
        v-for="(item, index) in news"
        :key="index"
        :imgSrc="item.image"
        :title="item.title"
        :description="item.description"
        :correction="item.correction"
        :link="item.link"
      />
    </div>
    <bottom-bar />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import News from './components/News.vue';
import BottomBar from './components/BottomBar.vue';
import { toateStirile } from './lib/DataManager';

export default {
  name: 'App',
  data() {
    return {
      newsData: [],
      searchString: '',
    };
  },
  computed: {
    news() {
      if (this.searchString === '') return this.newsData;
      const search = this.searchString.toLowerCase();
      // eslint-disable-next-line arrow-parens
      return this.newsData.filter(el => el.title.toLowerCase().includes(search));
    },
  },
  components: {
    TopBar,
    News,
    BottomBar,
  },
  async mounted() {
    this.newsData = await toateStirile();
    for (let i = 0; i < this.newsData.length; i += 1) {
      this.newsData[i].title = this.newsData[i].title.slice(0, 40);
      this.newsData[i].show = true;
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Stoke&display=swap');
:root {
  --blue: #008088;
}
#search-container {
  float: right;
}

body {
  margin: 0;
}
#news-container {
  display: grid;
  grid-template-columns: auto auto;
}

@media screen and (max-width: 600px) {
  #news-container {
    display: block;
  }
}

#phrase {
  color: var(--blue);
  text-align: center;
  font-family: 'Stoke', serif;
  margin: 1%;
  font-size: 1.5rem;
}
</style>
