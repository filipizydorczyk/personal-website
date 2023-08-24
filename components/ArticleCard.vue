<template>
  <div :class="`article-card ${hasPadding ? `article-card--with-pading` : ``}`">
    <a :href="href"><img class="article-card__thumbnail" :src="thumbnail" /></a>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <a :href="href">Read more</a>
  </div>
</template>

<style>
.article-card {
  width: 100%;
}

.article-card--with-pading {
  padding: 1rem;
}

.article-card__thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 1.5rem;
  -webkit-box-shadow: 0px 0px 40px -23px rgba(191, 191, 191, 1);
  -moz-box-shadow: 0px 0px 40px -23px rgba(191, 191, 191, 1);
  box-shadow: 0px 0px 40px -23px rgba(191, 191, 191, 1);
}
</style>

<script>
export default {
  name: 'ArticleCard',
  props: {
    title: String,
    description: String,
    thumbnail: String,
    href: String,
    hasPadding: Boolean,
  },
}
</script>
