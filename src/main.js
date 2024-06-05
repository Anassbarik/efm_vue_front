// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars , faHeartPulse , faUser, faLock , faSignOut} from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
library.add(faHeartPulse)
library.add(faSignOut)
library.add(faUser)
library.add(faLock)

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(bootstrap)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
