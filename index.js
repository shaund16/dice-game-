var randomNumber1 = Math.floor((Math.random() * 6) + 1); // the formula

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice image ( dice-1.png - dice-6.png)

var randomSourceImage = "images/" + randomDiceImage; // /images/dice-1.png -images/dice-6.png )

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSourceImage);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSourceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);

// The Code if Player One Wins
if ( randomNumber1 > randomNumber2 ) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

/// The Code if Player Two Wins
else if ( randomNumber2 > randomNumber1 ) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}

else {
  document.querySelector("h1").innerHTML = " Draw ";
}
