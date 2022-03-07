$('[language="english"]').hide();

$('#switch_language').click(function() {
  $('[language="portuguese"]').toggle();
  $('[language="english"]').toggle();
});