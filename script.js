//1.
function sum(){
    console.log(10+20);
}
sum();

//2.
function sum(a,b){
    const result=a+b;
    console.log('${a}+${b}=${result}');
}
sum(3,4);

//3.
const abc=()=>{
    return 40+30;
}
const pqr=()=>40+30
console.log(pqr());

//4.
var x = 21;
    var girl = function () {
        console.log(x);
        var x = 20;
    };
    girl ();

//5.
var x = 21;
        girl ();
        console.log(x)
        function girl() {
            console.log(x);
            var x = 20;
        };

//6.
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

//7.
function fact(num){
    for(var i=num-1;i>=1;i--){
        num*i;
    }
    return num;
}
fact(5);

//1.
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));
 
 //2.
 Abc();
 const Abc = function(){
     let value = 20;
     console.log(value);
 }
 
//3.
var a = 10;
            (function (){
                console.log(a);
                var a = 20;
            })();

//4.
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")
