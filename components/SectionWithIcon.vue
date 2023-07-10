<template>
  <div class="icon-section">
    <img class="icon-section__main-icon" :src="icon" />
    <div>
      <h2><img class="icon-section__small-icon" :src="icon" /> {{ header }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<style>
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

@media screen and (max-width: 460px) {
  .icon-section {
    margin: 2rem 0;
  }

  .icon-section__main-icon {
    display: none;
  }

  .icon-section__small-icon {
    display: block;
    width: 29px;
    height: 29px;
  }
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
