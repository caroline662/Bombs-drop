// ═══════════════════════════════════════════════════════════════
// Bombs Drop — Phaser 3
// ═══════════════════════════════════════════════════════════════

// ── CONSTANTS ──────────────────────────────────────────────────
const PLAY_LEFT    = 140, PLAY_RIGHT  = 715;
const PLAY_TOP     = 313, PLAY_BOTTOM = 1105;
const SHOOTER_CX   = 427, SHOOTER_CY  = 248;
const STEP_LBL_X   = 162, STEP_LBL_Y  = 247;
const BALL_R       = 12,  SHAPE_R     = 30;
const VISUAL_R     = 67,  MIN_SEP     = VISUAL_R * 2 + 10;
const BASE_SPD     = 10;
const GRAVITY      = 0.60, FRICTION   = 0.999;
const HIT_DECAY    = 0.95, HIT_DECAY_WALL = 0.60;
const MOVE_UP      = 160;
const SPAWN_Y_MIN  = PLAY_BOTTOM - VISUAL_R * 2;
const SPAWN_Y_MAX  = PLAY_BOTTOM - VISUAL_R;
const BTN_SIZE     = 134;
const W = 854, H = 1490;
const BALL_START_Y = SHOOTER_CY;
const AIM_PIVOT_Y  = BALL_START_Y + 31;

const SHAPES      = ['circle', 'square', 'triangle'];
const NEON_COLORS = [
  {fill:'#1a0050', stroke:'#ff4ddb'},
  {fill:'#001a3a', stroke:'#00e5ff'},
  {fill:'#001a00', stroke:'#aaff00'},
  {fill:'#1a0000', stroke:'#ff4444'},
  {fill:'#1a0a00', stroke:'#ff9900'},
];
const HP_COLOR = {5:'blue', 4:'red', 3:'green', 2:'teal', 1:'pink'};
const HP_FONT  = {5:40, 4:34, 3:34, 2:32, 1:32};
const HP_OUTL  = {5:'#002e5a', 4:'#820606', 3:'#182900', 2:'#004437', 1:'#640053'};

const BOOSTERS_CFG = [
  {type:'slow',    icon:'time-icon',    iconP:'time-icon-p',    cx:263, cy:1240, iw:61, ih:72},
  {type:'shatter', icon:'extra-icon',   iconP:'extra-icon-p',   cx:427, cy:1240, iw:68, ih:60},
  {type:'reset',   icon:'energy-icon',  iconP:'energy-icon-p',  cx:591, cy:1240, iw:58, ih:73},
];

function _dist(ax,ay,bx,by){ return Math.hypot(ax-bx, ay-by); }
function _pad(n){ return String(n).padStart(2,'0'); }

// ── SCENE ──────────────────────────────────────────────────────
class GameScene extends Phaser.Scene {
  constructor(){ super({key:'GameScene'}); }

  // ── PRELOAD ──────────────────────────────────────────────────
  preload(){
    this.load.image('bg',          'gfx/Bg/bg.png');
    this.load.image('board',       'gfx/board/board.png');
    this.load.image('limitline',   'gfx/board/limitline.png');
    this.load.image('ball',        'gfx/board/ball.png');
    this.load.image('ball-purple', 'gfx/board/ball_purple.png');

    ['blue','red','green','teal','pink'].forEach(c => {
      this.load.image(`circle-${c}`,   `gfx/board/circle_${c}.png`);
      this.load.image(`square-${c}`,   `gfx/board/square_${c}.png`);
      this.load.image(`triangle-${c}`, `gfx/board/triangle_${c}.png`);
    });

    this.load.image('btn',           'gfx/boosters/button.png');
    this.load.image('btn-p',         'gfx/boosters/button_pressed.png');
    this.load.image('time-icon',     'gfx/boosters/time_icon.png');
    this.load.image('time-icon-p',   'gfx/boosters/time_icon_pressed.png');
    this.load.image('extra-icon',    'gfx/boosters/extra_icon.png');
    this.load.image('extra-icon-p',  'gfx/boosters/extra_icon_pressed.png');
    this.load.image('energy-icon',   'gfx/boosters/energy_icon.png');
    this.load.image('energy-icon-p', 'gfx/boosters/energy_icon_pressed.png');
    this.load.image('tag-add',       'gfx/boosters/tag_add.png');
    this.load.image('collect-base',  'gfx/boosters/collect_base.png');
    this.load.image('collect-energy','gfx/boosters/collect_energy.png');
    this.load.image('collect-extra', 'gfx/boosters/collect_extra.png');
    this.load.image('collect-time',  'gfx/boosters/collect_time.png');
    this.load.image('collect-glow',  'gfx/boosters/collect_glow.png');

    for(let i=0;i<18;i++) this.load.image(`sp-${i}`,  `gfx/vfx/sparkle/sparkle_${_pad(i)}.png`);
    for(let i=0;i<25;i++) this.load.image(`cc-${i}`,  `gfx/vfx/collect/collect_circle/collect-circle_${_pad(i)}.png`);
    for(let i=0;i<10;i++) this.load.image(`cs-${i}`,  `gfx/vfx/collect/collect_splash/collect-splash_${_pad(i)}.png`);
    for(let i=0;i<13;i++) this.load.image(`ic-${i}`,  `gfx/vfx/impact/impact_circle/impact-circle_${_pad(i)}.png`);
    for(let i=0;i<10;i++) this.load.image(`is-${i}`,  `gfx/vfx/impact/impact_splash/impact-splash_${_pad(i)}.png`);
    for(let i=0;i<13;i++) this.load.image(`isp-${i}`, `gfx/vfx/impact/impact_sparkle/impact-sparkle_${_pad(i)}.png`);
  }

