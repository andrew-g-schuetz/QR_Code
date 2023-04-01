const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateButton = wrapper.querySelector(".form button"),
qrImage = document.querySelector(".qr-code img");



generateButton.addEventListener('click', ()=>{
    let qrValue = qrInput.value;
    //console.log(qrValue);
    if(!qrValue) return;
    generateButton.innerText = "Generating Code...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImage.addEventListener("load", () =>{
        wrapper.classList.add("active");
        generateButton.innerText = "Generate QR Code";
    })
   
    
    
});


qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});