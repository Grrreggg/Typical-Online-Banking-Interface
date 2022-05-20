let control_input = {
    template : `
      <span class='control_input'>
        <input v-model="value">
        <span class='icon_select' id='edit'></span>
      </span>
    `,
    props: ['data','name'],
    data() {
        return {
            active:false,
            value:'',
        }
    },
    methods: {
    },
    watch: {
      value: function(val, oldVal) {
        this.$emit('control_input_changed', this.name, this.value)
      }
    },
    mounted(){
      this.value = this.data
    }
}
