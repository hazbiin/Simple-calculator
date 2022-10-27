
/*function buttonclick(val){

    document.getElementById("screen").value=document.getElementById("screen").value+val;

}

function equalClick(){

 var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result

} */


var oldValue;
var operatorClicked=false
var operator;


function oprClick(opr){

    operatorClicked=true;
    oldValue=document.getElementById("screen").value;
    operator = opr;
    
}


function buttonclick(val){

if(operatorClicked){

    document.getElementById("screen").value=val
    operatorClicked=false;
    

}else{

    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
}


function equalClick(){
    
    var newValue=document.getElementById("screen").value

    var oldValueF=parseFloat(oldValue)
    var newValueF=parseFloat(newValue)

    if(operator=="+")
    {

    var result1= (oldValueF+newValueF)
    document.getElementById("screen").value=result1

    }else if(operator=="-")
    {

    var result2= (oldValueF-newValueF)
    document.getElementById("screen").value=result2

    }else if(operator=="*")
    {

    var result3= (oldValueF*newValueF)
    document.getElementById("screen").value=result3

    }else if(operator=="/")
    {

    var result4= (oldValueF/newValueF)
    document.getElementById("screen").value=result4

    }

    
}

function clearDisplay(){

    document.getElementById("screen").value=""
}