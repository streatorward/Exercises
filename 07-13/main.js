console.log("You are so great at Javascript!!")

// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

function go(direction, speed) {
    if (speed > 75) {
        console.log(`The car is moving forward at ${speed} mph. SLOW DOWN!!!`);
    }
    else {
        console.log(`The car is moving ${direction} , at ${speed}`);
    }
}


go("forward", "25");
go("backwards", "90");
go("forward", "76");