let heading=document.querySelector("h2");
let int=document.querySelector("input");
int.addEventListener("input",function(){
    //int.innerText=heading.value;
    heading.innerText=int.value;
    console.log(int.value);
})