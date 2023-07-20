let n=5;
let binary = (n).toString(2);

let myArr = binary.split("").map((num)=>{
    return Number(num)
  })


  const maxOne = (myArr) => {
    let count = 0;
    let result = 0;
    for (var i = 0; i < myArr.length; i++) {
      if (myArr[i] === 1) {
        count += 1;
        result = Math.max(result, count);
      } else {
        count = 0
      }
    }
    console.log(result); 
  }

  maxOne(myArr)