export default  {
  name: 'header',
  props: [
    'phoneNumber'
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
    }
  },
  computed: {
  }
}
