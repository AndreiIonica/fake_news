<template>
  <div id="news">
    <div>
      <img :src="imgSrc" alt="news_preview" />
    </div>
    <div id="text">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    description: String,
  },
  mounted() {
    console.log(this.imgSrc);
  },
};
</script>

<style scoped>
/* img {
  height: 200px;
  padding: 0;
}

#news {
  width: 400px;
  display: grid;
  grid-template-columns: 50% 50%;
} */

#news {
  display: grid;
  grid-template-columns: auto auto;
  width: 500px;
}

#text {
  padding-top: 0;
  margin-top: 0;
  padding-left: 5px;
}
p {
  font-size: 0.7rem;
}

img {
  height: 200px;
}
</style>
