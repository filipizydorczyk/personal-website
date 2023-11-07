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
  .badge-container .badge {
    background-color: transparent;
    margin: 0;
    padding: 0 1rem 0.5rem 0;
  }

  .badge-container .badge label {
    display: none;
  }

  .badge-container__wrapper {
    justify-content: center;
  }
}
</style>

<script lang="ts">
export default {
  name: 'BadgeContainer',
}
</script>
