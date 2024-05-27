var btn = document.querySelector("#btn");
var text=document.querySelector("#text")
var txt=document.querySelector("#txt");

var ram = Math.ceil(Math.random()*10+1);
btn.addEventListener("click",result)
console.log(ram);

function result(){
   var guess= txt.value;
    
   if(guess < ram)
    {     
        text.innerHTML="This is smaller than the correct number";
}
else if(guess > ram)
    {
        text.innerHTML="Your number is greater than the correct number";

}
else
{
    
    text.innerHTML="you guess the correct number";
}
}




