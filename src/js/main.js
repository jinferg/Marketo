;(function() {
  // Start DOM ready page initialization code

  // Intialize Tab
  var tab = new Tab();
  // Initialize Accordion
  var accordion = new Accordion();
  // Initialize Dropdown
  var dropdown = new Dropdown();
  // Initialize Notice
  var notice = new Notice();
  // Initialize Slidemenu
  var slidemenu = new Slidemenu();

  // Prism
  Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true
  });

  // ScrollReveal
  window.sr = ScrollReveal();
  sr.reveal('.js-reveal-right', {
    origin: 'right',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 100
  });

  sr.reveal('.js-reveal-left', {
    origin: 'left',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 100
  });

  sr.reveal('.js-reveal', {
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 100
  });

  sr.reveal('.js-reveal-set-1', {
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 50,
    reset: false
  });

  sr.reveal('.js-reveal-set-2', {
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 100,
    reset: false
  });

  sr.reveal('.js-reveal-set-3', {
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 150,
    reset: false
  });

  // Headroom
  var headroom = new Headroom(document.querySelector(".js-header"), {
    offset: 220,
    classes : {
      // when element is initialised
      initial : "is-active",
      // when scrolling up
      pinned : "is-pinned",
      // when scrolling down
      unpinned : "is-unpinned",
      // when above offset
      top : "is-top",
      // when below offset
      notTop : "is-not-top",
      // when at bottom of scoll area
      bottom : "is-bottom",
      // when not at bottom of scroll area
      notBottom : "is-not-bottom"
    }
  });
  headroom.init();

})();

