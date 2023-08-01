<template>
  <div class="article-page">
    <TopBar
      background-img="img/code.jpg"
      profile-img="img/profile.jpg"
      name="Filip Izydorczyk"
      email="filip.izydorczyk@protonmail.com"
      linkedin="https://www.linkedin.com/in/filip-izydorczyk-39577a216/"
      github="https://github.com/filipizydorczyk"
    />
    <div class="page-container">
      <p>Articles - {{ $route.query.article }}</p>
      <h1>{{ title }}</h1>
      <div v-html="article"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticlePage',
  data() {
    return {
      title: '',
      article: '',
    }
  },
  async created() {
    const article = await fetch(
      `http://localhost:3000/api/v1/articles/Test`
    ).then((res) => res.json())

    this.title = article.name
    this.article = article.content
  },
})
</script>
