const concatArray = require("./2_concat_array");

test("Concat dog text", () => {
  expect(concatArray(["Hello", "this", "is", "dog"])).toStrictEqual(
    "Hello this is dog."
  );
});

test("Concat christmas text", () => {
  expect(
    concatArray(["All", "I", "want", "for", "christmas", "is", "you"])
  ).toStrictEqual("'All I want for christmas is you.");
});

test("Concat empty array.", () => {
  expect(concatArray([])).toStrictEqual(".");
});
