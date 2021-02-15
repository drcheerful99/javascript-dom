// from data.js and check data
var tableData = data;
console.log(tableData);

function buildTable(data){
    tbody.html("");
    data.forEach(sightings) => {
        var row = tbody.apprend("tr");
        Object.defineProperties(sightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// complete event handler function for the form
function runEnter() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element, get the raw html node and get the value property of input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredValue = tableData;
    if (inputValue){
        filteredData = filteredData.filter(date => date.datetime === inputValue);
    }
    buildTable(filteredData);
}

// select button
var button = d3.select("#filter-btn");
// select form
var form = d3.select(".form-control");
// create event handler
button.on("click", runEnter);
form.on("submit", runEnter);
buildTable(tabledata);