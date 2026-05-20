// ── CIRCLE IMAGES ──────────────────────────────────────────────────
const CIRCLE_NAMES = {5:"blue", 4:"red", 3:"green", 2:"teal", 1:"pink"};
const circleImgs = {};
Object.entries(CIRCLE_NAMES).forEach(([hp, color]) => {
  const img = new Image();
  img.src = `gfx/board/circle_${color}.png`;
  circleImgs[+hp] = img;
});
const CIRCLE_FRAMES = {
  5: {glow:'#00e5ff'},  // blue
  4: {glow:'#ff4444'},  // red
  3: {glow:'#aaff00'},  // green
  2: {glow:'#2dd4bf'},  // teal
  1: {glow:'#ff4ddb'},  // pink
};

// ── TRIANGLE IMAGES ──────────────────────────────────────────────
const TRIANGLE_NAMES = {5:"blue", 4:"red", 3:"green", 2:"teal", 1:"pink"};
const triangleImgs = {};
Object.entries(TRIANGLE_NAMES).forEach(([hp, color]) => {
  const img = new Image();
  img.src = `gfx/board/triangle_${color}.png`;
  triangleImgs[+hp] = img;
});
const TRIANGLE_FRAMES = {
  5: {glow:'#00e5ff'},  // blue
  4: {glow:'#ff4444'},  // red
  3: {glow:'#aaff00'},  // green
  2: {glow:'#2dd4bf'},  // teal
  1: {glow:'#ff4ddb'},  // pink
};

// ── BALL IMAGE ───────────────────────────────────────────────────
const ballImg = new Image();
ballImg.src = 'gfx/board/ball.png';
const ballPurpleImg = new Image();
ballPurpleImg.src = 'gfx/board/ball_purple.png';

// ── SQUARE IMAGES ──────────────────────────────────────────────────
const SQUARE_NAMES = {5:"blue", 4:"red", 3:"green", 2:"teal", 1:"pink"};
const squareImgs = {};
Object.entries(SQUARE_NAMES).forEach(([hp, color]) => {
  const img = new Image();
  img.src = `gfx/board/square_${color}.png`;
  squareImgs[+hp] = img;
});
const SQUARE_FRAMES = {
  5: {glow:'#00e5ff'},  // blue
  4: {glow:'#ff4444'},  // red
  3: {glow:'#aaff00'},  // green
  2: {glow:'#2dd4bf'},  // teal
  1: {glow:'#ff4ddb'},  // pink
};

const boardImg = new Image();
boardImg.src = 'gfx/board/board.png';
const limitLineImg = new Image();
limitLineImg.src = 'gfx/board/limitline.png';
const bgImg = new Image();
bgImg.src = 'gfx/Bg/bg.png';

// SPARKLE VFX FRAMES (ball counter)
const ballSparkleFrames = [];
for(let i = 0; i < 18; i++){
  const img = new Image();
  img.src = `gfx/vfx/sparkle/sparkle_${String(i).padStart(2,'0')}.png`;
  ballSparkleFrames.push(img);
}

// COLLECT VFX FRAMES
const collectCircleFrames = [];
for(let i = 0; i < 25; i++){
  const img = new Image();
  img.src = `gfx/vfx/collect/collect_circle/collect-circle_${String(i).padStart(2,'0')}.png`;
  collectCircleFrames.push(img);
}
const collectSplashFrames = [];
for(let i = 0; i < 10; i++){
  const img = new Image();
  img.src = `gfx/vfx/collect/collect_splash/collect-splash_${String(i).padStart(2,'0')}.png`;
  collectSplashFrames.push(img);
}

// IMPACT VFX FRAMES
const impactCircleFrames = [];
for(let i = 0; i < 13; i++){
  const img = new Image();
  img.src = `gfx/vfx/impact/impact_circle/impact-circle_${String(i).padStart(2,'0')}.png`;
  impactCircleFrames.push(img);
}
const impactSplashFrames = [];
for(let i = 0; i < 10; i++){
  const img = new Image();
  img.src = `gfx/vfx/impact/impact_splash/impact-splash_${String(i).padStart(2,'0')}.png`;
  impactSplashFrames.push(img);
}
const impactSparkleFrames = [];
for(let i = 0; i < 13; i++){
  const img = new Image();
  img.src = `gfx/vfx/impact/impact_sparkle/impact-sparkle_${String(i).padStart(2,'0')}.png`;
  impactSparkleFrames.push(img);
}

// BOOSTER IMAGES
const boosterBtnImg        = new Image(); boosterBtnImg.src        = 'gfx/boosters/button.png';
const boosterBtnPressedImg = new Image(); boosterBtnPressedImg.src = 'gfx/boosters/button_pressed.png';
const boosterTimeImg        = new Image(); boosterTimeImg.src        = 'gfx/boosters/time_icon.png';
const boosterTimePressedImg = new Image(); boosterTimePressedImg.src = 'gfx/boosters/time_icon_pressed.png';
const boosterExtraImg        = new Image(); boosterExtraImg.src        = 'gfx/boosters/extra_icon.png';
const boosterExtraPressedImg = new Image(); boosterExtraPressedImg.src = 'gfx/boosters/extra_icon_pressed.png';
const boosterEnergyImg        = new Image(); boosterEnergyImg.src        = 'gfx/boosters/energy_icon.png';
const boosterEnergyPressedImg = new Image(); boosterEnergyPressedImg.src = 'gfx/boosters/energy_icon_pressed.png';
const boosterTagAddImg    = new Image(); boosterTagAddImg.src    = 'gfx/boosters/tag_add.png';
const boosterTagNumberImg = new Image(); boosterTagNumberImg.src = 'gfx/boosters/tag_number.png';
const collectBaseImg   = new Image(); collectBaseImg.src   = 'gfx/boosters/collect_base.png';
const collectEnergyImg = new Image(); collectEnergyImg.src = 'gfx/boosters/collect_energy.png';
const collectExtraImg  = new Image(); collectExtraImg.src  = 'gfx/boosters/collect_extra.png';
const collectTimeImg   = new Image(); collectTimeImg.src   = 'gfx/boosters/collect_time.png';
const collectGlowImg   = new Image(); collectGlowImg.src   = 'gfx/boosters/collect_glow.png';
// Board: scaled so 613px-wide purple border fills 400px canvas width
const BOARD_SCALE  = 1.0;
const BOARD_W_PX   = 854;
const BOARD_H_PX   = 1490;
const BOARD_X_PX   = 0;
const BOARD_Y_PX   = 0;
// Play-field inner bounds (canvas coords) — 575x792 area starting at y=313
const PLAY_LEFT    = 140;
const PLAY_RIGHT   = 715;
const PLAY_TOP     = 313;
const PLAY_BOTTOM  = 1105;
// Shooter circle centre — dark circle spans canvas y=220..271, centre=246
const SHOOTER_CX   = 427;
const SHOOTER_CY   = 248;
const STEP_LBL_X   = 162;
const STEP_LBL_Y   = 247;
// Booster buttons — drawn inside canvas below play area
const BOOSTERS = [
  { type:'slow',    icon:()=>boosterTimeImg,   pressedIcon:()=>boosterTimePressedImg,   count:()=>puSlow,    iw:61, ih:72, cx:263, cy:1240 },
  { type:'shatter', icon:()=>boosterExtraImg,  pressedIcon:()=>boosterExtraPressedImg,  count:()=>puShatter, iw:68, ih:60, cx:427, cy:1240 },
  { type:'reset',   icon:()=>boosterEnergyImg, pressedIcon:()=>boosterEnergyPressedImg, count:()=>puReset,   iw:58, ih:73, cx:591, cy:1240 },
];
const BOOSTER_BTN = 134;
let pressedBooster = null;

