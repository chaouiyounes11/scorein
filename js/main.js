// var quatre33 = document.getElementById("compo").value = 2;
// var quatre42 = document.getElementById("compo").value = 1;
// var i = 0;


function composition() {
  if (document.getElementById('compo').value == "2") {
    $("#teamOne .troismilieu").css('display', "none");
    $('#teamOne .troisattaquant').css('display', 'block');
    $("#teamOne .troisdefenseur").css('display', "block");
  } else if (document.getElementById('compo').value == "1") {
    $('#teamOne .troisattaquant').css('display', 'none');
    $("#teamOne .troismilieu").css('display', "block");
    $('#teamOne .troisattaquant').css('display', 'none');
    $("#teamOne .cinqmilieu").css('display', "none");
    $("#teamOne .troisdefenseur").css('display', "block");
  } else if (document.getElementById('compo').value == "3") {
    $("#teamOne .cinqmilieu").css('display', "block");
    $("#teamOne .troismilieu").css('display', "block");
    $("#teamOne .troisdefenseur").css('display', "none");
    $('#teamOne .troisattaquant').css('display', 'none');
  }
}

function composition2() {
  if (document.getElementById('compo1').value == "5") {
    $("#teamTwo .troismilieu").css('display', "none");
    $('#teamTwo .troisattaquant').css('display', 'block');
    $("#teamTwo .troisdefenseur").css('display', "block");
  } else if (document.getElementById('compo1').value == "4") {
    $('#teamTwo .troisattaquant').css('display', 'none');
    $("#teamTwo .troismilieu").css('display', "block");
    $('#teamTwo .troisattaquant').css('display', 'none');
    $("#teamTwo .cinqmilieu").css('display', "none");
    $("#teamTwo .troisdefenseur").css('display', "block");
  } else if (document.getElementById('compo1').value == "6") {
    $("#teamTwo .cinqmilieu").css('display', "block");
    $("#teamTwo .troismilieu").css('display', "block");
    $("#teamTwo .troisdefenseur").css('display', "none");
    $('#teamTwo .troisattaquant').css('display', 'none');
  }
}



function info(joueur) {
  alert(["Nom: Chaoui", " Prenom: Younes", " Position: gardien"]);
}
