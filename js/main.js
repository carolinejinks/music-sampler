
$(document).ready(function() {

//toggle
$('.songs').hide();

$('.albumCover').click(function() {
  $('.songs').slideToggle();

});



  // function to hide all divs
  function hideAll() {
    $('#dontStopInfo').hide();
    $('#rockInfo').hide();
    $('#thrillerInfo').hide();
    $('#badInfo').hide();
  }

    hideAll();

  $('.albumCover').click(function() {


    hideAll();

//switch statement

    switch ($(this).attr("id")) {
      case "offTheWall":
        $('#dontStopInfo').show();
        break;
      case "dangerous":
        $('#rockInfo').show();
        break;
      case "thrillerCover":
        $('#thrillerInfo').show();
        break;
      case "badCover":
        $('#badInfo').show();
        break;
    }
  });


});
