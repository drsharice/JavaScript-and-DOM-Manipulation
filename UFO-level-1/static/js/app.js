// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// This activity was designed to run multiple times. For each time uncomment once step, run the JavaScript code,
// Select the form
var form = d3.select("#form");
// comment the step again and move to the next step.
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the table data from data.js
console.log(tableData);
// tbody.append("tr").append("td").text(data[0]['datetime']).append("td").text(data[0]['city']).append("td").text(data[0]['state']).append("td").text(data[0]['country']).append("td").text(data[0]['shape']).append("td").text(data[0]['durationMinutes']);
//data.forEach(function (oneDatapoint) {
//    // create a new row
//    var tr = tbody.append('tr');
//    Object.keys(oneDatapoint).forEach(
//        function (key) {
//            tr.append('td').text(oneDatapoint[key]);
//        }
//    )
//})

function buildTable(tempData) {
    tbody.html("");
    tempData.forEach(function (oneDatapoint) {
        // create a new row
        var tr = tbody.append('tr');
        Object.keys(oneDatapoint).forEach(
            function (key) {
                tr.append('td').text(oneDatapoint[key]);
            }
        )
    });
}
// Create event handlers 
d3.select("#filter-btn").on("click", selectDate);


function selectDate() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
    buildTable(filteredData);
}

function init() {
    buildTable(tableData);
}

init()
