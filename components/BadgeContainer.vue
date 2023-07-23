<template>
  <div class="badge-container">
    <div class="badge-container__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.badge-container {
  width: 100%;
}

.badge-container__wrapper {
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
}

.badge-container .badge {
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 650px) {
  .badge-container {
    overflow-x: scroll;
  }

  .badge-container__wrapper {
    width: max-content;
  }
}
</style>

<script>
export default {
  name: 'BadgeContainer',
}
</script>
