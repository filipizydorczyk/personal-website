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
      <p class="article-breadcrumbs">
        <a href="/articles">Articles</a> - {{ $route.query.article }}
      </p>
      <h1 class="article-header">{{ title }}</h1>
      <div v-html="article"></div>
    </div>
  </div>
</template>

<style>
.article-breadcrumbs {
  margin-bottom: 0.25rem;
}

.article-header {
  margin-top: 0;
}
</style>

<script lang="ts">
import Vue from 'vue'

const HOSTNAME = 'http://localhost:3000'
// const HOSTNAME = 'https://cms.filipizydorczyk.pl';

export default Vue.extend({
  name: 'ArticlePage',
  data() {
    return {
      title: '',
      article: '<p>... loading</p>',
    }
  },
  async created() {
    const name = this.$route.query.article
    const article = await fetch(`${HOSTNAME}/api/v1/articles/${name}`)
      .then((res) => res.json())
      .catch(() => '<p>Article was not found...</p>')

    this.title = article.name
    this.article = article.content
  },
})
</script>
