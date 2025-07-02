// console.log("start");

// setTimeout(() => {
//     console.log("I am going to restaurant");
// },1000);

// function order(cb) {
//     console.log("I am ordering food");
//     setTimeout(cb, 2000);
// }

// function havingFood(cb){
//     console.log("I am having food");
//     setTimeout(cb, 3000);
// }

// function pay(cb) {
//     console.log("I am paying the bill");
//     setTimeout(cb, 2500);
// }   

// function leave(){
//     console.log("i am leaving the restaurant");
//     // setTimeout(cb, 5000);
// }
// // disadvantages of this 
// // 1. inversion of Code;
// // 2. can not debug easily;
// order(() =>{
//     havingFood(() =>{
//         pay(() =>{
//             leave();
//         })
//     })
// })

// mcn docs 

// Array operations
let arr = [2, 3 , 4 , 6, 8, 5];


// function doubleArrayVal(arr){
//     let arr2 = [];
//     for(var i = 0; i <arr.length; i++){
//         arr2.push(arr[i] * 2);
//     }
//     return arr2;
// }
// console.log(doubleArrayVal(arr));

// using prototype

Array.prototype.calc = function(logic) {
    let arr2 = [];
    for(var i = 0;i<this.length;i++){
        arr2.push(logic(this[i]));
    }
    return arr2;
}

function doubleArrayVal(val){
    return val * 2;
}

function cubeArrayVal(val){
    return val * val * val;
}


console.log(arr.calc(doubleArrayVal));
console.log(arr.calc(cubeArrayVal));