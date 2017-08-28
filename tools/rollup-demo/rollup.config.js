// import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/main.js',
    format: 'cjs',
    plugins: [resolve({
        // 给 resolve 插件传入自定配置
        customResolveOptions: {
            moduleDirectory: 'node_modules'
        }
    })],
    // 指明哪个模块被看作外部引用(external)
    external: ['lodash'],
    dest: 'bundle.js'
};