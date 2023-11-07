<template>
  <div class="articles-page">
    <TopBar :data="topBarData" active="/articles" />
    <div class="page-container">
      <SectionBlogIntro />
      <section id="blog-feed">
        <ArticleFeed :articles="articles" />
        <div class="articles-page__pagination">
          <a v-on:click="goFirst"> First </a>
          <a v-on:click="goBack"> Previous </a>
          <a href="#">{{ currentPage }}</a>
          <a v-on:click="goNext"> Next </a>
          <a v-on:click="goLast"> Last </a>
        </div>
      </section>
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
    const page =
      typeof route.query.page === "string" ? Number(route.query.page) : 1;

    const articles = ref([]);
    const currentPage = ref(page || 1);
    const total = ref(1);

    const fetchArticles = async () => {
      const response = await fetch(
        `${HOSTNAME}/api/v1/articles?page=${page || 1}`
      ).then((res) => res.json());

      currentPage.value = response.page;
      total.value = response.pages;
      articles.value = response.content.map((art: Record<string, any>) => ({
        title: art.name,
        thumbnail: art.metadata?.thumbnail,
        href: `/article?article=${art.name}`,
        description: art.metadata?.description,
      }));
    };

    const goLast = () => {
      window.location.href = `/articles?page=${total.value}`;
    };
    const goNext = () => {
      window.location.href = `/articles?page=${
        currentPage.value < total.value ? currentPage.value + 1 : total.value
      }`;
    };
    const goBack = () => {
      window.location.href = `/articles?page=${
        currentPage.value > 1 ? currentPage.value - 1 : currentPage.value
      }`;
    };
    const goFirst = () => {
      window.location.href = "/articles?page=1";
    };

    onMounted(fetchArticles);

    return { articles, topBarData, goLast, goNext, goBack, goFirst };
  },
};
</script>
