var number = [1,2,3,4,5,6,7,8,];

var nama = ['Dzaky', 'Rizky', 'Bub'];

// for (var i = 0 ; i < angka.length ; i++) {

//  console.log(angka[1]);

// }


// angka.forEach(function(e)){

//console.log(e); 

// }

// nama.forEach(function(e,i){
//     console.log('Mahasiswa ke- ', + ( i + 1 ) + 'Adalah : ' + e);
// })


var angka = [1,3,6,5,7,4,3,2];
var angka2 = angka.map(function(e){
    return e * 2;
});

console.log(angka2.join('-'));

// Fungsi method map adalah mengembalikan nilai array

// Method sort digunakan untuk mengurutkan nilai yang ada didalam array

var sort = [1,3,6,7,9,5,2,4,];
sort.sort();
console.log(sort.join('-'));