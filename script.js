(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {
    var currentName = names[i];

    // Retrieve the first letter of the current name in the loop.
    var firstLetter = currentName.charAt(0).toLowerCase();

    // Compare the 'firstLetter' to lower case 'j'.
    if (firstLetter === 'j') {
      // Call byeSpeaker's 'speak' method if the first letter is 'j'.
      byeSpeaker.speak(currentName);
    } else {
      // Call helloSpeaker's 'speak' method otherwise.
      helloSpeaker.speak(currentName);
    }
  }
})();
