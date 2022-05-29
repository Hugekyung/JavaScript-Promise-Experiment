// * Promise.all() : 모두 성공하거나, 하나라도 실패하는 경우 프로미스 반환
// * 각각의 프로미스는 병렬적으로 수행되며, 순서대로 처리되지 않았더라도 반환 시에는 순서대로 반환해준다(순서 보장)
Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
])
    .then(console.log) // [ 1, 2, 3 ]
    .catch(console.log);

// * 가장 먼저 실패한 프로미스를 기준으로, 실패한 프로미스의 reject 에러가 catch로 전달된다.
Promise.all([
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Error 1!")), 3000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Error 2!")), 2000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Error 3!")), 1000)
    ),
])
    .then(console.log)
    .catch(console.log); // Error: Error 3!
