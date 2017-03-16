let todobutton = document.getElementById('addTodo');
let item = document.getElementById('addTodoItem').value;
const ls = localStorage;
let count = 0;
let my_class = 'default';


todobutton.addEventListener('click',add_items);

function add_items()
{
	item = document.getElementById('addTodoItem').value;
	insert_items(item,my_class);
	add_to_local_storage(item);
	
}


function insert_items(item,my_class)
{
	
	const ul = document.getElementById('todoList');
	const li = document.createElement('li');
	const addbtn = document.createElement('button');
	li.textContent = item;
	addbtn.textContent = 'Delete';
	li.setAttribute('class',my_class);
	count = count + 1;
	li.setAttribute('id',count);
	li.setAttribute('onclick','change_class()');
	li.onclick = change_class;
	addbtn.setAttribute('onclick','removeitemfromlist()');
	addbtn.onclick = removeitemfromlist;
	ul.appendChild(li);
	li.appendChild(addbtn);	
	

}

function add_to_local_storage(item)
{
	let arr = [];
	arr.push(item);
	arr.push('default');
	ls.setItem(count ,JSON.stringify(arr));

}

function change_class()
{
	let mysub = '';
	let mysub2 = '';
	if(this.className === 'selectClass') 
	{
		todobutton.style.backgroundColor = 'yellow';
		this.className = 'default';
		if(typeof mysub!=='undefined' )
		{
			mysub=ls.getItem(this.getAttribute('id'))
		 	mysub2 = mysub.replace('selectClass','default')
		 	ls.setItem(this.getAttribute('id'),mysub2)
		 }
	}
	else
	{
		this.className = "selectClass";
		 if(typeof mysub!=='undefined' )
		 {
		 	mysub=ls.getItem(this.getAttribute('id'))
		 	mysub2=mysub.replace('default','selectClass')
		 	ls.setItem(this.getAttribute('id'),mysub2)
		 }	
	}
	
	
}

function removeitemfromlist()
{
	ls.removeItem(this.parentNode.getAttribute('id'));
	this.parentNode.remove(this);
}

function datasetonload(){
	let arr1 = [];
	let i = 0;
	let j=0;
	let key = 0;
	console.log(ls)
	for(i=0;i<ls.length;i++){
		key=ls.key(i)
		arr1[j]=key;
		arr1[j+1]=JSON.parse(ls.getItem(key))
		j=j+2;
	}
	for(i=0;i<arr1.length;i=i+2){
		
		getlocaldata(arr1[i],arr1[i+1][0],arr1[i+1][1])
	
}
}
function getlocaldata(key,item,my_class)
{
	todobutton.style.backgroundColor = 'pink';
	const ul = document.getElementById('todoList');
	const li = document.createElement('li');
	const addbtn = document.createElement('button');
	li.textContent = item;
	addbtn.textContent = 'Delete';
	li.setAttribute('class',my_class);
	
	li.setAttribute('id',key);
	li.setAttribute('onclick','change_class()');
	li.onclick = change_class;
	addbtn.setAttribute('onclick','removeitemfromlist()');
	addbtn.onclick = removeitemfromlist;
	ul.appendChild(li);
	li.appendChild(addbtn);
}


