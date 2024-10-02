// Level 1
new Level([
  new Text("The controls are the usual controls.", "Comic Sans MS", 14, -99, 11, "black"),//Controls Text Shadow
  new Text("The controls are the usual controls.", "Comic Sans MS", 14, -100, 10, "white"),//Controls Text
  new Text("Level 1", "Comic Sans MS", 14, -129, -10, "black"),//Level 1 Text Shadow
  new Text("Level 1", "Comic Sans MS", 14, -130, -11, "white"),//Level 1 Text
  new Object(0, 200, new RectangleMesh(713, 25), "black", 1),//Floor 1
  new Object(320, 150, new RectangleMesh(50, 75), "#802b00", 0, function () {//Door To Wall Jumps Learning
    if (this.collidesWithPlayer) {
      $player.x = 794;
      $player.y = 150;
    }
  }),
  new Object(297, 150, new RectangleMesh(7, 75), "#4d1a00", 0),//Door Border Left
  new Object(347, 150, new RectangleMesh(7, 75.5), "#4d1a00", 0),//Door Border Right
  new Object(320, 115.8, new RectangleMesh(50, 7), "#4d1a00", 0),//Door Border Top
  new Object(307, 155, new RectangleMesh(8, 8), "#ffcc00", 0),//Door Handle
  new Text("Go on walk through the door.", "Comic Sans MS", 14, 234, 61, "black"),//Enter Door Text Shadow
  new Text("Go on walk through the door.", "Comic Sans MS", 14, 235, 60, "white"),//Enter Door Text
  new Object(1000, 200, new RectangleMesh(450, 25), "black", 1),//Floor 2
  new Text("Press And Hold Jump And Go Towards The Wall.", "Comic Sans MS", 14, 999, 21, "black"),//How To Wall Jump Text Shadow
  new Text("Press And Hold Jump And Go Towards The Wall.", "Comic Sans MS", 14, 1000, 20, "white"),//How To Wall Jump Text
  new Object(1150, 125, new RectangleMesh(25, 150), "black", 1),//Wall For Learning Wall Jumps
  new Text("Take A Leap Of Faith", "Comic Sans MS", 14, 1449, 21, "black"),//Leap Of Faith Text Shadow
  new Text("Take A Leap Of Faith", "Comic Sans MS", 14, 1450, 20, "white"),//Leap Of Faith Text
  new Object(1700, 400, new RectangleMesh(450, 400), "gray", 9)//End Of Level
]);

// Level 2
new Level([
  new Text("The red is bad who could have guessed as well as maybe any other color, I don't really care though.", "Comic Sans MS", 14, -299, 11, "black"),//Bad Colors Text Shadow
  new Text("The red is bad who could have guessed as well as maybe any other color, I don't really care though.", "Comic Sans MS", 14, -300, 10, "white"),//Bad Colors Text
  new Text("Level 2", "Comic Sans MS", 14, -319, -10, "black"),//Level 2 Text Shadow
  new Text("Level 2", "Comic Sans MS", 14, -320, -11, "white"),//Level 2 Text
  new Object(0, 200, new RectangleMesh(713, 25), "black", 1),//Floor 1
  new Object(126, 175.5, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "black", 2),//Kill Triangle Shadow
  new Object(125, 174.5, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),//Kill Triangle
  new Text("You know the drill take a leap", "Comic Sans MS", 14, 426, 86, "black"),//You Know Text Shadow
  new Text("You know the drill take a leap", "Comic Sans MS", 14, 425, 85, "white"),//You Know Text
  new Object(800, 550, new RectangleMesh(450, 450), "gray", 9)//End Of Level
]);

// Level 3
new Level([
  new Text("Somethings in game can make you bounce.", "Comic Sans MS", 14, -99, 11, "black"),//Controls Text Shadow
  new Text("Somethings in game can make you bounce.", "Comic Sans MS", 14, -100, 10, "white"),//Controls Text
  new Text("Level 3", "Comic Sans MS", 14, -129, -10, "black"),//Level 1 Text Shadow
  new Text("Level 3", "Comic Sans MS", 14, -130, -11, "white"),//Level 1 Text
  new Object(0, 200, new RectangleMesh(713, 25), "black", 1),//Floor 1
  new Text("<- Maybe this bounces.", "Comic Sans MS", 14, 266, 181, "black"),//Maybe That Text Shadow
  new Text("<- Maybe this bounces.", "Comic Sans MS", 14, 265, 180, "white"),//Maybe That Text
  new Object(225, 175, new RectangleMesh(54, 30), "black", 3),//Trampoline 1 Shadow
  new Object(225, 175, new RectangleMesh(50, 25), "orange", 3),//Trampoline 1
  new Object(325, -100, new RectangleMesh(54, 30), "black", 3),//Trampoline 2 Shadow
  new Object(325, -100, new RectangleMesh(50, 25), "orange", 3),//Trampoline 2
  new Object(425, -375, new RectangleMesh(54, 30), "black", 3),//Trampoline 3 Shadow
  new Object(425, -375, new RectangleMesh(50, 25), "orange", 3),//Trampoline 3
  new Object(800, 400, new RectangleMesh(350, 400), "gray", 9)//End Of Level
]);

