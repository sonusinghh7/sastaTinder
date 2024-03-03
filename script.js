
var friend = document.querySelector("#status")
var add = document.querySelector("#add")
var remove = document.querySelector("#remove")

add.addEventListener("click",function(){
    friend.innerHTML="Friends"
        friend.style.color="green"
        remove.innerHTML="Remove Friend"
        add.style.display="none"
    });
    
    remove.addEventListener("click", function(){
        add.style.display="block"
        friend.style.color="red"
        friend.innerHTML="Stranger"
        remove.innerHTML="SKIP"
    alert("Do you want to unfriend sonu")
});

