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
