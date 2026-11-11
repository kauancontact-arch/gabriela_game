'use strict';
// ============ NÚCLEO: pixel art retrô em tela vertical, só toque ============
const $=s=>document.querySelector(s);
const stage=$('#stage'),cv=$('#c'),ctx=cv.getContext('2d');
const W=320,H=180,VW=160,FONT='Georgia,"Times New Roman",serif',TAU=Math.PI*2;
const buf=document.createElement('canvas');buf.width=VW;buf.height=H;const g=buf.getContext('2d');g.imageSmoothingEnabled=false;
let S=1,CSSU=1,time=0,gen=0,scene=null,busy=0,tscale=1,shake=0;
const CANCEL={cancel:1},TQ=[];
const clamp=(v,a,b)=>v<a?a:v>b?b:v,lerp=(a,b,t)=>a+(b-a)*t,pick=a=>a[Math.random()*a.length|0];
const ease={io:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,o:t=>1-Math.pow(1-t,3),i:t=>t*t*t,l:t=>t};
function rng(s){return()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function resize(){const vw=innerWidth,vh=innerHeight,w=Math.min(vw,vh*.5625),d=Math.min(devicePixelRatio||1,3);stage.style.width=w+'px';stage.style.height=vh+'px';CSSU=w/450;
  stage.style.setProperty('--u',CSSU+'px');cv.width=Math.round(w*d);cv.height=Math.round(w*d*H/VW);S=cv.width/VW}
addEventListener('resize',resize);addEventListener('orientationchange',()=>setTimeout(resize,250));
// --- desenho ---
const R=(c,x,y,w,h)=>{g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),w,h)};
const mk=c=>(col,x,y,w,h)=>{c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),w,h)};
function T(s,x,y,o){TQ.push([s,x,y,o||{}])}
function flushT(){for(const[s,x,y,o]of TQ){ctx.font=(o.i?'italic ':'')+(o.b?'bold ':'')+Math.max(6,(o.size||9)*S)+'px '+FONT;ctx.textAlign=o.align||'left';ctx.textBaseline='top';ctx.globalAlpha=o.alpha==null?1:clamp(o.alpha,0,1);
  if(o.sh){ctx.fillStyle='#120c10';ctx.fillText(s,(x+.8)*S,(y+.8)*S)}ctx.fillStyle=o.c||'#fff';ctx.fillText(s,x*S,y*S)}ctx.globalAlpha=1;TQ.length=0}
