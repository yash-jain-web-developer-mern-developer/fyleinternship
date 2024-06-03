
// for popup
document.querySelector(".show-login").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
})
document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
})
  
// for image render
$(document).ready(function(){
  $('.feature-item').click(function(){
      var imageUrl = $(this).data('image');
      $('#mainImage').attr('src', imageUrl);
  });
});


// for post request
$(document).ready(function() {
  $('#myForm').on('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
      
      // Serialize form data
      var formData = $(this).serialize();

      // Make the POST request
      $.ajax({
          url: 'https://getform.io/f/pbqgpdxb',
          type: 'POST',
          data: formData,
          success: function(response) {
            $('#submitButton').text('Please wait...');
              console.log('Form submitted successfully:', response);
             window.location.href = 'https://getform.io/thank-you?id=pbqgpdxb'
          },
          error: function(xhr, status, error) {
              console.error('Form submission failed:', error);
          }
      });
  });
});

// form legend property
$(document).ready(function() {
  $('.form-group input').on('focus', function() {
      var formGroup = $(this).closest('.form-group');
      formGroup.addClass('focused');
      $(this).attr('placeholder', '');
  });

  $('.form-group input').on('blur', function() {
      var formGroup = $(this).closest('.form-group');
      if ($(this).val() === '') {
          formGroup.removeClass('focused');
          $(this).attr('placeholder', formGroup.find('legend').text());
      }
  });
});