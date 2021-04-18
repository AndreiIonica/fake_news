<template>
  <div id="container">
    <div id="news" :class="correction.length == 0 ? '' : 'wrong'">
      <div>
        <img :src="imgSrc" alt="news_preview" />
      </div>
      <div id="text">
        <a :href="link">{{ title }}</a>
        <p>{{ description }}</p>
      </div>
      <h4>
        {{ correction }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    description: String,
    link: String,
    correction: String,
  },
};
</script>

<style scoped>
#news {
  display: grid;
  grid-template-columns: auto auto;
  width: 500px;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
}

#container {
  padding-bottom: 100px;
  width: 100%;
}

.wrong {
  background: #ffcfda;
}

#text {
  padding-top: 0;
  margin-top: 0;
  padding-left: 5px;
}

h4 {
  color: var(--blue);
  grid-column: 1 / -1;
}

p {
  font-size: 0.7rem;
}

a {
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
  font-style: normal;
}

img {
  /* height: 150px; */
  width: 100%;
}

@media screen and (max-width: 600px) {
  #news {
    width: 300px;
  }
}
</style>
