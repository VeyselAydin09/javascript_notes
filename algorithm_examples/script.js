/--------------------------------question-1----------------------------/;

// The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, rerpresnting the person's age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

// function oyVerebilirmiyim(yas) {
//   if (yas > 18) {
//     console.log("kisi askere gidebilir.");
//   } else if (yas === 18) {
//     console.log("kisi askere belki gidebilir.");
//   } else {
//     console.log("kisi askere gidemez.");
//   }
// }
// oyVerebilirmiyim(14);

// if (mehmetinYasi >= 18) {
//   console.log("Mehmet askere gidebilir.");
// } else if (mehmetinYasi === 18) {
//   console.log("Mehmet askere belki gidebilir.");
// } else {
//   console.log("Mehmet askere gidemez.");
// }
/--------------------------------question-2----------------------------/;

//  write a function, lifePhase(), that takes in a person's age, as a number, and returns which phase of life they are in.
//  Here are the classifications:
//  0-3 should return 'baby'
//  4-12 should return 'child'
//  13-19 should return 'teen'
//  20-64 should return 'adult'
//  65-140 should return 'senior citizen'
//  if the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

// let elaAge = 66;

// if (3 <= elaAge) {
//   console.log("baby");
// } else if (12 >= elaAge) {
//   console.log("child");
// } else if (19 >= elaAge) {
//   console.log("teen");
// } else if (64 >= elaAge) {
//   console.log("adult");
// } else if (140 >= elaAge) {
//   console.log("senior citizen");
// }

/--------------------------------question-3----------------------------/;

// let prices = [1, 2, 3, 4, 5, 6];

// let profit = 0;

// for (let i = 1; i < prices.length; i++) {
//   prices[i] > prices[i - 1];
//   profit += prices[i] - prices[i - 1];
// }
// console.log(profit);

/--------------------------------question-4----------------------------/;

//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudents = (arr, search) => {
//   let counter = 0;
//   for (let i in arr) {
//     if (search === arr[i]) {
//       counter++;
//     }
//   }
//   if (!counter) {
//     return `${search} can not be found`;
//   } else {
//     return `${search} found ${counter} times`;
//   }
// };

// const name = +prompt("Please enter a name").toLowerCase();
// console.log(findStudents(students, name));

/--------------------------------question-5----------------------------/;

// bir metin yaziniz. metin karekterlerinin string ise display yapiniz eger string degilse donguden cikiniz

// let karakterUzunlugu, metin;
// metin = prompt("Akliniza ilk geleni yaziniz.");
// console.log(metin);
// karakterUzunlugu = metin.length;

// for (let i = 0; i < karakterUzunlugu; i++) {
//   let karakter = metin[i];
//   console.log(`${metin[i]} indekslenen karakter.`);
//   if (isNaN(metin[i])) {
//     console.log(`${metin[i]} bu karekter string bir degerdir.`);
//   } else {
//     console.log(`${metin[i]} bu karekter number bir degerdir.`);
//   }
// }

/--------------------------------question-6----------------------------/;

// girilen sayilarin ortalamasi cift olana kadar sayi istenen bir dongu yaziniz

let sayi, total, counter, avg;
total = 0;
counter = 0;
avg = 1;

while (avg % 2 != 0) {
  sayi = prompt("Bir sayi giriniz:");
  if (isNaN != false) {
    console.log(`Girilen sayi ${sayi} dir. Sayi kabul edildi.`);
    counter += 1;

    if (counter > 1) {
      total += Number(sayi);
      avg = Math.round(total / counter);
      console.log(avg);
    }
  } else {
    console.log("Girilen  deger kabul edilmedi.");
  }
}
console.log(`sayilarin ortalamasi ${avg} dir.`);

//--------------------------------question-7----------------------------/;

//--------------------------------question-8----------------------------/;
