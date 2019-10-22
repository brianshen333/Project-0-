const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var check = document.getElementById('container');


form.addEventListener('submit', addItem);
form.addEventListener('submit', checkcount);
itemList.addEventListener('click',removeItem);
document.addEventListener('click',checkcount);

function addItem(e){
	e.preventDefault();
	var newItem = document.getElementById('item').value;
	var li = document.createElement('li');
	var x = document.createElement("INPUT");
	x.setAttribute("type", "checkbox");
	li.className = 'list-group-item';
	li.appendChild(document.createTextNode(newItem));
	li.append(x);
	var deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode('X'));
	deleteButton.className = 'btn btn-danger btn-sm float-right delete';
	li.appendChild(deleteButton);
	itemList.appendChild(li);
	
}
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function checkcount(e) {

  var list = itemList.getElementsByTagName('li');
  var listarray = Array.from(list);
  
  var total = listarray.length;
  var countunchecked=listarray.filter( x => x.childNodes[1]["checked"] === false).length;
  document.getElementById("item-count").innerHTML = total;
  document.getElementById("unchecked-count").innerHTML = countunchecked;

  }

