$(document).ready(function () {
  showTingkatKerja();
  showJabatan();
  showSumberBiaya();
  $("#kt_datepicker_1").flatpickr({
    allowInput: true,
    dateFormat: "d-m-Y",
  });
  var nourut1 = document.getElementById("nourut1");
  nourut1.innerHTML = "1.";
  var nourut2a = document.getElementById("nourut2a");
  nourut2a.innerHTML = "2.";
  var nourut2b = document.getElementById("nourut2b");
  nourut2b.innerHTML = "2.";
  var nourut3 = document.getElementById("nourut3");
  nourut3.innerHTML = "3.";
  var nourut4a = document.getElementById("nourut4a");
  nourut4a.innerHTML = "4.";
  var nourut4b = document.getElementById("nourut4b");
  nourut4b.innerHTML = "4.";
  var nourut5 = document.getElementById("nourut5");
  nourut5.innerHTML = "5.";
  var nourut6 = document.getElementById("nourut6");
  nourut6.innerHTML = "6.";
  var nourut7 = document.getElementById("nourut7");
  nourut7.innerHTML = "7.";
  var nourut8 = document.getElementById("nourut8");
  nourut8.innerHTML = "8.";
  var nourut9 = document.getElementById("nourut9");
  nourut9.innerHTML = "9.";
  var nourut10 = document.getElementById("nourut10");
  nourut10.innerHTML = "10.";
  var nourut11 = document.getElementById("nourut11");
  nourut11.innerHTML = "11.";
  var nourut12 = document.getElementById("nourut12");
  nourut12.innerHTML = "12.";
  var nourut13a = document.getElementById("nourut13a");
  nourut13a.innerHTML = "13a.";
  var nourut13b = document.getElementById("nourut13b");
  nourut13b.innerHTML = "13b.";
  var nourut14 = document.getElementById("nourut14");
  nourut14.innerHTML = "14.";
  var nourut15 = document.getElementById("nourut15");
  nourut15.innerHTML = "15.";
  var nourut16 = document.getElementById("nourut16");
  nourut16.innerHTML = "16.";
  var nourut17 = document.getElementById("nourut17");
  nourut17.innerHTML = "17.";
  var nourut18 = document.getElementById("nourut18");
  nourut18.innerHTML = "18.";
  var nourut19 = document.getElementById("nourut19");
  nourut19.innerHTML = "19.";
  var nourut20 = document.getElementById("nourut20");
  nourut20.innerHTML = "20.";
  var nourut21 = document.getElementById("nourut21");
  nourut21.innerHTML = "21.";

  $(".jwbnsub5").attr("value", "00");
  $(".jwbnsub5").css("color", "#f5f8fa");
  $(".jwbnsub5").attr("readonly", true);
  $("#hiddenjenis").css("display", "none");
  $("#hiddenerat").css("display", "none");
  $("#hiddentingkat").css("display", "none");

  $(".jwbnsub10").attr("value", "00");
  $(".jwbnsub10").css("color", "#f5f8fa");
  $(".jwbnsub10").attr("readonly", true);

  $(".jwbnsub151").attr("readonly", true);
  $(".jwbnsub151").attr("value", "00");
  $(".jwbnsub151").css("color", "#f5f8fa");

  $(".jwbnsub152").attr("readonly", true);
  $(".jwbnsub152").attr("value", "00");
  $(".jwbnsub152").css("color", "#f5f8fa");

  $(".jwbnsub161").attr("readonly", true);
  $(".jwbnsub161").attr("value", "00");
  $(".jwbnsub161").css("color", "#f5f8fa");

  $(".jwbnsub20").attr("readonly", true);
  $(".jwbnsub20").attr("value", "00");
  $(".jwbnsub20").css("color", "#f5f8fa");

  $(".jwbnsub21").attr("readonly", true);
  $(".jwbnsub21").attr("value", "00");
  $(".jwbnsub21").css("color", "#f5f8fa");

  $("body").on("click", "#flexRadioChecked", function (event) {
    if ($(this).val() === "1") {
      showProvinsi();
      showKabupaten();
      showTingkatKerja();

      $("#bekerja").css("display", "block");
      $("#kerja").css("display", "block");
      $("#kerjaawal").css("display", "block");
      $("#swastaawal").css("display", "none");
      $("#swasta").css("display", "none");
      $("#thp").css("display", "block");
      $("#lokasi").css("display", "block");
      $("#lokkerja").css("display", "block");
      $("#lokswasta").css("display", "none");
      $("#jeper").css("display", "block");
      $("#naper").css("display", "block");
      $("#jawir").css("display", "none");
      $("#tingker").css("display", "block");
      $("#stulanbiaya").css("display", "none");
      $("#stulantinggi").css("display", "none");
      $("#stulanprodi").css("display", "none");
      $("#stulanmasuk").css("display", "none");
      $("#habistu").css("display", "block");
      $("#tingpenses").css("display", "block");

      $(".jwbn2").attr("value", "");
      $(".jwbn2").val("");
      $(".jwbn3").attr("value", "");
      $(".jwbn3").val("");
      $(".jwbn4a option:selected").attr("value", "");
      $(".jwbn4b option:selected").attr("value", "");
      $(".jwbn7 option:selected").attr("value", "");
      $(".jwbn7 option:selected").val("");
      $(".jwbn8 option:selected").attr("value", "00");
      $(".jwbn8 option:selected").val("00");
      $(".jwbn9a option:selected").attr("value", "00");
      $(".jwbn9b option:selected").attr("value", "00");
      $(".jwbn9c option:selected").attr("value", "00");
      $(".jwbn9d").attr("value", "00");
      $(".jwbn9d").val("00");

      $("body").on("click", "#flexRadioJenis", function (event) {
        var jenis = $(this).val();
        if (jenis === "12") {
          $(".jwbnsub5").attr("readonly", false);
          $(".jwbnsub5").attr("value", "");
          $(".jwbnsub5").val("");
          $(".jwbnsub5").css("color", "#5e6278");
          $(".jwbnsub5").focus();
        } else {
          $(".jwbnsub5").attr("readonly", true);
          $(".jwbnsub5").attr("value", "00");
          $(".jwbnsub5").val("00");
          $(".jwbnsub5").css("color", "#f5f8fa");
        }
      });
      // $("#jeper")
      //   .find(':radio[name="jawaban[5][]"][value="00"]')
      //   .prop("checked", false);
      $('input[name="jawaban[5][]"]').prop("checked", false);
      $(".jwbnsub5").attr("value", "00");
      $(".jwbnsub5").css("color", "#f5f8fa");
      $(".jwbn6").attr("value", "");
      $(".jwbn6").val("");
      $('input[name="jawaban[10][]"]').prop("checked", false);
      $(".jwbnsub10").attr("readonly", true);
      $(".jwbnsub10").attr("value", "00");
      $(".jwbnsub10").val("00");
      $(".jwbnsub10").css("color", "#f5f8fa");
      $('input[name="jawaban[11][]"]').prop("checked", false);
      $('input[name="jawaban[12][]"]').prop("checked", false);
      $('input[name="jawaban[13][7][]"]').prop("checked", false);
      $('input[name="jawaban[13][8][]"]').prop("checked", false);
      $('input[name="jawaban[13][9][]"]').prop("checked", false);
      $('input[name="jawaban[13][10][]"]').prop("checked", false);
      $('input[name="jawaban[13][11][]"]').prop("checked", false);
      $('input[name="jawaban[13][12][]"]').prop("checked", false);
      $('input[name="jawaban[13][13][]"]').prop("checked", false);
      $('input[name="jawaban[13][14][]"]').prop("checked", false);
      $('input[name="jawaban[13][15][]"]').prop("checked", false);
      $('input[name="jawaban[13][16][]"]').prop("checked", false);
      $('input[name="jawaban[13][17][]"]').prop("checked", false);
      $('input[name="jawaban[13][18][]"]').prop("checked", false);
      $('input[name="jawaban[13][19][]"]').prop("checked", false);
      $('input[name="jawaban[13][20][]"]').prop("checked", false);
      $('input[name="jawaban[14][21][]"]').prop("checked", false);
      $('input[name="jawaban[14][22][]"]').prop("checked", false);
      $('input[name="jawaban[14][23][]"]').prop("checked", false);
      $('input[name="jawaban[14][24][]"]').prop("checked", false);
      $('input[name="jawaban[14][25][]"]').prop("checked", false);
      $('input[name="jawaban[14][26][]"]').prop("checked", false);
      $('input[name="jawaban[14][27][]"]').prop("checked", false);
      $('input[name="samaran[15][]"]').prop("checked", false);
      $('input[name="jawaban[16][]"]').prop("checked", false);
      $('input[name="jawaban[20][]"]').prop("checked", false);
      $('input[name="jawaban[21][]"]').prop("checked", false);
      $(".jwbnsub21").attr("readonly", true);
      $(".jwbnsub21").attr("value", "00");
      $(".jwbnsub21").val("00");
      $(".jwbnsub21").css("color", "#f5f8fa");
      $(".jwbnsub20").attr("readonly", true);
      $(".jwbnsub20").attr("value", "00");
      $(".jwbnsub20").val("00");
      $(".jwbnsub20").css("color", "#f5f8fa");
      $(".jwbnsub161").attr("value", "00");
      $(".jwbnsub161").css("color", "#f5f8fa");
      $(".jwbn17").attr("value", "");
      $(".jwbn17").val("");
      $(".jwbn18").attr("value", "");
      $(".jwbn18").val("");
      $(".jwbn19").attr("value", "");
      $(".jwbn19").val("");

      $(".jwbnsub151").attr("readonly", true);
      $(".jwbnsub151").attr("value", "00");
      $(".jwbnsub151").val("00");
      $(".jwbnsub151").css("color", "#f5f8fa");
      $(".jwbnsub152").attr("readonly", true);
      $(".jwbnsub152").attr("value", "00");
      $(".jwbnsub152").val("00");
      $(".jwbnsub152").css("color", "#f5f8fa");

      var nourut1 = document.getElementById("nourut1");
      nourut1.innerHTML = "1.";
      var nourut10 = document.getElementById("nourut10");
      nourut10.innerHTML = "8.";
      var nourut11 = document.getElementById("nourut11");
      nourut11.innerHTML = "9.";
      var nourut12 = document.getElementById("nourut12");
      nourut12.innerHTML = "10.";
      var nourut13a = document.getElementById("nourut13a");
      nourut13a.innerHTML = "11a.";
      var nourut13b = document.getElementById("nourut13b");
      nourut13b.innerHTML = "11b.";
      var nourut14 = document.getElementById("nourut14");
      nourut14.innerHTML = "12.";
      var nourut15 = document.getElementById("nourut15");
      nourut15.innerHTML = "13.";
      var nourut16 = document.getElementById("nourut16");
      nourut16.innerHTML = "14.";
      var nourut17 = document.getElementById("nourut17");
      nourut17.innerHTML = "15.";
      var nourut18 = document.getElementById("nourut18");
      nourut18.innerHTML = "16.";
      var nourut19 = document.getElementById("nourut19");
      nourut19.innerHTML = "17.";
      var nourut20 = document.getElementById("nourut20");
      nourut20.innerHTML = "18.";
      var nourut21 = document.getElementById("nourut21");
      nourut21.innerHTML = "19.";
    } else if ($(this).val() === "3") {
      showProvinsi();
      showKabupaten();
      showJabatan();
      $("#bekerja").css("display", "block");
      $("#kerja").css("display", "none");
      $("#kerjaawal").css("display", "none");
      $("#swasta").css("display", "block");
      $("#thp").css("display", "block");
      $("#lokasi").css("display", "block");
      $("#lokkerja").css("display", "none");
      $("#lokswasta").css("display", "block");
      $("#jeper").css("display", "none");
      $("#naper").css("display", "none");
      $("#jawir").css("display", "block");
      $("#tingker").css("display", "none");
      $("#stulanbiaya").css("display", "none");
      $("#stulantinggi").css("display", "none");
      $("#stulanprodi").css("display", "none");
      $("#stulanmasuk").css("display", "none");
      $("#habistu").css("display", "block");
      $("#tingpenses").css("display", "block");

      $(".jwbn2").attr("value", "");
      $(".jwbn2").val("");
      $(".jwbn3").attr("value", "");
      $(".jwbn3").val("");
      $(".jwbn4a option:selected").attr("value", "");
      $(".jwbn4b option:selected").attr("value", "");
      $("#jeper")
        .find(':radio[name="jawaban[5][]"][value="00"]')
        .prop("checked", true);
      $(".jwbnsub5").attr("value", "00");
      $(".jwbnsub5").val("00");
      $(".jwbn6").attr("value", "00");
      $(".jwbn6").val("00");
      $(".jwbn7 option:selected").attr("value", "00");
      $(".jwbn7 option:selected").val("00");
      $(".jwbn8 option:selected").attr("value", "");
      $(".jwbn8 option:selected").val("");
      $(".jwbn9a option:selected").attr("value", "00");
      $(".jwbn9b option:selected").attr("value", "00");
      $(".jwbn9c option:selected").attr("value", "00");
      $(".jwbn9d").attr("value", "00");
      $(".jwbn9d").val("00");
      $('input[name="jawaban[10][]"]').prop("checked", false);
      $(".jwbnsub10").attr("readonly", true);
      $(".jwbnsub10").attr("value", "00");
      $(".jwbnsub10").val("00");
      $(".jwbnsub10").css("color", "#f5f8fa");
      $('input[name="jawaban[11][]"]').prop("checked", false);
      $('input[name="jawaban[12][]"]').prop("checked", false);
      $('input[name="jawaban[13][7][]"]').prop("checked", false);
      $('input[name="jawaban[13][8][]"]').prop("checked", false);
      $('input[name="jawaban[13][9][]"]').prop("checked", false);
      $('input[name="jawaban[13][10][]"]').prop("checked", false);
      $('input[name="jawaban[13][11][]"]').prop("checked", false);
      $('input[name="jawaban[13][12][]"]').prop("checked", false);
      $('input[name="jawaban[13][13][]"]').prop("checked", false);
      $('input[name="jawaban[13][14][]"]').prop("checked", false);
      $('input[name="jawaban[13][15][]"]').prop("checked", false);
      $('input[name="jawaban[13][16][]"]').prop("checked", false);
      $('input[name="jawaban[13][17][]"]').prop("checked", false);
      $('input[name="jawaban[13][18][]"]').prop("checked", false);
      $('input[name="jawaban[13][19][]"]').prop("checked", false);
      $('input[name="jawaban[13][20][]"]').prop("checked", false);
      $('input[name="jawaban[14][21][]"]').prop("checked", false);
      $('input[name="jawaban[14][22][]"]').prop("checked", false);
      $('input[name="jawaban[14][23][]"]').prop("checked", false);
      $('input[name="jawaban[14][24][]"]').prop("checked", false);
      $('input[name="jawaban[14][25][]"]').prop("checked", false);
      $('input[name="jawaban[14][26][]"]').prop("checked", false);
      $('input[name="jawaban[14][27][]"]').prop("checked", false);
      $('input[name="samaran[15][]"]').prop("checked", false);
      $('input[name="jawaban[16][]"]').prop("checked", false);
      $('input[name="jawaban[20][]"]').prop("checked", false);
      $('input[name="jawaban[21][]"]').prop("checked", false);
      $(".jwbnsub21").attr("readonly", true);
      $(".jwbnsub21").attr("value", "00");
      $(".jwbnsub21").val("00");
      $(".jwbnsub21").css("color", "#f5f8fa");
      $(".jwbnsub20").attr("readonly", true);
      $(".jwbnsub20").attr("value", "00");
      $(".jwbnsub20").val("00");
      $(".jwbnsub20").css("color", "#f5f8fa");
      $(".jwbnsub161").attr("value", "00");
      $(".jwbnsub161").css("color", "#f5f8fa");
      $(".jwbn17").attr("value", "");
      $(".jwbn17").val("");
      $(".jwbn18").attr("value", "");
      $(".jwbn18").val("");
      $(".jwbn19").attr("value", "");
      $(".jwbn19").val("");

      $(".jwbnsub151").attr("readonly", true);
      $(".jwbnsub151").attr("value", "00");
      $(".jwbnsub151").val("00");
      $(".jwbnsub151").css("color", "#f5f8fa");
      $(".jwbnsub152").attr("readonly", true);
      $(".jwbnsub152").attr("value", "00");
      $(".jwbnsub152").val("00");
      $(".jwbnsub152").css("color", "#f5f8fa");

      var nourut8 = document.getElementById("nourut8");
      nourut8.innerHTML = "5.";
      var nourut10 = document.getElementById("nourut10");
      nourut10.innerHTML = "6.";
      var nourut11 = document.getElementById("nourut11");
      nourut11.innerHTML = "7.";
      var nourut12 = document.getElementById("nourut12");
      nourut12.innerHTML = "8.";
      var nourut13a = document.getElementById("nourut13a");
      nourut13a.innerHTML = "9a.";
      var nourut13b = document.getElementById("nourut13b");
      nourut13b.innerHTML = "9b.";
      var nourut14 = document.getElementById("nourut14");
      nourut14.innerHTML = "10.";
      var nourut15 = document.getElementById("nourut15");
      nourut15.innerHTML = "11.";
      var nourut16 = document.getElementById("nourut16");
      nourut16.innerHTML = "12.";
      var nourut17 = document.getElementById("nourut17");
      nourut17.innerHTML = "13.";
      var nourut18 = document.getElementById("nourut18");
      nourut18.innerHTML = "14.";
      var nourut19 = document.getElementById("nourut19");
      nourut19.innerHTML = "15.";
      var nourut20 = document.getElementById("nourut20");
      nourut20.innerHTML = "16.";
      var nourut21 = document.getElementById("nourut21");
      nourut21.innerHTML = "17.";
    } else if ($(this).val() === "2" || $(this).val() === "5") {
      $("#bekerja").css("display", "none");
      $("#thp").css("display", "none");
      $("#lokasi").css("display", "none");
      $("#jeper").css("display", "none");
      $("#naper").css("display", "none");
      $("#jawir").css("display", "none");
      $("#tingker").css("display", "none");
      $("#stulanbiaya").css("display", "none");
      $("#stulantinggi").css("display", "none");
      $("#stulanprodi").css("display", "none");
      $("#stulanmasuk").css("display", "none");
      $("#habistu").css("display", "none");
      $("#tingpenses").css("display", "none");

      $(".jwbn2").attr("value", "00");
      $(".jwbn2").val("00");
      $(".jwbn3").attr("value", "00");
      $(".jwbn3").val("00");
      $(".jwbn4a option:selected").attr("value", "00");
      $(".jwbn4b option:selected").attr("value", "00");
      $(".jwbnsub5").attr("value", "00");
      $(".jwbnsub5").val("00");
      $(".jwbn6").attr("value", "00");
      $(".jwbn6").val("00");
      $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);

      $(".jwbn7 option:selected").attr("value", "00");
      $(".jwbn8 option:selected").attr("value", "00");
      $(".jwbn9a option:selected").attr("value", "00");
      $(".jwbn9b option:selected").attr("value", "00");
      $(".jwbn9c option:selected").attr("value", "00");
      $(".jwbn9d").attr("value", "00");
      $(".jwbn9d").val("00");
      $('input[name="jawaban[10][]"]').prop("checked", false);
      $(".jwbnsub10").attr("readonly", true);
      $(".jwbnsub10").attr("value", "00");
      $(".jwbnsub10").val("00");
      $(".jwbnsub10").css("color", "#f5f8fa");
      // $('input[name="jawaban[11][]"]').prop("checked", false);
      // $('input[name="jawaban[12][]"]').prop("checked", false);
      $("#habistu").find(':radio[name="jawaban[11][]"][value="00"]').prop("checked", true);
      $("#tingpenses").find(':radio[name="jawaban[12][]"][value="00"]').prop("checked", true);
      $('input[name="jawaban[13][7][]"]').prop("checked", false);
      $('input[name="jawaban[13][8][]"]').prop("checked", false);
      $('input[name="jawaban[13][9][]"]').prop("checked", false);
      $('input[name="jawaban[13][10][]"]').prop("checked", false);
      $('input[name="jawaban[13][11][]"]').prop("checked", false);
      $('input[name="jawaban[13][12][]"]').prop("checked", false);
      $('input[name="jawaban[13][13][]"]').prop("checked", false);
      $('input[name="jawaban[13][14][]"]').prop("checked", false);
      $('input[name="jawaban[13][15][]"]').prop("checked", false);
      $('input[name="jawaban[13][16][]"]').prop("checked", false);
      $('input[name="jawaban[13][17][]"]').prop("checked", false);
      $('input[name="jawaban[13][18][]"]').prop("checked", false);
      $('input[name="jawaban[13][19][]"]').prop("checked", false);
      $('input[name="jawaban[13][20][]"]').prop("checked", false);
      $('input[name="jawaban[14][21][]"]').prop("checked", false);
      $('input[name="jawaban[14][22][]"]').prop("checked", false);
      $('input[name="jawaban[14][23][]"]').prop("checked", false);
      $('input[name="jawaban[14][24][]"]').prop("checked", false);
      $('input[name="jawaban[14][25][]"]').prop("checked", false);
      $('input[name="jawaban[14][26][]"]').prop("checked", false);
      $('input[name="jawaban[14][27][]"]').prop("checked", false);
      $('input[name="samaran[15][]"]').prop("checked", false);
      $('input[name="jawaban[16][]"]').prop("checked", false);
      $('input[name="jawaban[20][]"]').prop("checked", false);
      $('input[name="jawaban[21][]"]').prop("checked", false);
      $(".jwbnsub21").attr("readonly", true);
      $(".jwbnsub21").attr("value", "00");
      $(".jwbnsub21").val("00");
      $(".jwbnsub21").css("color", "#f5f8fa");
      $(".jwbnsub20").attr("readonly", true);
      $(".jwbnsub20").attr("value", "00");
      $(".jwbnsub20").val("00");
      $(".jwbnsub20").css("color", "#f5f8fa");
      $(".jwbnsub161").attr("value", "00");
      $(".jwbnsub161").css("color", "#f5f8fa");
      $(".jwbn17").attr("value", "");
      $(".jwbn17").val("");
      $(".jwbn18").attr("value", "");
      $(".jwbn18").val("");
      $(".jwbn19").attr("value", "");
      $(".jwbn19").val("");

      $(".jwbnsub151").attr("readonly", true);
      $(".jwbnsub151").attr("value", "00");
      $(".jwbnsub151").val("00");
      $(".jwbnsub151").css("color", "#f5f8fa");
      $(".jwbnsub152").attr("readonly", true);
      $(".jwbnsub152").attr("value", "00");
      $(".jwbnsub152").val("00");
      $(".jwbnsub152").css("color", "#f5f8fa");

      var nourut10 = document.getElementById("nourut10");
      nourut10.innerHTML = "2.";
      // var nourut11 = document.getElementById("nourut11");
      // nourut11.innerHTML = "3.";
      // var nourut12 = document.getElementById("nourut12");
      // nourut12.innerHTML = "4.";
      var nourut13a = document.getElementById("nourut13a");
      nourut13a.innerHTML = "3a.";
      var nourut13b = document.getElementById("nourut13b");
      nourut13b.innerHTML = "3b.";
      var nourut14 = document.getElementById("nourut14");
      nourut14.innerHTML = "4.";
      var nourut15 = document.getElementById("nourut15");
      nourut15.innerHTML = "5.";
      var nourut16 = document.getElementById("nourut16");
      nourut16.innerHTML = "6.";
      var nourut17 = document.getElementById("nourut17");
      nourut17.innerHTML = "7.";
      var nourut18 = document.getElementById("nourut18");
      nourut18.innerHTML = "8.";
      var nourut19 = document.getElementById("nourut19");
      nourut19.innerHTML = "9.";
      var nourut20 = document.getElementById("nourut20");
      nourut20.innerHTML = "10.";
      var nourut21 = document.getElementById("nourut21");
      nourut21.innerHTML = "11.";
    } else {
      showPerti();
      showProdi();
      showSumberBiaya();
      $("#bekerja").css("display", "none");
      $("#thp").css("display", "none");
      $("#lokasi").css("display", "none");
      $("#jeper").css("display", "none");
      $("#naper").css("display", "none");
      $("#jawir").css("display", "none");
      $("#tingker").css("display", "none");
      $("#stulanbiaya").css("display", "block");
      $("#stulantinggi").css("display", "block");
      $("#stulanprodi").css("display", "block");
      $("#stulanmasuk").css("display", "block");
      $("#habistu").css("display", "none");
      $("#tingpenses").css("display", "none"); 

      $(".jwbn2").attr("value", "00");
      $(".jwbn2").val("00");
      $(".jwbn3").attr("value", "00");
      $(".jwbn3").val("00");
      $(".jwbn4a option:selected").attr("value", "00");
      $(".jwbn4b option:selected").attr("value", "00");
      $("#jeper")
        .find(':radio[name="jawaban[5][]"][value="00"]')
        .prop("checked", true);
      $(".jwbnsub5").attr("value", "00");
      $(".jwbn6").attr("value", "00");
      $(".jwbn6").val("00");
      $(".jwbn7 option:selected").attr("value", "00");
      $(".jwbn8 option:selected").attr("value", "00");
      $(".jwbn9a option:selected").attr("value", "");
      $(".jwbn9b option:selected").attr("value", "");
      $(".jwbn9c option:selected").attr("value", "");
      $(".jwbn9d").attr("value", "");
      $(".jwbn9d").val("");
      $('input[name="jawaban[10][]"]').prop("checked", false);
      $(".jwbnsub10").attr("readonly", true);
      $(".jwbnsub10").attr("value", "00");
      $(".jwbnsub10").val("00");
      $(".jwbnsub10").css("color", "#f5f8fa");
      // $('input[name="jawaban[11][]"]').prop("checked", false);
      // $('input[name="jawaban[12][]"]').prop("checked", false);
      $("#habistu").find(':radio[name="jawaban[11][]"][value="00"]').prop("checked", true);
      $("#tingpenses").find(':radio[name="jawaban[12][]"][value="00"]').prop("checked", true);
      $('input[name="jawaban[13][7][]"]').prop("checked", false);
      $('input[name="jawaban[13][8][]"]').prop("checked", false);
      $('input[name="jawaban[13][9][]"]').prop("checked", false);
      $('input[name="jawaban[13][10][]"]').prop("checked", false);
      $('input[name="jawaban[13][11][]"]').prop("checked", false);
      $('input[name="jawaban[13][12][]"]').prop("checked", false);
      $('input[name="jawaban[13][13][]"]').prop("checked", false);
      $('input[name="jawaban[13][14][]"]').prop("checked", false);
      $('input[name="jawaban[13][15][]"]').prop("checked", false);
      $('input[name="jawaban[13][16][]"]').prop("checked", false);
      $('input[name="jawaban[13][17][]"]').prop("checked", false);
      $('input[name="jawaban[13][18][]"]').prop("checked", false);
      $('input[name="jawaban[13][19][]"]').prop("checked", false);
      $('input[name="jawaban[13][20][]"]').prop("checked", false);
      $('input[name="jawaban[14][21][]"]').prop("checked", false);
      $('input[name="jawaban[14][22][]"]').prop("checked", false);
      $('input[name="jawaban[14][23][]"]').prop("checked", false);
      $('input[name="jawaban[14][24][]"]').prop("checked", false);
      $('input[name="jawaban[14][25][]"]').prop("checked", false);
      $('input[name="jawaban[14][26][]"]').prop("checked", false);
      $('input[name="jawaban[14][27][]"]').prop("checked", false);
      $('input[name="samaran[15][]"]').prop("checked", false);
      $('input[name="jawaban[16][]"]').prop("checked", false);
      $('input[name="jawaban[20][]"]').prop("checked", false);
      $('input[name="jawaban[21][]"]').prop("checked", false);
      $(".jwbnsub21").attr("readonly", true);
      $(".jwbnsub21").attr("value", "00");
      $(".jwbnsub21").val("00");
      $(".jwbnsub21").css("color", "#f5f8fa");
      $(".jwbnsub20").attr("readonly", true);
      $(".jwbnsub20").attr("value", "00");
      $(".jwbnsub20").val("00");
      $(".jwbnsub20").css("color", "#f5f8fa");
      $(".jwbnsub161").attr("value", "00");
      $(".jwbnsub161").css("color", "#f5f8fa");
      $(".jwbn17").attr("value", "");
      $(".jwbn17").val("");
      $(".jwbn18").attr("value", "");
      $(".jwbn18").val("");
      $(".jwbn19").attr("value", "");
      $(".jwbn19").val("");

      $(".jwbnsub151").attr("readonly", true);
      $(".jwbnsub151").attr("value", "00");
      $(".jwbnsub151").val("00");
      $(".jwbnsub151").css("color", "#f5f8fa");
      $(".jwbnsub152").attr("readonly", true);
      $(".jwbnsub152").attr("value", "00");
      $(".jwbnsub152").val("00");
      $(".jwbnsub152").css("color", "#f5f8fa");

      var nourut9 = document.getElementById("nourut9");
      nourut9.innerHTML = "2.";
      var nourut10 = document.getElementById("nourut10");
      nourut10.innerHTML = "3.";
      // var nourut11 = document.getElementById("nourut11");
      // nourut11.innerHTML = "4.";
      // var nourut12 = document.getElementById("nourut12");
      // nourut12.innerHTML = "5.";
      var nourut13a = document.getElementById("nourut13a");
      nourut13a.innerHTML = "4a.";
      var nourut13b = document.getElementById("nourut13b");
      nourut13b.innerHTML = "4b.";
      var nourut14 = document.getElementById("nourut14");
      nourut14.innerHTML = "5.";
      var nourut15 = document.getElementById("nourut15");
      nourut15.innerHTML = "6.";
      var nourut16 = document.getElementById("nourut16");
      nourut16.innerHTML = "7.";
      var nourut17 = document.getElementById("nourut17");
      nourut17.innerHTML = "8.";
      var nourut18 = document.getElementById("nourut18");
      nourut18.innerHTML = "9.";
      var nourut19 = document.getElementById("nourut19");
      nourut19.innerHTML = "10.";
      var nourut20 = document.getElementById("nourut20");
      nourut20.innerHTML = "11.";
      var nourut21 = document.getElementById("nourut21");
      nourut21.innerHTML = "12.";
    }
  });

  $("body").on("click", "#flexRadioBiaya", function (event) {
    var biaya = $(this).val();
    if (biaya === "28") {
      $(".jwbnsub10").attr("readonly", false);
      $(".jwbnsub10").attr("value", "");
      $(".jwbnsub10").val("");
      $(".jwbnsub10").css("color", "#5e6278");
      $(".jwbnsub10").focus();
    } else {
      $(".jwbnsub10").attr("readonly", true);
      $(".jwbnsub10").attr("value", "00");
      $(".jwbnsub10").val("00");
      $(".jwbnsub10").css("color", "#f5f8fa");
    }
  });

  $("body").on("click", "#flexRadioCaker", function (event) {
    var caker = $(this).val();
    $('#jwbn15').val(caker);
    if (caker === "143") {
      $(".jwbnsub151").attr("readonly", false);
      $(".jwbnsub151").attr("value", "");
      $(".jwbnsub151").val("");
      $(".jwbnsub151").css("color", "#5e6278");
      $(".jwbnsub151").focus();

      $(".jwbnsub152").attr("readonly", true);
      $(".jwbnsub152").attr("value", "00");
      $(".jwbnsub152").val("00");
      $(".jwbnsub152").css("color", "#f5f8fa");
    } else if (caker === "144") {
      $(".jwbnsub152").attr("readonly", false);
      $(".jwbnsub152").attr("value", "");
      $(".jwbnsub152").val("");
      $(".jwbnsub152").css("color", "#5e6278");
      $(".jwbnsub152").focus();

      $(".jwbnsub151").attr("readonly", true);
      $(".jwbnsub151").attr("value", "00");
      $(".jwbnsub151").val("00");
      $(".jwbnsub151").css("color", "#f5f8fa");
    }else{
        $(".jwbnsub151").attr("readonly", true);
        $(".jwbnsub151").attr("value", "00");
        $(".jwbnsub151").val("00");
        $(".jwbnsub151").css("color", "#f5f8fa");

        $(".jwbnsub152").attr("readonly", true);
        $(".jwbnsub152").attr("value", "00");
        $(".jwbnsub152").val("00");
        $(".jwbnsub152").css("color", "#f5f8fa");
    }
  });
  $("body").on("click", "#flexRadioBacape", function (event) {
    var bacape = $(this).val();
    if (bacape === "160") {
      var theStatus = $(this).prop("checked");
      if (theStatus) {
        $(".jwbnsub161").attr("readonly", false);
        $(".jwbnsub161").attr("value", "");
        $(".jwbnsub161").val("");
        $(".jwbnsub161").css("color", "#5e6278");
        $(".jwbnsub161").focus();
      } else {
        $(".jwbnsub161").attr("readonly", true);
        $(".jwbnsub161").attr("value", "00");
        $(".jwbnsub161").val("00");
        $(".jwbnsub161").css("color", "#f5f8fa");
      }
    }
  });
  $("body").on("click", "#flexRadioAktif", function (event) {
    var aktif = $(this).val();
    if (aktif === "165") {
      $(".jwbnsub20").attr("readonly", false);
      $(".jwbnsub20").attr("value", "");
      $(".jwbnsub20").val("");
      $(".jwbnsub20").css("color", "#5e6278");
      $(".jwbnsub20").focus();
    } else {
      $(".jwbnsub20").attr("readonly", true);
      $(".jwbnsub20").attr("value", "00");
      $(".jwbnsub20").val("00");
      $(".jwbnsub20").css("color", "#f5f8fa");
    }
  });
  $("body").on("click", "#flexRadioKesesuaian", function (event) {
    var sesuai = $(this).val();
    if (sesuai === "178") {
      var StatusSesuai = $(this).prop("checked");
      if (StatusSesuai) {
        $(".jwbnsub21").attr("readonly", false);
        $(".jwbnsub21").attr("value", "");
        $(".jwbnsub21").val("");
        $(".jwbnsub21").css("color", "#5e6278");
        $(".jwbnsub21").focus();
      } else {
        $(".jwbnsub21").attr("readonly", true);
        $(".jwbnsub21").attr("value", "00");
        $(".jwbnsub21").val("00");
        $(".jwbnsub21").css("color", "#f5f8fa");
      }
    }
  });
});
