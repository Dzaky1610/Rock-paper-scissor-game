// const p4 = document.querySelector('section#b p');

// p4.addEventListener('click', function(){
    
//     // Ambil parentnya
//     const ul = document.querySelector('section#b ul');

//     // Bikin Element Baru
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('Item Baru');

//     // Rangkai Childnya
//     liBaru.appendChild(teksLiBaru);

//     // Kemudian Simpan di dalam ul
//     ul.app.endChild(liBaru);
// });


const p3 = document.querySelector('.p3');


p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function (){
    p3.style.backgroundColor = 'salmon';
})