var game = new Phaser.Game(
  '100',
  '100',
  Phaser.CANVAS,
  'phaser-injection',
  {
    preload: preload,
    create: create,
    update: update,
  },
);

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
var isMobile = window.mobileAndTabletcheck();
var gameScreen = document.getElementById('phaser-injection');
console.log(`<isMobile: ${isMobile}>`);
// document.body.style.cursor = 'none';

function preload() {
  game.load.image('space', 'assets/sprites/space.png');
  game.load.spritesheet('spaceship', 'assets/sprites/spaceshipframes.png', 58, 45, 4);
  game.load.spritesheet('bullet', 'assets/sprites/bullet.png');
  game.load.spritesheet('alien', 'assets/sprites/enemy.png');
  game.load.spritesheet('missile', 'assets/sprites/missile.png', 17, 70, 6);
  game.load.spritesheet('exmark', 'assets/sprites/exmark.png', 32, 32, 5)
  game.load.spritesheet('explosion', 'assets/sprites/explosion.png', 96, 96, 12);
  game.load.spritesheet('laser', 'assets/sprites/laser.png', 25, 1600, 5);
  game.load.spritesheet('overheatBar', 'assets/sprites/overheatBar.png', 83, 56, 16);
  game.load.spritesheet('laserchargebar', 'assets/sprites/lasercharge.png', 83, 56, 16);
  game.load.spritesheet('pausebutton', 'assets/sprites/pausebutton.png', 19, 19);
  game.load.spritesheet('quitbutton', 'assets/sprites/quitbutton.png', 38, 14);
  game.load.spritesheet('resumebutton', 'assets/sprites/resumebutton.png', 38, 14);
  game.load.spritesheet('startbutton', 'assets/sprites/startbutton.png', 38, 14);
  game.load.spritesheet('restartbutton', 'assets/sprites/restartbutton.png', 38, 14);
  game.load.audio('hit', 'assets/soundeffects/hit.wav');
  game.load.audio('herodeath', 'assets/soundeffects/herodeath.wav');
  game.load.audio('fire', 'assets/soundeffects/fire.wav');
  game.load.audio('lasersound', 'assets/soundeffects/lasersound.wav');
  game.load.audio('track', 'assets/soundeffects/pixelrain.mp3');
  game.load.audio('missilelaunch', 'assets/soundeffects/missilelaunch.wav');
  game.load.bitmapFont('pixeltext', 'assets/bitmapfonts/carrier_command.png', 'assets/bitmapfonts/carrier_command.xml');
}

var background;
var cursors;

var explosions;
var plusPointTexts;

var difficulty = 1;

var player;
var aliens = { time: 0, };
var missiles = {
  warning: {},
  time: 3000,
  gap: 50,
};
var bullets = { time: 0, };

var sounds = {};
var score = {
  number: 0,
  time: 0,
  highscore: {
    number: 0,
  },
};

var laser = {
  fired: true,
  max: 50,
  charge: 0,
};

var overheat = {
  active: 0,
  unactive: 0,
  max: 50,
};

var pausemenu = {};
var startmenu = {};
var deathmenu = {};

