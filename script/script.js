console.log('working')

$('.logoOne, .logoTwo, .logoThree, .logoFour').css('cursor', 'pointer');
$('.keyArt1, .keyArt2, .keyArt3, .keyArt4, .keyArt5, .keyArt6, .keyArt7, .keyArt8, .keyArt9')
.css('cursor', 'pointer');

$('.logo1, .logo2, .logo3, .transistor').css('cursor', 'pointer');

$('.vecOne, .vecTwo, .vecThree, .vecFour, .vecFive, .vecSix, .vecSeven, .vecEight')
.css('cursor', 'pointer');



//Header items slide

$(document).ready(function () {
    $('.linkBar').slideDown(500).css('display','flex');
});

$('.intro').hide();


//Intro slide

$(document).ready(function () {
	setTimeout(function(){
		$('.intro').show('slide', {direction: 'left'}, 1000);
	},500);	
});

//LightBox for art direction

$('.audibleLogo').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/audible/audible1.jpg',
    			'images/audible/audible2.jpg',
    			'images/audible/audible3.jpg',
    			'https://player.vimeo.com/video/95600745'],
    	captions:['*Featured in Archive Magazine']
	});
});

$('.cafLogo').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/caf/boat-tours.jpg',
    			'images/caf/bike-tours.jpg',
    			'images/caf/happy-hour-tours.jpg']
	});
});

$('.virginLogo').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/virgin-mobile/virgin-mobile1.jpg',
    			'images/virgin-mobile/virgin-mobile2.jpg']
	});
});

$('.hwdLogo').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/hollywood-casino/hwd-1.jpg',
    			'images/hollywood-casino/hwd-2.jpg', 
    			'images/hollywood-casino/hwd-3.jpg', 
    			'images/hollywood-casino/hwd-4.jpg', 
    			'images/hollywood-casino/hwd-5.jpg', 
    			'images/hollywood-casino/hwd-6.jpg', 
    			'images/hollywood-casino/hwd-7.jpg' ]
	});
});

// Lighbox for design

$('.keyArt1').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/all-is-lost.jpg']
	});
});

$('.keyArt2').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/thin-red-line.jpg']
	});
});

$('.keyArt3').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/mad-men.jpg']
	});
});

$('.keyArt4').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/layer-cake.jpg']
	});
});

$('.keyArt5').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/american-psycho.jpg']
	});
});

$('.keyArt6').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/friday-the-13th.jpg']
	});
});

$('.keyArt7').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/leftovers.jpg']
	});
});

$('.keyArt8').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/collateral.jpg']
	});
});

$('.keyArt9').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/posters/heat.jpg']
	});
});

// Logos

$('.logo1').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/logos/decibel.jpg']
	});
});

$('.logo2').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/logos/milk.jpg']
	});
});

$('.logo3').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/logos/transistor.jpg']
	});
});

$('.transistor').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/logos/transistor-poster.jpg']
	});
});

$('.vecOne').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/illustrations/vec-1.jpg']
	});
});

$('.vecTwo').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/illustrations/vec-2.jpg']
	});
});

$('.vecThree').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/illustrations/vec-3.jpg']
	});
});

$('.vecFour').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/illustrations/vec-4.jpg']
	});
});

$('.vecFive').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/illustrations/vec-5.jpg']
	});
});

$('.vecSix').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/illustrations/vec-6.jpg']
	});
});

$('.vecSeven').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/illustrations/vec-7.jpg']
	});
});

$('.vecEight').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/illustrations/vec-8.jpg']
	});
});








































