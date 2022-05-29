// * Promise.race() : 성공하든 실패하든 가장 빨리 이행(fulfilled)된 프로미스를 반환
Promise.race([
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Error 1!")), 3000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Error 2-1!")), 2000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Error 2-2!")), 2000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
])
    .then(console.log)
    .catch(console.log); // 1