  // ── CREATE ───────────────────────────────────────────────────
  create(){
    // Play-area clip mask (shared by shapes, collectibles, VFX)
    const maskGfx = this.make.graphics({add:false});
    maskGfx.fillStyle(0xffffff);
    maskGfx.fillRoundedRect(PLAY_LEFT, PLAY_TOP - 30, PLAY_RIGHT - PLAY_LEFT, PLAY_BOTTOM - PLAY_TOP + 30, 20);
    this._mask = maskGfx.createGeometryMask();

    // Static background layers
    this.add.image(W/2, H/2, 'bg').setDisplaySize(W, H).setDepth(0);
    this.add.image(0, 0, 'board').setOrigin(0,0).setDisplaySize(W, H).setDepth(1);
    this.add.image(Math.round((W-563)/2) + 281, PLAY_TOP + 4, 'limitline')
        .setDisplaySize(563, 8).setDepth(2);

    // Aim line graphics
    this._aimGfx = this.add.graphics().setDepth(8);

    // Resting ball
    this._restingBall = this.add.image(SHOOTER_CX, SHOOTER_CY, 'ball')
        .setDisplaySize(40,40).setDepth(10);

    this._buildHUD();
    this._buildBoosters();
    this._setupInput();
    this._resetState();
    this._initGamee();

    // Expose startGame for the HTML button
    window.startGame = () => this._startGame();
  }

  // ── HUD ──────────────────────────────────────────────────────
  _buildHUD(){
    const stroke = { stroke:'#4d0181', strokeThickness:8 };
    const base   = { fontFamily:"'Oxanium',sans-serif", fontStyle:'600' };

    this._stepLabel = this.add.text(STEP_LBL_X, STEP_LBL_Y, 'STEP', {
      ...base, ...stroke, fontSize:'27px', color:'#e9cbff'
    }).setOrigin(0,0.5).setDepth(20);

    this._stepNum = this.add.text(STEP_LBL_X+72, STEP_LBL_Y, '01', {
      ...base, ...stroke, fontSize:'32px', color:'#c479fd'
    }).setOrigin(0,0.5).setDepth(20);

    this._ballX = this.add.text(SHOOTER_CX+35, SHOOTER_CY-10, 'x', {
      ...base, fontSize:'18px', color:'#e0edf6', stroke:'#210041', strokeThickness:8
    }).setOrigin(0,1).setDepth(20);

    this._ballN = this.add.text(SHOOTER_CX+35+14, SHOOTER_CY-10, '1', {
      ...base, fontSize:'25px', color:'#e0edf6', stroke:'#210041', strokeThickness:8
    }).setOrigin(0,1).setDepth(20);

    this._sparkleImg = this.add.image(SHOOTER_CX+50, SHOOTER_CY-22, 'sp-0')
        .setScale(1.5).setVisible(false).setDepth(20);
  }

  // ── BOOSTERS ─────────────────────────────────────────────────
  _buildBoosters(){
    this._boosterObjs = BOOSTERS_CFG.map(cfg => {
      const half = BTN_SIZE/2;
      const btn  = this.add.image(cfg.cx, cfg.cy, 'btn').setDisplaySize(BTN_SIZE,BTN_SIZE).setDepth(20).setInteractive();
      const icon = this.add.image(cfg.cx, cfg.cy, cfg.icon).setDepth(21);
      const tag  = this.add.image(cfg.cx+half, cfg.cy-half, 'tag-add').setDepth(21).setOrigin(1,0);
      btn.on('pointerdown', () => { this._pressedBooster = cfg.type; this._useBooster(cfg.type); this._syncBoosters(); });
      btn.on('pointerup',   () => { this._pressedBooster = null; this._syncBoosters(); });
      return {cfg, btn, icon, tag};
    });
  }

  _syncBoosters(){
    for(const b of this._boosterObjs){
      const pressed = b.cfg.type === this._pressedBooster;
      b.btn.setTexture(pressed ? 'btn-p' : 'btn');
      b.icon.setTexture(pressed ? b.cfg.iconP : b.cfg.icon);
      b.icon.setY(pressed ? b.cfg.cy+6 : b.cfg.cy);
      const dim = this._boosterCooldown > 0 && !pressed;
      b.btn.setAlpha(dim ? 0.45 : 1);
      b.icon.setAlpha(dim ? 0.45 : 1);
    }
  }

