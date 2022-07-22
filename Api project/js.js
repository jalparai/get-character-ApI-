function add(){
 
 const value =   document.getElementById("name_value").value
 if(value ===''){
    alert("Enter your name")
 }
 else{
    var img =document.getElementById("img_point")
    img.setAttribute("src",`https://joeschmoe.io/api/v1/${value}`)
 }


value= document.getElementById("name_value").value=" "


}