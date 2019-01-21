import ButtonCustom from '@/components/ButtonCustom/index';

export default {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLoading: false,
    };
  },
  head: {
    title: {
      inner: 'Frontend-vue-kit',
      separator: '|',
      complement: 'Welcome'
    },
    // Meta tags
    meta: [
      { name: 'Frontend-vue-kit', content: 'Welcome' }
    ]
  },
  created() {
    this.$store.dispatch('loginUser');
  },
  components: {
    ButtonCustom
  },
  methods: {
    onButtonClick: function(e) {
      console.log('click', e);
      this.isLoading = true;
      setTimeout(() => this.isLoading = false, 2000);
    }
  }
};

