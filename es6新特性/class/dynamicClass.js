function createObj(classDef) {
    return new classDef();

}

let obj = createObj(class {
    sayhi() {
        console.log('hi!!!');
    }
});
obj.sayhi(); //hi
