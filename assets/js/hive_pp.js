jQuery( document ).ready(function($) {
	"use strict";	
	/* ---------------------------------------------------------------------- */
	/*	PrettyPhoto Modal Box Script
	/* ---------------------------------------------------------------------- */
	
	if($('.hive-gallery-pretty').length){
		$(".hive-gallery-pretty:first a[data-gal^='prettyphoto']").prettyPhoto({
			animation_speed: 'normal',
			slideshow: 10000,
			autoplay_slideshow: true
		});
		$(".hive-gallery-pretty:gt(0) a[data-gal^='prettyphoto']").prettyPhoto({
			animation_speed: 'fast',
			slideshow: 10000,
			hideflash: true
		});
		
	}
		$("a[data-rel^='prettyphoto']").prettyPhoto({
			animation_speed: 'fast',
			slideshow: 10000,
			hideflash: true
		});
		
		let mainNavLinks = document.querySelectorAll("nav ul li a");
		let mainSections = document.querySelectorAll("hive-pagesection");
		
		let lastId;
		let cur = [];
		
		// This should probably be throttled.
		// Especially because it triggers during smooth scrolling.
		// https://lodash.com/docs/4.17.10#throttle
		// You could do like...
		// window.addEventListener("scroll", () => {
		//    _.throttle(doThatStuff, 100);
		// });
		// Only not doing it here to keep this Pen dependency-free.
		
		window.addEventListener("scroll", event => {
		  let fromTop = window.scrollY;
		
		  mainNavLinks.forEach(link => {
			let section = document.querySelector(link.hash);
		
			if (
			  section.offsetTop <= fromTop &&
			  section.offsetTop + section.offsetHeight > fromTop
			) {
			  link.classList.add("current");
			} else {
			  link.classList.remove("current");
			}
		  });
		});
});	


	