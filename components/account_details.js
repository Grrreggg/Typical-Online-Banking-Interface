let account_details = {
    template : `
    <div class='block inset'>
        <p class='title'>{{account.name}}</p>
        <span class='line inset'></span>
        <p class='title'>Balance: {{account.balance}}</p>
        <p class='text'>
        IBAN: {{account.iban}}
        </p>
        <p class='text'>
        SWIFT: {{account.swift}}
        </p>
        <p class='text'>
        Address: {{account.address}}
        </p>
        <span class='line inset'></span>
        <p class='text'>
        Recent history:
        </p>
        <div v-for="history_el in account.history">
            <p class='text'>{{history_el}}</p>
        </div> 
    </div>
    `,
    props: ['account'],
    data() {
        return {
           
        }
    },
    methods: {
       
    }
}
