const DragArea=document.querySelector(".AppBody"),
DragText=DragArea.querySelector("h3"),
button=DragArea.querySelector("button"),
input=DragArea.querySelector("input");
let Myfile;

button.onclick=()=>{
    input.click();
}

input.addEventListener("change", function(){
    Myfile=this.files[0];
    DragArea.classList.add("active");
    showMe()
    
})
DragArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
      DragArea.classList.add("active");
      DragText.textContent="Relase to upload file";

})
DragArea.addEventListener("dragleave", ()=>{
    
      DragArea.classList.remove("active");
      DragText.textContent="Drag & Drop";
      
})
DragArea.addEventListener("drop", (e)=>{
    e.preventDefault();
    Myfile=e.dataTransfer.files[0];
    showMe()
})

function showMe(){
    let filetype=Myfile.type;
    let validEx=["image/jpeg", "image/jpg", "image/png"];
    if(validEx.includes(filetype)){
        let filereader=new FileReader();
        filereader.onload=()=>{
            let imgUrl=filereader.result;
            let img=`<img src="${imgUrl}" alt="">`;
            DragArea.innerHTML=img;
        }
        filereader.readAsDataURL(Myfile);
    }else{
        alert("this is not valid");
        DragArea.classList.remove("active");
        DragText.textContent="Drag & Drop";

    }
}