function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$('#example-one a').click(function(e) {
    $('#example-one a').removeClass('current_page_item');
    $(this).addClass('current_page_item');
});
