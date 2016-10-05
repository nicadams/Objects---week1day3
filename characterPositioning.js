function countLetters (str) {
  var newStr = str.toLowerCase();
  var newObj = {};
  for (var i = 0; i < newStr.length; i++) {
    var character = newStr.charAt(i);

    if (newObj[character] !== undefined) {
        newObj[character] = newObj[character] + ', ' + i ;
    }
    else {
      newObj[character] = i;
    }
  }
  console.log(newObj);
  return newObj;
};




countLetters("lighthouse in the house");