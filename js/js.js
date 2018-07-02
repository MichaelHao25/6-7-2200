require.config({
	paths: {
		'jquery': "jquery",
		//jquery默认加载
		"js": "js",
		'swiper': './swiper.min'
	}
})



define(['jquery', 'swiper'], function ($, swiper) {
	$('.main-my-commission .right-content .content .cash-out').on('click', function () {
		$('.main-my-commission .right-content .content .cash-out-layout').fadeIn();
	})
	$('.main-my-commission .right-content .content .cash-out-layout .container .title .close').on('click', function () {
		$('.main-my-commission .right-content .content .cash-out-layout').hide();
	})
	$('.pay-function>div').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active')
	})
	$('.main-my-commission .right-content .child-page-container-my-address .add-address').on('click', function () {
		$('.add-address-layout').fadeIn();
	})

	$('.edit-address-layout .close,.add-address-layout .close,.delete-address-layout .close,.public-layout-invite .close').on('click', function () {
		$(this).parents('.public-layout').hide();
	})


	$('.main-my-commission .right-content .child-page-container-my-address .table table a.edit').on('click', function () {
		$('.edit-address-layout').fadeIn();
	})
	$('.main-my-commission .right-content .child-page-container-my-address .table table a.del').on('click', function () {
		$('.delete-address-layout').fadeIn();
	})

	$('.public-form .public-button.public-button-small.ongoing').on('click', function () {
		$('.main-my-commission .right-content .child-page-container-invite .public-layout-invite').fadeIn();
	})

	var mySwiper = new swiper('.scroll .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		prevButton: '.scroll .swiper-button-prev',
		nextButton: '.scroll .swiper-button-next',
	})
})