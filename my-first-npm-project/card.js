#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from 'url';

//Get the current folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Path to your font
const fontPath = path.join(__dirname, 'larry3d');

//Make a big ASCII name
//const name = figlet.textSync("Hello");

//Style my details with chalk
//${figlet.textSync("Hello", {font: "larry3d"})}


//const fontPath = "/workspaces/chau-digital-card/fonts/larry3d";


const card = boxen(`
${figlet.text("Hello", {font:"3D-ASCII", horizontalLayout:'default', verticalLayout:'default'}, function(err,data)
{
    if(err)
    {
        //console.error("Error loading font: ", err);
        throw err;
        //return;
    }
    console.log(data);
})}
${chalk.bold('Chau Nguyen Developer ')} |  Software Engineer
${chalk.bold('-'.repeat(60))}

${chalk.bold('Github:')} https://github.com/Chau-Nguyen-Developer

${chalk.bold('LinkedIn:')} https://www.linkedin.com/in/ngoc-chau-nguyen-cpp/

${chalk.bold('Substack Blog:')} https://ngocchaun1.substack.com/


${chalk.bold('Card: ')} npx chauDeveloper
`,
    {
        borderColor: 'cyan',
        borderStyle: 'classic',
        padding: 0.5,
    }
);

console.log(card)