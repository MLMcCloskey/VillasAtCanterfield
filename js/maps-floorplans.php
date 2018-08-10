<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Canterfield, A Retirement Community: Lifestyle &amp; Amenities</title>
<script type="text/javascript" src="js/floorplans.js"></script>
<script type="text/javascript" src="js/floorplans2.js"></script>
<?php include('includes/resources.php'); ?>
<script>
$(document).ready(function(){
	$(".lightbox").lightbox();
});
var pSec = "community-btn";
var sSec = "mapsFloorPlansBtn";
var img = "";
</script>
</head>
<body>
    <div id="container">
<!-- Header -->
        <?php include('includes/header.php'); ?>
<!-- END Header -->
<!-- Primary Nav -->
		<?php include('includes/primaryNavigation.php'); ?>
<!-- END Primary Nav -->
<div id="threeColContentOuter">
                <div id="threeColLeft">
                        <div class="subNavTop"></div>
<!-- Sub Navigation Options -->
						<?php include('includes/subNavOurCommunity.php'); ?>
<!-- END Sub Navigation Options -->
                        <div class="subNavBottom"></div>
                        <br />
						<a href="images/AreaMap.jpg" target="_blank"><img src="images/floorplans/campusmapbtn.png" alt="" /></a>
                            </div>
                <div id="oneColRight">
				<h1 id="mapsFloorplans">Maps/Floorplans</h1>
                <p style="margin-left: 13px;">Click description to view sample floor plan:</p>
                <div id="floorplanWrapper">
                <div class="indFloorPlanOptions">
               		<a href="#" onClick="changeContent(0);"><img src="images/floorplans/1br.jpg" alt="1 Bedroom" /></a>
               		<a href="#" onClick="changeContent(1);"><img src="images/floorplans/1brWden.jpg" alt="1 Bedroom w/ Den" /></a>
               		<a href="#" onClick="changeContent(2);"><img src="images/floorplans/2br.jpg" alt="2 Bedroom" /></a>
               		<a href="#" onClick="changeContent(3);"><img src="images/floorplans/2brWden.jpg" alt="2 Bedroom w/ Den" /></a>
                  </div>
                <div class="villasFloorPlanOptions">
               		<a href="#" onClick="changeContent(4);"><img src="images/floorplans/1br1baDen1ga.jpg" alt="1 Bedroom, 1 Bath, Den, 1 Car Garage" /></a>
                    <a href="#" onClick="changeContent(5);"><img src="images/floorplans/2br2baDen2Ga.jpg" alt="2 Bedroom, 2 Bath, Den, 2 Car Garage" /></a>
                    <a href="#" onClick="changeContent(6);"><img src="images/floorplans/2br2ba2ga.jpg" class="img-over" alt="2 Bedroom, 2 Bath, 2 Car Garage" /></a>
                  </div>
                </div>
                <div id="planHolder">
    			</div>
    			</div>
                <div id="threeColClear"></div>
 <!-- Home Absolute Elements -->
 <!-- END Home Absolute Elements -->
      </div>
<!-- Global Footer -->
            <?php include('includes/footer.php'); ?>
<!-- END Global Footer -->
        </div>
</body>
</html>
