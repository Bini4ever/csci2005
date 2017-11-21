function split()
{  
    var str = document.myform.address.value;
    var strings = str.split(",")
    document.getElementById("output").innerHTML = "Address: " + strings[0] + "<br>City: " + 
                  strings[1] + "<br>State: " + strings[2] + "<br>Zip Code: " + strings[3];
}