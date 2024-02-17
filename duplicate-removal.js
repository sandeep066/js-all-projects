let arr = [11, 24, 33, 33, 45, 45, 65];
let uniqueArr=[...new Set(arr)]
console.log("Duplicate removal new Set() way:", uniqueArr);

uniqueArr=arr.filter((num,index,array)=>{ 
  return array.indexOf(num) === index;
})

console.log("Duplicate removal filter way:", uniqueArr);

uniqueArr=arr.reduce((acc,num)=>{
  if(!acc.includes(num)){
    acc.push(num)
  }
  return acc;
},[])

console.log("Duplicate removal reduce way:", uniqueArr)

let countObj = {};
for (let num of arr) {
    countObj[num] = (countObj[num] || 0) + 1;
}

uniqueArr = Object.keys(countObj).map(Number);

console.log("Duplicate removal Hashmap object way:", uniqueArr);
