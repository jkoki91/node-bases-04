

// const hello: string = 'Hello World!';
// console.log(hello);
import fs from 'fs'
import { yarg } from './config/plugins/yargs.plugins';
console.log(yarg);

let outputMessage: string = '';
// const base: number = 5;
const { b:base, l:limit, s:showTable } = yarg;
const header: string = `
    ==========================
    ====== Tabla del ${5} =======
    ==========================\n
`;

for (let i: number = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`
};

outputMessage = header + outputMessage;

if ( showTable ) {
    console.log(outputMessage);
}

// console.log(outputMessage);

const outputPath: string = 'outputs'; 

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!');

