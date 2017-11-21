function search()
{
    var data = "";
    var sList = JSON.parse(window.localStorage.getItem("studentsList"));
    var name = document.searchForm.lastName.value;
    for (var i in sList) {
        var tokens = sList[i].split("#$%");
        if (tokens[1].toUpperCase() == name.toUpperCase())
            {
                    data += "<strong>First Name: </strong>" + 
                    tokens[0] + "<br><strong>Last Name: </strong>" + tokens[1] + 
                    "<br><strong>Address: </strong>" + tokens[2] + "<br><strong>City: </strong>" + tokens[3] + "<strong> State: </strong>" +
                    tokens[4] + "<strong> Zipcode: </strong>" + tokens[5] + "<br><strong>Email: </strong>" + tokens[6] +
                    "<br><strong>Phone: </strong>" + tokens[7] "<br>";
            }
        
    }
    if (data == "")
    {
        data += "The student couldn't fount!"
    }
    document.getElementById("searchoutput").innerHTML = data;
}
