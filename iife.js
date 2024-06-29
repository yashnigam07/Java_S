// Immediately Invoked Function Experssions (IIFE)

(function coffee(){ //Named IIfE
    console.log("DB connected");
})();

((name) => { //Unamed IIFe
    console.log(`Db connected to ${name}`);
})("Yash");