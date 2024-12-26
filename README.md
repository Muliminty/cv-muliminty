# 简历项目

这是一个简单的 Web 应用程序，能够呈现极简风格的简历，具有适合打印的布局。

使用 Next.js 和 shadcn/ui 构建，部署在 Vercel 上。

# 功能

- 设置仅需几分钟 [单个配置文件](./src/data/resume-data.tsx)
- 使用 Next.js 14、React、TypeScript、Shadcn/ui、TailwindCSS 构建
- 自动生成布局
- 适配各种设备的响应式设计
- 优化 Next.js 和 Vercel 使用

# 本地启动

1. 将此仓库克隆到本地机器：

   ```bash
   git clone https://github.com/Muliminty/cv-muliminty.git
   ```

2. 进入克隆的目录：

   ```bash
   cd cv
   ```

3. 安装依赖项：

   ```bash
   yarn install
   ```

4. 启动本地服务器：

   ```bash
   yarn dev
   ```

5. 打开 [配置文件](./src/data/resume-data.tsx) 并进行更改

# 使用 Docker 运行

构建容器

```
docker compose build
```

运行容器

```
docker compose up -d
```

停止容器

```
docker compose down 
```

# 许可

[MIT](https://choosealicense.com/licenses/mit/)
