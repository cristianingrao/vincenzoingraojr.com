$(document).ready(function() {
	'use strict';
	header();
});
function header() {
	$('.m-menu').on('click', function() {
		if (!$('.nav').hasClass('visible')) {
			toggle_nav(true);
		} else {
			toggle_nav(false);
		}
	});

	$('.nav .menu li:has(ul)').children('ul').hide();
	$('.nav .menu li:has(ul)').find('a').on('click', function() {
		var parent = $(this).parent(),
			submenu = $(this).next('ul');

		if (submenu.is(':visible')) {
			parent.find('ul').slideUp(250);
		}

		if (submenu.is(':hidden')) {
			parent.siblings().find('ul').stop().slideUp(250);
			submenu.css('height', 'auto').stop().slideDown(250);
		}

		if (parent.children('ul').length == 0) {
			return true;
		} else {
			return false;
		}
	});
}
function toggle_nav(bool) {
	if (bool == true) {
		toggle_search(false);
		$('.menu-button').addClass('clicked');
        $('.m-menu').addClass('visible');
	} else {
		$('.menu-button').removeClass('clicked');
		$('.m-menu').removeClass('visible');
	}
}