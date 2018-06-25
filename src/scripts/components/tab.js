'use strict';
// Create an immediately invoked functional expression to wrap our code
;(function() {

	// Constructor Method
	window.Tab = function() {

		// Define option defaults
		let defaults = {
			element: '.tab'
		}

		// Override defaults
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		} else {
			this.options = defaults
		}

		let tabClass = this.options.element
    let allTab = document.querySelectorAll(tabClass)
		let headerClass = '.tab\\/header .tab\\/item'
    let contentClass = '.tab\\/content .tab\\/item'
		let activeClass = 'is-active'


		/* Initialize each tab component */
    for (let i = 0; i < allTab.length; i++) {
			let eachTab = allTab[i]

			/* List of tabs for this tabbed container */
			let allHeader = eachTab.querySelectorAll(headerClass)

			/* Switch tab when clicking */
			for (let i = 0; i < allHeader.length; i++) {
				let header = allHeader[i]
				header.addEventListener('click', function(e) {
					e.preventDefault()

					activateContent(this, this.parentNode.parentNode, this.getAttribute('href'))
				})
			}
		}

		/* Activates the chosen tab and deactivates the rest */
		function activateContent(target, targetParent, targetContentID) {
      let targetContent = targetParent.querySelector(targetContentID)
      let allHeader = targetParent.querySelectorAll(headerClass)
      let allContent = targetParent.querySelectorAll(contentClass)

      for (let i = 0; i < allContent.length; i++) {
				let header = allHeader[i]
        let content = allContent[i]
        header.classList.remove(activeClass)
				content.classList.remove(activeClass)
			}

      targetContent.classList.add(activeClass)
      target.classList.add(activeClass)
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
