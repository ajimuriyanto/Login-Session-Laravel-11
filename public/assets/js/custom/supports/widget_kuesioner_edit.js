$(document).ready(function () {
    var idjwb3 = document.getElementById("jwb3").value;
    var idjwb6 = document.getElementById("jwb6").value;
    var idjwb7b = document.getElementById("jwb7b").value;
    var idjwb7c = document.getElementById("jwb7c").value;
    var idjwb8 = document.getElementById("jwb8").value;
    var idjwb9 = document.getElementById("jwb9").value;
    var idjwb10 = document.getElementById("jwb10").value;
    var idjwb11 = document.getElementById("jwb11").value;
    var idjwb12 = document.getElementById("jwb12").value;
    var idjwb13 = document.getElementById("jwb13").value;
    var idjwb14 = document.getElementById("jwb14").value;
    var idjwb15 = document.getElementById("jwb15").value;
    var idjwb16 = document.getElementById("jwb16").value;
    var idjwb17 = document.getElementById("jwb17").value;
    var idjwb18 = document.getElementById("jwb18").value;
    var idjwb19a = document.getElementById("jwb19a").value;
    var idjwb19b = document.getElementById("jwb19b").value;
    var idjwb19c = document.getElementById("jwb19c").value;
    var idjwb19d = document.getElementById("jwb19d").value;
    var idjwb19e = document.getElementById("jwb19e").value;
    // alert(idjwb3);
    $(".jwb3").val(idjwb3).change();
    $(".jwb6").val(idjwb6).change();
    $(".jwb7b").val(idjwb7b).change();
    $(".jwb7c").val(idjwb7c).change();

    $("#moral").find(':radio[name="jawaban[8][0][]"][value="'+idjwb8+'"]').prop("checked", true);
    $("#keahlian").find(':radio[name="jawaban[9][0][]"][value="'+idjwb9+'"]').prop("checked", true);
    $("#inggris").find(':radio[name="jawaban[10][0][]"][value="'+idjwb10+'"]').prop("checked", true);
    $("#teknologi").find(':radio[name="jawaban[11][0][]"][value="'+idjwb11+'"]').prop("checked", true);
    $("#komunikasi").find(':radio[name="jawaban[12][0][]"][value="'+idjwb12+'"]').prop("checked", true);
    $("#work").find(':radio[name="jawaban[13][0][]"][value="'+idjwb13+'"]').prop("checked", true);
    $("#tugas").find(':radio[name="jawaban[14][0][]"][value="'+idjwb14+'"]').prop("checked", true);
    $("#perusahaan").find(':radio[name="jawaban[15][0][]"][value="'+idjwb15+'"]').prop("checked", true);
    $("#pengembangan").find(':radio[name="jawaban[16][0][]"][value="'+idjwb16+'"]').prop("checked", true);
    $("#Etos").find(':radio[name="jawaban[17][0][]"][value="'+idjwb17+'"]').prop("checked", true);
    $("#Kepemimpinan").find(':radio[name="jawaban[18][0][]"][value="'+idjwb18+'"]').prop("checked", true);
    $("#kepribadian").find(':radio[name="jawaban[19][7][]"][value="'+idjwb19a+'"]').prop("checked", true);
    $("#hasil").find(':radio[name="jawaban[19][8][]"][value="'+idjwb19b+'"]').prop("checked", true);
    $("#komputer").find(':radio[name="jawaban[19][9][]"][value="'+idjwb19c+'"]').prop("checked", true);
    $("#bekerja").find(':radio[name="jawaban[19][10][]"][value="'+idjwb19d+'"]').prop("checked", true);
    $("#praktis").find(':radio[name="jawaban[19][11][]"][value="'+idjwb19e+'"]').prop("checked", true);

});