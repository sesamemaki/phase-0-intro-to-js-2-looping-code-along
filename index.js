// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0;
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++
//   }
//   return gifts
// }

// wrapGifts(gifts);

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }
//   return gifts;
// }

// wrapGifts(gifts);

const names = (["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(names) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

function countDown(count) {
  while (count >= 0) {
    console.log(count);
    count -= 1;
  }
}
countDown(10);
