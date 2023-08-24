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
        I absolutely love exploring new technologies and playing around with
        them. Whether it's testing out the latest gadgets or trying my hand at
        coding, I find joy in experimenting. This blog is where I plan to share
        anything cool or exciting I come up with during my tech adventures.
        While I'll be sharing my findings on various platforms, this blog will
        serve as the central hub where everything comes together in one place.
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
// const HOSTNAME = 'https://cms.filipizydorczyk.pl'

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
