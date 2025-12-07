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

 document.getElementById("c1").addEventListener("mouseenter",()=>{
    fillcolour("Violet")
 })

  document.getElementById("c1").addEventListener("mouseleave",()=>{
    fillcolour("white")
 })


 function fillcolour(Color){
    document.getElementById("rainbowbulb").style.backgroundColor=Color;
 }

 document.getElementById("c2").addEventListener("mouseenter",()=>{
    fillcolour("indigo")
 })

  document.getElementById("c2").addEventListener("mouseleave",()=>{
    fillcolour("white")
 })
 document.getElementById("c3").addEventListener("mouseenter",()=>{
    fillcolour("blue")
 })

  document.getElementById("c3").addEventListener("mouseleave",()=>{
    fillcolour("white")
 })

 document.getElementById("c4").addEventListener("mouseenter",()=>{
    fillcolour("green")
 })

  document.getElementById("c4").addEventListener("mouseleave",()=>{
    fillcolour("white")
 })

 document.getElementById("c5").addEventListener("mouseenter",()=>{
    fillcolour("yellow")
 })

  document.getElementById("c5").addEventListener("mouseleave",()=>{
    fillcolour("white")
 })

 document.getElementById("c6").addEventListener("mouseenter",()=>{
    fillcolour("orange")
 })

  document.getElementById("c6").addEventListener("mouseleave",()=>{
    fillcolour("white")
 })

 document.getElementById("c7").addEventListener("mouseenter",()=>{
    fillcolour("red")
 })

  document.getElementById("c7").addEventListener("mouseleave",()=>{
    fillcolour("white")
 })
