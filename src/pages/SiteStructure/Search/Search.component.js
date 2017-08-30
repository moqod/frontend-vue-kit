export default  {
  name: 'search',
  props: {
    placeholder: String,
    data: {
      type: Array,
      required: true
    },
    trackBy: {
      type: String,
      default: 'name'
    }
  },
  mounted() {
    
  },
  data() {
    return {
      selectedItemName: null,
      selectedItem: {},
      showPopup: false,
      foundItems: []
    }
  },
  methods: {
    onKeyup($event) {
      if ($event.keyCode !== 40 && $event.keyCode !== 38) {
        const value = $event.currentTarget.value.toLowerCase();
        this.search(value);
        this.showPopup = true;
      }
    },

    onBlur() {
      this.showPopup = false;
    },

    onFocus($event) {
      const value = $event.currentTarget.value.toLowerCase();
      this.search(value);
      this.showPopup = true;
    },

    search(value) {
      this.foundItems = this.data.filter((item) => {
        return item[this.trackBy].toLowerCase().search(value) !== -1;
      });
    },

    onUp() {
      if (this.foundItems.length) {
        const index = Math.max(0, this.foundItems.indexOf(this.selectedItem) - 1);

        this.selectedItemName = this.foundItems[index].name;
        this.selectedItem = this.foundItems[index];
      }
    },

    onDown() {
      if (this.foundItems.length) {
        const index = Math.min(this.foundItems.length - 1, this.foundItems.indexOf(this.selectedItem) + 1);

        this.selectedItemName = this.foundItems[index].name;
        this.selectedItem = this.foundItems[index];
      }
    },

    onSubmit() {
      let item;
      const { search } = this.$refs;
      
      if (this.selectedItemName) {
        item = this.selectedItem.name === this.selectedItemName ? this.selectedItem : this.selectedItemName;
      } else {
        item = search.value;
      }

      this.$emit('onSelected', item);

      this.selectedItemName = null;
      this.selectedItem = {};
      search.value = '';
    }
  },
  computed: {
    
  }
}

