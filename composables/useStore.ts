export const useStore = () => {
  const socials = {
    linkedin: {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/filip-izydorczyk-39577a216/",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/filipizydorczyk",
    },
    youtube: {
      label: "YouTube",
      url: "https://www.youtube.com/@filipizydorczyk8753",
    },
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/filipizydorczyk/",
    },
  };

  const topBarData = {
    backgroundImg: "/img/code.jpg",
    profileImg: "/img/profile.jpg",
    name: "Filip Izydorczyk",
    email: "filip.izydorczyk@protonmail.com",
    socials: {
      youtube: socials.youtube.url,
      instagram: socials.instagram.url,
      github: socials.github.url,
      linkedin: socials.linkedin.url
    },
    links: [
      { label: "About me", href: "/" },
      { label: "Blog", href: "/articles" },
    ],
  };

  return { topBarData, socials };
};
