function TwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      const firstNumber = arr[i]; 
      for (let j = i + 1; j < arr.length; j++) { 
        const secondNumber = arr[j]; 
        if (firstNumber + secondNumber === target) {
          return [i, j]; 
        }
      }
    }
    return null; 
  }


console.log(TwoSum([1,2,3,4,5],4));