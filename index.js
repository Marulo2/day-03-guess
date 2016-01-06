//JavaScript for index.html

var counter = 0;

alert("Welcome to the Guessing Game!");
alert("Where you can win or lose nothing at all!");

var user = prompt("Can we please have your name?");
  console.log("The user has input: " + user);

alert("Welcome to the game, " + user + "!");
alert("Let's get started!");

var ans1 = prompt("Are there more than 3 food trucks in the near vicinity of CodeFellows?");
  if (ans1.toLowerCase() === 'y' || ans1.toLowerCase() === 'yes') {
    alert("That's right! And they are all fucking delicious!");
    alert("Good job, " + user + "! Let's hit the next question.");
    counter += 1;
    console.log("The user has " + counter + " point(s).");
  }

  else {
    alert("Take a walk around the block and you'll find atleast three or four! Cheap and delicious!");
    alert("Oh well, let's move on!");
  }

var ans2 = prompt("Is CodeFellows awesome?");
  if (ans2.toLowerCase() === 'y' || ans2.toLowerCase() === 'yes') {
    alert("Damn right it is! They keep ordering food too, holy crap!")
    alert("You're on a roll, " + user + "!")
    counter += 1;
    console.log("The user has " + counter + " point(s)." )
  }

  else {
    alert("Are you kidding me? You'd better just be testing parameters here. Minus points for you!")
    counter -= 100;
  }

  var ans3 = prompt("Did you grab any of the sweet CodeFellows merch?");
    if (ans3.toLowerCase() === 'y' || ans3.toLowerCase() === 'yes') {
      alert("Sweet! Show it off duder/dudette!");
      alert("Plus major points!");
      counter += 36;
      console.log("The user has " + counter + " points(s).");

    }

    else {
      alert("Dang! You should try to get some!");
    }

alert("Okay, final question!");

// Can't quite get this to loop, I tried a few different methods but none worked.
// God damn While loops, have a function instead.

gameStart()
function gameStart() {
  var ans4 = prompt("You won't be able to leave until you get this one right! How many cats does Sam have?");
  if (ans4.toLowerCase() === 'three' || ans4 === '3') {
    alert("Great! You've been paying attention! Not that this detail was an important part of class... still! Good job!")
    gameEnd()
  }

  else {
    alert("Oooooh, that is wrong! Try again!")
    gameStart()
  }
}

function gameEnd() {
  alert("You've done well! The game is over!")
}
