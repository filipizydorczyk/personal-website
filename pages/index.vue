<template>
  <div class="index-page">
    <TopBar :data="topBarData" active="/" />
    <div class="page-container">
      <SectionAboutMe />
      <SectionExpirience />
    </div>
  </div>
</template>

<style>
#exp {
  padding-top: 1rem;
}

@media screen and (max-width: 700px) {
  #exp {
    padding-top: 0.5rem;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import { useStore } from "~/composables/useStore";

// export default Vue.extend({
//   name: 'IndexPage',
// })

export default {
  setup() {
    const { topBarData } = useStore();

    return { topBarData };
  },
};
</script>
