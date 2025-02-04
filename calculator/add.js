let display = document.getElementById('display');
let button = document.querySelectorAll('button');
let string = '';
let arraybutton = Array.from(button);

arraybutton.forEach(btn => {
    btn.addEventListener("click", function (event) {
        if (event.target.innerHTML === 'C') {
            string = '';
            display.value = string;
        }
        else if(event.target.innerHTML == '='){
           string = eval(string);
           display.value = string;
        } 
        else{

        string += event.target.innerHTML;
        display.value = string;
        }

    })
})