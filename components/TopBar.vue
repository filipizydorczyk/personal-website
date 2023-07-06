<template>
  <nav class="top-bar">
    <img class="top-bar__background" :src="backgroundImg" />
    <div class="top-bar__container">
      <img class="top-bar__profile" :src="profileImg" />
      <div class="top-bar__links">
        <h3>{{ name }}</h3>
      </div>
    </div>
  </nav>
</template>

<style>
.top-bar__links {
  position: absolute;
  top: 260px;
  right: 320px;
}

.top-bar__links h3 {
  color: white;
  margin: 0;
}

.top-bar__container {
  position: relative;
  max-width: 1200px;
  height: 300px;
  margin: 0 auto;
  margin-top: -300px;
}

.top-bar__background {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.top-bar__profile {
  position: absolute;
  top: 100px;
  right: 0;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  object-fit: cover;
}

@media screen and (max-width: 750px) {
  .top-bar__profile {
    width: 200px;
    height: 200px;
    top: 150px;
  }

  .top-bar__links {
    right: 220px;
  }
}
</style>

<script>
export default {
  name: 'TopBar',
  props: {
    backgroundImg: String,
    profileImg: String,
    name: String,
  },
}
</script>
