// 1.
let fatorial = 1;
for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
    
}
console.log(fatorial);

// 2.
let word = 'tryber';
let wordInverter = '';

for (let index = 0; index < word.length; index += 1) {
   wordInverter += word[word.length - 1 - index]
    
}
console.log(wordInverter);

 // 3.
 let array = ['java','javascript','python','html','css'];
let maior = array[0];
let menor = array[0];
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
        maior = array[index];
    }
}
console.log(maior);

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menor.length) {
        menor = array[index];
    }   
 
    
}
console.log(menor);

// 4.