// --- assíncrono com cancelamento por geração ---
const timers=[],tweens=[],waiters=[];
const G=p=>{const g2=gen;return p.then(v=>{if(g2!==gen)throw CANCEL;return v})};
function wait(s){return G(new Promise(r=>timers.push({t:s,r})))}
function until(fn){return G(new Promise(r=>waiters.push({fn,r})))}
function tween(o,to,dur,e){return G(new Promise(r=>{const from={};for(const k in to)from[k]=o[k];tweens.push({o,from,to,dur:Math.max(.001,dur),t:0,e:e||ease.io,r})}))}
function cancelAll(){gen++;for(const a of[timers,tweens,waiters])a.splice(0).forEach(x=>x.r());busy=0;UI.reset()}
async function cut(fn){const g2=gen;busy++;try{return await fn()}finally{if(g2===gen)busy=Math.max(0,busy-1)}}
// --- sala (exploração vista de cima, toque para andar e interagir) ---
class Room{
  constructor(o){this.w=W;this.minY=82;this.maxY=H-4;this.walls=[];this.objs=[];this.zones=[];this.flag={};this.zoom=1;Object.assign(this,o);
    this.p={x:this.start[0],y:this.start[1],dir:this.startDir||'d',f:0,ft:0,look:this.look||GABI,hidden:false};this.tgt=null;
    if(this.paint){this.bg=document.createElement('canvas');this.bg.width=this.w;this.bg.height=H;this.paint(this.bg.getContext('2d'))}
    this.cam=clamp(this.p.x-VW/2,0,this.w-VW);this.camX=Math.round(this.cam)}
  repaint(){this.paint(this.bg.getContext('2d'))}
  add(o){this.objs.push(o);return o}
  get(id){return this.objs.find(o=>o.id===id)}
  blocked(x,y){const a=x-4,b=y-3;if(a<2||a+8>this.w-2||y<this.minY||y>this.maxY)return true;
    for(const r of this.walls)if(a<r[0]+r[2]&&a+8>r[0]&&b<r[1]+r[3]&&b+4>r[1])return true;
    for(const o of this.objs)if(o.solid&&!o.hidden&&a<o.x+o.w&&a+8>o.x&&b<o.y+o.h&&b+4>o.y)return true;return false}
  dist(o){const p=this.p,cx=clamp(p.x,o.x,o.x+o.w),cy=clamp(p.y-1,o.y,o.y+o.h);return Math.hypot(p.x-cx,p.y-1-cy)}
  tap(x,y){if(busy||this.p.hidden||this.noWalk)return;let best=null,bd=1e9;
    for(const o of this.objs){if(!o.act||o.hidden)continue;const top=(o.top!=null?o.top:o.y-14)-30;if(x>o.x-8&&x<o.x+o.w+8&&y>top&&y<o.y+o.h+8){const d=Math.hypot(x-(o.x+o.w/2),y-(o.y+o.h/2));if(d<bd){bd=d;best=o}}}
    sfx.tap();if(best){const cx=best.x+best.w/2,cy=best.y+best.h/2,p=this.p,c=[[cx,best.y+best.h+6],[best.x-7,cy+2],[best.x+best.w+7,cy+2],[cx,best.y-3]].filter(q=>!this.blocked(q[0],q[1])).sort((a,b)=>Math.hypot(a[0]-p.x,a[1]-p.y)-Math.hypot(b[0]-p.x,b[1]-p.y))[0]||[p.x,p.y];this.tgt={x:c[0],y:c[1],obj:best,T:0,st:0}}
    else this.tgt={x:clamp(x,6,this.w-6),y:clamp(y,this.minY,this.maxY),T:0,st:0}}
  arrive(o){this.tgt=null;const p=this.p;p.f=0;const cx=o.x+o.w/2,cy=o.y+o.h/2;p.dir=Math.abs(cx-p.x)>Math.abs(cy-p.y)+4?(cx>p.x?'r':'l'):(cy>p.y?'d':'u');
    if(o.look)o.dir=Math.abs(p.x-o.px)>Math.abs(p.y-o.py)?(p.x>o.px?'r':'l'):(p.y>o.py?'d':'u');cut(()=>o.act(o)).catch(e=>{if(e!==CANCEL){console.error(e);window.__err=String(e&&e.stack||e)}})}
  update(dt){const p=this.p,t=this.tgt;let dx=0,dy=0;
    if(!busy&&!p.hidden&&t){t.T+=dt;const ex=t.x-p.x,ey=t.y-p.y,d=Math.hypot(ex,ey);
      if(t.obj&&(this.dist(t.obj)<11||d<2.5||t.T>3.4||t.st>.8)){this.arrive(t.obj);return}
      if(d<2.5||t.T>4||t.st>.8)this.tgt=null;else{dx=ex/d;dy=ey/d}}
    if(dx||dy){const sp=(this.speed||72)*dt,ox=p.x,oy=p.y;if(!this.blocked(p.x+dx*sp,p.y))p.x+=dx*sp;if(!this.blocked(p.x,p.y+dy*sp))p.y+=dy*sp;
      if(Math.hypot(p.x-ox,p.y-oy)<sp*.45){t.st+=dt;const q=t.side||(t.side=Math.random()<.5?1:-1);if(Math.abs(dx)>Math.abs(dy)){if(!this.blocked(p.x,p.y+q*sp))p.y+=q*sp}else if(!this.blocked(p.x+q*sp,p.y))p.x+=q*sp}else t.st=Math.max(0,t.st-dt);
      p.dir=Math.abs(dx)>Math.abs(dy)?(dx>0?'r':'l'):(dy>0?'d':'u');p.ft+=dt*8;p.f=(p.ft|0)%4}else{p.f=0;p.ft=0}
    for(const z of this.zones)if(!z.off&&!busy&&p.x>z.x&&p.x<z.x+z.w&&p.y>z.y&&p.y<z.y+z.h){z.off=true;this.tgt=null;cut(z.fn).catch(()=>{})}
    if(!this.camLock)this.cam=lerp(this.cam,clamp(p.x-VW/2,0,this.w-VW),1-Math.exp(-7*dt))}
  tick(dt){const s=this.pet;this.ups&&this.ups(dt);if(!s||s.hidden)return;const p=this.p;
    if(s.mode==='follow'){const d=Math.hypot(p.x-s.x,p.y+1-s.y);if(d>20){const v=Math.min(90,d*3)*dt;s.x+=(p.x-s.x)/d*v;s.y+=(p.y+1-s.y)/d*v;s.flip=p.x<s.x;s.ft+=dt*10;s.f=(s.ft|0)%2}else s.f=0}
    else if(s.mode==='goto'){const d=Math.hypot(s.tx-s.x,s.ty-s.y);if(d<2){s.mode='stay';s.f=0;if(s.arr){const a=s.arr;s.arr=null;a()}}else{const v=Math.min(d,(s.sp||110)*dt);s.x+=(s.tx-s.x)/d*v;s.y+=(s.ty-s.y)/d*v;s.flip=s.tx<s.x;s.ft+=dt*14;s.f=(s.ft|0)%2}}}
  petGo(x,y,sp){const s=this.pet;return G(new Promise(r=>{s.tx=x;s.ty=y;s.sp=sp;s.mode='goto';s.arr=r}))}
  toView(x,y){return[x-this.camX,y]}
  draw(){const cam=Math.round(this.cam+(shake>0?Math.sin(time*70)*shake*3:0));g.save();
    if(this.zoom!==1){const z=this.zoom,f=this.focus||[VW/2,H/2],k=Math.min(1,z-1);g.translate(VW/2,H/2);g.scale(z,z);g.translate(-lerp(VW/2,f[0]-cam,k),-lerp(H/2,f[1],k))}
    g.translate(-cam,0);this.camX=cam;if(this.bg)g.drawImage(this.bg,0,0);this.under&&this.under(cam);
    const p=this.p,list=this.objs.filter(o=>!o.hidden&&o.draw);if(!p.hidden)list.push(p);if(this.pet&&!this.pet.hidden)list.push(this.pet);
    const sk=o=>o.sy!=null?o.sy:o.h!=null?o.y+o.h:o.y;list.sort((a,b)=>sk(a)-sk(b));
    for(const o of list){if(o===p)drawPerson(p.look,p.x,p.y-(p.jz||0),p.dir,p.f);else if(o===this.pet)drawSpeak(o.x,o.y,o.flip,o.f,o.mode==='sleep');else o.draw(o)}
    this.over&&this.over(cam);
    if(!busy&&!UI.blocking()&&!p.hidden&&this.zoom===1)for(const o of this.objs){if(!o.act||o.hidden||o.nomark)continue;const mx=Math.round(o.x+o.w/2),my=Math.round((o.top!=null?o.top:o.y-14)+Math.sin(time*5+o.x)*1.5);if(mx<cam-4||mx>cam+VW+4)continue;
      R('#17101a',mx-3,my-7,7,6);R('#17101a',mx-2,my-1,5,1);R('#17101a',mx-1,my,3,1);R('#ffd75a',mx-2,my-6,5,5);R('#ffd75a',mx-1,my-1,3,1);R('#fff3a0',mx-2,my-6,2,2)}
    if(this.tgt&&!this.tgt.obj&&!busy){const t=this.tgt,a=(time*6|0)%2;R('rgba(255,255,255,.7)',t.x-1-a,t.y,3+2*a,1);R('rgba(255,255,255,.7)',t.x,t.y-1-a,1,3+2*a)}
    g.restore();this.post&&this.post(cam)}
}
function npc(id,x,y,look,act,dir){return{id,x:x-5,y:y-4,w:10,h:5,solid:true,look,dir:dir||'d',px:x,py:y,top:y-34,act,draw(o){drawPerson(o.look,o.px,o.py-(o.jz||0),o.dir,o.f||0)}}}
function deco(id,x,y,w,h,draw,act,ex){return Object.assign({id,x,y,w,h,solid:true,draw,act},ex||{})}
function sparkle(x,y,c){c=c||'#fff3a0';const t=time*5+x,a=(Math.sin(t)+1)/2;if(a>.3){R(c,x,y-2,1,5);R(c,x-2,y,5,1)}if(Math.sin(t*1.7)>.5)R('#fff',x+4,y-4,1,1)}
function viewToCss(x,y){return[x/VW*450*CSSU,y/VW*450*CSSU]}
// --- laço principal ---
let last=0;
function step(dt){time+=dt;shake=Math.max(0,shake-dt*2.5);
  for(let i=timers.length-1;i>=0;i--){const t=timers[i];t.t-=dt;if(t.t<=0){timers.splice(i,1);t.r()}}
  for(let i=tweens.length-1;i>=0;i--){const t=tweens[i];t.t+=dt;const k=Math.min(1,t.t/t.dur),e=t.e(k);for(const p in t.to)t.o[p]=lerp(t.from[p],t.to[p],e);if(k>=1){tweens.splice(i,1);t.r()}}
  for(let i=waiters.length-1;i>=0;i--){const w=waiters[i];if(w.fn()){waiters.splice(i,1);w.r()}}
  if(scene){if(scene.update&&!UI.blocking())scene.update(dt);if(scene.tick)scene.tick(dt)}Player.tick(dt)}
