console.log("Click start to begin");
playSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", false);
onEvent("creditButton", "click", function (){
    setScreen("attributions.html");
});
onEvent("startButton", "click", function( ) {
  setScreen("second.html");
  console.log("On question screen choose a personality that reminds you of yourself");
  console.log("Click one of the 4 buttons");
});


// onEvent("sun-btn", "click", function( ) {
//   stopSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", true);
//   setScreen("gameTime.html");
// });

// onEvent("wall-btn", "click", function( ) {
//   stopSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", true);
//   setScreen("gameTime.html");
// });

// onEvent("queen-btn", "click", function( ) {
//   stopSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", true);
//   setScreen("gameTime.html");
// });