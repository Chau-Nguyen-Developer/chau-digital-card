#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

//Make a big ASCII name
//const name = figlet.textSync("Hello");

//Style my details with chalk
const card = boxen(`
//${figlet.textSync("Hello", {font: "larry3d"})}
${chalk.bold('Chau Nguyen Developer ')} |  Software Engineer
${chalk.bold('-'.repeat(60))}

${chalk.bold('Github:')} https://github.com/Chau-Nguyen-Developer

${chalk.bold('LinkedIn:')} https://www.linkedin.com/in/ngoc-chau-nguyen-cpp/

${chalk.bold('Substack Blog:')} https://ngocchaun1.substack.com/


${chalk.bold('Card: ')} npm chauDeveloper
`,
    {
        borderColor: 'cyan',
        borderStyle: 'classic',
        padding: 0.5,
    }
);

console.log(card)