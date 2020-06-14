/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

	/*------------------
	    Preloader
	--------------------*/
	$(window).on('load', function () {
		$(".loader").fadeOut();
		$("#preloder").delay(200).fadeOut("slow");

		/*------------------
		    Gallery filter
		--------------------*/
		$('.featured__controls li').on('click', function () {
			$('.featured__controls li').removeClass('active');
			$(this).addClass('active');
		});
		if ($('.featured__filter').length > 0) {
			var containerEl = document.querySelector('.featured__filter');
			var mixer = mixitup(containerEl);
		}
	});

	/*------------------
	    Background Set
	--------------------*/
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	//Humberger Menu
	$(".humberger__open").on('click', function () {
		$(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
		$(".humberger__menu__overlay").addClass("active");
		$("body").addClass("over_hid");
	});

	$(".humberger__menu__overlay").on('click', function () {
		$(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
		$(".humberger__menu__overlay").removeClass("active");
		$("body").removeClass("over_hid");
	});

	/*------------------
		Navigation
	--------------------*/
	$(".mobile-menu").slicknav({
		prependTo: '#mobile-menu-wrap',
		allowParentLinks: true
	});

	/*-----------------------
	    Categories Slider
	------------------------*/
	$(".categories__slider").owlCarousel({
		loop: true,
		margin: 0,
		items: 4,
		dots: false,
		nav: true,
		navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
		responsive: {

			0: {
				items: 1,
			},

			480: {
				items: 2,
			},

			768: {
				items: 3,
			},

			992: {
				items: 4,
			}
		}
	});


	$('.hero__categories__all').on('click', function () {
		$('.hero__categories ul').slideToggle(400);
	});

	/*--------------------------
	    Latest Product Slider
	----------------------------*/
	$(".latest-product__slider").owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		dots: false,
		nav: true,
		navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true
	});

	/*-----------------------------
	    Product Discount Slider
	-------------------------------*/
	$(".product__discount__slider").owlCarousel({
		loop: true,
		margin: 0,
		items: 3,
		dots: true,
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
		responsive: {

			320: {
				items: 1,
			},

			480: {
				items: 2,
			},

			768: {
				items: 2,
			},

			992: {
				items: 3,
			}
		}
	});

	/*---------------------------------
	    Product Details Pic Slider
	----------------------------------*/
	$(".product__details__pic__slider").owlCarousel({
		loop: true,
		margin: 20,
		items: 4,
		dots: true,
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true
	});

	/*-----------------------
		Price Range Slider
	------------------------ */
	var rangeSlider = $(".price-range"),
		minamount = $("#minamount"),
		maxamount = $("#maxamount"),
		minPrice = rangeSlider.data('min'),
		maxPrice = rangeSlider.data('max');
	rangeSlider.slider({
		range: true,
		min: minPrice,
		max: maxPrice,
		values: [minPrice, maxPrice],
		slide: function (event, ui) {
			minamount.val('$' + ui.values[0]);
			maxamount.val('$' + ui.values[1]);
		}
	});
	minamount.val('$' + rangeSlider.slider("values", 0));
	maxamount.val('$' + rangeSlider.slider("values", 1));

	/*--------------------------
	    Select
	----------------------------*/
	$("select").niceSelect();

	/*------------------
		Single Product
	--------------------*/
	$('.product__details__pic__slider img').on('click', function () {

		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product__details__pic__item--large').attr('src');
		if (imgurl != bigImg) {
			$('.product__details__pic__item--large').attr({
				src: imgurl
			});
		}
	});

	/*-------------------
		Quantity change
	--------------------- */
	var proQty = $('.pro-qty');
	proQty.prepend('<span class="dec qtybtn">-</span>');
	proQty.append('<span class="inc qtybtn">+</span>');
	proQty.on('click', '.qtybtn', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});


	/* ---------
	    Trands slider
	-----------*/

	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var slidesPerPage = 4; //globaly define number of elements per page
	var syncedSecondary = true;

	sync1.owlCarousel({
		items: 1,
		slideSpeed: 2000,
		nav: true,
		autoplay: true,
		dots: false,
		loop: true,
		responsiveRefreshRate: 200,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
	}).on('changed.owl.carousel', syncPosition);

	sync2
		.on('initialized.owl.carousel', function () {
			sync2.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
			margin: 10,
			items: slidesPerPage,
			dots: false,
			nav: true,
			smartSpeed: 200,
			slideSpeed: 500,
			slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
			responsiveRefreshRate: 100,
			navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
			responsive: {
				0: {
					items: 2
				},
				640: {
					items: 3
				},
				1000: {
					items: 5
				}
			}
		}).on('changed.owl.carousel', syncPosition2);

	function syncPosition(el) {
		//if you set loop to false, you have to restore this next line
		//var current = el.item.index;

		//if you disable loop you have to comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - (el.item.count / 2) - .5);

		if (current < 0) {
			current = count;
		}
		if (current > count) {
			current = 0;
		}

		//end block

		sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		var onscreen = sync2.find('.owl-item.active').length - 1;
		var start = sync2.find('.owl-item.active').first().index();
		var end = sync2.find('.owl-item.active').last().index();

		if (current > end) {
			sync2.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
			sync2.data('owl.carousel').to(current - onscreen, 100, true);
		}
	}

	function syncPosition2(el) {
		if (syncedSecondary) {
			var number = el.item.index;
			sync1.data('owl.carousel').to(number, 100, true);
		}
	}

	sync2.on("click", ".owl-item", function (e) {
		e.preventDefault();
		var number = $(this).index();
		sync1.data('owl.carousel').to(number, 300, true);
	});


	$(document).on('click', '.main-nav__toggle a', function (e) {
		e.preventDefault();
		$('.main-nav__item.__toggleable').slideToggle('fast');
	});

})(jQuery);