// ── CANVAS ───────────────────────────────────────────────────────
const canvas  = document.getElementById('canvas');
const ctx     = canvas.getContext('2d');
const aimSvg  = document.getElementById('aim-overlay');
const W = 854, H = 1490;

// ── CONSTANTS ────────────────────────────────────────────────────
const BALL_R      = 12;
const BASE_SPD    = 10;
const GRAVITY     = 0.60;
const FRICTION    = 0.999;   // almost no friction
const HIT_DECAY   = 0.95;    // minimal speed loss on shape hit
const HIT_DECAY_WALL = 0.60; // significant speed loss on wall bounce
const MAX_SPD     = 22;
const SHAPE_R     = 30;
const VISUAL_R    = 67;  // half of largest drawn asset (circle 133px)
const MIN_SEP     = VISUAL_R * 2 + 10;
const SHOOTER_X   = SHOOTER_CX;
const SHOOTER_Y   = SHOOTER_CY;
const BALL_START_Y = SHOOTER_CY;  // ball sits at circle centre
const TOP_DANGER  = PLAY_TOP;
const MOVE_UP     = 160;
const SPAWN_Y_MIN = PLAY_BOTTOM - VISUAL_R * 2;
const SPAWN_Y_MAX = PLAY_BOTTOM - VISUAL_R;

const SHAPES = ['circle', 'square', 'triangle'];
const NEON_COLORS = [
  {fill:'#1a0050', stroke:'#ff4ddb'},
  {fill:'#001a3a', stroke:'#00e5ff'},
  {fill:'#001a00', stroke:'#aaff00'},
  {fill:'#1a0000', stroke:'#ff4444'},
  {fill:'#1a0a00', stroke:'#ff9900'},
];

// ── STATE ────────────────────────────────────────────────────────
let step, shapes, ball, hitFlash, splashAnims, sparkleAnims, collectCircleAnims, collectSplashAnims;
let ballsLeft, ballsToFire;
let ballSpeed, ballHits;
let totalScore = 0, gameStartTime = 0;
let gameState, overTimer, dyingShapes;
let aimAngle;
let puSlow, puShatter, puReset;
let energyBoostActive = false;
let collectiblePowerUpPending = false;
let energyCollectable = null;
let extraBallPowerUpPending = false;
let extraBallCollectable = null;
let slowTimePowerUpPending = false;
let slowTimePowerUpStepsLeft = 0;
let slowTimeCollectable = null;
let shapesSliding = false, slideAmt = 0, slidedAmt = 0, slideIsSlowTime = false;
let boosterCooldown = 0;
let shatterBoosterExtraBalls = 0;
let ballSparkleAnim = null;
let animId = null, lastTime = 0;
let bestScore = 0, bestStep = 0;
let isVideoReady = false, gamePaused = false;

function spawnEnergyCollectable(){
  const xMin = PLAY_LEFT  + VISUAL_R;
  const xMax = PLAY_RIGHT - VISUAL_R;
  const yMin = SPAWN_Y_MIN;
  const yMax = SPAWN_Y_MAX;
  const MAX_TRIES = 500;
  for(let attempt = 0; attempt < MAX_TRIES; attempt++){
    const x = xMin + Math.random() * (xMax - xMin);
    const y = yMin + Math.random() * (yMax - yMin);
    if(shapes && shapes.some(s => !s.dead && dist(x, y, s.x, s.y) < MIN_SEP)) continue;
    if(extraBallCollectable && !extraBallCollectable.dead && dist(x, y, extraBallCollectable.x, extraBallCollectable.y) < MIN_SEP) continue;
    if(slowTimeCollectable && !slowTimeCollectable.dead && dist(x, y, slowTimeCollectable.x, slowTimeCollectable.y) < MIN_SEP) continue;
    energyCollectable = { x, y, angle: Math.random() * Math.PI * 2,
      spinSpeed: (0.008 + Math.random() * 0.008) * (Math.random() < 0.5 ? 1 : -1),
      scale: 0, birth: Date.now(), dead: false };
    return;
  }
}
function spawnExtraBallCollectable(){
  const xMin = PLAY_LEFT  + VISUAL_R;
  const xMax = PLAY_RIGHT - VISUAL_R;
  const yMin = SPAWN_Y_MIN;
  const yMax = SPAWN_Y_MAX;
  const MAX_TRIES = 500;
  for(let attempt = 0; attempt < MAX_TRIES; attempt++){
    const x = xMin + Math.random() * (xMax - xMin);
    const y = yMin + Math.random() * (yMax - yMin);
    if(shapes && shapes.some(s => !s.dead && dist(x, y, s.x, s.y) < MIN_SEP)) continue;
    if(energyCollectable && !energyCollectable.dead && dist(x, y, energyCollectable.x, energyCollectable.y) < MIN_SEP) continue;
    if(slowTimeCollectable && !slowTimeCollectable.dead && dist(x, y, slowTimeCollectable.x, slowTimeCollectable.y) < MIN_SEP) continue;
    extraBallCollectable = { x, y, angle: Math.random() * Math.PI * 2,
      spinSpeed: (0.008 + Math.random() * 0.008) * (Math.random() < 0.5 ? 1 : -1),
      scale: 0, birth: Date.now(), dead: false };
    return;
  }
}

function spawnSlowTimeCollectable(){
  const xMin = PLAY_LEFT  + VISUAL_R;
  const xMax = PLAY_RIGHT - VISUAL_R;
  const yMin = SPAWN_Y_MIN;
  const yMax = SPAWN_Y_MAX;
  const MAX_TRIES = 500;
  for(let attempt = 0; attempt < MAX_TRIES; attempt++){
    const x = xMin + Math.random() * (xMax - xMin);
    const y = yMin + Math.random() * (yMax - yMin);
    if(shapes && shapes.some(s => !s.dead && dist(x, y, s.x, s.y) < MIN_SEP)) continue;
    if(energyCollectable && !energyCollectable.dead && dist(x, y, energyCollectable.x, energyCollectable.y) < MIN_SEP) continue;
    if(extraBallCollectable && !extraBallCollectable.dead && dist(x, y, extraBallCollectable.x, extraBallCollectable.y) < MIN_SEP) continue;
    slowTimeCollectable = { x, y, angle: Math.random() * Math.PI * 2,
      spinSpeed: (0.008 + Math.random() * 0.008) * (Math.random() < 0.5 ? 1 : -1),
      scale: 0, birth: Date.now(), dead: false };
    return;
  }
}

// ── START ────────────────────────────────────────────────────────
function startGame() {
  step=1; shapes=[]; ball=null; activeBalls=[]; hitFlash=[]; splashAnims=[]; sparkleAnims=[]; collectCircleAnims=[]; collectSplashAnims=[]; ballsLeft=1; ballsToFire=0;
  ballHits=0;
  puSlow=0; puShatter=0; puReset=0; aimAngle=null; gameState='idle'; overTimer=0; dyingShapes=[]; collectiblePowerUpPending=false; extraBallPowerUpPending=false; extraBallCollectable=null; slowTimePowerUpPending=false; slowTimePowerUpStepsLeft=0; slowTimeCollectable=null; shapesSliding=false; slideAmt=0; slidedAmt=0; slideIsSlowTime=false; boosterCooldown=0; shatterBoosterExtraBalls=0;
  totalScore = 0; gameStartTime = Date.now();
  hide('screen-start'); hide('screen-over');
  updateHeader();
  spawnInitialShapes();
  try { gamee.gameStart(); } catch(e) {}
  try { gamee.logEvent("game_start", "step_1"); } catch(e) {}
  cancelAnimationFrame(animId);
  lastTime=0;
  animId=requestAnimationFrame(loop);
}
function hide(id){ document.getElementById(id).classList.remove('show'); }
function show(id){ document.getElementById(id).classList.add('show'); }
function updateHeader(){ /* step drawn on canvas */ }

