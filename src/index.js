module.exports = function check(str, bracketsConfig) {
  
  let arr = str.split(''),
      configArr = bracketsConfig;
  let newArr = [],
      stack =[];

       for (let i = 0; i < str.length; i++) {
         let letter = arr[i];
         for (let j = 0 ; j < configArr.length; j++){
             if (configArr[j][0] != configArr[j][1]){
             
           if (letter == configArr[j][0]){
             newArr[i] = j+1
               
//               
               
           } else if (letter == configArr[j][1]){
            newArr[i] = (j+1) * (-1);
               
//               
           } else {
//             
           }
         } else if ( (configArr[j][0] == configArr[j][1]) && letter == configArr[j][0] ) {
             newArr[i] = (j+1)*100;
         }
             }
         
       }
        
        // console.log(newArr);
        
        for ( let i = 0; i< newArr.length; i++){
            
            if (newArr[i] == stack[stack.length-1] && newArr[i] >= 100 ){
                stack.pop();
            } else if(newArr[i]*(-1) != stack[stack.length-1]){
                stack.push(newArr[i]);
                
            } else {
                if (newArr[i] > 0){
                    return false;
                }
                stack.pop();
            }
        }
  
    return stack.length == 0 ? true : false;
}