function create() {
  // to stop phaser from pausing when loosing focus
  this.stage.disableVisibilityChange = true;

  keyESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  keyESC.onDown.add(pauseEvent);

  sounds.track = game.add.audio('track');
  sounds.hit = game.add.audio('hit');
  sounds.herodeath = game.add.audio('herodeath');
  sounds.fire = game.add.audio('fire');
  sounds.laser = game.add.audio('lasersound');
  sounds.missile = game.add.audio('missilelaunch');
  
  background = game.add.tileSprite(0, 0, game.width, 4000, 'space');
  background.smoothed = false;
  background.scale.setTo(2,2);
  game.stage.backgroundColor = '#0000ff';

  aliens.group = game.add.group();
  aliens.group.enableBody = true;
  aliens.group.physicsBodyType = Phaser.Physics.ARCADE;

  for (var i = 0; i < 200; i++) {
    var alien = aliens.group.create(game.rnd.integerInRange(25, game.width - 25), 0, 'alien', game.rnd.integerInRange(0, 36));
    alien.scale.setTo(0.8, 0.8);
    alien.anchor.y = 1;
    alien.anchor.x = 0.5;
    alien.checkWorldBounds = true;
    alien.events.onOutOfBounds.add(alienOut, this);
    alien.kill();
  }

  bullets.group = game.add.group();
  bullets.group.enableBody = true;
  bullets.group.physicsBodyType = Phaser.Physics.ARCADE;
  
  for (var i = 0; i < 20; i++) {
    var bullet = bullets.group.create(0, 0, 'bullet');
    bullet.exists = false;
    bullet.visible = false;
    bullet.checkWorldBounds = true;
    bullet.events.onOutOfBounds.add(resetBullet, this);
    bullet.anchor.x = 0.5;
    bullet.anchor.y = 0.5;
    bullet.scale.setTo(0.1, 0.1);
  }

  missiles.group = game.add.group();
  missiles.group.enableBody = true;
  missiles.group.physicsBodyType = Phaser.Physics.ARCADE;

  for (var i = 0; i < 50; i++) {
    var missile = missiles.group.create(0, 0, 'missile');
    missile.scale.setTo(1.2, 1.2);
    missile.anchor.x = 0.5;
    missile.anchor.y = 1;
    missile.smoothed = false;
    missile.animations.add('missilefly');
    missile.kill();
  }

  missiles.warning.group = game.add.group();
  missiles.warning.enableBody = true;
  missiles.warning.physicsBodyType = Phaser.Physics.ARCADE;

  for (var i = 0; i < 50; i++) {
    var warning = missiles.warning.group.create(0, 0, 'exmark');
    warning.scale.setTo(1.7, 1.7);
    warning.anchor.x = 0.5;
    warning.smoothed = false;
    warning.animations.add('exanim', [0, 1]);
    warning.animations.add('exanimwarn', [2, 3]);
    warning.kill();
  }
  
  laser.bar = game.add.sprite(0, game.height, 'laserchargebar');
  laser.bar.anchor.y = 1;
  laser.bar.scale.setTo(2, 2);
  laser.bar.smoothed = false;
  for (i = 0; i < 16; i++) {
    laser.bar.animations.add('lasercharge' + i, [i]);
  }
  laser.bar.animations.add('laserreload', [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

  overheat.bar = game.add.sprite(laser.bar.width + 50, game.height, 'overheatBar');
  overheat.bar.anchor.y = 1;
  overheat.bar.scale.setTo(2, 2);
  overheat.bar.smoothed = false;
  for (var i = 0; i < 16; i++) {
    overheat.bar.animations.add('overheatCharge' + i, [i]);
  }

  laser.sprite = game.add.sprite(0, 0, 'laser');
  game.physics.enable(laser.sprite, Phaser.Physics.ARCADE);
  laser.sprite.anchor.x = 0.5;
  laser.sprite.anchor.y = 1;
  laser.sprite.smoothed = false;
  laser.sprite.animations.add('laserbeam', [0,1,2,3,2,1]);
  laser.sprite.kill();

  plusPointTexts = game.add.group();
  plusPointTexts.enable = true;
  plusPointTexts.physicsBodyType = Phaser.Physics.ARCADE;
  
  for (var i = 0; i < 20; i++) {
    var text = game.add.bitmapText(alien.x, alien.y, 'pixeltext', '+100', 5);
    plusPointTexts.add(text);
    text.smoothed = false;
    text.anchor.setTo(0.5, 0.5);
    text.kill();
  }

  explosions = game.add.group();
  explosions.enableBody = true;
  explosions.physicsBodyType = Phaser.Physics.ARCADE;

  for (var i = 0; i < 200; i++) {
    var explosion = explosions.create(0, 0, 'explosion');
    explosion.anchor.x = 0.5;
    explosion.anchor.y = 0.5;
    explosion.smoothed = false;
    explosion.kill();
  }

  player = game.add.sprite(game.width / 2, 1000, 'spaceship');
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.scale.setTo(1.2, 1.2);
  player.anchor.x = 0.5;
  player.anchor.y = 0.5;
  player.body.collideWorldBounds = true;
  player.smoothed = false;
  player.animations.add('noDash', [0]);
  player.animations.add('dashRight', [3]);
  player.animations.add('dashLeft', [1]);

  startmenu.start = game.add.button(game.width/2, game.height/2 + 100, 'startbutton', start, this, 1, 0, 2);
  startmenu.start.anchor.x = 0.5;
  startmenu.start.anchor.y = 0.5;
  startmenu.start.smoothed = false;
  startmenu.start.scale.setTo(6, 6);

  startmenu.title = game.add.bitmapText(game.width / 2, startmenu.start.y - 200, 'pixeltext', 'UFO\n\nSWARM', 60);
  startmenu.title.align = 'center';
  startmenu.title.smoothed = false;
  startmenu.title.anchor.x = 0.5;
  startmenu.title.anchor.y = 0.5;

  deathmenu.restart = game.add.button(game.width/2, game.height/2, 'restartbutton', deathMenu, this, 1, 0, 2);
  deathmenu.restart.anchor.x = 0.5;
  deathmenu.restart.anchor.y = 0.5;
  deathmenu.restart.smoothed = false;
  deathmenu.restart.scale.setTo(6, 6);
  
  if (isMobile) {
    pausemenu.pause = game.add.button(game.width, game.height, 'pausebutton', pauseEvent, this, 1, 0, 2);
    pausemenu.pause.smoothed = false;
    pausemenu.pause.anchor.x = 1;
    pausemenu.pause.anchor.y = 1;
    pausemenu.pause.scale.setTo(6, 6);
  }

  pausemenu.resume = game.add.button(game.width/2, game.height/2, 'resumebutton', pauseEvent, this, 1, 0, 2);
  pausemenu.resume.anchor.x = 0.5;
  pausemenu.resume.anchor.y = 0.5;
  pausemenu.resume.smoothed = false;
  pausemenu.resume.scale.setTo(6, 6);
  pausemenu.resume.kill();

  pausemenu.quit = game.add.button(game.width/2, game.height/2 + pausemenu.resume.height + 10, 'quitbutton', quitEvent, this, 1, 0, 2);
  pausemenu.quit.anchor.x = 0.5;
  pausemenu.quit.anchor.y = 0.5;
  pausemenu.quit.smoothed = false;
  pausemenu.quit.scale.setTo(6, 6);
  pausemenu.quit.kill();

  pausemenu.title = game.add.bitmapText(game.width/2, game.height/2 - pausemenu.resume.height - 50, 'pixeltext', 'PAUSED', 60);
  pausemenu.title.smoothed = false;
  pausemenu.title.anchor.x = 0.5;
  pausemenu.title.anchor.y = 0.5;
  pausemenu.title.kill();

  score.content = game.add.bitmapText(game.width / 2, 100, 'pixeltext', '0', 30);
  score.content.smoothed = false;
  score.content.anchor.x = 0.5;
  score.content.anchor.y = 0.5;

  score.highscore.content = game.add.bitmapText(game.width / 2, deathmenu.restart.y - 150, 'pixeltext', '0', 20);
  score.highscore.content.smoothed = false;
  score.highscore.content.align = 'center';
  score.highscore.content.anchor.x = 0.5;
  score.highscore.content.anchor.y = 0.5;

  menuReady();

  cursors = game.input.keyboard.createCursorKeys();
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
}

function update() {
  background.tilePosition.y += 0.15;
  if (player.alive) background.tilePosition.y += 0.3;
  if (!startmenu.isOn) {
    mainGame();
  }
}

function mainGame() {
  // if (game.time.now > score.time) {
  //   score.number += 1;
  //   score.time = game.time.now + 10;
  // }
  score.content.text = score.number;
  difficulty = Math.floor(score.number / 1000);
  var distanceX = game.input.mousePointer.x - player.x;

  game.physics.arcade.overlap(bullets.group, aliens.group, collisionBullet, null, this);
  game.physics.arcade.overlap(player, aliens.group, collisionEnemy, null, this);
  game.physics.arcade.overlap(player, missiles.group, collisionEnemy, null, this);

  game.physics.arcade.moveToPointer(player, 6000, game.input.activePointer, 50);
  player.body.velocity.setMagnitude(Math.min(3000, player.body.velocity.getMagnitude()));

  laser.state = Math.floor(laser.charge / laser.max * 15);
  if (laser.state < 15) {
    laser.bar.animations.play('lasercharge' + laser.state);
  }

  overheat.state = Math.floor(overheat.active / overheat.max * 15);
  overheat.bar.animations.play('overheatCharge' + overheat.state);

  if (distanceX > 15) {
    player.animations.play('dashRight', 30);
  } else if (distanceX < -15) {
    player.animations.play('dashLeft', 30);
  } else {
    player.animations.play('noDash', 30);
  }

  if (player.alive && laser.charge >= laser.max) {
    if (laser.fired) {
      laser.fired = false;
      laserBeam();
      // overheat.active = 0;
    }
    game.physics.arcade.overlap(laser.sprite, aliens.group, collisionLaser, null, this);
    laser.sprite.body.velocity.x = player.body.velocity.x;
    laser.sprite.body.velocity.y = player.body.velocity.y;
    laser.sprite.x = player.x;
    laser.sprite.y = player.y - 25;
  } else if (game.input.activePointer.leftButton.isDown && player.alive && overheat.active < overheat.max) {
    fireBullet();
    overheat.unactive = 0;
  } else if (overheat.unactive < 50) {
      overheat.unactive++
  } else if (overheat.active > 0) {
      overheat.active--;
      if (overheat.active <= 1) overheat.cool = false;
  }
  
  if (game.time.now > missiles.time) {
    missiles.max = game.width >= 4 * player.width ? Math.floor(game.width/missiles.gap)/2 : Math.floor((game.width - 2 * player.width)/missiles.gap);
    spawnMissiles(difficulty >= 100 ? missiles.max : missiles.max * difficulty/100);
    missiles.time = game.time.now + 6000 - (2000 * (difficulty >= 100 ? 1 : difficulty/100));
  }

  aliens.timeDiffrence = Math.floor(16000 / (difficulty + 40)) * 1536 / game.width;
  aliens.v = difficulty * 0.75 + 100;
  spawnEnemy(aliens.timeDiffrence, aliens.v);

}

function fireBullet() {
  if (game.time.now > bullets.time) {
    overheat.active += 1;
    bullet = bullets.group.getFirstExists(false);
    sounds.fire.play('', 0, 0.5);
    bullet.reset(player.x, player.y - 40);
    bullet.body.velocity.y = -2000;
    bullets.time = game.time.now + 160;
  }
}

function spawnEnemy(time, v) {
  if (game.time.now > aliens.time) {
    var alien = aliens.group.getFirstExists(false);
    alien.reset(game.rnd.integerInRange(alien.width/2, game.width - alien.width/2), 0);
    alien.body.velocity.y = v;
    aliens.time = game.time.now + time;
  }
}

function spawnMissile(x = game.rnd.integerInRange(25, game.width - 25), y = 0) {
  var warning = missiles.warning.group.getFirstExists(false);
  warning.reset(x, 0);
  warning.animations.play('exanim', 15, true);
  game.time.events.add(Phaser.Timer.SECOND * 2, () => {
    warning.play('exanimwarn', 15, true);
  }, this);
  game.time.events.add(Phaser.Timer.SECOND * 3, () => {
    warning.kill();
    var missile = missiles.group.getFirstExists(false);
    missile.reset(x, y);
    missile.animations.play('missilefly', 10, true);
    missile.body.velocity.y = 1500;
    missile.checkWorldBounds = true;
    missile.events.onOutOfBounds.add(missileOut, this);
    sounds.missile.play('', 0, 0.5);
  }, this);
}

function spawnMissiles(numberOfMissiles) {
  var missilesWidth = missiles.gap * numberOfMissiles;
  var startingPointX = game.rnd.integerInRange(25, game.width - 25 - missilesWidth);
  var x;
  for (var i = 0; i < numberOfMissiles; i++) {
    x = startingPointX + missiles.gap * i;
    spawnMissilesDelay(x, i);
  }
}

function spawnMissilesDelay(x, i) {
  game.time.events.add(80 * i, () => {
    spawnMissile(x);
  }, this);
}

function resetBullet(bullet) {
  bullet.kill();
}

function alienOut(alien) {
  // if (player.alive) {
  //   score.number -= 300;
  //   var text = game.add.bitmapText(alien.x, alien.y - 20, 'pixeltext', '-300', 5);
  //   text.anchor.setTo(0.5, 0.5);
  //   setTimeout(function() { text.destroy() }, 500);
  // }
  alien.kill();
}

function missileOut(missile) {
  missile.kill();
}

function collisionEnemy(player, enemy) {
  sounds.herodeath.play('', 0, 0.5);
  var explosion = explosions.getFirstExists(false);
  explosion.reset(player.x, player.y);
  explosion.scale.setTo(2, 2);
  explosion.animations.add('explode');
  explosion.animations.play('explode', 30);
  game.time.events.add(Phaser.Timer.SECOND * 0.5, () => {
    explosion.scale.setTo(1, 1);
    explosion.kill();
  }, this);
  enemy.kill();
  player.kill();
  laser.sprite.kill();
  sounds.track.stop();
  deathMenu();
}

function collisionBullet(bullet, alien) {
  laser.charge++;
  sounds.hit.play('', 0, 0.5);
  alienKilled(alien);
  bullet.kill();
}

function collisionLaser(laser, alien) {
  alienKilled(alien);
}

function alienKilled(alien) {
  score.number += 100;
  var text = plusPointTexts.getFirstExists(false);
  text.reset(alien.x, alien.y);
  var explosion = explosions.getFirstExists(false);
  explosion.reset(alien.x, alien.y);
  explosion.animations.add('explode');
  explosion.animations.play('explode', 30);
  alien.kill();
  game.time.events.add(Phaser.Timer.SECOND * 0.5, () => {
    text.kill();
    explosion.kill();
  }, this);
}

function laserBeam() {
  laser.sprite.reset(player.x, player.y - 25);
  laser.bar.animations.play('laserreload', 16);
  sounds.laser.play('', 0, 0.5);
  laser.sprite.animations.play('laserbeam', 20, true);
  game.time.events.add(Phaser.Timer.SECOND * 2, () => {
    laser.charge = 0;
    laser.fired = true;
    laser.sprite.kill();
  }, this);
}

function pauseEvent() {
  if (startmenu.isOn || deathmenu.isOn) return;

  if (!game.paused) {
    game.paused = true;
    pausemenu.title.revive();
    pausemenu.resume.revive();
    pausemenu.quit.revive();
    return;
  }
  pausemenu.title.kill();
  pausemenu.quit.kill();
  pausemenu.resume.kill();
  game.paused = false;
}

function quitEvent() {
  sounds.track.stop();
  restart();
  pauseEvent();
  menuReady();
}

function menuReady() {
  startmenu.title.revive();
  startmenu.isOn = true;
  score.content.kill();
  score.highscore.content.kill();
  player.kill();
  laser.bar.kill();
  overheat.bar.kill();
  if (isMobile) pausemenu.pause.kill();
  deathmenu.restart.kill();
  startmenu.start.revive();
}

function gameReady() {
  startmenu.title.kill();
  sounds.track.play('', 0, 0.5, true);
  startmenu.isOn = false;
  laser.bar.revive();
  overheat.bar.revive();
  player.revive();
  score.content.revive();
  player.reset(game.input.x, game.input.y);
  laser.bar.revive();
  if (isMobile) pausemenu.pause.revive();
  overheat.bar.revive();
}

function deathMenu() {
  if (deathmenu.isOn) {
    deathmenu.restart.kill();
    score.highscore.content.kill();
    restart();
    player.revive();
    deathmenu.isOn = false;
    sounds.track.play('', 0, 0.5, true);
    return;
  }
  if (score.highscore.number < score.number) {
    score.highscore.number = score.number;
  }
  score.highscore.content.text = `GAME OVER\n\nHIGHSCORE: ${score.highscore.number}`
  score.highscore.content.revive();
  deathmenu.restart.revive();
  deathmenu.isOn = true;
}

function start() {
  startmenu.start.kill();
  gameReady();
}

function restart() {
  missiles.warning.group.callAll('kill');
  aliens.group.callAll('kill');
  explosions.callAll('kill');
  explosions.callAll('scale.setTo(1, 1)');
  plusPointTexts.callAll('kill');
  game.time.events.removeAll();
  laser.fired = true;
  score.number = 0;
  laser.charge = 0;
  overheat.active = 0;
}
