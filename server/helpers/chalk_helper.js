const chalk = require('chalk')

const errorMsg = chalk.bgKeyword('white').redBright
const successMsg  =chalk.bgKeyword('green').whiteBright

module.exports = {
    errorMsg,
    successMsg
}