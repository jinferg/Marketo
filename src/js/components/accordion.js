'use strict';
// Create an immediately invoked functional expression to wrap our code
;(function() {

	// Constructor Method
	window.Accordion = function() {

		// Define Constructor
		let defaults = {
			element: '.accordion'
		}

		// Override defaults
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		} else {
			this.options = defaults
		}


		let accordionClass = this.options.element
    let allAccordion = document.querySelectorAll(accordionClass)
		let itemClass = 'accordion\\/item'
		let headerClass = 'accordion\\/header'
		let contentClass = 'accordion\\/content'
		let activeClass = 'is-active'


		/* Initialize each component */
    for (let i = 0; i < allAccordion.length; i++) {
			let accordion = allAccordion[i]
			let allItem = accordion.querySelectorAll('.' + itemClass)
			let allHeader = accordion.querySelectorAll('.' + headerClass)

			/* Switch when clicking */
			for (let i = 0; i < allItem.length; i++) {
				let header = allHeader[i]
				let item = allItem[i]
				let activeItem = item.classList.contains(activeClass)
				if (activeItem) {
					let activeHeight = item.querySelector('.' + contentClass).scrollHeight + 'px'
					let activeContent = item.querySelector('.' + contentClass)
					activeContent.style.maxHeight = activeHeight
				}

				header.addEventListener('click', function(e) {
					e.preventDefault()
					activateContent(this.parentNode.parentNode, this.parentNode)
				})
			}
		}


		/* Activates the chosen accordion and deactivates the rest */
		function activateContent(targetParent, targetItem) {
			let allContent = targetParent.querySelectorAll('.' + contentClass)
			let allItem = targetParent.querySelectorAll('.' + itemClass)
			let currentContent = targetItem.querySelector('.' + contentClass)
			let contentHeight = currentContent.scrollHeight + 'px'

			if (targetItem.classList.contains(activeClass)) {
				// Reset is-active state
				for (let i = 0; i < allItem.length; i++) {
					let item = allItem[i]
	        item.classList.remove(activeClass)
				}
				// Reset max-height of all content property
				for (let i = 0; i < allContent.length; i++) {
					let content = allContent[i]
	        content.style.maxHeight = ''
				}
			} else {
				// Reset is-active state
				for (let i = 0; i < allItem.length; i++) {
					let item = allItem[i]
	        item.classList.remove(activeClass)
				}
				// Apply active class to target item
	      targetItem.classList.add(activeClass)

				// Reset max-height of all content property
				for (let i = 0; i < allContent.length; i++) {
					let content = allContent[i]
	        content.style.maxHeight = ''
				}

				// Add max-height based on content height
				currentContent.style.maxHeight = contentHeight
			}
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
