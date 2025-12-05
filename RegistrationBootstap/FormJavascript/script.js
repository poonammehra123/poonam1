function submit(){
    // const batch = document.querySelectorAll("input[name='batch]:checked");
    // console.log(batch); 

    const fn = document.getElementById("Full Name").value;
    const sc = document.getElementById("Score").value;
    const cs = document.getElementById("Course").value;
    const em = document.getElementById("Email ID").value;
    const db = document.getElementById("DOB").value;
    const cn = document.getElementById("Contact no.").value;
   
 

    let selectedBatchTiming =[];
    batch.forEach((element)=>{
        selectedBatchTiming.push(element.value)
    });

    console.log(selectedBatchTiming);

    const selectedBatch = document.querySelector(
        "input[name='timing']:checked"

    ).value;

    console.log(slectedBatch);
    
}
function clearForm(){
    window.location.reload();
}
