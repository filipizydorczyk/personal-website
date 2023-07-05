<template>
  <div class="index-page">
    <TopBar backgroundImg="code.jpg" name="Filip Izydorczyk" />
    <section class="index-page__container">
      <h1>About me!</h1>
      <p>
        Hi! I am Filip and I work as software developer. I am focused on web
        development but I enjoy getting out of my comfort zone and trying other
        aspects of IT in my free time. I am fairly intrested in low level
        programming and reverse enginerring. Not on a prefessional level by any
        means but there is something fascinating about this and its quite
        refreshing when I work on web dev 8 hours a day. Proffesionally I did
        lots of diffrent frontend and backend jobs. Mostly I worked with
        javascript / typescript and Java (specifically using Springboot) but I
        learn new technologies pretty fast so I am not afraid trying somehing
        else every once in a while. If you want more information about my
        expirince, on the bottom of the side you can find list of my employers
        with descriptions of my responsibilities
      </p>
      <p>
        As my hobby I really enjoy playing video games and making music. You can
        see some of my covers on my instagram and youtube. There is not much of
        them at the moment but I am planning to start doing more
      </p>
      <p>
        If you want to ask me any question feel free to reach out via email or
        in DMs on my socials
      </p>
    </section>
  </div>
</template>

<style>
.index-page__container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 1rem;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
