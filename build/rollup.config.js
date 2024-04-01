// 导入 Rollup 插件，用于处理 Vue 文件  
import vue from 'rollup-plugin-vue';  
  
// 导入 Rollup 插件，仅处理 CSS  
import css from 'rollup-plugin-css-only';  
  
// 导入 Rollup 插件，用于处理 TypeScript 文件  
import typescript from 'rollup-plugin-typescript2';  
  
// 导入 Rollup 插件，用于解析 Node.js 中的模块  
import { nodeResolve } from '@rollup/plugin-node-resolve';  
  
// 从 package.json 文件中导入项目的名称  
import { name } from '../package.json';  
  
// 定义一个函数，根据类型生成输出文件的路径  
const file = type => `dist/${name}.${type}.js`;  
  
// 定义 TypeScript 编译器的覆盖选项  
const overrides = {  
  compilerOptions: { declaration: true }, // 启用生成声明文件（.d.ts）  
  // exclude: ["tests/**/*.ts", "tests/**/*.tsx"] // 排除测试文件  
  exclude:['node_modules']
};  
  
// 导出项目名称和文件生成函数  
export { name, file };  
  
// 导出 Rollup 配置对象  
export default {  
  // 入口文件，Rollup 将从这里开始打包  
  input: 'src/index.ts',  
  
  // 输出配置  
  output: {  
    name, // 输出的 UMD 全局变量名  
    file: file('esm'), // 输出文件的路径  
    format: 'es' // 输出格式为 ES 模块  
  },  
  
  // 插件列表  
  plugins: [  
    // 解析 Node.js 中的模块  
    nodeResolve(),  
  
    // 使用 TypeScript 插件，并应用覆盖选项  
    typescript({ tsconfigOverride: overrides }),  
  
    // 使用 Vue 插件，处理 .vue 文件  
    vue(),  
  
    // 使用 CSS 插件，将 CSS 提取到单独的 bundle.css 文件中  
    css({ output: 'bundle.css' })  
  ],  
  
  // 外部依赖列表，这些依赖不会被打包进输出文件，而是在运行时从环境中获取  
  external: ['vue', 'lodash-es']  
};