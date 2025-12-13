function calculate() {
  const Billlamount = document.getElementById("Bill").value;
  const service = document.getElementById("service").value;
  const person = document.getElementById("person").value;
  const display = document.getElementById("tip");
  if(!Billlamount || !service || !person){
    alert("Enter the Details")
    return
  }

 