function on(){
    document.getElementById("bulb").style.backgroundColor="yellow";
}
function off(){
    document.getElementById("bulb").style.backgroundColor="pink";
}

function Set(){
    document.getElementById("bulb").style.backgroundColor="green";
}
function Reset(){
    document.getElementById("bulb").style.backgroundColor="red";
}
function Submit(){
    document.getElementById("bulb").style.backgroundColor="blue";
}

 const userColor=document.getElementById("color");

 userColor.addEventListener("change",() => changebulbColour(userColor.value));

 function changebulbColour(color){
        document.getElementById("bulb").style.backgroundColor=color;
 }

 function SB_Control(){
   const btn = document.getElementById("SB_btn")
   if(btn.innerText==="On"){
        document.getElementById("SB_btn").innerText="Off";
        document.getElementById("smartBulb").classList.add("on");
   }
   else{
     document.getElementById("SB_btn").innerText="On";
        document.getElementById("smartBulb").classList.remove("on");
   }
 }

 function SB_Control2()
 {
    document.getElementById("smartBulb").classList.toggle("on");
 }

