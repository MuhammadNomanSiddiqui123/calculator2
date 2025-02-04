let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let buttonarray = Array.from(buttons);
 let string ='';
buttonarray.forEach(btn =>{
   btn.addEventListener('click',(event)=>{

        if(event.target.innerHTML === 'C')
        {
          string='';
          display.value=string;
        }
        else if(event.target.innerHTML == '='){
           string =eval(string);
           display.value=string;
        }
        else{
          string += event.target.innerHTML;
          display.value=string;
        }
      
    

   })
})