$( document ).ready(function() {
  $('.hero\\/art').imagesLoaded( function() {
    $('.hero\\/art').addClass('is-loaded');
  });


  $(".js-modal-feature-comparison").iziModal();
    $(document).on('click', '.js-modal-feature-comparison-trigger', function (event) {
      event.preventDefault();
      // $('#modal').iziModal('setZindex', 99999);
      // $('#modal').iziModal('open', { zindex: 99999 });
      $('.js-modal-feature-comparison').iziModal('open');
  });

  $(".js-modal-feature-checklist").iziModal();
    $(document).on('click', '.js-modal-feature-checklist-trigger', function (event) {
      event.preventDefault();
      $('.js-modal-feature-checklist').iziModal('open');
  });

  $(".js-modal-subscribe").iziModal();
    $(document).on('click', '.js-modal-subscribe-trigger', function (event) {
      event.preventDefault();
      $('.js-modal-subscribe').iziModal('open');
  });

  $(".js-modal-register").iziModal();
    $(document).on('click', '.js-modal-register-trigger', function (event) {
      if (this.id == 'pricingBasic') {
         pricePlanSelected = 9;
      }
      else if (this.id == 'pricingEssential') {
         pricePlanSelected = 10;
      }
      else {
         pricePlanSelected = 11;
      }
      event.preventDefault();
      $('.js-modal-register').iziModal('open');
  });

  $(".js-modal-suitability").iziModal();
    $(document).on('click', '.js-modal-suitability-trigger', function (event) {
      event.preventDefault();
      $('.js-modal-suitability').iziModal('open');
  });

  $(".js-modal-demo").iziModal();
    $(document).on('click', '.js-modal-demo-trigger', function (event) {
      event.preventDefault();
      $('.js-modal-demo').iziModal('open');
  });

  $(".js-modal-calculator").iziModal();
    $(document).on('click', '.js-modal-calculator-trigger', function (event) {
      event.preventDefault();
      $('.js-modal-calculator').iziModal('open');
  });

  $('.js-slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '80px'
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px'
        }
      }
    ]
  });

  // Stickr
  $('.js-stickr').stickr({
    duration: 0,
    offsetTop: 60,
    offsetBottom: 30
  });


  // Pricing - Basic
  $(document).on("change", ".js-basic-qty", function() {
    var sheetPrice = 7,
        tradePrice = 20,
        fullPrice = 30;
    var sum = 0;
    $('.js-basic-qty').each(function(){
      if ( $(this).hasClass('js-basic-sheet') ) {
        var sheetSum = $(this).val() * sheetPrice;
        sum += sheetSum;
      }
      if ( $(this).hasClass('js-basic-trade') ) {
        var tradeSum = $(this).val() * tradePrice;
        sum += tradeSum;
      }
      if ( $(this).hasClass('js-basic-full') ) {
        var fullSum = $(this).val() * fullPrice;
        sum += fullSum;
      }
    });
    function numberWithCommas(number) {
      var parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    var commaNum = numberWithCommas(sum);
    $('.js-basic-total').html('$'+commaNum);
  });

  $( '.js-view-basic-comparison' ).click(function() {
    $( '.js-basic-comparison' ).slideToggle();
  });

  $( '.js-basic-option' ).click(function() {
    $( '.js-basic-option' ).addClass('fade\:6');
    $(this).removeClass('fade\:6');
  });

  $( '.js-basic-option-time' ).click(function() {
    $( '.js-basic-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-basic-feature-list' ).find('.js-feature-basic').addClass('is-active');
  });

  $( '.js-basic-option-trade' ).click(function() {
    $( '.js-basic-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-basic-feature-list' ).find('.js-feature-trade').addClass('is-active');
  });

  $( '.js-basic-option-full' ).click(function() {
    $( '.js-basic-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-basic-feature-list' ).find('.js-feature-full').addClass('is-active');
  });

  // Pricing - Essential
  $(document).on("change", ".js-essential-qty", function() {
    var sheetPrice = 10,
        tradePrice = 30,
        fullPrice = 40;
    var sum = 0;
    $('.js-essential-qty').each(function(){
      if ( $(this).hasClass('js-essential-sheet') ) {
        var sheetSum = $(this).val() * sheetPrice;
        sum += sheetSum;
      }
      if ( $(this).hasClass('js-essential-trade') ) {
        var tradeSum = $(this).val() * tradePrice;
        sum += tradeSum;
      }
      if ( $(this).hasClass('js-essential-full') ) {
        var fullSum = $(this).val() * fullPrice;
        sum += fullSum;
      }
    });
    function numberWithCommas(number) {
      var parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    var commaNum = numberWithCommas(sum);
    $('.js-essential-total').html('$'+commaNum);
  });

  $( '.js-view-essential-comparison' ).click(function() {
    $( '.js-essential-comparison' ).slideToggle();
  });

  $( '.js-essential-option' ).click(function() {
    $( '.js-essential-option' ).addClass('fade\:6');
    $(this).removeClass('fade\:6');
  });

  $( '.js-essential-option-time' ).click(function() {
    $( '.js-essential-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-essential-feature-list' ).find('.js-feature-basic').addClass('is-active');
  });

  $( '.js-essential-option-trade' ).click(function() {
    $( '.js-essential-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-essential-feature-list' ).find('.js-feature-trade').addClass('is-active');
  });

  $( '.js-essential-option-full' ).click(function() {
    $( '.js-essential-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-essential-feature-list' ).find('.js-feature-full').addClass('is-active');
  });


  // Pricing - Pro
  $(document).on("change", ".js-pro-qty", function() {
    var sheetPrice = 15,
        tradePrice = 50,
        fullPrice = 60;
    var sum = 0;
    $('.js-pro-qty').each(function(){
      if ( $(this).hasClass('js-pro-sheet') ) {
        var sheetSum = $(this).val() * sheetPrice;
        sum += sheetSum;
      }
      if ( $(this).hasClass('js-pro-trade') ) {
        var tradeSum = $(this).val() * tradePrice;
        sum += tradeSum;
      }
      if ( $(this).hasClass('js-pro-full') ) {
        var fullSum = $(this).val() * fullPrice;
        sum += fullSum;
      }
    });
    function numberWithCommas(number) {
      var parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    var commaNum = numberWithCommas(sum);
    $('.js-pro-total').html('$'+commaNum);
  });

  $( '.js-view-pro-comparison' ).click(function() {
    $( '.js-pro-comparison' ).slideToggle();
  });

  $( '.js-pro-option' ).click(function() {
    $( '.js-pro-option' ).addClass('fade\:6');
    $(this).removeClass('fade\:6');
  });

  $( '.js-pro-option-time' ).click(function() {
    $( '.js-pro-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-pro-feature-list' ).find('.js-feature-basic').addClass('is-active');
  });

  $( '.js-pro-option-trade' ).click(function() {
    $( '.js-pro-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-pro-feature-list' ).find('.js-feature-trade').addClass('is-active');
  });

  $( '.js-pro-option-full' ).click(function() {
    $( '.js-pro-feature-list' ).find('.js-feature-full').removeClass('is-active');
    $( '.js-pro-feature-list' ).find('.js-feature-full').addClass('is-active');
  });


  $('.js-gdpr-check').on('change', function() {
    var gdprCountries = ( ($(this).val() == 'Austria') ||
                          ($(this).val() == 'Belgium') ||
                          ($(this).val() == 'Bulgaria') ||
                          ($(this).val() == 'Croatia') ||
                          ($(this).val() == 'Turkey') ||
                          ($(this).val() == 'Czech Republic') ||
                          ($(this).val() == 'Denmark') ||
                          ($(this).val() == 'Estonia') ||
                          ($(this).val() == 'Finland') ||
                          ($(this).val() == 'France') ||
                          ($(this).val() == 'Germany') ||
                          ($(this).val() == 'Greece') ||
                          ($(this).val() == 'Hungary') ||
                          ($(this).val() == 'Ireland') ||
                          ($(this).val() == 'Italy') ||
                          ($(this).val() == 'Latvia') ||
                          ($(this).val() == 'Lithuania') ||
                          ($(this).val() == 'Luxembourg') ||
                          ($(this).val() == 'Malta') ||
                          ($(this).val() == 'Poland') ||
                          ($(this).val() == 'Portugal') ||
                          ($(this).val() == 'Romania') ||
                          ($(this).val() == 'Slovakia') ||
                          ($(this).val() == 'Slovenia') ||
                          ($(this).val() == 'Spain') ||
                          ($(this).val() == 'Sweden') ||
                          ($(this).val() == 'Netherlands') ||
                          ($(this).val() == 'United Kingdom') )
    var setValue = $(this).val();
    if( gdprCountries  ) {
      $('.js-gdpr-optin').hide();
      $('.js-gdpr-disclaimer').hide();
      $('.js-gdpr-optin').show();
    } else {
      $('.js-gdpr-optin').hide();
      $('.js-gdpr-disclaimer').hide();
      $('.js-gdpr-disclaimer').show();
    }
  });

  // Check and hide country if user is from Australia or NZ
  var auth = "d4e437de-da7d-4f13-9843-dfafcc65f562";
  var url  = "https://ipfind.co/me?auth=" + auth;
  $.get(url, function(data) {
    if(data.country) {
      $('.js-gdpr-check').val(data.country);
      if (data.country == 'Australia' || data.country == 'New Zealand'){
        $('.js-gdpr-check').closest(".form\\/item").hide();
      }
    }
  });

  $('#js-form-register').parsley().on('field:validated', function() {
  })
  .on('form:submit', function() {
    sendMFRegister();
    return false;
  });

  $('#js-form-checklist').parsley().on('field:validated', function() {
  })
  .on('form:submit', function() {
    sendMFChecklist();
    return false;
  });

  $('#js-form-demo').parsley().on('field:validated', function() {
  })
  .on('form:submit', function() {
    sendMFDemo();
    return false;
  });

  $('#js-form-subscribe').parsley().on('field:validated', function() {
  })
  .on('form:submit', function() {
    sendMFSubscribe();
    return false;
  });

  $('#js-form-calculator').parsley().on('field:validated', function() {
  })
  .on('form:submit', function() {
    sendMFCalculator();
    return false;
  });
  if ( $('#js-form-partner').length ) {
    $('#js-form-partner').parsley().on('field:validated', function() {
    })
    .on('form:submit', function() {
      sendMFPartner();
      return false;
    });
  };




  // end document.ready
});




// Marketo - Register
function sendMFRegister() {
  //array of fields from visible form
  var formFields = {
    "Email": $("#register-email").val(),
    "Country": $("#register-country").val(),
    "Agree_to_Terms_and_Conditions__c": $("#register-terms").prop('checked'),
		"Opt_in_to_Marketing_Emails__c": $("#register-optin").prop('checked')
  };
  MktoForms2.whenReady(function(form) {
    var formID = form.getId();
    if (formID == 1297) {
      // Load the correct form for Form
      form.addHiddenFields(formFields);
      // Prevent marketo form from refreshing the page
      form.onSuccess(function(values, followUpUrl) {
        var redirectEmail = $("#register-email").val();
        var redirectCountry = $("#register-country").val();
				var redirectTerms = $("#register-terms").prop('checked');
				var redirectOptIn = $('#register-optin').prop('checked');
				location.href = "https://fergusapp.com/public_site/sign_up?email=" + redirectEmail + "&terms=" + redirectTerms + "&opt_in=" + redirectOptIn + "&country=" + redirectCountry + "&plan_id=" + pricePlanSelected;
        console.log('this was sent with success');
        return false;
      });
      console.log('this was sent');
      form.submit();
    };
  });
};

// Marketo - Checklist
function sendMFChecklist() {
  //array of fields from visible form
  var formFields = {
    "Email": $("#checklist-email").val(),
    "Country": $("#checklist-country").val(),
    "Agree_to_Terms_and_Conditions__c": $("#checklist-terms").prop('checked')
  };
  MktoForms2.whenReady(function(form) {
    var formID = form.getId();
    if (formID == 1303) {
      // Load the correct form for Form
      form.addHiddenFields(formFields);
      form.onSuccess(function() {
        location.href = "https://fergus.com";
      });
      form.submit();
    };
  });
};

// Marketo - Subscribe
function sendMFSubscribe() {
  //array of fields from visible form
  var formFields = {
    "Email": $("#subscribe-email").val(),
    "Agree_to_Terms_and_Conditions__c": $("#subscribe-terms").prop('checked')
  };
  MktoForms2.whenReady(function(form) {
    var formID = form.getId();
    if (formID == 1302) {
      // Load the correct form for Form
      form.addHiddenFields(formFields);
      form.onSuccess(function() {
        location.href = "https://fergus.com";
      });
      form.submit();
    };
  });
};

// Marketo - Partner
function sendMFPartner() {
  //array of fields from visible form
  var formFields = {
    "Company": $("#partner-company").val(),
    "Website": $("#partner-website").val(),
    "Address": $("#partner-address").val(),
    "City": $("#partner-city").val(),
    "PostalCode": $("#partner-postal").val(),
    "Country": $("#partner-country").val(),
    "Phone": $("#partner-phone").val(),
    "Email": $("#partner-email").val(),
    "FirstName": $("#partner-firstname").val(),
    "LastName": $("#partner-lastname").val(),
    "Agree_to_Terms_and_Conditions__c": $("#partner-terms").prop('checked')
  };
  MktoForms2.whenReady(function(form) {
    var formID = form.getId();
    if (formID == 1299) {
      // Load the correct form for Form
      form.addHiddenFields(formFields);
      form.onSuccess(function() {
        location.href = "https://fergus.com";
      });
      form.submit();
    };
  });
};

// Marketo - Demo
function sendMFDemo() {
  //array of fields from visible form
  var formFields = {
    "Email": $("#demo-email").val(),
    "FirstName": $("#demo-firstname").val(),
    "LastName": $("#demo-lastname").val(),
    "Company": $("#demo-company").val(),
    "Phone": $("#demo-phone").val(),
    "Industry": $("#demo-industry").val(),
    "NumberOfEmployees": $("#demo-employees").val(),
    "Country": $("#demo-country").val(),
    "MktoPersonNotes": $("#demo-comment").val(),
    "Agree_to_Terms_and_Conditions__c": $("#demo-terms").prop('checked')
  };
  MktoForms2.whenReady(function(form) {
    var formID = form.getId();
    if (formID == 1300) {
      // Load the correct form for Form
      form.addHiddenFields(formFields);
      form.onSuccess(function() {
        location.href = "https://fergus.com";
      });
      form.submit();
    };
  });
};


// Marketo - Calculator
function sendMFCalculator() {
  //array of fields from visible form
  var formFields = {
    "Email": $("#calculator-email").val(),
    "Country": $("#calculator-country").val(),
    "Agree_to_Terms_and_Conditions__c": $("#calculator-terms").prop('checked')
  };
  MktoForms2.whenReady(function(form) {
    var formID = form.getId();
    if (formID == 1304) {
      // Load the correct form for Form
      form.addHiddenFields(formFields);
      form.onSuccess(function() {
        location.href = "https://fergus.com";
      });
      form.submit();
    };
  });
};
