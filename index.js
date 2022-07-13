console.clear();

import {BMW} from './js/BMW.js'; 
import { Lada } from './js/Lada.js';
import {Volvo} from './js/Volvo.js';


const BMW5 = new BMW('BMW') ; 
const Volvo1 = new Volvo('Volvo');
const LadaRus = new Lada('Lada');

console.log(BMW5);
console.log(Volvo1);
console.log(LadaRus);

BMW5.pasuktiRakteli();

console.log(BMW5);
console.log(Volvo1);


Volvo1.uzsegtiDirza();
console.log(Volvo1);

BMW5.skintiStotele();
BMW5.skintiStotele();
BMW5.skintiStotele();

console.log(BMW5);

Volvo1.pasuktiRakteli();

console.log(Volvo1);





