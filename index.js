import Vue from './lib/vue.js';
import router from './routes/index.js';
import App from './App.js';
import HelloWorld from './view/HelloWorld.js'

// existem dois meios de importar o css
//dentro de cada componente ou no html index
// pro nosso caso acho que dentro do componente da
// menos chance de dar ruim



// Adicionando as rotas ao Vue
// Renderizando o componente App na div com id="app"
new Vue({
    router,
    render : h=>h(App)
}).$mount("#app")

