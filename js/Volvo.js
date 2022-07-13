import { Auto } from "./Auto.js";

class Volvo extends Auto {
    constructor(name) {
        super(name);
        this.saugosDirzas = false;

    }

    uzsegtiDirza() {
        return this.saugosDirzas = true;
    }

    atsegtiDirza() {
        return this.saugosDirzas = false;
    }

}

export { Volvo }; 
