console.log('working')

//Header items slide
$(document).ready(function () {
    $('.linkBar').slideDown(500).css('display','flex');
});

$('.intro').hide();


//Intro slide
$(document).ready(function () {
	setTimeout(function(){
		$('.intro').show('slide', {direction: 'left'}, 1000);
	}, 500)
	
});

//LightBox for audible.com
$('.audibleLogo').click(function(){
	$.SimpleLightbox.open({
    	items: ['images/audible/audible1.jpg','images/audible/audible2.jpg','images/audible/audible3.jpg']
	});
});

