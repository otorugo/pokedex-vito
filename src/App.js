import NavBar from '../src/components/NavBar.js';


// Normalmente eu separo o template do export que é onde vai ter JS
// Nesse caso eu deixei pq o arquivo aqui vai ser pequeno

//Esse router-view é compreendido pelo vue router na hora de renderizar

const Template = `
<div>
    <nav-bar/>
    <router-view/>
</div>
` 
export default {
name : 'app',
components : {
    NavBar
} ,
template : Template,

}