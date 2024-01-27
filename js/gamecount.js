
// (Untuk menampilkan output di console log)
// console.log(`Hello`);

// (Untuk Membuat sebuah pesan window alert)
// window.alert('Hello');
// window.alert('I LIke Pizza');

// Untuk menampilkan sebuah output di web browser
// document.getElementById('myP'). textContent = 'Hello Minasan';



// Variabels and aritmathics

// declaration
// let x; 

// assignment
// x=123;
// console.log(x);


// Declaration Variabels
// let firstName = 'Kyy';
// let age = 12;  
// let price = 10.73;
// let gpa = 2.1;

//  Buat mengetahui variabel ini tuh bertipe data apa

// console.log(typeof(age))

// Jika di php memanggil variabel cukup menggunakan dolar maka di javascript diperlukan dolar dan buka kumis

// console.log(`hello bro ${firstName}`)
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`The gpa is ${gpa}`);

// let students = 20
 
// students = students + 2
// students = students - 2
// students = students * 2
// students = students / 2
// students = students % 2

// Augemnted assigments operators
// students += 4


// console.log(students)

// cara menyelesaikannya dalam kurung dulu, lalu dikali dengan dua baru ditambah 1
// let result = 1 + 2 * (12 + 4)

// Namun jika yang ini cara menghitungnya kurung nya dulu diselesaikan baru sama sama dikali
// let hasil = (1 + 1) * (12 + 4)
//   console.log(result)
//   console.log(hasil)



// Combination window alert with html textbox = Window prompt input

   // let username = window.prompt("What's Your name");
   // console.log(username);

   // Membuat input type menggunakan javascript

   // let username;

   // document.getElementById('myButton'). onclick =  function(){
   //    username = document.getElementById('myType').value;
   //    console.log(username);
   //    document.getElementById('myLabel'). innerHTML = "Hello" + username;
   // }


   // Type conversion = change the datatype of a value to another (strings, numbers, boolean)
   // let age = window.prompt("what's your name?");
   // age = Number(age);
   // age +=1;
   // console.log(age);


   // let x = "halo";
   // let y = "halo";
   // let z = "Halo";

   // x = Number (x);
   // y = String (y);
   // z = Boolean (z);

   // console.log(x, typeof x);
   // console.log(y, typeof y);
   // console.log(z, typeof z);


   //  Const is a variables cannot be a changed

   // const PI = 3.141578
   // let radius;
   // let circumference;

   // radius = window.prompt('Enter of the radius of a circle');
   // document.getElementById("mySubmit").onclick = function(){
   // radius = document.getElementById("myText"). value;
   // radius = Number(radius);
   // circumference = 2 * PI * radius;
   // document.getElementById("myH3"). textContent = circumference + "cm";
   // }



   // Membuat permainan menghitung tambah angka, kurangi angka, reset angka (Counter Program)


 
   // Membuat Variables yang element nya mengambil dari id yang ada di html
   const decreaseBtn = document.getElementById("decreaseBtn");
   const resetBtn = document.getElementById("resetBtn");
   const increaseBtn = document.getElementById("increaseBtn");
   const countLabel = document.getElementById("countLabel");

   // Variables count untuk menyimpan nilai yang akan di fungsikan 
   let count =0 ;

   // Function untuk menjalankan operator increment dan decrement ; 

   // Untuk membuat nilai yang sudah di disimpan variabel berjalan harus menggunakan fungsi yang namanya text.Coevntent
   increaseBtn.onclick = function(){
      count++;
      countLabel.textContent = count;
   }

   decreaseBtn.onclick = function(){
      count--;
      countLabel.textContent = count;
   }

   resetBtn.onclick = function(){
      count = 0;
      countLabel.textContent = count;
   }








// this is a Comment

/*
   this
   is 
   a
   Comment

*/