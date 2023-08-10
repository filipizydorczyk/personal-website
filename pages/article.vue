<template>
  <div class="article-page">
    <TopBar background-img="img/code.jpg" profile-img="img/profile.jpg" name="Filip Izydorczyk"
      email="filip.izydorczyk@protonmail.com" linkedin="https://www.linkedin.com/in/filip-izydorczyk-39577a216/"
      github="https://github.com/filipizydorczyk" :links="[
        { label: 'About me', href: '/' },
        { label: 'Articles', href: '/articles' },
      ]" active="/articles" />
    <div class="page-container">
      <div class="article-info">
        <p class="article-info__breadcrumbs">
          <a href="/articles">Articles</a> - {{ $route.query.article }}
        </p>
        <p v-if="gits" class="article-info__read-on"> <a :href="gits" title="See on gits!" target="_blank" > <IconGithub color="#333" :size="18"/> </a> </p>
      </div>
      <h1 class="article-header">{{ title }}</h1>
      <div v-html="article"></div>
    </div>
  </div>
</template>

<style>
.article-info {
  display: flex;
  justify-content: space-between;
}

.article-info__breadcrumbs,
.article-info__read-on {
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
      gits: '',
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
    this.gits = article.metadata?.related_links?.gits || ''
  },
})
</script>
