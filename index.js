$(document).ready(function(){
  $('.chat-box').on('keyup', function(event){
    if(event.keyCode == 13){
      $('.chat').append("<div class='message'>" + this.value + '</div>');
      this.value = '';
      $(".chat").animate({ scrollTop: $(document).height() }, "slow");
    }
  });
});