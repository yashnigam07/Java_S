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
 

let a=0;
do{
    console.log(`Value of a ${a}`);
    a++;
}while(a<=10);


const arr = [1,2,3,4,5];
for (const num of arr){
    console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}


// Maps
const map = new Map()
map.set("In","India");
map.set("USA","United State of America");
map.set("Fr","France");
console.log(map);

for (const [key, value] of map){
    console.log(key,':-',value);
}


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
}


for (const[key,value] of myObject){
    console.log(key,':-',value);
}


const myObject = {
    js: 'javascript',
    cp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr = [1,2,3,4,5];
for (const key in arr){
    console.log(arr[key]);
}

const a = [1,2,3,4,5];
a.forEach(function (val){
    console.log(val);
})

const a = [1,2,3,4,5];
a.forEach((item)=>{
    console.log(item);
})

const coding = [
    {
        a:1,
        b:2
    },
    {
        a:3,
        b:4
    }
]

coding.forEach((item)=>{
    console.log(item.a);
})

const coding = ["a","b"];

const values = coding.forEach ((item) =>{
    console.log(item);
    return item
});

a = [1,2,3,4,5];
const b = a.filter((c)=>c>4);
console.log(b)

a = [1,2,3,4,5];
const b =[];
b.forEach((num)) => {
    if (num>4){
        b.push(num);
    }
}
console.log(b);

const a = [1,2,3,4,5,6];
const b = a.map((num)=>{return num+10})
console.log(b);
*/

const a = [1,2,3,4,5,6];
const b = a.map((num)=>num*10)
console.log(a);