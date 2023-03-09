// problem
// diberikan sebuah function bandinganAngka(angka1, angka2) yang menerima dua parameter angka
// function angka me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya
// jika kedua angka bernilai sama, function akan me-return -1




function bandingkanAngka(angka1, angka2) {
    if (angka2 > angka1) {
        return true;
    } else if(angka2 < angka1) {
        return false;
    } else {
        return -1
    }
}

console.log(bandingkanAngka(5,8));
console.log(bandingkanAngka(5,3));
console.log(bandingkanAngka(4,4));
console.log(bandingkanAngka(3,3));
console.log(bandingkanAngka(17,2));
