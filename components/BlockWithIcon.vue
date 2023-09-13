<template>
  <div class="icon-section">
    <img class="icon-section__main-icon" :src="icon" />
    <div class="icon-section__main-content">
      <h2 class="icon-section__header">
        <img class="icon-section__small-icon" :src="icon" />
        <span>{{ header }}</span>
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.icon-section__main-content {
  width: 100%;
}

.icon-section__main-icon {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.icon-section__small-icon {
  display: none;
}

.icon-section h2 {
  margin: 0.5rem 0;
}
.icon-section p {
  margin: 0;
}

.icon-section p {
  font-size: 1rem;
}

.icon-section {
  display: flex;
  align-items: center;
  margin: 2rem 1rem;
}

@media screen and (max-width: 650px) {
  .icon-section__header {
    display: flex;
  }

  .icon-section {
    margin: 1rem 0;
  }

  .icon-section__main-icon {
    display: none;
  }

  .icon-section__small-icon {
    display: block;
    width: 29px;
    height: 29px;
    margin-right: 1rem;
  }
}
</style>

<script>
export default {
  name: 'BlockWithIcon',
  props: {
    icon: String,
    header: String,
  },
}
</script>
