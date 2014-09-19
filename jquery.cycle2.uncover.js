(function($){
	"use strict";
	
	$.fn.cycle.transitions.uncover = {
	    transition: function( opts, currEl, nextEl, fwd, callback ) {
	        $( nextEl ).css({
	            display: 'block',
	            visibility: 'visible'
	        });
	        var width = opts.container.width();
	        var height = opts.container.height();
	        var speed = opts.speed;
	        var element = currEl;

	        opts = opts.API.getSlideOpts( opts.currSlide );
	        var props1 = { left: fwd ? -width : width, top: 0 };
	        if (opts.direction == 'up') {
	        	props1 = { left: 0, top: fwd ? -height : height };
	        }
	        else if (opts.direction == 'right') {
	        	props1 = { left: fwd ? width : -width, top: 0 };
	        }
	        else if (opts.direction == 'down') {
	        	props1 = { left: 0, top: fwd ? height : -height };
	        }
	        var props2 = { left: 0, top: 0 };

	        $(element)
	            .animate( props1, speed, opts.easing, callback )
	            .queue( 'fx', $.proxy(reIndex, this))
	            .animate( props2, 0, opts.easing, callback );

	        function reIndex(nextFn) {
	            this.stack(opts, currEl, nextEl, fwd);
	            nextFn();
	        }
	    },

	    stack: function( opts, currEl, nextEl, fwd ) {
	        var i, z;

	        if (fwd) {
	            opts.API.stackSlides( nextEl, currEl, fwd );
	            $(currEl).css( 'zIndex', 1 );
	        }
	        else {
	            z = 1;
	            for (i = opts.nextSlide - 1; i >= 0; i--) {
	                $(opts.slides[i]).css('zIndex', z++);
	            }
	            for (i = opts.slideCount - 1; i > opts.nextSlide; i--) {
	                $(opts.slides[i]).css('zIndex', z++);
	            }
	            $(nextEl).css( 'zIndex', opts.maxZ );
	            $(currEl).css( 'zIndex', opts.maxZ - 1 );
	        }
	    }

	}
})(jQuery);