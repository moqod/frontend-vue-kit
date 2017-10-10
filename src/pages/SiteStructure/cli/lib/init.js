const config = require('./config');
const commandLineArgs = require('command-line-args');
import generator from './generators/index';

const optionDefinitions = [
  { name: 'src', alias: 's',type: String, multiple: false, defaultOption: true }
];

const options = commandLineArgs(optionDefinitions);

generator.createTemplates(config.getConfigFile(options.src));
