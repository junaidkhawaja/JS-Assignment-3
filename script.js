// Chapter 14-16

// Q1 & Q2
var students = [];

// Q3
var strings = ["Junaid", "Khawaja"]

// Q4
var numbers = [1, 2, 3, 4, 5]

// Q5
var booleans = [true, false]

// Q6
var mixedarray = ["ahmed", "ali", true, undefined, null, 33]

// Q7
var edqual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("<h2>Qualifications:</h2>" + "1) " + edqual[0] + "<br>" + "2) " + edqual[1] + "<br>" + "3) " + edqual[3] + "<br>" + "4) " + edqual[3] + "<br>" + "5) " + edqual[4] + "<br>" + "6) " + edqual[5] + "<br>" + "7) " + edqual[6] + "<br>" + "8) " + edqual[7] + "<br><br>");

// Q8
var studentsName = ["Michael", "John", "Tony"]
var studentsTotal = 500;
var studentsObt = [320, 230, 480]
var student1perc = studentsObt[0] / studentsTotal * 100
var student2perc = studentsObt[1] / studentsTotal * 100
var student3perc = studentsObt[2] / studentsTotal * 100

document.write("Score of " + studentsName[0] + " is " + studentsObt[0] + ". Percentage: " + student1perc + "% <br>" + "Score of " + studentsName[1] + " is " + studentsObt[1] + ". Percentage: " + student2perc + "% <br>" + "Score of " + studentsName[2] + " is " + studentsObt[2] + ". Percentage: " + student3perc + "% <br><br>" );


// Q9
var colors = ["magenta", "cyan", "aqua"]

// a
var q9a = prompt("Add some color to the start of an array");
colors.unshift(q9a);
document.write("Answer of Q9(a) is: " + colors + "<br>");

// b
var q9b = prompt("Add some color to the end of an array");
colors.push(q9b);
document.write("Answer of Q9(b) is: " + colors + "<br>");

// c
var q9ca = prompt("Add one more color to the start of an array");
colors.unshift(q9ca);
var q9cb = prompt("Add another color to the start of an array");
colors.unshift(q9cb);
document.write("Answer of Q9(c) is: " + colors + "<br>");

// d
colors.shift();
document.write("Answer of Q9(d) is: " + colors + "<br>");


// e
colors.pop();
document.write("Answer of Q9(e) is: " + colors + "<br>");

// f
var q9f = +prompt("Which index we should add the 'fantastic orange'?");
colors.splice(q9f, 0, "fantastic orange");
document.write("Answer of Q9(f) is: " + colors + "<br>");

// g
var q9ga = +prompt("which index you want to delete some color?");
var q9gb = +prompt("how many colors do you want to delete?");
var q9gc = colors.slice(q9ga, q9gb);
document.write("Answer of Q9(g) is: " + q9gc + "<br><br>");


// Q10
var scores = [320, 230, 480, 120]
document.write("Scores of Students: " + scores + "<br>");
scores.sort()
document.write("Ordered Scores of Students: " + scores + "<br><br>");


// Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
document.write("Cities List: <br>" + cities + "<br>");

var slicedCities = cities.slice(2, 4);
document.write("Selected Cities List: <br>" + slicedCities + "<br><br>");

// Q12
var newArray = ["This", "is", "my", "cat"];
document.write(newArray.join().replaceAll(",", " ") + "<br><br>");

// Q13
var arr13 = []
arr13[0] = "keyboard";
arr13[1] = "mouse";
arr13[2] = "printer";
arr13[3] = "monitor";

document.write("Out<br>" + arr13[0] + "<br>" + "Out<br>" + arr13[1] + "<br>" + "Out<br>" + arr13[2] + "<br>" + "Out<br>" + arr13[3] + "<br><br>")

// Q14
document.write("Out<br>" + arr13[3] + "<br>" + "Out<br>" + arr13[2] + "<br>" + "Out<br>" + arr13[1] + "<br>" + "Out<br>" + arr13[0] + "<br><br>")


// Q15
var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h3>Q15 Selectbox</h3><select><option>" + phones[0] + "</option><option>" +  phones[1] + "</option><option>" +  phones[2] + "</option><option>" +  phones[3] + "</option><option>" +  phones[4] + "</option><option>" +  phones[5] + "</option></select><br><br>");

