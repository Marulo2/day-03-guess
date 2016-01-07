//JavaScript for index.html

var counter = 0;

var result1 = document.getElementById('res1')
var result2 = document.getElementById('res2')
var result3 = document.getElementById('res3')
var result4 = document.getElementById('res4')

// alert("Welcome to the Guessing Game!");
// alert("Where you can win or lose nothing at all!");

var user = prompt("Can we please have your name?");
  console.log("The user has input: " + user);

alert("Welcome to the game, " + user + "!");
// alert("Let's get started!");

q1();

function q1() { var ans1 = prompt("Are there more than 3 food trucks in the near vicinity of CodeFellows?");
  if (ans1.toLowerCase() === 'y' || ans1.toLowerCase() === 'yes') {
    result1.textContent = ans1 + " That's right! And they are all fucking delicious!";
    // alert("Good job, " + user + "! Let's hit the next question.");
    counter += 1;
    console.log("The user has " + counter + " point(s).");
  }

  else {
    result1.textContent = ans1 + "Take a walk around the block and you'll find atleast three or four! Cheap and delicious!";
    // alert("Oh well, let's move on!");
  }
}

q2();
function q2() { var ans2 = prompt("Is CodeFellows awesome?");
  if (ans2.toLowerCase() === 'y' || ans2.toLowerCase() === 'yes') {
    result2.textContent = ans2 + " Damn right it is! They keep ordering food too, holy crap!";
    alert("You're on a roll, " + user + "!");
    counter += 1;
    console.log("The user has " + counter + " point(s)." );
  }

  else {
    result2.textContent = ans2 + " Are you kidding me? You'd better just be testing parameters here. Minus points for you!";
    counter -= 100;
  }
}

q3();
function q3() {  var ans3 = prompt("Did you grab any of the sweet CodeFellows merch?");
    if (ans3.toLowerCase() === 'y' || ans3.toLowerCase() === 'yes') {
      result3.textContent = ans3 + " Sweet! Show it off duder/dudette!";
      alert("Plus major points!");
      counter += 36;
      console.log("The user has " + counter + " points(s).");

    }

    else {
      result3.textContent = ans3 + " Dang! You should try to get some!";
    }
}
alert("Before we get to the last question, you currently have " + counter + " points!")

alert("Okay, final question!");

// Can't quite get this to loop, I tried a few different methods but none worked.
// God damn While loops, have a function instead.

q4();
function q4() {
  var ans4 = prompt("You won't be able to leave until you get this one right! How many cats does Sam have?");
  if (ans4.toLowerCase() === 'three' || ans4 === '3') {
    result4.textContent = ans4 + " Great! You've been paying attention! Not that this detail was an important part of class... still! Good job!";
    gameEnd()
  }

  else {
    result4.textContent = ans4 + " Oooooh, that is wrong! Try again!";
    q4()
  }
}

function gameEnd() {
  alert("You've done well! The game is over!")
}

//Okay, got it WORKING thanks to sam's marker board explanation

// var while5 = false;
// while (while5 === false) {
//
// var ans5 = prompt("test test")
//   if (ans5 === 'y') {
//     alert("YES!")
//     while5 = true;
//   }
//
//   else {
//     alert("NO")
//   }
// }

//Okay this is just for the merge.
//Okay this is just for the merge. Part two.
