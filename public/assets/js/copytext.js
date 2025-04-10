$( '#txtName1' ).on( 'input change paste', function() {
    var diasabled = !$.trim( $( this ).val() );
            
    $( '#txtTel1' ).not( this ).each( function() {
        $( this ).prop( 'disabled', diasabled )
    })
});

$( '#txtName2' ).on( 'input change paste', function() {
    var diasabled = !$.trim( $( this ).val() );
            
    $( '#txtTel2' ).not( this ).each( function() {
        $( this ).prop( 'disabled', diasabled )
    })
});

$( '#txtName3' ).on( 'input change paste', function() {
    var diasabled = !$.trim( $( this ).val() );
            
    $( '#txtTel3' ).not( this ).each( function() {
        $( this ).prop( 'disabled', diasabled )
    })
});

$( '#txtName4' ).on( 'input change paste', function() {
    var diasabled = !$.trim( $( this ).val() );
            
    $( '#txtTel4' ).not( this ).each( function() {
        $( this ).prop( 'disabled', diasabled )
    })
});

$( '#txtName5' ).on( 'input change paste', function() {
    var diasabled = !$.trim( $( this ).val() );
            
    $( '#txtTel5' ).not( this ).each( function() {
        $( this ).prop( 'disabled', diasabled )
    })
});

const copyBtn1 = document.getElementById('copyBtn1')
const copyText1 = document.getElementById('copyText1')
            
copyBtn1.onclick = () => {
    copyText1.select();    // Selects the text inside the input
    document.execCommand('copy');    // Simply copies the selected text to clipboard 
                 
}

const copyBtn2 = document.getElementById('copyBtn2')
const copyText2 = document.getElementById('copyText2')
            
copyBtn2.onclick = () => {
    copyText2.select();    // Selects the text inside the input
    document.execCommand('copy');    // Simply copies the selected text to clipboard 
                 
}

const copyBtn3 = document.getElementById('copyBtn3')
const copyText3 = document.getElementById('copyText3')
            
copyBtn3.onclick = () => {
    copyText3.select();    // Selects the text inside the input
    document.execCommand('copy');    // Simply copies the selected text to clipboard 
                 
}

const copyBtn4 = document.getElementById('copyBtn4')
const copyText4 = document.getElementById('copyText4')
            
copyBtn4.onclick = () => {
    copyText4.select();    // Selects the text inside the input
    document.execCommand('copy');    // Simply copies the selected text to clipboard 
                 
}

const copyBtn5 = document.getElementById('copyBtn5')
const copyText5 = document.getElementById('copyText5')
            
copyBtn5.onclick = () => {
    copyText5.select();    // Selects the text inside the input
    document.execCommand('copy');    // Simply copies the selected text to clipboard 
                 
}