

function funcPairPrint(array){
    const output = []; 
    for(let i = 0; i < pairPrint.length; i++){
        for(let j = i + 1; j < pairPrint.length; j++){
            console.log(pairPrint[i], pairPrint[j]); 
        }
    }

}





let pairPrint = ["apple", "banana", "clementine"];
const result = funcPairPrint(pairPrint);