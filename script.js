// cache CSS <h3> tag 
var css=document.querySelector(".css");
// cache the input pick colour
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
// cache body to acces it css background color
var body=document.getElementById("gradient");
// DRY function to assign colour pick of user to the background of our website
function setGradientColor(){
//String should be written in "" while variable like color.value should not 
	body.style.background="linear-gradient(to right, "
							+ color1.value
							+ ","
							+ color2.value
							+ ")"; 	
	// assiging linear-gradient to the css class to automatically read the (R,G,B) color picked by the user  
	css.textContent=body.style.background;						
}
// adding event listener "input" to color1 and color 2 
// When the 2 "input color type is selected" the setGradientColor is instatiated automatically   
color1.addEventListener("input", setGradientColor);
color2.addEventListener("input", setGradientColor);

	