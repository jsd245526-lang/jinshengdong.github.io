// src/data/content.js
// 网站所有文本内容（中英双语）
// 修改网站内容只需编辑这个文件

export const siteContent = {
  zh: {
    // ========== 导航栏 ==========
    nav: {
      home: '首页',
      projects: '项目',
      resume: '简历',
    },

    // ========== 语言切换 ==========
    langToggle: {
      label: 'EN',
      ariaLabel: '切换为英文',
    },

    // ========== Hero ==========
    hero: {
      name: '金圣栋',
      tagline: '机械制造 × AI · 探索进行中',
      subtitle: '浙江科技大学 · 机械制造及其自动化 · 2028届本科',
      jobTarget: '求职意向：AI产品方向实习岗',
      scrollHint: '往下看',
    },

    // ========== 成长轨迹 ==========
    growth: {
      title: '成长轨迹',
      items: [
        {
          year: '2024',
          title: '机械制造基础起步',
          desc: '入学浙江科技大学，开始机械制造及其自动化专业学习',
          status: 'done',
        },
        {
          year: '2025',
          title: '接触 AI Agent',
          desc: '开始使用 Claude Code 等 AI 工具，探索 Vibe Coding 工作方式',
          status: 'done',
        },
        {
          year: '2026',
          title: 'AI + 机械交叉实践',
          desc: '首个 AI 辅助机械课程设计落地，同年获全国机械创新设计大赛一等奖',
          status: 'done',
        },
        {
          year: '2027',
          title: '· · ·',
          desc: '',
          status: 'future',
        },
        {
          year: '2028',
          title: '毕业',
          desc: '带着 4 年 AI + 机械跨界经验走向行业',
          status: 'future',
        },
      ],
    },

    // ========== 个人特长 ==========
    skills: {
      title: '个人特长',
      currentLabel: '已经在用的',
      learningLabel: '正在深入的',
      current: [
        {
          category: 'AI 工具应用',
          icon: '🤖',
          items: ['Claude Code', 'Codex', 'GPT'],
        },
        {
          category: '机械设计',
          icon: '⚙️',
          items: ['SolidWorks（三维建模/装配/工程图）', 'AutoCAD（二维制图）'],
        },
        {
          category: '项目协作',
          icon: '📋',
          items: ['需求分析 → 方案设计 → AI执行 → 成果交付'],
        },
        {
          category: '办公软件',
          icon: '📄',
          items: ['Word', 'Excel', 'PowerPoint'],
        },
      ],
      learning: [
        {
          category: 'AI 驱动设计全流程',
          icon: '🔗',
          items: ['AI 辅助机械设计自动化', '自然语言驱动的 CAD 工作流'],
        },
        {
          category: 'Agent 工具链',
          icon: '🛠️',
          items: ['MCP 协议', 'Agent Skill 体系设计'],
        },
        {
          category: '交叉领域',
          icon: '🔬',
          items: ['机械产品 × AI 产品思维', '智能制造与自动化'],
        },
      ],
    },

    // ========== 项目概览（首页） ==========
    projectOverview: {
      title: '项目作品',
      subtitle: '从纯机械 → AI辅助设计 → AI方法论 · 一条正在加速的成长曲线',
    },

    // ========== 项目详情（/projects 页） ==========
    projects: {
      title: '项目作品',
      intro: '每个项目都是一步台阶。',
      list: [
        {
          id: 'zhibei',
          title: '智贝去肉留柱机',
          subtitle: '第十一届全国大学生机械创新设计大赛慧鱼组',
          role: '核心成员（结构设计 / 答辩 / PPT / 视频）',
          period: '2025.12 - 2026.04',
          award: '全国一等奖',
          awardLevel: 'national',
          tags: ['SolidWorks', 'AutoCAD', '机械设计', '竞赛'],
          background: '针对扇贝初加工人工依赖度高、效率低的问题，设计全自动去肉留柱设备，实现上料、切割、分离、去壳、取肉及包装等流程自动化。',
          work: [
            '使用 SolidWorks 完成整机三维建模与装配体设计，划分六大功能模块，完成装配约束和干涉检查',
            '参与去壳机构方案设计，围绕"三刀协同"结构进行多轮迭代优化，提高贝肉完整率和机构运行稳定性',
            '完成蜗杆传动与气缸驱动相关结构建模，配合完成运动仿真验证；使用 AutoCAD 绘制二维工程图',
            '配合控制组完成机电联调，参与整机测试、问题排查及方案修改；负责 PPT 制作、宣传视频剪辑及现场答辩',
          ],
          result: '项目获第十一届全国大学生机械创新设计大赛慧鱼组一等奖。',
          growthTag: '初次将 CAD 能力应用于完整竞赛项目',
        },
        {
          id: 'gudingban',
          title: '固定板课程设计',
          subtitle: 'AI 辅助机械设计与自动化出图实践',
          role: '设计师',
          period: '2026.03 - 2026.05',
          award: null,
          awardLevel: null,
          tags: ['Claude Code', 'Codex', 'pyautocad', 'SolidWorks', 'AI+机械'],
          background: '在固定板课程设计中，引入 Codex、GPT 等 AI 工具辅助完成机械设计工作，结合 GitHub 开源方案实现三维建模、二维出图及设计文档整理，探索 AI 在机械设计中的实际应用。',
          work: [
            '调研 GitHub 开源项目，完成 pyautocad 自动出图方案的适配与优化，解决线性尺寸标注、图层初始化及 PDF 导出等实际问题',
            '使用 Codex 辅助完成零件三维建模，根据设计需求生成多套建模方案；结合机械设计要求进行结构评估、方案比选及装配体设计',
            '利用 pyautocad 自动生成工序图、尺寸标注及定位夹紧符号，结合课程要求进行人工校核',
            '使用 AI 辅助完成工艺卡片、工序卡片及设计说明书整理，结合课程要求完成内容审核、修改及成果交付',
          ],
          result: '完成零件图、装配图、工艺卡片、工序卡片及设计说明书等完整课程成果，形成 AI 辅助机械设计与自动化出图流程。',
          growthTag: '首次将 AI 工具引入机械设计全流程',
        },
        {
          id: 'codex-guifan',
          title: 'AI Agent 项目协作规范设计',
          subtitle: 'Codex 协作规范体系',
          role: '个人项目',
          period: '2026.06 - 2026.07',
          award: null,
          awardLevel: null,
          tags: ['Claude Code', 'Codex', 'Agent', '协作规范', '经验管理'],
          background: '在持续使用 Codex 辅助机械设计过程中，针对多轮对话易丢失上下文、项目经验难复用、协作效率低等问题，设计并持续优化一套 AI Agent 项目协作规范。',
          work: [
            '分析机械设计项目在需求分析、方案设计、成果交付等阶段的协作问题，设计项目组织规范及 AI 协作流程',
            '建立统一项目状态管理机制，规范 README、设计基准、任务板及交接记录等文档职责，实现项目全过程状态追踪',
            '建立经验库及任务索引机制，对项目实践进行分类整理，累计沉淀 20 余条可复用经验',
            '在课程设计项目中持续验证并优化协作方案，根据实际使用反馈完善任务拆解、执行跟踪和成果验收流程',
          ],
          result: '形成适用于 AI 辅助机械设计的项目协作规范，覆盖需求分析、方案讨论、AI 辅助执行、人工审核及成果交付全过程。',
          growthTag: '从"使用工具"升级为"设计方法论"',
        },
      ],
      modal: {
        close: '关闭',
        period: '时间',
        role: '角色',
        background: '项目背景',
        work: '具体工作',
        result: '项目成果',
      },
    },

    // ========== 自我评价（首页，简短版） ==========
    aboutMe: {
      title: '关于我',
      content: '在机械专业基础上持续探索 AI 交叉应用。过去一年完成 3 个将 AI 工具引入机械设计流程的实践项目——从最初"让 AI 辅助出图"，到"设计 AI 协作规范体系"，每一步都在拓宽边界。对机器人、智能制造及 AI 应用方向保持持续关注，希望在实际项目中持续提升工程实践能力。',
    },

    // ========== 简历页 ==========
    resumePage: {
      title: '简历',
      downloadPDF: '下载简历 PDF',
      education: {
        title: '教育背景',
        school: '浙江科技大学',
        major: '机械制造及其自动化',
        degree: '本科',
        period: '2024.09 - 2028.06',
        detail: '主修课程：机械电子技术、工程力学、机械设计基础、机械工程导论等',
      },
      awards: {
        title: '竞赛获奖',
        list: [
          { level: 'national', text: '2026.04 — 第十一届全国大学生机械创新设计大赛慧鱼组 一等奖' },
          { level: 'province', text: '2022.07 — 浙江省创新【发明创造】省一等奖' },
          { level: 'city', text: '2022.06 — 衢州市创新【发明创造】市一等奖' },
          { level: 'school', text: '2025.09 — 中国国际大学生创新大赛校银奖' },
          { level: 'school', text: '2024.10 — ICAN大赛视觉设计检测挑战赛校二等奖' },
          { level: 'school', text: '2024.12 — 全国大学生商科综合能力大赛校三等奖' },
        ],
      },
      honors: {
        title: '荣誉称号',
        list: ['浙江科技大学优秀团员'],
      },
      certificates: {
        title: '技能证书',
        list: ['数控车床中级工', '数控车床"1+X"'],
      },
      experiences: {
        title: '学校经历',
        list: [
          {
            period: '2024.09 - 至今',
            org: '机制中本242团支部',
            role: '团支书',
            details: [
              '带领班级获得2026年学校最美示范班级',
              '发展8名入党积极分子，占总比例47%',
            ],
          },
          {
            period: '2025.06 - 至今',
            org: '浙江科技大学KAB创新创业俱乐部',
            role: '干事',
            details: [
              '参与策划并执行KAB全体大会（200余人），负责部门分工、物资清单及应急预案编制与协调',
            ],
          },
        ],
      },
      selfEval: {
        title: '自我评价',
        content: '具备扎实的机械专业基础，熟悉机械设计、三维建模及工程图绘制流程，能够使用 SolidWorks、AutoCAD 完成机械设计相关工作。在课程设计和竞赛项目中积累了机械设计与 AI 工具结合的实践经验，能够主动分析需求、拆解任务、推进项目实施，并结合 AI 工具提升设计效率和文档质量。对机器人、智能制造及 AI 应用方向保持持续关注，具备较强的学习能力、沟通协作能力和执行力，希望在实际项目中持续提升工程实践能力。',
      },
    },

    // ========== 页脚 ==========
    footer: {
      copyright: `© ${new Date().getFullYear()} 金圣栋`,
      builtWith: '由 Claude Code 辅助构建',
      backToTop: '回到顶部',
    },
  },

  // ===================== 英文 =====================
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      resume: 'Resume',
    },

    langToggle: {
      label: '中文',
      ariaLabel: 'Switch to Chinese',
    },

    hero: {
      name: 'Jin Shengdong',
      tagline: 'Mechanical Engineering × AI · Exploring',
      subtitle: 'Zhejiang University of Science & Technology · Mechanical Engineering · Class of 2028',
      jobTarget: 'Seeking: AI Product Internship',
      scrollHint: 'Scroll down',
    },

    growth: {
      title: 'Growth Trajectory',
      items: [
        {
          year: '2024',
          title: 'Mechanical Engineering Foundations',
          desc: 'Enrolled at ZUST, began studying Mechanical Manufacturing & Automation',
          status: 'done',
        },
        {
          year: '2025',
          title: 'Discovered AI Agents',
          desc: 'Started using Claude Code, exploring Vibe Coding workflows',
          status: 'done',
        },
        {
          year: '2026',
          title: 'AI + Mechanical Crossover',
          desc: 'First AI-assisted mechanical design project; National 1st Prize in Mechanical Innovation Competition (separate project)',
          status: 'done',
        },
        {
          year: '2027',
          title: '· · ·',
          desc: '',
          status: 'future',
        },
        {
          year: '2028',
          title: 'Graduation',
          desc: 'Entering the industry with 4 years of AI + Mechanical crossover experience',
          status: 'future',
        },
      ],
    },

    skills: {
      title: 'Skills',
      currentLabel: 'What I Use',
      learningLabel: 'What I\'m Exploring',
      current: [
        {
          category: 'AI Tools',
          icon: '🤖',
          items: ['Claude Code', 'Codex', 'GPT'],
        },
        {
          category: 'Mechanical Design',
          icon: '⚙️',
          items: ['SolidWorks (3D Modeling / Assembly / Drawings)', 'AutoCAD (2D Drafting)'],
        },
        {
          category: 'Project Collaboration',
          icon: '📋',
          items: ['Requirements → Design → AI Execution → Delivery'],
        },
        {
          category: 'Office Software',
          icon: '📄',
          items: ['Word', 'Excel', 'PowerPoint'],
        },
      ],
      learning: [
        {
          category: 'AI-Driven Design Pipeline',
          icon: '🔗',
          items: ['AI-assisted mechanical design automation', 'Natural language-driven CAD workflows'],
        },
        {
          category: 'Agent Toolchain',
          icon: '🛠️',
          items: ['MCP Protocol', 'Agent Skill System Design'],
        },
        {
          category: 'Cross-Disciplinary',
          icon: '🔬',
          items: ['Mechanical Product × AI Product Thinking', 'Smart Manufacturing & Automation'],
        },
      ],
    },

    projectOverview: {
      title: 'Projects',
      subtitle: 'From pure mechanical → AI-assisted design → AI methodology · An accelerating growth curve',
    },

    projects: {
      title: 'Projects',
      intro: 'Each project is a step forward.',
      list: [
        {
          id: 'zhibei',
          title: 'Scallop Auto-Shucking Machine',
          subtitle: '11th National College Mechanical Innovation Design Competition (Fischertechnik)',
          role: 'Core Member (Structural Design / Defense / Slides / Video)',
          period: '2025.12 - 2026.04',
          award: 'National 1st Prize',
          awardLevel: 'national',
          tags: ['SolidWorks', 'AutoCAD', 'Mechanical Design', 'Competition'],
          background: 'Designed a fully automated scallop shucking machine to address high labor dependency in scallop processing, integrating feeding, cutting, separation, shelling, meat extraction, and packaging.',
          work: [
            'Completed full-machine 3D modeling and assembly design in SolidWorks across six functional modules with assembly constraints and interference checks',
            'Contributed to shelling mechanism design with multiple iterations of the "three-blade coordination" approach, improving meat integrity rate and mechanism stability',
            'Modeled worm gear drive and pneumatic actuator structures; assisted with motion simulation verification; drafted 2D engineering drawings using AutoCAD',
            'Collaborated with the controls team on机电 integration, testing, and troubleshooting; responsible for presentation slides, promotional video editing, and live defense',
          ],
          result: 'Won 1st Prize in the 11th National College Mechanical Innovation Design Competition (Fischertechnik Group).',
          growthTag: 'First time applying CAD skills to a complete competition project',
        },
        {
          id: 'gudingban',
          title: 'Fixture Plate Course Project',
          subtitle: 'AI-Assisted Mechanical Design & Automated Drafting',
          role: 'Designer',
          period: '2026.03 - 2026.05',
          award: null,
          awardLevel: null,
          tags: ['Claude Code', 'Codex', 'pyautocad', 'SolidWorks', 'AI + Mech'],
          background: 'In a fixture plate course design project, integrated AI tools (Codex, GPT) to assist mechanical design tasks. Leveraged GitHub open-source solutions for 3D modeling, 2D drafting, and design documentation — exploring practical AI applications in mechanical engineering.',
          work: [
            'Surveyed GitHub open-source projects and adapted pyautocad for automated drafting; resolved issues with linear dimensioning, layer initialization, and PDF export',
            'Used Codex to assist with part modeling, generating multiple design proposals; evaluated structures and selected optimal approaches based on mechanical design requirements',
            'Automatically generated process drawings, dimensions, and fixture symbols via pyautocad, with manual verification against course requirements',
            'Used AI to assist with process cards, operation sheets, and design documentation; reviewed, revised, and delivered final course outputs',
          ],
          result: 'Produced complete course deliverables (part drawings, assembly drawings, process cards, operation sheets, design report); established an AI-assisted mechanical design and automated drafting workflow.',
          growthTag: 'First time integrating AI tools into the full mechanical design workflow',
        },
        {
          id: 'codex-guifan',
          title: 'AI Agent Collaboration Framework',
          subtitle: 'Codex Collaboration Standards',
          role: 'Solo Project',
          period: '2026.06 - 2026.07',
          award: null,
          awardLevel: null,
          tags: ['Claude Code', 'Codex', 'Agent', 'Collaboration Standards', 'Knowledge Management'],
          background: 'While using Codex for mechanical design, identified recurring issues: context loss across sessions, difficulty reusing project experience, and low collaboration efficiency. Designed and iteratively refined a structured AI Agent collaboration framework.',
          work: [
            'Analyzed collaboration bottlenecks across requirements analysis, design, and delivery phases of mechanical design projects; designed project organization standards and AI collaboration workflows',
            'Established a unified project status management system with clear responsibilities for README, design specs, task boards, and handoff documents — enabling end-to-end status tracking',
            'Built an experience library with task indexing; accumulated 20+ reusable experience entries, reducing ramp-up time for similar projects',
            'Continuously validated and refined the framework through course design projects, improving task breakdown, execution tracking, and deliverable review processes',
          ],
          result: 'Created a reusable project collaboration standard covering the full cycle: requirements analysis → solution discussion → AI-assisted execution → human review → delivery. Demonstrated methodical thinking in AI-mechanical workflow design.',
          growthTag: 'Evolved from "using tools" to "designing methodology"',
        },
      ],
      modal: {
        close: 'Close',
        period: 'Period',
        role: 'Role',
        background: 'Background',
        work: 'Contributions',
        result: 'Outcome',
      },
    },

    aboutMe: {
      title: 'About Me',
      content: 'Exploring the intersection of mechanical engineering and AI. Over the past year, completed 3 projects integrating AI tools into mechanical design workflows — from "letting AI assist with drafting" to "designing an AI collaboration methodology". Continuously learning about robotics, smart manufacturing, and AI applications. Looking to grow through hands-on engineering practice.',
    },

    resumePage: {
      title: 'Resume',
      downloadPDF: 'Download Resume PDF',
      education: {
        title: 'Education',
        school: 'Zhejiang University of Science & Technology',
        major: 'Mechanical Manufacturing & Automation',
        degree: 'B.Eng.',
        period: '2024.09 - 2028.06',
        detail: 'Key courses: Mechatronics, Engineering Mechanics, Mechanical Design Fundamentals, Introduction to Mechanical Engineering',
      },
      awards: {
        title: 'Awards & Honors',
        list: [
          { level: 'national', text: '2026.04 — 1st Prize, 11th National College Mechanical Innovation Design Competition (Fischertechnik Group)' },
          { level: 'province', text: '2022.07 — 1st Prize, Zhejiang Provincial Innovation Competition (Invention & Creation)' },
          { level: 'city', text: '2022.06 — 1st Prize, Quzhou City Innovation Competition (Invention & Creation)' },
          { level: 'school', text: '2025.09 — Silver Award, China International College Innovation Competition (School Level)' },
          { level: 'school', text: '2024.10 — 2nd Prize, ICAN Visual Design & Detection Challenge (School Level)' },
          { level: 'school', text: '2024.12 — 3rd Prize, National College Business Comprehensive Ability Competition (School Level)' },
        ],
      },
      honors: {
        title: 'Honors',
        list: ['ZUST Outstanding Communist Youth League Member'],
      },
      certificates: {
        title: 'Certificates',
        list: ['CNC Lathe Operator (Intermediate)', 'CNC Lathe "1+X" Certification'],
      },
      experiences: {
        title: 'Campus Activities',
        list: [
          {
            period: '2024.09 - Present',
            org: 'Class 242 Communist Youth League Branch',
            role: 'League Branch Secretary',
            details: [
              'Led the class to win "2026 Most Exemplary Class" at university level',
              'Developed 8 party applicant candidates (47% of class)',
            ],
          },
          {
            period: '2025.06 - Present',
            org: 'ZUST KAB Innovation & Entrepreneurship Club',
            role: 'Officer',
            details: [
              'Planned and executed the KAB General Assembly (200+ attendees); coordinated departmental task assignments, supply lists, and contingency planning',
            ],
          },
        ],
      },
      selfEval: {
        title: 'Self-Assessment',
        content: 'Solid foundation in mechanical engineering with hands-on experience in mechanical design, 3D modeling, and engineering drawing. Through course projects and competitions, developed practical experience combining mechanical design with AI tools — capable of analyzing requirements, breaking down tasks, driving project execution, and leveraging AI to improve design efficiency and documentation quality. Maintaining strong interest in robotics, smart manufacturing, and AI applications. A fast learner with strong communication and execution skills, eager to grow through real-world engineering projects.',
      },
    },

    footer: {
      copyright: `© ${new Date().getFullYear()} Jin Shengdong`,
      builtWith: 'Built with Claude Code',
      backToTop: 'Back to top',
    },
  },
};
