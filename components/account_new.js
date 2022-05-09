let account_new = {
    template : `
    <div class='block inset'>
        <p class='title'>New account</p>
        <span class='line inset'></span>
        <p class='text'>
        Name: 
        <input v-model="name">
        </p>
        <p class='title'>Currency</p>
        <p class='text'>
        Currency: ↓
            <select name="select">
                <option value="CNY">CNY ¥</option>
                <option value="USD">USD $</option>
                <option value="EUR" selected>EUR €</option>
                <option value="JPY">JPY ¥</option>
            </select>
        </p>
        <br>
    </div>
    `,
    props: [],
    data() {
        return {
           name:''
        }
    },
    methods: {
       
    }
}
