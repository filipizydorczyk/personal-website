<template>
  <div class="index-page">
    <TopBar
      background-img="img/code.jpg"
      profile-img="img/profile.jpg"
      name="Filip Izydorczyk"
      email="filip.izydorczyk@protonmail.com"
      linkedin="https://www.linkedin.com/in/filip-izydorczyk-39577a216/"
      github="https://github.com/filipizydorczyk"
    />
    <div class="index-page__container">
      <SectionAboutMe />
      <SectionExpirience />
    </div>
  </div>
</template>

<style>
.index-page__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

#exp {
  padding-top: 1rem;
}

@media screen and (max-width: 750px) {
  .index-page__container {
    padding: 2rem 1rem;
  }
}

@media screen and (max-width: 700px) {
  .index-page__container {
    padding: 2rem 1rem;
  }

  .index-page__container p {
    font-size: 1.125rem;
  }

  #exp {
    padding-top: 0.5rem;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
