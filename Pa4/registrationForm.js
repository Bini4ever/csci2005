var index = 0;
var students = [];
function add() 
{
    var firstName = document.myForm.firstName.value;
    var lastName = document.myForm.lastName.value;
    var address = document.myForm.address.value;
    var city = document.myForm.city.value;
    var state = document.myForm.state.value;
    var zipCode = document.myForm.zipCode.value;
    var email = document.myForm.email.value;
    var phone = document.myForm.phone.value;
    
    var student = firstName + "#$%" +
    lastName + "#$%" + address + " " +
    city + "#$%" + state + "#$%" +
    zipCode + "#$%" + email + "#$%" + phone;
    additem(student);
    
}

function additem(student){
    students[window.index] = student;
    window.index += 1; window.localStorage.setItem("studentsList",JSON.stringify(students));
}

