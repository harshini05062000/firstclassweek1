myPenguin = {
    name:"harshini",
    origin:"nrt",
    livingarea:"vnk",
    canFly:"none",
    chip:function() {
        return "harshini";
    },
    sayHello:function() {
        console.log(this.name)
    },
    fly:function() {
        if(this.canFly) {
            console.log("fly")
        }
        else {
            console.log("can't");
        }
    }

}
console.log(myPenguin.name);
myPenguin.canFly=false;
myPenguin.name="harshi";
for(penguin in myPenguin) {
    console.log(penguin)
}
for(penguin in myPenguin) {
    console.log(myPenguin[penguin])
}
console.log(myPenguin.chip());
myPenguin.sayHello();
myPenguin.fly();