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
  about: "21年本科毕业|男|98年生", // 简短的个人介绍
  summary: (
    <>
      <ul className="space-y-4 list-none">
        {/* 基础技能 */}
        <li>
          <p className="font-medium text-gray-900">基础技能：</p>
          <ul className="space-y-1 list-disc pl-5 text-gray-700">
            <li>熟练 HTML5、CSS3，擅长 Flexbox、Grid 布局，确保跨浏览器兼容性和高性能渲染。</li>
            <li>熟练使用 Sass、Less，遵循 BEM 规范，实现样式代码的模块化与高效管理。</li>
            <li>
              深入理解 JavaScript 核心原理，包括事件循环机制、原型链继承体系以及闭包特性等，能够灵活运用 ES6+ 新特性，显著提升开发效率和代码质量。
            </li>
            <li>熟悉浏览器渲染机制，优化 DOM 操作，减少页面重绘与回流，提升性能。</li>
            <li>掌握 Node.js、Express，熟悉 SQL，具备全栈开发能力。</li>
            <li>熟悉 Vue.js，掌握组件化开发与数据绑定，了解常用生态工具。</li>
            <li>熟悉微信小程序开发，掌握 Taro 跨平台框架，了解发布流程。</li>

          </ul>
        </li>

        {/* React 技术栈 */}
        <li>
          <p className="font-medium text-gray-900">React 技术栈：</p>
          <ul className="space-y-1 list-disc pl-5 text-gray-700">
            <li>
              熟练掌握React全家桶,进行项目开发
            </li>
            <li>掌握 React 性能优化，运用 memoization 技术与代码分割提升效率。</li>
            <li>
              熟悉 Next.js 相关功能，如静态生成、服务端渲染、API 路由等。
            </li>
            <li>
              熟悉 React 生态工具库，如 Redux、Mobx、Zustand、Ant Design、React Router、ahook、dndkit 等。
            </li>
          </ul>
        </li>

        {/* 工程化与工具 */}
        <li>
          <p className="font-medium text-gray-900">工程化与工具：</p>
          <ul className="space-y-1 list-disc pl-5 text-gray-700">
            <li>
              深入掌握 Webpack、Vite，定制化配置优化构建性能。
            </li>
            <li>
              开发 Vite 插件，通过环境变量动态配置 npm run 脚本，实现多环境接口切换。
            </li>

            <li>
              熟练使用 SourceTree 进行 Git 版本控制，熟悉 githubFlow 工作流。
            </li>
          </ul>
        </li>

        {/* 技术热情与开源贡献 */}
        <li>
          <p className="font-medium text-gray-900">技术热情与开源贡献：</p>
          <ul className="space-y-1 list-disc pl-5 text-gray-700">
            <li>热爱技术，积极参与开源项目，年均 GitHub 提交 1000+。</li>
            <li>关注技术社区，紧跟前沿动态，拓展技术视野。</li>
            <li>定期撰写技术博客，分享开发经验与解决方案。</li>
          </ul>
        </li>
      </ul>
    </>
  ), // 更详细的职业概述
  avatarUrl: "", // 头像 URL
  personalWebsiteUrl: "http://muliminty.online/", // 个人网站链接
  contact: {
    email: "muliminty@qq.com", // 联系邮箱
    tel: "18060561205", // 联系电话
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
        <div className="space-y-4">
          {/* 负责运营后台管理系统，和熵基互联项目的维护，独立完成帮助中心的前后端开发 */}
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">
              熵基互联
            </p>
            <p className="text-gray-700">
              熵基互联陪伴中小企业数字化转型，为中小企业提供“场所管理+经营管理”的SaaS云服务，助力企业管理升级和数字化营销。
            </p>
            <p className="text-gray-900 font-medium">我的职责与贡献：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>负责访客模块、运营管理后台及配套小程序的开发维护，主导代码优化和重构工作</li>
              <li>基于 React 技术栈开发新功能，采用模块化组件设计，封装通用业务组件，提升代码复用率 40%+</li>
              <li>与产品、设计团队紧密协作，完成需求评审与方案设计。</li>
            </ul>
          </div>

          {/* 分隔线 */}
          <hr className="border-gray-200" />

          <div className="space-y-2">
            <p className="font-semibold text-gray-900">
              全栈代码生成器（React/Node.js）
            </p>
            <p className="text-gray-700">
              这是一款自主研发的工程效能工具，采用前后端分离架构。前端基于 Vite + React + Ant Design 构建交互系统，后端使用 Node.js + Express + SQLite 实现生成逻辑，并集成 art-template 模板引擎。支持 20 + 种标准代码模板的智能生成与动态编译，有效减少手动编写代码的时间和精力，助力开发人员专注于业务逻辑和核心功能的开发。
            </p>
            <p className="text-gray-900 font-medium">我的职责与贡献：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>独立完成技术预研，把控架构设计全局，完成全部核心代码的开发，并为团队提供内部培训。</li>
              <li>核心生成引擎开发：开发核心生成引擎，通过配置驱动的方式生成数据库实体、RESTful 接口，大幅度提高开发效率。</li>
              <li>可视化配置系统构：构建可视化配置系统，基于 antd Form 实现动态表单渲染，支持动态参数组合配置。</li>
              <li>代码规范制定：根据项目代码规范标准，沉淀最佳实践模板，推动团队代码风格统一，降低维护成本</li>
            </ul>
          </div>
        </div>
      ), // 职位描述
    },
    {
      company: "快商通", // 公司名称
      link: "", // 公司官网链接
      badges: [
        "React",
        "antd",
        "React-Router",
        "mobx",
        "Taro",
        "webpack",
      ], // 技能标签
      title: "前端开发工程师", // 职位名称
      logo: ParabolLogo, // 公司 logo
      start: "2021-6", // 开始工作年份
      end: "2022-10", // 结束工作年份
      description: (
        <div className="space-y-4">
          {/* 见鱼医美私域流量SCRM系统 */}
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">
              快商通 · 见鱼 医美私域流量SCRM系统
            </p>
            <p className="text-gray-700">
              见鱼是一站式解决医美机构引流获客、销售转化、营销复购等难题的 SCRM 系统，涵盖小程序、移动端、PC 端及企微端等多端项目。
            </p>
            <p className="text-gray-900 font-medium">我的职责与贡献：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>主导 SCRM PC 端复杂表单页面的开发，优化用户交互体验，提高开发效率</li>
              <li>基于 Taro 框架开发小程序，参考 antd API 封装表格、日期等基础组件，显著提升团队开发效率，减少重复代码量</li>
              <li>与产品经理、后端开发紧密协作，确保项目按时交付，并参与代码评审，提升代码质量。</li>
            </ul>
          </div>

          {/* 分隔线 */}
          <hr className="border-gray-200" />

          {/* 领鲸电话外呼机器人 */}
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">
              领鲸电话外呼机器人
            </p>
            <p className="text-gray-900 font-medium">项目描述：</p>
            <p className="text-gray-700">
              外呼机器人利用 AI 智能语音合成技术，通过仿真人声进行自动化批量外呼操作。系统可根据客户需求自动判断并回复，实现高效替代人工外呼的效果。
            </p>
            <p className="text-gray-900 font-medium">我的职责与贡献：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>负责客户管理模块及意向标签模块的开发，设计并实现复杂表单及数据结构，提升数据处理效率</li>
              <li>封装动态属性的客户数据增删查改功能，显著提升代码复用性，减少开发时间 25%。</li>
              <li>二次封装 antd Modal 组件，统一项目中的弹窗交互逻辑，降低维护成本，提升开发效率</li>
            </ul>
          </div>

          {/* 分隔线 */}
          {/* <hr className="border-gray-200" /> */}
        </div>
      ), // 职位描述
    }

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
