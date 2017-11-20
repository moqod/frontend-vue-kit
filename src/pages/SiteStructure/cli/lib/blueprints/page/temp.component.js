{% for component in data.components %}import {{components[component].name}} from './../../components/{{components[component].name}}/index';
{% endfor %}
export default  {
  name: '{{data.name | kebabCase}}',
  props: [],
  components: {
    {% for component in data.components %}{{components[component].name}}{% if loop.index !== data.components.length %},
    {% endif %}{% endfor %}
  },
  mounted() {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
   
  },
  computed: {

  }
}
