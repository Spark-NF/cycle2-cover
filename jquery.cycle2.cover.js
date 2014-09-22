(function($){
	"use strict";
	
	$.fn.cycle.transitions.cover = {
	    transition: function( opts, currEl, nextEl, fwd, callback ) {
	    	var uncover = false;
	        if ((fwd && opts.coverEnterAnimation == 'uncover')
	        	|| (!fwd && opts.coverExitAnimation == 'uncover')) {
	        	uncover = true;
	        }

	        $( nextEl ).css({
	            display: 'block',
	            visibility: 'visible'
	        });
	        opts.container.css('overflow', 'hidden');
	        var width = opts.container.width();
	        var height = opts.container.height();
	        var speed = opts.speed;
	        var element = uncover ? currEl : nextEl;

	        opts = opts.API.getSlideOpts( uncover ? opts.currSlide : opts.nextSlide );
	        var props1 = { left: -width, top: 0 };
	        if (fwd) {
		        if (opts.coverEnterPosition == 'top') {
		        	props1 = { left: 0, top: -height };
		        }
		        else if (opts.coverEnterPosition == 'right') {
		        	props1 = { left: width, top: 0 };
		        }
		        else if (opts.coverEnterPosition == 'bottom') {
		        	props1 = { left: 0, top: height };
		        }
	        }
	        else {
		        props1 = { left: width, top: 0 };
		        if (opts.coverExitPosition == 'top') {
		        	props1 = { left: 0, top: -height };
		        }
		        else if (opts.coverExitPosition == 'left') {
		        	props1 = { left: -width, top: 0 };
		        }
		        else if (opts.coverExitPosition == 'bottom') {
		        	props1 = { left: 0, top: height };
		        }
	        }
	        var props2 = { left: 0, top: 0 };

	        if (uncover) {
		        $(element)
		            .animate(props1, speed, opts.easing, callback)
		            .queue('fx', $.proxy(reIndex, this))
		            .animate(props2, 0, opts.easing, callback);
	        }
	        else {
		        $(element)
		            .css(props1)
		            .queue('fx', $.proxy(reIndex, this))
		            .animate(props2, speed, opts.easing, callback);
	        }

	        function reIndex(nextFn) {
	            this.stack(opts, currEl, nextEl, fwd);
	            nextFn();
	        }
	    },

	    stack: function( opts, currEl, nextEl, fwd ) {
	        var i, z;

	        var f = fwd;
	        if ((fwd && opts.coverEnterAnimation == 'uncover')
	        	|| (!fwd && opts.coverExitAnimation == 'uncover')) {
	        	f = !fwd;
	        }

	        if (f) {
	            z = 1;
	            for (i = opts.nextSlide - 1; i >= 0; i--) {
	                $(opts.slides[i]).css('zIndex', z++);
	            }
	            for (i = opts.slideCount - 1; i > opts.nextSlide; i--) {
	                $(opts.slides[i]).css('zIndex', z++);
	            }
	            $(nextEl).css('zIndex', opts.maxZ);
	            $(currEl).css('zIndex', opts.maxZ - 1);
	        }
	        else {
	            opts.API.stackSlides( nextEl, currEl, fwd );
	            $(currEl).css('zIndex', 1);
	        }
	    }

	}
})(jQuery);