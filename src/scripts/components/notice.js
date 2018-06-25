'use strict';
// Create an immediately invoked functional expression to wrap our code
;(function() {

	// Constructor Method
	window.Notice = function() {

		// Define Constructor
		let defaults = {
			element: '.notice'
		}

		// Override defaults
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		} else {
			this.options = defaults
		}


		let noticeClass = this.options.element
		let toggleClass = 'notice\\/close'
    let allNotice = document.querySelectorAll(noticeClass)
		let allToggle = document.querySelectorAll('.' + toggleClass)
		let activeClass = 'is-active'


		/* Initialize each component */
    for (let i = 0; i < allNotice.length; i++) {
			let toggle = allToggle[i]

			/* add click event */
			for (let i = 0; i < allNotice.length; i++) {
				toggle.addEventListener('click', function(e) {
					e.preventDefault()
					hide(this.parentNode)
				})
			}
		}


		/* Activates the chosen accordion and deactivates the rest */
		function hide(targetParent) {
			targetParent.style.opacity = '0'
			setTimeout(function(){
				targetParent.classList.remove(activeClass)
			}, 210)

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
