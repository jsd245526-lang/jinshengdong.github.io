# 网站设计蓝图

> 最后更新: 2026-07-06

---

## 当前状态

网站已上线（`jsd245526-lang.github.io/jinshengdong.github.io/`），基于 Next.js + Tailwind + Framer Motion。

核心架构：
- `src/data/content.js` — 中英双语数据层
- Next.js App Router — 三页面（首页/项目/简历）
- GitHub Actions 自动部署

---

## 设计工具调研

### taste-skill (Leonxlnx/taste-skill)
- 46k+ stars，Vercel 赞助
- 13 个模块化 skill，按需取用
- 最相关：`redesign-existing-projects`（改良已有网站）、`design-taste-frontend`（设计方向引擎）
- 三旋钮：VARIANCE / MOTION / DENSITY

### UI UX Pro Max (nextlevelbuilder/ui-ux-pro-max-skill)
- 62.6k+ stars
- 161 条行业推理规则 + 67 种 UI 风格 + 161 套配色方案 + 57 组字体搭配
- 自动生成完整设计系统
- v2.0 智能设计系统生成器

### 参考项目
- Eugene Wang: `eugg/2026-eugene-personal-website` — Bento 网格
- Hay Mar Maw: `rolexstar27/Portfolio` — 同技术栈，Framer Motion
- Awesome Demo: `Srikanta2000/awesome-demo-portfolio` — Canvas 粒子
- Satya Portfolio: `satya00089/portfolio` — CLI 终端

---

## 待办

- [ ] Bento 网格布局改造
- [ ] Hero 粒子背景
- [ ] 项目卡片 3D tilt
- [ ] 细节打磨
- [ ] 终端彩蛋
