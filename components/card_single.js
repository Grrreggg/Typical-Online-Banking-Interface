let card_single = {
    template : `
    <div class='block card shadow' @click="click()">
        <span class='icon logo' v-bind:id="card.type"></span>
        <p class='number'>{{num_hidden}}</p>
        <p class='number name'>{{card.name}}</p>
        <p class='number date'>{{card.date}}</p>
        <p v-if="hidden==false" class='number cvc'>{{card.cvc}}</p>
    </div>
    `,
    props: ['card', 'hidden'],
    data() {
        return {
           num_hidden:0,
        }
    },
    mounted(){
        if (this.hidden){
            this.num_hidden = '**** **** **** '+ this.card.number.substr(14);
        }else{
            this.num_hidden = this.card.number;
        }
        
    },
    methods: {
        click: function () {
         
        }
    }
}
