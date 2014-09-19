(function($){
	"use strict";
	
	$.fn.cycle.transitions.cover = {
	    transition: function( opts, currEl, nextEl, fwd, callback ) {
	        $( nextEl ).css({
	            display: 'block',
	            visibility: 'visible'
	        });
	        var width = opts.container.width();
	        var speed = opts.speed;
	        var element = nextEl;

	        opts = opts.API.getSlideOpts( opts.nextSlide );
	        var props1 = { left: fwd ? -width : width };
	        var props2 = { left: 0 };

	        $(element)
	            .css( props1 )
	            .queue( 'fx', $.proxy(reIndex, this))
	            .animate( props2, speed, opts.easing, callback );

	        function reIndex(nextFn) {
	            this.stack(opts, currEl, nextEl, fwd);
	            nextFn();
	        }
	    },

	    stack: function( opts, currEl, nextEl, fwd ) {
	        var i, z;

	        if (fwd) {
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
	        else {
	            opts.API.stackSlides( nextEl, currEl, fwd );
	            // force curr slide to bottom of the stack
	            $(currEl).css( 'zIndex', 1 );
	        }
	    }

	}
})(jQuery);