// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

//? Ornek: 1 den n kadar sayilari toplayan kodu yaziniz/; ///

// const n = Number(prompt("Bir sayi giriniz:"));
// let toplam = 0;

// for (let i = 1; i <= n; i++) {
//   toplam = toplam + i;
//   toplam += i;
//   console.log(toplam, i);
// }

// console.log("SONUC:", toplam);

//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar en yakin alt sayiya
//* Math.ceil() =>sürekli yukariya yuvarlar en yakin ust tamsayi
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

///! =Ornek: 0-100 Arasinda 10 adet rastgele tam sayi ureten kodu for dongudu ile yaziniz;;;;

// for (let i = 1; i <= 10; i++) {
//   const rasgele = Math.round(Math.random() * 100);
//   console.log(rasgele);
// }

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

// const sayi =Number(prompt("Pozitif Bir sayi giriniz: "))
// let asal = true;

// if (sayi<=1){
// alert("Sayi 1' den buyuk olmalidir.");
// } else{
//     for(let i=2 ; i<sayi ; i++){
//        if(sayi % i === 0){
//         asal = false
//            break;
//        }

//     }
//     const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
//     console.log(`${sayi} ${sonuc}`);
// }
