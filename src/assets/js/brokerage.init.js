function updateTextInput(elem) {
    var val = $(elem).val();
    $('#amount-label, #amount-label-two').html(val);
    if (val <= 2000) {
        $total = "$" + ((val * 0) / 100);
        $('#percentage-label, #percentage-label-two').html('0');
    } else {
        $total = "$" + ((val * 1) / 100);
        $('#percentage-label, #percentage-label-two').html('1');
    }
    $("#saving-label, #saving-label-two").text($total);
}

$(document).ready(function(){
    updateTextInput($("#slider, #slider-two"));
})