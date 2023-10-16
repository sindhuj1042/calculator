let out=document.getElementById("input");
function display(num){
    out.value+=num;
}
function equal(){
    try{
        out.value=eval(out.value);
    }
    catch{
        alert("error");
    }
}
function ac(){
    out.value=" ";
}
function del(){
    out.value=out.value.slice(0,-1);
}