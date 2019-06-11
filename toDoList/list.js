
var list = [];
var choice = "";

while(choice !== "quit"){
    choice = prompt("What would you like to do?");
    if(choice === "new"){
        var element = prompt("Type new list element");
        list.push(element);
    }
    else if(choice === "list"){
        console.log("*******************");

        list.forEach(function(element, index){
            console.log(index+": " + element);
        });

        console.log("*******************");
    }
    else if(choice === "delete"){
        element = prompt("Which element do you want to delete?");
        if(list.indexOf(element) !== -1){
            list = list.filter(function(it){
                return it !== element;
            });
            console.log("Element " + element + " deleted");
        }
        else {
            console.log("There is no element " + element + " in Todo's list!");
        }
        
    }
    else if(choice != 'quit'){
       alert("Whoops! It appears that you entered not supported action.\n Please try again");
    }
}

