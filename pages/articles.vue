<template>
  <div class="articles-page">
    <TopBar
      background-img="img/code.jpg"
      profile-img="img/profile.jpg"
      name="Filip Izydorczyk"
      email="filip.izydorczyk@protonmail.com"
      linkedin="https://www.linkedin.com/in/filip-izydorczyk-39577a216/"
      github="https://github.com/filipizydorczyk"
    />
    <div class="page-container">
      <h1>My publications</h1>
      <p class="article-page__brief">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <ArticleFeed :articles="articles" />
    </div>
  </div>
</template>

<style>
.articles-page__brief {
    margin-bottom: 2rem;
}
</style>

<script lang="ts">
import Vue from 'vue'

const HOSTNAME = 'http://localhost:3000'
// const HOSTNAME = 'https://cms.filipizydorczyk.pl';

export default Vue.extend({
  name: 'ArticlesPage',
  data() {
    return {
      articles: []
    }
  },
  async created() {
        const name = this.$route.query.article
        const article = await fetch(`${HOSTNAME}/api/v1/articles`)
            .then((res) => res.json())

        this.articles = article.content.map((art: any) => ({ 
            title: art.name, 
            thumbnail: 
            art.metadata?.thumbnail || `${HOSTNAME}/api/v1/media/thn.png`, 
            href: `/article?article=${art.name}`, 
            description: art.metadata?.description 
        }))
    },
})
</script>
