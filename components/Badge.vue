<template>
  <div class="badge"><slot></slot></div>
</template>

<style>
.badge * {
  line-height: 100%;
}

.badge {
  width: min-content;
  background-color: #c1c1c1;
  padding: 0.5rem 1rem;
  margin: 0;
  border-radius: 1.5rem;
  color: white;
  font-weight: 700;
}

.badge svg {
  margin-right: 0.5rem;
}
</style>

<script lang="ts">
export default {
  name: 'Badge',
}
</script>
