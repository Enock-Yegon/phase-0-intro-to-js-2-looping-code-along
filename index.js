// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  
  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);
  */
 const cards = []
 function writeCards(gifts,birthday){
    for (let i=0;i<gifts.length;i++){
        gifts[i]= (`Thank you, ${gifts[i]}, for the wonderful ${birthday} gift!`);
    }
    return gifts;
 }
 console.log(writeCards(["Charlie","Samip","Ali"],"birthday"));
 function countDown(number){
    while(number>=0){
        console.log(number--);
    }
 }
 countDown(10);