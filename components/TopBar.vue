<template>
  <nav class="top-bar">
    <img class="top-bar__background" :src="data.backgroundImg" />
    <div class="top-bar__container">
      <div class="top-bar__menu">
        <a
          v-for="link in data.links"
          :class="
            active === link.href
              ? 'top-bar__menu-item--active'
              : 'top-bar__menu-item'
          "
          v-bind:key="link.href"
          :href="link.href"
        >
          {{ link.label }}
        </a>
      </div>
      <img class="top-bar__profile" :src="data.profileImg" />
      <div class="top-bar__links">
        <h3>{{ data.name }}</h3>
        <div class="top-bar__link-line">
          <a
            v-if="data.socials.github"
            :href="data.socials.github"
            target="_blank"
          >
            <IconGithub :size="20" />
          </a>
          <a
            v-if="data.socials.linkedin"
            :href="data.socials.linkedin"
            target="_blank"
          >
            <IconLinkedIn :size="20" />
          </a>
          <a
            v-if="data.socials.youtube"
            :href="data.socials.youtube"
            target="_blank"
          >
            <IconYouTube :size="20" />
          </a>
          <a
            v-if="data.socials.instagram"
            :href="data.socials.instagram"
            target="_blank"
          >
            <IconInstagram :size="20" />
          </a>
        </div>
        <div v-if="data.email" class="top-bar__link-line--hover-disabled">
          <a :href="`mailto:${data.email}`">
            <span class="top-bar__link-email-icon">
              <IconEmail :size="20" />
            </span>
            <span class="top-bar__email-address">{{ data.email }}</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.top-bar__menu-item--active {
  font-weight: 600 !important;
  text-decoration: underline;
}

.top-bar__menu {
  padding: 1rem 1.5rem;
}

.top-bar__menu a {
  color: #fff;
  font-size: 1.25rem;
  margin: 0 0.5rem;
  font-weight: 400;
}

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
  top: 220px;
  right: 330px;
}

.top-bar__links h3 {
  color: white;
  margin: 0;
  margin-bottom: 0.25rem;
}

.top-bar__link-line a {
  margin-right: 0.5rem;
  display: inline-block;
  height: 20px;
}

.top-bar__link-line,
.top-bar__link-line--hover-disabled {
  margin-bottom: 0.5rem;
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
  top: 75px;
  right: 2rem;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  object-fit: cover;
}

@media screen and (max-width: 750px) {
  .top-bar__menu {
    padding: 0.5rem;
  }

  .top-bar__menu a {
    font-size: 1rem;
  }

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

<script lang="ts">
import type { PropType } from "vue";

export type TopBarData = {
  backgroundImg: string;
  profileImg: string;
  name: string;
  email: string;
  socials: {
    linkedin: string;
    github: string;
    youtube: string;
    instagram: string;
  };
  links: {
    label: string;
    href: string;
  }[];
};

export default {
  name: "TopBar",
  props: {
    data: { type: Object as PropType<TopBarData>, required: true },
    active: String,
  },
  setup(props) {
    return { data: props.data };
  },
};
</script>
