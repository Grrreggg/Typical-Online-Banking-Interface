let control_select = {
    template : `
      <span class='control_select' @click.self="open">
        <p class='value' @click.self="open">{{data.values[data.selected].name}}</p>
        <span class='icon_select' id='menu_burger' @click.self="open"></span>

        <div class='frame' v-if='active'>
            <p class='name inset'>{{data.name}}</p>

            <div class='list inset'>
                <p class='shadow' :class="{ inset: value.value == data.selected }" v-for="value in data.values" :key="value.value" @click="click(value.value);">{{value.name}}</p>
            </div>

            <div class='close shadow' @click="close();">
                <span class='icon' id='close'></span>
            </div>
        </div>
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
        click: function (arg) {
            this.$emit('control_select_changed', this.data, arg)
            this.close()
        },
        open: function () {
            if (!this.active){
                this.active = true
            }
        },
        close: function () {
            if (this.active){
                this.active = false
            }
        }
    },
    mounted(){
        console.log(this.data)
    }
}
