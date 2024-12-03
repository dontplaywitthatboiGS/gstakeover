// Alert to test if scripts are working.
alert("Scripts work!");

// Function to simulate the magic 8-ball behavior.
function shake() {
    askAQuestion();
    var response = giveAResponse();
    displayResponse(response);
}

// Placeholder for future question handling.
function askAQuestion() {
    // Logic for asking a question can be added here.
}

// Function to generate a response from the magic 8-ball.
function giveAResponse() {
    var listOfResponses = getListOfResponses();
    var resp = pickFromList(listOfResponses);
    return resp;
}

// Function to return a list of possible responses.
function getListOfResponses() {
    return ["Yes", "No", "Maybe"];
}

// Function to pick a random item from a list.
function pickFromList(list) {
    var length = list.length; // Get the total number of items in the list.
    var rand = Math.random(); // Generate a random number between 0 and 1.
    var choice = Math.floor(length * rand); // Calculate a random index.
    return list[choice]; // Return the randomly chosen item.
}

// Function to display the response on the webpage.
function displayResponse(aResponse) {
    // Use an HTML element with the ID "fortune" to show the answer.
    var fortuneElement = document.getElementById("fortune");
    if (fortuneElement) {
        fortuneElement.innerHTML = aResponse;
    } else {
        alert(aResponse); // Fallback if the HTML element isn't found.
    }
}
