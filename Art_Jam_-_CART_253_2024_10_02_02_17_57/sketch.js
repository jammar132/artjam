let selectedOption = 0;
let buttonW = 100; //Button width
let buttonH = 30; //Button height

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(220);
  fill(0);
  text("Welcome to my program!", width / 2, 50);
  text("Happy to see you", width / 2, 80);

//Handle selected options
  if (selectedOption === 1) {
    background(120,186,120);
    text("       - ", 200, 150);
    text("      | |", 200, 165);
    text("          | |__", 200, 180);
    text("   ------/ |__|", 200, 195);
    text("000000  |__|", 200, 210);
    text("000000  |__|", 200, 225);
    text("   -----\__|__|", 200, 240);
    text("Thank You!", width / 2, 100);
  } else if (selectedOption === 2) {
    background(154,154,255);
    text("Why don't eggs tell jokes?", width / 2, 170);
    text("They'd crack each other up.", width / 2, 200);
  } else if (selectedOption === 3) {
    background(220, 141, 155);
    text("A princess kissed an ugly frog,", width / 2, 170);
    text("and became an ugly frog too.", width / 2, 200);
    text("THE END.", width / 2, 230);
  }
  /*Call draw buttons function
  Put here so that buttons continue showing after selecting an     option */
  drawButtons();
}

function drawButtons() {
  let buttonY = height - 50; //Vertical position for buttons

//Draw the 'like' button
  if (isMouseOverButton(50, buttonY)) {
    fill(200); //Highlight button when hovered
  } else {
    fill(255);
  }
  rect(50, buttonY, buttonW, buttonH);
  fill(0);
  text("Like", 50 + buttonW / 2, buttonY + buttonH / 2); 

//Draw the 'joke' button
  if (isMouseOverButton(150, buttonY)) {
    fill(200);
  } else {
    fill(255);
  }
  rect(150, buttonY, buttonW, buttonH);
  fill(0);
  text("Joke", 150 + buttonW / 2, buttonY + buttonH / 2); 

//Draw the 'story' button
  if (isMouseOverButton(250, buttonY)) {
    fill(200);
  } else {
    fill(255);
  }
  rect(250, buttonY, buttonW, buttonH);
  fill(0);
  text("Story", 250 + buttonW / 2, buttonY + buttonH / 2);
}

// Check which button is clicked
function mousePressed() {
  if (isMouseOverButton(50, height - 50)) {
    selectedOption = 1;  //Like button pressed
  } else if (isMouseOverButton(150, height - 50)) {
    selectedOption = 2;  //Joke button pressed
  } else if (isMouseOverButton(250, height - 50)) {
    selectedOption = 3;  //Story button pressed
  }
}
function isMouseOverButton(x, y) {
  return mouseX > x && mouseX < x + buttonW && mouseY > y && mouseY < y + buttonH;
}