  // ── INPUT ────────────────────────────────────────────────────
  _setupInput(){
    this.input.on('pointermove', ptr => this._onAim(ptr.x, ptr.y));
    this.input.on('pointerdown', ptr => {
      // Booster hit-test before shoot
      const half = BTN_SIZE/2;
      for(const b of BOOSTERS_CFG){
        if(Math.abs(ptr.x-b.cx)<=half && Math.abs(ptr.y-b.cy)<=half){
          this._pressedBooster = b.type;
          this._useBooster(b.type);
          this._syncBoosters();
          return;
        }
      }
      this._onShoot(ptr.x, ptr.y);
    });
    this.input.on('pointerup', () => { this._pressedBooster = null; this._syncBoosters(); });
  }

  _onAim(x, y){
    if(this._gameState !== 'idle' && this._gameState !== 'aiming') return;
    const dy = y - AIM_PIVOT_Y;
    if(dy < 15) return;
    this._aimAngle = Math.atan2(dy, x - SHOOTER_CX);
    this._gameState = 'aiming';
    this._drawAim(this._aimAngle);
  }

  _onShoot(x, y){
    if(this._gameState !== 'idle' && this._gameState !== 'aiming') return;
    if(this._ballsLeft <= 0) return;
    const dy = y - AIM_PIVOT_Y;
    if(dy < 15) return;
    this._aimAngle = Math.atan2(dy, x - SHOOTER_CX);
    this._fireBall();
  }

  _drawAim(angle){
    this._aimGfx.clear();
    const NUM=7, SPACING=18;
    const dx=Math.cos(angle), dy=Math.sin(angle);
    const sx=SHOOTER_CX + dx*20;
    for(let i=1;i<=NUM;i++){
      const px=sx+dx*i*SPACING, py=BALL_START_Y+34+dy*i*SPACING;
      if(py>PLAY_BOTTOM) break;
      const t=i/(NUM-1), alpha=0.85-t*0.75, r=Math.max(3,(1-t*0.35)*5);
      this._aimGfx.fillStyle(0x862ae6, alpha*0.25);
      this._aimGfx.fillCircle(px, py, r+3);
      this._aimGfx.fillStyle(0xffffff, alpha);
      this._aimGfx.fillCircle(px, py, r);
    }
  }

  // ── STATE RESET ──────────────────────────────────────────────
  _resetState(){
    this._step                      = 1;
    this._shapes                    = [];
    this._activeBalls               = [];
    this._gameState                 = 'idle';
    this._ballsLeft                 = 1;
    this._ballsToFire               = 0;
    this._ballHits                  = 0;
    this._totalScore                = 0;
    this._gameStartTime             = 0;
    this._overTimer                 = 0;
    this._aimAngle                  = null;
    this._energyBoostActive         = false;
    this._collectiblePowerUpPending = false;
    this._extraBallPowerUpPending   = false;
    this._slowTimePowerUpPending    = false;
    this._slowTimePowerUpStepsLeft  = 0;
    this._shapesSliding             = false;
    this._slideAmt                  = 0;
    this._slidedAmt                 = 0;
    this._slideIsSlowTime           = false;
    this._boosterCooldown           = 0;
    this._shatterBoosterExtraBalls  = 0;
    this._pressedBooster            = null;
    this._energyCollectable         = null;
    this._extraBallCollectable      = null;
    this._slowTimeCollectable       = null;
    this._gamePaused                = false;
    this._sparkleElapsed            = -1;
    this._bestScore                 = this._bestScore || 0;
    this._bestStep                  = this._bestStep  || 0;
    this._isVideoReady              = false;
  }

  // ── START ────────────────────────────────────────────────────
  _startGame(){
    this._destroyAllShapes();
    this._destroyAllBalls();
    this._destroyCollectable('_energyCollectable');
    this._destroyCollectable('_extraBallCollectable');
    this._destroyCollectable('_slowTimeCollectable');
    this._aimGfx.clear();

    const savedBest = { score: this._bestScore, step: this._bestStep };
    this._resetState();
    this._bestScore = savedBest.score;
    this._bestStep  = savedBest.step;

    this._totalScore    = 0;
    this._gameStartTime = Date.now();
    this._gameState     = 'idle';

    this._spawnInitialShapes();
    this._updateHUD();

    document.getElementById('screen-start').classList.remove('show');
    document.getElementById('screen-over').classList.remove('show');

    try { gamee.gameStart(); } catch(e) {}
    try { gamee.logEvent("game_start","step_1"); } catch(e) {}
  }

  // ── PHASER UPDATE ────────────────────────────────────────────
  update(time, delta){
    if(this._gamePaused) return;
    const dt = Math.min(delta/16.67, 3);

    this._updateSlide(dt);
    this._updateShapeData(dt);
    this._updateCollectables(dt);
    this._updateBalls(dt);
    this._updateDying(dt);
    this._syncShapes();
    this._updateHUD();
    this._updateSparkle(dt);
    this._syncBoosters();
    this._updateRestingBall();
  }

