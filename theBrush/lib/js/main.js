let doc=document.querySelector(".main_container")
doc.addEventListener("click",onClick)


function onClick(){
    let rengarSrc="assets/rengar.png"
    document.getElementById("rengar").src=rengarSrc
    alert("You've been deleted!")
}
