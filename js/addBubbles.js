window.onload = function(){
	createlogo();
	addBubbles("canvas1","right");
	addBubbles("canvas0","left");
}

function addBubbles(theCanvas,direction,docHeight){	
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	
	var W = canvas.width = Math.floor(window.innerWidth/8);
	var H = canvas.height = window.innerHeight;
	
	canvas.setAttribute("id", theCanvas);
	canvas.setAttribute("style", "width:"+W+"px;height:"+H+"px;position:fixed;top:0;"+direction+":0;");

	// max particles
	var mp = parseInt(H/100);
	// maximum particles calculate the whole number divided by height
	// console.log("bubbles: " + mp); // verify that number (i.e.) 1200px high = 12 bubbles
	
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*10+3, //radius
			d: Math.random(), //density*mp
			a:0, // alpha - start transparent
			c:mp + Math.random()*10 // circle - sine wave random start position
		})
	}
	
	//Lets draw the bubbles
	function draw() {
		ctx.clearRect(0,0,W,H);	// or you'll see trails
		
		for(var i = 0; i < mp; i++) {
			
			var p = particles[i];
						
			ctx.moveTo(p.x, p.y);
			ctx.beginPath(); 
			ctx.strokeStyle = ctx.fillStyle = "rgba(255, 255, 255," + p.a +")"; // we'll be increasing the alpha to opaque
			ctx.lineWidth = 1;
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, false); // make a circle from the particle object in the array
			//ctx.fill(); // no fill, just bubbles
			ctx.stroke();
		}
	
		update();
		
	}
	
	// move the bubbles
	var increase = Math.PI * 2 / 150;
	
	function update() {
		
		for(var i = 0; i < mp; i++) {
			var p = particles[i];
			
			if (p.a < 1){
				p.a += .003; // fade in unless opaque
			}
			
			p.x += Math.sin(p.c)/2 +.01;
			
			p.c += increase; 
			
			p.y -=  p.d + 0.5;
			
			if(p.x < -10 || p.x > 135 || p.y < -8){
				particles[i] = {x: Math.random()*W, y: H , r: Math.random()*10+3, d: p.d, a:0, c: i};
			}
		}
	}
var body = document.body;
body.appendChild(canvas);
setInterval(draw,22);
}