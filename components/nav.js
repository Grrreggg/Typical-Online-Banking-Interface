let navigation = {
    template : `
    <div class='nav shadow'>
            <div class='button' @click="click( 'accounts' )" :class="{ active: active_element=='accounts' }" >
              <span id='accounts'></span>
              <p>Accounts</p>
            </div>

            <div class='button' @click="click( 'cards' )" :class="{ active: active_element=='cards' }" >
              <span id='cards'></span>
              <p>Cards</p>
            </div>

            <div class='button' @click="click( 'transfers' )" :class="{ active: active_element=='transfers' }" >
              <span id='transfers'></span>
              <p>Transfers</p>
            </div>

            <div class='button' @click="click( 'messages' )" :class="{ active: active_element=='messages' }" >
              <span id='messages'></span>
              <p>Messages</p>
            </div>

            <div class='button' @click="click( 'settings' )" :class="{ active: active_element=='settings' }" >
              <span id='settings'></span>
              <p>Settings</p>
            </div>

          </div>
    `,
    props: ['active_element'],
    data() {
        return {
    
        }
    },
    methods: {
        click: function (name) {
            this.$emit('nav_click_event', name)
        }
    }
}
