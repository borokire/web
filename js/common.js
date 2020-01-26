// JavaScript Document

function writeHeader(){

	$.ajax({
		url: "header.html",
		cache: false,
		async: false,
		success: function(html){
			document.write(html);	
		}
	});

}

function writeFooter(){

	$.ajax({
		url: "footer.html",
		cache: false,
		async: false,
		success: function(html){
			document.write(html);	
		}
	});
}

$(window).on('load resize',function(){
	var w = $(window).height();
	var x = $('body').height();
	if (w > x) {
		$('#page-footer').css({
			position: 'absolute',
			bottom: '0px'
		});
	} else {
		$('#page-footer').css({
			position: 'relative'
		});
	}
});

//Index menu
$(function() {
	$('#Blog')
		.mouseover(function() {
			$('#Blog .box-content-detail').addClass('showUp').css('background-color', 'rgba(50,177,108,0.90)');
	})
		.mouseout(function() {
			$('#Blog .box-content-detail').removeClass('showUp').css('background-color', '');
	});
	$('#Works')
		.mouseover(function() {
			$('#Works .box-content-detail').addClass('showUp').css('background-color', 'rgba(236,123,74,0.90)');
	})
		.mouseout(function() {
			$('#Works .box-content-detail').removeClass('showUp').css('background-color', '');
	});
	$('#Game')
		.mouseover(function() {
			$('#Game .box-content-detail').addClass('showUp').css('background-color', 'rgba(0,160,233,0.90)');
	})
		.mouseout(function() {
			$('#Game .box-content-detail').removeClass('showUp').css('background-color', '');
	});
	$('#About')
		.mouseover(function() {
			$('#About .box-content-detail').addClass('showUp').css('background-color', 'rgba(234,104,162,0.90)');
	})
		.mouseout(function() {
			$('#About .box-content-detail').removeClass('showUp').css('background-color', '');
	});
	$('#Sources')
		.mouseover(function() {
			$('#Sources .box-content-detail').addClass('showUp').css('background-color', 'rgba(254,213,72,0.90)');
	})
		.mouseout(function() {
			$('#Sources .box-content-detail').removeClass('showUp').css('background-color', '');
	});
});