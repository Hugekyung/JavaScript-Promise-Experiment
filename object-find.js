const object = [
    {
        _id: "62a163ddac4b496254c13d9e",
        answer: "1",
        result: [
            {
                _id: "62a163ddac4b496254c13d9f",
                date: "2022-06-09T03:07:09.099Z",
                totalUser: 0,
                wrong: 0,
                yesterday: 0,
            },
        ],
    },
    {
        _id: "62a163ddac4b496254c13d9c",
        answer: "2",
        result: [
            {
                _id: "62a163ddac4b496254c13d9d",
                date: "2022-06-09T03:07:09.099Z",
                totalUser: 0,
                wrong: 0,
                yesterday: 0,
            },
        ],
    },
    {
        _id: "62a163ddac4b496254c13da2",
        answer: "0",
        result: [
            {
                _id: "62a163ddac4b496254c13da3",
                date: "2022-06-09T03:07:09.099Z",
                totalUser: 0,
                wrong: 0,
                yesterday: 0,
            },
        ],
    },
    {
        _id: "62a163ddac4b496254c13da0",
        answer: "3",
        result: [
            {
                _id: "62a163ddac4b496254c13da1",
                date: "2022-06-09T03:07:09.099Z",
                totalUser: 0,
                wrong: 0,
                yesterday: 0,
            },
        ],
    },
];

// console.log(object.find((elem) => elem._id === "0000"));
let quizResult = { result: {}, score: 0 };
quizResult.result = { ...quizResult.result, "62a163ddac4b496254c13da0": true };
quizResult.result = { ...quizResult.result, "62a163ddac4b496254c13da2": false };
quizResult.score += Number((1 / object.length) * 100);

// console.log(quizResult);

let toUpdate = { totalUser: 0, wrong: 0 };
toUpdate.totalUser += 1;
toUpdate.totalUser += 1;
toUpdate.totalUser += 1;
toUpdate.wrong += 1;
today = new Date();
toUpdate = { ...toUpdate, date: today };

console.log(toUpdate);