  // ── SLIDE ────────────────────────────────────────────────────
  _updateSlide(dt){
    if(!this._shapesSliding) return;
    const speed = this._slideIsSlowTime ? 1.5 : 20;
    const delta = Math.min(this._slideAmt - this._slidedAmt, speed*dt);

    for(const s of this._shapes) s.y -= delta;
    this._slideCollectable(this._energyCollectable, delta);
    this._slideCollectable(this._extraBallCollectable, delta);
    this._slideCollectable(this._slowTimeCollectable, delta);

    this._slidedAmt += delta;
    if(this._slidedAmt >= this._slideAmt - 0.01){
      this._shapesSliding = false;
      this._finishEndTurn();
    }
  }

  _slideCollectable(c, delta){
    if(!c || c.dead) return;
    c.y -= delta;
    c._glow.y -= delta;
    c._base.y -= delta;
    c._icon.y -= delta;
  }

  // ── SHAPE DATA ───────────────────────────────────────────────
  _updateShapeData(dt){
    for(const s of this._shapes){
      if(!s.dead){
        s.scale = Math.min(1, s.scale + dt*0.06);
        s.angle += s.spinSpeed * dt;
      }
      if(s.flash > 0) s.flash = Math.max(0, s.flash - dt*0.1);
      if(s.shake > 0) s.shake = Math.max(0, s.shake - dt*0.15);
    }
  }

  _syncShapes(){
    const toRemove = [];
    for(const s of this._shapes){
      if(s.dead){
        if(s._spr){ s._spr.destroy(); s._spr=null; }
        if(s._txt){ s._txt.destroy(); s._txt=null; }
        toRemove.push(s);
        continue;
      }
      if(!s._spr) continue;

      const shakeAmt = s.shake * 6;
      const sx = shakeAmt>0 ? (Math.random()-0.5)*shakeAmt*2 : 0;
      const sy = shakeAmt>0 ? (Math.random()-0.5)*shakeAmt*2 : 0;
      s._spr.setPosition(s.x+sx, s.y+sy).setRotation(s.angle).setScale(s.scale)
            .setAlpha(s.flash>0.4 ? 0.82 : 1);

      // Update texture if HP changed colour tier
      const hpKey = Math.max(1, Math.min(5, s.hp));
      const wantTex = `${s.type}-${HP_COLOR[hpKey]}`;
      if(s._spr.texture.key !== wantTex) s._spr.setTexture(wantTex);

      // HP text (always upright at shape centre)
      if(s._txt){
        const fs = s.hp>5 ? 28 : HP_FONT[hpKey];
        if(parseInt(s._txt.style.fontSize) !== fs){
          s._txt.setFontSize(`${fs}px`).setStroke(HP_OUTL[hpKey], Math.round(fs*0.15));
        }
        s._txt.setText(String(s.hp)).setPosition(s.x, s.y).setScale(1/Math.max(s.scale, 0.01));
      }
    }
    for(const s of toRemove){
      this._shapes.splice(this._shapes.indexOf(s), 1);
    }
  }

  // ── COLLECTABLES ─────────────────────────────────────────────
  _updateCollectables(dt){
    this._tickCollectable(this._energyCollectable);
    this._tickCollectable(this._extraBallCollectable);
    this._tickCollectable(this._slowTimeCollectable);
  }

  _tickCollectable(c){
    if(!c || c.dead) return;
    c.scale = Math.min(1, c.scale + 0.06);
    c.angle += c.spinSpeed;
    const t    = Date.now();
    const pulse = 0.95 + 0.05*Math.sin(t/400);
    const s    = c.scale * pulse;
    c._glow.setScale(s).setAlpha(0.6 + 0.4*Math.sin(t/400));
    c._base.setScale(s).setRotation(c.angle);
    c._icon.setScale(s);
  }

  _spawnCollectable(iconKey){
    for(let i=0; i<500; i++){
      const x = PLAY_LEFT+VISUAL_R + Math.random()*(PLAY_RIGHT-PLAY_LEFT-VISUAL_R*2);
      const y = SPAWN_Y_MIN + Math.random()*(SPAWN_Y_MAX-SPAWN_Y_MIN);
      if(this._shapes.some(s=>!s.dead && _dist(x,y,s.x,s.y)<MIN_SEP)) continue;
      if(this._energyCollectable    && !this._energyCollectable.dead    && _dist(x,y,this._energyCollectable.x,   this._energyCollectable.y)   <MIN_SEP) continue;
      if(this._extraBallCollectable && !this._extraBallCollectable.dead && _dist(x,y,this._extraBallCollectable.x,this._extraBallCollectable.y)<MIN_SEP) continue;
      if(this._slowTimeCollectable  && !this._slowTimeCollectable.dead  && _dist(x,y,this._slowTimeCollectable.x, this._slowTimeCollectable.y) <MIN_SEP) continue;

      const glow = this.add.image(x,y,'collect-glow').setAlpha(0.6).setScale(0).setDepth(5).setMask(this._mask);
      const base = this.add.image(x,y,'collect-base').setScale(0).setDepth(5).setMask(this._mask);
      const icon = this.add.image(x,y,iconKey).setScale(0).setDepth(5).setMask(this._mask);
      return { x, y, scale:0, angle:Math.random()*Math.PI*2,
               spinSpeed:(0.008+Math.random()*0.008)*(Math.random()<0.5?1:-1),
               dead:false, _glow:glow, _base:base, _icon:icon };
    }
    return null;
  }

