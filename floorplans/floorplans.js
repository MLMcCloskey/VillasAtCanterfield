//Set up an array of all the content
var ContentArray = new Array();
ContentArray[0] = "<a href='downloads/Dressage.pdf'><img src='images/floorplans/1br_plan.jpg'></a>";
ContentArray[1] = "<a href='downloads/Piroutte.pdf'><img src='images/floorplans/2brWden2_plan.jpg'></a><br><a href='downloads/Ballotade.pdf'><img src='images/floorplans/1brWden_plan.jpg' width='617' height='630'></a>";
ContentArray[2] = "<a href='downloads/Courbette.pdf'><img src='images/floorplans/2br_plan.jpg'></a>";
ContentArray[3] = "<a href='downloads/Capriole.pdf'><img src='images/floorplans/2brWden_plan.jpg'></a>";
ContentArray[4] = "<a href='downloads/Derby.pdf'><img src='images/floorplans/1br1baDen1ga_plan.jpg'></a>";
ContentArray[5] = "<a href='downloads/Canterfield.pdf'><img src='images/floorplans/2br2baDen2Ga_plan.jpg'></a>";
ContentArray[6] = "<a href='downloads/Steeplechase.pdf'><img src='images/floorplans/2br2ba2ga_plan.jpg'></a>";

//the main function to change the content
function changeContent(contentChange){
//get a handle for the box object
var contentBox = document.getElementById("planHolder");
//change the innerHTML to the array item
contentBox.innerHTML = ContentArray[contentChange];
}