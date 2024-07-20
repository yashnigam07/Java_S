const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },2000)
}).then(function(){
    console.log("Async 2 reolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Chai", email: "123@gmail.com"});
    }, 3000);
});

promiseThree.then(function(user) {
    console.log(user);
});

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username: "Yash Nigam", password: "123"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    }, 4000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise either resloved or rejected"));

const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "Yash_Nigam", password: "123"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    }, 5000)
});

async function consumepromisefive(){
    try{
        const reponse = await promisefive
        console.log(reponse.username);
    }catch(error){
        console.log(error);
    }
}
consumepromisefive()