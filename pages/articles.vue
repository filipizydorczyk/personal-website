<template>
  <div class="articles-page">
    <TopBar
      background-img="img/code.jpg"
      profile-img="img/profile.jpg"
      name="Filip Izydorczyk"
      email="filip.izydorczyk@protonmail.com"
      linkedin="https://www.linkedin.com/in/filip-izydorczyk-39577a216/"
      github="https://github.com/filipizydorczyk"
      :links="[
        { label: 'About me', href: '/' },
        { label: 'Articles', href: '/articles' },
      ]"
      active="/articles"
    />
    <div class="page-container">
      <h1>My publications</h1>
      <p class="articles-page__brief">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <ArticleFeed :articles="articles" />
      <div class="articles-page__pagination">
        <a v-on:click="goFirst"> First </a>
        <a v-on:click="goBack"> Previous </a>
        <a href="#">{{ currentPage }}</a>
        <a v-on:click="goNext"> Next </a>
        <a v-on:click="goLast"> Last </a>
      </div>
    </div>
  </div>
</template>

<style>
.articles-page__pagination {
  width: max-content;
  margin: 0 auto;
}

.articles-page__pagination a {
  cursor: pointer;
  margin: 0 0.25rem;
}
</style>

<script>
import Vue from 'vue'

const HOSTNAME = 'http://localhost:3000'
// const HOSTNAME = 'https://cms.filipizydorczyk.pl';

export default Vue.extend({
  name: 'ArticlesPage',
  data() {
    const page = this.$route.query.page
    return {
      articles: [],
      currentPage: Number(page) || 1,
      total: 1,
    }
  },
  methods: {
    goLast() {
      window.location.href = `/articles?page=${this.total}`
    },
    goNext() {
      window.location.href = `/articles?page=${
        this.currentPage < this.total ? this.currentPage + 1 : this.total
      }`
    },
    goBack() {
      window.location.href = `/articles?page=${
        this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
      }`
    },
    goFirst() {
      window.location.href = '/articles?page=1'
    },
  },
  async created() {
    const page = this.$route.query.page
    const article = await fetch(
      `${HOSTNAME}/api/v1/articles?page=${page || 1}`
    ).then((res) => res.json())

    this.currentPage = article.page
    this.total = article.pages
    this.articles = article.content.map((art) => ({
      title: art.name,
      thumbnail: art.metadata?.thumbnail,
      href: `/article?article=${art.name}`,
      description: art.metadata?.description,
    }))
  },
})
</script>
