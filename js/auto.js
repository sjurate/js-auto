
class Auto {
    constructor(name) {
        this.name = name;
        this.cost = 0;
        this.litrazas = 1.2;
        this.bakas = 50;
        this.sedynes = 4;
        this.langai = 4;
        this.variklis = 'Isjungtas';
    }

    pasuktiRakteli() {
        if(this.variklis === 'Isjungtas') 
            return this.variklis = 'Uzvestas';
        }

}

export { Auto } ;