// ── SPAWNING ─────────────────────────────────────────────────────
function calcMaxHp(s){
  return s;
}
function calcCount(s){
  if(s <= 6) return 2 + Math.floor(s / 2) + Math.floor(Math.random() * 2);
  return 5 + Math.min(s - 6, 5) + Math.floor(Math.random() * 3);
}

function spawnInitialShapes(){
  placeShapes(calcCount(step), calcMaxHp(step), SPAWN_Y_MIN, SPAWN_Y_MAX);
}

function spawnNewRow(){
  const count = calcCount(step);
  const maxHp = calcMaxHp(step);
  const live = (shapes||[]).filter(s => !s.dead);
  const lowestY = live.length > 0 ? Math.max(...live.map(s => s.y)) : SPAWN_Y_MIN;
  const yMin = Math.min(lowestY + MIN_SEP, SPAWN_Y_MAX);
  placeShapes(count, maxHp, yMin, SPAWN_Y_MAX);
}

function makeShape(x, y, type, color, hp){
  const finalHp = Math.max(hp, 1);
  return {x, y, type, color, hp: finalHp, maxHp: finalHp, flash: 0, shake: 0, dead: false, scale: 0,
          birth: Date.now(), angle: Math.random()*Math.PI*2,
          spinSpeed: (0.008 + Math.random()*0.008) * (Math.random()<0.5?1:-1)};
}

function placeShapes(count, maxHp, yMin, yMax){
  const MAX_TRIES = 500;
  let placed = 0;
  for(let attempt = 0; attempt < MAX_TRIES && placed < count; attempt++){
    const x = PLAY_LEFT + VISUAL_R + Math.random() * Math.max(0, PLAY_RIGHT - PLAY_LEFT - VISUAL_R * 2);
    const y = yMin + Math.random() * Math.max(1, yMax - yMin);
    if(shapes.some(s => !s.dead && dist(x, y, s.x, s.y) < MIN_SEP)) continue;
    if(energyCollectable && !energyCollectable.dead && dist(x, y, energyCollectable.x, energyCollectable.y) < MIN_SEP) continue;
    if(extraBallCollectable && !extraBallCollectable.dead && dist(x, y, extraBallCollectable.x, extraBallCollectable.y) < MIN_SEP) continue;
    if(slowTimeCollectable && !slowTimeCollectable.dead && dist(x, y, slowTimeCollectable.x, slowTimeCollectable.y) < MIN_SEP) continue;
    const type  = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
    const hp    = maxHp === 1 ? (Math.random() < 0.12 ? 2 : 1) : 1 + Math.floor(Math.random() * maxHp);
    shapes.push(makeShape(x, y, type, color, hp));
    placed++;
  }
}

// ── INPUT ────────────────────────────────────────────────────────
canvas.addEventListener('mousemove',  e => onAim(getPos(e)));
canvas.addEventListener('touchmove',  e => { e.preventDefault(); onAim(getPos(e.touches[0])); }, {passive:false});
canvas.addEventListener('mousedown',  e => { const pos = getPos(e); const half = BOOSTER_BTN/2; for(const b of BOOSTERS){ if(pos.x >= b.cx-half && pos.x <= b.cx+half && pos.y >= b.cy-half && pos.y <= b.cy+half){ pressedBooster = b.type; useBooster(b.type); return; } } });
canvas.addEventListener('mouseup',    () => { pressedBooster = null; });
canvas.addEventListener('touchstart', e => { const pos = getPos(e.touches[0]); const half = BOOSTER_BTN/2; for(const b of BOOSTERS){ if(pos.x >= b.cx-half && pos.x <= b.cx+half && pos.y >= b.cy-half && pos.y <= b.cy+half){ pressedBooster = b.type; useBooster(b.type); return; } } }, {passive:true});
canvas.addEventListener('click',      e => handleCanvasClick(getPos(e)));
canvas.addEventListener('touchend',   e => { e.preventDefault(); pressedBooster = null; handleCanvasClick(getPos(e.changedTouches[0])); }, {passive:false});

function getPos(e){
  const r = canvas.getBoundingClientRect();
  return {x: e.clientX - r.left, y: e.clientY - r.top};
}
const AIM_PIVOT_Y = BALL_START_Y + 31;
function onAim({x, y}){
  if(gameState !== 'idle' && gameState !== 'aiming') return;
  const dx = x - SHOOTER_X, dy = y - AIM_PIVOT_Y;
  if(dy < 15) return;
  aimAngle = Math.atan2(dy, dx); gameState = 'aiming';
  drawAimLine(aimAngle);
}
function onShoot({x, y}){
  if(gameState !== 'idle' && gameState !== 'aiming') return;
  if(ballsLeft <= 0) return;
  const dx = x - SHOOTER_X, dy = y - AIM_PIVOT_Y;
  if(dy < 15) return;
  aimAngle = Math.atan2(dy, dx); fireBall();
}
function handleCanvasClick(pos){
  const half = BOOSTER_BTN / 2;
  for(const b of BOOSTERS){
    if(pos.x >= b.cx - half && pos.x <= b.cx + half &&
       pos.y >= b.cy - half && pos.y <= b.cy + half) return;
  }
  onShoot(pos);
}

// ── AIM LINE ─────────────────────────────────────────────────────
function drawAimLine(angle){
  aimSvg.innerHTML = '';
  const DOT_SPACING = 18; // fixed px between dot centers
  const NUM_DOTS    = 7;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  const startX = SHOOTER_X + dx * 20;

  for(let i = 1; i <= NUM_DOTS; i++){
    const px = startX + dx * i * DOT_SPACING;
    const py = BALL_START_Y + 34 + dy * i * DOT_SPACING;

    if(py > PLAY_BOTTOM) break;

    const t = i / (NUM_DOTS - 1);
    const alpha = 0.85 - t * 0.75;
    const r = Math.max(3, (1 - t * 0.35) * 5);

    const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    glow.setAttribute('cx', px); glow.setAttribute('cy', py);
    glow.setAttribute('r', r + 3);
    glow.setAttribute('fill', `rgba(134,44,230,${(alpha * 0.25).toFixed(2)})`);
    aimSvg.appendChild(glow);

    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', px); c.setAttribute('cy', py);
    c.setAttribute('r', r);
    c.setAttribute('fill', `rgba(255,255,255,${alpha.toFixed(2)})`);
    aimSvg.appendChild(c);
  }
}
function clearAim(){ aimSvg.innerHTML = ''; }

// ── FIRE ─────────────────────────────────────────────────────────
function fireBall(){
  clearAim(); gameState = 'shooting';
  const totalBalls = ballsLeft;
  const extraCount = shatterBoosterExtraBalls;
  shatterBoosterExtraBalls = 0;
  ballsLeft = 0;
  ballsToFire = 0;
  // Fire all balls with 500ms stagger — independent of previous ball landing
  for(let i = 0; i < totalBalls; i++){
    const isExtra = i >= totalBalls - extraCount;
    setTimeout(() => launchBall(isExtra), i * 500);
  }
}

let activeBalls = [];  // track all balls in flight

function launchBall(isExtra = false){
  ballHits = 0;
  const b = {
    x: SHOOTER_X, y: BALL_START_Y,
    vx: Math.cos(aimAngle) * BASE_SPD,
    vy: Math.sin(aimAngle) * BASE_SPD,
    alive: true, trail: [], isExtra,
  };
  activeBalls.push(b);
  ball = b;  // keep ball pointing to latest for render compat
}

// ── LOOP ─────────────────────────────────────────────────────────
function loop(ts){
  const dt = Math.min((ts - lastTime) / 16.67, 3);
  lastTime = ts;
  update(dt); render();
  animId = requestAnimationFrame(loop);
}

