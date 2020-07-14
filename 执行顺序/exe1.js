
setTimeout(()=>{
    console.log(1);
});
var p = new Promise(((resolve, reject) => {
    console.log(2);
    resolve();

}));
p.then(()=>{
    console.log(3);
})
console.log(4);























//执行顺序2431
