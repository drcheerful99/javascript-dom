// from data.js, check data
var tableData = data;
console.log(tableData);

// Get reference to the table body - 'tbody'
var tbody = d3.select("tbody");

// UFO sighting values for each column
tableData.forEach(function(sightings) {
    // Append one table row (tr) for each UFO sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO sighting value
    Object.entries(sightings).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select button and filter value based on input
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date get the raw html nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // Filter data with datetime equal to input value
    var filteredData = tableData.filter(dates => dates.datetime === inputValue);

    filteredData.forEach(function(selections) {
    console.log(selections);
    // Append one table row `tr` for each UFO sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell (td) to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});   
});   
