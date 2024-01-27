// function tambahAngka(a,b){
//     return a + b;
// }

// let a = parseInt(prompt('Masukan Angka'));
// let b = parseInt(prompt('Masukan Angka'));

// let hasil = tambahAngka(a,b);
// console.log(hasil); 


// Fungsi parseInt adalah untuk mengubah nilai inputan menjadi integer

// Menggabungkan dua function

// function tambahAngka(a,b){
//     return a + b;
// }

// function kaliAngka(a,b){
//     return a * b
// }


// let hasil = kaliAngka(tambahAngka(10,25),tambahAngka(4,5));
// console.log(hasil);


// Sudo variabel Javascript

function tambahAngka(){
    let hasil  = 0;
    for (let i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

let coba = tambahAngka(1,2,3,4,5,6);

console.log(coba);  

