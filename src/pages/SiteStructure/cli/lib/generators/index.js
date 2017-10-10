import PageTemplate from './../templates/PageTemplate';
import TemplateGenerator from './TemplateGenerator';

class generator {
  static createTemplates(items) {
    items.pages.forEach(item => {
      new TemplateGenerator(new PageTemplate(item), items.components);
    })
  }
}

export default generator;