let arr = [11, 24, 33, 33, 45, 45, 65];

1) Duplicate removal new Set() way:
let uniqueArr=[...new Set(arr)]
console.log("(1) Duplicate removal new Set() way:", uniqueArr);

++++++++++++++++++++++++++++++++
  
2) Duplicate removal filter way:
uniqueArr=arr.filter((num,index,array)=>{ 
  return array.indexOf(num) === index;
})

console.log("(2) Duplicate removal filter way:", uniqueArr);
++++++++++++++++++++++++++++++++
  
3) Duplicate removal reduce way
uniqueArr=arr.reduce((acc,num)=>{
  if(!acc.includes(num)){
    acc.push(num)
  }
  return acc;
},[])

console.log("(3) Duplicate removal reduce way:", uniqueArr)
++++++++++++++++++++++++++++++++
  
4)Duplicate removal Hashmap object way:
let countObj = {};
for (let num of arr) {
    countObj[num] = (countObj[num] || 0) + 1;
}

uniqueArr = Object.keys(countObj).map(Number);

console.log("(4) Duplicate removal Hashmap object way:", uniqueArr);
++++++++++++++++++++++++++++++++
  
5) Duplicate(s) finder using filter

const duplicates=arr.filter((num,i,array)=>{
  return array.indexOf(num)!==i
})

console.log("(5) Duplicate(s) finder using filter:",duplicates)
//output: [ 33, 45 ]
