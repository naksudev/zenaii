// Searching modules
const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

// Beautiful logging of slash commands.
const chalk = require('chalk');
var AsciiTable = require('ascii-table');
var table = new AsciiTable();
table.setHeading('Prefix Commands', 'Status').setBorder('|', '-', "+", "+");

module.exports = async (client) => {
    (await pGlob(`${process.cwd()}/commands/slashCommands/**/*.js`)).map(async (cmdFile) => {
        const slashCommand = require(cmdFile);

        if (slashCommand.name) {
            client.slashCommands.set(slashCommand.name, slashCommand);
            table.addRow(slashCommand.name, '🟢');
        } else {
            table.addRow(slashCommand.name, '⛔');
        }
    })
    
    console.log(chalk.blue(table.toString()));
}