// This is what changes body from hidden
(function($) {
  $(document.body).fadeIn(1200);
})(jQuery);

$(document).ready(function() {	
		beginBrowseTime = new Date();
    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
		
		$("#tumblr_controls").attr("style","display:none");
				
		$("#notification .icon-remove").click(function () {
			hide_notification_box();
		});
		
		if (!$.cookie('is-analytic')) {
			postAnalytic();

			socialLinkAnalytic("facebook");
			socialLinkAnalytic("linkedin");
			socialLinkAnalytic("twitter");
			socialLinkAnalytic("github");
		}
		
		nearBottomPageCallback(function() {
			if (!$.cookie('hide-notification-cookie')) {
				$("#notification").animate({top:"0px"},{duration: 400,easing: 'jswing'});
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
		else if (isPage("work")) set_menu_active("work");
		else if (isPage("blogi")) set_menu_active("blogi");
		else if (isPage("ask")) {
			set_menu_active("contact");
			appendDetailContactPage();
		} 
		else if (isUrlContainKeyword("/tagged/")) {
			set_menu_active("_blogpage");
			set_page_active("blogpage");
		}
		else if (isUrlContainKeyword("/post/")) {
			nearBottomPageCallback(function() {
				$(".social-box").animate({opacity:"1"},{duration: 1000,easing: 'jswing'});
			},50);
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
		function nearBottomPageCallback(callback,distance,timeout) {
			distance = distance || 150;
			timeout = timeout || 3000;
			$(window).load(function(){
				if ($(window).height() == $(document).height()) {
					setTimeout(function(){callback();}, timeout);
				} else {
					$(window).scroll(function(){
						if (($(window).scrollTop() + $(window).height() >= $(document).height() - distance)) {
							callback();
						}
					});
				}
			});
		}
		
		$(window).bind('beforeunload', function(){
			endBrowseTime = new Date();
			console.log(beginBrowseTime);
			console.log(endBrowseTime);
		  //return 'Are you sure you want to leave?';
		});
		
		$('.p_wrapper').hover(function(){
			$(this).children('.description').stop().animate({bottom:"0"},{duration: 400,easing: 'jswing'});
			},function(){
				var des_height = "-" + $(this).children('.description').css("height");
				$(this).children('.description').stop().animate({bottom:des_height},{duration: 200,easing: 'jswing'});
		});
		
		
});


window.socialLinkAnalytic = function(link) {
	$(".icon-"+link+"-sign").parent().each(function(){
		$(this).click(function() {
			postAnalytic(link + " clicked");
		});
	});
}

window.analyticUrl = "http://radiant-shore-8948.herokuapp.com";
//window.analyticUrl = "http://localhost:3000";
window.postAnalytic = function (behaviour)  {
	behaviour = behaviour || "";
	$.getJSON("http://jsonip.appspot.com?callback=?",function (data) {
		console.log(data.ip);
		$.post(window.analyticUrl + "/requests.json", {request:{ ip: data.ip, url: window.location.href, behaviour: behaviour, browser: navigator.userAgent, title: $("html head title").html()}} );
	})
}

window.turnOffAnalytic = function () {
	$.cookie('is-analytic', true, { expires: 30 });
}



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