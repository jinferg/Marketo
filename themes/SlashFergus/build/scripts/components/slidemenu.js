'use strict';
// Create an immediately invoked functional expression to wrap our code
;(function() {

	// Constructor Method
	window.Slidemenu = function() {

		// Define Constructor
		let defaults = {
			element: '.slidemenu',
			toggleClass: '.js-hamburger',
			closeClass: '.slidemenu\\/close'
		}

		// Override defaults
		if (arguments[0] && typeof arguments[0] === 'object') {
			this.options = extendDefaults(defaults, arguments[0]);
		} else {
			this.options = defaults
		}

		let slidemenuClass = this.options.element
		let toggleClass = this.options.toggleClass
		let closeClass = this.options.closeClass
		let overlayClass = '.slidemenu\\/overlay'

    let slidemenu = document.querySelector(slidemenuClass)
		let allToggle = document.querySelectorAll(toggleClass)
		let close = slidemenu.querySelector(closeClass)
		let overlay = slidemenu.querySelector(overlayClass)
		let activeClass = 'is-active'

		/* Initialize each component */
    for (let i = 0; i < allToggle.length; i++) {
			let toggle = allToggle[i]

			/* add click event */
			toggle.addEventListener('click', function(e) {
				e.preventDefault()
				activate(slidemenu)
			})
		}

		close.addEventListener('click', function(e) {
			e.preventDefault()
			activate(slidemenu)
		})

		overlay.addEventListener('click', function(e) {
			e.preventDefault()
			activate(slidemenu)
		})


		/* Activates the chosen accordion and deactivates the rest */
		function activate(slidemenu) {
			slidemenu.classList.toggle(activeClass)
		}
	}


	// Public Methods


	// Private Methods
	function extendDefaults(source, properties) {
		let property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}
		return source;
	}

}());
