function averageMinMax(tab) {
  let Min=0;
        Max=0;
        Suma=0;
        Arr=[];
        MinText='Min: ';
        MaxText='Max: ';
        AveText='Average: ';

    //sortujemy wg --> najmniejsza ma index[0] i zwracamy to do nowej tablicy  
    Arr=tab.sort((a,b)=>{return a-b})
    Min=Arr[0];
    Max=Math.max(...Arr);

    //lecimy petla po starej tablicy
    tab.forEach(el => {
        Suma+=el;
    });

return ` ${MinText}${ Min} ${MaxText}${Max} ${AveText}${Suma/Array.length}`;
  


};

/**Weryfikacja */
module.exports = averageMinMax;
function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(averageMinMax([-42, 0, 42]), 'Min: -42 Max: 42 Average: 0');
verify(averageMinMax([30, 20, 100]), 'Min: 20 Max: 100 Average: 50');
verify(averageMinMax([-23, -4, -12]), 'Min: -23 Max: -4 Average: -13');