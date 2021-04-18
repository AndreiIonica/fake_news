<template>
  <div id="bottom-nav">
    <a>
      Surse Sigure
    </a>
    <a>
      AGERPRES
    </a>
    <a>
      DIGI24
    </a>
    <a>
      MEDIAFAX
    </a>
    <a>
      ADEVARUL
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#bottom-nav {
  background: var(--blue);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

a {
  font-family: 'Stoke', serif;
  margin: 1%;
  font-size: 1.25rem;
  color: white;
}

img {
  height: 50px;
}

@media screen and (max-width: 600px) {
  a {
    display: none;
  }
  #info {
    display: block;
  }
}
</style>
