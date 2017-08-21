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
      siteStructure: this.json || {
        pages: [
          {
            name: 'Add page',
            empty: true
          }
        ],
        components: [],
        store: []
      }
    }
  },
  methods: {
    onAddPage(page, $index) {
      console.log(page, $index);
    }
  },
  computed: {

  }
}
