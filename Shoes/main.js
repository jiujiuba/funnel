// Variables
// Cart Variables
let cartCounter = 0
	cartCounterBlock = $('.nav__items_cart .counter')
	cartProductPriceContainer = $('.JS__productPriceContainerInCartModal')
	productPriceText = $('.header__price_current').eq(0).text()

// Color Changer Variables
let colorChangerCurrentText = $('.UI-colorChanger__item.active').eq(0).text()

function cartCounterHandler(count = 0) {
	cartCounter = count
	cartCounterBlock.text(count);
	if ( cartCounter <= 0 ) {
		cartCounterBlock.parent().removeClass('openned')
	} else {
		cartCounterBlock.parent().addClass('openned')
		$('.JS__productContainerInCartModal').addClass('openned')
		cartProductPriceContainer.text(productPriceText)
	}
}

$(document).ready(function(){

	// Modals
	// Modal - Open Menu
	$(document).on('click', '.nav__items_menu', function(){
		$('.modal--all .modal__content').hide()
		$('.modal--all .modal__content.modal__content--menu').show()
		$('.modal--all').addClass('openned');
	})
	// Modal - Open Track Order
	$(document).on('click', '.JS__openTrackOrder', function(){
		$('.modal--all .modal__content').hide()
		$('.modal--all .modal__content.modal__content--trackOrder').show()
		$('.modal--all').addClass('openned');
	})
	// Modal - Open Contact
	$(document).on('click', '.JS__openContactModal', function(){
		$('.modal--all .modal__content').hide()
		$('.modal--all .modal__content.modal__content--contact').show()
		$('.modal--all').addClass('openned');
	})
	// Modal - Open Cart
	$(document).on('click', '.JS__openCartModal, .JS__addToCart', function(){
		$('.modal--all .modal__content').hide()
		$('.modal').removeClass('openned');
		$('.modal--cart').addClass('openned');
		if ( $(this).hasClass('JS__addToCart') ) {
			cartCounterHandler(1)
		}
	})
	// Modal - Close Modals
	$(document).on('click', '.nav__items_close, .JS__closeModals', function(){
		$('.modal').removeClass('openned');
		$('.modal--all .modal__content').hide()
	})
	

	// Header
	// Header - Slider
	const headerSlider = new Swiper('.swiper', {
		loop: true,
		// autoHeight: true,
		pagination: {
		  el: '.swiper .swiper-pagination',
		},
	});
	// Header - Hidden Text Init
	$(document).on('click', '.UI-hiddenText__header', function(){
		let headerBlock = $(this)
			parentBlock =  headerBlock.parent()
			contentBlock = parentBlock.find('.UI-hiddenText__content')

		if ( parentBlock.hasClass('openned') ) {
			parentBlock.removeClass('openned')
			contentBlock.slideUp(300)
		} else {
			$('.UI-hiddenText').removeClass('openned');
			$('.UI-hiddenText__content').slideUp(300);

			parentBlock.addClass('openned')
			contentBlock.slideDown(300)
		}
	})

	// Footer 
	// Footer - Read More
	$(document).on('click', '.footer__hiddenText_button', function(){
		if ( $(this).hasClass('openned') ) {
			$(this).removeClass('openned')
			$('.footer__hiddenText_bottom').slideUp(300)
			$(this).text('Read more')
		} else {
			$(this).addClass('openned')
			$('.footer__hiddenText_bottom').slideDown(300)
			$(this).text('Read less')
		}
	})

	// Color Changer
	$(document).on('click', '.UI-colorChanger__item', function(){
		let colorButtonBlockIndex = $(this).index()
			colorChangerCurrentText = $(this).text()
		$('.JS__colorContainer').text(colorChangerCurrentText)
		$('.UI-colorChanger__item').removeClass('active');
		$('.UI-colorChanger').each(function(){
			$(this).find('.UI-colorChanger__item').eq(colorButtonBlockIndex - 1).addClass('active')
		})
	})

	// Advantages - Smooth Scroll
	$(document).on('click', '.advantages__cards_item' , function(){
		let href = $(this).attr('href')
		$('html, body').animate({
			scrollTop: $(href).offset().top
	  	}, 500)
	})

	// Timer
	var hours = 0;
	var minutes = 37;
	var seconds = 0;
	var countdownDate = new Date();
	countdownDate.setHours(countdownDate.getHours() + hours);
	countdownDate.setMinutes(countdownDate.getMinutes() + minutes);
	countdownDate.setSeconds(countdownDate.getSeconds() + seconds);
	
	var x = setInterval(function() {
	  var now = new Date().getTime();
	  
	  var distance = countdownDate - now;
	  
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	  
	  $('.UI-timer__clock').text(`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`)
	  
	  if (distance < 0) {
		 clearInterval(x);
		 $('.UI-timer__clock').text(`00:00:00`)
	  }
	}, 1000);

	// $('.header__colors_items1 img').on('click', function() {
	// 	$('.header__colors_items1').css('display', 'none');
	// 	$('.header__colors_items2').css('display', 'flex');
	// 	$('.header__slider1').css('display', 'none');
	// 	$('.header__slider2').css('display', 'block');
	// })
	// $('.header__colors_items2 img').on('click', function() {
	// 	$('.header__colors_items2').css('display', 'none');
	// 	$('.header__colors_items1').css('display', 'flex');
	// 	$('.header__slider2').css('display', 'none');
	// 	$('.header__slider1').css('display', 'block');
	// })
	$('.header__size_items .size').on('click', function() {
		$('.header__size_items .size').removeClass('active');
		$(this).addClass('active');
	})
});