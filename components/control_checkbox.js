let control_checkbox = {
    template : `
      <span class='control' @click="click();" :class="{ active: active==true }"></span>
    `,
    props: ['active', 'name'],
    data() {
        return {
    
        }
    },
    methods: {
        click: function () {
            this.$emit('control_checkbox_changed', this)
        }
    }
}
