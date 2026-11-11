// ============ ATALHOS usados pelos capítulos ============
const say=(n,t)=>t===undefined?UI.say(null,n):UI.say(n||null,t);
async function talk(a){for(const x of a)await say(x[0],x[1])}
const choose=(n,t,o)=>UI.choose(n||null,t,o),got=(ic,t,d)=>UI.got(ic,t,d),card=(t,o)=>UI.quote(t,o&&o.sub),fade=(to,d)=>UI.fade(to,d),toast=(t,s)=>UI.toast(t,s);
Object.defineProperty(window,'goal',{set(v){UI.goal(v)},get(){return''},configurable:true});
const music=n=>{if(Player.playing&&Player.real)return;ambient({driveC:'night'}[n]||n)};
const hopP=(o,h)=>{o.jz=0;tween(o,{jz:h||4},.09,ease.o).then(()=>tween(o,{jz:0},.14,ease.i)).catch(()=>{})};
const timingGame=o=>UI.timing({title:o.title,reps:o.reps,speed:(o.speed||1.05)*.86,zone:(o.zone||.24)+.04,btn:o.btn,hint:o.help,onHit(n){const p=scene&&scene.p;if(p){hopP(p,5);p.f=n%2}o.onHit&&o.onHit(n)}});
const mashGame=o=>{const p=scene.p;p.dir='r';return UI.alt({title:o.title,target:o.target,onStep(n){p.f=n%4;o.onStep&&o.onStep(n)}}).then(v=>{p.f=0;return v})};
const simonGame=o=>{const p=scene.p,D=['u','d','l','r'];return UI.seq({title:o.title,lens:o.lens,labels:D.map(k=>o.names[k]),onShow(k){p.dir=D[k]==='u'?'d':D[k];p.f=1;if(k===0)hopP(p,6);setTimeout(()=>p.f=0,260)}}).then(v=>{p.dir='d';return v})};
function lg(c,x0,y0,x1,y1,...s){const q=c.createLinearGradient(x0,y0,x1,y1);for(let i=0;i<s.length;i+=2)q.addColorStop(s[i],s[i+1]);return q}
function fr(c,col,x,y,w,h){c.fillStyle=col;c.fillRect(x,y,w,h)}
function fp(c,col,pts){c.beginPath();c.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)c.lineTo(pts[i],pts[i+1]);c.closePath();c.fillStyle=col;c.fill()}
function ell(c,col,x,y,rx,ry,rot){c.beginPath();c.ellipse(x,y,rx,ry,rot||0,0,TAU);c.fillStyle=col;c.fill()}
