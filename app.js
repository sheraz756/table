function onclicking()
{
    let a = +document.querySelector("#value").value;
    let b = a;
    document.querySelector("#result").innerHTML = "";
    for (a=1;a<=10;a++){
        document.querySelector("#result").innerHTML+=b+"x"+a+"="+a*b+"<br>"
         }
    
}