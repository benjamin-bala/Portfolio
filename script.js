const showMenu = () =>{
    let text = document.getElementById("menutext").innerHTML;
    if(text === "X"){
        document.getElementById("menu").style.display = "none";
        document.getElementById("about").style.display = "block";
        let text = document.getElementById("menutext").innerHTML = "Menu"
    }
    else if (text === "Menu"){
        document.getElementById("about").style.display = "none";
        document.getElementById("menu").style.display = "flex";
        let text = document.getElementById("menutext").innerHTML = "X"
    }
}


