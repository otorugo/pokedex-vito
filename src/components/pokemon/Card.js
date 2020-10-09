const Card = {
    name : 'card',
    template : `
        <div id="card" >
            <div>
            <img :src="item.foto"></img>

            </div>
            <div class="infosCard">
                <p> {{item.name}}</p>
                <p>N° {{item.id}}</p>
                <ul>
                    <li v-for="(tipo,j) in item.types" :key="j" >
                        {{item.types[j].type.name}}
                    </li>
                </ul>
            </div>
            <link rel="stylesheet" href="src/style/Card/card.css">
        </div>
    
    `,
    props : [
        'item'
    ],
    mounted(){
    }
}


export default Card;