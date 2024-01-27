// Engine Untuk mencari bilangan random buat nanti dimasukan ke variabel pilihan computer
function getPilihanComputer(){

    // Function Js math random akan mengeluarkan angka random jika keluar angkanya kurang dari
    // 0.34 maka program selesai keluarkan hasil gunting
    // jika keluarnya lebih dari 0.34 jalankan program yang dibawah yaitu batu tapi kalau hasilnya kurang dari 
    // kurang dari 0.67 jalankan program selanjutnya kertas dan berhenti disitu
    const comp = Math.random();
    if (comp < 0.34) return 'gunting';

    if (comp >= 0.34 && comp < 0.67) return 'batu';

    return 'kertas';   
};

// Engine Untuk mencari hasil pertandingan buat nanti dimasukan ke variabel hasil
function getHasil(comp, player){
    
    // Jika Player hasilnya sama kaya komputer maka kembalikan hasil seri selesai
    if (player == comp) return 'SERI';
    
    // Jika player pilih gunting liat dulu computernya pilih apa , kalo komputernya dapet batu
    //  Maka hasilkan player yang menang lain dari pada itu kalah  program selesai
    if (player == 'gunting') return (comp == 'batu') ? 'KALAH!' : 'MENANG!';

    // jika Player pillh batu liat dulu computernya pilih apa, kalo pilih gunting
    // Maka hasilkan player kalah lain dari pada itu menang program selesai

    if (player == 'batu') return (comp == 'gunting') ? 'MENANG!' : 'KALAH!';

    // Jika player pilih kertas liat dulu computernya pilih apa, kalo komputer pilih batu
    // Maka hasilkan player Menang lain dari pada itu kalah program selesai
    
    if (player == 'kertas') return (comp == 'batu') ? 'MENANG' : 'KALAH!';

}


function rollingPicture(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gunting', 'batu', 'kertas'];

        let i = 0;

        // variabel waktu awal . setiap pengulangannya
        const timeStart = new Date().getTime();
 
    setInterval(function(){
        
        if (new Date().getTime() - timeStart > 1000){
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', '../picture/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;

    }, 100);
}





const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
  
    pil.addEventListener('click', function(){
    

    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer  = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    console.log('computer: ' + pilihanComputer);
    console.log('Player: ' + pilihanPlayer);
    console.log('hasil: ' + hasil);

    rollingPicture();

    // Buat function menunggu gambar selesai dirolling baru keluarkan hasilnya selama 1 detik
    setTimeout(function(){

        const gambarComputer = document.querySelector('.img-komputer');
        gambarComputer.setAttribute('src', '../picture/' + pilihanComputer + '.png');
    
        const infoHasil = document.querySelector('.info');
        infoHasil.innerHTML = hasil;
    }, 1000);

 

    });
});


// Kita buat event nya
// Buat Variabel computer lalu masukin function yang udah dibuat
// Buat Variabel Player panggil class pilihannya
// Cek dulu sudah benar atau belom
// Buat Varibel Hasil untuk memastikan logic engine berfungsi dengan baik 
// Tidak ada yang tertukar
// Buat variabel hasil untuk dimasukan engine hasil yang sudah tersimpan 2 paramter 
// Pilihan computer dan pilihan player
// Manpipulasi halaman webnya menggunakan dom
// Buat Variabel untuk gambar pilihan computernya lalu lakukan manipulasi
// Manipulasi htmlnya 
// buat Variabel untuk meyimpan hasil manipulasi htmlnya
// Buat Block gambar perulangan untuk mempermudah supaya tidak perlu melakukan copy paste banyak banyak

// const pGunting = document.querySelector('.gunting');

// pGunting.addEventListener('click', function(){
    
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer  = pGunting.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

    // console.log('computer: ' + pilihanComputer);
    // console.log('Player: ' + pilihanPlayer);
    // console.log('hasil: ' + hasil);

//     const gambarComputer = document.querySelector('.img-komputer');
//     gambarComputer.setAttribute('src', '../picture/' + pilihanComputer + '.png');

//     const infoHasil = document.querySelector('.info');
//     infoHasil.innerHTML = hasil;
// });

// const pBatu = document.querySelector('.batu');

// pBatu.addEventListener('click', function(){
    
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer  = pBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

    // console.log('computer: ' + pilihanComputer);
    // console.log('Player: ' + pilihanPlayer);
    // console.log('hasil: ' + hasil);

//     const gambarComputer = document.querySelector('.img-komputer');
//     gambarComputer.setAttribute('src', '../picture/' + pilihanComputer + '.png');

//     const infoHasil = document.querySelector('.info');
//     infoHasil.innerHTML = hasil;
// });

// const pKertas = document.querySelector('.kertas');

// pKertas.addEventListener('click', function(){
    
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer  = pKertas.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

    // console.log('computer: ' + pilihanComputer);
    // console.log('Player: ' + pilihanPlayer);
    // console.log('hasil: ' + hasil);

//     const gambarComputer = document.querySelector('.img-komputer');
//     gambarComputer.setAttribute('src', '../picture/' + pilihanComputer + '.png');

//     const infoHasil = document.querySelector('.info');
//     infoHasil.innerHTML = hasil;
// });




