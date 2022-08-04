// Searching modules
const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async (client) => {
    (await pGlob(`${process.cwd()}/menus/**/*.js`)).map(async (menuFile) => {
        const menu = require(menuFile);

        if (!menu.name) return console.warn(`Something is wrong, check : ${menu.name} button.`);

        client.menus.set(menu.name, menu)
    })
}