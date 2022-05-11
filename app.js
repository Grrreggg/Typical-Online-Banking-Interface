Vue.createApp({
    data() {
      return {
        DEMO_version:'mobile',
        current_page:'cards',
        nav_active_element:'accounts',
        accounts:[
          {
            name:'PiggyBank',
            balance:'$199.95', 
            id: 0,
          },
          {
            name:'OtherBank',
            balance:'$1050.05', 
            id: 1,
          },
          {
            name:'HarryPorrerFund',
            balance:'$199.95', 
            id: 2,
          },
          {
            name:'PiggyBankNew',
            balance:'$1992.95',
            id: 3, 
          }
        ],
        current_account:{
          name:'PiggyBank',
          balance:'$199.95', 
          id: 0,
          iban: 'AT483200000012345864',
          swift: 'SBIN IN BB 455',
          address: '16483 Privet Drive, Little Whinging',
          history: ['-19.56$ FoodStor', '+150.00$ Mike', '-11.46$ FoodStor', '-7.35$ Uber'],
        },
        cards:[
          {
            type:'visa',
            number:'1111 2222 3333 4444',
            name:'John Woo',
            date:'05/35',
            cvc:'123',
            history: ['-19.56$ FoodStor', '+150.00$ Mike', '-11.46$ GasStar', '-7.35$ Uber'],
            locked:false,
            id:0
          },
          {
            type:'mastercard',
            number:'1111 2222 3333 4444',
            name:'John Woo',
            date:'07/37',
            cvc:'456',
            history: ['-19.56$ FoodStor', '-11.46$ GasStar', '+150.00$ Mike', '-7.35$ Uber'],
            locked:false,
            id:1
          },
          {
            type:'unionpay',
            number:'1111 2222 3333 4444',
            name:'John Woo',
            date:'11/56',
            cvc:'789',
            history: ['-19.56$ FoodStor', '-11.46$ GasStar', '-7.35$ Uber'],
            locked:false,
            id:2
          },
          {
            type:'jcb',
            number:'1111 2222 3333 4444',
            name:'John Woo',
            date:'10/56',
            cvc:'101',
            history: ['-19.56$ FoodStor', '-11.46$ GasStar', '-7.35$ Uber'],
            locked:false,
            id:3
          },
        ],
        user:{
          name:'John Woo',
        },
        current_card:{},
        settings:{
          notifications:false,
          biometrics:true,
          autologin:true,
        },
      }
    },
    mounted(){
      this.open_tab('settings')
    },
    methods: {      
      // navigation click event handler
      nav_clicked: function (name) {
        this.nav_active_element = name
        this.current_page = name
      },
      control_checkbox_changed: function (obj) {
        this.settings[obj.name] = !this.settings[obj.name]
      },
      change_card: function (obj) {
        this.cards[obj.id].locked = !this.cards[obj.id].locked
      },
      open_tab(name, obj){
        if (name == 'account'){
          this.nav_active_element = 'accounts'
          this.current_page = 'account'
        }else if(name == 'accounts'){
          this.nav_active_element = name
          this.current_page = name    
        }else if(name == 'account_new'){
          this.nav_active_element = 'accounts'
          this.current_page = 'account_new'   
        }else if(name == 'card'){
          this.nav_active_element = 'cards'
          this.current_page = 'card'   
          this.current_card = obj
        }else if(name == 'cards'){
          this.nav_active_element = 'cards'
          this.current_page = 'cards'   
        }else if(name == 'settings'){
          this.nav_active_element = 'settings'
          this.current_page = 'settings'   
        }
      },
    }
})
.component('navigation', navigation)
.component('account', account)
.component('account_details', account_details)
.component('account_new', account_new)
.component('card_single', card_single)
.component('control_checkbox', control_checkbox)
  .mount('#app')
