// 1st problem - feet to mile conversion starts



// 1st problem - feet to mile conversion function starts
function feetToMile(feetValue) {
    if (feetValue < 0) {
        return console.log('Invalid Input Given !!');
    }
    else {

        var mileValue = feetValue * 0.000189394;
        mileValue = mileValue.toFixed(10);
        return mileValue;
    }

}
// 1st problem - feet to mile conversion function ends


// 1st problem - feet to mile conversion output code starts
resultFeetToMile = feetToMile(1000);   // give input value in inch 
if (resultFeetToMile >= 0) {
    console.log(resultFeetToMile);
}
// 1st problem - feet to mile conversion ends




// 2nd problem -  wood calculator starts



// 2nd problem - wood calculator function starts

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    if (chairQuantity < 0 || tableQuantity < 0 || bedQuantity < 0)
        var checkNegativeCounter = 0;
    if (Number.isInteger(chairQuantity) == false || Number.isInteger(tableQuantity) == false || Number.isInteger(bedQuantity) == false)
        var checkFractionQuantity = 0;
    if (checkNegativeCounter == 0 || checkFractionQuantity == 0)
        return console.log('Invalid Input Given !!');
    else {
        var totalWoodQuantity = chairQuantity * 1 + tableQuantity * 3 + bedQuantity * 5;
        return totalWoodQuantity;
    }


}
// 2nd problem - wood calculator function ends



// 2nd problem -  wood calculator output code starts
resultTotalWoodQuantity = woodCalculator(3, 5, 10); // Give input in 'x' form , not in 'x.0' form
if (resultTotalWoodQuantity >= 0) {
    console.log(resultTotalWoodQuantity);
}


// 2nd problem -  wood calculator ends


// 3rd problem -  brick calculator starts

// 3rd problem -  brick calculator function starts

function brickCalculator(numberOfFloor) {
    if (numberOfFloor < 0 || Number.isInteger(numberOfFloor) == false) {
        return console.log('Invalid Input Given !!');
    }
    else {
        var floorTotalHeight = 0;

        if (numberOfFloor > 20) {
            floorTotalHeight = (numberOfFloor - 20) * 10;
            numberOfFloor = 20;
        }
        if (numberOfFloor > 10 && numberOfFloor <= 20) {
            floorTotalHeight = floorTotalHeight + (numberOfFloor - 10) * 12;
            numberOfFloor = 10;

        }
        if (numberOfFloor <= 10) {
            floorTotalHeight = floorTotalHeight + numberOfFloor * 15;
        }


        var totalBricksCount = floorTotalHeight * 1000;
        return totalBricksCount;
    }



}


// 3rd problem -  brick calculator function ends


// 3rd problem -  brick calculator output code starts
resultBrickCalculator = brickCalculator(100);  // Input 
if (resultBrickCalculator >= 0) {
    console.log(resultBrickCalculator);
}

// 3rd problem -  brick calculator output code ends
// 3rd problem -  brick calculator ends


// 4th problem - tiny name returning starts

// 4th problem - tiny name returning function starts

function tinyFriend(friendNames) {
    var tinyFriendNameLength = friendNames[0].length;
    var tinyFriendName = friendNames[0];

    var friendNameIndex = friendNames.length;
    while (friendNames[friendNameIndex - 1] == "") {
        friendNameIndex--;
    }


    for (var i = 1; i < friendNameIndex; i++) {

        if (tinyFriendNameLength == 0) {

            tinyFriendNameLength = friendNames[i].length;
        }

        if (tinyFriendNameLength >= friendNames[i].length) {

            tinyFriendNameLength = friendNames[i].length;

            tinyFriendName = friendNames[i];
        }

    }


    return tinyFriendName;
}
// 4th problem - tiny name returning function  ends



// 4th problem - tiny name returning ouput code starts 
resultTinyFriend = tinyFriend(["","M","Tahia", "Rifa","", "","Zim","Aroshi","Tahmin","Mim","Mimo","",""]); //input of friends' names
console.log(resultTinyFriend);
// 4th problem - tiny name returning ouput code ends

// 4th problem - tiny name returning ends