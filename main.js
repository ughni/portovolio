



var tanya = true;
while (tanya) {
    //menangkap pilihan player
    var p = prompt('pilih : orang, gaja, semut');
    //menangkap pilihan commputer
    //membangitkan bilangan rendem
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gaja'
    } else if (comp >= 0.34 && comp < 0.35) {
        comp = 'orang';
    } else {
        comp = 'semut'
    }

    var hasil = '';
    //menampilkan ruless
    if (p == comp) {
        hasil = 'serii!!';
    } else if (p == gaja) {
        // if (comp == 'orang') {
        //     hasil = 'menang'
        // } else {
        //     hasil = 'kalah'
        // } 
        hasil(comp == 'orang') ? 'menang' : 'kalah';
    } else if (p == 'orang') {
        hasil = (comp == 'gaja') ? 'kalah' : 'menang';
    } else if (p == 'semut') {    
        hasil = (commp == 'orang') ? 'kalah' : 'menang';
    } else {
        hasil = 'masukkannya pilihan salah ';
    }

    //tampilkan hasilnya

    alert('kamu memilih ' + p + ' computer memilih ' + comp + '\nMaka hasilnya : kamu ' + hasil); 

    tanya = confirm('lagii'); 
}

alert('terima kasihh maap menganggu anda');













