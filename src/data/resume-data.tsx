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
      <ul className="space-y-4 list-none">
        {/* 基础技能 */}
        <li>
          <p className="font-medium text-gray-900">基础技能：</p>
          <ul className="space-y-1 list-disc pl-5 text-gray-700">
            <li>
              熟练 HTML5 与 CSS3 技术，熟练运用 Flexbox 和 Grid 布局技术，能够实现复杂响应式布局设计，确保在不同浏览器环境下的兼容性，实现高性能的页面渲染效果。
            </li>
            <li>
              深入掌握 Sass 和 Less 预处理器，能够编写模块化、可复用的样式代码，遵循 BEM 命名规范，提升代码的可维护性和可读性，确保大型项目中样式代码的高效管理。
            </li>
            <li>
              深入理解 JavaScript 核心原理，包括事件循环机制、原型链继承体系以及闭包特性等，能够灵活运用 ES6+ 新特性（如箭头函数、模板字符串、解构赋值等），显著提升开发效率和代码质量。
            </li>
            <li>
              熟悉浏览器渲染机制，深入了解 DOM 操作对页面性能的影响，通过优化 DOM 操作方式、合理控制页面布局和样式更新，有效减少页面重绘和回流次数，从而提升页面性能和用户体验。
            </li>
            <li>
              熟悉 Node.js 运行环境，能够使用 Express 框架进行后端服务开发，掌握基础 SQL 语法，能够进行数据库查询、数据插入、更新和删除等操作，具备全栈开发能力。
            </li>
            <li>熟悉 Vue.js 框架相关语法和特性，包括组件化开发、指令系统、数据绑定机制等，了解 Vue 生态系统中的常用工具和插件，能够基于 Vue.js 构建高效、可维护的前端应用。</li>
            <li>熟悉微信小程序原生开发语法和框架结构，掌握 Taro 跨平台框架的使用方法，了解微信小程序的发布流程和规范，能够高效开发和部署微信小程序应用。</li>
          </ul>
        </li>

        {/* React 技术栈 */}
        <li>
          <p className="font-medium text-gray-900">React 技术栈：</p>
          <ul className="space-y-1 list-disc pl-5 text-gray-700">
            <li>
              熟悉 React Router 实现动态路由、嵌套路由，优化路由性能。
            </li>
            <li>
              熟悉 React 性能优化策略，能够运用 memoization 技术（如 React.memo、useMemo 和 useCallback 等）避免不必要的组件重新渲染和重复计算，通过代码分割（Code Splitting）技术优化应用的加载性能，从而显著提升 React 应用的整体运行效率和用户体验。
            </li>
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
              熟练使用 SourceTree 进行 Git 版本控制，熟悉 GitFlow 工作流。
            </li>
          </ul>
        </li>

        {/* 技术热情与开源贡献 */}
        <li>
          <p className="font-medium text-gray-900">技术热情与开源贡献：</p>
          <ul className="space-y-1 list-disc pl-5 text-gray-700">
            <li>热爱技术，积极参与开源项目，年均 GitHub 提交 1000+，持续学习并分享技术知识，为开源社区贡献力量。 </li>
            <li>长期关注掘金、Stack Overflow、DEV Community、Medium 等技术社区，紧跟前沿技术动态，不断拓展技术视野。 </li>
            <li>定期撰写技术博客，分享开发经验和解决方案，通过文字记录和总结技术成长历程。 </li>
          </ul>
        </li>
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
              <li>主导 SCRM PC 端复杂表单页面的开发，优化用户交互体验，提高开发效率</li>
              <li>基于 Taro 框架开发小程序，参考 antd API 封装表格、日期等基础组件，显著提升团队开发效率，减少重复代码量</li>
              <li>与产品经理、后端开发紧密协作，确保项目按时交付，并参与代码评审，提升代码质量。</li>
            </ul>
          </div>

        </>
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
          <hr className="border-gray-200" />
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
