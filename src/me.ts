import {
  FaGit,
  FaGithub,
  FaNewspaper,
  FaNode,
  FaReact,
  FaZhihu,
} from "react-icons/fa";
import {
  SiC,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "樊旭",
  // Facts are optional
  facts: [
    "你也可以将这个网站作为你的作品集",
    "希望可以找到一个前端的工作",
    "这个网站可以完全用键盘控制",
    "你可以通过点击右上角的图标更改配色方案。",
    "这个网站有深色模式，你可以找找它在哪",
    "对开源充满兴趣，欢迎联系我😊",
  ],
  subtitle: "计算机科学与技术学生",
  tagline: "多媒体大作业 樊旭 1033220115 2024/12/17",
  bigHeading: {
    black: "I create/enjoy",
    blue: "for the web",
  },
  about:
    "一个江苏无锡的大学生，目前想是找到一份前端的实习，欢迎交流前端/开源项目/算法",
  location: "江苏无锡",
  image: "/assets/logo.jpg",
  education: [
    {
      degree: "工学学士",
      major: "计算机科学与技术",
      school: "江南大学",
      graduation: "June 2026",
      awards: [
        "课程：计算机网络，操作系统，离散数学，计算机组成原理，线性代数，编译原理",
      ],
    },
  ],
  experience: [
    {
      company: "ACM算法俱乐部",
      location: "江南大学 无锡",
      position: "作为俱乐部部长兼任俱乐部网站的前端",
      duration: "2024/01 - 2024/12",
      bullets: [
        "负责俱乐部网站的前端开发",
        "使用vite+vue3+typescript+element-plus，通过SEO优化提高了网站的访问量",
        "使用vitepress搭建了俱乐部的文档网站",
      ],
    },
  ],
  projects: [
    {
      name: "docusaurus博客",
      description: "个人的博客网站，使用docusaurus搭建",
      contribution: [
        "使用docusaurus搭建了个人的博客网站，记录了自己的学习经历和生活感悟",
        "，继承了algolia搜索功能和github的评论功能",
      ],
      technologies: ["React", "TypeScript", "Docusaurus", "Algolia"],
      links: [
        {
          name: "Website",
          uri: "https://www.fanxu.online",
        },
      ],
      image: "https://www.fanxu.online/img/logo.webp",
    },
    {
      name: "俱乐部内部论坛",
      description: "ACM算法俱乐部的内部论坛",
      contribution:
        "使用typescript+react+antd搭建了前端，对接了后端的接口，实现了用户的登录注册，文章的增删改查，评论功能，使用了golang搭建了后端，使用docker搭建了部署环境",
      technologies: ["Go", , "React", "TypeScript", "nginx", "docker"],
      links: [],
    },
  ],
  skills: [
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Golang",
      icon: SiGo,
    },
    {
      name: "C",
      icon: SiC,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "Git",
      icon: FaGit,
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "frontend.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/Fanceir",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "知乎",
      icon: FaZhihu,
      uri: "https://www.zhihu.com/people/81-98-85-74",
      hover: {
        bg: ["zhihu.500", "zhihu.700"],
        color: "gray.50",
      },
    },
  ],

  contact: {
    email: "fx_official@outlook.com",
  },
} as IMe;
