import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "/",
    {
      icon: "discover",
      text: "「200OK Working」",
      link: "https://200ok.work",
      children: "structure",
    },
  ],
});
