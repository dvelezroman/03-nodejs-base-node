const commands = {
  base: {
    demand: true,
    alias: 'b',
    default: 2
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('list', 'Prints in console the multiply table', commands)
  .command('create', 'Creates a file with the table of a number --base with --limite', commands)
  .help()
  .argv;

module.exports = {
    argv,
  }