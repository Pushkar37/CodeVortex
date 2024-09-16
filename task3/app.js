let input=document.getElementById("input");
function appendTo(i){
input.value=input.value +i;
};

function cl(){
    
    input.value="";
}
function cal(){
    let exp=input.value
    input.value=eval(exp)
};