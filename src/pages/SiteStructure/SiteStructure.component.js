import nanoid from 'nanoid';
import PageItem from './PageItem/index';

export default  {
  name: 'site-structure',
  props: {
    json: {
      default: () => {},
      type: Object
    }
  },
  mounted() {

  },
  data() {
    return {
      foundComponents: [],
      siteStructure: this.json || {
        pages: [
          {
            name: 'PageName',
            pageUrl: '/',
            components: []
          }
        ],
        components: {},
        store: []
      }
    }
  },
  methods: {
    onAddPage(page, $index) {
      this.siteStructure.pages.push({
        id: nanoid(),
        name: 'PageName',
        components: []
      });
    },
    onAddComponent(page, name) {
      const id = nanoid();

      this.siteStructure.components[id] = {
        id: id,
        name: name || 'ComponentName'
      };
      
      page.components.push(id);
    },
    getPageComponents(ids) {
      return ids.map(id => this.siteStructure.components[id]);
    },
    onSelected(item, page) {
      if (typeof item === 'string') {
        this.onAddComponent(page, item);
      } else {
        if (page.components.indexOf(item.id) === -1) {
          page.components.push(item.id);
        }
      }
    },
    onDownload() {
      let json = JSON.stringify(this.siteStructure);
      let blob = new Blob([json], {type: 'application/json'});
      let url  = URL.createObjectURL(blob);
      let a = this.$refs.download_link;
      
      a.download = 'structure.json';
      a.href = url;
    }
  },
  computed: {

  },
  components: {
    PageItem
  }
}
