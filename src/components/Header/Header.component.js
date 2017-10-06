export default  {
  name: 'header',
  props: [
  ],
  mounted() {
  },
  data() {
    return {

    }
  },
  methods: {
    onLogout($event) {
      $event.preventDefault();
      this.$store.dispatch('logoutUser');
    },
    loginUser($event) {
      $event.preventDefault();
      this.$store.dispatch('loginUser');
    }
  },
  computed: {
  }
}
