let arr = [1,2,2,3,3,3,4];

let count: {[key:number]:number} = {};

for(let num of arr){
    count[num]=(count[num]||0)+1;
}

console.log(count);