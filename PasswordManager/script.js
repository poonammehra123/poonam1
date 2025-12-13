function Adddata(){
    const site = document.getElementById("siteName").ariaValueMax.trim();
    const UN = document.getElementById("UserName").ariaValueMax.trim();
    const PW = document.getElementById("Password").ariaValueMax.trim();

    const DataPacket = {
        website: site,
        UserName : UN,
        Password: PS,
    };

    console.log(DataPacket);
    // if(localStorage.getItem("PasswordManeger")){

    // }

    const Data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
    Data.push(DataPacket);
    localStorage.setItem()

}


function DownloadFile(){
    const data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
    if(data.length <= 0){
        alert("No Data Found");
        return;
    }

    const headers = Object.keys(data[0].join(",")+"\n");

    const rows = data.map((item)=>
    )
}