pizza_arry=[];
function submit(){
    var name1=document.getElementById("pepperoni_pizza").value;
    var name2=document.getElementById("paneer_pizza").value;
    var name3=document.getElementById("veg_pizza").value;
    var name4=document.getElementById("tomato_pizza").value;
    pizza_arry.push(name1);
    pizza_arry.push(name2);
    pizza_arry.push(name3);
    pizza_arry.push(name4);
console.log(student_arry);
document.getElementById("display_name").innerHTML=pizza_arry;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    pizza_arry.sort();
    console.log(pizza_arry) ;
    document.getElementById("display_name").innerHTML=pizza_arry;
}

