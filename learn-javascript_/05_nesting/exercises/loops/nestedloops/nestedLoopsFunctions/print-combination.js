

 


// let printCombinations = function(array1, array2){
//     for(let i = 0; i < array1.length; i++){
//         let ele1 = array1[i]; 
//         for(let j = 0; j < array2.length; j++){
//         let ele2 = array2[j];
//         console.log(ele1, ele2); 
//         }
        
//     }
// }


// let colors = ["gray", "cream", "cyan"];
// let clothes = ["shirt", "flannel"];  
// printCombinations(colors, clothes); 







/* 
We need a nested loop that indicates that two temperatures
available for soup and tea: hot and cold. 


*/ 

// printCombinations(["hot", "cold"], ["soupt", "tea"]); 
//This function should print: 
// hot soup 
// hot tea 
// cold soup 
// cold tea 




let array = [
[' hot ', ` cold `], 
[' soup ', ` tea `],

]; 
for(let i = 0; i < array.length -1; i++){
    console.log(array[i]);  
    // let subarray = array[i]; 
    for(let j = array[1][0]; j < array.length; j++){
        console.log(subarray + ``[j] ); 
    }
}

// console.log(array[0]); 
// console.log(array[1]); 
// console.log(array[0]+ `` + array[1]); 




