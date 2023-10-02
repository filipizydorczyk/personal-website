<template>
  <div :class="`article-card ${hasPadding ? `article-card--with-pading` : ``}`">
    <div class="article-card__content-wraper">
      <a :href="href">
        <img class="article-card__thumbnail" :src="thumbnail" />
      </a>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <a :href="href">Read more</a>
  </div>
</template>

<style>
.article-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-card a {
  font-weight: 600;
  text-decoration: underline;
}

.article-card--with-pading {
  padding: 1rem;
}

.article-card__thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
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
