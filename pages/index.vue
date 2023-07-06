<template>
  <div class="index-page">
    <TopBar
      background-img="img/code.jpg"
      profile-img="img/profile.jpg"
      name="Filip Izydorczyk"
    />
    <div class="index-page__container">
      <section id="about-me">
        <h1>About me!</h1>
        <p>
          Hi! I am Filip and I work as software developer. I am focused on web
          development but I enjoy getting out of my comfort zone and trying
          other aspects of IT in my free time. I am fairly intrested in low
          level programming and reverse enginerring. Not on a prefessional level
          by any means but there is something fascinating about this and its
          quite refreshing when I work on web dev 8 hours a day. Proffesionally
          I did lots of diffrent frontend and backend jobs. Mostly I worked with
          javascript / typescript and Java (specifically using Springboot) but I
          learn new technologies pretty fast so I am not afraid trying somehing
          else every once in a while. If you want more information about my
          expirince, on the bottom of the side you can find list of my employers
          with descriptions of my responsibilities
        </p>
        <p>
          As my hobby I really enjoy playing video games and making music. You
          can see some of my covers on my instagram and youtube. There is not
          much of them at the moment but I am planning to start doing more
        </p>
        <p>
          If you want to ask me any question feel free to reach out via email or
          in DMs on my socials
        </p>
      </section>
      <section id="exp">
        <SectionWithIcon icon="icon/emakina.jpg" header="Emakina / EPAM"
          ><p>
            I continued path of web developer at
            <a href="https://www.emakina.com/int-en">Emakina</a>
            that was later aquired by
            <a href="https://www.epam.com/">EPAM</a>. Initially I was hired to
            do frontend work this time but I had a freedom to work on backend as
            well. As a result I worked as fullstack developer doing websites and
            web applications. I used React and Vue.js and Java for backend. My
            responsibilites were fixing bugs, creating new features based on
            Jira tickets, attending at dailies, grooming sessions and dailies,
            writing automated unit tests for code I wrote, doing code reviews. I
            did also expirince a bit of Azure again and worked with MySQL
            database.
          </p>
        </SectionWithIcon>
        <SectionWithIcon icon="icon/capgemini.svg" header="Capgemini">
          <p>
            My another internship took place in Capgemini where I initially were
            hired with intention of me doing Java development but I ended up
            doing frontend using react for internal project. Biggest chalange in
            here was working with IoT for the first time and creating dashboards
            for the devices based on provided documentaion. I also did learn a
            little about cloud infrastructure using Azure. Very cool stuff but
            it was not something I was intrested in at the time so I decided not
            to continue there and look for somehting else.
          </p>
        </SectionWithIcon>
        <SectionWithIcon icon="icon/sealcode.svg" header="Sealcode">
          <p>
            Sealcode was my first real IT internship. I got there thanks to
            internship program from my university and after that I did some
            contract jobs for them since they were happy with my performance. I
            started with working with a team on their company
            <a href="https://www.sealcode.it/">website</a>. Whole idea was to
            write responsive copmonents accordingly to the designs and then use
            them on the actuall website. Whole website was rendered to static
            html files which resulted with great preformance. I worked on other
            websites in a similar fashion for their clients as well. I also
            worked on
            <a href="https://github.com/sealcode/sealious">sealious</a>
            which is their own declarative backend framework. I started with
            fixing bugs to get familiar in a project and then started to doing
            new features as well. This project got me familiar with many
            concepts such as integration tests or CI/CD. Whenever client needed
            web app that required some kind of backend sealious was what we were
            using. They used to use react for single page applications but with
            time techonolgy was changed to
            <a href="https://hotwired.dev/">hotwire</a> to pursue server side
            rendering.
          </p>
        </SectionWithIcon>
        <SectionWithIcon icon="icon/hobbajt.png" header="Hobbajt">
          <p>
            In hobbajt I actually started as a IT teacher for kids but I quickly
            started to help with their clients websites. It was mainly
            wordpress. For the most part I was responsible for creating backups
            and fixing broken stuff after updating their extensions. But from
            time to time there were more chalenging tasks as well. Sometimes it
            was needed to add custom css to get UI elements that were not
            achivable with theme itself and sometimes it was missing
            functionality that we needed to add. If there was no extension
            maching clients needs we had to add this functionality with either
            javascript or php. We also did created entire website from scratch
            using wordpress with Elementor (wordpress extension).
          </p>
        </SectionWithIcon>
      </section>
    </div>
  </div>
</template>

<style>
.index-page__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

#exp {
  padding-top: 2rem;
}

@media screen and (max-width: 750px) {
  .index-page__container {
    padding: 2rem 1rem;
  }
}

@media screen and (max-width: 700px) {
  .index-page__container {
    padding: 2rem 1rem;
  }

  .index-page__container p {
    font-size: 1.125rem;
  }

  #exp {
    padding-top: 1rem;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
