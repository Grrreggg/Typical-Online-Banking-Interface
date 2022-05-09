let account = {
    template : `
    <div class='block shadow account' @click="click()">
      <p class='title'>{{balance}} {{name}}</p>
      <span class='icon' id='arrow_right'></span>
    </div>
    `,
    props: ['balance', 'name'],
    data() {
        return {
           
        }
    },
    methods: {
        click: function () {
            this.$emit('account_click_event', name)
        }
    }
}
