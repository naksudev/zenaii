// Searching modules
const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

// Beautiful logging of slash commands.
const chalk = require('chalk');
var AsciiTable = require('ascii-table');
var table = new AsciiTable();
table.setHeading('Events', 'Status').setBorder('|', '-', "+", "+");

module.exports = async (client) => {
    (await pGlob(`${process.cwd()}/events/**/*.js`)).map(async (eventFile) => {
        const event = require(eventFile);
        
        if (event.once) {
            client.once(event.name, (...args) => event.execute(client, ...args));
        } else {
            client.on(event.name, (...args) => event.execute(client, ...args));
        }
        
        if (event.name) {
            table.addRow(event.name, '🟢');
        } else {
            table.addRow(event.name, '⛔');
        }
    })

    console.log(chalk.red(table.toString()));
}