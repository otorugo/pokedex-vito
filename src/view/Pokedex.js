import Card from '../components/pokemon/Card.js';
import axiosInstance from '../connection/index.js';

const Pokedex = {
    name :'pokedex',
    template : `
        <div id="pokedex">
            Pokedex aqui
            <ul>    
                <li v-for="(item,i) in arrayPokemon" :key="i" >
                    <card
                    :item=item
                    />
                </li>
            </ul>
        </div>

    `,
    components : {
        Card
    },
    data(){
        return{
            arrayPokemon : []
        }
    },

    methods: {
        getPokemon : async function(){

            const lenArray = this.arrayPokemon.length+1
            // console.log(lenArray);

            for (let index = lenArray; index < lenArray+20; index++) {
                // console.log(index);
                await axiosInstance.get(`/pokemon/${index}`)
                .then((response)=>{
                    console.log(response.data.types)
                    const pokeObj = {
                        name : response.data.name,
                        id : response.data.id,
                        types : response.data.types,
                        foto : `assets/${response.data.id}.png`,
                        
                    }
                    this.arrayPokemon.push(pokeObj);

                })

            }



            // await axiosInstance.get(`/pokemon?offset=${lenArray}&limit=20`)
            // .then(async (response)=>{
            //     // console.log(response.data);
            //     for(const i of Object.keys(response.data.results)){
                    
            //         const num = Number(i)+1;
            //         await axiosInstance.get(`/pokemon/${num}/`)
            //         .then((result)=>{
            //             const pokeData = {

            //             }


            //         }).catch((err)=>{
            //             console.log(err);
            //         })
            //     }



            // })
            // .catch((err)=>{
            //     console.log(err);
            // });
        }
    },


    mounted: async function(){
        await this.getPokemon();
    }
}

export default Pokedex;