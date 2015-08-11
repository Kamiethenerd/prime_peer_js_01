var value = 42;

if(value == 53){
	value+=42;
}else{
	value-=13;
}

var string = "11";

value += string
console.log(value);

var array = [];

for(var i = 0; i < value.length; i++){
	array[i] = value.charAt(i);

}

console.log(array);

array.pop();

array.shift();

console.log(array);

var newVar = "";

for(var i = array.length-1; i >= 0; i--){
	newVar+=array[i];
}
//ask Joseph how to do this part correctly

console.log(newVar);

value = parseInt(value);
newVar = parseInt(newVar);

console.log(value);
console.log("this is the new parsed newVar", newVar);

value+=newVar;

console.log(value);

if(value<60){
	value=14;
} else if(value==2930){ 
	value=27;
} else {
	value=2;
};

var i = 10;

while(i > 0){
	value++;
	i--;
};
console.log(value);

function convertVal(val) {
	val = val.toString();
	console.log(val);
	if (val.length > 1){
		val = val.slice(1);
		console.log(val);
		return val;

	}
	
};

value = convertVal(value);

console.log(value);

