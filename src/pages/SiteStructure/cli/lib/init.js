import path from 'path';
import swig from 'swig';
const config = require('./config');
const commandLineArgs = require('command-line-args');
import generator from './generators/index';
import swigFilters from './swig-filters';

swigFilters(swig);

const optionDefinitions = [
  { name: 'src', alias: 's',type: String, multiple: false, defaultOption: true }
];

const options = commandLineArgs(optionDefinitions);

console.log(path.join(process.cwd(), options.src), options.src);

generator.createTemplates(config.getConfigFile(path.join(process.cwd(), options.src)));
