let nama = "Harkon", peran = "penyihir"

if(nama.length === 0 && peran.length === 0) {
    console.log('Nama Harus Di Isi')
} else if (nama.length === 0 && peran.length > 0) {
    console.log('Nama Harus Di Isi')
} else if (nama.length > 0 && peran.length === 0) {
    console.log(`Pilih Peranmu Untuk Memulai game`)
} else if (nama.length > 0 && peran.length > 0) {
    console.log(`Selamat Datang, Klik Start Untuk Memulai game !, ${nama}`)
    if (peran === 'Ksatria' || peran === 'ksatria') {
        console.log(`Halo ${nama} ${peran} , Gunakan Senjatamu Untuk Menyerang Musuh!`)
    } else if (peran === 'tabib' || peran === 'Tabib') {
        console.log(` ${nama} ${peran} , Sembuhkan Temanmu Yang Terluka`) 
    } else if (peran === 'Penyihir' || peran === 'penyihir') {
        console.log(` ${nama} ${peran} , Sihirmu Akan Membantu Ksatria Melawan Musuh`)
    } else {
        console.log('Pilih Peran Yang Sudah Ada Yaaaa :)')
    }
} 