
function switcher(prop) {
  
  const circle = document.getElementById("header__switch-circle");
  const bg = document.body;
  if (prop == false) {
    circle.style.transform = "translateX(50px)";
    bg.style.background = "white";
    prop = true;
  } else {
    circle.style.transform = "none";
    bg.style.background= "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgb(0, 36, 43) 75%)";
    prop = false;
  }
}

export default switcher;