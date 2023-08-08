<template>
  <div class="article-feed">
    <div class="article-feed__tiles">
      <ArticleCard
        v-for="article in articles"
        v-bind:key="article.href"
        :title="article.title"
        :href="article.href"
        :thumbnail="article.thumbnail"
        :description="article.description"
      />
    </div>
  </div>
</template>

<style>
.article-feed__tiles {
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}

.article-feed__pagination div {
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  .article-feed__tiles {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 500px) {
  .article-feed__tiles {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
export default {
  name: 'ArticleFeed',
  props: {
    articles: Array,
  },
}
</script>
