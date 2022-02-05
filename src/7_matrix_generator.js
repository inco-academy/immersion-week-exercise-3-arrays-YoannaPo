function matrixGen(height, width) {
  let myArr1 = [];

 
   for (let i = 0; i < height; i++) {

       //creates empty line
       myArr1.push([]);
       
       //adds  cols to the empty line:
       myArr1[i].push( new Array(width));

      
       for (let j = 0; j < width; j++){
           //initializes:
           //console.log('dzialanie i * j: '+i+' * '+j+' ='+i*j);
           myArr1[i][j] = (1+i)*(j+1);
           //console.log('myArr1 dla i,j : '+i+' '+j+' = '+ (1+i)*(j+1));
           //console.log('myArr1:'+myArr1[i][j]);
        }
       
       //console.log("Czy zadeklarowalam tablice dla i:" + i);
       //console.log('myArr1[i]:'+myArr1[i][1]);

   }
   //console.log(myArr1[0].length);
   //console.log(myArr1[0]);
   //console.log('myArr1 3,3:'+myArr1[1][0]);
   return myArr1;

      
  
   
};


/**Weryfikacja */
module.exports = matrixGen;

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(matrixGen(1,5), [ [ 1, 2, 3, 4, 5 ] ]);
verify(matrixGen(5,4), [
  [1, 2, 3, 4],
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
]);
verify(matrixGen(3,6), [
  [1, 2, 3, 4, 5, 6],
  [2, 4, 6, 8, 10, 12],
  [3, 6, 9, 12, 15, 18],
]);
verify(matrixGen(0,0), []);