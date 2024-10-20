var string="";
let fact=1;
var btn=document.getElementById("btn");
var buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
  buttontext =e.target.innerText;
    if(buttontext=='='){
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(buttontext=="C"){
        string=" ";
        document.querySelector('input').value=string;
    }
   else if(buttontext=="Del")
   {
    string=string.substring(0,string.length-1);
    document.querySelector('input').value=string;
   }
   else if(buttontext=="%"){
    console.log("dhsbd");
    console.log("dhsbaISHSHSa");
   }
    else{
console.log(e.target)
string=string+e.target.innerHTML;
document.querySelector('input').value=string;
}
})
})
btn.onclick=function()
{
    btn.style.transform; 
    
}
