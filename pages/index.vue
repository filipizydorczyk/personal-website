<template>
  <div class="index-page">
    <TopBar
      background-img="img/code.jpg"
      profile-img="img/profile.jpg"
      name="Filip Izydorczyk"
      email="filip.izydorczyk@protonmail.com"
      linkedin="https://www.linkedin.com/in/filip-izydorczyk-39577a216/"
      github="https://github.com/filipizydorczyk"
    />
    <div class="index-page__container">
      <section id="about-me">
        <h1>About me!</h1>
        <p>
          Hi! I am Filip and I work as a software developer. I am focused on web
          development, but I enjoy getting out of my comfort zone and trying
          other aspects of IT in my free time. I am fairly interested in low
          level programming and reverse engineering. Not on a professional level
          by any means, but there is something fascinating about this and its
          quite refreshing when I work on web dev 8 hours a day. Professionally,
          I did lots of different frontend and backend jobs. Mostly I work with
          javascript / typescript and Java (specifically using Springboot) but I
          learn new technologies pretty fast, so I am not afraid of trying
          something else every once in a while. If you want more information
          about my experience, at the bottom of the page you can find a list of
          my employers with descriptions of my responsibilities.
        </p>
        <p>
          As my hobby I really enjoy playing video games and making music. You
          can see some of my covers on my instagram and YouTube. There are not
          many of them at the moment, but I am planning to start doing more.
        </p>
        <p>
          If you want to ask me any questions, feel free to reach out via email
          or in DMs on my socials
        </p>
      </section>
      <section id="exp">
        <SectionWithIcon icon="icon/emakina.jpg" header="Emakina / EPAM"
          ><p>
            I continued path of the web developer at
            <a href="https://www.emakina.com/int-en" target="_blank">Emakina</a>
            that was later acquired by
            <a href="https://www.epam.com/" target="_blank">EPAM</a>. Initially,
            I was hired to do frontend work this time, but I had the freedom to
            work on backend as well. As a result, I worked as a fullstack
            developer doing websites and web applications. I used React and
            Vue.js and Java for backend. My responsibilities were fixing bugs,
            creating new features based on Jira tickets, attending dailies,
            grooming sessions and dailies, writing automated unit tests for code
            I wrote, doing code reviews. I did also experience a bit of Azure
            again and worked with MySQL database.
          </p>
        </SectionWithIcon>
        <SectionWithIcon icon="icon/capgemini.svg" header="Capgemini">
          <p>
            Another internship took place in
            <a href="https://www.capgemini.com/us-en/" target="_blank"
              >Capgemini</a
            >
            where I was initially hired with the intention of me doing Java
            development, but I ended up doing frontend using react for an
            internal project. The biggest challenge in here was working with IoT
            for the first time and creating dashboards for the devices based on
            provided documentation. I also did learn a little about cloud
            infrastructure using Azure. Very cool stuff, but it was not
            something I was interested in at the time, so I decided not to
            continue there and look for something else.
          </p>
        </SectionWithIcon>
        <SectionWithIcon icon="icon/sealcode.svg" header="Sealcode">
          <p>
            <a href="https://www.sealcode.it/" target="_blank">Sealcode</a> was
            my first real IT internship. I got there thanks to an internship
            program from my university and after that, I did some contract jobs
            for them since they were happy with my performance. I started
            working with a team on their company
            <a href="https://www.sealcode.it/" target="_blank">website</a>. The
            whole idea was to write responsive components accordingly to the
            designs and then use them on the actual website. The entire website
            was rendered to static html files which resulted with great
            preformance. I worked on other websites in a similar fashion for
            their clients as well. I also worked on
            <a href="https://github.com/sealcode/sealious" target="_blank"
              >sealious</a
            >
            which is their own declarative backend framework. I started with
            fixing bugs to get familiar in a project and then started to doing
            new features as well. This project made me familiar with many
            concepts such as integration tests or CI/CD. Whenever a client
            needed a web app that required some kind of backend, sealious was
            what we were using. They used to use react for single page
            applications but with time, technology was changed to
            <a href="https://hotwired.dev/" target="_blank">hotwire</a> to
            pursue server side rendering.
          </p>
        </SectionWithIcon>
        <SectionWithIcon icon="icon/hobbajt.png" header="Hobbajt">
          <p>
            In <a href="https://hobbajt.pl/" target="_blank">hobbajt</a> I
            actually started as an IT teacher for kids but I quickly started to
            help with their clients websites. It was mainly WordPress. For the
            most part, I was responsible for creating backups and fixing broken
            stuff after updating their extensions. But from time to time there
            were more chalenging tasks as well. Sometimes it was needed to add
            custom css to get UI elements that were not achievable with the
            theme itself and sometimes it was missing functionality that we
            needed to add. If there was no extension matching clients needs, we
            had to add this functionality with either JavaScript or php. We also
            created the entire website from scratch using wordpress with
            Elementor (wordpress extension).
          </p>
          <Badge>
            <span class="inline"><IconWordpress :size="20" /> WordPress </span>
          </Badge>
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
  padding-top: 1rem;
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
    padding-top: 0.5rem;
  }
}

@media screen and (max-width: 510px) {
  #exp {
    padding-top: 0;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
