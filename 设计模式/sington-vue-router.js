/**
 * Vue 对象保证唯一性
 */

let _Vue;

function install(Vue) {
    if (install.installed && _Vue === Vue) return
    install.installed = true;

    _Vue = Vue;

}

//Vue.use 其实执行 install 函数
