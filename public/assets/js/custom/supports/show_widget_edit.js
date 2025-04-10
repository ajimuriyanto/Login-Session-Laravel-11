$(document).ready(function () {
    var inputVal = document.getElementById("myInput").value;
    var tracerId = document.getElementById("tracerId").value;

    if(inputVal === "0"){

    }else{
        var jawaban_1 = document.getElementById("jawaban_1").value;
        var idjwbn2 = document.getElementById("jwbn2").value;
        var idjwbn3 = document.getElementById("jwbn3").value;
        const idjwbn4a = document.getElementById("jwbn4a").value;
        const idjwbn4b = document.getElementById("jwbn4b").value;
        const idjwbn5 = document.getElementById("jwbn5").value;
        var idjwbnsub5 = document.getElementById("jwbnsub5").value;
        var idjwbn6 = document.getElementById("jwbn6").value;
        var idjwbn8 = document.getElementById("jwbn8").value;
        var idjwbn7 = document.getElementById("jwbn7").value;
        var idjwbn9a = document.getElementById("jwbn9a").value;
        var idjwbn9b = document.getElementById("jwbn9b").value;
        var idjwbn9c = document.getElementById("jwbn9c").value;
        var idjwbn9d = document.getElementById("jwbn9d").value;
        var idjwbn10 = document.getElementById("jwbn10").value;
        var idjwbnsub10 = document.getElementById("jwbnsub10").value;
        var idjwbn11 = document.getElementById("jwbn11").value;
        var idjwbn12 = document.getElementById("jwbn12").value;
        var idjwbn131 = document.getElementById("jwbn131").value;
        var idjwbn132 = document.getElementById("jwbn132").value;
        var idjwbn133 = document.getElementById("jwbn133").value;
        var idjwbn134 = document.getElementById("jwbn134").value;
        var idjwbn135 = document.getElementById("jwbn135").value;
        var idjwbn136 = document.getElementById("jwbn136").value;
        var idjwbn137 = document.getElementById("jwbn137").value;
        var idjwbn138 = document.getElementById("jwbn138").value;
        var idjwbn139 = document.getElementById("jwbn139").value;
        var idjwbn1310 = document.getElementById("jwbn1310").value;
        var idjwbn1311 = document.getElementById("jwbn1311").value;
        var idjwbn1312 = document.getElementById("jwbn1312").value;
        var idjwbn1313 = document.getElementById("jwbn1313").value;
        var idjwbn1314 = document.getElementById("jwbn1314").value;
        var idjwbn14a = document.getElementById("jwbn14a").value;
        var idjwbn14b = document.getElementById("jwbn14b").value;
        var idjwbn14c = document.getElementById("jwbn14c").value;
        var idjwbn14d = document.getElementById("jwbn14d").value;
        var idjwbn14e = document.getElementById("jwbn14e").value;
        var idjwbn14f = document.getElementById("jwbn14f").value;
        var idjwbn14g = document.getElementById("jwbn14g").value;
        var idjwbn15 = document.getElementById("jwbn15").value;
        var idjwbnsub15 = document.getElementById("jwbnsub15").value;
        var idjwbnsub16 = document.getElementById("jwbnsub16").value;
        var cekjwbn16 = document.getElementById("cekjwbn16").value;
        var idjwbn17 = document.getElementById("jwbn17").value;
        var idjwbn18 = document.getElementById("jwbn18").value;
        var idjwbn19 = document.getElementById("jwbn19").value;
        var idjwbn20 = document.getElementById("jwbn20").value;
        var idjwbnsub20 = document.getElementById("jwbnsub20").value;
        var idjwbnsub21 = document.getElementById("jwbnsub21").value;
        var cekjwbn21 = document.getElementById("cekjwbn21").value;        
        
        if(jawaban_1 === "1"){        
            $("#kerjaawal").css("display", "block");
            $("#swastaawal").css("display", "none"); 
            $("#thp").css("display", "block");
            $("#lokasi").css("display", "block");
            $("#lokkerja").css("display", "block");
            $("#lokswasta").css("display", "none");
            $("#jeper").css("display", "block");
            $("#naper").css("display", "block");
            $("#tingker").css("display", "block");
            $("#jawir").css("display", "none");
            $("#stulanbiaya").css("display", "none");
            $("#stulantinggi").css("display", "none");
            $("#stulanprodi").css("display", "none");
            $("#stulanmasuk").css("display", "none");
            $("#habistu").css("display", "block");
            $("#tingpenses").css("display", "block");

            showProvinsi(idjwbn4a);
            showKabupatenUpdate(idjwbn4a, idjwbn4b);
            showTingkatKerja(idjwbn8);            

            $("#jeper").find(':radio[name="jawaban[5][]"][value="'+idjwbn5+'"]').prop("checked", true);
            $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);

            $(".jwbn7 option:selected").attr("value", "00");
            $(".jwbn7 option:selected").attr("value", "00");
            $(".jwbn9a option:selected").attr("value", "00");
            $(".jwbn9a option:selected").attr("value", "00");
            $(".jwbn9b option:selected").attr("value", "00");
            $(".jwbn9b option:selected").attr("value", "00");
            $(".jwbn9c option:selected").attr("value", "00");
            $(".jwbn9c option:selected").attr("value", "00");
            $(".jwbn9d").attr("value", "00");
            $(".jwbn9d").val("00");
            $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", true);
            $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", true);

            if (idjwbn5 === "12") {
                if(!idjwbnsub5){
                    $(".jwbnsub5").attr("readonly", false);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbnsub5").css("color", "#5e6278");
                    $(".jwbnsub5").focus();
                }else{
                    $(".jwbnsub5").attr("readonly", false);
                    $(".jwbnsub5").attr("value", idjwbnsub5);
                    $(".jwbnsub5").val(idjwbnsub5);
                    $(".jwbnsub5").css("color", "#5e6278");
                    $(".jwbnsub5").focus(); 
                }                               
            }else{
                $(".jwbnsub5").attr("readonly", true);
                $(".jwbnsub5").attr("value", "00");
                $(".jwbnsub5").val("00");
                $(".jwbnsub5").css("color", "#f5f8fa");
            }                        

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
        }else if(jawaban_1 === "2"){
            $("#bekerja").css("display", "none"); 
            $("#thp").css("display", "none");
            $("#lokasi").css("display", "none");
            $("#lokkerja").css("display", "none");
            $("#lokswasta").css("display", "none");
            $("#jeper").css("display", "none");
            $("#naper").css("display", "none");
            $("#tingker").css("display", "none");
            $("#jawir").css("display", "none");
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
            $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
            $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);
            $(".jwbnsub5").attr("value", "00");
            $(".jwbnsub5").val("00");   
            $(".jwbn7 option:selected").attr("value", "00");
            $(".jwbn7 option:selected").attr("value", "00");     
            $(".jwbn6").attr("value", "00");
            $(".jwbn6").val("00");
            $(".jwbn8 option:selected").attr("value", "00");
            $(".jwbn8 option:selected").val("00");
            $(".jwbn9a option:selected").attr("value", "00");
            $(".jwbn9a option:selected").attr("value", "00");
            $(".jwbn9b option:selected").attr("value", "00");
            $(".jwbn9b option:selected").attr("value", "00");
            $(".jwbn9c option:selected").attr("value", "00");
            $(".jwbn9c option:selected").attr("value", "00");
            $(".jwbn9d").attr("value", "00");
            $(".jwbn9d").val("00");
            $("#habistu").find(':radio[name="jawaban[11][]"][value="00"]').prop("checked", true);
            $("#tingpenses").find(':radio[name="jawaban[12][]"][value="00"]').prop("checked", true);

            var nourut1 = document.getElementById("nourut1");
            nourut1.innerHTML = "1.";
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
        }else if(jawaban_1 === "3"){
            $("#thp").css("display", "block");
            $("#kerjaawal").css("display", "none");
            $("#swastaawal").css("display", "block");            
            $("#naper").css("display", "none");
            $("#lokkerja").css("display", "none");
            $("#lokswasta").css("display", "block");
            $("#jeper").css("display", "none");
            $("#tingker").css("display", "none");
            $("#jawir").css("display", "block");
            $("#stulanbiaya").css("display", "none");
            $("#stulantinggi").css("display", "none");
            $("#stulanprodi").css("display", "none");
            $("#stulanmasuk").css("display", "none");
            $("#habistu").css("display", "block");
            $("#tingpenses").css("display", "block");
            showProvinsi(idjwbn4a);
            showKabupatenUpdate(idjwbn4a, idjwbn4b);
            showJabatan(idjwbn7);
                        
            $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
            $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);
            $(".jwbnsub5").attr("value", "00");
            $(".jwbnsub5").val("00");        
            $(".jwbn6").attr("value", "00");
            $(".jwbn6").val("00");
            $(".jwbn7 option:selected").attr("value", "00");
            $(".jwbn7 option:selected").attr("value", "00");
            $(".jwbn8 option:selected").attr("value", "00");
            $(".jwbn8 option:selected").val("00");
            $(".jwbn9a option:selected").attr("value", "00");
            $(".jwbn9a option:selected").attr("value", "00");
            $(".jwbn9b option:selected").attr("value", "00");
            $(".jwbn9b option:selected").attr("value", "00");
            $(".jwbn9c option:selected").attr("value", "00");
            $(".jwbn9c option:selected").attr("value", "00");
            $(".jwbn9d").attr("value", "00");
            $(".jwbn9d").val("00");
            $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", true);
            $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", true);
            
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
            
        }else if(jawaban_1 === "4"){
            $("#bekerja").css("display", "none"); 
            $("#thp").css("display", "none");
            $("#lokasi").css("display", "none");
            $("#lokkerja").css("display", "none");
            $("#lokswasta").css("display", "none");
            $("#jeper").css("display", "none");
            $("#naper").css("display", "none");
            $("#tingker").css("display", "none");
            $("#jawir").css("display", "none");
            $("#stulanbiaya").css("display", "block");
            $("#stulantinggi").css("display", "block");
            $("#stulanprodi").css("display", "block");
            $("#stulanmasuk").css("display", "block");
            $("#habistu").css("display", "none");
            $("#tingpenses").css("display", "none");

            showSumberBiaya(idjwbn9a);
            showPerti(idjwbn9b);
            showProdiUpdate(idjwbn9b, idjwbn9c);
            $(".jwbn2").attr("value", "00");
            $(".jwbn2").val("00");
            $(".jwbn3").attr("value", "00");
            $(".jwbn3").val("00");
            $(".jwbn4a option:selected").attr("value", "00");
            $(".jwbn4b option:selected").attr("value", "00");
            $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
            $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);
            $(".jwbnsub5").attr("value", "00");
            $(".jwbnsub5").val("00");   
            $(".jwbn7 option:selected").attr("value", "00");
            $(".jwbn7 option:selected").attr("value", "00");     
            $(".jwbn6").attr("value", "00");
            $(".jwbn6").val("00");
            $(".jwbn8 option:selected").attr("value", "00");
            $(".jwbn8 option:selected").val("00");
            $("#habistu").find(':radio[name="jawaban[11][]"][value="00"]').prop("checked", true);
            $("#tingpenses").find(':radio[name="jawaban[12][]"][value="00"]').prop("checked", true);
            
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
        }else{
            $("#bekerja").css("display", "none"); 
            $("#thp").css("display", "none");
            $("#lokasi").css("display", "none");
            $("#lokkerja").css("display", "none");
            $("#lokswasta").css("display", "none");
            $("#jeper").css("display", "none");
            $("#naper").css("display", "none");
            $("#tingker").css("display", "none");
            $("#jawir").css("display", "none");
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
            $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
            $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);
            $(".jwbnsub5").attr("value", "00");
            $(".jwbnsub5").val("00");   
            $(".jwbn7 option:selected").attr("value", "00");
            $(".jwbn7 option:selected").attr("value", "00");     
            $(".jwbn6").attr("value", "00");
            $(".jwbn6").val("00");
            $(".jwbn8 option:selected").attr("value", "00");
            $(".jwbn8 option:selected").val("00");
            $(".jwbn9a option:selected").attr("value", "00");
            $(".jwbn9a option:selected").attr("value", "00");
            $(".jwbn9b option:selected").attr("value", "00");
            $(".jwbn9b option:selected").attr("value", "00");
            $(".jwbn9c option:selected").attr("value", "00");
            $(".jwbn9c option:selected").attr("value", "00");
            $(".jwbn9d").attr("value", "00");
            $(".jwbn9d").val("00");
            $("#habistu").find(':radio[name="jawaban[11][]"][value="00"]').prop("checked", true);
            $("#tingpenses").find(':radio[name="jawaban[12][]"][value="00"]').prop("checked", true);

            var nourut1 = document.getElementById("nourut1");
            nourut1.innerHTML = "1.";
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
        }

        showPertanyaan(tracerId);
        showPertanyaan21(tracerId);
        if (idjwbn10 === "28") {
            if(!idjwbnsub10){
                $(".jwbnsub10").attr("readonly", false);
                $(".jwbnsub10").attr("value", "00");
                $(".jwbnsub10").val("00");
                $(".jwbnsub10").css("color", "#5e6278");
                $(".jwbnsub10").focus();
            }else{
                $(".jwbnsub10").attr("readonly", false);
                $(".jwbnsub10").attr("value", idjwbnsub10);
                $(".jwbnsub10").val(idjwbnsub10);
                $(".jwbnsub10").css("color", "#5e6278");
                $(".jwbnsub10").focus();
            }                                
        }else{
            $(".jwbnsub10").attr("readonly", true);
            $(".jwbnsub10").attr("value", "00");
            $(".jwbnsub10").val("00");
            $(".jwbnsub10").css("color", "#f5f8fa");
        }
        $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", true);        
        $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", true);
        $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", true);
        $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", true);
        $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", true);
        $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", true);
        $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", true);
        $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", true);        
        $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", true);
        $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", true);
        $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", true);
        $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", true);
        $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", true);
        $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", true);
        $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", true);
        $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", true);
        $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", true);
        $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", true);
        $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", true);
        $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", true);
        $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", true);
        $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", true);
        $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", true);
        if(idjwbn15 === "144"){
            $(".jwbnsub152").attr("value", idjwbnsub15);
            $(".jwbnsub152").val(idjwbnsub15); 
            
            $(".jwbnsub151").attr("readonly", true);
            $(".jwbnsub151").attr("value", "00");
            $(".jwbnsub151").val("00");
            $(".jwbnsub151").css("color", "#f5f8fa");
        }else if(idjwbn15 === "143"){
            
            $(".jwbnsub151").attr("value", idjwbnsub15);
            $(".jwbnsub151").val(idjwbnsub15);

            $(".jwbnsub152").attr("readonly", true);
            $(".jwbnsub152").attr("value", "00");
            $(".jwbnsub152").val("00");
            $(".jwbnsub152").css("color", "#f5f8fa");
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
        
        if(cekjwbn16 === "0"){
            $(".jwbnsub16").attr("readonly", true);
            $(".jwbnsub16").attr("value", "00");
            $(".jwbnsub16").val("00");
            $(".jwbnsub16").css("color", "#f5f8fa");
        }
        
        if(cekjwbn21 === "0"){
            $(".jwbnsub21").attr("readonly", true);
            $(".jwbnsub21").attr("value", "00");
            $(".jwbnsub21").val("00");
            $(".jwbnsub21").css("color", "#f5f8fa");
        }

        if (idjwbn20 === "165") {
            if(!idjwbnsub20){
                $(".jwbnsub20").attr("readonly", false);
                $(".jwbnsub20").attr("value", "00");
                $(".jwbnsub20").val("00");
                $(".jwbnsub20").css("color", "#5e6278");
                $(".jwbnsub20").focus();
            }else{
                $(".jwbnsub20").attr("readonly", false);
                $(".jwbnsub20").attr("value", idjwbnsub20);
                $(".jwbnsub20").val(idjwbnsub20);
                $(".jwbnsub20").css("color", "#5e6278");
                $(".jwbnsub20").focus(); 
            }                               
        }else{
            $(".jwbnsub20").attr("readonly", true);
            $(".jwbnsub20").attr("value", "00");
            $(".jwbnsub20").val("00");
            $(".jwbnsub20").css("color", "#f5f8fa");
        }

        $("body").on("click", "#flexRadioChecked", function (event) {
            var jawaban_1_new = $(this).val();

            if(jawaban_1_new === "1"){                
                $("#bekerja").css("display", "block");
                $("#kerjaawal").css("display", "block");
                $("#swastaawal").css("display", "none");
                $("#thp").css("display", "block");
                $("#lokasi").css("display", "block");
                $("#lokkerja").css("display", "block");
                $("#lokswasta").css("display", "none");
                $("#jeper").css("display", "block");
                $("#naper").css("display", "block");
                $("#tingker").css("display", "block");
                $("#jawir").css("display", "none");
                $("#stulanbiaya").css("display", "none");
                $("#stulantinggi").css("display", "none");
                $("#stulanprodi").css("display", "none");
                $("#stulanmasuk").css("display", "none");
                $("#habistu").css("display", "block");
                $("#tingpenses").css("display", "block");

                if(jawaban_1_new === jawaban_1){
                    $(".jwbn2").attr("value", idjwbn2);
                    $('.jwbn2').val(idjwbn2);
                    $(".jwbn3").attr("value", idjwbn3);
                    $('.jwbn3').val(idjwbn3);
                    showProvinsi(idjwbn4a);  
                    showKabupatenUpdate(idjwbn4a, idjwbn4b);    
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="'+idjwbn5+'"]').prop("checked", true); 
                    if(!idjwbnsub5){
                        $(".jwbnsub5").attr("value", "00");
                        $(".jwbnsub5").val("00");
                    }else{
                        $(".jwbnsub5").attr("value", idjwbnsub5);
                        $(".jwbnsub5").val(idjwbnsub5); 
                    }
                    $(".jwbn6").attr("value", idjwbn6);
                    $('.jwbn6').val(idjwbn6);   
                    $(".jwbn7 option:selected").attr("value", "00");
                    $(".jwbn7 option:selected").val("00");
                    $(".jwbn8 option:selected").attr("value", idjwbn8);
                    $(".jwbn8 option:selected").val(idjwbn8);
                    $(".jwbn9a option:selected").attr("value", "00");
                    $(".jwbn9a option:selected").attr("value", "00");
                    $(".jwbn9b option:selected").attr("value", "00");
                    $(".jwbn9b option:selected").attr("value", "00");
                    $(".jwbn9c option:selected").attr("value", "00");
                    $(".jwbn9c option:selected").attr("value", "00");
                    $(".jwbn9d").attr("value", "00");
                    $(".jwbn9d").val("00");

                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", true);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", true);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", true); 
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", true);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", true);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", true);
                    showPertanyaan(tracerId);
                    showPertanyaan21(tracerId);
                    if(cekjwbn16 === "1"){
                        if(!idjwbnsub16){
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", "");
                            $(".jwbnsub16").val("");
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }else{
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", idjwbnsub16);
                            $(".jwbnsub16").val(idjwbnsub16);
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }
                    }else{
                        $(".jwbnsub16").attr("readonly", true);
                        $(".jwbnsub16").attr("value", "00");
                        $(".jwbnsub16").val("00");
                        $(".jwbnsub16").css("color", "#f5f8fa");
                    }
                    if(cekjwbn21 === "1"){
                        if(!idjwbnsub21){
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", "");
                            $(".jwbnsub21").val("");
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }else{
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", idjwbnsub16);
                            $(".jwbnsub21").val(idjwbnsub16);
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }
                    }else{
                        $(".jwbnsub21").attr("readonly", true);
                        $(".jwbnsub21").attr("value", "00");
                        $(".jwbnsub21").val("00");
                        $(".jwbnsub21").css("color", "#f5f8fa");
                    }
                    if (idjwbn10 === "28") {                        
                        if(!idjwbnsub10){
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", "00");
                            $(".jwbnsub10").val("00");
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }else{
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", idjwbnsub10);
                            $(".jwbnsub10").val(idjwbnsub10);
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }                    
                    }else{                        
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }

                    if(idjwbn15 === "143"){  
                        if(!idjwbnsub15){
                            $(".jwbnsub151").attr("readonly", true);
                            $(".jwbnsub151").attr("value", "00");
                            $(".jwbnsub151").val("00");
                            $(".jwbnsub151").css("color", "#f5f8fa");
                        } else{
                            $(".jwbnsub151").attr("readonly", false);
                            $(".jwbnsub151").attr("value", idjwbnsub15);
                            $(".jwbnsub151").val(idjwbnsub15);
                            $(".jwbnsub151").css("color", "#5e6278");
                            $(".jwbnsub151").focus();
                        }                                                                     
                    }else if(idjwbn15 === "144"){
                        if(!idjwbnsub15){
                            $(".jwbnsub152").attr("readonly", true);
                            $(".jwbnsub152").attr("value", "00");
                            $(".jwbnsub152").val("00");
                            $(".jwbnsub152").css("color", "#f5f8fa");
                        }else{
                            $(".jwbnsub152").attr("readonly", false);
                            $(".jwbnsub152").attr("value", idjwbnsub15);
                            $(".jwbnsub152").val(idjwbnsub15);
                            $(".jwbnsub152").css("color", "#5e6278");
                            $(".jwbnsub152").focus();
                        }                        
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

                    $(".jwbn17").attr("value", idjwbn17);
                    $('.jwbn17').val(idjwbn17);
                    $(".jwbn18").attr("value", idjwbn18);
                    $('.jwbn18').val(idjwbn18);
                    $(".jwbn19").attr("value", idjwbn19);
                    $('.jwbn19').val(idjwbn19);

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);

                    if (idjwbn20 === "165") {
                        if(!idjwbnsub20){
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", "");
                            $(".jwbnsub20").val("");
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }else{
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", idjwbnsub20);
                            $(".jwbnsub20").val(idjwbnsub20);
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }
                }else{
                    $(".jwbn2").attr("value", "");
                    $(".jwbn2").val("");
                    $(".jwbn3").attr("value", "");
                    $(".jwbn3").val("");
                    $(".jwbn3").attr("value", "");
                    $(".jwbn3").val("");
                    showProvinsi();
                    showKabupaten(); 
                    showTingkatKerja();
                    if(jawaban_1_new === "1"){
                        $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", false);
                        $(".jwbnsub5").attr("readonly", true);
                        $(".jwbnsub5").attr("value", "00");
                        $(".jwbnsub5").val("00");
                        $(".jwbnsub5").css("color", "#f5f8fa");
                        $(".jwbn6").attr("value", "");
                        $(".jwbn6").val("");
                    }else{
                        $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                        $(".jwbnsub5").attr("value", "00");
                        $(".jwbnsub5").val("00");
                        $(".jwbn6").attr("value", "00");
                        $(".jwbn6").val("00");
                    }
                    
                    $(".jwbn7 option:selected").attr("value", "00");
                    $(".jwbn7 option:selected").val("00");
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");
                    $(".jwbn9a option:selected").attr("value", "00");
                    $(".jwbn9a option:selected").attr("value", "00");
                    $(".jwbn9b option:selected").attr("value", "00");
                    $(".jwbn9b option:selected").attr("value", "00");
                    $(".jwbn9c option:selected").attr("value", "00");
                    $(".jwbn9c option:selected").attr("value", "00");
                    $(".jwbn9d").attr("value", "00");
                    $(".jwbn9d").val("00");
                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", false);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", false);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", false);

                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", false);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", false);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", false);
                    $('input[type="checkbox"][name="jawaban[16][]"]').prop('checked', false);
                    $(".jwbnsub16").attr("readonly", true);
                    $(".jwbnsub16").attr("value", "00");
                    $(".jwbnsub16").val("00");
                    $(".jwbnsub16").css("color", "#f5f8fa");

                    $(".jwbnsub10").attr("readonly", true);
                    $(".jwbnsub10").attr("value", "00");
                    $(".jwbnsub10").val("00");
                    $(".jwbnsub10").css("color", "#f5f8fa");

                    $(".jwbnsub151").attr("readonly", true);
                    $(".jwbnsub151").attr("value", "00");
                    $(".jwbnsub151").val("00");
                    $(".jwbnsub151").css("color", "#f5f8fa");

                    $(".jwbnsub152").attr("readonly", true);
                    $(".jwbnsub152").attr("value", "00");
                    $(".jwbnsub152").val("00");
                    $(".jwbnsub152").css("color", "#f5f8fa");

                    $(".jwbn17").attr("value", "");
                    $('.jwbn17').val("");
                    $(".jwbn18").attr("value", "");
                    $('.jwbn18').val("");
                    $(".jwbn19").attr("value", "");
                    $('.jwbn19').val("");

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", false);
                    
                    $(".jwbnsub20").attr("readonly", true);
                    $(".jwbnsub20").attr("value", "00");
                    $(".jwbnsub20").val("00");
                    $(".jwbnsub20").css("color", "#f5f8fa");

                    $('input[type="checkbox"][name="jawaban[21][]"]').prop('checked', false);

                    $(".jwbnsub21").attr("readonly", true);
                    $(".jwbnsub21").attr("value", "00");
                    $(".jwbnsub21").val("00");
                    $(".jwbnsub21").css("color", "#f5f8fa");
                }
            }else if(jawaban_1_new === "2"){
                $("#bekerja").css("display", "none");
                $("#thp").css("display", "none");
                $("#lokasi").css("display", "none");
                $("#lokkerja").css("display", "none");
                $("#lokswasta").css("display", "none");
                $("#jeper").css("display", "none");
                $("#naper").css("display", "none");
                $("#tingker").css("display", "none");
                $("#jawir").css("display", "none");
                $("#stulanbiaya").css("display", "none");
                $("#stulantinggi").css("display", "none");
                $("#stulanprodi").css("display", "none");
                $("#stulanmasuk").css("display", "none");
                $("#habistu").css("display", "none");
                $("#tingpenses").css("display", "none");

                if(jawaban_1_new === jawaban_1){
                    $(".jwbn2").attr("value", "00");
                    $(".jwbn2").val("00");
                    $(".jwbn3").attr("value", "00");
                    $(".jwbn3").val("00");
                    $(".jwbn4a option:selected").attr("value", "00");
                    $(".jwbn4b option:selected").attr("value", "00");
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbn6").attr("value", "00");
                    $(".jwbn6").val("00");
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");                    
                    $(".jwbn9d").attr("value", "00");
                    $(".jwbn9d").val("00");
                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", true);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", true);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", true);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", true);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", true);
                    showPertanyaan(tracerId);
                    if(cekjwbn16 === ""){
                        if(!idjwbnsub16){
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", "");
                            $(".jwbnsub16").val("");
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }else{
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", idjwbnsub16);
                            $(".jwbnsub16").val(idjwbnsub16);
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }
                    }else{
                        $(".jwbnsub16").attr("readonly", true);
                        $(".jwbnsub16").attr("value", "00");
                        $(".jwbnsub16").val("00");
                        $(".jwbnsub16").css("color", "#f5f8fa");
                    }
                    
                    showPertanyaan21(tracerId);
                    if(cekjwbn21 === "1"){
                        if(!idjwbnsub21){
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", "");
                            $(".jwbnsub21").val("");
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }else{
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", idjwbnsub16);
                            $(".jwbnsub21").val(idjwbnsub16);
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }
                    }else{
                        $(".jwbnsub21").attr("readonly", true);
                        $(".jwbnsub21").attr("value", "00");
                        $(".jwbnsub21").val("00");
                        $(".jwbnsub21").css("color", "#f5f8fa");
                    }

                    if (idjwbn10 === "28") {
                        if(!idjwbnsub10){
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", "00");
                            $(".jwbnsub10").val("00");
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }else{
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", idjwbnsub10);
                            $(".jwbnsub10").val(idjwbnsub10);
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }

                    if(idjwbn15 === "143"){  
                        if(!idjwbnsub15){
                            $(".jwbnsub151").attr("readonly", true);
                            $(".jwbnsub151").attr("value", "00");
                            $(".jwbnsub151").val("00");
                            $(".jwbnsub151").css("color", "#f5f8fa");
                        } else{
                            $(".jwbnsub151").attr("readonly", false);
                            $(".jwbnsub151").attr("value", idjwbnsub15);
                            $(".jwbnsub151").val(idjwbnsub15);
                            $(".jwbnsub151").css("color", "#5e6278");
                            $(".jwbnsub151").focus();
                        }                                                                     
                    }else if(idjwbn15 === "144"){
                        if(!idjwbnsub15){
                            $(".jwbnsub152").attr("readonly", true);
                            $(".jwbnsub152").attr("value", "00");
                            $(".jwbnsub152").val("00");
                            $(".jwbnsub152").css("color", "#f5f8fa");
                        }else{
                            $(".jwbnsub152").attr("readonly", false);
                            $(".jwbnsub152").attr("value", idjwbnsub15);
                            $(".jwbnsub152").val(idjwbnsub15);
                            $(".jwbnsub152").css("color", "#5e6278");
                            $(".jwbnsub152").focus();
                        }                        
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

                    $(".jwbn17").attr("value", idjwbn17);
                    $('.jwbn17').val(idjwbn17);
                    $(".jwbn18").attr("value", idjwbn18);
                    $('.jwbn18').val(idjwbn18);
                    $(".jwbn19").attr("value", idjwbn19);
                    $('.jwbn19').val(idjwbn19);

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);

                    if (idjwbn20 === "165") {
                        if(!idjwbnsub20){
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", "");
                            $(".jwbnsub20").val("");
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }else{
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", idjwbnsub20);
                            $(".jwbnsub20").val(idjwbnsub20);
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }
                }else{                   
                    $(".jwbn2").attr("value", "00");
                    $(".jwbn2").val("00");
                    $(".jwbn3").attr("value", "00");
                    $(".jwbn3").val("00");
                    $(".jwbn4a option:selected").attr("value", "00");
                    $(".jwbn4b option:selected").attr("value", "00");
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbn6").attr("value", "00");
                    $(".jwbn6").val("00");
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");
                    $(".jwbn9d").attr("value", "");
                    $(".jwbn9d").val("");
                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", false);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", false);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", false);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", false);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", false);
                    $('input[type="checkbox"][name="jawaban[16][]"]').prop('checked', false);
                    $(".jwbnsub16").attr("readonly", true);
                    $(".jwbnsub16").attr("value", "00");
                    $(".jwbnsub16").val("00");
                    $(".jwbnsub16").css("color", "#f5f8fa");

                    $(".jwbnsub10").attr("readonly", true);
                    $(".jwbnsub10").attr("value", "00");
                    $(".jwbnsub10").val("00");
                    $(".jwbnsub10").css("color", "#f5f8fa");

                    $(".jwbnsub151").attr("readonly", true);
                    $(".jwbnsub151").attr("value", "00");
                    $(".jwbnsub151").val("00");
                    $(".jwbnsub151").css("color", "#f5f8fa");

                    $(".jwbnsub152").attr("readonly", true);
                    $(".jwbnsub152").attr("value", "00");
                    $(".jwbnsub152").val("00");
                    $(".jwbnsub152").css("color", "#f5f8fa");
                    
                    $(".jwbn17").attr("value", "");
                    $('.jwbn17').val("");
                    $(".jwbn18").attr("value", "");
                    $('.jwbn18').val("");
                    $(".jwbn19").attr("value", "");
                    $('.jwbn19').val("");

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", false);
                    $(".jwbnsub20").attr("readonly", true);
                    $(".jwbnsub20").attr("value", "00");
                    $(".jwbnsub20").val("00");
                    $(".jwbnsub20").css("color", "#f5f8fa");

                    $('input[type="checkbox"][name="jawaban[21][]"]').prop('checked', false);

                    $(".jwbnsub21").attr("readonly", true);
                    $(".jwbnsub21").attr("value", "00");
                    $(".jwbnsub21").val("00");
                    $(".jwbnsub21").css("color", "#f5f8fa");
                }

                var nourut1 = document.getElementById("nourut1");
                nourut1.innerHTML = "1.";
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
            }else if(jawaban_1_new === "3"){
                $("#bekerja").css("display", "block");
                $("#kerjaawal").css("display", "none");
                $("#swastaawal").css("display", "block");
                $("#thp").css("display", "block");
                $("#lokasi").css("display", "block");
                $("#lokkerja").css("display", "none");
                $("#lokswasta").css("display", "block");
                $("#jeper").css("display", "none");
                $("#naper").css("display", "none");
                $("#tingker").css("display", "none");
                $("#jawir").css("display", "block");
                $("#stulanbiaya").css("display", "none");
                $("#stulantinggi").css("display", "none");
                $("#stulanprodi").css("display", "none");
                $("#stulanmasuk").css("display", "none");
                $("#habistu").css("display", "block");
                $("#tingpenses").css("display", "block");
                
                if(jawaban_1_new === jawaban_1){
                    $('.jwbn2').val(idjwbn2);
                    $('.jwbn3').val(idjwbn3);
                    showProvinsi(idjwbn4a);  
                    showKabupatenUpdate(idjwbn4a, idjwbn4b); 
                    showJabatan(idjwbn7);
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbn6").attr("value", "00");
                    $(".jwbn6").val("00");
                    $(".jwbn7 option:selected").attr("value", idjwbn7);
                    $(".jwbn7 option:selected").val(idjwbn7);
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");
                    $(".jwbn9a option:selected").attr("value", "00");
                    $(".jwbn9a option:selected").attr("value", "00");
                    $(".jwbn9b option:selected").attr("value", "00");
                    $(".jwbn9b option:selected").attr("value", "00");
                    $(".jwbn9c option:selected").attr("value", "00");
                    $(".jwbn9c option:selected").attr("value", "00");
                    $(".jwbn9d").attr("value", "00");
                    $(".jwbn9d").val("00");

                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", true);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", true);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", true);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", true);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", true);
                    showPertanyaan(tracerId);
                    if(cekjwbn16 === ""){
                        if(!idjwbnsub16){
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", "");
                            $(".jwbnsub16").val("");
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }else{
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", idjwbnsub16);
                            $(".jwbnsub16").val(idjwbnsub16);
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }
                    }else{
                        $(".jwbnsub16").attr("readonly", true);
                        $(".jwbnsub16").attr("value", "00");
                        $(".jwbnsub16").val("00");
                        $(".jwbnsub16").css("color", "#f5f8fa");
                    }

                    showPertanyaan21(tracerId);
                    if(cekjwbn21 === "1"){
                        if(!idjwbnsub21){
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", "");
                            $(".jwbnsub21").val("");
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }else{
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", idjwbnsub16);
                            $(".jwbnsub21").val(idjwbnsub16);
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }
                    }else{
                        $(".jwbnsub21").attr("readonly", true);
                        $(".jwbnsub21").attr("value", "00");
                        $(".jwbnsub21").val("00");
                        $(".jwbnsub21").css("color", "#f5f8fa");
                    }

                    if (idjwbn10 === "28") {
                        if(!idjwbnsub10){
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", "");
                            $(".jwbnsub10").val("");
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }else{
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", idjwbnsub10);
                            $(".jwbnsub10").val(idjwbnsub10);
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }

                    if(idjwbn15 === "143"){  
                        if(!idjwbnsub15){
                            $(".jwbnsub151").attr("readonly", true);
                            $(".jwbnsub151").attr("value", "00");
                            $(".jwbnsub151").val("00");
                            $(".jwbnsub151").css("color", "#f5f8fa");
                        } else{
                            $(".jwbnsub151").attr("readonly", false);
                            $(".jwbnsub151").attr("value", idjwbnsub15);
                            $(".jwbnsub151").val(idjwbnsub15);
                            $(".jwbnsub151").css("color", "#5e6278");
                            $(".jwbnsub151").focus();
                        }                                                                     
                    }else if(idjwbn15 === "144"){
                        
                        if(!idjwbnsub15){
                            $(".jwbnsub152").attr("readonly", true);
                            $(".jwbnsub152").attr("value", "00");
                            $(".jwbnsub152").val("00");
                            $(".jwbnsub152").css("color", "#f5f8fa");
                        }else{
                            $(".jwbnsub152").attr("readonly", false);
                            $(".jwbnsub152").attr("value", idjwbnsub15);
                            $(".jwbnsub152").val(idjwbnsub15);
                            $(".jwbnsub152").css("color", "#5e6278");
                            $(".jwbnsub152").focus();
                        }                        
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

                    $(".jwbn17").attr("value", idjwbn17);
                    $('.jwbn17').val(idjwbn17);
                    $(".jwbn18").attr("value", idjwbn18);
                    $('.jwbn18').val(idjwbn18);
                    $(".jwbn19").attr("value", idjwbn19);
                    $('.jwbn19').val(idjwbn19);

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);

                    if (idjwbn20 === "165") {
                        if(!idjwbnsub20){
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", "");
                            $(".jwbnsub20").val("");
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }else{
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", idjwbnsub20);
                            $(".jwbnsub20").val(idjwbnsub20);
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }

                }else{                   
                    $(".jwbn2").attr("value", "");
                    $(".jwbn2").val("");
                    $(".jwbn3").attr("value", "");
                    $(".jwbn3").val("");
                    showProvinsi();
                    showKabupaten();
                    showJabatan();
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbn6").attr("value", "00");
                    $(".jwbn6").val("00");
                    $(".jwbn7 option:selected").attr("value", "00");
                    $(".jwbn7 option:selected").val("00");
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");                    
                    $(".jwbn9a option:selected").attr("value", "00");
                    $(".jwbn9a option:selected").attr("value", "00");
                    $(".jwbn9b option:selected").attr("value", "00");
                    $(".jwbn9b option:selected").attr("value", "00");
                    $(".jwbn9c option:selected").attr("value", "00");
                    $(".jwbn9c option:selected").attr("value", "00");
                    $(".jwbn9d").attr("value", "00");
                    $(".jwbn9d").val("00");
                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", false); 
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", false);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", false);  
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", false);                     
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", false);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", false);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", false);
                    $('input[type="checkbox"][name="jawaban[16][]"]').prop('checked', false);
                    
                    $(".jwbnsub16").attr("readonly", true);
                    $(".jwbnsub16").attr("value", "00");
                    $(".jwbnsub16").val("00");
                    $(".jwbnsub16").css("color", "#f5f8fa");                                                           

                    $(".jwbnsub10").attr("readonly", true);
                    $(".jwbnsub10").attr("value", "00");
                    $(".jwbnsub10").val("00");
                    $(".jwbnsub10").css("color", "#f5f8fa");

                    $(".jwbnsub151").attr("readonly", true);
                    $(".jwbnsub151").attr("value", "00");
                    $(".jwbnsub151").val("00");
                    $(".jwbnsub151").css("color", "#f5f8fa");

                    $(".jwbnsub152").attr("readonly", true);
                    $(".jwbnsub152").attr("value", "00");
                    $(".jwbnsub152").val("00");
                    $(".jwbnsub152").css("color", "#f5f8fa");

                    $(".jwbn17").attr("value", "");
                    $('.jwbn17').val("");
                    $(".jwbn18").attr("value", "");
                    $('.jwbn18').val("");
                    $(".jwbn19").attr("value", "");
                    $('.jwbn19').val("");
                    
                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", false);
                    $(".jwbnsub20").attr("readonly", true);
                    $(".jwbnsub20").attr("value", "00");
                    $(".jwbnsub20").val("00");
                    $(".jwbnsub20").css("color", "#f5f8fa");

                    $('input[type="checkbox"][name="jawaban[21][]"]').prop('checked', false);

                    $(".jwbnsub21").attr("readonly", true);
                    $(".jwbnsub21").attr("value", "00");
                    $(".jwbnsub21").val("00");
                    $(".jwbnsub21").css("color", "#f5f8fa");

                }

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
            }else if(jawaban_1_new === "4"){
                $("#bekerja").css("display", "none");
                $("#thp").css("display", "none");
                $("#lokasi").css("display", "none");
                $("#lokkerja").css("display", "none");
                $("#lokswasta").css("display", "none");
                $("#jeper").css("display", "none");
                $("#naper").css("display", "none");
                $("#tingker").css("display", "none");
                $("#jawir").css("display", "none");
                $("#stulanbiaya").css("display", "block");
                $("#stulantinggi").css("display", "block");
                $("#stulanprodi").css("display", "block");
                $("#stulanmasuk").css("display", "block");
                $("#habistu").css("display", "none");
                $("#tingpenses").css("display", "none");

                if(jawaban_1_new === jawaban_1){
                    showSumberBiaya(idjwbn9a);
                    showPerti(idjwbn9b);
                    $(".jwbn2").attr("value", "00");
                    $(".jwbn2").val("00");
                    $(".jwbn3").attr("value", "00");
                    $(".jwbn3").val("00");
                    $(".jwbn4a option:selected").attr("value", "00");
                    $(".jwbn4b option:selected").attr("value", "00");
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbn6").attr("value", "00");
                    $(".jwbn6").val("00");
                    $(".jwbn7 option:selected").attr("value", "00");
                    $(".jwbn7 option:selected").val("00");
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");                    
                    $(".jwbn9d").attr("value", idjwbn9d);
                    $(".jwbn9d").val(idjwbn9d);
                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", true);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", true);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", true);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", true);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", true);
                    showPertanyaan(tracerId);
                    if(cekjwbn16 === ""){
                        if(!idjwbnsub16){
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", "");
                            $(".jwbnsub16").val("");
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }else{
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", idjwbnsub16);
                            $(".jwbnsub16").val(idjwbnsub16);
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }
                    }else{
                        $(".jwbnsub16").attr("readonly", true);
                        $(".jwbnsub16").attr("value", "00");
                        $(".jwbnsub16").val("00");
                        $(".jwbnsub16").css("color", "#f5f8fa");
                    }

                    showPertanyaan21(tracerId);
                    if(cekjwbn21 === "1"){
                        if(!idjwbnsub21){
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", "");
                            $(".jwbnsub21").val("");
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }else{
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", idjwbnsub16);
                            $(".jwbnsub21").val(idjwbnsub16);
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }
                    }else{
                        $(".jwbnsub21").attr("readonly", true);
                        $(".jwbnsub21").attr("value", "00");
                        $(".jwbnsub21").val("00");
                        $(".jwbnsub21").css("color", "#f5f8fa");
                    }

                    if (idjwbn10 === "28") {
                        if(!idjwbnsub10){
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", "00");
                            $(".jwbnsub10").val("00");
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }else{
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", idjwbnsub10);
                            $(".jwbnsub10").val(idjwbnsub10);
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }   
                    
                    if(idjwbn15 === "143"){  
                        if(!idjwbnsub15){
                            $(".jwbnsub151").attr("readonly", true);
                            $(".jwbnsub151").attr("value", "00");
                            $(".jwbnsub151").val("00");
                            $(".jwbnsub151").css("color", "#f5f8fa");
                        } else{
                            $(".jwbnsub151").attr("readonly", false);
                            $(".jwbnsub151").attr("value", idjwbnsub15);
                            $(".jwbnsub151").val(idjwbnsub15);
                            $(".jwbnsub151").css("color", "#5e6278");
                            $(".jwbnsub151").focus();
                        }                                                                     
                    }else if(idjwbn15 === "144"){
                        if(!idjwbnsub15){
                            $(".jwbnsub152").attr("readonly", true);
                            $(".jwbnsub152").attr("value", "00");
                            $(".jwbnsub152").val("00");
                            $(".jwbnsub152").css("color", "#f5f8fa");
                        }else{
                            $(".jwbnsub152").attr("readonly", false);
                            $(".jwbnsub152").attr("value", idjwbnsub15);
                            $(".jwbnsub152").val(idjwbnsub15);
                            $(".jwbnsub152").css("color", "#5e6278");
                            $(".jwbnsub152").focus();
                        }                        
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

                    $(".jwbn17").attr("value", idjwbn17);
                    $('.jwbn17').val(idjwbn17);
                    $(".jwbn18").attr("value", idjwbn18);
                    $('.jwbn18').val(idjwbn18);
                    $(".jwbn19").attr("value", idjwbn19);
                    $('.jwbn19').val(idjwbn19);

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);

                    if (idjwbn20 === "165") {
                        if(!idjwbnsub20){
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", "");
                            $(".jwbnsub20").val("");
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }else{
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", idjwbnsub20);
                            $(".jwbnsub20").val(idjwbnsub20);
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }

                }else{
                    $(".jwbn2").attr("value", "00");
                    $(".jwbn2").val("00");
                    $(".jwbn3").attr("value", "00");
                    $(".jwbn3").val("00");
                    $(".jwbn4a option:selected").attr("value", "00");
                    $(".jwbn4b option:selected").attr("value", "00");
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbn6").attr("value", "00");
                    $(".jwbn6").val("00");
                    $(".jwbn7 option:selected").attr("value", "00");
                    $(".jwbn7 option:selected").val("00");
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");                    
                    $(".jwbn9d").attr("value", "");
                    $(".jwbn9d").val("");
                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", false);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", false);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", false);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", false);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", false);
                    $('input[type="checkbox"][name="jawaban[16][]"]').prop('checked', false);
                    $(".jwbnsub16").attr("readonly", true);
                    $(".jwbnsub16").attr("value", "00");
                    $(".jwbnsub16").val("00");
                    $(".jwbnsub16").css("color", "#f5f8fa");

                    $(".jwbnsub10").attr("readonly", true);
                    $(".jwbnsub10").attr("value", "00");
                    $(".jwbnsub10").val("00");
                    $(".jwbnsub10").css("color", "#f5f8fa");

                    $(".jwbnsub151").attr("readonly", true);
                    $(".jwbnsub151").attr("value", "00");
                    $(".jwbnsub151").val("00");
                    $(".jwbnsub151").css("color", "#f5f8fa");

                    $(".jwbnsub152").attr("readonly", true);
                    $(".jwbnsub152").attr("value", "00");
                    $(".jwbnsub152").val("00");
                    $(".jwbnsub152").css("color", "#f5f8fa");

                    $(".jwbn17").attr("value", "");
                    $('.jwbn17').val("");
                    $(".jwbn18").attr("value", "");
                    $('.jwbn18').val("");
                    $(".jwbn19").attr("value", "");
                    $('.jwbn19').val("");

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", false);
                    $(".jwbnsub20").attr("readonly", true);
                    $(".jwbnsub20").attr("value", "00");
                    $(".jwbnsub20").val("00");
                    $(".jwbnsub20").css("color", "#f5f8fa");

                    $('input[type="checkbox"][name="jawaban[21][]"]').prop('checked', false);

                    $(".jwbnsub21").attr("readonly", true);
                    $(".jwbnsub21").attr("value", "00");
                    $(".jwbnsub21").val("00");
                    $(".jwbnsub21").css("color", "#f5f8fa");
                }
            }else{
                $("#bekerja").css("display", "none");
                $("#thp").css("display", "none");
                $("#lokasi").css("display", "none");
                $("#lokkerja").css("display", "none");
                $("#lokswasta").css("display", "none");
                $("#jeper").css("display", "none");
                $("#naper").css("display", "none");
                $("#tingker").css("display", "none");
                $("#jawir").css("display", "none");
                $("#stulanbiaya").css("display", "none");
                $("#stulantinggi").css("display", "none");
                $("#stulanprodi").css("display", "none");
                $("#stulanmasuk").css("display", "none");
                $("#habistu").css("display", "none");
                $("#tingpenses").css("display", "none");
                if(jawaban_1_new === jawaban_1){
                    $(".jwbn2").attr("value", "00");
                    $(".jwbn2").val("00");
                    $(".jwbn3").attr("value", "00");
                    $(".jwbn3").val("00");
                    $(".jwbn4a option:selected").attr("value", "00");
                    $(".jwbn4b option:selected").attr("value", "00");
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbn6").attr("value", "00");
                    $(".jwbn6").val("00");
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");                    
                    $(".jwbn9d").attr("value", "00");
                    $(".jwbn9d").val("00");
                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", true);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", true);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", true);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", true);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", true);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", true);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", true);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", true);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", true);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", true);
                    showPertanyaan(tracerId);
                    if(cekjwbn16 === ""){
                        if(!idjwbnsub16){
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", "");
                            $(".jwbnsub16").val("");
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }else{
                            $(".jwbnsub16").attr("readonly", false);
                            $(".jwbnsub16").attr("value", idjwbnsub16);
                            $(".jwbnsub16").val(idjwbnsub16);
                            $(".jwbnsub16").css("color", "#5e6278");
                            $(".jwbnsub16").focus();
                        }
                    }else{
                        $(".jwbnsub16").attr("readonly", true);
                        $(".jwbnsub16").attr("value", "00");
                        $(".jwbnsub16").val("00");
                        $(".jwbnsub16").css("color", "#f5f8fa");
                    }
                    
                    showPertanyaan21(tracerId);
                    if(cekjwbn21 === "1"){
                        if(!idjwbnsub21){
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", "");
                            $(".jwbnsub21").val("");
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }else{
                            $(".jwbnsub21").attr("readonly", false);
                            $(".jwbnsub21").attr("value", idjwbnsub16);
                            $(".jwbnsub21").val(idjwbnsub16);
                            $(".jwbnsub21").css("color", "#5e6278");
                            $(".jwbnsub21").focus();
                        }
                    }else{
                        $(".jwbnsub21").attr("readonly", true);
                        $(".jwbnsub21").attr("value", "00");
                        $(".jwbnsub21").val("00");
                        $(".jwbnsub21").css("color", "#f5f8fa");
                    }

                    if (idjwbn10 === "28") {
                        if(!idjwbnsub10){
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", "00");
                            $(".jwbnsub10").val("00");
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }else{
                            $(".jwbnsub10").attr("readonly", false);
                            $(".jwbnsub10").attr("value", idjwbnsub10);
                            $(".jwbnsub10").val(idjwbnsub10);
                            $(".jwbnsub10").css("color", "#5e6278");
                            $(".jwbnsub10").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }

                    if(idjwbn15 === "143"){  
                        if(!idjwbnsub15){
                            $(".jwbnsub151").attr("readonly", true);
                            $(".jwbnsub151").attr("value", "00");
                            $(".jwbnsub151").val("00");
                            $(".jwbnsub151").css("color", "#f5f8fa");
                        } else{
                            $(".jwbnsub151").attr("readonly", false);
                            $(".jwbnsub151").attr("value", idjwbnsub15);
                            $(".jwbnsub151").val(idjwbnsub15);
                            $(".jwbnsub151").css("color", "#5e6278");
                            $(".jwbnsub151").focus();
                        }                                                                     
                    }else if(idjwbn15 === "144"){
                        if(!idjwbnsub15){
                            $(".jwbnsub152").attr("readonly", true);
                            $(".jwbnsub152").attr("value", "00");
                            $(".jwbnsub152").val("00");
                            $(".jwbnsub152").css("color", "#f5f8fa");
                        }else{
                            $(".jwbnsub152").attr("readonly", false);
                            $(".jwbnsub152").attr("value", idjwbnsub15);
                            $(".jwbnsub152").val(idjwbnsub15);
                            $(".jwbnsub152").css("color", "#5e6278");
                            $(".jwbnsub152").focus();
                        }                        
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

                    $(".jwbn17").attr("value", idjwbn17);
                    $('.jwbn17').val(idjwbn17);
                    $(".jwbn18").attr("value", idjwbn18);
                    $('.jwbn18').val(idjwbn18);
                    $(".jwbn19").attr("value", idjwbn19);
                    $('.jwbn19').val(idjwbn19);

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", true);

                    if (idjwbn20 === "165") {
                        if(!idjwbnsub20){
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", "");
                            $(".jwbnsub20").val("");
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }else{
                            $(".jwbnsub20").attr("readonly", false);
                            $(".jwbnsub20").attr("value", idjwbnsub20);
                            $(".jwbnsub20").val(idjwbnsub20);
                            $(".jwbnsub20").css("color", "#5e6278");
                            $(".jwbnsub20").focus();
                        }                    
                    }else{
                        $(".jwbnsub10").attr("readonly", true);
                        $(".jwbnsub10").attr("value", "00");
                        $(".jwbnsub10").val("00");
                        $(".jwbnsub10").css("color", "#f5f8fa");
                    }
                }else{                   
                    $(".jwbn2").attr("value", "00");
                    $(".jwbn2").val("00");
                    $(".jwbn3").attr("value", "00");
                    $(".jwbn3").val("00");
                    $(".jwbn4a option:selected").attr("value", "00");
                    $(".jwbn4b option:selected").attr("value", "00");
                    $("#jeper").find(':radio[name="jawaban[5][]"][value="00"]').prop("checked", true);
                    $(".jwbnsub5").attr("value", "00");
                    $(".jwbnsub5").val("00");
                    $(".jwbn6").attr("value", "00");
                    $(".jwbn6").val("00");
                    $(".jwbn8 option:selected").attr("value", "00");
                    $(".jwbn8 option:selected").val("00");
                    $(".jwbn9d").attr("value", "");
                    $(".jwbn9d").val("");
                    $("#sumberdana").find(':radio[name="jawaban[10][]"][value="'+idjwbn10+'"]').prop("checked", false);
                    $("#habistu").find(':radio[name="jawaban[11][]"][value="'+idjwbn11+'"]').prop("checked", false);
                    $("#tingpenses").find(':radio[name="jawaban[12][]"][value="'+idjwbn12+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][7][]"][value="'+idjwbn131+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][8][]"][value="'+idjwbn132+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][9][]"][value="'+idjwbn133+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][10][]"][value="'+idjwbn134+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][11][]"][value="'+idjwbn135+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][12][]"][value="'+idjwbn136+'"]').prop("checked", false);
                    $("#komkua").find(':radio[name="jawaban[13][13][]"][value="'+idjwbn137+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][14][]"][value="'+idjwbn138+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][15][]"][value="'+idjwbn139+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][16][]"][value="'+idjwbn1310+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][17][]"][value="'+idjwbn1311+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][18][]"][value="'+idjwbn1312+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][19][]"][value="'+idjwbn1313+'"]').prop("checked", false);
                    $("#komper").find(':radio[name="jawaban[13][20][]"][value="'+idjwbn1314+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][21][]"][value="'+idjwbn14a+'"]').prop("checked", false);
                    $("#metpem1").find(':radio[name="jawaban[14][22][]"][value="'+idjwbn14b+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][23][]"][value="'+idjwbn14c+'"]').prop("checked", false);
                    $("#metpem2").find(':radio[name="jawaban[14][24][]"][value="'+idjwbn14d+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][25][]"][value="'+idjwbn14e+'"]').prop("checked", false);
                    $("#metpem3").find(':radio[name="jawaban[14][26][]"][value="'+idjwbn14f+'"]').prop("checked", false);
                    $("#metpem4").find(':radio[name="jawaban[14][27][]"][value="'+idjwbn14g+'"]').prop("checked", false);
                    $("#capek").find(':radio[name="samaran[15][]"][value="'+idjwbn15+'"]').prop("checked", false);
                    $('input[type="checkbox"][name="jawaban[16][]"]').prop('checked', false);
                    $(".jwbnsub16").attr("readonly", true);
                    $(".jwbnsub16").attr("value", "00");
                    $(".jwbnsub16").val("00");
                    $(".jwbnsub16").css("color", "#f5f8fa");

                    $(".jwbnsub10").attr("readonly", true);
                    $(".jwbnsub10").attr("value", "00");
                    $(".jwbnsub10").val("00");
                    $(".jwbnsub10").css("color", "#f5f8fa");

                    $(".jwbnsub151").attr("readonly", true);
                    $(".jwbnsub151").attr("value", "00");
                    $(".jwbnsub151").val("00");
                    $(".jwbnsub151").css("color", "#f5f8fa");

                    $(".jwbnsub152").attr("readonly", true);
                    $(".jwbnsub152").attr("value", "00");
                    $(".jwbnsub152").val("00");
                    $(".jwbnsub152").css("color", "#f5f8fa");
                    
                    $(".jwbn17").attr("value", "");
                    $('.jwbn17').val("");
                    $(".jwbn18").attr("value", "");
                    $('.jwbn18').val("");
                    $(".jwbn19").attr("value", "");
                    $('.jwbn19').val("");

                    $("#aktifmen").find(':radio[name="jawaban[20][]"][value="'+idjwbn20+'"]').prop("checked", false);
                    $(".jwbnsub20").attr("readonly", true);
                    $(".jwbnsub20").attr("value", "00");
                    $(".jwbnsub20").val("00");
                    $(".jwbnsub20").css("color", "#f5f8fa");

                    $('input[type="checkbox"][name="jawaban[21][]"]').prop('checked', false);

                    $(".jwbnsub21").attr("readonly", true);
                    $(".jwbnsub21").attr("value", "00");
                    $(".jwbnsub21").val("00");
                    $(".jwbnsub21").css("color", "#f5f8fa");
                }
                var nourut1 = document.getElementById("nourut1");
                nourut1.innerHTML = "1.";
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
            }       
        });
    }  

    $("body").on("click", "#flexRadioAktif", function (event) {
        var aktif = $(this).val();
        
        if (aktif === "165") {
          $(".jwbnsub20").attr("readonly", false);
          $(".jwbnsub20").attr("value", idjwbnsub20);
          $(".jwbnsub20").val(idjwbnsub20);
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
        var jawaban_1_next_new = document.getElementById("jawaban_1").value;
        var jawaban_1_new_next = $("#flexRadioChecked:checked").val();
        if(jawaban_1_new_next === jawaban_1_next_new){
            if (sesuai === "178") {
                var StatusSesuai = $(this).prop("checked");
                if (StatusSesuai) {
                    $(".jwbnsub21").attr("readonly", false);
                    $(".jwbnsub21").attr("value", idjwbnsub21);
                    $(".jwbnsub21").val(idjwbnsub21);
                    $(".jwbnsub21").css("color", "#5e6278");
                    $(".jwbnsub21").focus();
                } else {
                    $(".jwbnsub21").attr("readonly", true);
                    $(".jwbnsub21").attr("value", "00");
                    $(".jwbnsub21").val("00");
                    $(".jwbnsub21").css("color", "#f5f8fa");
                }
            }
        }else{
            if (sesuai === "178") {
                var StatusSesuai = $(this).prop("checked");
                if (StatusSesuai) {
                    $(".jwbnsub21").attr("readonly", false);
                    $(".jwbnsub21").attr("value", "");
                    $(".jwbnsub21").val("");
                    $(".jwbnsub21").css("color", "#5e6278");
                    $(".jwbnsub21").focus();
                }else{
                    $(".jwbnsub21").attr("readonly", true);
                    $(".jwbnsub21").attr("value", "00");
                    $(".jwbnsub21").val("00");
                    $(".jwbnsub21").css("color", "#f5f8fa");
                }
            }
        }
      });

    $("body").on("click", "#flexRadioBacape", function (event) {
        var bacape = $(this).val();
        var jawaban_1_next_new = document.getElementById("jawaban_1").value;
        var jawaban_1_new_next = $("#flexRadioChecked:checked").val();
        // alert(bacape + " , " + jawaban_1_next_new + "," + jawaban_1_new_next);
        if(jawaban_1_new_next === jawaban_1_next_new){
            if (bacape === "160") {
                var theStatus = $(this).prop("checked");
                if (theStatus) {
                    $(".jwbnsub16").attr("readonly", false);
                    $(".jwbnsub16").attr("value", idjwbnsub16);
                    $(".jwbnsub16").val(idjwbnsub16);
                    $(".jwbnsub16").css("color", "#5e6278");
                    $(".jwbnsub16").focus();
                } else {
                    $(".jwbnsub16").attr("readonly", true);
                    $(".jwbnsub16").attr("value", "00");
                    $(".jwbnsub16").val("00");
                    $(".jwbnsub16").css("color", "#f5f8fa");
                }
            }
        }else{
            if (bacape === "160") {
                var theStatus = $(this).prop("checked");
                if (theStatus) {
                    $(".jwbnsub16").attr("readonly", false);
                    $(".jwbnsub16").attr("value", "");
                    $(".jwbnsub16").val("");
                    $(".jwbnsub16").css("color", "#5e6278");
                    $(".jwbnsub16").focus();
                }else{
                    $(".jwbnsub16").attr("readonly", true);
                    $(".jwbnsub16").attr("value", "00");
                    $(".jwbnsub16").val("00");
                    $(".jwbnsub16").css("color", "#f5f8fa");
                }
            }                
        }        
    });
    
    $("body").on("click", "#flexRadioCaker", function (event) {
        var caker = $(this).val();
        $('#jwbn15').val(caker);
        var jawaban_1_next_new = document.getElementById("jawaban_1").value;

        var jawaban_1_new_next = $("#flexRadioChecked:checked").val();

        if(jawaban_1_new_next === jawaban_1_next_new){
            if (caker === "145") {
                $(".jwbnsub151").attr("readonly", true);
                $(".jwbnsub151").attr("value", "00");
                $(".jwbnsub151").val("00");
                $(".jwbnsub151").css("color", "#f5f8fa");

                $(".jwbnsub152").attr("readonly", true);
                $(".jwbnsub152").attr("value", "00");
                $(".jwbnsub152").val("00");
                $(".jwbnsub152").css("color", "#f5f8fa");
            } else if (caker === "144") {
                if(caker === idjwbn15){
                    $(".jwbnsub151").attr("readonly", true);
                    $(".jwbnsub151").attr("value", "00");
                    $(".jwbnsub151").val("00");
                    $(".jwbnsub151").css("color", "#f5f8fa");

                    $(".jwbnsub152").attr("readonly", false);
                    $(".jwbnsub152").attr("value", idjwbnsub15);
                    $(".jwbnsub152").val(idjwbnsub15);
                    $(".jwbnsub152").css("color", "#5e6278");
                    $(".jwbnsub152").focus();

                }else{
                    $(".jwbnsub151").attr("readonly", true);
                    $(".jwbnsub151").attr("value", "00");
                    $(".jwbnsub151").val("00");
                    $(".jwbnsub151").css("color", "#f5f8fa");
    
                    $(".jwbnsub152").attr("readonly", false);
                    $(".jwbnsub152").attr("value", "");
                    $(".jwbnsub152").val("");
                    $(".jwbnsub152").css("color", "#5e6278");
                    $(".jwbnsub152").focus();
                }
            }else{
                
                if(caker === idjwbn15){
                    $(".jwbnsub151").attr("readonly", false);
                    $(".jwbnsub151").attr("value", idjwbnsub15);
                    $(".jwbnsub151").val(idjwbnsub15);
                    $(".jwbnsub151").css("color", "#5e6278");
                    $(".jwbnsub151").focus(); 

                    $(".jwbnsub152").attr("readonly", true);
                    $(".jwbnsub152").attr("value", "00");
                    $(".jwbnsub152").val("00");
                    $(".jwbnsub152").css("color", "#f5f8fa");
                }else{
                    $(".jwbnsub151").attr("readonly", false);
                    $(".jwbnsub151").attr("value", "");
                    $(".jwbnsub151").val("");
                    $(".jwbnsub151").css("color", "#5e6278");
                    $(".jwbnsub151").focus();
    
                    $(".jwbnsub152").attr("readonly", true);
                    $(".jwbnsub152").attr("value", "00");
                    $(".jwbnsub152").val("00");
                    $(".jwbnsub152").css("color", "#f5f8fa");
                }
            }
        }else{
            if (caker === "145") {
                $(".jwbnsub151").attr("readonly", true);
                $(".jwbnsub151").attr("value", "00");
                $(".jwbnsub151").val("00");
                $(".jwbnsub151").css("color", "#f5f8fa");

                $(".jwbnsub152").attr("readonly", true);
                $(".jwbnsub152").attr("value", "00");
                $(".jwbnsub152").val("00");
                $(".jwbnsub152").css("color", "#f5f8fa");
            }else if(caker === "144"){
                $(".jwbnsub151").attr("readonly", true);
                $(".jwbnsub151").attr("value", "00");
                $(".jwbnsub151").val("00");
                $(".jwbnsub151").css("color", "#f5f8fa");
    
                $(".jwbnsub152").attr("readonly", false);
                $(".jwbnsub152").attr("value", "");
                $(".jwbnsub152").val("");
                $(".jwbnsub152").css("color", "#5e6278");
                $(".jwbnsub152").focus();
            }else{
                $(".jwbnsub151").attr("readonly", false);
                $(".jwbnsub151").attr("value", "");
                $(".jwbnsub151").val("");
                $(".jwbnsub151").css("color", "#5e6278");
                $(".jwbnsub151").focus();

                $(".jwbnsub152").attr("readonly", true);
                $(".jwbnsub152").attr("value", "00");
                $(".jwbnsub152").val("00");
                $(".jwbnsub152").css("color", "#f5f8fa");
            }
        }        
    });

    $("body").on("click", "#flexRadioBiaya", function (event) {
        var biaya = $(this).val();  
        var jawaban_1_next_new = document.getElementById("jawaban_1").value;  
        var jawaban_1_new_next = $("#flexRadioChecked:checked").val();          
        if(jawaban_1_new_next === jawaban_1_next_new){                              
            if (biaya === "28") {
                if(!idjwbnsub10){
                    $(".jwbnsub10").attr("readonly", false);
                    $(".jwbnsub10").attr("value", "");
                    $(".jwbnsub10").val("");
                    $(".jwbnsub10").css("color", "#5e6278");
                    $(".jwbnsub10").focus();
                }else{
                    $(".jwbnsub10").attr("readonly", false);
                    $(".jwbnsub10").attr("value", idjwbnsub10);
                    $(".jwbnsub10").val(idjwbnsub10);
                    $(".jwbnsub10").css("color", "#5e6278");
                    $(".jwbnsub10").focus();
                }                    
            }else{
                $(".jwbnsub10").attr("readonly", true);
                $(".jwbnsub10").attr("value", "00");
                $(".jwbnsub10").val("00");
                $(".jwbnsub10").css("color", "#f5f8fa");
            }
        }else{
            if (biaya === "28") {
                $(".jwbnsub10").attr("readonly", false);
                $(".jwbnsub10").attr("value", "");
                $(".jwbnsub10").val("");
                $(".jwbnsub10").css("color", "#5e6278");
                $(".jwbnsub10").focus();
            }else{
                $(".jwbnsub10").attr("readonly", true);
                $(".jwbnsub10").attr("value", "00");
                $(".jwbnsub10").val("00");
                $(".jwbnsub10").css("color", "#f5f8fa");
            }
            
        }                           
    });

    $("body").on("click", "#flexRadioJenis", function (event) {
        var jenis = $(this).val();      
        var jawaban_1_next_new = document.getElementById("jawaban_1").value;
        
        if(jawaban_1_next_new === jawaban_1){
            if (jenis === "12") {                
                if(!idjwbnsub5){
                    $(".jwbnsub5").attr("readonly", false);
                    $(".jwbnsub5").attr("value", "");
                    $(".jwbnsub5").val("");
                    $(".jwbnsub5").css("color", "#5e6278");
                    $(".jwbnsub5").focus();
                }else{
                    $(".jwbnsub5").attr("readonly", false);
                    $(".jwbnsub5").attr("value", idjwbnsub5);
                    $(".jwbnsub5").val(idjwbnsub5);
                    $(".jwbnsub5").css("color", "#5e6278");
                    $(".jwbnsub5").focus();
                }
            }else{
                $(".jwbnsub5").attr("readonly", true);
                $(".jwbnsub5").attr("value", "00");
                $(".jwbnsub5").val("00");
                $(".jwbnsub5").css("color", "#f5f8fa");
            }
        }else{            
            if (jenis === "12") {
                $(".jwbnsub5").attr("readonly", false);
                $(".jwbnsub5").attr("value", "");
                $(".jwbnsub5").val("");
                $(".jwbnsub5").css("color", "#5e6278");
                $(".jwbnsub5").focus();
            }else{
                $(".jwbnsub5").attr("readonly", true);
                $(".jwbnsub5").attr("value", "00");
                $(".jwbnsub5").val("00");
                $(".jwbnsub5").css("color", "#f5f8fa");
            }
        }            
    });
});
  