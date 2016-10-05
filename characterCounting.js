function countLetters (str) {
  var newStr = str.toLowerCase().split(" ").join("");
  var newObj = {};
  for (var i = 0; i < newStr.length; i++) {
    var character = newStr.charAt(i);

        if (newObj[character]) {
           newObj[character]++;

        } else {

           newObj[character] = 1;
        }
  }
  console.log(newObj);
  return newObj;
};




countLetters("lighthouse in the house");