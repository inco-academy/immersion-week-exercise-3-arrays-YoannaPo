function removeDouble() {
  // TODO Implement me.
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
