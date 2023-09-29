const calc = require('./calc.js')

const sisi = 5;
const Panjang = 20;
const lebar = 15;

//hasil perhitungan dari rumus
console.log("Hasil perhitungannya adalah :");
console.log("Luas Persegi             :",calc.Luaspersegi(sisi));
console.log("Keliling Persegi         :",calc.Kelilingpersegi(sisi));
console.log("Luas Persegi Panjang     :",calc.Luaspersegipanjang(Panjang,lebar));
console.log("Keliling Persegi Panjang :",calc.Kelilingpersegipanjang(Panjang,lebar));