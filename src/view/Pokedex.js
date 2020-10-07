import Card from '../components/pokemon/Card.js';
import axiosInstance from '../connection/index.js';

const Pokedex = {
    name :'pokedex',
    template : `
        <div id="pokedex">
            Pokedex aqui
            <li v-for="item in 150" :key="item" >
                <card/>
            </li>
        </div>

    `,
    components : {
        Card
    },
    data(){
        return{
            nome : null,
            numero : null,
            tipo : null,
            foto : null,
        }
    },
    mounted(){
        axiosInstance.get('/pokemon')
        .then((response)=>{
            console.log(response);
        })

    }
}

export default Pokedex;