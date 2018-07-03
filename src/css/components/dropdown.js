'use strict';
// Create an immediately invoked functional expression to wrap our code
;(function() {

	// Constructor Method
	window.Dropdown = function() {

		// Define Constructor
		let defaults = {
			element: '.dropdown'
		}

		// Override defaults
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		} else {
			this.options = defaults
		}

		let hoverOption = this.options.hover
		let dropdownClass = this.options.element
    let allDropdown = document.querySelectorAll(dropdownClass)
		let toggleClass = 'dropdown\\/toggle'
		let activeClass = 'is-active'

		/* Initialize each component */
    for (let i = 0; i < allDropdown.length; i++) {
			let dropdown = allDropdown[i]
			let toggle = dropdown.querySelector('.' + toggleClass)

			if (dropdown.classList.contains('dropdown\:hover')) {
				/* Activate when hovering */
				toggle.addEventListener('mouseover', function(e) {
					activateHoverContent(this.parentNode)
				})
			} else {
				/* Activate when clicking */
				toggle.addEventListener('click', function(e) {
					activateClickContent(this.parentNode)
				})
			}
		}

		/* Activates the chosen dropdown and deactivates the rest */
		function activateClickContent(targetParent) {

			if (targetParent.classList.contains(activeClass)) {
				targetParent.classList.remove(activeClass)
				console.log('this contains active')
			} else {
				console.log('else activated')
				// Reset is-active state
				for (let i = 0; i < allDropdown.length; i++) {
					let dropdown = allDropdown[i]
					dropdown.classList.remove(activeClass)
				}
				targetParent.classList.toggle(activeClass)
			}

			// stop next listener from firing
			event.stopImmediatePropagation()

			// detect document click
			document.addEventListener('click', function (e) {
				if (!targetParent.contains(event.target)) {
					for (let i = 0; i < allDropdown.length; i++) {
						let dropdown = allDropdown[i]
						dropdown.classList.remove(activeClass)
					}
				}
			})
			// detect document touch
			document.addEventListener('touchend', function (e) {

				if (!targetParent.contains(event.target)) {
					for (let i = 0; i < allDropdown.length; i++) {
						let dropdown = allDropdown[i]
						dropdown.classList.remove(activeClass)
					}
				}
			})
		}

		/* Activates the chosen dropdown and deactivates the rest */
		function activateHoverContent(targetParent) {
			targetParent.classList.add(activeClass)
			targetParent.addEventListener('mouseleave', function() {
				targetParent.classList.remove(activeClass)
			})
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
