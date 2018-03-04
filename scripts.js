// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return (arr.sort((a, b) => {
      return a < b;
    }))[0]
  },
  
  reversed: function(str) {  
    let newStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    
    return newStr;
  },

  loudSnakeCase: function(){  
    // your code here
  },

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}