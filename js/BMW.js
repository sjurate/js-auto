
import { Auto } from "./Auto.js";

class BMW extends Auto {
    constructor(name) {
        super(name);
        this.saugosDirzas = false;
        this.stoteles = 0;
    }

    skintiStotele() {
        this.stoteles++
    }

}

export { BMW } ;
