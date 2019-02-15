slowMath.add(6, 2)
    .then((result) => {
        console.log(result);
        return resultA = slowMath.multiply(result, 2);
    }).then((resultA) => {
        console.log(resultA);
        return resultB = slowMath.divide(resultA, 4);
    }).then((resultB) => {
        console.log(resultB);
        return resultC = slowMath.subtract(resultB, 3);
    }).then((resultC) => {
        console.log(resultC);
        return resultD = slowMath.add(resultC, 98);
    }).then((resultD) => {
        console.log(resultD);
        return resultE = slowMath.divide(resultD, 2);
    }).then((resultE) => {
        console.log(resultE);
        return resultF = slowMath.multiply(resultE, 50);
    }).then((resultF) => {
        console.log(resultF);
        return resultG = slowMath.divide(resultF, 40);
    }).then((resultH) => {
        console.log(resultH);
        return resultI = slowMath.add(resultH, 32);
    }).then((resultI) => {
        console.log(`The final result is ${resultI}`);
    }).catch((err) => {
        console.log('Something went wrong!');
        console.log(err);
    });