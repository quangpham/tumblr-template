// This is what changes body from hidden
(function($) {
  $(document.body).fadeIn(1200);
})(jQuery);

$(document).ready(function() {	
    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
		
		$("#tumblr_controls").attr("style","display:none");
				
		$("#noti-wrapper .close-box .icon-remove").click(function () {
			hide_notification_box();
		});
		
		nearBottomPageCallback(150, function() {
			if (!$.cookie('hide-notification-cookie')) {
				$("#notification").show().animate({height:"40px"},{duration: 500,easing: 'easeInOutBack'});
			}
		});
		
		// Check if page is homepage?
		if (isPage("")) {
			set_menu_active("_indexpage");
			set_page_active("indexpage");
		}
		else if (isPage("about")) {
			set_menu_active("about");
		}
		else if (isPage("resume")) set_menu_active("resume");
		else if (isPage("portfolio")) set_menu_active("portfolio");
		else if (isPage("resume")) set_menu_active("resume");
		else if (isPage("ask")) {
			set_menu_active("contact");
			appendDetailContactPage();
		} 
		else if (isUrlContainKeyword("/tagged/")) {
			set_menu_active("_blogpage");
			set_page_active("blogpage");
		}
		else if (isUrlContainKeyword("/post/")) {
			$('.social-box').show();
			nearBottomPageCallback(100, function() {
				if (!$.cookie('hide-notification-cookie')) {
					$("#notification").show().animate({height:"40px"},{duration: 500,easing: 'easeInOutBack'});
				}
			});
		}
		
		
		// Function
		function set_page_active(page) {
			$("."+page).show();
		}
		function set_menu_active(item) {
			$("#main-nav li.active").removeClass("active");
			$("#main-nav li."+item).addClass("active");
		}
		function appendDetailContactPage(){
			$("#blog-posts h2").append('<div id="contact-detail"><p>You can find me on \
			<a target="_blank" href="https://www.facebook.com/phamxq" ><i class="icon-facebook-sign" > <b>Facebook</b></i></a>, \
			<a target="_blank" href="https://twitter.com/phamaa" ><i class="icon-twitter-sign"> <b>Twitter</b></i></a> \
			or <a target="_blank" href="http://fi.linkedin.com/pub/pham-quang/50/316/72" ><i class="icon-linkedin-sign icon-large" > <b>Linkedin</b></i></a>. </br>\
			Call me +358 443 460 162 or shoot me an email at me@quangpham.com. <br><br></p>\
			<p>Quick question? Drop me a line bellow<br>Your question: </p></div>');
		}
		function isPage(page) {
			if (window.location.href === "http://quangpham.com/"+page) return true;
			else if (window.location.href === "http://phamquang.tumblr.com/"+page) return true;
			return false;
		}
		function isUrlContainKeyword(keyword) {
			return (window.location.href.indexOf(keyword) !=-1) ? true : false;
		}
		function nearBottomPageCallback(distance,callback) {
			$(window).load(function(){
				if ($(window).height() == $(document).height()) {
					callback();
					console.log("Call here " + $(window).height() + " - " + $(document).height());
					return;
				} else {
					$(window).scroll(function(){
						if (($(window).scrollTop() + $(window).height() >= $(document).height() - distance)) {
							callback();
						}
					});
				}
				
			});
		}
		/*
		$(function() {
		$(window).scroll(function(){
		if ($('body').height() <= ($(window).height() + $(window).scrollTop()))
		$('#slidebox').animate({'bottom':'0px'},300);
		});*/
});

window.hide_notification_box = function () {
	$('#notification').hide();
	$.cookie('hide-notification-cookie', true, { expires: 3 });
}

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-40478094-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();