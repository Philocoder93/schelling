$('document').ready(function(){
  console.log('firing');
})

$('document').ready(function(){
  for (i=1;i<26;i++) {
    $('main').append('<p class="box" id="'+i+'">test</p>');
  }
})
