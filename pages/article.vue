<template>
  <div class="article-page">
    <TopBar :data="topBarData" active="/articles" />
    <div class="page-container">
      <div class="article-info">
        <p class="article-info__breadcrumbs">
          <a href="/articles">Articles</a> - {{ $route.query.article }}
        </p>
        <p v-if="gits" class="article-info__read-on">
          <a :href="gits" title="See on gits!" target="_blank">
            <IconGithub color="#333" :size="18" />
          </a>
        </p>
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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "~/composables/useStore";

// const HOSTNAME = 'http://localhost:3000'
const HOSTNAME = "https://cms.filipizydorczyk.pl";

export default {
  setup() {
    const route = useRoute();
    const { topBarData } = useStore();

    const title = ref("");
    const gits = ref("");
    const article = ref("<p>... loading</p>");

    const fetchArticle = async () => {
      const name = route.query.article;
      const response = await fetch(`${HOSTNAME}/api/v1/articles/${name}`)
        .then((res) => res.json())
        .catch(() => "<p>Article was not found...</p>");

      title.value = response.name;
      article.value = response.content;
      gits.value = response.metadata?.related_links?.gits || "";
    };

    onMounted(fetchArticle);

    return { title, gits, article, topBarData };
  },
};
</script>
