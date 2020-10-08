const Card = {
    name : 'card',
    template : `
        <div id="card" >
            <img :src="item.foto"></img>
            <p>{{item.name}}</p>
            <p>{{item.id}}</p>
            <ul>
                <li v-for="(tipo,j) in item.types" :key="j" >
                    {{item.types[j].type.name}}
                </li>
            </ul>
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