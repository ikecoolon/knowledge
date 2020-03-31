// import 'babel-polyfill';

import './app3.ts';
import test from'./css/test.css';
document.getElementById('mydiv').setAttribute('class',test.div1);
 console.log(1);

async function f() {
}

//babel-polyfill 全局垫片，把es5不兼容不能编译的对象和方法在垫片中实现一次
//babel-transform-runtime  局部垫片，用什么实现什么，不会污染全局