// EXPORTS: IPersonalInfo, ISkillCategory, IProject, PERSONAL_INFO, SKILL_CATEGORIES, FEATURED_PROJECTS, OTHER_PROJECTS

export interface IPersonalInfo {
  name: string;
  title: string;
  tagline: string;
  major: string;
  school: string;
  intro: string;
  education: {
    school: string;
    major: string;
    degree: string;
    period: string;
    gpa: string;
    rank: string;
  };
  email: string;
}

export interface ISkillCategory {
  id: string;
  label: string;
  items: { name: string; level?: string }[];
}

export interface IProject {
  id: string;
  name: string;
  subtitle: string;
  period: string;
  company?: string;
  position?: string;
  teamSize?: string;
  description: string;
  responsibilities?: string[];
  achievements?: string[];
  tags: string[];
}

export const PERSONAL_INFO: IPersonalInfo = {
  name: '何姗珊',
  title: '游戏开发工程师',
  tagline: '用代码构筑有趣的游戏世界',
  major: '虚拟现实技术专业',
  school: '重庆工程学院',
  intro:
    '虚拟现实技术专业背景，GPA 3.8 专业排名前 3%，精通 Unity 引擎与 C# 开发，拥有商业项目主程经验。擅长游戏核心系统设计与性能优化，具备独立开发与团队协作能力。',
  education: {
    school: '重庆工程学院',
    major: '虚拟现实技术',
    degree: '本科',
    period: '2023.9 - 2027.9',
    gpa: '3.8',
    rank: '专业排名前 3%',
  },
  email: '3447665582@qq.com',
};

export const SKILL_CATEGORIES: ISkillCategory[] = [
  {
    id: 'engine',
    label: '游戏引擎',
    items: [
      { name: 'Unity', level: '熟练 · 商业项目主程经验' },
      { name: 'UE5', level: '了解 · VR 项目应用' },
      { name: 'Roblox', level: '入门 · 学习项目实践' },
    ],
  },
  {
    id: 'language',
    label: '编程语言',
    items: [
      { name: 'C#', level: '精通 · 核心开发语言' },
      { name: 'C++', level: '了解' },
      { name: 'Node.js', level: '了解' },
    ],
  },
  {
    id: 'middleware',
    label: '中间件 / 插件',
    items: [
      { name: 'Spine 骨骼动画' },
      { name: 'DOTween' },
      { name: 'HybridCLR 热更新' },
      { name: 'Luban 配置表' },
      { name: 'Protobuf' },
      { name: 'WebSocket' },
    ],
  },
  {
    id: 'design',
    label: '设计工具',
    items: [{ name: 'Photoshop' }],
  },
  {
    id: 'other',
    label: '其他能力',
    items: [
      { name: '数据结构与算法' },
      { name: '模块化设计' },
      { name: '性能优化' },
    ],
  },
];

