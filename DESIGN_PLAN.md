# 网站设计优化方案

> 基于 UI UX Pro Max 设计规范审计
> 2026-07-06

---

## 设计意图（Design Read）

Reading this as: 个人开发者作品集 for 招聘方/同行，with a 深色科技风 + 机械工程感 language，leaning toward Next.js + Tailwind + Framer Motion + 克制动画

## 当前状态总览

| 项目 | 状态 |
|------|------|
| 网站上线 | ✅ `jsd245526-lang.github.io/jinshengdong.github.io/` |
| 基础架构 | ✅ Next.js + Tailwind + Framer Motion |
| 中英双语 | ✅ content.js 数据层 |
| 自动部署 | ✅ GitHub Actions |
| 设计工具 | ✅ taste-skill + UI UX Pro Max 已安装 |

---

## UI UX Pro Max 审计发现

按 10 大类规范逐项检查：

### 1. 无障碍性（CRITICAL）
| 检查项 | 现状 | 建议 |
|--------|------|------|
| 对比度 4.5:1 | ✅ 深色主题文字/背景对比度达标 |
| 焦点环 | ⚠️ 有 `focus-visible` 但太弱 | 加粗到 2px，用 `--color-accent` |
| 图片 alt 文本 | ❌ 项目截图没有 alt | 加 alt 属性 |
| 键盘导航 | ✅ tab 顺序基本正常 |

### 2. 触控与交互（CRITICAL）
| 检查项 | 现状 | 建议 |
|--------|------|------|
| 最小触控 44×44px | ✅ 按钮和链接大小达标 |
| loading 反馈 | ❌ 页面切换无 loading 态 | 加 Framer Motion AnimatePresence（已有，但可以增强） |
| 禁用态 | ❌ 语言切换按钮没有 disabled 态 | 当前语言按钮应显示不可点击状态 |

### 3. 性能（HIGH）
| 检查项 | 现状 | 建议 |
|--------|------|------|
| 图片优化 | ❌ 没有 WebP 格式 | 项目截图转 WebP |
| 懒加载 | ❌ 图片没有 `loading="lazy"` | 非首屏图片加 lazy |
| CLS 预留空间 | ⚠️ 项目卡片无固定尺寸 | 图片容器设 `aspect-ratio` |
| 字体加载 | ✅ 用了 `font-display: swap` |

### 4. 风格选择（HIGH）
| 检查项 | 现状 | 建议 |
|--------|------|------|
| emoji 做图标 | ❌ 技能区用了 emoji（🤖⚙️📋📄） | 换成 SVG 图标（Lucide/Heroicons） |
| 风格一致性 | ✅ 全局统一深色+玻璃效果 | 
| 图标风格统一 | ❌ 混用 emoji + CSS 绘制的图标 | 全部统一为 Lucide SVG |

### 5. 布局与响应式（HIGH）
| 检查项 | 现状 | 建议 |
|--------|------|------|
| 移动优先 | ⚠️ 有响应式但感觉像桌面端缩小 | 优化移动端留白和字号 |
| z-index 管理 | ❌ 没有统一 z-index 体系 | 定义 0/10/20/40/100 层级 |
| 固定元素偏移 | ⚠️ 导航栏用了 `pt-16/pt-32` 但不系统 | 统一用 CSS 变量 |
| 容器最大宽度 | ✅ 用了 `max-w-6xl/max-w-4xl` | 
| 水平滚动 | ✅ 无水平滚动问题 |

### 6. 排版与色彩（MEDIUM）
| 检查项 | 现状 | 建议 |
|--------|------|------|
| 字体搭配 | ✅ Inter + JetBrains Mono | 
| 行高 | ✅ 1.6 body | 
| 行长 | ⚠️ 桌面端超过 75 字符（关于我段落） | 限制 `max-w-prose` |
| 色彩语义化 | ✅ 用了 CSS 变量 |
| 暗色模式 | ✅ 全局暗色主题 |

### 7. 动画（MEDIUM）
| 检查项 | 现状 | 建议 |
|--------|------|------|
| 时长 150-300ms | ⚠️ 页面切换 350ms 偏长 | 减到 250ms |
| 缓动函数 | ✅ 用了 `easeInOut` |
| 动画仅限于 transform/opacity | ✅ 用了 Framer Motion |
| 减少动画偏好 | ❌ 没有 `prefers-reduced-motion` 支持 | 加 media query |
| 列表交错入场 | ❌ 项目卡片同时出现 | 加 staggerChildren（30-50ms/项） |
| 弹簧物理 | ❌ 全部用 ease 曲线 | 关键的交互改用 spring |

### 8. 表单与反馈（MEDIUM）
不适用（当前无表单）

### 9. 导航模式（HIGH）
| 检查项 | 现状 | 建议 |
|--------|------|------|
| 当前状态高亮 | ✅ 有 `layoutId` 动画指示器 |
| 导航标签 | ✅ 有文字标签 |
| 返回行为 | ⚠️ Next.js 路由，但无自定义返回逻辑 | 接受现状 |
| 移动端汉堡菜单 | ✅ 有动画汉堡菜单 |

### 10. 图表与数据（LOW）
不适用（当前无图表）

---

## 优化优先级

按 taste-skill 的修复顺序和影响大小排列：

### P0：立刻修（小改动，大效果）
1. **emoji → SVG 图标** — 技能区、获奖区
2. **项目卡片交错入场** — 加 staggerChildren
3. **prefers-reduced-motion** — 一条 media query
4. **z-index 体系** — 定义 4 个层级变量

### P1：本周修（中等改动，体验明显提升）
5. **Bento 网格布局** — 不等大卡片，参考 Eugene Wang
6. **项目卡片 3D tilt** — 鼠标跟随微倾斜
7. **导航栏滚动效果** — 滚动后缩小组件+透明度

### P2：后续迭代
8. **Hero 粒子背景** — Canvas 粒子网络
9. **终端彩蛋** — CLI 交互入口
10. **图片全转 WebP + lazy load**

---

## 两个工具的定位

| | taste-skill | UI UX Pro Max |
|------|------------|--------------|
| 定位 | 设计品味引擎 | 设计知识库 |
| 强项 | 防模板化、打破 AI 审美 | 161 行业规则、67 风格、完整规范 |
| 在本项目中的角色 | 创意方向 + 布局实验 | 审计清单 + 具体规范 |

两者互补：UI UX Pro Max 告诉你"该做什么"，taste-skill 确保"做得不像 AI 模板"。
