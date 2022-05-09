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
        Recent expenses:
        </p>
        <div v-for="expense in account.expences">
            <p class='text'>{{expense}}</p>
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
