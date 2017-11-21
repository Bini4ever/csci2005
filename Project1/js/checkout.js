var iList = JSON.parse(window.localStorage.getItem("itemList"));
function checkout(){
    var total = 0;
    var tax;
    var subTotal;
    var str = '<table style="border-collapse: collapse;"> <tr> <td class="cap">Item</td><td class="cap">Price </td> <td class="cap"></tr>';
    
    for (var i in iList) {
        var tokens = iList[i].split("#$%");
       
        str += "<tr><td>" + tokens[0] + "</td><td style='text-align: right;'>" + '$' + tokens[1] + "</tr>";
        var int = tokens[1];
        total += parseInt(int, 10);
    }
    tax = total * 0.06875;
    subTotal = total + tax;
    str += "<tr'><td  style='text-align : right; font-weight: bold;'> Total Price: </td><td style='border-top: solid 1px #e95d3c; text-align: right;'>" + '$' +  parseFloat(total).toFixed(2) +  "</tr>" + "<tr><td style='text-align : right; font-weight: bold;'> Tax: </td><td style=' border-top: solid 1px #e95d3c; text-align: right;'>" + '$' + parseFloat(tax).toFixed(2) +  "</tr>" + "<tr><td  style='text-align : right; font-weight: bold;'> Sub Total: </td><td style='border-top: solid 3px #e95d3c; text-align: right;'>" + '$' + parseFloat(subTotal).toFixed(2) +  "</tr> </table>";
    document.getElementById("itemsOutput").innerHTML = str;
}

window.onload = checkout;
