function Calculate(){
    const value1= document.getElementById("value1").value
    const value2= document.getElementById("value2").value
    const opt= document.getElementById("operation").value
    let result

    switch(opt){
        case "Add":
             result= parseInt(value1)+parseInt(value2)
            break;
        case "Sub":
            result= parseInt(value1)-parseInt(value2)
            break;
        case "Mul":
            result= parseInt(value1)*parseInt(value2)
            break;
    }
    window.alert("The result is "+result)
    
    // document.getElementsByClassName("output")[0].innerHTML=result
    
}