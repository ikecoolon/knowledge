var dom = function(){
    var Name = "Default";
    this.Sex = "Boy";
    this.success = function(){
        alert("Success");
    };
};


alert(dom.Name);//undefined
alert(dom.Sex);//undefined

