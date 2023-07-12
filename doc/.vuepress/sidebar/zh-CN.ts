import { sidebar } from "vuepress-theme-hope";

export const zhcnSidebar = sidebar({
  "/zh-CN/": [
    "/",
    {
      icon: "discover",
      text: "「尤苏奈尔基本外发(黑塔)」",
      link: "https://www.womi.ltd",
      children: "structure",
    },
  ],
});
