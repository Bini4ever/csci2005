
function changeColor(event){
                              
    var input1 = document.getElementsById("t").value;
    var input2 = document.getElementsById("d").value;
    var input3 = document.getElementsById("a");
    
    if(input1 == ""){
        event.preventDefault();
    
    }
    if(input2 == ""){
        event.preventDefault();
        addColor("d");
        
    }
    if(input3.checked == false){
        event.preventDefault();  
        addColor("a")

    }

function addColor(id){
    document.getElementById(id).style.backgroundColor = "red";
    //document.getElementById(id2).style.backgroundColor = "red";
}
function resetColor(id){
    document.getElementById(id).style.backgroundColor = "white";
    //document.getElementById(id2).style.backgroundColor = "white";
}

}

function addListeners() {
	if (window.addEventListener) {
		document.getElementById("submit").addEventListener("click", changeColor, false);		
	}
}


window.onload = addListeners;