/--------------------------------question-1----------------------------/;

// The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, rerpresnting the person's age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

function oyVerebilirmiyim(yas) {
  if (yas > 18) {
    console.log("kisi askere gidebilir.");
  } else if (yas === 18) {
    console.log("kisi askere belki gidebilir.");
  } else {
    console.log("kisi askere gidemez.");
  }
}
oyVerebilirmiyim(14);

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

let elaAge = 66;

if (3 <= elaAge) {
  console.log("baby");
} else if (12 >= elaAge) {
  console.log("child");
} else if (19 >= elaAge) {
  console.log("teen");
} else if (64 >= elaAge) {
  console.log("adult");
} else if (140 >= elaAge) {
  console.log("senior citizen");
}

/--------------------------------question-3----------------------------/;

let prices = [1, 2, 3, 4, 5, 6];

let profit = 0;

for (let i = 1; i < prices.length; i++) {
  prices[i] > prices[i - 1];
  profit += prices[i] - prices[i - 1];
}
console.log(profit);

/--------------------------------question-4----------------------------/;

//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudents = (arr, search) => {
  let counter = 0;
  for (let i in arr) {
    if (search === arr[i]) {
      counter++;
    }
  }
  if (!counter) {
    return `${search} can not be found`;
  } else {
    return `${search} found ${counter} times`;
  }
};

const name = +prompt("Please enter a name").toLowerCase();
console.log(findStudents(students, name));

/--------------------------------question-5----------------------------/;

//Bir yatırımın sabit maliyeti $500.000 ve değişken maliyetleri ise yıllık $14.000 olarak hesaplanmıştır. Yatırımın ekonomik ömrü 17 yıl ve 17 yıl sonunda yatırımdan elde edilecek toplam gelir $1.700.000 olduğuna göre Yatırımın kar zarar miktarını hesaplayan Javascript kodunu yazınız.

m = 500000;
k = 0;
for (y = 1; y <= 17; y = y + 1) {
  m = m + 14000;
}
k = 1700000 - m;

console.log("k");

/--------------------------------question-6----------------------------/;

// 10 ile 15 sayıları arasındaki tamsayıların çarpımını hesaplayıp ekrana yazdıran Javacsript kodunu yazınız.

c = 1;
for (s = 10; s <= 15; s = s + 1) {
  c = c * s;
}
console.log("c");
