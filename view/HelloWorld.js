
// O view renderiza o objeto js entendendo ele como 
// um componente View

const HelloWorld = {
    name : "hello-world",
    template : `
        <div>
            <h1>    Oi meu chapa!!!     </h1>
            <button @click=pushMax>Não clique aqui! </button>
        </div>
    `,
    methods : {
        pushMax : function() {
            this.$router.push('max');
        }
    }
}


export default HelloWorld;