function frame(ts){const dt=Math.min(.05,(ts-last)/1000||0);last=ts;
  try{const n=Math.max(1,Math.round(tscale));for(let i=0;i<n;i++)step(dt);
    g.setTransform(1,0,0,1,0,0);g.fillStyle='#0b0810';g.fillRect(0,0,VW,H);if(scene)scene.draw();
    ctx.imageSmoothingEnabled=false;ctx.drawImage(buf,0,0,cv.width,cv.height);flushT();UI.sync()}catch(e){if(e!==CANCEL){console.error(e);window.__err=String(e&&e.stack||e)}}
  requestAnimationFrame(frame)}
cv.addEventListener('pointerdown',e=>{e.preventDefault();AudioSys.unlock();if(busy||UI.blocking()||!scene||!scene.tap)return;const r=cv.getBoundingClientRect();scene.tap((e.clientX-r.left)/r.width*VW+(scene.camX||0),(e.clientY-r.top)/r.height*H)});
// --- progresso ---
const SAVE_KEY='gabriela-memorias-v3';let save={ch:0,fin:false};
try{const s=JSON.parse(localStorage.getItem(SAVE_KEY));if(s&&typeof s.ch==='number')save=s}catch(e){}
function persist(){try{localStorage.setItem(SAVE_KEY,JSON.stringify(save))}catch(e){}}
