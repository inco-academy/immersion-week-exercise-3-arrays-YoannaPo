

function replaceArray(wordsArray) {
  console.log(wordsArray);
  let myArr = [];
  

  wordsArray.forEach(element => {
  let firstLetter = element.substring(0,1);
  console.log('pierwsza litera: '+ firstLetter);
  
//wypluwa mi jedna tablice zawierającą wszystkie rozwiązania
//brakuje jakiejś pętli, tak mi się wydaje, ale nie wiem jak naprawić
  
  if(firstLetter === "H") {//|| (firstLetter === "h")) {
    
    hBigger = element.toUpperCase();
  
    len = myArr.push(hBigger);
  }
  else if(firstLetter === "h") {
    hBigger = element.toUpperCase();
    len = myArr.push(hBigger);
  }

    //console.log(hBigger);
   else {
     len = myArr.push(element);
    //console.log(element);
  }
  //len = wordsArray.push(hBigger, element);
//console.log('The modified array is: ', wordsArray);
console.log('The length of modified array is: ', len);
//console.log('Index 0 i 1: ' + (wordsArray[0]) +(wordsArray[1]));
console.log('Index 0 i 1: ' + (myArr[0]) +(myArr[1]));


});
 return myArr;
 //console.log(myArr)
//console.log(typeof(myArr));
      

};

/**Weryfikacja */
module.exports = replaceArray;
function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(replaceArray(["banana", "suit", "hammer"]), [ 'banana', 'suit', 'HAMMER' ]);
verify(replaceArray(["Hello", "there"]), [ 'HELLO', 'there' ]);
verify(replaceArray(["Hey!", "hey..."]), [ 'HEY!', 'HEY...' ]);