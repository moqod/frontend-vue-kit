class PageTemplate {
  constructor( item ) {
    this.component = 'component';
    this.name = item.name;
    this.folder = 'components';
    this.src = `./components/${this.name}/`;
  }
}

export default PageTemplate