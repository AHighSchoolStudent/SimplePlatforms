Game.initCanvas("game-screen", true);

Game.background("gray");

new Player(0, 50, new RectangleMesh(24, 24), "blue", true,function () {
  Camera.x = lerp(Camera.x, this.x - width / 2 + 12.5, 0.1);
  Camera.y = lerp(Camera.y, this.y - height / 2 + 12.5, 0.1);

  if (Input.W || Input[38] || Input[32] || (Input.mouseDown && Input.mouseY <= Game.height / 2)) {
    this.jump();
  }

  if (Input.A || Input[37] || (Input.mouseDown && Input.mouseX <= Game.width / 2)) {
    this.addForce(-2.2, 0);
  }

  if (Input.D || Input[39] || (Input.mouseDown && Input.mouseX >= Game.width / 2)) {
    this.addForce(2.2, 0);
  }

  if (this.y > height * 2) {
    this.die();
  }

  if (Input.R) {
    Game.Reset();
  }
});

new PersistentObject(0, 0, function () { }, function () {
  $ctx.fillStyle = "white";
  $ctx.font = "20px Comic Sans MS";
  $ctx.fillText(Statistics.deaths + " deaths", 5, 20);
  $ctx.fillText((Statistics.secondsToFinish || Statistics.secondsElapsed) + " secs", 5, 40);
});

// increase FPS slightly
frameRate(155);

// setup fullscreen button
const fullscreenBtn = document.getElementById("fullscreen-button");
fullscreenBtn.addEventListener("click", () => fullscreen());

Game.Start(16);