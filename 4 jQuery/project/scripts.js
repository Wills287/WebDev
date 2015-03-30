/* Determine the size of the user window and deduct the height of the navbar
from it so that the size of the containers on the page can be modified to user
the whole page
*/
var windowHeight = $(window).height();
var navBarHeight = $("#navbar").height();
var codeContainerHeight = windowHeight - navBarHeight;

$(".codeContainer").height(codeContainerHeight + "px");

/* When a tab at the top of the page is clicked, the visibility and size of the
containers is altered to fit the page (clicking the HTML tab will toggle
display for the HTML code container)
*/
$(".toggle").click(function() {
	$(this).toggleClass("selected");
	
	var activeDiv = $(this).html();
	
	$("#" + activeDiv + "Container").toggle();
	
	var visibleDivs = $(".codeContainer").filter(function() {
		return ($(this).css("display") != "none");
	}).length;
	
	var divWidth = 100 / visibleDivs;
	
	$(".codeContainer").width(divWidth + "%");
});

/* When the run button is pressed, the code is combined into the iframe to
display the effects of the entered code
eval commented out due to security concerns
*/
$("#runButton").click(function() {
	$("#resultFrame").contents().find("html").html("<style>" + $("#cssCode").val() + '</style>' + $("#htmlCode").val());
	
	//document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
});