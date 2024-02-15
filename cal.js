function btnC(){
    document.getElementById("TextField").value="";
}
function btnMinimum(){
   
    document.getElementById("TextField").value+="-";
}
function btnMode(){
    document.getElementById("TextField").value+="%";
}
function btnDivide(){
    document.getElementById("TextField").value+="/";
}
function btn7(){
    document.getElementById("TextField").value+="7";
}
function btn8(){
    document.getElementById("TextField").value+="8";
}
function btn9(){
    document.getElementById("TextField").value+="9";
}
function btn0(){
    document.getElementById("TextField").value+="0";
}
function btn1(){
    document.getElementById("TextField").value+="1";
}
function btn2(){
    document.getElementById("TextField").value+="2";
}
function btn3(){
    document.getElementById("TextField").value+="3";
}
function btn4(){
    document.getElementById("TextField").value+="4";
}
function btn5(){
    document.getElementById("TextField").value+="5";
}
function btn6(){
    document.getElementById("TextField").value+="6";
}
function btnMultiple(){
   document.getElementById("TextField").value+="*";
}
function btnAdd(){
    
    if(document.getElementById("TextField").value==""){
        document.getElementById("TextField").value+="+";
    }else{
      var a= (int)(document.getElementById("TextField").value+a);
       document.getElementById("TextField").value=a;

    }
   



}
function btnSub(){
    document.getElementById("TextField").value+="-";
}
function btnEqual(){
    document.getElementById("TextField").value+="=";
}
function btnDot(){
    document.getElementById("TextField").value+=".";
}