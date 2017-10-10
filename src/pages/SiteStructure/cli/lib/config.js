const fs = require('fs');

module.exports = {
  /**
   * ovveride the default config
   */
  updateConfigFile( config ) {
    let content = JSON.stringify(config, null, 2);
    fs.writeFileSync(`${__dirname}/config.json`, content, 'utf8');
  },
  /**
   * get the config json as js object
   */
  getConfigFile(src) {
    let config = fs.readFileSync(src, 'utf8');
    return JSON.parse(config);
  }
}