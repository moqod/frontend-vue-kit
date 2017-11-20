class PageTemplate {
  constructor( item ) {
    this.type = 'component';
    this.name = item.name;
    this.components = item.components;
    this.folder = 'components';
  }
}

export default PageTemplate