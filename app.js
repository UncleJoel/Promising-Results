// Promise Chaining

// slowMath.add(6, 2)
//     .then((result) => {
//         console.log(result);
//         return resultA = slowMath.multiply(result, 2);
//     }).then((resultA) => {
//         console.log(resultA);
//         return resultB = slowMath.divide(resultA, 4);
//     }).then((resultB) => {
//         console.log(resultB);
//         return resultC = slowMath.subtract(resultB, 3);
//     }).then((resultC) => {
//         console.log(resultC);
//         return resultD = slowMath.add(resultC, 98);
//     }).then((resultD) => {
//         console.log(resultD);
//         return resultE = slowMath.divide(resultD, 2);
//     }).then((resultE) => {
//         console.log(resultE);
//         return resultF = slowMath.multiply(resultE, 50);
//     }).then((resultF) => {
//         console.log(resultF);
//         return resultG = slowMath.divide(resultF, 40);
//     }).then((resultH) => {
//         console.log(resultH);
//         return resultI = slowMath.add(resultH, 32);
//     }).then((resultI) => {
//         console.log(`The final result is ${resultI}`);
//     }).catch((err) => {
//         console.log('Something went wrong!');
//         console.log(err);
//     });

//Async/Await

async function doMath() {
    try {
        let result = await slowMath.add(6, 2);
        console.log(result);
        let resultA = await slowMath.multiply(result, 2);
        console.log(resultA);
        let resultB = await slowMath.divide(resultA, 4);
        console.log(resultB);
        let resultC = await slowMath.subtract(resultB, 3);
        console.log(resultC);
        let resultD = await slowMath.add(resultC, 98);
        console.log(resultD);
        let resultE = await slowMath.divide(resultD, 2);
        console.log(resultE);
        let resultF = await slowMath.multiply(resultE, 50);
        console.log(resultF);
        let resultG = await slowMath.divide(resultF, 40);
        console.log(resultG);
        let resultH = await slowMath.add(resultG, 32);
        console.log(`The final result is ${resultH}`);
    } catch (err) {
        console.log('Something Went Wrong!');
    }
}

doMath();
