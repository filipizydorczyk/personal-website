<template>
  <div class="badge"><slot></slot></div>
</template>

<style>
.badge {
  width: min-content;
  background-color: #888888;
  padding: 0.5rem 1rem;
  margin: 0;
  border-radius: 1.5rem;
  color: white;
}

.badge svg {
  margin-right: 0.5rem;
}
</style>

<script>
export default {
  name: 'Badge',
}
</script>