  _spawnEnergyCollectable(){
    this._energyCollectable    = this._spawnCollectable('collect-energy');
  }
  _spawnExtraBallCollectable(){
    this._extraBallCollectable = this._spawnCollectable('collect-extra');
  }
  _spawnSlowTimeCollectable(){
    this._slowTimeCollectable  = this._spawnCollectable('collect-time');
  }

  _destroyCollectable(key){
    const c = this[key];
    if(!c) return;
    if(c._glow) c._glow.destroy();
    if(c._base) c._base.destroy();
    if(c._icon) c._icon.destroy();
    this[key] = null;
  }

  _killCollectable(key){
    const c = this[key];
    if(!c || c.dead) return;
    c.dead = true;
    this._destroyCollectable(key);
  }

  // ── SPAWNING ─────────────────────────────────────────────────
  _calcMaxHp(s){ return s; }

  _calcCount(s){
    if(s<=6) return 2 + Math.floor(s/2) + Math.floor(Math.random()*2);
    return 5 + Math.min(s-6,5) + Math.floor(Math.random()*3);
  }

  _makeShape(x, y, type, color, hp){
    const finalHp = Math.max(hp,1);
    const hpKey   = Math.max(1, Math.min(5,finalHp));
    const fs      = finalHp>5 ? 28 : HP_FONT[hpKey];

    const spr = this.add.image(x, y, `${type}-${HP_COLOR[hpKey]}`)
        .setOrigin(0.5,0.5).setScale(0).setDepth(5).setMask(this._mask);

    const txt = this.add.text(x, y, String(finalHp), {
      fontFamily:"'Oxanium',sans-serif", fontStyle:'600',
      fontSize:`${fs}px`, color:'#ffffff',
      stroke:HP_OUTL[hpKey], strokeThickness:Math.round(fs*0.15)
    }).setOrigin(0.5,0.5).setDepth(6).setMask(this._mask);

    return { x, y, type, color, hp:finalHp, maxHp:finalHp,
             flash:0, shake:0, dead:false, scale:0,
             angle:Math.random()*Math.PI*2,
             spinSpeed:(0.008+Math.random()*0.008)*(Math.random()<0.5?1:-1),
             _spr:spr, _txt:txt };
  }

  _placeShapes(count, maxHp, yMin, yMax){
    const MAX_TRIES = 500;
    let placed = 0;
    for(let attempt=0; attempt<MAX_TRIES && placed<count; attempt++){
      const x = PLAY_LEFT+VISUAL_R + Math.random()*Math.max(0,PLAY_RIGHT-PLAY_LEFT-VISUAL_R*2);
      const y = yMin + Math.random()*Math.max(1,yMax-yMin);
      if(this._shapes.some(s=>!s.dead && _dist(x,y,s.x,s.y)<MIN_SEP)) continue;
      if(this._energyCollectable    && !this._energyCollectable.dead    && _dist(x,y,this._energyCollectable.x,   this._energyCollectable.y)   <MIN_SEP) continue;
      if(this._extraBallCollectable && !this._extraBallCollectable.dead && _dist(x,y,this._extraBallCollectable.x,this._extraBallCollectable.y)<MIN_SEP) continue;
      if(this._slowTimeCollectable  && !this._slowTimeCollectable.dead  && _dist(x,y,this._slowTimeCollectable.x, this._slowTimeCollectable.y) <MIN_SEP) continue;
      const type  = SHAPES[Math.floor(Math.random()*SHAPES.length)];
      const color = NEON_COLORS[Math.floor(Math.random()*NEON_COLORS.length)];
      const hp    = maxHp===1 ? (Math.random()<0.12?2:1) : 1+Math.floor(Math.random()*maxHp);
      this._shapes.push(this._makeShape(x,y,type,color,hp));
      placed++;
    }
  }

  _spawnInitialShapes(){
    this._placeShapes(this._calcCount(this._step), this._calcMaxHp(this._step), SPAWN_Y_MIN, SPAWN_Y_MAX);
  }

  _spawnNewRow(){
    const count = this._calcCount(this._step);
    const maxHp = this._calcMaxHp(this._step);
    const live  = this._shapes.filter(s=>!s.dead);
    const lowestY = live.length ? Math.max(...live.map(s=>s.y)) : SPAWN_Y_MIN;
    this._placeShapes(count, maxHp, Math.min(lowestY+MIN_SEP,SPAWN_Y_MAX), SPAWN_Y_MAX);
  }

  // ── FIRE ─────────────────────────────────────────────────────
  _fireBall(){
    this._aimGfx.clear();
    this._gameState = 'shooting';
    const total = this._ballsLeft;
    const extra = this._shatterBoosterExtraBalls;
    this._shatterBoosterExtraBalls = 0;
    this._ballsLeft  = 0;
    this._ballsToFire = 0;
    for(let i=0; i<total; i++){
      const isExtra = i >= total-extra;
      this.time.delayedCall(i*500, ()=>this._launchBall(isExtra));
    }
  }

