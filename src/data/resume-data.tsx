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
  name: "Bartosz Jarocki", // 姓名
  initials: "BJ", // 姓名首字母
  location: "Wrocław, Poland, CET", // 地理位置
  locationLink: "https://www.google.com/maps/place/Wrocław", // 地理位置的链接（例如 Google 地图）
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.", // 简短的个人介绍
  summary: (
    <>
      Frontend-focused Full Stack Engineer specializing in high-performance
      React applications, scalable Node.js services, and real-time collaboration
      systems. Experienced in technical architecture design and remote team
      leadership.
    </>
  ), // 更详细的职业概述
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4", // 头像 URL
  personalWebsiteUrl: "https://jarocki.me", // 个人网站链接
  contact: {
    email: "bartosz.jarocki@hey.com", // 联系邮箱
    tel: "+48530213401", // 联系电话
    social: [
      {
        name: "GitHub", // 社交平台名称
        url: "https://github.com/BartoszJarocki", // GitHub 个人页面链接
        icon: GitHubIcon, // GitHub 图标组件
      },
      {
        name: "LinkedIn", // LinkedIn 名称
        url: "https://www.linkedin.com/in/bjarocki/", // LinkedIn 个人页面链接
        icon: LinkedInIcon, // LinkedIn 图标组件
      },
      {
        name: "X", // X（前 Twitter）名称
        url: "https://x.com/BartoszJarocki", // X 个人页面链接
        icon: XIcon, // X 图标组件
      },
    ], // 社交链接数组
  },
  education: [
    {
      school: "Wrocław University of Technology", // 学校名称
      degree: "Bachelor's Degree in Control systems engineering and Robotics", // 学位
      start: "2007", // 入学年份
      end: "2010", // 毕业年份
    },
  ], // 教育经历数组
  work: [
    {
      company: "Film.io", // 公司名称
      link: "https://film.io", // 公司官网链接
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"], // 技能标签
      title: "Software Architect", // 职位名称
      logo: ConsultlyLogo, // 公司 logo
      start: "2024", // 开始工作年份
      end: null, // 结束工作年份，null 表示当前工作
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
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
          </ul>
        </>
      ), // 职位描述
    },
    {
      company: "Parabol", // 公司名称
      link: "https://parabol.co", // 公司官网链接
      badges: [
        "Remote", 
        "React", 
        "TypeScript", 
        "Node.js", 
        "GraphQL", 
        "Tailwind CSS",
      ], // 技能标签
      title: "Senior Full Stack Developer", // 职位名称
      logo: ParabolLogo, // 公司 logo
      start: "2021", // 开始工作年份
      end: "2024", // 结束工作年份
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
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
          </ul>
        </>
      ), // 职位描述
    },
    {
      company: "Clevertech", // 公司名称
      link: "https://clevertech.biz", // 公司官网链接
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"], // 技能标签
      title: "Lead Android Developer → Full Stack Developer", // 职位名称
      logo: ClevertechLogo, // 公司 logo
      start: "2015", // 开始工作年份
      end: "2021", // 结束工作年份
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ), // 职位描述
    },
    {
      company: "Jojo Mobile", // 公司名称
      link: "https://bsgroup.eu/", // 公司官网链接
      badges: ["On Site", "Android", "Java", "Kotlin"], // 技能标签
      title: "Android Developer → Lead Android Developer", // 职位名称
      logo: JojoMobileLogo, // 公司 logo
      start: "2012", // 开始工作年份
      end: "2015", // 结束工作年份
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ), // 职位描述
    },
    {
      company: "Nokia Siemens Networks", // 公司名称
      link: "https://www.nokia.com", // 公司官网链接
      badges: ["On Site", "C/C++", "LTE", "Agile"], // 技能标签
      title: "C/C++ Developer", // 职位名称
      logo: NSNLogo, // 公司 logo
      start: "2010", // 开始工作年份
      end: "2012", // 结束工作年份
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.", // 职位描述
    },
  ], // 工作经历数组
  skills: [
    "React/Next.js/Remix", // 技能列表
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito", // 项目名称
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"], // 技术栈
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports", // 项目描述
      logo: MonitoLogo, // 项目 logo
      link: {
        label: "monito.dev", // 项目链接文本
        href: "https://monito.dev/", // 项目链接
      },
    },
    {
      title: "Consultly", // 项目名称
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
        "Platform for online consultations with real-time video meetings and scheduling", // 项目描述
      logo: ConsultlyLogo, // 项目 logo
      link: {
        label: "consultly.com", // 项目链接文本
        href: "https://consultly.com/", // 项目链接
      },
    },
    {
      title: "Minimalist CV", // 项目名称
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"], // 技术栈
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub", // 项目描述
      logo: MonitoLogo, // 项目 logo
      link: {
        label: "Minimalist CV", // 项目链接文本
        href: "https://github.com/BartoszJarocki/cv", // 项目链接
      },
    },
  ], // 项目数组
} as const;
