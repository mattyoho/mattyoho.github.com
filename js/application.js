$(function() {
  $(".js-base64-email").each(function() {
    var $mailLink, encodedEmail;
    $mailLink    = $(this);
    encodedEmail = $mailLink.attr("data-base64-email")
    $mailLink.attr("href", "mailto:" + atob(encodedEmail));
  });
});
