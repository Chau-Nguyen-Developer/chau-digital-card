#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

figlet.text(" Hello ", {font: "3D-ASCII"}, function(err, data)
{
    if(err)
    {
        console.error("Error generating ASCII: ", err);
        return;
    }
    const ascii = data.split("\n").filter(line=>line.trim() !== "").join("\n");
    console.log(chalk.blueBright(ascii));
    const card = boxen(`
    ${chalk.bold('Chau Nguyen Developer  ')} |   Software Engineer
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

    console.log(card);
})

// const hello = figlet.text(" Good Day", {font:"3D-ASCII"});
// console.log(hello)