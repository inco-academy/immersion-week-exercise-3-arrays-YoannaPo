function evenIndexes() {
  // TODO Implement me.
};

/**Weryfikacja */
module.exports = evenIndexes;
function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(evenIndexes("lol"), [ 'l', 'l' ]);
verify(evenIndexes("You're weird"), [ 'Y', 'u', 'r', ' ', 'e', 'r' ]);
verify(evenIndexes(""), [ ]);