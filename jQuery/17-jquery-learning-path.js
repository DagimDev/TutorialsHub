// 2: "Implement basic DOM selection"
const $header = $('header');
const $buttons = $('.btn');

// 3: "Add click event handler"
$('#login-btn').click(function() {
  console.log('Button clicked!');
});

// 4: "Implement DOM manipulation"
$('#title').text('Welcome Back').css('color', 'blue');


// 5: "Add class operations"
$('.menu-item').addClass('active');
$('#alert-box').removeClass('hidden');

// 6: "Create element and append"
const $newItem = $('<li>').text('New Item').attr('data-id', 123);
$('#list').append($newItem);

// 7: "Implement AJAX GET request"
$.get('https://api.example.com/data', function(response) {
  $('#content').html(response);
});

// 8: "Add form handling"
$('#contact-form').submit(function(e) {
  e.preventDefault();
  const formData = $(this).serialize();
  // Process form data
});

// 9: "Implement fade animations"
$('#notification').fadeIn(500).delay(2000).fadeOut();

// 10: "Add slide toggle effects"
$('#toggle-btn').click(function() {
  $('#sidebar').slideToggle();
});

// 11: "Create custom plugin"
$.fn.highlight = function(color) {
  return this.css('background-color', color || '#ffff99');
};
$('.important').highlight();

// 12: "Implement event delegation"
$('#dynamic-list').on('click', '.item', function() {
  $(this).toggleClass('selected');
});

// 13: "Add promise handling"
$.when(
  $.ajax('/api/user'),
  $.ajax('/api/products')
).then(function(userResp, productsResp) {
  // Handle both responses
});

// 14: "Implement localStorage integration"
$('#save-btn').click(function() {
  const content = $('#editor').val();
  localStorage.setItem('draft', content);
});

// 15: "Add responsive design helpers"
function checkViewport() {
  if ($(window).width() < 768) {
    $('nav').addClass('mobile');
  }
}
$(window).resize(checkViewport);

// 16: "Create modal system"
$.fn.openModal = function() {
  return this.fadeIn(300).css('display', 'flex');
};
$('#close-modal').click(function() {
  $(this).closest('.modal').fadeOut();
});

// 17: "Implement smooth scrolling"
$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
});

// 18: "Add data attribute handling"
$('[data-toggle="tab"]').each(function() {
  const target = $(this).data('target');
  $(this).click(() => $(target).show());
});

// 9: "Implement input validation"
$.fn.validateEmail = function() {
  return this.filter(function() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($(this).val());
  });
};
$('#email-input').validateEmail();

// 20: "Optimize jQuery performance"
// 1) Cache selectors

// 2) Use find() instead of context
$('#parent').find('.child').css('color', 'red');

// 3) Detach before bulk operations
const $list = $('#long-list').detach();
// ... bulk operations
$list.appendTo('body');