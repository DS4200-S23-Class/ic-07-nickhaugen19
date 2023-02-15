// Declare constants
const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50}

const FRAME1 = d3.select("#vis1")
                .append("svg")
                .attr("height", FRAME_HEIGHT)
                .attr("width", FRAME_WIDTH)
                .attr("class", "frame");

//reading from file
d3.csv("data/circles.csv").then((data) => {
  
  console.log(data);
  
  //plot
  FRAME1.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", (d) => {return d.x })
      .attr("cy", (d) => {return d.y })
      .attr("r", 30)
      .attr("fill", (d) => {return d.color});
 
  
