$(document).ready(function(){

	$('.filter-link').click(function(){
		$('.filter-link').removeClass("active");
		$(this).addClass("active");

		return false;
	});
	
	
	$(function() {
		
		var selectedClass = "";
		$(".filter-link").click(function(){

			selectedClass = $(this).attr("data-filter");

			$(".filter-block").fadeOut(100);
			$(".filter-block." + selectedClass).fadeIn(100);
		});
	});
  
});