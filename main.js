
var clutch = 40; 

alert("Welcome to the big time, you are the galaxy player on the Coruscant Roundballers your team is in the finals against Corellia Spacecadets. You will be picking any numbers between 1 and 100. You need to score 2 points to win the game you have the ball everything is in your hands. You are starting with a Clutch of 40 you must at least end with a Clutch of 30 to not be benched next year and a Clutch of 20 to not be kicked off the team next year. At the end of each guess you'll either be given more Cluth or it'll be taken away.... Good Luck. ")

var understand = prompt("Do you understand how to play? yes or no")

if (understand != "yes" || understand != "no") {

	while(understand != "yes"){
		alert("Welcome to the big time, you are the galaxy player on the Coruscant Roundballers your team is in the finals against Corellia Spacecadets. You will be picking any numbers between 1 and 100. You need to score 2 points to win the game you have the ball everything is in your hands. You are starting with a Clutch of 40 you must at least end with a Clutch of 30 to not be benched next year and a Clutch of 20 to not be kicked off the team next year. At the end of each guess you'll either be given more Cluth or it'll be taken away.... Good Luck. ")


			understand = prompt("Do you understand how to play? yes or no")
	}	
}

var firstNum = prompt("You are a superstar Coruscant Roundfball player and you are known for your clutch 4th quarters. This is game 7 of the finals your team is down by 2 points. You got the ball and there is only 2 seconds on the clock. You dribble down and into the paint, you have 1 guy at the top of the 3 and one time out. Pick a number between 1 and 100 and decide the outcome of the game. ")

if (firstNum >= 66){
	alert("You drove the ball deeper into the lane, you put up a terrible shot. You were fouled in the process and the ball somehow rolled in. You get to take 1 shot at the free throw line.")

	var clutchEarned = 40

		clutch = clutch + clutchEarned

		alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 
 

	var secondNum = prompt("You are at the free throw line and your heart is racing. You are clutch though so you take a deep breath and focus. You roll the ball a few times over your hand balance and release. Pick another number between one and 100, and let chance decide if you will be eliminated or play on.")

		if (secondNum > 80 && secondNum <= 100) {
			alert("You truly are clutch, all net no sweat... But you knew you would make it. The crowd jumps up and your teamates rush the floor. You keep that arm up in shooting position for the cameras. This moment deserves a sprite, You just won the finals. ")

		var clutchEarned = 40

			clutch = clutch + clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 

		}else if(secondNum > 40 && secondNum <= 80){
			alert("Is there a breeze in the stadium. the ball goes around the rim and  almost stops on the back rolling in. Suddenly almost by a miracle the ball rolls out... Man, talk about bad luck, but at least you got your team to overtime....")

		var clutchEarned = 20

			clutch = clutch + clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 

			
		}else{
			alert("They call you clutch? You air balled and missed the rim terribly. Next time maybe you should aim higher, or shoot for something bigger. You should probably give up on everything you do and anything your ever gonna do. However you made it to overtime, maybe you could reedeem yourself.  ")

		var clutchEarned = 20

			clutch = clutch - clutchEarned

			alert("Your Clutch Points went down by " + clutchEarned + " points you now have " + clutch + " points") 
		}


}else if (firstNum >=  33 && firstNum <= 65 ){
	alert("you passed the ball to the top of the arch, your guy faked the shot resituated and threw up the three ball. Everyone holds there breath as the ball floats toward the rim. The ball bounces of the rim and goes out ouf bounds. The crowd sighs, but your teamate was fouled in the process, so he gets to go to the line and shoot 3.")

	var clutchEarned = 10

			clutch = clutch + clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 

		var teamateShot = prompt("Your teamate can shoot the lights out from 3 range but is only a 75% shooter from the line. You probably should have picked a better person to pass to. Whats done is done and you have no control over it now, not very clutch if you ask me. You know the drill pick a number between 1 and 100 and see how it turns out")

		if (teamateShot >= 50 && teamateShot <= 100){
			alert("HA HA, that 75% holds true.... Your teamate made 1 and missed two, I guess you should have took the shot yourself instead of hesitating and being afraid of a few bumps. You're going to overtime.")

		var clutchEarned = 10

			clutch = clutch - clutchEarned

			alert("Your Clutch Points went down by " + clutchEarned + " points you now have " + clutch + " points") 

		}else if (teamateShot >=1 && teamateShot < 50){
			alert("Your teamate puts all three shots in the net with ease. You still seemed to have made the right call, You my friend are as clutch as clutch gets. Even if your not shooting the final shot you the man that'll get the job done. ")

			var clutchEarned = 20

			clutch = clutch + clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 

		}else {
			alert("News Flash!!!! Your the star on the team, why would you give the ball to someone else, you know what to do with it. Your teamate missed everyshot, your team lost. Obviously you don't have any faith in your own ability... Good luck in the Australian League. ")

			var clutchEarned = 20

			clutch = clutch - clutchEarned

			alert("Your Clutch Points went down by " + clutchEarned + " points you now have " + clutch + " points") 
		}


} else if (firstNum < 33){
	alert("You looked to pass the ball for the 3, but you saw it to late and they cut of the lane. You decided to drive the ball to the hoop but got tripped up and the ball was knocked away. You dove to the ground wrestled the ball from the other team and had to call a timeout. Now you have none remaining.") 

		var clutchEarned = 5

			clutch = clutch + clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 


		var secondChance = prompt("You get a Do Over, somehow you were lucky enough to get the ball back and call a timeout so don't screw this up also. The plan is to inbound the ball to you, there is 0.9 seconds on the clock. That is more than enough time to put up a good shot. Pick another number between 1 and 100.... No more Do overs")

		if (secondChance >= 1 && secondChance < 40) {
			alert("You inbound the ball and throw up a wild shot. It hits off the back of the rim, you lose. Can't be mad at that you held on for the both clutch shots and missed better luck next year. You deserve a Best Brands Lemon Lime Soda")

		var clutchEarned = 5

			clutch = clutch + clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 
		
		} else if (secondChance >= 40 && secondChance <= 50){
			alert("I don't know how you do it.... You inbound the ball double teamed no less attempt a cross over only to have the lane closed step back and let it go. All net, no didn't even have to watch the ball go in, you turn and run to your bench immedietly after the ball leaves your hand. You just one the championship the stadium goes insane. ")

		var clutchEarned = 35

			clutch = clutch + clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 

		}else if (secondChance > 50 && secondChance <= 100){
			alert("You break free and get the ball turn and throw up a descent bankshot but it's a little too long. Good try better luck next year. ")

			var clutchEarned = 5

			clutch = clutch + clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 

		}else{
			alert("You inbound the ball only to have it slapped away, but you somehow recover. With time ticking down you go to make your move for your favorite spot on the arch... The ball bounces of your foot and rolls out of bounds. You call yourself a professional? That's going viral, hit the showeres. Good luck in the Chineese League")

			var clutchEarned = -15

			clutch = clutch - clutchEarned

			alert("Your Clutch Points went up by " + clutchEarned + " points you now have " + clutch + " points") 
		}
	}

	if (clutch >= 60) {
			alert("Congratulations you scored the max " + clutch + " points you are still as clutch as clutch comes, see you next season")
		}else if (clutch < 59 && clutch >= 50){
			alert("Congratulations you scored " + clutch + " keep hitting the gym you'll soon be  very clutch, see you next season")
		}else if(clutch < 49 && clutch > 30){
			alert("We can fit you in next season, even if on the bench.")
		 }else{
			alert("Take a hike, you only scored " + clutch + " your off the team good luck overseas")
		}
