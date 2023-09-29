//rumus luas persegi
exports.Luaspersegi = function(sisi){
    return sisi * sisi
};

//rumus keliling persegi
exports.Kelilingpersegi = function(sisi){
    return 4 * sisi
};

//rumus luas persegi panjang
exports.Luaspersegipanjang = function(panjang,lebar){
    return panjang * lebar
};

//rumus keliling persegi panjang
exports.Kelilingpersegipanjang = function(panjang,lebar){
    return 2 * (panjang+lebar)
};