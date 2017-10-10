import path from 'path';

class PageTemplate {
  constructor( item ) {
    this.type = 'page';
    this.name = item.name;
    this.components = item.components;
    this.folder = 'pages';
  }
}

export default PageTemplate