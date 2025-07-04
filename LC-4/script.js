// console.log("Script started");

// let userData = [
//     {
//         name: "Vedant",
//         age: 21
//     },
//     {
//         name: "Pranav",
//         age: 22
//     },
//     {
//         name: "Vadhwa",
//         age: 20
//     }
// ]


// function displayData() {
//     // use userData to display data in the console display only who has age greater than 20
//     userData.forEach(user =>{
//         if(user.age > 20){
//             console.log(`Name: ${user.name}, Age: ${user.age}`);
//         }
//     })
// }

// displayData();


// PROMISES

// let priyanshuPromise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         let isPriyanshuHappy = true; // Simulating Priyanshu's happiness

//         if(isPriyanshuHappy){
//             resolve("Priyanshu got Placed!");
//         } else {
//             reject("Priyanshu did not got placed.");
//         }
//     }, 2000);   
// })


// let vedantPromise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         let isVedantHappy = true; // Simulating Vedant's happiness

//         if(isVedantHappy){
//             resolve("Vedant got Placed!");
//         } else {
//             reject("Vedant did not get Good Package.");
//         }
//     }, 2000);   
// })

// vedantPromise
//     .then((res)=>{
//         console.log("Vedant's Promise Resolved");
//         console.log(res);
//         if(res){
//             console.log("Party Time");
//         } else {
//             console.log("No Party");
//         }
//     })
//     .catch((error)=>{
//         console.log("Vedant's Promise Rejected: " + error);
//         console.log("No Party");
//     });


// vedantPromise
//     .then(()=>{
//         console.log("LAYOFF");
//     })
//     .catch(()=>{ /* Already handled above, or you can leave this empty to suppress warning */ });




    ///////////////////////////////

// Promise.all 

// const p1 = new Promise((resolve, reject) =>{
//     let isP1Resolved = true;
//     setTimeout(()=>{
//         if(isP1Resolved)
//             resolve("P1 Resolved");
//         else
//             reject("P1 Rejected");

//     },2000)
// })

// const p2 = new Promise((resolve, reject)=>{
//     let isP2Resolved = true;
//     setTimeout(()=>{
//         if(isP2Resolved)
//             resolve("P2 Resolved");
//         else
//             reject("P2 Rejected");

//     },3000)
// })

// const p3 = new Promise((resolve, reject)=>{
//     let isP3Resolved = true;
//     setTimeout(()=>{
//         if(isP3Resolved)
//             resolve("P3 Resolved");
//         else
//             reject("P3 Rejected");

//     },4000)
// })

// Promise.all([p1, p2, p3]).then((res) =>( console.log(res))).catch((error) =>( console.log(error)));
// // Promise.any
// // Promise.any will resolve with the first fulfilled promise, or reject if all promises are rejected.
// Promise.any([p1, p2, p3]).then((res) =>( console.log(res))).catch((error) =>( console.log(error)));
// // Promise.allSettled
// // Promise.allSettled will wait for all promises to settle (either fulfilled or rejected) and return an array of objects describing the outcome of each promise.
// Promise.allSettled([p1, p2, p3]).then((res) =>( console.log(res))).catch((error) =>( console.log(error)));


///////////////////////////
// Async/Await Example

// const p1 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("P1 Resolved");
//     }, 2000);
// })

// function checkp1(){
//     let p1Result = p1;
//     console.log("Checking P1..." + p1Result);
// }

// checkp1();

// async function checkp1Async(){
//     try {
//         let p1Result = await p1;
//         console.log("Checking P1 Async..." + p1Result);
//     } catch (error) {
//         console.error("Error in checkp1Async: ", error);
//     }
// }

// checkp1Async();


////////////////////////

// fethcing data from a api https://dummyjson.com/products

async function fetchData(){
    // const response = await fetch("https://dummyjson.com/products");
    // if(!response.ok) {
        
    //     throw new Error("Network response was not ok " + response.statusText);
    // }else {
    //     const data = await response.json();
    //     console.log(data);
        
    // }

    // try catch block to handle errors
    try{
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();
        console.log(data);
    } catch(error) {
        console.error("Error fetching data: ", error);
    }
}

fetchData();


// homw work fetch data in array but only nake price and decriptions

