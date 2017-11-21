function allStudent()
{
    var str = '<table style="border: solid 1pt black; border-collapse: collapse;"> <tr> <td class="cap">Frist Name </td><td class="cap">Last Name </td> <td class="cap">Address</td> <td class="cap">Email</td><td class="cap">Phone </td></tr>';
    var sList = JSON.parse(window.localStorage.getItem("studentsList"));
    for (var i in sList) {
        var tokens = sList[i].split("#$%");
       
        str += "<tr><td>" + tokens[0] + "</td><td>" + tokens[1] +
        "</td><td>" + tokens[2] + ", "+ tokens[3] + ", " +
        tokens[4] + "</td><td> " + tokens[5] +
        "</td><td>" + tokens[6] + "</td></tr>";
    }
    str += "</table>";
    document.getElementById("studentsOutput").innerHTML = str;
}