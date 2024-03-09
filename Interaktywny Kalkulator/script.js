let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == '=') {
            let result = eval(string);
            if (result === Infinity || isNaN(result)) {
                input.value = "Błąd";
            } else {
                input.value = result;
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'Ce'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})