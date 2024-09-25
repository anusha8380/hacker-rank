const findVowels = str =>{
  let count = 0;
  let vowels = ['a','e','i','o','u'],
  for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
     count++;
    }
  }
 returm count;
}
