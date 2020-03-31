//call apply 方法实现
function Parent() {
    var age='50';
    return {
        Say:function(){
            console.log('I am father');
        }
    }
}
function Son() {
    Parent.call(this);
    this.Say();
}

var son = new Son();

