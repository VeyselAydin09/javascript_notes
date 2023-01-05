// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

// const sayi = prompt("Bir Sayi Giriniz")
// if(sayi > 0 ) {
// console.log(`${sayi} pozitiftir.`);}
// else if (sayi ==0){
//     console.log(`${sayi}'a esittir.`);
// }else {
//     console.log(`${sayi} negatiftir.`);
// } console.log(sayi, typeof sayi);

// 1. YONTEM
//     const n1 = +prompt("sayi1:")
//     const n2 = +prompt("sayi2:")
//    const n3 = +prompt("sayi3:")

//    if(n1 >= n2 && n1>=n3){
//     console.log(`${n1} en buyuk sayidir.`);
//    }

//    else if(n2>=n1 && n2>=n3){
//     console.log(`${n2} en buyuk sayidir`);
//    }
//    else if(n3>=n1 && n3>=n2){
//     console.log(`${n3} en buyuk sayidir`);
//    }

// 2. YONTEM

// let enBuyuk = n1;

// if (n2 >= enBuyuk) {
//     enBuyuk = n2;

// }if (n3 >= enBuyuk){
//     enBuyuk = n3;
// }
// console.log(`${enBuyuk} en buyuktur`);

// const not = +prompt("Notunuzu Giriniz:");

// console.log(not >=50 ? "Gecti" : "kaldi");

// const yas = 17;
// const cinsiyet = "erkek";
// const saglikli = true ;

// yas >=18 && cinsiyet === "erkek" && saglikli
// ? console.log("Askerlik yapmali")
// : console.log("Askerlik yapmasina gerek yok");

//!ODEV=1 DORT ISLEM HSAP MAKINESI YAP!!!!!!!!//
//!===SWITCH-CASE===//
//!ODEV=2 SWITCH ILE CLARUSWAY DERS PROGRAMI HAFTALIK KULLANICIDAN SAYI TALEP EDEREK 1-7 ARASINDA//

// /!====ODEV-1======////

// const n1 = +prompt("sayi1:")
// const operator = prompt("enter +,-,*,/")
// const n2 = +prompt("sayi2:")

// if (operator === "+"){console.log(n1+n2)
// }

// if (operator === "-"){console.log(n1-n2)
// }

// if (operator === "*"){console.log(n1*n2)
// }

// if (operator === "/"){console.log(n1/n2)
// }

// /!=======ODEV-2======////

// let gun = prompt("gun giriniz");
// switch (gun) {
//   case "pazartesi":
//     console.log("Inclass");
//     break;
//   case "sali":
//     console.log("Inclass");
//     break;
//   case "carşamba":
//     console.log("Inclass");
//     break;
//   case "perşembe":
//     console.log("Inclass");
//     break;
//   case "cuma":
//     console.log("Teawork");
//     break;
//   case "cumartesi":
//     console.log("Inclass + Workshop");
//     break;
//   case "pazar":
//     console.log("Self study");
//     break;
//   default:
//     console.log("Yanlış gün girildi");
// }
// console.log(gun);

// /!=========ODEV-3=========/////

// const maas = +prompt("maas giriniz");
// if (maas <= 5500) {
//   console.log(maas * 1.5);
// }
// if (maas >= 5500) {
//   console.log(maas * 1.1);
// }

// /!=====ODEV-4=======////

// let gelir = +prompt("gelir miktarini giriniz");
// let gider = +prompt("gider miktarini giriniz");
let sonuc = gelir >= gider + 6000 ? "kredi verilebilir" : "kredi verilemez";
// console.log(`${sonuc}`);

let gelir = +prompt("gelir miktarini giriniz");
let gider = +prompt("gider miktarini giriniz");

if (gelir >= gider + 6000) {
  console.log("kredi verilebilir");
}
if (gelir < gider + 6000) {
  console.log("kredi Verilemez");
}

// let sum = 0;
// let number = 0;
// do {
//   sum += number;
//   number = parseInt(prompt("Enter a number: "));
// } while (number >= 0);
// alert(`The sum is ${sum}.`);
