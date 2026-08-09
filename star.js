// for (let i = 0; i < 10; i++){
//     if((i % 2) == 0){
//         console.log(0)
//     }else{
//         console.log(1)
//     }
// }

// let out = '';
// for(let i =0; i <= 10; i++){
//     out = out + '*';
// }
// console.log(out);

// let out = '';
// for(let i = 0; i <= 10; i++){
//     for(let j = 0; j < i; j++){
//       out = out + '* '; 
//     }
//     out = out + "\n";
// }
// console.log(out);


// let out = '';
// for(let i = 1; i <= 10; i++){
//     let temp = i * 2 - 1;
//     for(let j = 0; j < temp; j++){
//         out = out + '* '; 
//     }
//     out = out + "\n";
// }
// console.log(out); 


// let out = "";
// for(let i = 9; i >= 0; i--){
//     temp = (i * 2) - 1;
//     for(let j = 0; j < i; j++){
//         out = out + '  ';
//     }
//     for(let k = temp; k <= 17; k++){
//         out = out + "* ";
//     }
//     out = out + "\n";
// }

// for(let i = 1; i < 10; i++){
//     for(let j = 0; j < i; j++){
//         out = out + "  ";
//     }
//     for(k = i; k < 10; k++){
//         out = out + "* ";
//     }
//     out = out + "\n";
// }
// console.log(out);


function pattern(input){
    let out = "";
    for(let i = (input - 1); i > 0; i--){
        let temp = (i * 2) - 1;
        for (let j = 0; j < i; j++){
            out = out + "  ";
        }
        for(let k = temp; k <= (((input - 1) * 2) - 1); k++){
            if(k === temp || k === (input - 1) * 2 - 1){
                out = out + "* ";
            }else{
                out = out + "  ";
            }
        }
        out = out + "\n";
    }
    
    for(let i = input; i >= 0; i--){
        for (let k = i; k < input; k++){
            out = out + "  ";
        }
        let temp = (i * 2) - 1;
        // console.log(temp)
        for(let j = 0; j < temp; j++){
            if(j === 0 || j === (temp - 1)){
                out = out + "* ";
            }else{
                out = out + "  ";
            }
        }
        out = out + "\n";
    }
    return out;
}

console.log(pattern(10)); 



















