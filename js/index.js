

// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");

// const min = 1;
// const max = 10;

// let randomNumber;

// myButton.onclick = function(){
//     randomNumber = Math.floor(Math.random() * max - min) + min;
//     myLabel.textContent = randomNumber;
// }



// If else bersarang


// let age = parseInt(prompt("Input you're age"));
// let haslicense = true;
// let notHasLicense = false;n

// if( age >= 18) {
//     console.log("You're old enough to drive");
    
//     if (haslicense){
//         console.log("You have your license");

//     } if(notHasLicense){
//         console.log("You do not have your license yet")
//     }

// }  if (age <= 18 ) {
//     console.log("You must be 18  to have license");

// } else {
//     console.log("nothing description");
// }


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = number(age);


    if (age >= 100 ) {
        resultElement.textContent = 'Kamu Terlalu tua untuk menekan tombol ini';
    }

    else if (age == 0){
        resultElement.textContent = 'Kamu tidak bisa mengklik ini, kamu baru saja lahir';
    }

    else if (age >= 18) {
        resultElement.textContent = 'Umur Kamu  cukup untuk menekan tombol ini';
    }

    else if (age < 0) {
       resultElement.textContect = 'Umur mu Tidak bisa';
    }

    else{
        resultElement.textContent = 'Kamu harus mencapai umur 18 tahun untuk ini';
    }
}
