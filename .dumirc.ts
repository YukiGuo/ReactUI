import { defineConfig } from 'dumi';

const repo = 'reactui'; // 项目名

export default defineConfig({
  themeConfig: {
    name: 'koala-ui',
  },
  resolve: {
    // docDirs: [{ type: 'doc', dir: 'docs' }],
    // atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
},

);
