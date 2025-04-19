document.getElementById("contactinfo").addEventListener("click", function(){
    const contact= document.getElementById("contact");
    const button= document.getElementById("contactinfo");
    contactinfo.style.opacity="0%";
    contact.style.opacity="100%";
    console.log("contact info is now visible");
})
document.getElementById("skillSection").addEventListener("mouseover", function() {
    const skillHover = document.getElementById("skillSection");
    skillHover.style.backgroundColor = "burlywood";
})
document.getElementById("skillSection").addEventListener("mouseout", function() {
    const skillHover = document.getElementById("skillSection");
    skillHover.style.backgroundColor = "whitesmoke";
})