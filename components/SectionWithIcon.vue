<template>
  <div class="icon-section">
    <img :src="icon" />
    <div>
      <h2>{{ header }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.icon-section img {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.icon-section h2,
.icon-section p {
  margin: 0;
}

.icon-section p {
  font-size: 1rem;
}

.icon-section {
  display: flex;
  align-items: center;
  margin: 3rem 1rem;
}
</style>

<script>
export default {
  name: 'SectionWithIcon',
  props: {
    icon: String,
    header: String,
  },
}
</script>
