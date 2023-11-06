<template>
  <div class="articles-page">
    <TopBar :data="topBarData" active="/articles" />
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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "~/composables/useStore";

// const HOSTNAME = 'http://localhost:3000'
const HOSTNAME = "https://cms.filipizydorczyk.pl";

export default {
  setup() {
    const route = useRoute();
    const { topBarData } = useStore();

    const articles = ref([]);
    const currentPage = ref(route.query.page || 1);
    const total = ref(1);

    const fetchArticles = async () => {
      const page = route.query.page;
      const response = await fetch(
        `${HOSTNAME}/api/v1/articles?page=${page || 1}`
      ).then((res) => res.json());

      currentPage.value = response.page;
      total.value = response.pages;
      articles.value = response.content.map((art) => ({
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
