var interval = null;
var speed = 4;
var count = 0;

function run() {
	count += speed;
	if (count >= 900) {
		window.clearInterval( interval );
		interval = null;
	}
	
	var bigImage = document.getElementById("imgCover");
	bigImage.setAttribute("style", "width: " + (count + "px;") +
		"height: " + (count + "px;") );
}

function display( imgFile ) {
	if ( interval )
		return;
	var bigImage = document.getElementById("imgCover");
	bigImage.setAttribute("style", "width: 0px; height: 0px;");
	bigImage.setAttribute("src", "fullsize/" + imgFile);
	bigImage.setAttribute("alt", "Large version of " + imgFile);
	
	count = 0; //start count
	interval = window.setInterval("run()", 20);
}


function start()
{
	document.getElementById("image1").addEventListener("click", function () { display("red-number-1.jpg");}, false);
    document.getElementById("image2").addEventListener("click", function () { display("red-number-2.jpg");}, false);
    document.getElementById("image3").addEventListener("click", function () { display("red-number-3.jpg");}, false);
    
}
window.addEventListener("load", start, false);
