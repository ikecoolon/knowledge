setTimeout(() => {
    console.log('set1');
    new Promise(((resolve, reject) => {
        console.log('pr1');
    })).then(() => {
        console.log('then1');
    });
});

new Promise((resolve, reject) => {
    console.log('pr2');
    resolve();
}).then(() => {
    console.log('then2');
    setTimeout(() => {
        console.log('set2');
    })
});
setTimeout(() => {
    console.log('set3');
});
console.log(4);




















//执行顺序pr2,4,then2、set1、pr1、then1、set3、set2
//微任务[]
//宏认为[]
