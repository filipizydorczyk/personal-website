<template>
  <div class="badge-container"><slot></slot></div>
</template>

<style>
.badge-container {
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
}

.badge-container .badge {
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 460px) {
  .badge-container {
    justify-content: center;
  }
}
</style>

<script>
export default {
  name: 'BadgeContainer',
}
</script>