  _launchBall(isExtra=false){
    this._ballHits = 0;
    const usePurple = isExtra || this._energyBoostActive || this._slowTimePowerUpStepsLeft>0;
    const spr = this.add.image(SHOOTER_CX, BALL_START_Y, usePurple?'ball-purple':'ball')
        .setDisplaySize(40,40).setDepth(10);
    const trailGfx = this.add.graphics().setDepth(9);
    const b = {
      x:SHOOTER_CX, y:BALL_START_Y,
      vx:Math.cos(this._aimAngle)*BASE_SPD,
      vy:Math.sin(this._aimAngle)*BASE_SPD,
      alive:true, isExtra,
      _spr:spr, _trailGfx:trailGfx, _trail:[],
    };
    this._activeBalls.push(b);
  }

  // ── BALLS UPDATE ─────────────────────────────────────────────
  _updateBalls(dt){
    if(!this._activeBalls.length) return;

    const snap = this._shapes.slice();
    for(const b of this._activeBalls){
      if(!b.alive) continue;

      b._trail.push({x:b.x, y:b.y});
      if(b._trail.length>9) b._trail.shift();

      b.vy += (this._energyBoostActive ? 0.90 : GRAVITY) * dt;
      b.vx *= Math.pow(FRICTION, dt);
      b.x  += b.vx*dt;
      b.y  += b.vy*dt;

      const wd = this._energyBoostActive ? 0.95 : HIT_DECAY_WALL;
      if(b.x-BALL_R<PLAY_LEFT)  { b.x=PLAY_LEFT +BALL_R; b.vx= Math.abs(b.vx)*wd; }
      if(b.x+BALL_R>PLAY_RIGHT) { b.x=PLAY_RIGHT-BALL_R; b.vx=-Math.abs(b.vx)*wd; }
      if(b.y-BALL_R<PLAY_TOP)   { b.y=PLAY_TOP  +BALL_R; b.vy= Math.abs(b.vy)*wd; }
      if(b.y>PLAY_BOTTOM+20){
        b.alive=false; b._spr.destroy(); b._trailGfx.destroy(); continue;
      }

      // Shape collisions
      for(const s of snap){
        if(s.dead) continue;
        const d = _dist(b.x,b.y,s.x,s.y);
        if(d>=SHAPE_R+BALL_R) continue;
        const nx=(b.x-s.x)/d, ny=(b.y-s.y)/d;
        const dot=b.vx*nx+b.vy*ny;
        b.vx-=2*dot*nx; b.vy-=2*dot*ny;
        b.x+=nx*((SHAPE_R+BALL_R-d)+1); b.y+=ny*((SHAPE_R+BALL_R-d)+1);
        b.vx*=HIT_DECAY; b.vy*=HIT_DECAY;
        s.hp--; s.flash=1; s.shake=1;
        const ix=s.x+nx*SHAPE_R, iy=s.y+ny*SHAPE_R;
        const ang=Math.atan2(ny,nx)+Math.PI/2;
        if(this._energyBoostActive){
          this._vfx('cc', 25, s.x, s.y, 0,   50, null, null);
          this._vfx('cs', 10, ix,  iy,  ang,  20, 94,  null);
        } else {
          this._vfx('ic',  13, s.x, s.y, 0,   30, 286, 286);
          this._vfx('is',  10, ix,  iy,  ang,  20,  94, 117);
        }
        this._vfx('isp', 13, s.x, s.y, 0, 15, 107, 104);
        if(s.hp<=0){ s.dead=true; this._totalScore+=s.maxHp*10; }
      }

      // Collectable collisions
      this._checkCollectableHit(b, '_energyCollectable',    '_collectiblePowerUpPending');
      this._checkCollectableHit(b, '_extraBallCollectable', '_extraBallPowerUpPending');
      this._checkCollectableHit(b, '_slowTimeCollectable',  '_slowTimePowerUpPending');

      // Sync sprite & trail
      const usePurple = b.isExtra || this._energyBoostActive;
      b._spr.setPosition(b.x,b.y).setTexture(usePurple?'ball-purple':'ball');
      this._drawTrail(b);
    }

    this._activeBalls = this._activeBalls.filter(b=>b.alive);
    if(!this._shapesSliding && !this._activeBalls.length && this._ballsToFire===0){
      this._endTurn();
    }
  }

  _checkCollectableHit(b, key, pendingKey){
    const c = this[key];
    if(!c || c.dead) return;
    if(_dist(b.x,b.y,c.x,c.y) < SHAPE_R+BALL_R){
      this._killCollectable(key);
      this[pendingKey] = true;
    }
  }

