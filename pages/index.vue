<template>
  <div class="index-page">
    <TopBar
      background-img="img/code.jpg"
      profile-img="img/profile.jpg"
      name="Filip Izydorczyk"
      email="filip.izydorczyk@protonmail.com"
      linkedin="https://www.linkedin.com/in/filip-izydorczyk-39577a216/"
      github="https://github.com/filipizydorczyk"
      :links="[
        { label: 'About me', href: '/' },
        { label: 'Blog', href: '/articles' },
      ]"
      active="/"
    />
    <div class="page-container">
      <SectionAboutMe />
      <SectionExpirience />
    </div>
  </div>
</template>

<style>
#exp {
  padding-top: 1rem;
}

@media screen and (max-width: 700px) {
  #exp {
    padding-top: 0.5rem;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

// export default Vue.extend({
//   name: 'IndexPage',
// })

export default {};
</script>
