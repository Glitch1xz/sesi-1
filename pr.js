let len = 3;

for (let i = 0; i < len; i++) {
    let bintang = "";
    for (let j = len - i; j >= 0; j--) {
        bintang += " ";
    }

    for (let k = 0; k <= i; k++) {
        bintang += "* "
    }
    console.log(bintang)
}


