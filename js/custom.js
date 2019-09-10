$(function(){

$('.tabs a').click(function(){
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide');
	$(this).parent().addClass('active');
	return false
});
$('.banner-slider, .testimonial-slider').slick({
	arrows: false,
	dots: true,
});
$('.portfolio-slider').slick({
	dots: true,
	appendArrows: '.portfolio-slider__buttons',
	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
})
});

function initMap() {
	var coordinates = {lat: -37.806006, lng: 144.961291},
	markerImg = 'img/marker.png',

	map = new google.maps.Map(document.getElementById('map'), {
		center: coordinates,
		zoom: 16,
		disableDefaultUI: true,
		scrollwheel: false,

	});

	marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: markerImg,
	});
}

google.maps.event.addDomListener(window, 'load', initMap);
