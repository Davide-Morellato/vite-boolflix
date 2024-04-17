import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

//importo la libreria delle icone
import { library } from '@fortawesome/fontawesome-svg-core'

//importo il componente
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//importo le icone che mi servono
import {faStar} from '@fortawesome/free-solid-svg-icons'

//importo e rinomino (as) la stellina vuota
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons'

//aggiungo alla libreria le due stelline (piena = faStar; vuota = faStarEmpty)
library.add(faStar, faStarEmpty)

//creo una variabile
const app = createApp(App)

//registro il componente fontawesome globalmente
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