function update(dt){
  if(shapesSliding){
    const speed = slideIsSlowTime ? 1.5 : 20;
    const delta = Math.min(slideAmt - slidedAmt, speed * dt);
    shapes.forEach(s => { s.y -= delta; });
    if(energyCollectable && !energyCollectable.dead) energyCollectable.y -= delta;
    if(extraBallCollectable && !extraBallCollectable.dead) extraBallCollectable.y -= delta;
    if(slowTimeCollectable && !slowTimeCollectable.dead) slowTimeCollectable.y -= delta;
    [hitFlash, splashAnims, sparkleAnims, collectCircleAnims, collectSplashAnims].forEach(arr => {
      (arr||[]).forEach(a => { a.y -= delta; });
    });
    slidedAmt += delta;
    if(slidedAmt >= slideAmt - 0.01){ shapesSliding = false; finishEndTurn(); }
  }

  if(shapes) shapes.forEach(s => {
    if(!s.dead){ s.scale = Math.min(1, s.scale + dt * 0.06); s.angle = (s.angle||0) + (s.spinSpeed||0.003) * dt; }
    if(s.flash > 0) s.flash = Math.max(0, s.flash - dt * 0.1);
    if(s.shake > 0) s.shake = Math.max(0, s.shake - dt * 0.15);
  });
  if(energyCollectable && !energyCollectable.dead){
    energyCollectable.scale = Math.min(1, energyCollectable.scale + dt * 0.06);
    energyCollectable.angle += energyCollectable.spinSpeed * dt;
  }
  if(extraBallCollectable && !extraBallCollectable.dead){
    extraBallCollectable.scale = Math.min(1, extraBallCollectable.scale + dt * 0.06);
    extraBallCollectable.angle += extraBallCollectable.spinSpeed * dt;
  }
  if(slowTimeCollectable && !slowTimeCollectable.dead){
    slowTimeCollectable.scale = Math.min(1, slowTimeCollectable.scale + dt * 0.06);
    slowTimeCollectable.angle += slowTimeCollectable.spinSpeed * dt;
  }
  if(hitFlash) hitFlash = hitFlash.filter(h => { h.elapsed += dt; return h.elapsed < 30; });
  if(splashAnims) splashAnims = splashAnims.filter(a => { a.elapsed += dt; return a.elapsed < 20; });
  if(collectCircleAnims) collectCircleAnims = collectCircleAnims.filter(a => { a.elapsed += dt; return a.elapsed < 50; });
  if(collectSplashAnims) collectSplashAnims = collectSplashAnims.filter(a => { a.elapsed += dt; return a.elapsed < 20; });
  if(sparkleAnims) sparkleAnims = sparkleAnims.filter(a => { a.elapsed += dt; return a.elapsed < 15; });
  if(ballSparkleAnim){ ballSparkleAnim.elapsed += dt; if(ballSparkleAnim.elapsed >= 36) ballSparkleAnim = null; }
  if(gameState === 'dying'){
    overTimer -= dt;
    if(overTimer <= 0){
      gameState = 'over';
      document.getElementById('over-step').textContent = 'Step ' + String(step).padStart(2,'0');
      show('screen-over');
      saveProgress();
      try { gamee.logEvent("game_over", totalScore + "," + step); } catch(e) {}
      ensureRewardedAdButton();
      try { gamee.gameOver(); } catch(e) {}
    }
  }

  // Process all active balls
  if(activeBalls && activeBalls.length > 0){
    activeBalls = activeBalls.filter(b => b.alive);
    const shapeSnap = (shapes || []).slice();

    activeBalls.forEach(b => {
      b.trail.push({x: b.x, y: b.y});
      if(b.trail.length > 9) b.trail.shift();

      b.vy += (energyBoostActive ? 0.90 : GRAVITY) * dt;
      b.vx *= Math.pow(FRICTION, dt);
      b.x += b.vx * dt;
      b.y += b.vy * dt;

      const wallDecay = energyBoostActive ? 0.95 : HIT_DECAY_WALL;
      if(b.x - BALL_R < PLAY_LEFT)  { b.x = PLAY_LEFT  + BALL_R; b.vx =  Math.abs(b.vx) * wallDecay; }
      if(b.x + BALL_R > PLAY_RIGHT) { b.x = PLAY_RIGHT - BALL_R; b.vx = -Math.abs(b.vx) * wallDecay; }
      if(b.y - BALL_R < PLAY_TOP)   { b.y = PLAY_TOP   + BALL_R; b.vy =  Math.abs(b.vy) * wallDecay; }

      if(b.y > PLAY_BOTTOM + 20){ b.alive = false; return; }

      for(let i = 0; i < shapeSnap.length; i++){
        const s = shapeSnap[i];
        if(s.dead) continue;
        const d = dist(b.x, b.y, s.x, s.y);
        if(d >= SHAPE_R + BALL_R) continue;
        const nx = (b.x - s.x) / d, ny = (b.y - s.y) / d;
        const dot = b.vx * nx + b.vy * ny;
        b.vx -= 2 * dot * nx; b.vy -= 2 * dot * ny;
        const push = (SHAPE_R + BALL_R - d) + 1;
        b.x += nx * push; b.y += ny * push;
        b.vx *= HIT_DECAY; b.vy *= HIT_DECAY;
        s.hp--; s.flash = 1; s.shake = 1;
        if(energyBoostActive){
          if(collectCircleAnims) collectCircleAnims.push({x:s.x, y:s.y, elapsed:0});
          if(collectSplashAnims){
            const ix = s.x + nx * SHAPE_R, iy = s.y + ny * SHAPE_R;
            collectSplashAnims.push({x:ix, y:iy, angle: Math.atan2(ny, nx) + Math.PI/2, elapsed:0});
          }
        } else {
          if(hitFlash) hitFlash.push({x:s.x, y:s.y, elapsed:0});
          if(splashAnims){
            const ix = s.x + nx * SHAPE_R, iy = s.y + ny * SHAPE_R;
            splashAnims.push({x:ix, y:iy, angle: Math.atan2(ny, nx) + Math.PI/2, elapsed:0});
          }
        }
        if(sparkleAnims) sparkleAnims.push({x:s.x, y:s.y, elapsed:0});
        if(s.hp <= 0){ s.dead = true; totalScore += s.maxHp * 10; }
      }

      if(energyCollectable && !energyCollectable.dead){
        const dc = dist(b.x, b.y, energyCollectable.x, energyCollectable.y);
        if(dc < SHAPE_R + BALL_R){
          energyCollectable.dead = true;
          collectiblePowerUpPending = true;
          const nx = dc > 0 ? (b.x - energyCollectable.x) / dc : 1;
          const ny = dc > 0 ? (b.y - energyCollectable.y) / dc : 0;
          if(collectCircleAnims) collectCircleAnims.push({x:energyCollectable.x, y:energyCollectable.y, elapsed:0});
          if(collectSplashAnims){
            const ix = energyCollectable.x + nx * SHAPE_R, iy = energyCollectable.y + ny * SHAPE_R;
            collectSplashAnims.push({x:ix, y:iy, angle: Math.atan2(ny, nx) + Math.PI/2, elapsed:0});
          }
        }
      }
      if(extraBallCollectable && !extraBallCollectable.dead){
        const dc = dist(b.x, b.y, extraBallCollectable.x, extraBallCollectable.y);
        if(dc < SHAPE_R + BALL_R){
          extraBallCollectable.dead = true;
          extraBallPowerUpPending = true;
          const nx = dc > 0 ? (b.x - extraBallCollectable.x) / dc : 1;
          const ny = dc > 0 ? (b.y - extraBallCollectable.y) / dc : 0;
          if(collectCircleAnims) collectCircleAnims.push({x:extraBallCollectable.x, y:extraBallCollectable.y, elapsed:0});
          if(collectSplashAnims){
            const ix = extraBallCollectable.x + nx * SHAPE_R, iy = extraBallCollectable.y + ny * SHAPE_R;
            collectSplashAnims.push({x:ix, y:iy, angle: Math.atan2(ny, nx) + Math.PI/2, elapsed:0});
          }
        }
      }
      if(slowTimeCollectable && !slowTimeCollectable.dead){
        const dc = dist(b.x, b.y, slowTimeCollectable.x, slowTimeCollectable.y);
        if(dc < SHAPE_R + BALL_R){
          slowTimeCollectable.dead = true;
          slowTimePowerUpPending = true;
          const nx = dc > 0 ? (b.x - slowTimeCollectable.x) / dc : 1;
          const ny = dc > 0 ? (b.y - slowTimeCollectable.y) / dc : 0;
          if(collectCircleAnims) collectCircleAnims.push({x:slowTimeCollectable.x, y:slowTimeCollectable.y, elapsed:0});
          if(collectSplashAnims){
            const ix = slowTimeCollectable.x + nx * SHAPE_R, iy = slowTimeCollectable.y + ny * SHAPE_R;
            collectSplashAnims.push({x:ix, y:iy, angle: Math.atan2(ny, nx) + Math.PI/2, elapsed:0});
          }
        }
      }
    });

    // Check if all balls are done AND no more queued
    if(!shapesSliding && activeBalls.every(b => !b.alive) && ballsToFire === 0){
      activeBalls = [];
      endTurn();
    }
  }
}