// Level 4
new Level([
  new Object(-12.5, -15, new RectangleMesh(150, 410, false), "lightblue", 4),
  new Object(-12.5, 200, new RectangleMesh(150, 25, false), "black", 1),
  new Object(0, 100, new RectangleMesh(125, 25, false), "black", 1),
  new Object(-25, 0, new RectangleMesh(125, 25, false), "black", 1),
  new Object(0, -100, new RectangleMesh(125, 25, false), "black", 1),
  new Object(-25, -200, new RectangleMesh(125, 25, false), "black", 1),
  new Object(-12.5, -225, new RectangleMesh(150, 25, false), "green", 9),
  new Object(-175, 200, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = -12.5;
      $player.y = -275;
    }
  }),
]);

// Level 5
new Level([
  new Object(0, 200, new RectangleMesh(150, 25), "black", 1),
  new Object(200, 200, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple moving platform
    if (!this.dir) {
      this.dir = 1;
    }
    this.x += (this.dir * 0.1) * Time.deltaTime;
    if ($player.objectsColliding.includes(this)) {
      $player.x += (this.dir * 0.1) * Time.deltaTime;
    }
    if (this.x >= 400) {
      this.x = 400;
      this.dir = -1;
    } else if (this.x <= 200) {
      this.x = 200;
      this.dir = 1;
    }
  }),
  new Object(650, 200, new RectangleMesh(100, 25), "green", 9),
  new Object(100, 280, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 650;
      $player.y = 150;
    }
  }),
]);

// Level 6
new Level([
  new Object(-175, 280, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 675;
      $player.y = -75;
    }
  }),
  new Object(0, 200, new RectangleMesh(150, 25), "black", 1),
  new Object(100, 150, new RectangleMesh(50, 50), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 500;
      $player.y = -100;
    }
  }),
  new Object(500, -100, new RectangleMesh(50, 50), "gray", 0),
  new Object(500, 100, new RectangleMesh(100, 25), "black", 1),
  new Object(675, 100, new RectangleMesh(100, 25), "green", 9)
]);

// Level 7
new Level([
  new Object(0, 200, new RectangleMesh(150,25),
  "black", 1),
  new Object(200, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(400, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(600, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(800, 200, new RectangleMesh(100, 25), "green", 9),
  new Object(-175, 200, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 800;
      $player.y = 175;
    }
  }),
]);

// Level 8
new Level([
  new Object(0, 200, new RectangleMesh(150,25),
  "black", 1),
  new Object(150, 200, new RectangleMesh(150, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 500;
      $player.y = -100;
    }
  }),
  new Object(500, 100, new RectangleMesh(150,25),
  "black", 1),
  new Object(700, 100, new RectangleMesh(50, 25), "orange", 3),
  new Object(700, -100, new RectangleMesh(150, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 2600;
      $player.y = -75;
    }
  }),
  new Object(2600, 100, new RectangleMesh(150,25),
  "black", 1),
  new Object(2800, 100, new RectangleMesh(100, 25), "green", 9),
  new Object(-175, 200, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 2800;
      $player.y = -75;
    }
  }),
]);

// Level 9
new Level([
  new Object(0, 200, new RectangleMesh(150, 25), "black", 1),
  new Object(200, 200, new RectangleMesh(50, 25), "orange", 3),
  new Object(550, 180, new RectangleMesh(50, 25), "orange", 3),
  new Object(900, 160, new RectangleMesh(50, 25), "orange", 3),
  new Object(1200, 100, new RectangleMesh(50, 25), "orange", 3),
  new Object(1500, 40, new RectangleMesh(50, 25), "orange", 3),
  new Object(1800, -20, new RectangleMesh(50, 25), "orange", 3),
  new Object(2000, -20, new RectangleMesh(100, 25), "green", 9),
  new Object(280, 200, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 2000;
      $player.y = -75;
    }
  }),
]);

