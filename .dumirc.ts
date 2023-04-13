import { defineConfig } from 'dumi';

const repo = 'ReactUI'; // 项目名

export default defineConfig({
  themeConfig: {
    name: 'koala-ui',
  },
  resolve: {
    // docDirs: [{ type: 'doc', dir: 'docs' }],
    // atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
},

);
