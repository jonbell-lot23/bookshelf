## Let’s Try Making a Game

Last night I showed my nephews how ChatGPT works, and at one point they asked me to make a "car game." So I tried this:

**Can you write a car game for me in Javascript?**

	// Set up the canvas
	const canvas = document.getElementById('gameCanvas');
	const ctx = canvas.getContext('2d');
	
	// Create the car object
	const car = {
	  x: 10,
	  y: 10,
	  width: 20,
	  height: 10,
	  color: '#ff0000',
	  speed: 2
	};
	
	// Draw the car on the canvas
	function drawCar() {
	  ctx.fillStyle = car.color;
	  ctx.fillRect(car.x, car.y, car.width, car.height);
	}
	
	// Update the car's position
	function updateCar() {
	  car.x += car.speed;
	  if (car.x \> canvas.width) {
	    car.x = 0;
	  }
	}
	
	// Main game loop
	function gameLoop() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  drawCar();
	  updateCar();
	  requestAnimationFrame(gameLoop);
	}
	
	// Start the game
	requestAnimationFrame(gameLoop);

**Thanks for that. Can you add WASD controls?**

	// Set up the canvas
	const canvas = document.getElementById('gameCanvas');
	const ctx = canvas.getContext('2d');
	
	// Create the car object
	const car = {
	  x: 10,
	  y: 10,
	  width: 20,
	  height: 10,
	  color: '#ff0000', // Set the car color to red
	  speed: 2
	};
	
	// Draw the car on the canvas
	function drawCar() {
	  ctx.fillStyle = car.color;
	  ctx.fillRect(car.x, car.y, car.width, car.height);
	}
	
	// Update the car's position based on the keys pressed
	function updateCar(key) {
	  if (key === 'w') {
	    car.y -= car.speed;
	  }
	  if (key === 'a') {
	    car.x -= car.speed;
	  }
	  if (key === 's') {
	    car.y += car.speed;
	  }
	  if (key === 'd') {
	    car.x += car.speed;
	  }
	}
	
	// Main game loop
	function gameLoop() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  drawCar();
	  requestAnimationFrame(gameLoop);
	}
	
	// Start the game
	requestAnimationFrame(gameLoop);
	
	// Listen for keypress events
	document.addEventListener('keypress', (event) =\> {
	  updateCar(event.key);
	});


**This is pretty good, but the car isn't rotating when it turns. It's just sort of floating in space. Can you make sure it rotates correctly while turning?**

	
	// Set up the canvas
	const canvas = document.getElementById('gameCanvas');
	const ctx = canvas.getContext('2d');
	
	// Create the car object
	const car = {
	  x: 10,
	  y: 10,
	  width: 20,
	  height: 10,
	  color: '#ff0000', // Set the car color to red
	  speed: 5, // Increase the car's speed
	  angle: 0 // Add a property to store the car's angle
	};
	
	// Draw the car on the canvas
	function drawCar() {
	  ctx.save(); // Save the current state of the canvas
	
	  // Translate and rotate the canvas to draw the car at the correct angle
	  ctx.translate(car.x + car.width / 2, car.y + car.height / 2);
	  ctx.rotate(car.angle);
	  ctx.translate(-(car.x + car.width / 2), -(car.y + car.height / 2));
	
	  ctx.fillStyle = car.color;
	  ctx.fillRect(car.x, car.y, car.width, car.height);
	
	  ctx.restore(); // Restore the canvas to its original state
	}
	
	// Update the car's position and angle based on the keys pressed
	function updateCar(key) {
	  if (key === 'w') {
	    car.y -= car.speed;
	  }
	  if (key === 'a') {
	    car.x -= car.speed;
	    car.angle -= 0.1; // Rotate the car to the left
	  }
	  if (key === 's') {
	    car.y += car.speed;
	  }
	  if (key === 'd') {
	    car.x += car.speed;
	    car.angle += 0.1; // Rotate the car to the right
	  }
	}
	
	// Main game loop
	function gameLoop() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  drawCar();
	  requestAnimationFrame(gameLoop);
	}
	
	// Start the game
	requestAnimationFrame(gameLoop);
	
	// Listen for keypress events
	document.addEventListener('keypress', (event) =\> {
	  updateCar(event.key);
	});

All of this code worked correctly, although the rotate script still isn't great. Rather than smoothly turning 90 degrees on turns, it sort of glides a few degrees at a time, which isn't what I intended at all. But let's stop there and think about this.

No, I don't really have a game. There's nothing fun about it. If I ended up developing this game for 100 hours, these 6 minutes would only represent 1/1000th of the time working on the game. But, to state the obvious, it's the most important 1/1000th of the entire enterprise.

All of this is new to me, so that 1/1000th of help cannot be overstated. Let's go through some things that this program has been able to teach me with a few quick prompts:

* canvas.getContext('2d'); is a thing
* You can kick off a game loop with requestAnimationFrame(gameLoop);
* You can put all your variables into car object, which is pretty tidy


For a real game developer, none of these insights are new. For someone like me who's just trying to get started, this is a revelation. I can look at the code and see lines like

> car.angle -= 0.1; // Rotate the car to the left"

and assume that changing that number to 90 is likely to give me the clear turning I'm looking for. Or decide that the game loop would be a good place to place an enemy or obstacle.

Thinking about this inspires me to add some background graphics. So what happens when I ask about that? I get a helpful tutorial for how to use CSS for this. Which is good to know! For all I knew, Javascript games used some other technique, but with this I can quickly confirm best practices as I learn new things.

I don't have a game. But this is still a game changer.

---- 

I am going to ask the bot to write me a better conclusion. Let's see what it tells me to do.

**I am writing an essay about writing games with openAI technology. The conclusion is that the tech can't write whole games for me but it's still a really big deal. Do you understand?**

Yes, I understand that you are writing an essay about using OpenAI technology to write games, and your conclusion is that while AI cannot currently write entire games on its own, it is still a significant development in the field of game development. Is there anything else you would like to know?

**Can you write a better conclusion than "I don't have a game. But this is still a game changer" ?**

Sure, here is one possible alternative for a conclusion:

"In conclusion, while AI technology is not yet advanced enough to write entire games on its own, it is still a significant development in the field of game development. Through the use of procedural generation and machine learning, AI can help to automate the creation of game content and make game systems more intelligent and reactive. As AI technology continues to advance, it will likely play an increasingly important role in the game development process, leading to more innovative and engaging games for players to enjoy."

**That's very wordy and not very witty. I was hoping for a pun. Can you say that again with fewer words and make it more witty?**

Sure, here is a shorter and more humorous version of the conclusion:

"In conclusion, while AI may not be able to write the next big game hit, it's still a game-changer. With its ability to procedurally generate content and make game systems smarter, it's sure to play a big role in the future of game development. So even though AI can't write the whole game, it's still a pretty big deal."

---- 

This is me thinking out loud about a game I could develop, if I had the motivation, skill, and time. This will prove how much motivation I have, because if I can't even write down some ideas, I certainly won't be able to actually write anything.