  _drawTrail(b){
    const tr = b._trail;
    b._trailGfx.clear();
    if(tr.length<2) return;
    const glowing = this._energyBoostActive || b.isExtra;
    for(let i=1; i<tr.length; i++){
      const t=i/tr.length, alpha=t*0.35, w=BALL_R*(1+t);
      b._trailGfx.lineStyle(w*(glowing?1.8:1.1), glowing?0xdf80ff:0x7b3fce, alpha*(glowing?0.75:0.4));
      b._trailGfx.strokeLineShape(new Phaser.Geom.Line(tr[i-1].x,tr[i-1].y,tr[i].x,tr[i].y));
      b._trailGfx.lineStyle(w, glowing?0xbf40ff:0x7321b9, alpha*(glowing?1.0:0.7));
      b._trailGfx.strokeLineShape(new Phaser.Geom.Line(tr[i-1].x,tr[i-1].y,tr[i].x,tr[i].y));
    }
  }

  // ── VFX ──────────────────────────────────────────────────────
  _vfx(prefix, frames, x, y, angle, durationTicks, w, h){
    const img = this.add.image(x, y, `${prefix}-0`).setDepth(6).setMask(this._mask);
    if(angle) img.setRotation(angle);
    if(w && h) img.setDisplaySize(w, h);
    let f=0;
    this.time.addEvent({
      delay: (durationTicks/frames)*16.67,
      repeat: frames-2,
      callback:()=>{ f++; if(f<frames) img.setTexture(`${prefix}-${f}`); else img.destroy(); }
    });
  }

  // ── DYING / GAME OVER ────────────────────────────────────────
  _updateDying(dt){
    if(this._gameState!=='dying') return;
    this._overTimer -= dt;
    if(this._overTimer<=0){
      this._gameState='over';
      document.getElementById('over-step').textContent='Step '+String(this._step).padStart(2,'0');
      document.getElementById('screen-over').classList.add('show');
      this._saveProgress();
      try { gamee.logEvent("game_over",this._totalScore+','+this._step); } catch(e) {}
      this._ensureRewardedAdButton();
      try { gamee.gameOver(); } catch(e) {}
    }
  }

  // ── END TURN ─────────────────────────────────────────────────
  _endTurn(){
    this._destroyAllBalls();
    this._energyBoostActive = false;
    if(this._slowTimePowerUpPending){ this._slowTimePowerUpStepsLeft=3; this._slowTimePowerUpPending=false; }
    const slow = this._slowTimePowerUpStepsLeft>0;
    const amt  = (MOVE_UP + this._step*6) * (slow?0.25:1);
    if(slow) this._slowTimePowerUpStepsLeft--;
    this._slideAmt       = amt;
    this._slidedAmt      = 0;
    this._slideIsSlowTime = slow;
    this._shapesSliding  = true;
  }

  _finishEndTurn(){
    const danger = this._shapes.filter(s=>s.y<PLAY_TOP+SHAPE_R);
    if(danger.length){
      this._dyingShapes = danger;
      this._gameState   = 'dying';
      this._overTimer   = 120;
      return;
    }
    if(this._step+1===3) this._spawnExtraBallCollectable();
    this._spawnNewRow(); this._step++;
    const chance = this._step<=4 ? 0.12 : 0.4;
    if(!this._energyCollectable    || this._energyCollectable.dead)    if(Math.random()<chance) this._spawnEnergyCollectable();
    if(this._step!==3 && (!this._extraBallCollectable || this._extraBallCollectable.dead)) if(Math.random()<chance) this._spawnExtraBallCollectable();
    if(!this._slowTimeCollectable  || this._slowTimeCollectable.dead)  if(Math.random()<chance) this._spawnSlowTimeCollectable();
    this._ballsLeft = Math.max(1, Math.round(this._step*0.75));
    if(this._extraBallPowerUpPending){ this._ballsLeft++; this._extraBallPowerUpPending=false; }
    this._ballsToFire = 0;
    this._ballHits    = 0;
    if(this._collectiblePowerUpPending){ this._energyBoostActive=true; this._collectiblePowerUpPending=false; }
    if(this._boosterCooldown>0) this._boosterCooldown--;
    try {
      const pt=Date.now()-this._gameStartTime;
      const cs=(((this._totalScore*1234567)^(pt/1000|0))>>>0).toString(16);
      gamee.updateScore(this._totalScore,pt,cs);
    } catch(e) {}
    this._gameState='idle';
  }

  // ── BOOSTERS (button-activated) ───────────────────────────────
  _useBooster(type){
    if(this._boosterCooldown>0) return;
    if(type==='slow'){
      this._slowTimePowerUpPending=true;
    } else if(type==='shatter'){
      if(this._gameState==='shooting') this._launchBall(true);
      else { this._ballsLeft++; this._shatterBoosterExtraBalls++; }
      this._sparkleElapsed=0;
    } else if(type==='reset'){
      this._energyBoostActive=true;
    }
    this._boosterCooldown=3;
    try { gamee.logEvent("booster_used",type); } catch(e) {}
  }

  // ── HUD UPDATE ────────────────────────────────────────────────
  _updateHUD(){
    this._stepNum.setText(String(this._step).padStart(2,'0'));
    this._ballN.setText(String(this._ballsLeft));
    this._ballN.setX(this._ballX.x + this._ballX.width + 2);
  }

