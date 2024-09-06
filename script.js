function sumofTwoNumbers()
{
 let num1=parseFloat(document.getElementById("first-input").value);
 let num2=parseFloat(document.getElementById("second-input").value);
 let sum=num1+num2;
 document.getElementById("sum").innerHTML=sum;
       

}