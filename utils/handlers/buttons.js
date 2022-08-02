// Searching modules
const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async (client) => {
    (await pGlob(`${process.cwd()}/buttons/**/*.js`)).map(async (btnFile) => {
        const btn = require(btnFile);

        if (!btn.name) return console.warn(`Something is wrong, check : ${btn.name} button.`);

        client.buttons.set(btn.name, btn)
    })
}