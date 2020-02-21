$(document).ready(function(){
	var $class = "one" ;

 $("button").on('click', function(){
		
		var item = $("input").val();
	var $list = $("<li></li>");
	$list.appendTo('ul')
	$list.text(item)
	if($class === "one"){
		$class = "two"
	}
	else{ $class = "one"};
	$list.addClass($class);
	$('input').val('');


	
 });
})