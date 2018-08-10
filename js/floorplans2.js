//Set up an array of all the content
var ContentArrayOther = new Array();
ContentArrayOther[0] = "<a href='#'><img src='images/floorplans/2brWden2_plan.jpg></a>";

//the main function to change the content
function changeContentOther(contentChangeOther){
//get a handle for the box object
var contentBoxOther = document.getElementById("floor-bottom");
//change the innerHTML to the array item
contentBoxOther.innerHTML = ContentArrayOther[contentChangeOther];
}