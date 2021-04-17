<template>
  <div id="app">
    <top-bar />
    <div id="phrase">
      Rely On Us
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
  name: 'App',
  components: {
    TopBar,
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
