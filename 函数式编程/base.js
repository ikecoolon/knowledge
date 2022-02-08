//例如要产生一个新的数组 每个值+1
function rookie() {
    let arr = [1, 2, 3, 4, 5];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 1);
    }
    console.log(newArr);
}

// rookie();
//以上是最初级的写法
//----------------------------
function funStyle() {

    let newArr = (arr) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i] + 1);
        }
        return newArr;
    };
    console.log(newArr([1, 2, 3, 4, 5]));
}

// funStyle();
//以上是函数式编程样式，但还不够好，缺少复用性，如果需求变为每个值+5/*5
//----------------------------


function moreGood() {

    let add = (a, b) => a + 5;
    let multi = (a, b) => a * 5;
    let newArr = (arr, fn) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(fn(arr[i]));
        }
        return newArr;
    };

    console.log(newArr([1, 2, 3, 4, 5], add));
    console.log(newArr([1, 2, 3, 4, 5], multi));


}

// moreGood();
//--------------------------------
//避免函数副作用：改变外部变量的值==>既尽量编写纯函数，因为 JavaScript 的变量可变性最好在函数内进行深拷贝生成新数据
//可用 Json 强转两次的方式实现深拷贝











