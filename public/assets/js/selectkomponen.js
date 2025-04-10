var xmlHttp

function showKomp(str1){
    xmlHttp=GetXmlHttpObject()
    if(xmlHttp==null){
        alert("Browser anda tidak support")
        return
    }
    var url="../../pages/view/komponen_pembayaran_prodi.php"

    url=url+"?id="+str1
    xmlHttp.onreadystatechange=stateChanged
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
}

function stateChanged(){
    if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){
        document.getElementById("txtKomp").innerHTML=xmlHttp.responseText
    }
}

function GetXmlHttpObject(){
    var xmlHttp=null;

    try{
        xmlHttp=new XMLHttpRequest();
    }catch(e){
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}

