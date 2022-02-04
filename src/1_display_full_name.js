
  function displayFullName(nameAndsurname) {
    let nametoarray = nameAndsurname.split(' ');
    console.log(nametoarray);
    let secondelement = nametoarray.slice(-1)[0];
    console.log(secondelement);
    let message = 'My name is';
    let semi =  ',';

      if (nametoarray.length >= 2) {
        let lastelement = [...nametoarray].pop();
        return `${message} ${lastelement}${semi} ${nameAndsurname}`;
      } 
      else 
        return `${message} ${secondelement}${semi} ${nameAndsurname} `;
  
  };







module.exports = function displayFullName() {
  // TODO Implement me.
};

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(displayName("James Bond"), "My name is Bond, James Bond");
verify(displayName("Ada Lovelace"), "My name is Lovelace, Ada Lovelace");
verify(displayName("Salvador Felipe Jacinto Dalí"), "My name is Dalí, Salvador Felipe Jacinto Dalí");