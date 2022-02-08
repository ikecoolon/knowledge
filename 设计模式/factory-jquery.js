//没懂
(function () {
    let jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);

    };
    jQuery.prototype = {
        init: function () {

        }
    };
    jQuery.fn = jQuery.prototype;
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function () {

    };
    jQuery.extend({});

    window.$ = window.JQuery = jQuery
})();

//用一个方法代替new
