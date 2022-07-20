/*CALCULATOR*/
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
addEventListener("keydown", function(event) {
    if (event.key === "0") {event.preventDefault();document.getElementById("calc-0").click();}
    if (event.key === "1") {event.preventDefault();document.getElementById("calc-1").click();}
    if (event.key === "2") {event.preventDefault();document.getElementById("calc-2").click();}
    if (event.key === "3") {event.preventDefault();document.getElementById("calc-3").click();}
    if (event.key === "4") {event.preventDefault();document.getElementById("calc-4").click();}
    if (event.key === "5") {event.preventDefault();document.getElementById("calc-5").click();}
    if (event.key === "6") {event.preventDefault();document.getElementById("calc-6").click();}
    if (event.key === "7") {event.preventDefault();document.getElementById("calc-7").click();}
    if (event.key === "8") {event.preventDefault();document.getElementById("calc-8").click();}
    if (event.key === "9") {event.preventDefault();document.getElementById("calc-9").click();}
    if (event.key === "x") {event.preventDefault();document.getElementById("calc-x").click();}
    if (event.key === "*") {event.preventDefault();document.getElementById("calc-x").click();}
    if (event.key === "/") {event.preventDefault();document.getElementById("calc-/").click();}
    if (event.key === "+") {event.preventDefault();document.getElementById("calc-+").click();}
    if (event.key === "-") {event.preventDefault();document.getElementById("calc--").click();}
    if (event.key === ",") {event.preventDefault();document.getElementById("calc-.").click();}
    if (event.key === ".") {event.preventDefault();document.getElementById("calc-.").click();}
    if (event.key === "c") {event.preventDefault();document.getElementById("calc-c").click();}
    if (event.key === "Escape") {event.preventDefault();document.getElementById("calc-c").click();}
    if (event.key === "=") {event.preventDefault();document.getElementById("calc-=").click();}
    if (event.key === "Enter") {event.preventDefault();document.getElementById("calc-=").click();}
  });
/*CLOCK*/
function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    document.getElementById("digital-clock-1").innerText = hour + ":" + minute + ":" + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
}
// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
Time();