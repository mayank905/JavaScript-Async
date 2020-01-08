const fetchRandomNumbers=()=>{
    return new Promise((resolve ,reject)=>{
        console.log('Fetching number...');
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            console.log('Received random number:', randomNum);
            resolve(randomNum)
        }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}

const fetchRandomString=()=>{
    return new Promise((resolve ,reject)=>{
        console.log('Fetching string...');
        setTimeout(() => {
            let result           = '';
            let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( let i = 0; i < 5; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            console.log('Received random string:', result);
            resolve(result)
        }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}

let sum=0

fetchRandomNumbers().then((randomNum) => { sum+=randomNum;console.log(sum) });
fetchRandomNumbers().then((randomNum) => { sum+=randomNum;console.log(sum) });
fetchRandomString().then((randomStr) => { console.log(randomStr) });

Promise.all([fetchRandomNumbers(),fetchRandomString()]).then((finalResult)=>{finalResult=finalResult[0]+finalResult[1]+"";
    console.log('finalResult'+finalResult)})
let sum1=0
Promise.all([fetchRandomNumbers(),fetchRandomNumbers(),fetchRandomNumbers(),fetchRandomNumbers(),fetchRandomNumbers(),fetchRandomNumbers(),fetchRandomNumbers(),fetchRandomNumbers(),fetchRandomNumbers(),fetchRandomNumbers()])
.then(finalResult=>{
    for(let i=0;i<finalResult.length;i++){
        sum+=finalResult[i]
    }
    console.log("finalnumber "+sum)
})
