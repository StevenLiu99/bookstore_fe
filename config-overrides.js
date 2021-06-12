/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.externals = {'config': JSON.stringify({
        apiUrl: 'http://localhost:8080',
        imgUrl: 'http://202.120.40.106:9090'
    })};
    return config;
};
// const path = require('path')
// const { override, babelInclude} = require('customize-cra')
//
// module.exports = override(
//     babelInclude([
//         path.resolve("src"), // 确保要包含自己的项目
//         path.resolve("node_modules/react-global-hook") //引入报错的项目
//     ])
// )
