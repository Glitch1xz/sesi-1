
//jika tidak ada nilai di cari nilainya menggunakan looping

function xo(str) {

    let x = 0;
    let o = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            x++;
        } else {
            o++
        }
    }

    if (x === o) {
        return true;
    }else {
        return false;
    }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo')); 
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));






