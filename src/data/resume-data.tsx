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
      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>本科-软件工程 </span>
        <span>（2017-2021）</span>
      </div> */}
      <ul className="space-y-1 list-disc pl-5">
        <li>熟练掌握HTML5+CSS3，并结合Sass/Less等预处理器进行设计稿还原</li>
        <li>熟练掌握JavaScript并了解其基础原理并结合到日常开发中</li>
        <li>熟练掌握运用ES6、ES7等新特性语法进行高效开发</li>
        <li>熟练使用Vue2全家桶、Vue3全家桶(Vue3+TypeScript+Pinia)进行项目开发，并深入研究过其内部实现（阅读源码）</li>
        <li>熟练掌握 Webpack、Vite对前端工程化有较深的理解和实践</li>
        <li>熟练使用微信开发者工具进行原生微信小程序开发（移动端H5、内嵌WebView）、使用Uniapp进行小程序开发等</li>
        <li>注重前端标准化，独立搭建符合规范的项目脚手架，包括Eslint、Pritter、Stylelint、Husky等规范搭建</li>
        <li>熟悉Node语言、可使用Express、Koa2进行后端开发、熟悉MongoDB、MySQL数据库</li>
        <li>熟悉使用Nginx进行资源反向代理配置、实现负载均衡、动静分离、配置高可用集群</li>
        <li>熟悉Spring、SpringMVC、SpringBoot、SpringSecurity、Spring Data、Hibernate、MyBatis、MyBatis-Plus等常用框架</li>
        <li>熟悉Redis，对底层磁盘以及网络 IO 模型、数据持久化机制、多数据类型缓存应用、高可用机制以及分布式集群实现，主从复制，哨兵机制，分片集群有所了解</li>
        <li>熟悉Linux和Docker，熟悉其常用命令，可独立搭建测试环境和部署项目。</li>

        <li>熟练使用 React 和 React Hooks，了解其内部实现原理（如虚拟 DOM、Fiber 算法）</li>
        <li>熟练使用 React Router 进行前端路由管理，处理单页应用的路由设计</li>
        <li>熟练使用 Redux、React Context 和相关中间件（如 Redux-Saga、Redux-Thunk）进行状态管理</li>
        <li>熟悉 TypeScript 与 React 配合使用，提升开发的类型安全性和可维护性</li>
        <li>熟练掌握 JSX 和组件化开发，理解组件生命周期、函数式组件与类组件的区别</li>
        <li>熟悉 React 性能优化策略，如 memoization、useMemo、useCallback、代码分割等</li>
        <li>熟悉使用 styled-components 和 Emotion 等 CSS-in-JS 库进行样式管理</li>
        <li>熟练掌握 Webpack、Vite 等工具进行前端工程化配置，支持 React 项目的打包与优化</li>
        <li>熟悉 React 的服务端渲染（SSR）技术，如 Next.js 或 Gatsby.js</li>
        <li>熟悉 React 测试框架，使用 Jest 和 React Testing Library 进行单元测试和集成测试</li>
        <li>熟悉使用 Git、GitHub、GitLab 进行团队协作，掌握 GitFlow 等开发流程</li>
        <li>注重前端标准化，使用 ESLint、Prettier、Stylelint 等工具规范代码风格</li>
      </ul>



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
