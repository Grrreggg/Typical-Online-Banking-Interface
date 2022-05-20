let account_new = {
    template : `
    <div class='block inset'>
        <p class='title'>New account</p>
        <span class='line inset'></span>

        <p class='sub title'>Name:
            <control_input :data="name"></control_input>
        </p>

        <p class='sub title'>Currency:
            <control_select :data="currency_select" @control_select_changed="control_select_changed"></control_select>
        </p>
        
        <br>
    </div>
    `,
    props: [],
    data() {
        return {
           name:'Account New',
           currency_select:{
            name:'Select Currency',
            values:[{name:'CNY ¥',value:0},{name:'USD $',value:1},{name:'EUR €',value:2},{name:'JPY ¥',value:3},],
            selected:1,
          }
        }
    },
    methods: {
        control_select_changed: function(obj, value){
            obj.selected = value
        },
    }
}
