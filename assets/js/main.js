// This is what changes body from hidden
(function($) {
  $(document.body).fadeIn(1200);
})(jQuery);

$(document).ready(function() {
    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
		var current_path = window.location.href;
		console.log(current_path);
		
		if (current_path === "http://quangpham.com/") set_menu_active("home");
		else if (current_path === "http://quangpham.com/about") set_menu_active("about");
		else if (current_path === "http://quangpham.com/portfolio") set_menu_active("portfolio");
		else if (current_path === "http://quangpham.com/resume") set_menu_active("resume");
		else if (current_path === "http://quangpham.com/contact") set_menu_active("contact");
		
		function set_menu_active(item) {
			$("#main-nav li.active").removeClass("active");
			$("#main-nav li."+item).addClass("active");
		}
});