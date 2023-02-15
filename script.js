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
