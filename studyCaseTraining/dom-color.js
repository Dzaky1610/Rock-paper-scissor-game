//  Step

// 1 Tangkap dulu Elementnya
// 2 Tangkap Element Yang mau dituju

// Get elements by tag name kenapa menggunakan array karena dia html collection html collection yaitu mengembalikan index array
// Khusus body tidak perlu di buat cukup panggil saja
const tombolUbahWarna = document.getElementById('tombolUbahWarna');
const body = document.getElementsByTagName('body')[0];

tombolUbahWarna.addEventListener('click', function(){
    document.body.classList.toggle('biruMuda');
});


// Buat dulu element button nya
const tAcakWarna = document.createElement('button');
const tTeksTombol = document.createTextNode('Acak Warna Lurrr');

// Rangkai elementnya
tAcakWarna.appendChild(tTeksTombol);

// Tangkap Elementnya
tAcakWarna.setAttribute('type', 'button');

// Letakan Elementya di posisi mana
tombolUbahWarna.after(tAcakWarna);

// buat function random untuk menentukan angka
tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ b +', '+ g +')';

});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})



