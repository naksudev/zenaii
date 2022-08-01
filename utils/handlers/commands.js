// Searching modules
const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

// Beautiful logging of slash commands.
const chalk = require('chalk');
var AsciiTable = require('ascii-table');
var table = new AsciiTable();
table.setHeading('Commands', 'Status').setBorder('|', '-', "+", "+");

module.exports = async (client) => {
    (await pGlob(`${process.cwd()}/commands/**/*.js`)).map(async (cmdFile) => {
        const cmd = require(cmdFile);

        if (cmd.name) {
            client.commands.set(cmd.name, cmd);
            table.addRow(cmd.name, '🟢');
        } else {
            table.addRow(cmd.name, '⛔');
        }
    })
    
    console.log(chalk.blue(table.toString()));
}