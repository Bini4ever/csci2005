var tags;

function start() {
	var saveBtn = document.getElementById("saveBtn");
	saveBtn.addEventListener("click", save, false);
	var clearBtn = document.getElementById("clearBtn");
	clearBtn.addEventListener("click", clear, false); 

}

function clear() {
	localStorage.clear(); //deletes all key/value pairs from localStorage
	loadItems();
}

function save() {
	var item = document.getElementById("item");
	var tag = document.getElementById("tag");
	
	if (tag.value != null && tag.value.length > 0)	
		localStorage.setItem(tag.value, item.value);
	
	tag.value = ""; //clear tag input
	item.value = ""; //clear item input
	loadItems(); //reload items
}

function loadItems() {
	var length = localStorage.length; // number of key/values pairs
	tags = []; // create an empty array
	
	//load all keys 
	for(var i = 0; i < length; i++) {
		tags[i] = localStorage.key(i);
	}
	
	tags = tags.sort(); //sort the keys
		var markup = "<h1>";
		//build list of items
		for (var tag in tags) {
			var item = localStorage.getItem(tags[tag]);
			markup += item + "<br>";
		}
		markup += "</h1>";
		document.getElementById("items").innerHTML = markup;
}
window.addEventListener("load", start, false);
