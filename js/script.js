// DOM Selection
//  document.getELementById() (Javascript tolong dong cariin saya element yang id nya apa yang ada di dalam node root atau document)
// document.getELementById() -> Mengembalikan 1 element

// const judul = document.getElementById('judul');
// judul.style.color = 'salmon';
// judul.style.backgroundColor = 'yellow';
// judul.innerHTML = 'Dzaky Rizky Ramadhan';

// document.getElementsByTagName() -> mengembalikan HTML Collections

// const p = document.getElementsByTagName('p');

// for(i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '30px';

// const p1 = document.getElementsByClassName('p1')[0];
// p[0].innerHTML = 'Ini diubah dengan JavaScript';    

// document.querySelector -> hanya mengembalikan 1 element (sesuai namanya selector atau menyeleksi jadi misal saya mau membuat paragaf ke 4 dengan id B maka saya akan memerintahkan js menyeleksi element p dengan id  b)

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';


// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';


// document.querySelectorALl() -> Mengembalikan Nodelist(Kumpulan dari para node yang tidak peduli elemenntya apa);

// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++){
//  p[i].style.backgroundColor = 'lightblue';
// };


// query selector digunakan jika tidak ingin mengubah struktur HTML apabila sudah mempunyai class, id sebaiknya menggunakan  Method lain


// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

// Manipulation Element
// element.inner.HTML
// eleelemnt.ment.style.<property Css>
// element.setAttribute()
// element.classList   


// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Dzaky');

// const a = document.querySelector('section#a a');
    


// Dom Manipulation
//  Untuk membuat Element baru

    const pBaru = document.createElement('p');
    const pTextBaru = document.createTextNode('Paragraf Baru');
    
    // Kemudian simpan tulisan ke dalam tag paragraf

    pBaru.appendChild(pTextBaru);

    // Kemudian Simpan pBaru di akhir section a caranya panggil id nya menggunakan bebas

    const sectionA = document.getElementById('a');
    sectionA.appendChild(pBaru);




    // Step one make vas
    const liBaru = document.createElement('li'); 

    // Step two make Flower
    const liTextBaru = document.createTextNode('Item Baru');

    // Kemudian simpan tulisan ke dalam tag paragaf

    // Panggil wadahnya masukin tulisannya
    liBaru.appendChild(liTextBaru);

    // Kemudian simpan liBaru di bawah paragraf 1

    const ul = document.querySelector('section#b ul');
    // Untuk membatasi lingkup maka dokumen tidak diperlukan yang otomatis memanggil selector nya tidak usah 
    // Karena sudah di lakukan di query selector sebelumnya
    const li2 = ul.querySelector('li:nth-child(2)');
    ul.insertBefore(liBaru, li2);



    // menghilangkan link
    const link = document.getElementsByTagName('a')[0];
    sectionA.removeChild(link);


    // Merubah paragraf menjadi judul

    // Pertama Cari dulu parrentnya apa
    const sectionB = document.getElementById('b');
    // Kemudian cari Childnya
    const p4 = sectionB.querySelector('p');
    
    // Lalu buat Vasnya
    const h2Baru = document.createElement('h2');
    // Kemudian buat Bunganya
    const h2TextBaru = document.createTextNode('Judul Baru');

    // Kemudian masukan Bunganya ke dalam Vas
    h2Baru.appendChild(h2TextBaru);

    // Lalu ambil parentnya tangkap childnya dan pilih apa child yang mau dirubah
    sectionB.replaceChild(h2Baru, p4 );






