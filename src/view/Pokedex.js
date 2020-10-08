import Card from '../components/pokemon/Card.js';
import axiosInstance from '../connection/index.js';

const Pokedex = {
    name :'pokedex',
    template : `
        <div id="pokedex">
            Pokedex aqui

            <div>
                <div>
                    <input type="text" placeholder="busca" v-model="pokeBusca"></input>
                    <button @click="buscaPokemon"> buscar</button>
                    <button @click="busca = false"> pokedex</button>
                    <button @click="loadMore">carregar...</button>
                    <ul v-if="busca">
                        <card :item=pokemonEncontrado>
                        </card>
                    </ul>
                    <ul v-if="!busca">    
                        <li v-for="(item,i) in arrayPokemon" :key="i" >
                            <card :item=item>
                            </card>
                        </li>
                    </ul>
                </div>
            </div>
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
        getPokemon : async function(){

            const lenArray = this.arrayPokemon.length+1

            for (let index = lenArray; index < lenArray+20 && index < 152; index++) {
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
        loadMore : async function(){
            if(this.arrayPokemon.length > 155){
            }
            await this.getPokemon()
        }

    },


    mounted: async function(){
        await this.getPokemon();
    }
}

export default Pokedex;