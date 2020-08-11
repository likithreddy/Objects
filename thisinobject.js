let user1={
name:"John",
};
let user2={
name:"max",
}
function greet(){
alert(this.name);
}
user1.f=greet;
user2.f=greet;
user1.f();
user2.f();