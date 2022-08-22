function providePermision(){
    let cbx = document.querySelector("input[type='checkbox']");
    if(cbx.checked){
        // console.log("checked")
        document.getElementsByName("btn")[0].addEventListener("click", showHidePW)
    }
    else{
        // console.log("unchecked")
        document.getElementsByName("btn")[0].removeEventListener("click", showHidePW)
    }
}

function showHidePW(){
    let pw = document.getElementsByClassName("pw")[0];
    let btn = document.getElementsByName("btn")[0];
    if(pw.type == "password"){
        pw.type = "text"
        btn.innerText = "Hide Password"
    }
    else{
        pw.type = "password"
        btn.innerText = "Show Password"
    }
}