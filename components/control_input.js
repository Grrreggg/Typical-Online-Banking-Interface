let control_input = {
    template : `
      <span class='control_input'>
        <input v-model="data">
        <span class='icon_select' id='edit'></span>
      </span>
    `,
    props: ['data'],
    data() {
        return {
            selected:'',
            active:false,
        }
    },
    methods: {
        click: function () {

        },
    },
    mounted(){
    }
}
