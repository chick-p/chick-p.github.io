type Site = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export type Author = {
  name: string;
  role: string;
  description: string;
};

export type Media = {
  id: string;
  icon: string;
  url: string;
};

export type Config = {
  site: Site;
  author: Author;
  media: Array<Media>;
};

export const config: Config = {
  site: {
    title: "chick-p.work",
    description: "ポートフォリオサイト",
    url: "https://www.chick-p.work",
    image: "https://www.chick-p.work/img/profile-pic.png",
  },
  author: {
    name: "piyo",
    role: "Technical Writer",
    description: "",
  },
  media: [
    {
      id: "github",
      icon: "fa-brands:github",
      url: "https://github.com/chick-p",
    },
    {
      id: "bluesky",
      icon: "fa6-brands:bluesky",
      url: "https://bsky.app/profile/chick-p.bsky.social",
    },
    {
      id: "twitter",
      icon: "fa6-brands:x-twitter",
      url: "https://twitter.com/_chick_p",
    },
  ],
};