// Level 10
new Level([
  new Object(0, 200, new RectangleMesh(150, 25), "black", 1),
  new Object(200, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(400, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(600, 200, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple moving platform
    if (!this.dir) {
      this.dir = 1;
    }
    this.x += (this.dir * 0.1) * Time.deltaTime;
    if ($player.objectsColliding.includes(this)) {
      $player.x += (this.dir * 0.1) * Time.deltaTime;
    }
    if (this.x >= 800) {
      this.x = 800;
      this.dir = -1;
    } else if (this.x <= 600) {
      this.x = 600;
      this.dir = 1;
    }
  }),
  new Object(1200, 200, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple moving platform
    if (!this.dir) {
      this.dir = 1;
    }
    this.x += (this.dir * 0.1) * Time.deltaTime;
    if ($player.objectsColliding.includes(this)) {
      $player.x += (this.dir * 0.1) * Time.deltaTime;
    }
    if (this.x >= 1000) {
      this.x = 1000;
      this.dir = -1;
    } else if (this.x <= 1200) {
      this.x = 1200;
      this.dir = 1;
    }
  }),
  new Object(1400, 200, new RectangleMesh(100, 25), "green", 9),
  new Object(100, 300, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 1400;
      $player.y = 175;
    }
  }),
]);

// Level 11
new Level([
  new Object(0, 200, new RectangleMesh(150, 25), "black", 1),
  new Object(200, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(400, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(600, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(800, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(1000, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(1200, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(1400, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(1600, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(1800, 200, new RectangleMesh(100, 25), "green", 2),
  new Object(1700, 250, new RectangleMesh(25, 25), "red", 9),
  new Object(100, 300, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 1700;
      $player.y = 200;
    }
  }),
]);

// Level 12
new Level([
  new Object(0, 400, new RectangleMesh(400, 25), "black", 1),
  new Object(0, 150, new RectangleMesh(50, 25), "black", 1),
  new Object(-150, 363, new RectangleMesh(25, 50), "saddlebrown", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = -20000;
      $player.y = 0;
    }
  }),
  new Object(0, 363, new RectangleMesh(25, 50), "saddlebrown", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = -20000;
      $player.y = 0;
    }
  }),
  new Object(150, 363, new RectangleMesh(25, 50), "saddlebrown", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 20000;
      $player.y = 0;
    }
  }),
  new Text("Pick A Door Any Door", "Comic Sans MS", 14, -65, 0, "white"),
  new Object(20000, 0, new RectangleMesh(50, 25), "orange", 3),
  new Object(20350, -50, new RectangleMesh(50, 25), "orange", 3),
  new Object(20700, -100, new RectangleMesh(50, 25), "orange", 3),
  new Object(21000, 150, new RectangleMesh(150, 25), "black", 1),
  new Object(21200, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(21400, 187.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(21600, 250, new RectangleMesh(100, 25), "green", 9),
  new Object(-250, 250, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 21600;
      $player.y = -200;
    }
  }),
]);

// Level 13
new Level([
  new Object(0, 200, new RectangleMesh(300, 25), "saddlebrown", 1),//Floor
  new Object(137, 113, new RectangleMesh(25, 150), "steelblue", 1),//Wall 1
  new Object(30, -20, new RectangleMesh(25, 150), "steelblue", 1),//Wall 2
  new Object(137, -153, new RectangleMesh(25, 150), "steelblue", 1),//Wall 3
  new Object(300, -200, new RectangleMesh(50, 25), "orange", 3),//Trampoline
  new Object(450, -450, new RectangleMesh(50, 50), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 10000;
      $player.y = -600;
    }
  }),//Teleporter 1
  new Object(10200, 0, new RectangleMesh(50, 50), "darkgrey", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 20000;
      $player.y = -75;
    }
  }),//Teleporter 2
  new Object(20000, 0, new RectangleMesh(150, 25), "saddlebrown", 1),//Floor 2
  new Object(20200, 0, new RectangleMesh(150, 25), "green", 9),//End Pad
  new Object(-75, 0, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 20200;
      $player.y = -75;
    }
  }),
]);

