import Search from './../Search/index';

export default  {
  name: 'page-item',
  props: {
    page: {
      type: Object,
      default: () => {
        return {
          name: '',
          components: []
        };
      }
    },
    components: {
      type: Object,
      default: () => {
        return [];
      }
    },
    onSelected: {
      type: Function
    }
  },
  components: {
    Search
  },
  mounted() {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    getPageComponents(ids) {
      return ids.map(id => this.components[id]);
    }
  },
  computed: {

  }
}

