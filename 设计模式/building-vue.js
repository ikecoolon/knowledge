_init = function (options) {

};

function Vue(options) {

    if (!(this instanceof Vue)) {
        console.error('请通过 new Vue() 使用')
    }

    this._init(options);
}

function initMixin(Vue) {

}

initMixin(Vue);

function stateMixin(Vue) {

}

stateMixin(Vue);

function eventMixin(Vue) {

}

eventMixin(Vue);

function lifecycleMixin(Vue) {

}

lifecycleMixin(Vue);

function renderMixin(Vue) {

}

renderMixin(Vue);
