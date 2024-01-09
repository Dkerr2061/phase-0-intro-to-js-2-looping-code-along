// Code your solutions in this file

function writeCards(stringNames, eventNames) {
  let newArr = [];
  
  for(let name of stringNames) {
    newArr.push(`Thank you, ${name}, for the wonderful ${eventNames} gift!`);
  }
  return newArr;
}

function countDown() {
  let i = 10;

  while(i >= 0) {
    i--;
    console.log(i);
  }
}