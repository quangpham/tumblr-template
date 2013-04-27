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
		
		var current_path = window.location.href;
		console.log(current_path);
		
		if (current_path === "http://quangpham.com/") set_menu_active("home");
		else if (current_path === "http://quangpham.com/about") set_menu_active("about");
		else if (current_path === "http://quangpham.com/resume") set_menu_active("resume");
		else if (current_path === "http://quangpham.com/portfolio") set_menu_active("portfolio");
		else if (current_path === "http://quangpham.com/resume") set_menu_active("resume");
		else if (current_path === "http://quangpham.com/ask") {
			set_menu_active("contact");
			$("#blog-posts h2").append('<div id="contact-detail"><p>You can find me on \
			<a target="_blank" href="https://www.facebook.com/phamxq" ><i class="icon-facebook-sign" > <b>Facebook</b></i></a>, \
			<a target="_blank" href="https://twitter.com/phamaa" ><i class="icon-twitter-sign"> <b>Twitter</b></i></a> \
			or <a target="_blank" href="http://fi.linkedin.com/pub/pham-quang/50/316/72" ><i class="icon-linkedin-sign icon-large" > <b>Linkedin</b></i></a>. </br>\
			Call me +358 443 460 162 or shoot me an email at me@quangpham.com. <br><br></p>\
			<p>Quick question? Drop me a line bellow<br>Your question: </p></div>');
		}
		
		function set_menu_active(item) {
			$("#main-nav li.active").removeClass("active");
			$("#main-nav li."+item).addClass("active");
		}
});