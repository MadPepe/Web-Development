
var button = document.querySelector("button");

button.addEventListener("click", function(){
    var bgColor = document.body.style.background;
    if(bgColor === 'purple'){
        document.body.style.background = "white";
        } else {
        document.body.style.background = "purple";
    }
});