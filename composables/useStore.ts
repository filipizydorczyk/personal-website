export const useStore = () => {
  const topBarData = {
    backgroundImg: "/img/code.jpg",
    profileImg: "/img/profile.jpg",
    name: "Filip Izydorczyk",
    email: "filip.izydorczyk@protonmail.com",
    linkedin: "https://www.linkedin.com/in/filip-izydorczyk-39577a216/",
    github: "https://github.com/filipizydorczyk",
    links: [
      { label: "About me", href: "/" },
      { label: "Blog", href: "/articles" },
    ],
  };

  return { topBarData };
};
