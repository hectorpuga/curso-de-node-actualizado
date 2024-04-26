const fs=require('fs');

const content=fs.readFileSync('README.md','utf-8');




const reactWordCount=content.match(/react/gi).length;

console.log('Palabras: ',reactWordCount);

