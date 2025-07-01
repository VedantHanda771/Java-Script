// var a = 123;
// console.log(a);


// function abc(){
//     console.log("abc");
//     hef();
//     function hef(){
//         console.log("hef");
//     }

// }
// abc();
// def();
// function def(){
//     console.log("def");
// }

// arrow function 

// this is a variable name function xyz
// // xyz(); this will not work 
// var xyz=() =>{
//     console.log("xyz");
// }

// xyz(); // this will work


// compound scope 

// var a = 10;
// var b = 20;
// var c = 30;
// console.log(d);
// console.log(a, b, c);
// {
//     // parent 
//     console.log(a, b, c);
//     {
//         // child 
//         var d= 100;
//         console.log(a, b, c, d);
        
//     }
// }


// parent Children
// function abc(){
//     var a = 100;
//     var b = 200;
//     function def(){
//         var c = 300;
//         function ghi(){
//             console.log(a, b, c, d); // 100, 200, 300, 400
//             var d = 400;
//         }
//         ghi();
//     }
//     def();
// }
// abc();

// for loop set timout ascynchoras space , closer in side a function
// This code demonstrates the behavior of closures in JavaScript with a for loop and setTimeout.
// It shows how the variable `i` is captured by the closure, leading to unexpected results

// for(var i = 0;i<=5;i++){
//     function logI(i) {
//         setTimeout(() => {
//             console.log(i); 
//         }, 1000);
//     }
//     logI(i);
// }

// HOF: 
// // normal function 
// function xyz(abc){
//     console.log("xyz");
//     abc();
// }

// higherorder function 

function abc(){
    console.log("abc");
}
xyz(abc);

// return function 
function xyz(abc){
    console.log("xyz");
    return abc();
}

