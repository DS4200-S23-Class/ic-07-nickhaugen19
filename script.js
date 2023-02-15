const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const FRAME1 = //store svg element as a variable   
d3.select("#vis1") //analogous to document.selectElementByXX()
                    // the "#" indicates an id, similar to .css
  .append("svg") //adds a child svg to selected element
    .attr("height", FRAME_HEIGHT) //set attributes of the added 
                        // element. Note how methods are strung 
                        // together with the . notation, and how
                        // indenting is used to to organize code  
    .attr("width", FRAME_WIDTH)
    .attr("class", "frame"); // Note how we still end with a ; 

//###############################################################
// Adding svg's to the frame
// To create visualizations, we will add svg's as children of
// the frame svg. Note how we use the const FRAME1 variable.   
//###############################################################

FRAME1.append("circle") //append a circle svg to FRAME
        .attr("cx", 50) //need to set the same attributes that we 
                        // would if we defined the circle in html,
                        // but we do so programatically with d3
        .attr("cy", 50)
        .attr("r", 30)
        .attr("class", "firstCircle"); //still use classes and
                                        // css to style 

//We defined margins earlier, but haven't used them. When we 
// position svg's inside of the frame, we need to include margins
// (this helps things not run off the frame)

FRAME1.append("circle")
        .attr("cx", 50 + MARGINS.left) // move over by left margin
        .attr("cy", 50 + MARGINS.top) //  move down by top margin
        .attr("r", 30)
        .attr("class", "firstCircle");

const data2 = [10000, 20000, 40000]; 

// We would need an extremely large screen to use data2 values
// as our cx values. In order for our vis to work on (almost) 
// any screen, we need to be able to map (i.e. scale) our data
// values to pixel values. 

// Start with a new frame. This time, we will also set a constant
// for the width and height of our vis
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME3 = d3.select("#vis3")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// Now, let's define our scaling function

// find max X
const MAX_X = d3.max(data2, (d) => { return d; }); 
console.log("Max x: " +MAX_X);  

// Now, define scale functions that maps our data values 
// (domain) to pixel values (range)
const X_SCALE = d3.scaleLinear() // linear scale because we have 
                              // linear data 
                  .domain([0, (MAX_X + 10000)]) // add some padding  
                  .range([0, VIS_WIDTH]); 

console.log("Input: 40000, X_SCALE output: " + X_SCALE(40000));

// Now, we can use X_SCALE to plot our points
FRAME3.selectAll("points")  
    .data(data2)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (X_SCALE(d) + MARGINS.left); }) 
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 

// We can also use X_SCALE to add an axis to the vis  
FRAME3.append("g") // g is a "placeholder" svg
      .attr("transform", "translate(" + MARGINS.left + 
            "," + (VIS_HEIGHT + MARGINS.top) + ")") //moves axis 
                                                    // within margins 
      .call(d3.axisBottom(X_SCALE).ticks(4)) // function for generating axis  
        .attr("font-size", '20px'); // set font size
