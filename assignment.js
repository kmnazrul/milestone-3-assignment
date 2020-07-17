// Below is assignment #1

function feetToMile(feet) {
    var mile = feet * 0.00018939;     /* unit value from w3schools.com */
    return mile;
}
var mileCount = feetToMile(5280);
console.log(mileCount);

// Below is assignment #2

function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(10, 2, 2);
console.log(woodResult);


// Below is assignment #3


// Below is assignment #4

function tinyFriend(names) {
    var shortest = names[0];
    for(var i = 0; i < names.length; i++) {
        var currentString = names[i];
        if(currentString < shortest){
            shortest = currentString;
        }
    }
    return shortest;
}
var shortestName = tinyFriend(["Nazrul", "Nazir", "Azad", "Shofiqul", "Ali"]);
console.log(shortestName);