// ── SPEED BOOST (unused — momentum handled in update) ────────────
function boostSpeed(){ }

// ── END TURN ─────────────────────────────────────────────────────
function endTurn(){
  ball = null;
  activeBalls = [];
  energyBoostActive = false;
  shapes = (shapes||[]).filter(s => !s.dead);
  if(slowTimePowerUpPending){ slowTimePowerUpStepsLeft = 3; slowTimePowerUpPending = false; }
  const isSlowTime = slowTimePowerUpStepsLeft > 0;
  const moveAmt = (MOVE_UP + step * 6) * (isSlowTime ? 0.25 : 1);
  if(isSlowTime) slowTimePowerUpStepsLeft--;
  slideAmt = moveAmt;
  slidedAmt = 0;
  slideIsSlowTime = isSlowTime;
  shapesSliding = true;
}

function finishEndTurn(){
  const danger = shapes.filter(s => s.y < PLAY_TOP + SHAPE_R);
  if(danger.length > 0){
    dyingShapes = danger;
    gameState = 'dying';
    overTimer = 120;
    return;
  }
  if(step + 1 === 3) spawnExtraBallCollectable();
  spawnNewRow(); step++;
  const spawnChance = step <= 4 ? 0.12 : 0.4;
  if(!energyCollectable || energyCollectable.dead){
    if(Math.random() < spawnChance) spawnEnergyCollectable();
  }
  if(step !== 3 && (!extraBallCollectable || extraBallCollectable.dead)){
    if(Math.random() < spawnChance) spawnExtraBallCollectable();
  }
  if(!slowTimeCollectable || slowTimeCollectable.dead){
    if(Math.random() < spawnChance) spawnSlowTimeCollectable();
  }
  ballsLeft = Math.max(1, Math.round(step * 0.75));
  if(extraBallPowerUpPending){ ballsLeft++; extraBallPowerUpPending = false; }
  ballsToFire = 0;
  ballHits = 0;
  if(collectiblePowerUpPending){ energyBoostActive = true; collectiblePowerUpPending = false; }
  if(boosterCooldown > 0) boosterCooldown--;
  try {
    const pt = Date.now() - gameStartTime;
    const checksum = (((totalScore * 1234567) ^ (pt / 1000 | 0)) >>> 0).toString(16);
    gamee.updateScore(totalScore, pt, checksum);
  } catch(e) {}
  updateHeader(); gameState = 'idle';
}


// ── FLOAT SCORE ──────────────────────────────────────────────────


