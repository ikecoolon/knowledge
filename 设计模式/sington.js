function store() {

    if (store.install) {
        return store.install;
    }
    this.store = {};
    store.install = this;
}

store.install = null;
let s1 = new store();
let s2 = new store();

s1.store.a = 1;
console.log(s2);
