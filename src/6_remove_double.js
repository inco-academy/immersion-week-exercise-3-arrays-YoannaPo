function removeDouble(myStuff) {

    //const myStuff = (mixedStuff);
  
    console.log("myStuffArr tu leci: "+ myStuff);

    for (let i = 0; i < myStuff.length; i++) {
      console.log("Szukam i: " + i);
      console.log("Szukam i: " + myStuff[i]);
      for (let j = i+1; j < myStuff.length; j++) {
        console.log('compare i to j:'+i+' '+j);
        console.log('compare i to j:'+myStuff[i]+' '+myStuff[j]);
        if(myStuff[i] === myStuff[j]) {
          console.log("Pętla before: " + myStuff);
          myStuff.splice(i, 1); // 2nd parameter means remove one item only
          console.log("Pétla after: " + myStuff);
          i--;
          
        }
        
      }
    }
   console.log('myStuff final: '+myStuff);

   return(myStuff);
 
  
};


/**Weryfikacja */

module.exports = removeDouble;

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(removeDouble(["suit", "clock", "butter", "suit"]), [ 'clock', 'butter', 'suit' ]);
verify(removeDouble(["hello", "hello", 23, -3, 23, "hello"]), [ -3, 23, 'hello' ]);
