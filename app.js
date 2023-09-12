// Nested conditional statements

 var lang = prompt("Enter your language");

if (lang === "javascript" || lang === "html" || lang === "css") { // "||" pipe sign denotes the "or" statement
    var city = prompt("Enter your city"); // if first statement is true then this prompt will run
    if (city === "karachi" || city === "lahore" || city === "sukkur") {
        var exp = +prompt("Enter your experience in years");
        if (exp >= 2) {
            alert("You're hired!!");
        }
        else {
            alert("You don't have enough experience to be hired. Better luck next time!")
        }
    }
    else {
        alert("you don't live in the city where we have office.")
    }
}
else {
    alert("We're currently hiring developers with expereince in one of the languages listed in the job requirements.");
}



// arrays

var arr = ["junaid", "khawaja", true, 43, undefined, null, 66, "multan"]

// let's check array length, how many index are there in this array
console.log(arr.length);

// let's check array indexes one by one. where the first index starts with 0

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);

// let's remove last index from the array using the pop method.

arr.pop(); // you can use this pop method multiple times to remove more than one indexes
console.log(arr)


// let's add something to the array's last index using the push method

arr.push("ahmed", 98, true);
console.log(arr);

// let's remove the starting indexes using the shift method

arr.shift(); // you can use this shift method multiple times to remove multiple indexes
console.log(arr);

// let's add something to the starting indexes using the unshift method

arr.unshift("hamid", "sohail", 56);
console.log(arr);

// let's add something to the array using the splice method
// splice takes 3 values in its paranthesis, first value is the index number you want to start adding something, second value is needed if you want to remove something otherwise make it 0, and lastly add your new strings/data
arr.splice(2, 0, "muhammad waqar ali");
console.log(arr);

// let's copy something from the array to the new array without affecting original
// slice takes 2 total values, 1st value which is the start of the index, and last value is the end part
var slicing = arr.slice(3, 2);
console.log(slicing);

// let's convert an array into string using join method

var arr2 = ["juanid", "khawaja", 2, true]
console.log(arr2.join());

// let's connect 2 different arrays using concact method

var arr3 = ["hamza", "abdullah", "sameer"]
var arr4 = [33, 55, true]
console.log(arr3.concat(arr4));