// ── RENDER ───────────────────────────────────────────────────────
function render(){
  ctx.clearRect(0,0,W,H);

  // 1. Full board as background
  // Background — full canvas
  if(bgImg.complete && bgImg.naturalWidth){
    ctx.drawImage(bgImg, 0, 0, W, H);
  }
  // Board
  if(boardImg.complete && boardImg.naturalWidth){
    ctx.drawImage(boardImg, BOARD_X_PX, BOARD_Y_PX, BOARD_W_PX, BOARD_H_PX);
  }
  // Limit line — marks top of spawn area
  if(limitLineImg.complete && limitLineImg.naturalWidth){
    const lx = Math.round((W - 563) / 2);
    ctx.drawImage(limitLineImg, lx, PLAY_TOP, 563, 8);
  }
  // Clip everything inside the board inner area
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(PLAY_LEFT, PLAY_TOP - 30, PLAY_RIGHT - PLAY_LEFT, PLAY_BOTTOM - PLAY_TOP + 30, 20);
  ctx.clip();

  // 2. Shapes — trail during slow-time slide
  if(shapesSliding && slideIsSlowTime){
    [[60, 0.04], [44, 0.08], [28, 0.13], [14, 0.18]].forEach(([offset, alpha]) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      (shapes||[]).forEach(s => { if(!s.dead) drawShape({...s, y: s.y + offset}); });
      ctx.restore();
    });
  }
  if(slowTimePowerUpStepsLeft > 0){
    (shapes||[]).forEach(s=>{ if(!s.dead) drawShape({...s, flash:0, shake:0}); });
  }
  (shapes||[]).forEach(s=>{ if(!s.dead) drawShape(s); });
  drawEnergyCollectable();
  drawExtraBallCollectable();
  drawSlowTimeCollectable();

  // 2b. Sparkle VFX — drawn over HP numbers
  (sparkleAnims||[]).forEach(a=>{
    const frameIdx = Math.min(12, Math.floor(a.elapsed * (13 / 15)));
    const img = impactSparkleFrames[frameIdx];
    if(img && img.complete && img.naturalWidth){
      ctx.save();
      ctx.globalAlpha = 0.8;
      ctx.drawImage(img, a.x - 53.6, a.y - 51.8, 107.1, 103.5);
      ctx.restore();
    }
  });

  // 4. Hit impact VFX
  (hitFlash||[]).forEach(h=>{
    const frameIdx = Math.min(12, Math.floor(h.elapsed * (13 / 30)));
    const img = impactCircleFrames[frameIdx];
    if(img && img.complete && img.naturalWidth){
      ctx.drawImage(img, h.x - 143, h.y - 143, 286, 286);
    }
  });

  // 4b. Splash VFX — spawns at impact point, rotated toward ball departure
  (splashAnims||[]).forEach(a=>{
    const frameIdx = Math.min(9, Math.floor(a.elapsed * (10 / 20)));
    const img = impactSplashFrames[frameIdx];
    if(img && img.complete && img.naturalWidth){
      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.rotate(a.angle);
      ctx.drawImage(img, -47, -117, 94, 117);
      ctx.restore();
    }
  });

  // 4c. Collect circle VFX
  (collectCircleAnims||[]).forEach(a=>{
    const frameIdx = Math.min(24, Math.floor(a.elapsed * (25 / 50)));
    const img = collectCircleFrames[frameIdx];
    if(img && img.complete && img.naturalWidth){
      ctx.drawImage(img, a.x - img.naturalWidth/2, a.y - img.naturalHeight/2, img.naturalWidth, img.naturalHeight);
    }
  });

  // 4d. Collect splash VFX
  (collectSplashAnims||[]).forEach(a=>{
    const frameIdx = Math.min(9, Math.floor(a.elapsed * (10 / 20)));
    const img = collectSplashFrames[frameIdx];
    if(img && img.complete && img.naturalWidth){
      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.rotate(a.angle);
      ctx.drawImage(img, -img.naturalWidth/2, -img.naturalHeight, img.naturalWidth, img.naturalHeight);
      ctx.restore();
    }
  });


  ctx.restore(); // end board clip

  // 6. All active balls — rendered LAST so always on top
  (activeBalls||[]).filter(b=>b.alive).forEach(b=>{
    const glowActive = energyBoostActive || b.isExtra;
    // Thick glowing tube trail
    const tr = b.trail;
    if(tr.length > 1){
      for(let i = 1; i < tr.length; i++){
        const t = i / tr.length;
        const alpha = t * 0.35;
        const w = BALL_R * (1.0 + t * 1.0);
        ctx.save();
        // Outer glow
        ctx.globalAlpha = alpha * (glowActive ? 0.75 : 0.4);
        ctx.strokeStyle = glowActive ? '#df80ff' : '#7b3fce';
        ctx.lineWidth = w * (glowActive ? 1.8 : 1.1);
        ctx.lineCap = 'round';
        ctx.shadowColor = glowActive ? '#df80ff' : '#7b3fce';
        ctx.shadowBlur = glowActive ? 28 : 9;
        ctx.beginPath();
        ctx.moveTo(tr[i-1].x, tr[i-1].y);
        ctx.lineTo(tr[i].x, tr[i].y);
        ctx.stroke();
        // Inner core
        ctx.globalAlpha = alpha * (glowActive ? 1.0 : 0.7);
        ctx.strokeStyle = glowActive ? '#bf40ff' : '#7321b9';
        ctx.lineWidth = w;
        ctx.shadowBlur = glowActive ? 14 : 4;
        ctx.beginPath();
        ctx.moveTo(tr[i-1].x, tr[i-1].y);
        ctx.lineTo(tr[i].x, tr[i].y);
        ctx.stroke();
        ctx.restore();
      }
    }
    ctx.save();
    const usePurple = b.isExtra || energyBoostActive || slowTimePowerUpStepsLeft > 0;
    const activeBallImg = usePurple ? ballPurpleImg : ballImg;
    if(glowActive){ ctx.shadowColor = '#bf40ff'; ctx.shadowBlur = 24; }
    if(activeBallImg.complete && activeBallImg.naturalWidth){
      ctx.drawImage(activeBallImg, b.x-20, b.y-20, 40, 40);
    } else {
      ctx.beginPath();ctx.arc(b.x,b.y,BALL_R,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();
    }
    ctx.restore();
  });
  if(gameState==='idle'||gameState==='aiming'){
    // Resting ball in the notch — drawn on top of notch overlay
    ctx.save();
    const anyPowerActive2 = energyBoostActive || slowTimePowerUpStepsLeft > 0;
    const restingBallImg = anyPowerActive2 ? ballPurpleImg : ballImg;
    if(energyBoostActive){ ctx.shadowColor = '#bf40ff'; ctx.shadowBlur = 24; }
    if(restingBallImg.complete && restingBallImg.naturalWidth){
      ctx.drawImage(restingBallImg, SHOOTER_X-20, SHOOTER_Y-20, 40, 40);
    } else {
      ctx.beginPath();ctx.arc(SHOOTER_X,SHOOTER_Y,BALL_R,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();
    }
    ctx.restore();
  }

  // 7. HUD — drawn last so always visible
  ctx.save();
  ctx.textBaseline = 'middle';

  ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0;
  ctx.textAlign = 'left';
  ctx.lineJoin = 'round';

  // STEP label
  ctx.font = "600 27px 'Oxanium',sans-serif";
  ctx.lineJoin = 'round'; ctx.lineWidth = 8; ctx.strokeStyle = '#4d0181';
  ctx.strokeText('STEP', STEP_LBL_X, STEP_LBL_Y);
  ctx.fillStyle = '#e9cbff';
  ctx.fillText('STEP', STEP_LBL_X, STEP_LBL_Y);

  // Step number
  ctx.font = "600 32px 'Oxanium',sans-serif";
  ctx.lineJoin = 'round'; ctx.lineWidth = 8; ctx.strokeStyle = '#4d0181';
  const stepStr = String(step).padStart(2,'0');
  ctx.strokeText(stepStr, STEP_LBL_X + 72, STEP_LBL_Y);
  ctx.fillStyle = '#c479fd';
  ctx.fillText(stepStr, STEP_LBL_X + 72, STEP_LBL_Y);

  // Ball counter — 'x' and number drawn separately at different sizes
  const bx = SHOOTER_CX + 35;
  const by = SHOOTER_CY - 10;
  const ballNum = String(ballsLeft !== undefined ? ballsLeft : 3);
  ctx.textBaseline = 'bottom';
  ctx.lineJoin = 'round'; ctx.lineWidth = 8; ctx.strokeStyle = '#210041';
  ctx.font = "600 18px 'Oxanium',sans-serif";
  ctx.strokeText('x', bx, by);
  ctx.fillStyle = '#e0edf6';
  ctx.fillText('x', bx, by);
  const xW = ctx.measureText('x').width;
  ctx.font = "600 25px 'Oxanium',sans-serif";
  ctx.strokeText(ballNum, bx + xW + 2, by);
  ctx.fillText(ballNum, bx + xW + 2, by);

  if(ballSparkleAnim){
    const frameIdx = Math.min(17, Math.floor(ballSparkleAnim.elapsed * 18 / 36));
    const simg = ballSparkleFrames[frameIdx];
    if(simg && simg.complete && simg.naturalWidth){
      const sw = simg.naturalWidth * 1.5, sh = simg.naturalHeight * 1.5;
      const cx = SHOOTER_CX + 50, cy = SHOOTER_CY - 22;
      ctx.drawImage(simg, cx - sw/2, cy - sh/2, sw, sh);
    }
  }

  ctx.restore();

  // 8. Booster buttons
  drawBoosters();
}

function drawBoosters(){
  const half = BOOSTER_BTN / 2;
  const onCooldown = boosterCooldown > 0;
  for(const b of BOOSTERS){
    const bx = b.cx - half, by = b.cy - half;
    const btnImg = b.type === pressedBooster ? boosterBtnPressedImg : boosterBtnImg;
    if(btnImg.complete && btnImg.naturalWidth)
      ctx.drawImage(btnImg, bx, by, BOOSTER_BTN, BOOSTER_BTN);
    const pressed = b.type === pressedBooster;
    const ic = (pressed && b.pressedIcon) ? b.pressedIcon() : b.icon();
    const iconOffset = pressed ? 6 : 0;
    if(ic.complete && ic.naturalWidth)
      ctx.drawImage(ic, b.cx - b.iw/2, b.cy - b.ih/2 + iconOffset, b.iw, b.ih);
    if(boosterTagAddImg.complete && boosterTagAddImg.naturalWidth){
      const tx = bx + BOOSTER_BTN - boosterTagAddImg.naturalWidth + 4;
      const ty = by - 4;
      ctx.drawImage(boosterTagAddImg, tx, ty, boosterTagAddImg.naturalWidth, boosterTagAddImg.naturalHeight);
    }
    if(onCooldown && btnImg.complete && btnImg.naturalWidth){
      const tagW = (boosterTagAddImg.complete && boosterTagAddImg.naturalWidth) ? boosterTagAddImg.naturalWidth : 0;
      const tagH = (boosterTagAddImg.complete && boosterTagAddImg.naturalWidth) ? boosterTagAddImg.naturalHeight : 0;
      const ocW = BOOSTER_BTN + 4, ocH = BOOSTER_BTN + 4;
      const oc = new OffscreenCanvas(ocW, ocH);
      const octx = oc.getContext('2d');
      octx.drawImage(btnImg, 0, 4, BOOSTER_BTN, BOOSTER_BTN);
      if(tagW > 0) octx.drawImage(boosterTagAddImg, BOOSTER_BTN - tagW + 4, 0, tagW, tagH);
      octx.globalCompositeOperation = 'source-in';
      octx.globalAlpha = 0.4;
      octx.fillStyle = '#000';
      octx.fillRect(0, 0, ocW, ocH);
      ctx.drawImage(oc, bx, by - 4);
    }
  }
}

function drawExtraBallCollectable(){
  const c = extraBallCollectable;
  if(!c || c.dead || c.scale <= 0.01) return;
  if(!collectBaseImg.complete || !collectBaseImg.naturalWidth) return;
  const pulse = 0.95 + 0.05 * Math.sin(Date.now() / 400);
  const s = c.scale * pulse;
  if(collectGlowImg.complete && collectGlowImg.naturalWidth){
    const gw = collectGlowImg.naturalWidth, gh = collectGlowImg.naturalHeight;
    ctx.save();
    ctx.globalAlpha = 0.6 + 0.4 * Math.sin(Date.now() / 400);
    ctx.translate(c.x, c.y);
    ctx.scale(s, s);
    ctx.drawImage(collectGlowImg, -gw/2, -gh/2, gw, gh);
    ctx.restore();
  }
  ctx.save();
  ctx.translate(c.x, c.y);
  ctx.rotate(c.angle);
  ctx.scale(s, s);
  const bw = collectBaseImg.naturalWidth, bh = collectBaseImg.naturalHeight;
  ctx.drawImage(collectBaseImg, -bw/2, -bh/2, bw, bh);
  ctx.restore();
  if(collectExtraImg.complete && collectExtraImg.naturalWidth){
    const ew = collectExtraImg.naturalWidth, eh = collectExtraImg.naturalHeight;
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.scale(s, s);
    ctx.drawImage(collectExtraImg, -ew/2, -eh/2, ew, eh);
    ctx.restore();
  }
}
function drawEnergyCollectable(){
  const c = energyCollectable;
  if(!c || c.dead || c.scale <= 0.01) return;
  if(!collectBaseImg.complete || !collectBaseImg.naturalWidth) return;
  const pulse = 0.95 + 0.05 * Math.sin(Date.now() / 400);
  const s = c.scale * pulse;
  if(collectGlowImg.complete && collectGlowImg.naturalWidth){
    const gw = collectGlowImg.naturalWidth, gh = collectGlowImg.naturalHeight;
    ctx.save();
    ctx.globalAlpha = 0.6 + 0.4 * Math.sin(Date.now() / 400);
    ctx.translate(c.x, c.y);
    ctx.scale(s, s);
    ctx.drawImage(collectGlowImg, -gw/2, -gh/2, gw, gh);
    ctx.restore();
  }
  ctx.save();
  ctx.translate(c.x, c.y);
  ctx.rotate(c.angle);
  ctx.scale(s, s);
  const bw = collectBaseImg.naturalWidth, bh = collectBaseImg.naturalHeight;
  ctx.drawImage(collectBaseImg, -bw/2, -bh/2, bw, bh);
  ctx.restore();
  if(collectEnergyImg.complete && collectEnergyImg.naturalWidth){
    const ew = collectEnergyImg.naturalWidth, eh = collectEnergyImg.naturalHeight;
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.scale(s, s);
    ctx.drawImage(collectEnergyImg, -ew/2, -eh/2, ew, eh);
    ctx.restore();
  }
}
function drawSlowTimeCollectable(){
  const c = slowTimeCollectable;
  if(!c || c.dead || c.scale <= 0.01) return;
  if(!collectBaseImg.complete || !collectBaseImg.naturalWidth) return;
  const pulse = 0.95 + 0.05 * Math.sin(Date.now() / 400);
  const s = c.scale * pulse;
  if(collectGlowImg.complete && collectGlowImg.naturalWidth){
    const gw = collectGlowImg.naturalWidth, gh = collectGlowImg.naturalHeight;
    ctx.save();
    ctx.globalAlpha = 0.6 + 0.4 * Math.sin(Date.now() / 400);
    ctx.translate(c.x, c.y);
    ctx.scale(s, s);
    ctx.drawImage(collectGlowImg, -gw/2, -gh/2, gw, gh);
    ctx.restore();
  }
  ctx.save();
  ctx.translate(c.x, c.y);
  ctx.rotate(c.angle);
  ctx.scale(s, s);
  const bw = collectBaseImg.naturalWidth, bh = collectBaseImg.naturalHeight;
  ctx.drawImage(collectBaseImg, -bw/2, -bh/2, bw, bh);
  ctx.restore();
  if(collectTimeImg.complete && collectTimeImg.naturalWidth){
    const tw = collectTimeImg.naturalWidth, th = collectTimeImg.naturalHeight;
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.scale(s, s);
    ctx.drawImage(collectTimeImg, -tw/2, -th/2, tw, th);
    ctx.restore();
  }
}

// ── DRAW SHAPE ───────────────────────────────────────────────────
function drawShape(s){
  if(s.scale<=0.01) return;
  ctx.save();
  const shakeAmt = (s.shake || 0) * 6;
  const shakeX = shakeAmt > 0 ? (Math.random() - 0.5) * shakeAmt * 2 : 0;
  const shakeY = shakeAmt > 0 ? (Math.random() - 0.5) * shakeAmt * 2 : 0;
  ctx.translate(s.x + shakeX, s.y + shakeY);
  ctx.scale(s.scale, s.scale);
  if(slowTimePowerUpStepsLeft > 0){
    ctx.shadowColor = '#b141fc';
    ctx.shadowBlur = 45;
  }
  const fl = s.flash;

  if(s.type === 'circle'){
    const hpKey = Math.max(1, Math.min(5, s.hp));
    const frame = CIRCLE_FRAMES[hpKey];
    const img   = circleImgs[hpKey];
    const size  = 133;

    ctx.save();
    ctx.rotate(s.angle || 0);
    if(img && img.complete && img.naturalWidth){
      if(fl > 0.4) ctx.globalAlpha = 0.82;
      ctx.drawImage(img, -size/2, -size/2, size, size);
      ctx.globalAlpha = 1;
    } else {
      // fallback plain circle
      ctx.beginPath(); ctx.arc(0, 0, SHAPE_R, 0, Math.PI*2);
      ctx.fillStyle = frame.glow + '44'; ctx.fill();
      ctx.strokeStyle = frame.glow; ctx.lineWidth = 4; ctx.stroke();
    }
    ctx.restore();

  } else if(s.type === 'square'){
    const hpKey = Math.max(1, Math.min(5, s.hp));
    const frame = SQUARE_FRAMES[hpKey];
    const img   = squareImgs[hpKey];
    const size  = 125;
    ctx.save();
    ctx.rotate(s.angle || 0);
    if(img && img.complete && img.naturalWidth){
      if(fl > 0.4) ctx.globalAlpha = 0.82;
      ctx.drawImage(img, -size/2, -size/2, size, size);
      ctx.globalAlpha = 1;
    } else {
      const rs = SHAPE_R * 0.88;
      ctx.beginPath();ctx.moveTo(rs,0);ctx.lineTo(0,-rs);ctx.lineTo(-rs,0);ctx.lineTo(0,rs);ctx.closePath();
      ctx.fillStyle = frame.glow + '44'; ctx.fill();
      ctx.strokeStyle = frame.glow; ctx.lineWidth = 4; ctx.stroke();
    }
    ctx.restore();

  } else if(s.type === 'triangle'){
    const hpKey = Math.max(1, Math.min(5, s.hp));
    const frame = TRIANGLE_FRAMES[hpKey];
    const img   = triangleImgs[hpKey];
    const tw = 139, th = 129;
    const HP_FONT_TRI = {5:40, 4:34, 3:34, 2:32, 1:32};
    const HP_OUT_TRI  = {5:'#002e5a', 4:'#820606', 3:'#182900', 2:'#004437', 1:'#640053'};
    const hpSz = s.hp > 5 ? 28 : HP_FONT_TRI[hpKey];

    ctx.save();
    ctx.rotate(s.angle || 0);
    if(img && img.complete && img.naturalWidth){
      if(fl > 0.4) ctx.globalAlpha = 0.82;
      ctx.drawImage(img, -70, -75, tw, th);
      ctx.globalAlpha = 1;
    } else {
      const rs = SHAPE_R * 0.88;
      ctx.beginPath(); ctx.moveTo(0,-rs); ctx.lineTo(rs,rs); ctx.lineTo(-rs,rs); ctx.closePath();
      ctx.fillStyle = frame.glow + '44'; ctx.fill();
      ctx.strokeStyle = frame.glow; ctx.lineWidth = 4; ctx.stroke();
    }
    // Counter-rotate so the number visually stays upright while moving with the triangle
    ctx.rotate(-(s.angle || 0));
    ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0;
    ctx.font = `600 ${hpSz}px 'Oxanium',sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    const mt = ctx.measureText(String(s.hp));
    const textYt = mt.actualBoundingBoxAscent - (mt.actualBoundingBoxAscent + mt.actualBoundingBoxDescent) / 2;
    ctx.lineJoin = 'round'; ctx.lineWidth = hpSz * 0.15;
    ctx.strokeStyle = HP_OUT_TRI[hpKey];
    ctx.strokeText(s.hp, 0, textYt);
    ctx.fillStyle = '#fff';
    ctx.fillText(s.hp, 0, textYt);
    ctx.restore();

  }

  // HP number for circle and square
  if(s.type !== 'triangle'){
    const HP_FONT_PX = {5:40, 4:34, 3:34, 2:32, 1:32};
    const HP_OUTLINE = {5:'#002e5a', 4:'#820606', 3:'#182900', 2:'#004437', 1:'#640053'};
    const hpKey2 = Math.max(1, Math.min(5, s.hp));
    const hpFontSize = s.hp > 5 ? 28 : HP_FONT_PX[hpKey2];
    ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0;
    ctx.font = `600 ${hpFontSize}px 'Oxanium',sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    const m = ctx.measureText(String(s.hp));
    const textY = m.actualBoundingBoxAscent - (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) / 2;
    ctx.lineJoin = 'round'; ctx.lineWidth = hpFontSize * 0.15;
    ctx.strokeStyle = HP_OUTLINE[hpKey2];
    ctx.strokeText(s.hp, 0, textY);
    ctx.fillStyle = '#fff';
    ctx.fillText(s.hp, 0, textY);
  }
  ctx.restore();
}

function lighten(hex,amt){
  const r=Math.min(255,parseInt(hex.slice(1,3),16)+Math.round(amt*120));
  const g=Math.min(255,parseInt(hex.slice(3,5),16)+Math.round(amt*80));
  const b=Math.min(255,parseInt(hex.slice(5,7),16)+Math.round(amt*180));
  return `rgb(${r},${g},${b})`;
}

// ── BOOSTERS (button-activated) ───────────────────────────────────
function useBooster(type){
  if(boosterCooldown > 0) return;
  if(type==='slow'){
    slowTimePowerUpPending = true;
  } else if(type==='shatter'){
    if(gameState === 'shooting'){ launchBall(true); } else { ballsLeft++; shatterBoosterExtraBalls++; }
    ballSparkleAnim = {elapsed: 0};
  } else if(type==='reset'){
    energyBoostActive = true;
  }
  boosterCooldown = 3;
  try { gamee.logEvent("booster_used", type); } catch(e) {}
}

function dist(ax,ay,bx,by){ return Math.hypot(ax-bx,ay-by); }

// ── GAMEE ADVANCED HELPERS ────────────────────────────────────────
function preloadRewardedVideo() {
  try {
    gamee.loadRewardedVideo(function(error, data) {
      isVideoReady = !!(data && data.videoLoaded);
      const btn = document.getElementById('gamee-ad-btn');
      if(btn) btn.style.display = isVideoReady ? '' : 'none';
    });
  } catch(e) {}
}

function ensureRewardedAdButton() {
  let btn = document.getElementById('gamee-ad-btn');
  if(!btn) {
    btn = document.createElement('button');
    btn.id = 'gamee-ad-btn';
    btn.textContent = 'Watch Ad — Extra Ball';
    btn.style.cssText = 'display:none;margin-top:16px;padding:12px 28px;font-size:18px;font-family:Oxanium,sans-serif;background:#7b2fde;color:#fff;border:none;border-radius:10px;cursor:pointer;letter-spacing:0.03em;';
    btn.addEventListener('click', offerRewardedAd);
    const over = document.getElementById('screen-over');
    if(over) over.appendChild(btn);
  }
  btn.style.display = isVideoReady ? '' : 'none';
}

function offerRewardedAd() {
  if(!isVideoReady) return;
  try {
    gamee.showRewardedVideo(function(error, data) {
      isVideoReady = false;
      const btn = document.getElementById('gamee-ad-btn');
      if(btn) btn.style.display = 'none';
      if(data && data.videoPlayed) {
        ballsLeft = 3;
        gameState = 'idle';
        hide('screen-over');
        preloadRewardedVideo();
        if(!animId) { lastTime = 0; animId = requestAnimationFrame(loop); }
      }
    });
  } catch(e) {}
}

function saveProgress() {
  if(totalScore > bestScore) bestScore = totalScore;
  if(step > bestStep) bestStep = step;
  try { gamee.gameSave(JSON.stringify({ bestScore, bestStep })); } catch(e) {}
}

// ── GAMEE ─────────────────────────────────────────────────────────
try {
  gamee.gameInit("FullScreen", {}, ["platformExtraLife", "saveState", "logEvents", "rewardedAds"], function(error, data) {
    if(error) console.warn("GAMEE init:", error);
    if(data && data.saveState) {
      try {
        const saved = JSON.parse(data.saveState);
        if(saved.bestScore) bestScore = saved.bestScore;
        if(saved.bestStep)  bestStep  = saved.bestStep;
      } catch(e) {}
    }
    gamee.gameLoadingProgress(100);
    preloadRewardedVideo();
    show('screen-start');
  });
  gamee.emitter.addEventListener("start", function(event) {
    startGame();
    event.detail.callback();
  });
  gamee.emitter.addEventListener("useExtraLife", function(event) {
    if(gameState === 'shooting'){ launchBall(true); }
    else { ballsLeft++; shatterBoosterExtraBalls++; }
    event.detail.callback();
  });
  gamee.emitter.addEventListener("submit", function(event) {
    if(gameState !== 'over') {
      gameState = 'over';
      document.getElementById('over-step').textContent = 'Step ' + String(step).padStart(2,'0');
      show('screen-over');
      saveProgress();
      ensureRewardedAdButton();
      try { gamee.gameOver(); } catch(e) {}
    }
    event.detail.callback();
  });
  gamee.emitter.addEventListener("pause", function(event) {
    gamePaused = true;
    if(animId) { cancelAnimationFrame(animId); animId = null; }
    event.detail.callback();
  });
  gamee.emitter.addEventListener("resume", function(event) {
    if(gamePaused) {
      gamePaused = false;
      lastTime = 0;
      animId = requestAnimationFrame(loop);
    }
    event.detail.callback();
  });
} catch(e) {
  show('screen-start');
}
animId=requestAnimationFrame(loop);


