$("ul").on("click", "li", function(){
	if ($(this).toggleClass("color"));
});

$("ul").on("click","span", function(event){
  $(this).parent().fadeOut(500,function(){
  	$(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		// grabbing new tod text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</i>")
	}
});
