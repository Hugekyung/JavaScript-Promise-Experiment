// * Promise.all()은 모두 성공하거나, 하나라도 실패하는 경우 실패한 프로미스를 반환하게 되는데
// ? 실패한 이후 나머지 프로미스 작업들은 그 순간 멈출까, 아니면 끝까지 수행될까?
// ? 비동기처리를 통해 DB에 접근하게 될 경우, 어느 하나가 실패했는데 나머지들이 계속 수행되어 커밋된다면 문제가 될 수 있다..

// * 2초가 되면서 에러가 발생하지만, Promise.all()은 에러와 관계없이 모든 프로미스를 이행한 뒤 순서에 맞춰 값을 반환
const testArr = [
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(
        (resolve, reject) =>
            setTimeout(() => reject(new Error("Error !")), 2000) // 2초에서 에러가 발생했지만, Promise.all()은 전체를 모두 수행하는듯?
    ), // 2
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)), // 3
];

async function PromiseTest1() {
    const newTestArr = await Promise.all(
        testArr.map(async (promise) => {
            return await promise.catch((error) => error.message);
        })
    );

    console.log(newTestArr);
}

// * 비동기처리 에제 - for loop
// for loop를 통한 프로미스 처리
async function PromiseTest2() {
    const newArr = [];
    for (promise of testArr) {
        await promise.then((result) => newArr.push(result)).catch(console.log);
    }

    console.log(newArr);
}

PromiseTest1(); // [ 101, 102, 103 ]
PromiseTest2(); // [ 1, 2, 3 ]

// * Promise.allSettled()
async function PromiseTest3() {
    const newTestArr = await Promise.allSettled(
        testArr.map(async (promise) => {
            return await promise;
        })
    );

    console.log("Promise.allSettled() >>", newTestArr);
}

async function PromiseTest4() {
    const newArr = [];
    for (promise of testArr) {
        await promise.then((result) => newArr.push(result)).catch(console.log);
    }

    console.log("for loop >>", newArr);
}

PromiseTest3();
PromiseTest4();
