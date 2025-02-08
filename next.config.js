/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Next.js 13 之后支持的写法
  trailingSlash: true, // 让导出的 HTML 以 `.html` 结尾
}

module.exports = nextConfig
