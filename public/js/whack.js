var timer= 30;
var score = 0;
var highScore = 0;
$("#lose").hide();

$("#start").one('click', function(){
	startGame();
	$("#start").html("Game Started");
	$("#guacamole").hide();
	
});

$(".gameboard").on('click', ".active", function(){
	score+=1;
	$("#score").html("Score: " + score);

});

function startGame(){
	var intervalId = setInterval(function() {
		$(".timer").html("Timer: " + timer);
		timer-=1; 
		if(timer == 0){
			clearInterval(intervalId);
			// disable();
			$("#score").html("Score: " + score);
			}
		}, 1000);

	var moles= setInterval(function() {

		var random = randomNumber(1,9);
		moleup(random);
		if(timer === 0){
			$("#score").html("Score: " + score);
			$(".timer").html("Timer: " + timer);
			if(score >=20) {
				$("#guacamole").show();
			} else {
				$("#lose").show();
			}
			clearInterval(moles);
			endgame();
		}
	},1000);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function moleup(padNumber) {
	$("[data-hole='"+ padNumber +"']").addClass("active");
	
	setTimeout(function(){
		$("[data-hole='"+ padNumber +"']").removeClass("active");
	}, 1000);	
}

function endgame() {
	console.log(score);
		if(score >= highScore){
			$("#highScore").html("High Score: " + score);	
			highScore = score;
			score = 0;
			$("#score").html("Score: " + score);
		} else {
			score = 0;
		}
} 



// function disable(){
// 	$("#start").off('click');
// }
// function enable(){
// 	timer = 10;
// 	$("#start").on('click', startGame);

// }