// Level 14
new Level([
  new Object(0, -250, new RectangleMesh(150, 800, false), "lightblue", 4),
  new Object(0, 150, new RectangleMesh(150, 25), "black", 1),
  new Object(-88, -238, new RectangleMesh(25, 800), "black", 1),
  new Object(88, -238, new RectangleMesh(25, 800), "black", 1),
  new Object(0, -150, new RectangleMesh(50, 50), "darkslategray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 10000;
      $player.y = -200;
    }
  }),
  new Object(50, -150, new RectangleMesh(50, 50), "darkslategray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 20000;
      $player.y = -200;
    }
  }),
  new Object(-50, -150, new RectangleMesh(50, 50), "darkslategray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = -20;
      $player.y = -250;
    }
  }),
  new Object(0, -550, new RectangleMesh(50, 50), "darkslategray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 0;
      $player.y = -750;
    }
  }),
  new Object(50, -550, new RectangleMesh(50, 50), "darkslategray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = -70000;
      $player.y = -75;
    }
  }),
  new Object(-50, -550, new RectangleMesh(50, 50), "darkslategray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 70000;
      $player.y = -250;
    }
  }),
  new Object(0, -650, new RectangleMesh(150, 25), "black", 1),
  new Object(0, -675, new RectangleMesh(50, 25), "forestgreen", 3),
  new Object(50, -950, new RectangleMesh(50, 25), "forestgreen", 3),
  new Object(0, -1225, new RectangleMesh(50, 25), "forestgreen", 3),
  new Object(-50, -1500, new RectangleMesh(25, 25), "forestgreen", 3),
  new Object(-50, -1800, new RectangleMesh(25, 25), "darkslategray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = -30000;
      $player.y = -125;
    }
  }),
  new Object(-30000, 0, new RectangleMesh(900, 50, false), "lightblue", 4),
  new Object(-30550, -10, new RectangleMesh(200, 25), "green", 2),
  new Object(-88, -650, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = -70000;
      $player.y = -75;
    }
  }),
  new Object(-70000, 0, new RectangleMesh(150, 25), "green", 9),
]);

// Level 15
new Level([
  new Object(0, 200, new RectangleMesh(400, 25), "goldenrod", 1),
  new Object(187.5, 125, new RectangleMesh(25, 125), "firebrick", 1),
  new Object(75, 0, new RectangleMesh(25, 125), "firebrick", 1),
  new Object(187, -100, new RectangleMesh(25, 125), "firebrick", 1),
  new Object(187, -300, new RectangleMesh(25, 125), "firebrick", 1),
  new Object(125, -375, new RectangleMesh(150, 25), "goldenrod", 1),
  new Object(63, -413, new RectangleMesh(25, 50), "saddlebrown", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 30000;
      $player.y = -75;
    }
  }),
  new Object(30000, 0, new RectangleMesh(150, 25), "goldenrod", 1),
  new Object(30200, 0.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(30400, 0.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.005 * Time.deltaTime);
  }),
  new Object(30600, 0.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(31400, 0, new RectangleMesh(1000, 410, false), "turquoise", 4),
  new Object(31600, -40, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, 40, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, 80, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, -80, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, -120, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, -160, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, -200, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, 120, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, 160, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(31600, 200, new PolygonMesh([
    new Vector2(-20, 0),
    new Vector2(0, -40),
    new Vector2(20, 0)
  ]), "red", 2),
  new Object(32000, 165.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(32200, 165.5, new RectangleMesh(100, 25, false), "black", 1, function () {
    // simple rotating platform
    this.rotate(0.001 * Time.deltaTime);
  }),
  new Object(32400, 165, new RectangleMesh(100, 25), "green", 9)
]);

// Level 16
new Level([
  new Object(0, 200, new RectangleMesh(400, 25), "ghostwhite", 1),
  new Object(187.5, 125, new RectangleMesh(25, 125), "lime", 1),
  new Object(187, -100, new RectangleMesh(25, 125), "lime", 1),
  new Object(187, -300, new RectangleMesh(25, 125), "lime", 1),
  new Object(187, -500, new RectangleMesh(25, 125), "lime", 1),
  new Object(187, -700, new RectangleMesh(25, 125), "lime", 1),
  new Object(250, -750, new RectangleMesh(150, 25), "ghostwhite", 1),
  new Object(400, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.0006 * Time.deltaTime);
  }),
  new Object(-225, 200, new RectangleMesh(25, 25), "gray", 0, function () {
    if (this.collidesWithPlayer) {
      $player.x = 250;
      $player.y = -780;
    }
  }),
  new Object(550, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.005 * Time.deltaTime);
  }),
  new Object(700, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.0006 * Time.deltaTime);
  }),
  new Object(850, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.005 * Time.deltaTime);
  }),
  new Object(1000, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.0006 * Time.deltaTime);
  }),
  new Object(1150, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.005 * Time.deltaTime);
  }),
  new Object(1300, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.0006 * Time.deltaTime);
  }),
  new Object(1450, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.005 * Time.deltaTime);
  }),
  new Object(1600, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.0006 * Time.deltaTime);
  }),
  new Object(1750, -760, new RectangleMesh(100, 25, false), "chocolate", 1, function () {
    this.rotate(0.005 * Time.deltaTime);
  }),
  new Object(1900, -760, new RectangleMesh(50, 25), "crimson", 3),
  new Object(1913, -1060, new RectangleMesh(100, 25), "magenta", 9),
]);
