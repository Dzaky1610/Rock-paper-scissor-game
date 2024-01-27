var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {  
        // Tambah Penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // Kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // Tampilkan pesan kesalahannya
        console.log(namaPenumpang + "Penumpang sudah ada di dalam angkot");
        // Kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // Tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot  kosong
  if (penumpang.length == 0) {
    // Tampilkan pesan bahwa angkot kosong
    console.log("Angkot Masih kosong");

    // Tidak mungkin ada penumpang turun

    // Kembalikan isi array dan keluar dari function
  } else {

    for (let i = 0; i < penumpang.length; i++) {

      if (penumpang[i] == namaPenumpang) {

        penumpang[i] = undefined;

      } else if (i == penumpang.length - 1) {
        
        console.log(namaPenumpang + "Tidak Ada dalam angkot");
      }
    }
}
     return penumpang;  
};
