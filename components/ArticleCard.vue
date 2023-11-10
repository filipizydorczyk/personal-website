<template>
  <div :class="`article-card ${hasPadding ? `article-card--with-pading` : ``}`">
    <div class="article-card__content-wraper">
      <div class="article-card__thumbnail">
        <a :href="href">
          <img :src="thumbnail" />
        </a>
      </div>
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
  border-radius: 6px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 40px -23px rgba(191, 191, 191, 1);
  -moz-box-shadow: 0px 0px 40px -23px rgba(191, 191, 191, 1);
  box-shadow: 0px 0px 40px -23px rgba(191, 191, 191, 1);
}

.article-card__thumbnail img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
}

.article-card:hover img {
  scale: 1.1;
}
</style>

<script lang="ts">
export default {
  name: "ArticleCard",
  props: {
    title: String,
    description: String,
    thumbnail: String,
    href: String,
    hasPadding: Boolean,
  },
};
</script>