export const FEATURED_PROJECTS: IProject[] = [
  {
    id: 'cat-kingdom',
    name: '猫猫王国',
    subtitle: '塔防商业项目',
    period: '2025.4 - 2026.6',
    company: '重庆数艺影视传媒有限公司',
    position: '程序主程 / 游戏测试',
    teamSize: '8 人团队',
    description:
      '基于 Unity 引擎开发的塔防商业游戏，融合角色养成与策略战斗玩法。集成 Spine 骨骼动画、DOTween UI 动画、HybridCLR 热更新、Protobuf 数据序列化、WebSocket 实时通信。核心系统包括国王养成系统、战斗系统、资源加载系统，使用 Luban 构建配置表体系。',
    responsibilities: [
      '主导国王养成系统设计与实现',
      '主导战斗系统核心逻辑开发（状态机、技能释放、伤害计算、Buff/Debuff 管理）',
      'Spine 动画导入与性能优化',
      'Luban 配置表数值体系构建',
      '模块 Bug 修复与稳定性优化',
    ],
    achievements: ['成功申请版号并计划上线多平台'],
    tags: ['Unity', 'C#', 'Spine', 'HybridCLR', 'Luban'],
  },
  {
    id: 'floating-realm',
    name: '悬浮之境',
    subtitle: '视觉小说类游戏',
    period: '2025.10 - 2025.11',
    company: '奇异果工作室',
    position: '程序主程 / 游戏测试',
    teamSize: '6 人团队',
    description:
      '基于 Unity 引擎开发的视觉小说游戏，融合沉浸式剧情体验与互动式贴吧系统。采用 C# 实现核心功能，集成 DOTween 动画效果，使用 ExcelDataReader 管理剧情数据，Newtonsoft.Json 处理存档。核心系统包括视觉小说系统、贴吧互动系统、游戏管理系统及场景管理系统。',
    responsibilities: [
      '负责贴吧系统实现（聊天界面控制、消息收发、AI 回复系统、彩蛋触发）',
      '开发游戏状态管理系统（多存档位管理、全局状态管理、游戏进度追踪）',
      '采用模块化设计与数据驱动架构',
    ],
    achievements: ['成功上线 TapTap 平台，下载关注及浏览超 7000+ 人'],
    tags: ['Unity', 'C#', 'DOTween', '叙事设计'],
  },
  {
    id: 'chuanchuan-lab',
    name: '串串研究所',
    subtitle: '益智科普卡牌类游戏',
    period: '2025.11 - 2026.2',
    position: '程序主程 / 项目组长',
    teamSize: '4 人团队',
    description:
      '融合益智科普与模拟经营的卡牌闯关游戏，核心玩法为"合成"——玩家通过收集、合成科普卡牌解锁食材与店铺升级，学习饮食文化知识。基于 Unity 引擎，使用 ScriptableObject 管理卡牌数据，字典优化合成配方查询，UGUI 实现科普展示，JSON/PlayerPrefs 持久化数据，对象池优化性能。',
    responsibilities: [
      '主导卡牌合成系统（枚举类型管理、状态机流程控制、字典优化配方查询）',
      '科普内容集成（ScriptableObject 数据库构建、UGUI 展示）',
      '关卡逻辑开发（预制体场景、枚举关卡类型）',
      '统筹团队协作与测试',
    ],
    achievements: [
      '获得微信电子软著，成功上线微信小程序',
      '参加 2026 开拓芯大学生游戏创作大赛',
    ],
    tags: ['Unity', 'C#', 'ScriptableObject', '对象池'],
  },
  {
    id: 'sugar-bean-town',
    name: '糖豆小镇大闯关',
    subtitle: '小儿糖尿病科普类游戏',
    period: '2025.5 - 2026.6',
    position: '程序主程 / 独自开发',
    teamSize: '单人',
    description:
      '小儿糖尿病科普类教育休闲游戏，包含食物连连看、七七小课堂、药箱管理员三大核心板块。使用 C# 开发，采用模块化架构设计。技术栈包括 UnityUI 系统、协程系统、PlayerPrefs 数据持久化、单例模式、SceneManager 场景切换、音频系统。',
    responsibilities: [
      '整体技术架构设计',
      '主导三大板块核心功能开发',
      '设计拖拽交互系统判断操作正确性',
      '开发食物管理系统实现连连看逻辑',
      '单例模式确保全局访问，协程处理异步操作',
      '构建模块化架构解耦各系统',
    ],
    achievements: [
      '成功获得软著，成功上线微信小程序',
      '获得院级第二课堂虚仿与游戏赛道二等奖',
    ],
    tags: ['Unity', 'C#', 'UI 系统', '协程'],
  },
  {
    id: 'jasmine-vr',
    name: '茉莉香韵 VR',
    subtitle: 'VR 非遗文化项目',
    period: '2025.7 - 2026.9',
    position: '程序 / 团队开发',
    teamSize: '2 人团队',
    description:
      '以中国传统茶文化为主题的 VR 体验项目，通过沉浸式交互让用户感受传统茶道韵味。核心技术包括 OpenXR 与 XR Interaction Toolkit 实现跨设备 VR 支持，Unity InputSystem 处理控制器输入，射线检测实现花朵采摘交互，粒子特效与音频反馈增强沉浸感。',
    responsibilities: [
      '负责泡茶场景搭建与模拟系统开发',
      '模块化场景设计',
      '使用 Unity 动画系统实现泡茶流程动画（温杯、投茶、注水等）',
      '状态机管理泡茶流程逻辑',
      'XR Interaction Toolkit 实现 VR 手柄抓取与操作',
      '音频系统播放教学视频与操作反馈',
    ],
    achievements: [
      '成功申请软著',
      '获得院级第二课堂虚仿与游戏赛道一等奖',
    ],
    tags: ['Unity', 'C#', 'XR Interaction Toolkit', 'OpenXR'],
  },
];

export const OTHER_PROJECTS: IProject[] = [
  {
    id: 'roblox-learning',
    name: '黄昏下的灯 / 133 快跑',
    subtitle: '罗布乐思学习项目',
    period: '2024.3 - 2025.3',
    description: '罗布乐思编辑器独立学习开发，包含休闲观赏与跑酷游戏，快速原型开发实践。',
    tags: ['Roblox', 'Lua', '快速原型'],
  },
];
