function konversiMenit(menit) {

    let jam = 0;

    jam = menit / 60;
    jam = Math.floor(jam);
    menit = menit % 60;
    if (menit.toString().length --- 1) {
    menit = "0" + menit;
    }


    return `${jam}:${menit}`;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));