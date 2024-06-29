// for 
/*
let a = 1;
for (a; a<10; a++){
    if(a===5){
        console.log(`${a}is my fav. `)
    }
    else{
        console.log(a);
    }
}



// Tables

for (let i = 1; i<= 10; i++){
    console.log(`Outer loop ${i}`);
    for ( let j = 1; j<=10; j++){
        console.log(i+'*'+j+'='+i*j);
    }
}


let myarr = [1,2,3,4,5];
for (let a = 0; a<myarr.length; a++){
    const element = myarr[a];
    console.log(element);
}


for(let i=0; i<=10; i++){
    if(i==7){
        console.log(`Detected ${i} and loop is terminated`);
        break
    }
    else(i==5);{
        console.log(`Detected ${i}`);
        continue
    }
}



a=0;
while(a<10){
    console.log(`Value${a}`);
    a++;
}
 */

let a=0;
do{
    console.log(`Value of a ${a}`);
    a++;
}while(a<=10);