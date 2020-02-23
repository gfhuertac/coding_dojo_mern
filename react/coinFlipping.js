function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

const getFiveHeads = new Promise( (resolve, reject) => {
    let start = Date.now();
    let headsCount = 0;
    let counter = 0;
    while(headsCount < 5) {
        if (counter == 100) {
            reject('You tossed the coin 100 times with no positive results!');
        }
        let result = tossCoin();
        ++counter;
        console.log(`The coin is... ${result}`);
        if(result === "heads") {
            ++headsCount;
        } else {
            headsCount = 0;
        }
    }
    return resolve(`It took ${Date.now() - start} milliseconds to flip five "heads"`);
});

getFiveHeads
    .then( res => console.log(res) )
    .catch( err => console.log(err) );