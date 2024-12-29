import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

// 个人简历配置数据
export const RESUME_DATA = {
  name: "郑小强", // 姓名
  initials: "郑", // 姓名首字母
  location: "Xiamen, Fujian", // 地理位置
  locationLink: "", // 地理位置的链接（例如 Google 地图）
  about:
    "希望我们都能保持清醒和有意义的生活😁.", // 简短的个人介绍
  summary: (
    <>
      <div style={{ display: 'flex',justifyContent:'space-between' }}>
        <span>本科-软件工程 </span>
        <span>（2017-2021）</span>
      </div>
      <br />
      我是一名来自厦门的前端开发工程师，热衷于技术创新与产品开发。

      在业余时间，我持续学习并实践前沿编程技术，将其应用到个人项目中，以此实现技术与创意的有机融合，不断提升自己的技术水平和解决问题的能力。
    </>
  ), // 更详细的职业概述
  avatarUrl: "", // 头像 URL
  personalWebsiteUrl: "http://muliminty.online/", // 个人网站链接
  contact: {
    email: "muliminty@qq.com", // 联系邮箱
    tel: "18659730313", // 联系电话
    social: [
      {
        name: "GitHub", // 社交平台名称
        url: "https://github.com/Muliminty", // GitHub 个人页面链接
        icon: GitHubIcon, // GitHub 图标组件
      },
      // {
      //   name: "LinkedIn", // LinkedIn 名称
      //   url: "https://www.linkedin.com/in/bjarocki/", // LinkedIn 个人页面链接
      //   icon: LinkedInIcon, // LinkedIn 图标组件
      // },
      // {
      //   name: "X", // X（前 Twitter）名称
      //   url: "https://x.com/BartoszJarocki", // X 个人页面链接
      //   icon: XIcon, // X 图标组件
      // },
    ], // 社交链接数组
  },
  education: [
    {
      school: "本科-软件工程", // 学校名称
      degree: "", // 学位
      start: "2017", // 入学年份
      end: "2021", // 毕业年份
    },
  ], // 教育经历数组
  work: [
    {
      company: "熵基科技", // 公司名称
      link: "", // 公司官网链接
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"], // 技能标签
      title: "前端开发工程师", // 职位名称
      logo: ConsultlyLogo, // 公司 logo
      start: "2023-3", // 开始工作年份
      end: null, // 结束工作年份，null 表示当前工作
      description: (
        <>
          负责运营后台管理系统，和熵基互联项目的维护，独立完成帮助中心的前后端开发
          {/* <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul> */}
        </>
      ), // 职位描述
    },
    {
      company: "快商通", // 公司名称
      link: "", // 公司官网链接
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ], // 技能标签
      title: "前端开发工程师", // 职位名称
      logo: ParabolLogo, // 公司 logo
      start: "2021-6", // 开始工作年份
      end: "2022-10", // 结束工作年份
      description: (
        <>

          维护外呼机器人 scrm
          {/* <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul> */}
        </>
      ), // 职位描述
    },
    {
      company: "众联世纪", // 公司名称
      link: "", // 公司官网链接
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"], // 技能标签
      title: "前端开发实习", // 职位名称
      logo: ClevertechLogo, // 公司 logo
      start: "2021-3", // 开始工作年份
      end: "2021-6", // 结束工作年份
      description: (
        <>
          维护韭黄挪车码项目
          <ul className="list-inside list-disc">
            <li>
              ...
            </li>

          </ul>
        </>

      ), // 职位描述
    },

  ], // 工作经历数组
  skills: [
    "React/Next.js/Remix", // 技能列表
    "TypeScript",
    "Tailwind CSS",
    "antd Design",
    "Node.js",
    "Express",
    "Vue",

  ],
  projects: [
    {
      title: "home", // 项目名称
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"], // 技术栈
      description:
        "个人主页,点击home查看详情", // 项目描述
      logo: MonitoLogo, // 项目 logo
      link: {
        label: "muliminty", // 项目链接文本
        href: "http://muliminty.online/", // 项目链接
      },
    },
    {
      title: "QuickCode", // 项目名称
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ], // 技术栈
      description:
        "QuickCode 是一个小工具脚本库，旨在提升效率并解决常见问题。", // 项目描述
      logo: ConsultlyLogo, // 项目 logo
      link: {
        label: "QuickCode11", // 项目链接文本
        href: "https://github.com/Muliminty/QuickCode", // 项目链接
      },
    },
    {
      title: "react-idea", // 项目名称
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"], // 技术栈
      description:
        "实现灵感仓库，实现花里胡哨的和有趣的react组件", // 项目描述
      logo: MonitoLogo, // 项目 logo
      link: {
        label: "react-idea", // 项目链接文本
        href: "https://github.com/Muliminty/react-idea", // 项目链接
      },
    },
  ], // 项目数组
} as const;
