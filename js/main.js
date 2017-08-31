// var quatre33 = document.getElementById("compo").value = 2;
// var quatre42 = document.getElementById("compo").value = 1;
// var i = 0;


function composition() {
  if (document.getElementById('compo').value == "2") {
    $(".troismilieu").css('display', "none");
    $('.troisattaquant').css('display', 'block');
    $(".troisdefenseur").css('display', "block");
  } else if (document.getElementById('compo').value == "1") {
    $(".troismilieu").css('display', "block");
    $('.troisattaquant').css('display', 'none');
    $(".cinqmilieu").css('display', "none");
    $(".troisdefenseur").css('display', "block");
  } else if (document.getElementById('compo').value == "3") {
    $(".cinqmilieu").css('display', "block");
    $(".troismilieu").css('display', "block");
    $(".troisdefenseur").css('display', "none");
    $('.troisattaquant').css('display', 'none');
  }
}
