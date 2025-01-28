function avgScore(...arr: any[]): number{
    let totalMarks=arr.reduce((acc, num)=>{
        if(typeof num==="number"){
            return acc+num;
        }
        else{
            return acc;
        }
    }, 0)

    return Number((totalMarks / 3).toFixed(2));
}

console.log(avgScore("Sparsh", 98, 97, 99));
console.log(avgScore("Raghav", 55, 72, 84));
console.log(avgScore("Rakshit", 87, 82, 96));