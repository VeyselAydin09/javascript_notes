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
