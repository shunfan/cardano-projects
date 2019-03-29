const siteName = 'Cardano Projects';

module.exports = {
  en: {
    path: '/',
    description: 'Cardano Projects is an unofficial curation of projects, tools, and resources that are related to the Cardano platform. It aims for helping newcomers to check what is going on within the Cardano ecosystem, and also provides Cardano investors with an easy access to all of the existing projects.',
    pages: {
      home: {
        path: '',
        name: 'Home',
        title: siteName,
        ogTitle: 'List of Cardano Projects',
        ogPath: '',
      },
      about: {
        path: 'about',
        name: 'About',
        title: `About - ${siteName}`,
        ogTitle: 'About',
        ogPath: '/about',
      },
    },
  },
  zh: {
    path: '/cn/',
    description: 'Cardano Projects 是一个收集了与卡尔达诺平台相关的项目、工具和资源的非官方清单。它旨在帮助新人了解卡尔达诺的生态系统，并为卡尔达诺的投资者们提供快捷的访问入口。',
    pages: {
      home: {
        path: '',
        name: '主页',
        title: siteName,
        ogTitle: '卡尔达诺项目列表',
        ogPath: '/cn/',
      },
      about: {
        path: 'about',
        name: '关于',
        title: `关于 - ${siteName}`,
        ogTitle: '关于',
        ogPath: '/cn/about',
      },
    },
  },
};
