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
