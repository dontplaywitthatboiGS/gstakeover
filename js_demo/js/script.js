function askName() {
    var nameReturn =document.getElementById
    ('ask-name');
    var name = prompt ('Please enter your name' , 'HEEM');
    if (name == ' ') {
        alert ('please try again')
    
    }
    else{
        nameReturn.innerHTML = 'hello' + name
        + '!nice to meet you twin ';    }
}

function askQuestion() {
    var q = prompt('how much heem can you consume if you was a heemologist')
    if(q!=null) {
        document.getElementById('question').innerHTML='yikes'+ q + 'is a lot of heem'
    }
}
function pickFromList(list) {

    var length = list.length; // Get the total number of items in the list.

    var rand = Math.random();
     // Generate a random number between 0 and 1.

    // Multiply the list length by the random number to get a number in range (e.g., 0 to 2.999 for 3 items).

    // Use Math.floor() to round down and turn it into an index (e.g., 0, 1, or 2).

    var choice = Math.floor(length * rand);

    return list[choice]; // Return the randomly chosen item from the list.

}

 

 

// This function displays the response from the magic 8-ball on the webpage.

function displayResponse(aresponse) {

    // Use an HTML element with the ID "fortune" to show the answer.

    document.getElementById("fortune").innerHTML = aresponse;

}