import Card from '../components/pokemon/Card.js';
import axiosInstance from '../connection/index.js';

const Pokedex = {
    name :'pokedex',
    template : `

        <div id="pokedex">
            <div class="containerBusca">
                <input type="text" placeholder="busca" v-model="pokeBusca"></input>
                <button @click="buscaPokemon"> buscar</button>
                <button @click="busca = false"> pokedex</button>
            </div>
            <ul v-if="busca" class="ulCard">
                <card :item=pokemonEncontrado>
                </card>
            </ul>


            <ul v-if="!busca" class="ulCard">    
                <li v-for="(item,i) in arrayPokemon" :key="i" >
                    <card :item=item>
                    </card>
                </li>
            </ul>
            
        </div>
    `,
    components : {
        Card
    },
    data(){
        return{
            arrayPokemon : [],
            busca : false,
            pokeName : null,
            filtro : [],
            pokeBusca : '',
            pokemonEncontrado : null,
        }
    },

    methods: {
        getPokemon : async function(quantidade){

            const lenArray = this.arrayPokemon.length+1

            for (let index = lenArray; index < lenArray+quantidade && index < 153; index++) {
                // console.log(index);
                if(index == 116){
                    continue;
                }
                await axiosInstance.get(`/pokemon/${index}`)
                .then((response)=>{
                    const pokeObj = {
                        name : response.data.name,
                        id : response.data.id,
                        types : response.data.types,
                        foto : `assets/${response.data.id}.png`,
                        
                    }
                    this.arrayPokemon.push(pokeObj);
                })

            }
        },
        buscaPokemon :  async function(){
            this.busca  = true;
            this.pokeBusca = this.pokeBusca.toLowerCase();
            try{
                await axiosInstance.get(`/pokemon/${this.pokeBusca}`)
                .then((response)=>{
                    this.pokemonEncontrado = {
                        name : response.data.name,
                        id : response.data.id,
                        types : response.data.types,
                        foto : `assets/${response.data.id}.png`,
                    }
                })
                .catch((err)=>{
                    console.log('Pokemon Não Encontrado');
                })
            }
            catch(err){
                console.log(err);
            }

        },
        load : async function(){
            await this.getPokemon();
        },
        loadMore : async function(){
            // window.addEventListener('scroll',()=>{
            //     if(window.scrollY > 1000 && this.arrayPokemon.length < 151){
            //         this.getPokemon(20);
            //     }
            // });
        }

    },
    mounted: async function(){
        this.loadMore();
        await this.getPokemon(151);
    }
}




export default Pokedex;