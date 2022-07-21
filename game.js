
var buttonColours=["red", "blue", "green", "yellow"];

var gamePattern = [];


var userClickedPattern = [];


var start_to_toggle=false;
// if(start_to_toggle==tV
var level=0;
$(document).keypress(function(){
    if(!start_to_toggle)
    {
    $("#level-title").text("Level" + " " +level);
   
    newSequence();
    start_to_toggle=true;
    }

});
// start_to_toggle=flase;



$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    var audio = new Audio('sounds/' + userChosenColour +'.mp3');
audio.play();
animatePress(userChosenColour);
checkPattern(userClickedPattern.length-1);
});


function newSequence(){
    userClickedPattern=[];
    // while(level<50){
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    $("#level-title").text("Level" + " " +level);
    var randomChosenColour=buttonColours[randomNumber];
       gamePattern.push(randomChosenColour);
    //   animatePress(randomChosenColour);
     $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   var audio = new Audio('sounds/' + randomChosenColour +'.mp3');
      audio.play();
    // }
}

function animatePress(colourName){
    $('#' + colourName).addClass("pressed");
   setTimeout(function(){
    $('#' + colourName).removeClass("pressed");
   },100); 
}


function checkPattern(currentLevel){
    
     if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
         if(userClickedPattern.length==gamePattern.length){
             setTimeout(function(){
                 newSequence();
                },1000);
         }
     }
     else{
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
       
        // $(document).keypress(function(){
            restart();
        // });
     }
}

function restart(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    start_to_toggle=false;
}


// document.addEventListener("keypress", function (event) {
//   for (var i = 0; i < 10; i++) {
//     var levelNumber = 1;
//     $("h1").text("Level" + " " + levelNumber);
    
//     console.log(buttonNumber);
    
//     var id='';
//     var id1='';
//     if (randomNumber ===1) {
//         buttonNumber.push(".red");
//         id="red";
//         id1=".red";
//       } else if (randomNumber === 2) {
//         buttonNumber.push(".green");
//         id="green";
//         id1=".green";
//       } else if (randomNumber === 3) {
//         buttonNumber.push(".blue");
//         id="blue";
//         id1=".blue";
//       } else if (randomNumber === 4) {
//         buttonNumber.push(".yellow");
//         id="yellow";
//         id1=".yellow";
//       }
//       console.log(id);
//       
//     // buttonNumber.push(randomNumber);
//     // for (var j = 0; j < buttonNumber.length; j++) {
     
//     //   console.log(buttonNumber[j]);
     
//     // }
//     // levelNumber++;
//   }
// //   alert("key pressed");
// });
