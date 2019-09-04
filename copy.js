var nameInp = document.getElementById('productname');
var priceInp = document.getElementById('productprice');
var companyInp = document.getElementById('productcompany');
var descInp = document.getElementById('productdesc');
var mybtn =  document.getElementById('myBtn');
var containerproduct ;
if(localstorage.getItem("containerproduct") == null){
	containerproduct = [];
}else{
	containerproduct = json.parse(localstorage.getItem("containerproduct"));
	displayproduct();
}
mybtn.onclick= function()
 {
	addproduct();
	displayproduct();
	clearform();
	}
function addproduct(){
	var product = {
		name:nameInp.value,
		price:priceInp.value,

		company: companyInp.value,
		desc : descInp.value,
	}
	containerproduct.push(product);
localstorage.setitem("containerproduct",Json.stringify(containerproduct));
}
function displayproduct(){
	var cols = "";
	for (var i = 0; i < containerproduct.length; i++) {
		cols+='<div class="col-lg-3"><div class="product"><h3>'+containerproduct[i].name+'</h3><p>'+containerproduct[i].price+'</p><p class="text-danger">'+containerproduct[i].company+'</p><p class="text-info">'+containerproduct[i].desc+'</p><button onclick=deletefun('+i+') class="btn btn-danger">delete</button></div></div>';
	}
document.getElementById('myrow').innerHTML=cols;
}
function clearform(){
	var inputs = document.getElementsByClassName('form-control');
	for(var i=0;i<inputs.length;i++){
		inputs[i].value = " ";
	}
}function deletefun(id){
	containerproduct.splice(id,1);
	
	containerproduct = json.parse(localstorage.getItem("containerproduct"));
	displayproduct();
}