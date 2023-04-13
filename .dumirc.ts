import { defineConfig } from 'dumi';

const repo = 'ReactUI'; // 项目名

export default defineConfig({
  title: 'ReactUI',
  // mode: 'site',
  // devServer: {
  //   port: 1998, // 自定义端口号
  // },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
});
