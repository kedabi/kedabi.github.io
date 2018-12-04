function setup() {
  createCanvas(400, 400);
	background(147, 255, 237);
}

function draw() {
	if(mouseIsPressed){
	background(random(255),random(255),random(255));}
	fill(255, 250, 130);
	ellipse(mouseX,mouseY,100,100);
	fill(255, 255, 255);
	rect(random(400), random(400), 10, 10);
	frameRate(20);
	rect(10, 285,555, 145);
	fill(175, 255, 122);
	rect(100, 185,255, 145);
	fill(130, 159, 255);
	triangle(100, 187,230,100,355,187);
	rect(200, 230, 55, 100);
}
