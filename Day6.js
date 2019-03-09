function processData(input) {
    //Enter your code here
    var inputArray = input.split("\n");
    var linesToTest = parseInt(inputArray[0]);
    for (var i = 1; i <= linesToTest; i++) {
        var stringToArray = inputArray[i].split("");
        var evenIndex = "";
        var oddIndex = "";
        for (var j = 0; j < stringToArray.length; j++) {
            if (j % 2 == 1) {
                oddIndex += stringToArray[j]; 
            }
            else if (j % 2 == 0) {
                evenIndex += stringToArray[j];
            }
        }
        console.log(evenIndex + " " + oddIndex);
    } 
    
} 