  _updateSparkle(dt){
    if(this._sparkleElapsed<0){ this._sparkleImg.setVisible(false); return; }
    this._sparkleElapsed+=dt;
    if(this._sparkleElapsed>=36){ this._sparkleElapsed=-1; this._sparkleImg.setVisible(false); return; }
    const fi=Math.min(17,Math.floor(this._sparkleElapsed*18/36));
    this._sparkleImg.setTexture(`sp-${fi}`).setVisible(true);
  }

  _updateRestingBall(){
    const idle = this._gameState==='idle'||this._gameState==='aiming';
    const purple = this._energyBoostActive||this._slowTimePowerUpStepsLeft>0;
    this._restingBall.setVisible(idle).setTexture(purple?'ball-purple':'ball');
  }

  // ── CLEANUP HELPERS ───────────────────────────────────────────
  _destroyAllShapes(){
    for(const s of this._shapes){
      if(s._spr) s._spr.destroy();
      if(s._txt) s._txt.destroy();
    }
    this._shapes=[];
  }

  _destroyAllBalls(){
    for(const b of this._activeBalls){
      b.alive=false;
      if(b._spr) b._spr.destroy();
      if(b._trailGfx) b._trailGfx.destroy();
    }
    this._activeBalls=[];
  }

  // ── GAMEE SDK ─────────────────────────────────────────────────
  _saveProgress(){
    if(this._totalScore>this._bestScore) this._bestScore=this._totalScore;
    if(this._step>this._bestStep)        this._bestStep=this._step;
    try { gamee.gameSave(JSON.stringify({bestScore:this._bestScore,bestStep:this._bestStep})); } catch(e) {}
  }

  _preloadRewardedVideo(){
    try {
      gamee.loadRewardedVideo((err,data)=>{
        this._isVideoReady=!!(data&&data.videoLoaded);
        const btn=document.getElementById('gamee-ad-btn');
        if(btn) btn.style.display=this._isVideoReady?'':'none';
      });
    } catch(e) {}
  }

  _ensureRewardedAdButton(){
    let btn=document.getElementById('gamee-ad-btn');
    if(!btn){
      btn=document.createElement('button');
      btn.id='gamee-ad-btn';
      btn.textContent='Watch Ad — Extra Ball';
      btn.style.cssText='display:none;margin-top:16px;padding:12px 28px;font-size:18px;font-family:Oxanium,sans-serif;background:#7b2fde;color:#fff;border:none;border-radius:10px;cursor:pointer;';
      btn.addEventListener('click',()=>this._offerRewardedAd());
      const over=document.getElementById('screen-over');
      if(over) over.appendChild(btn);
    }
    btn.style.display=this._isVideoReady?'':'none';
  }

  _offerRewardedAd(){
    if(!this._isVideoReady) return;
    try {
      gamee.showRewardedVideo((err,data)=>{
        this._isVideoReady=false;
        const btn=document.getElementById('gamee-ad-btn');
        if(btn) btn.style.display='none';
        if(data&&data.videoPlayed){
          this._ballsLeft=3; this._gameState='idle';
          document.getElementById('screen-over').classList.remove('show');
          this._preloadRewardedVideo();
        }
      });
    } catch(e) {}
  }

  _initGamee(){
    try {
      gamee.gameInit("FullScreen",{},["platformExtraLife","saveState","logEvents","rewardedAds"],(err,data)=>{
        if(err) console.warn("GAMEE init:",err);
        if(data&&data.saveState){
          try {
            const sv=JSON.parse(data.saveState);
            if(sv.bestScore) this._bestScore=sv.bestScore;
            if(sv.bestStep)  this._bestStep=sv.bestStep;
          } catch(e) {}
        }
        gamee.gameLoadingProgress(100);
        this._preloadRewardedVideo();
        document.getElementById('screen-start').classList.add('show');
      });
      gamee.emitter.addEventListener("start",e=>{ this._startGame(); e.detail.callback(); });
      gamee.emitter.addEventListener("useExtraLife",e=>{
        if(this._gameState==='shooting') this._launchBall(true);
        else { this._ballsLeft++; this._shatterBoosterExtraBalls++; }
        e.detail.callback();
      });
      gamee.emitter.addEventListener("submit",e=>{
        if(this._gameState!=='over'){
          this._gameState='over';
          document.getElementById('over-step').textContent='Step '+String(this._step).padStart(2,'0');
          document.getElementById('screen-over').classList.add('show');
          this._saveProgress(); this._ensureRewardedAdButton();
          try { gamee.gameOver(); } catch(e2) {}
        }
        e.detail.callback();
      });
      gamee.emitter.addEventListener("pause",e=>{ this._gamePaused=true;  this.scene.pause();  e.detail.callback(); });
      gamee.emitter.addEventListener("resume",e=>{ this._gamePaused=false; this.scene.resume(); e.detail.callback(); });
    } catch(e) {
      document.getElementById('screen-start').classList.add('show');
    }
  }
}

// ── PHASER CONFIG ────────────────────────────────────────────────
new Phaser.Game({
  type: Phaser.CANVAS,
  width: W, height: H,
  canvas: document.getElementById('canvas'),
  backgroundColor: '#000000',
  scene: [GameScene],
  render: { antialias: true },
});
