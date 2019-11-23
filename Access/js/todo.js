// $("li").on("click", function(){
// 	if($(this).css("color")==="rgb(128, 128, 128)"){
//      $(this).css("color", "black"); 
//      $(this).css("text-decoration", "none"); 
// 	}
// 	else{
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration", "line-through");
// }

// });


$("ul").on("click", "li", function(){
	$(this).toggleClass("Good");
});


$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
  event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
    var todo = $(this).val();
    // to clear out the input after u pressed enter
    $(this).val("");
    $("ul").append("<li><i class= 'fa fa-trash'>X</i> " + todo + "</li>");
}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});