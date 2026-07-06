# 网站设计审计 & 改良计划

> 基于 taste-skill `redesign-existing-projects` 审计清单
> 
> -----------(1 年前的内容)-----------
> 
> 分析日期: 2026-07-06
> 设计方案: taste-skill + Eugene Wang Bento Grid + Hay Mar Maw glassmorphism
> 
> ## 第一步设计审计结论
> 
> ### 设计意图（Design Read）
> 个人作品集网站 / 面向招聘方 / "深色科技风 + 机械工程感" / Next.js + Tailwind + Framer Motion
> 
> 三旋钮设定: DESIGN_VARIANCE=6 / MOTION_INTENSITY=5 / VISUAL_DENSITY=4
> 
> ### audit-checklist 已识别的具体问题
> 
> | 类别 | 问题描述 | 位置 |
> |------|---------|------|
> | **Layout** | 3 个项目卡片是等大网格（grid-cols-3），应改为 Bento 不# 网站前端改版计划

> 最后更新: 2026-07-06
> 来源: taste-skill 设计审计 + GitHub 前端项目调研

---

## 设计意图

```
Reading this as: 个人开发者作品集 for 招聘方/同行,
with a 深色科技风 + 机械工程感 language,
leaning toward Next.js + Tailwind + Framer Motion + 克制动画
```

**三旋钮设定**：

| 旋钮 | 值 | 含义 |
|------|-----|------|
| DESIGN_VARIANCE | 6 | 略微不对称，不追求完全居中 |
| MOTION_INTENSITY | 5 | 有动画但不喧宾夺主 |
| VISUAL_DENSITY | 4 | 留白充足，信息层次分明 |

---

## 审计发现的问题

对照 taste-skill `redesign-existing-projects` 的审计清单，逐项检查：

### ✅ 已经做对了的

| 项目 | 状态 |
|------|------|
| 不是纯黑白（`#0a0a0f` 不是 `#000`） | ✅ |
| 有 Inter + JetBrains Mono 双字体 | ✅ |
| 有 hover 状态 | ✅ |
| 有 Framer Motion 页面切换动画 | ✅ |
| 用了 CSS 变量统一管理颜色 | ✅ |
| 有玻璃拟态（glass-card） | ✅ |

### ❌ 需要改的

| 类别 | 问题 | 什么文件 |
|------|------|---------|
| **1. 字体层级** | 全文只用了一种 Inter，缺少标题和正文的视觉区分 | globals.css |
| **2. 布局单调** | 所有卡片都等大居中（grid-cols-3），没有主次 | page.js, projects/page.js |
| **3. 缺少交互动效** | 只有 hover 上浮和淡入，没有让人"哇"的细节 | 多个组件 |
| **4. 颜色单一** | 纯靛蓝渐变到处用，缺少色彩层次 | 全局 |
| **5. 没有破格元素** | 全部规整在容器内，没有重叠、穿透、出血 | 全局 |
| **6. 导航栏太素** | 就是文字 + 模糊背景，没有品牌感 | Navbar.js |
| **7. 没有空状态/加载态** | 项目详情弹窗直接出现，没有过渡 | projects/page.js |

---

## 改良方案（按优先级）

### P1：改 Bento 网格布局（视觉提升最大）

**现状**：等大 3 列网格
**目标**：不对称 Bento 布局

```
当前:
┌─────┐ ┌─────┐ ┌─────┐
│ 项目1│ │ 项目2│ │ 项目3│    ← 全等大，没有重点
└─────┘ └─────┘ └─────┘

改成:
┌──────────────┐ ┌─────┐
│              │ │     │
│  智贝去肉留柱机 │ │固定板│   ← 国一奖项目占大格
│  (2×2 大卡)   │ │     │
├──────────────┤ ├─────┤
│              │ │     │
│ Codex 协作规范 │ │技能 │   ← 不对称但有层次
│  (2×1 宽卡)   │ │概览 │
└──────────────┘ └─────┘
```

**参考**：Eugene Wang 的 Spatial Bento 2.0

### P2：增强 Hero 区 — 加粒子网络背景

**现状**：极光渐变背景（不错，但可以更强）
**目标**：在极光之上叠加一层 **淡色粒子连线网络**，暗示"机械+AI连接"

**技术**：Canvas 粒子效果，约 50 行 JS
**参考**：Awesome Demo Portfolio 的 Canvas 粒子

### P3：项目卡片加 3D tilt

**现状**：hover 时 scale(1.02)
**目标**：鼠标移动时卡片微微倾斜（3D tilt），增强质感

**技术**：Framer Motion `useMotionValue` + `useTransform`，约 25 行/卡片
**参考**：Hay Mar Maw Portfolio、Eugene Wang 的 Vanilla Tilt

### P4：导航栏增强

**现状**：纯文字链接 + backdrop-filter
**目标**：当前页高亮 slider（已有 layoutId），加上滚动时变半透明玻璃

### P5：细节打磨

- 技能标签 hover 时微弹跳（`spring` 动画）
- 成长轨迹未来节点（2027/2028）脉冲光晕增强
- 页脚加微妙的渐变分割线

### P6：特色彩蛋

- 联系页或导航栏藏一个终端命令行入口
- 输入 `help` 显示可用命令
- **参考**：Satya 的 CLI 简历

---

## 参考项目

| 项目 | GitHub | 参考什么 |
|------|--------|---------|
| Eugene Wang 个人网站 | `eugg/2026-eugene-personal-website` | Bento 网格布局 |
| Hay Mar Maw Portfolio | `rolexstar27/Portfolio` | 同技术栈，Framer Motion 写法 |
| Awesome Demo Portfolio | `Srikanta2000/awesome-demo-portfolio` | Canvas 粒子效果 |
| Satya Portfolio | `satya00089/portfolio` | CLI 终端交互 |

---

## 实施顺序

1. Bento 网格布局改造
2. Hero 粒子背景
3. 项目卡片 3D tilt
4. 导航栏增强
5. 细节打磨
6. 终端彩蛋
