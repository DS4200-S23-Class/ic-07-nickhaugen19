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
  
});

// with a scale function
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.r

const FRAME2 = d3.select("#vis2")
                    .append("svg")
                      .attr("height", FRAME_HEIGHT)
                      .attr("width", FRAME_WIDTH)
                      .attr("class", "frame");

d3.csv("data/circles2.csv").then((data) => {
  
  const MAX_X2 = d3.max(data, (d) => {
                          return parseInt(d.x)
    
  });
  
  const X_SCALE2 = d3.scaleLinear()
                      .domain([0, MAX_X2])
                      .range([0, VIS_WIDTH]);
  
  FRAME2.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
          .attr(cx, (d) => {
            return (X_SCALE_2(d.x) + MARGINS.left
                    })
           .attr("cy", MARGINS.top)
           .attr("r", 20)
           .attr("class", "point");

  FRAME2.append("g")
          .attr("transform", "translate(" +
                MARGINS.left + "," +
                (VIS_HEIGHT + MARGINS.top) + ")")
          .call(d3.axisBottom(X_SCALE2.ticks(4))
                  .attr("font-size", "20px");
                });
  
  
 
  
