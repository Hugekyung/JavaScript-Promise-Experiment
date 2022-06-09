const testData = ["Success1", new Error(), "Success2", "Failure3"];

const forLoop = () => {
    for (const data of testData) {
        if (data === Error) {
            throw new Error();
        }
        console.log("forLoop >>", data);
    }
};

const forEachLoop = () => {
    testData.forEach((data) => {
        if (data === Error) {
            throw new Error();
        }
        console.log("forEachLoop >>", data);
    });
};

forLoop();
forEachLoop();
