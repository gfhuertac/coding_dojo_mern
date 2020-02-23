function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

const getFiveHeads = new Promise( (resolve, reject) => {
    let start = Date.now();
    let headsCount = 0;
    while(headsCount < 5) {
        let result = tossCoin();
        console.log(`The coin is... ${result}`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    resolve(`It took ${Date.now() - start} milliseconds to flip five "heads"`);
});

getFiveHeads
    .then( res => console.log(res) )
    .catch( err => console.log(err) );