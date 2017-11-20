import path from 'path';
import swig from 'swig';
import fs from 'fs-extra';

class TemplateGenerator {
  constructor( options, components ) {
    this.BLUEPRINTS = '/dist/blueprints';
    this._init(options, components);
  }

  _init( options = {}, components = [] ) {
    this._generate(options, components);
  }

  _generate(item, components) {
    const dirPath = this._getTemplatePath(item.type);
    const name = item.name;
    const folder = path.join(process.cwd(), item.folder);
    const folderPage = path.join(folder, name);
    
    if (!fs.existsSync(folder)){
      fs.mkdirSync(folder);
    }
    
    if (!fs.existsSync(folderPage)){
      fs.mkdirSync(folderPage);
    }

    fs.readdir(dirPath, ( err, files ) => {
      files.forEach(tempFile => {
        const compiled = this._compileTpl(`${dirPath}/${tempFile}`, {
          data: item,
          components: components
        });
        let fileName = this._createFileName(tempFile, name);
      
        fs.outputFile(path.join(folderPage, fileName), compiled, function( err ) {
          if( err ) console.log(err);
        });
      });
    });
  }

  _getTemplatePath(templateType) {
    return path.join(process.cwd(), `${this.BLUEPRINTS}/${templateType}`);
  }

  _compileTpl( file, { data, components } ) {
    const compiled = swig.compileFile(file);
    return compiled({ data, components });
  }

  _createFileName(tempFile, name) {
    return tempFile.replace(/temp/, name);
  }
}

export default TemplateGenerator
