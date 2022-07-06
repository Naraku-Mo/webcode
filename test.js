//"use strict";
// 代码以现代模式工作
// const myname='Naraku';
// console.log(myname); //测试Node.js，执行node text.js
// let age=prompt("How old are you?","18");
// alert(`You are ${age} years old now!`);
// let isBoss = confirm("Are you the boss?");
// alert( isBoss );//boolean类型由alert函数转换为字符串进行显示
let n = +prompt("n?", "");
let x = +prompt("x?","");
function pow(x,n){
    //if(n==1)return x;
    let temp=x;
    for(let i=1;i<n;i++)
       temp*=x;
    return temp;
}
alert(`${pow(x,n)}`);
