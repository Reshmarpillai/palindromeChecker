const input = document.getElementById("input");

function reverseStr(str){
   return str.split("").reverse().join("")
   
}

function checker(){
    const word = input.value.toLowerCase();
    const reverse=reverseStr(word);
    
    if(word===reverse)
    {
        alert("palindrom")
    }
    else{
        alert("not palindrom")
    }
    input.value=""
}
    
