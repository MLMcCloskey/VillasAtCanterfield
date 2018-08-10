//-- Primary Navigation
function goTo(file) {
	document.location = file + '.php';	
}

function getAsset(file) {
	document.location = file + '.pdf';	
}

//-- Init Nav Active States
$(document).ready(function() {
	// Primary
   	var el = document.getElementById(pSec);
	el.src = "images/primaryNavigation/" +pSec+ "-on.jpg";
	// Secondary
	var sEl = document.getElementById(sSec);
	sEl.src = "images/subNavigation/" +sSec+ "-on.png";
	// Clean-up class
	$(document.getElementById(pSec)).removeClass("img-over");
	$(document.getElementById(sSec)).removeClass("img-over");	
});

//--FAQ
function showhide(id){
	if (document.getElementById){
		obj = document.getElementById(id);
		if (obj.style.display == "none"){
			obj.style.display = "";
		} 
		else {
			obj.style.display = "none";
		}
	}
} 

//-- Floorplan
function setFloorplan(img){
	document.getElementById('planHolderImage').src = "images/floorplans/" +img+ "_plan.jpg";
	activePlan = img;
	document.getElementById(img).src = "images/floorplans/"+img+"-on.jpg";
}

function printPlan() {
//	alert(activePlan);
	if(activePlan == "1br") {
		//window.open ("http://www.javascript-coder.com","mywindow"); 
		window.open("downloads/Dressage.pdf", "loader");
	}
	if(activePlan == "1brWDen") {
		window.open("downloads/Ballotade.pdf", "loader");
	}
	if(activePlan == "2br") {
		window.open("downloads/Courbette.pdf", "loader");
	}
	if(activePlan == "2brWDen") {
		window.open("downloads/Capriole.pdf", "loader");
	}
	if(activePlan == "1br1BaDen1Ga") {
		window.open("downloads/Derby.pdf", "loader");
	}
	if(activePlan == "2br2BaDen2Ga") {
		window.open("downloads/Canterfield.pdf", "loader");
	}
	if(activePlan == "2br2Ba2Ga") {
		window.open("downloads/Steeplechase.pdf", "loader");
	}
	
}

function test() {
	alert("yup");	
}

//-- Financial Comparison
function setRate() {
	var c1 = document.getElementById('c1').value;
	var c2 = document.getElementById('c2').value;
	var c3 = document.getElementById('c3').value;
	var c4 = document.getElementById('c4').value;
	var c5 = document.getElementById('c5').value;
	var c6 = document.getElementById('c6').value;
	var c7 = document.getElementById('c7').value;
	var c8 = document.getElementById('c8').value;
	var c9 = document.getElementById('c9').value;
	var c10 = document.getElementById('c10').value;
	var c11 = document.getElementById('c11').value;
	var c12 = document.getElementById('c12').value;
	var c13 = document.getElementById('c13').value;
	var c14 = document.getElementById('c14').value;
	var c15 = document.getElementById('c15').value;
	var c16 = document.getElementById('c16').value;
	var sum = parseInt(c1)+parseInt(c2)+parseInt(c3)+parseInt(c4)+parseInt(c5)+parseInt(c6)+parseInt(c7)+parseInt(c8)+parseInt(c9)+parseInt(c10)+parseInt(c11)+parseInt(c12)+parseInt(c13)+parseInt(c14)+parseInt(c15)+parseInt(c16);
	document.getElementById('total').value = sum;		
}

//-- Font Size 
function increaseFont(){
	document.getElementById("fontSize").href = "css/largeFont.css";
}

function decreaseFont(){
	document.getElementById("fontSize").href = "css/smallFont.css";
}
//-- Image Rollovers - Preload
$(window).bind('load', function() {
    var preload = new Array();
    $(".img-over").each(function() {
        s = $(this).attr("src").replace(/\.(.+)$/i, "-on.$1");
        preload.push(s)
    });
    var img = document.createElement('img');
    $(img).bind('load', function() {
        if(preload[0]) {
            this.src = preload.shift();
        }
    }).trigger('load');
});

//-- Image Rollovers - Hover
$(document).ready(function() {
	$(".img-over").each(function() {
        if ($(this).attr("src").match(/-on\.(.+)$/i)) {
            $(this).removeClass("hover");
        }
    });
    $(".img-over").hover(function() {
        s = $(this).attr("src").replace(/\.(.+)$/i, "-on.$1");
        $(this).attr("src", s);
    }, function() {
        s = $(this).attr("src").replace(/-on\.(.+)$/i, ".$1");
        $(this).attr("src", s);
	})
})


$(document).ready(function(){
	$("ul.nav").superfish({
		//animation : { opacity:"show", height:"show" }
	});
});


function validateMe() {
		
}