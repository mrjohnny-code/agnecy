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

//LazyLoad
document.addEventListener("DOMContentLoaded", function() {

	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {

		let lazyImageObserver = new IntersectionObserver(function(entries, observer) {

			entries.forEach(function(entry) {

				if (entry.isIntersecting) {

					let lazyImage = entry.target;

					lazyImage.src = lazyImage.dataset.src;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function(lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	}
});