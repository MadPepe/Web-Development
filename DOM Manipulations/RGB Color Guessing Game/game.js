var colors = [];
var colorsToPick = 6;

var blocks = document.querySelectorAll(".block");
var hardBtn = document.querySelector("#hard-level");
var easyBtn = document.querySelector("#easy-level");
var newGameBtn = document.querySelector("#new-game-btn");
var correctColorQuery = document.querySelector("#correct-color");
var notificationBar = document.querySelector("#notification-bar");
var header = document.querySelector("h1");

hardBtn.classList.add("selected");
newGame();

// Add event listeners to blocks
for (var i = 0; i < colorsToPick; i++) {
    blocks[i].addEventListener("click", function () {
        var selectedColor = this.style["background-color"];
        if (selectedColor === correctColor) {
            // Add text to notification bar
            notificationBar.textContent = "CORRECT!";

            // Change color of all blocks and header to be the same as the answer
            header.style["background-color"] = correctColor;
            for (var block = 0; block < colorsToPick; block++) {
                blocks[block].style["background-color"] = correctColor;
            }
            //Change text in left button to PLAY AGAIN
            newGameBtn.textContent = "PLAY AGAIN?";
        }
        else {
            // fade out block
            this.style["background-color"] = "#2f2f2f";
            // Add text to notification bar
            notificationBar.textContent = "TRY AGAIN!";
        }
    });
};
// Add event action for clicking new game
newGameBtn.addEventListener("click", newGame)

// Add event listener to EASY button
easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colorsToPick = 3;
    newGame();
});

// Add event listener to HARD button
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colorsToPick = 6;
    newGame();
});


function newGame(){
    pickColors(colorsToPick);
    correctColorId = Math.floor(Math.random() * colorsToPick);
    correctColor = colors[correctColorId];
    configureBlocks();
    correctColorQuery.textContent = correctColor;
    newGameBtn.textContent = "NEW GAME";
    header.style["background-color"] = "steelblue";
    notificationBar.textContent = "";
}


// Configure blocks
function configureBlocks() {
    for (var i = 0; i < 6; i++) {
        if(i < colorsToPick){
            // Add colors as backgrounds
            blocks[i].style["background-color"] = colors[i];
            // Make blocks visable depending on level
            blocks[i].style.display = "inline";
        }
        else{
            blocks[i].style.display = "none";
        }
    };
};


function pickColors(num) {
    for (var i = 0; i < num; i++) {
        colors[i] = pickColor();
    }
}


function pickColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
