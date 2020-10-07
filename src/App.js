// Normalmente eu separo o template do export que é onde vai ter JS
// Nesse caso eu deixei pq o arquivo aqui vai ser pequeno

//Esse router-view é compreendido pelo vue router na hora de renderizar

const Template = `
<div>
    <router-view/>
</div>
` 
export default {
name : 'app',
components : {
} ,
template : Template,

}