const testArr = [
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
];

// map - map 함수 자체는 배열을 돌면서 순서대로 값을 처리하고 있고, map 내부에서 await을 통해 비동기처리를 해줄 뿐이다.
// map 자체를 비동기처리해주지 않으면 비동기처리가 되기도 전에 map 함수는 다음 값을 실행해버린다.
// 결론적으로 pending상태인 배열을 리턴하게 된다.
async function PromiseTest() {
    const newTestArr = testArr.map(async (promise) => {
        const newPromise = (await promise) + 100;
        return newPromise;
    });

    console.log(newTestArr);
}

// map 함수 전체를 Promise.all()로 감싸 비동기처리를 하고 있고, map 함수 내부에서 각각의 루프마다 비동기처리를 해주고 있다.
// 따라서 모든 배열을 돌며 모두 성공하거나 하나라도 실패할 경우 프로미스 결과를 반환하게 한다.
async function PromiseTest2() {
    const newTestArr = await Promise.all(
        testArr.map(async (promise) => {
            const newPromise = (await promise) + 100;
            return newPromise;
        })
    );

    console.log(newTestArr);
}

// 단순 for loop를 통한 프로미스 처리
async function PromiseTest3() {
    const newArr = [];
    for (promise of testArr) {
        await promise.then((result) => newArr.push(result));
    }

    console.log(newArr);
}

PromiseTest(); // [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
PromiseTest2(); // [ 101, 102, 103 ]
PromiseTest3(); // [ 1, 2, 3 ] => 시간상 3번째 프로미스가 가장 빨리 종료하지만, Promise.all()은 순서를 보장하기 때문에 순서에 맞춰 리턴한다.
