# 个人网站 — 多对话协作结构

## 角色定义

| 角色 | 负责 | 当前对话 |
|------|------|---------|
| **主控（Master）** | 总体协调、内容提取、数据层、部署配置 | ← 本对话 |
| **设计专家（Designer）** | 全局样式、动画效果、视觉系统 | 新开对话 |
| **组件工程师（Builder）** | React 组件开发、页面组装 | 新开对话 |

## 为什么这样分？

3 个对话可以并行推进，只要先把接口约定好：

```
主控先做：content.js 数据结构定义
          ↓
    ┌─────┴─────┐
    ↓           ↓
  设计专家     组件工程师
  (样式/动画)   (组件/页面)
    ↓           ↓
    └─────┬─────┘
          ↓
    主控整合 + 部署
```

## 工作拆分

### 第一轮：主控（本对话）— 奠基
1. 初始化 Next.js 项目（`npx create-next-app`）
2. 安装依赖（Tailwind v4、Framer Motion）
3. 从简历 docx 提取内容，写 `src/data/content.js`（中英双语）
4. 定义文件结构和组件接口规格
5. `.gitignore` 已完成
6. 首次 commit

### 第二轮：并行 — 两个对话同时开工
**对话 A（设计专家）：**
- 读主控写的设计规格
- `src/styles/globals.css`：配色变量、极光动画、脉冲动画、玻璃效果
- `tailwind.config.js`：自定义颜色、字体
- 确保设计系统完整可用

**对话 B（组件工程师）：**
- 读主控写的设计规格
- `src/hooks/useLanguage.js`：语言切换 Hook
- 所有组件：Navbar、Footer、Hero、GrowthTimeline、ProjectCard、SkillGroup、Timeline、LanguageToggle
- 3 个页面：首页、projects、resume
- `src/app/layout.js`：根布局 + 页面切换动画

### 第三轮：主控 — 整合
1. 检查两个对话的产出
2. 拼装完整项目
3. 本地测试
4. 移动端适配扫尾
5. 配 GitHub Actions 部署
6. 推上线

## 接口约定（两个并行对话的公共协议）

### content.js 数据形状（设计专家和组件工程师都依赖它）

```js
// src/data/content.js
export const content = {
  zh: {
    nav: { home: "首页", projects: "项目", resume: "简历" },
    hero: { name: "金圣栋", tagline: "机械制造 × AI · 探索进行中", ... },
    growth: [ /* { year, title, desc, status: 'done'|'future' } */ ],
    skills: {
      current: [ /* { category, items: [...] } */ ],
      learning: [ /* { category, items: [...] } */ ]
    },
    projects: [ /* { id, title, role, period, background, work, result, tags, award } */ ],
    resume: { /* education, awards, experiences, certificates, selfEval */ },
    footer: { ... }
  },
  en: { /* 同上结构 */ }
}
```

### 组件接口规格

| 组件 | Props | 说明 |
|------|-------|------|
| `Navbar` | 无（自己调 useLanguage） | 固定顶部、玻璃效果、语言切换 |
| `Footer` | 无 | 版权 + 构建声明 |
| `Hero` | 无 | 极光背景、姓名、标语 |
| `GrowthTimeline` | 无 | 4节点时间线，done/future 两种状态 |
| `ProjectCard` | `project, index, onClick` | 单张项目卡片 |
| `SkillGroup` | 无 | 左（在用）右（在学）双区 |
| `Timeline` | `items, variant` | 通用时间线 |
| `LanguageToggle` | 无 | 中/EN 切换按钮 |

### 设计 Token（CSS 变量名，双方统一使用）

```css
--color-bg-primary: #0a0a0f;
--color-bg-card: #12121a;
--color-glass: rgba(255,255,255,0.03);
--color-text-primary: #f0f0f5;
--color-text-secondary: #a0a0b0;
--color-accent: #6366f1;        /* 靛蓝，已完成 */
--color-accent-cyan: #06b6d4;   /* 青色，进行中/未来 */
--color-border: rgba(255,255,255,0.06);
--color-future: rgba(99,102,241,0.35);
```

## 状态追踪

每完成一项，打勾 ✅

### 主控（本对话）
- [ ] 初始化 Next.js 项目
- [ ] 安装依赖
- [ ] 写 content.js
- [ ] 提交 → 设计师和工程师可以开始了
- [ ] 最终整合
- [ ] GitHub Actions + 部署
- [ ] 推上线

### 设计专家
- [ ] globals.css（变量、动画）
- [ ] tailwind.config.js

### 组件工程师
- [ ] useLanguage.js
- [ ] Navbar + Footer + LanguageToggle
- [ ] Hero
- [ ] GrowthTimeline
- [ ] SkillGroup
- [ ] ProjectCard
- [ ] Timeline
- [ ] 3 个页面
- [ ] layout.js + AnimatePresence

## 使用说明（给用户）

你说"开始"，我（主控）就一步步执行第一轮。

第一轮完成后，你新开两个 Claude Code 对话，分别告诉它们：
- 对话 A："你是设计专家，参考 `e:\ccworkspace\个人网站\COLLABORATION.md` 里的设计 Token 和接口约定，写全局样式"
- 对话 B："你是组件工程师，参考 COLLABORATION.md 里的组件接口，开发所有组件和页面"

两个对话完成后，回到本对话说"整合"，我来拼装部署。
