function compare(num1,num2){
 return num1-num2;
}

// This function will merge two array and sort them from small to big
module.exports.mergeSort = function(input1,input2){
  const mergedArr = [...input1,...input2];
  // const sortedArr = mergedArr.sort(); // this will not work in array
  const sortedArr = mergedArr.sort(compare);
  return sortedArr;
}

module.exports.twoSum = function(nums, target) {
    for(let i=0; i<nums.length;i++){
      let difference;
      if(target>nums[i]){
        difference = target - nums[i];
      }else{
         difference = nums[i] - target;
      }
      let index = nums.indexOf(target -nums[i]);  
        if(nums.includes(difference) && nums.indexOf(target -nums[i]) !== i){
            return [i,nums.indexOf(target -nums[i])]
        }
    }
};

module.exports.numberReverse = function(x) {
   const num = x;
    const max = Math.pow(2,31)-1;
    const low = Math.pow(-2,31);
 
    const reverse = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
     if( reverse > max || reverse < low){
        return 0
    }
    return reverse;
    
};

module.exports.stringReverse = function(value){
  if(!value || value.length < 2 || typeof value !== 'string'){
    return 'Input is not valid string';
  }
  const reverseString = [];
  for(let i = value.length-1; i> 0; i--){
    reverseString.push(value[i]);
  }
  console.log(reverseString.join(''));
};

module.exports.palindrome = function(value){
  const numberStr = value.toString();
  const reverse = numberStr.split('').reverse();
  return reverse.join('')===numberStr;
}

module.exports.romanToInt = function(romanNumber){
  const romanKey = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
  };
  let value = 0;
  const numArr = romanNumber.split('');
  for(let i=0; i<numArr.length; i++){
    if(romanKey[numArr[i]] < romanKey[numArr[i+1]]) {
            value = value + (romanKey[numArr[i+1]] -romanKey[numArr[i]]);
            i++;
        }
        else{
            value += romanKey[numArr[i]];    
        }

   
  }
   return value;
}

module.exports.searchWord = function(sentence, searchWord){
  let pattern = new RegExp(searchWord, "g");
  let found = sentence.match(pattern);
  return found.length;
}

module.exports.breakWord = function(sentence){
  const charArr = sentence.split('');
  let finalWord = "";
  for(let i=0; i<charArr.length; i++){
    if(charArr[i].charCodeAt() >="A".charCodeAt() && charArr[i].charCodeAt()<="Z".charCodeAt() && i!== 0){
      finalWord += " "+ charArr[i];
    }else{
    finalWord+=charArr[i]
    }
  }
  return finalWord;
}