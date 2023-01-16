

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width )
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("data_IC.csv",function(data) {

    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
      .domain([1950,2020])
      .range([ 0, width -100 ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickValues(["1950","1960","1970","1980","1990","2000","2010","2020"]));



    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, 3.5])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Show confidence interval
    svg.append("path")
      .datum(data)
      .attr("fill", "#cce5df")
      .attr("stroke", "none")
      .attr("d", d3.area()
        .x(function(d) { return x(d.x) })
        //.y0(function(d) { return y(d.CI_right) })
        //.y1(function(d) { return y(d.CI_left) })
        )

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
        )

})

