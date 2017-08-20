export default  {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  }
};

