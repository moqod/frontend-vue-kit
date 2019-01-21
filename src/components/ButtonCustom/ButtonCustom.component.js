export default {
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onButtonClick: function(e) {
      if (!this.isLoading) {
        this.onClick(e);
      }
    }
  }
};
