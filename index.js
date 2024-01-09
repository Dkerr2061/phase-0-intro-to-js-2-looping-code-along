// Code your solutions in this file

function writeCards(stringNames, eventNames) {
  let newArr = [];
  
  for(let name of stringNames) {
    newArr.push(`Thank you, ${name}, for the wonderful ${eventNames} gift!`);
  }
  return newArr;
}

function countDown(num) {
  

  while(num >= 0) {
    console.log(num);
    num--;
  }
}