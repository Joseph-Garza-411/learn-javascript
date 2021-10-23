



function funcPairPrint(pairPrint){

const output = []; 
    for(let i = 0; i < pairPrint.length; i++){
        for(let j = i + 1; j < pairPrint.length; j++)
        console.log(pairPrint[i], pairPrint[j]); 
    }

}


const pairPrint = ["artichoke", "broccoli", "carrot", "daikon"];
const result = funcPairPrint(pairPrint); 