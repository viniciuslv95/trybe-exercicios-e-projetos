// 1.00,
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
}

// 2.
 let soma = 0;
 for (let index = 0; index < numbers.length; index += 1) {
     soma += numbers[index];
     
 }

 // 3.
 let media = soma / numbers.length
//  console.log(media)

 // 4.
 if (media > 20) {
     console.log("valor maior que 20");
 } else {
     console.log("valor menor ou igual a 20");
 }

 // 5. 
 let maiorNum = numbers[0];
 for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNum) {
        maiorNum = numbers[index];
    }
   
 }
 console.log(maiorNum);

 //6.
 let numImpares = 0;
 for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0){
        numImpares += 1;
        }
    }

    // agora outro if . Essa parte foi necessario o gabarito
    if (numImpares === 0) {
        console.log("nenhum valor ímpar encontrado");
    } else {
        console.log(numImpares);
    }

    // 7.
    let numMenor = numbers [0];
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] < numMenor){
           numMenor = numbers[index]
        }
        
    }
    console.log(numMenor);

    // 8.
    let array = [];
    for (let index = 1; index <= 25; index += 1) {
       array.push(index);

        
    }
    console.log(array);

    //9.
    let divisao = 0;
    for (let index = 0; index < array.length; index += 1) {
        divisao = array[index] / 2;
    }
    console.log(divisao);