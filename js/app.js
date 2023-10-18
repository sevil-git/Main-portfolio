var darkmode = document.getElementById("darkmode");
var dark1 = document.getElementById("dark1");

darkmode.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    darkmode.src = "img/moon.png";
  }else{
    darkmode.src = "img/sun.png";
  }

  
}
