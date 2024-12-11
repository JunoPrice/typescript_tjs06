import readlinesync = require('readline-sync')

const cores: Array<string> = new Array<string>();

console.log('Digite 5 cores:');
for (let i = 0; i < 5; i++) {
    const cor = readlinesync.question(`Digite a cor ${i + 1}: `);
    cores.push(cor);
}

console.log('\nCores adicionadas na ordem em que foram inseridas:');
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]); 
}

cores.sort();

console.log('\nCores ordenadas em ordem crescente:');
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]); 
}
