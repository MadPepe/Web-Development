
var list = [];
var choice = "";

while(choice !== "quit"){
    choice = prompt("What would you like to do?");
    if(choice === "new"){
        var element = prompt("Type new list element");
        list.push(element);
    }
    else if(choice === "list"){
        console.log(list);
    }
    else if(choice != 'quit'){
       alert("Whoops! It appears that you entered not supported action.\n Please try again");
    }
}

