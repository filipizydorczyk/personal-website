<template>
  <nav class="top-bar">
    <img class="top-bar__background" :src="backgroundImg" />
    <div class="top-bar__container">
      <img class="top-bar__profile" :src="profileImg" />
      <div class="top-bar__links">
        <h3>{{ name }}</h3>
        <div class="top-bar__link-line">
          <a v-if="github" :href="github" target="_blank">
            <IconGithub :size="20" />
          </a>
          <a v-if="linkedin" :href="linkedin" target="_blank">
            <IconLinkedIn :size="20" />
          </a>
        </div>
        <div v-if="email" class="top-bar__link-line--hover-disabled">
          <a :href="`mailto:${email}`">
            <span class="top-bar__link-email-icon">
              <IconEmail :size="20" />
            </span>
            <span class="top-bar__email-address">{{ email }}</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.top-bar__link-email-icon,
.top-bar__email-address {
  vertical-align: middle;
  display: inline-block;
}

.top-bar__email-address {
  font-size: 1rem;
}

.top-bar__links {
  position: absolute;
  top: 240px;
  right: 330px;
}

.top-bar__links h3 {
  color: white;
  margin: 0;
  margin-bottom: 0.25rem;
}

.top-bar__link-line,
.top-bar__link-line--hover-disabled {
  margin-bottom: 0.25rem;
}

.top-bar__link-line svg,
.top-bar__link-line img {
  transition: transform 0.2s;
}

.top-bar__link-line svg:hover,
.top-bar__link-line img:hover {
  transform: scale(1.25);
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
  right: 2rem;
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
    right: 1rem;
  }

  .top-bar__links {
    right: 220px;
  }
}

@media screen and (max-width: 510px) {
  .top-bar__profile {
    right: 0;
    left: 0;
    top: 74px;
    margin-left: auto;
    margin-right: auto;
  }

  .top-bar__links {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    max-width: 300px;
    padding: 0 1rem;
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
    email: String,
    linkedin: String,
    github: String,
  },
}
</script>
