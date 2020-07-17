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
function brickCalculator(floor){
    var feet = 1000;
    var firstTenFloor = 0;
    var seccondTenFloor = 0;
    var ThirdFloor;
        if(floor <= 10){
            var firstTenFloor = feet * 15 * floor;
            return firstTenFloor;
        }
        else{
            if(floor >=11 && floor <=20){
                var seccondTenFloor = feet * 12 * floor;
                return firstTenFloor + seccondTenFloor;
            }
        }
         if (floor >=21){
            var ThirdFloor = feet * 10 * floor;
            return firstTenFloor+ seccondTenFloor + ThirdFloor;
        }

}
var result = brickCalculator(11);
console.log(result)

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
