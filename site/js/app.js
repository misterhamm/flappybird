$(document).ready(function() {
    

$("button.nav-button.home").velocity({translateY: [0, -1000] }, { duration: 800, delay: 125, easing: [300,20] });
$("button.nav-button.about").velocity({translateY: [0, -1000] }, { duration: 800, delay: 250, easing: [300,20] });
$("button.nav-button.contact").velocity({translateY: [0, -1000] }, { duration: 800, delay: 375, easing: [300,20] });

    
$(".button").mouseenter(function(){
	$(this)
		.velocity( { translateY: "-10px" }, 400 );
});

$(".button").mouseleave(function(){
	$(this)
		.velocity( { translateY: "0" }, 200 );
});
    
    
    
    
});