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
