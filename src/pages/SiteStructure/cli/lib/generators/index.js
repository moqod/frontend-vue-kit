import PageTemplate from './../templates/PageTemplate';
import ComponentTemplate from './../templates/ComponentTemplate';
import TemplateGenerator from './TemplateGenerator';

class generator {
  static createTemplates(items) {
    items.pages.forEach(item => {
      new TemplateGenerator(new PageTemplate(item), items.components);
    });
    Object.keys(items.components).forEach(item => {
      new TemplateGenerator(new ComponentTemplate(items.components[item]), items.components);
    });
  }
}

export default generator;