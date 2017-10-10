import path from 'path';
// import swig from 'swig';
import fs from 'fs-extra';

class TemplateGenerator {
  constructor( options, components ) {
    this.BLUEPRINTS = `${__dirname}/blueprints`;
    this._init(options, components);
  }

  _init( options = {}, components = [] ) {
    switch(options.type) {
      case 'component':
        this._generateComponent();
        break;
      case 'page':
      default:
        this._generatePage(options, components);
        break;
    }
  }

  _generateComponent(component) {

  }

  _generatePage(page, components) {
    const folder = path.join(process.cwd(), page.folder);
    if (!fs.existsSync(folder)){
      fs.mkdirSync(folder);
    }

    // if (fs.existsSync(folder)) {
    //   fs.readdir(path.join(process.cwd(), page.folder), ( err, dir ) => {
    //     console.log(err, dir);
    //   });
    // } else {
    //
    // }
    console.log(page, components);
  }
}

export default TemplateGenerator
