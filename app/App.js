// import { router } from './router-config.js';

import { TriviaController } from "./controllers/TriviaController.js"

const USE_ROUTER = false

class App {

  TriviaController = new TriviaController()

  // constructor() {
  //   if (USE_ROUTER) {
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }

}

const app = new App()
// @ts-ignore
window.app = app
