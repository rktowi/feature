const box = document.getElementById('display');

function  addToScreen(x){
    box.value += x;
    
    if (x==='c'){
        box.value = '';
    }
}
function  addToScreenOperator(x){
    box.value += x;
    
    if (x==='c'){
        box.value = '';
    }
}

function calculateSum() {
    x = box.value;
    x = eval(x);
    box.value = x;
}

function backspace() {
    var number = box.value;
    var len = number.length-1;
    var newnumber = number.substring(0, len);
    box.value=newnumber;
}