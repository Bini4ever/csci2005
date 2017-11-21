var items = []; 
index = 0;
function add(name, price) 
{
    
    var item = name + "#$%" +
    price;
    
    additem(item);
    
}

function additem(item)
{    
    items[index] = item;
    window.index += 1;
    window.localStorage.setItem("itemList",JSON.stringify(items));
}