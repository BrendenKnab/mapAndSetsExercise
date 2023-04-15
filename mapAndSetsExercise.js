//1. returns {1,2,3,4}

//2. 'ref'

//3. {true: [1,2,3], false: [1,2,3]}

function hasDuplicate(arr){
    const set = new Set(arr);
    return arr.length != set.size;
};

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if('aeiou'.includes(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }