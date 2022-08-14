$(document).ready(function () {
    var url = window.location.href;
    console.log(url);
    var curr = url.split("/")[3];
    if (curr == "electric") {
        $("#EVs").addClass('active');
    }
    if (curr == "gas") {
        $("#Gas").addClass('active');
    }
    if(curr == "electronics"){
      $("#Ens").addClass('active');
    }
});
