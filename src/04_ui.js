// ============ INTERFACE (DOM, só toque) ============
const UI=(()=>{const el={dlg:$('#dlg'),dt:$('#dt'),dn:$('#dn'),av:$('#av'),tap:$('#tap'),opts:$('#opts'),card:$('#card'),fade:$('#fade'),goal:$('#goal'),toast:$('#toast'),got:$('#got'),mini:$('#mini'),hots:$('#hots'),load:$('#load'),ring:$('#ring')};
  let D=null,optR=null,cardR=null,gotR=null,miniOn=false,menuOn=false,lastT=performance.now(),toastT=0;
  const hotEls=new Map();
  function resolveWho(w){if(!w)return null;if(typeof w==='string')return w==='Speak'?{name:'Speak',dog:1}:{name:w,look:WHO[w]};return w}
  function say(who,text){if(text===undefined){text=who;who=null}const w=resolveWho(who);
    return G(new Promise(res=>{D={text,n:0,res};el.dlg.className='glass on'+(w?' who':' nar')+(w&&!w.dog&&!w.look?' noav':'');el.dn.textContent=w?w.name:'';
      if(w&&(w.dog||w.look)){const a=w.dog?dogAvatarPx():avatarPx(w.look),g2=el.av.getContext('2d');g2.clearRect(0,0,56,56);g2.drawImage(a,0,0)}
      el.dt.textContent='';el.tap.style.display='block';$('#dmore').style.visibility='hidden'}))}
  async function talk(a){for(const x of a)await say(x[0],x[1])}
  function closeDlg(){el.dlg.classList.remove('on');el.tap.style.display='none';const d=D;D=null;return d}
  el.tap.addEventListener('pointerdown',e=>{e.preventDefault();AudioSys.unlock();if(cardR){if(performance.now()-cardR.t0>900){const r=cardR;cardR=null;el.card.classList.remove('in');setTimeout(()=>{if(!cardR)el.card.style.display='none'},350);el.tap.style.display=D?'block':'none';r.res()}return}
    if(gotR){if(performance.now()-gotR.t0>600){const r=gotR;gotR=null;el.got.classList.remove('in');el.got.style.display='none';el.tap.style.display='none';r.res()}return}
    if(!D)return;if(D.n<D.text.length){D.n=D.text.length;el.dt.textContent=D.text;$('#dmore').style.visibility='visible'}else{sfx.tap();const d=closeDlg();d.res()}});
  function choose(who,text,opts){const w=resolveWho(who);return G(new Promise(res=>{optR=res;el.opts.innerHTML='';const q=document.createElement('div');q.className='q glass';q.innerHTML=(w?'<b style="color:#ffd98a">'+w.name+'</b><br>':'')+text;el.opts.appendChild(q);
    opts.forEach((o,i)=>{const b=document.createElement('button');b.textContent=o;b.addEventListener('click',()=>{if(!optR)return;sfx.pick();const r=optR;optR=null;el.opts.style.display='none';r(i)});el.opts.appendChild(b)});el.opts.style.display='flex'}))}
  function card(html,o){o=o||{};return G(new Promise(res=>{el.card.innerHTML=html+(o.auto?'':'<div class="more">toque para continuar</div>');el.card.style.display='flex';el.card.style.background=o.bg||'';requestAnimationFrame(()=>requestAnimationFrame(()=>el.card.classList.add('in')));
    if(o.auto){setTimeout(()=>{el.card.classList.remove('in');setTimeout(()=>{el.card.style.display='none';res()},600)},o.auto*1000/Math.max(1,tscale))}else{cardR={res,t0:performance.now()-(tscale>1?900:0)};el.tap.style.display='block'}}))}
  const quote=(t,sub)=>card('<div class="q">'+t+'</div>'+(sub?'<div class="s" style="margin-top:calc(18*var(--u))">'+sub+'</div>':''));
  const chapter=(k,t,s)=>card('<div class="k">'+k+'</div><div class="t">'+t+'</div><div class="s">'+s+'</div>',{auto:3,bg:'rgba(6,5,10,.9)'});
  function fade(to,dur){dur=(dur==null?.5:dur)/Math.max(1,tscale);el.fade.style.transition='opacity '+dur+'s ease';el.fade.style.opacity=to;return wait(dur*Math.max(1,tscale)+.03)}
  function loading(on){el.load.style.opacity=on?1:0}
  function goal(t){if(!t){el.goal.classList.remove('on');return}el.goal.textContent=t;el.goal.classList.add('on')}
  function toast(title,sub){el.toast.innerHTML='<small>'+(sub||'Conquista')+'</small><b>'+title+'</b>';el.toast.classList.add('on');sfx.ok();clearTimeout(toastT);toastT=setTimeout(()=>el.toast.classList.remove('on'),3600)}
  function got(ic,title,desc){sfx.ok();return G(new Promise(res=>{const c=el.got.querySelector('canvas'),g2=c.getContext('2d');g2.imageSmoothingEnabled=false;g2.clearRect(0,0,64,64);g2.drawImage(iconCv(ic),2,2,60,60);
    el.got.querySelector('b').textContent=title;el.got.querySelector('p').textContent=desc||'';el.got.style.display='flex';requestAnimationFrame(()=>el.got.classList.add('in'));gotR={res,t0:performance.now()-(tscale>1?600:0)};el.tap.style.display='block'}))}
  // pontos de interesse
  function addHot(h){const e=document.createElement('div');e.className='hot';e.innerHTML='<i></i><b></b>';e.addEventListener('pointerdown',async ev=>{ev.preventDefault();ev.stopPropagation();AudioSys.unlock();if(busy||blocking()||!h.on)return;busy++;const g=gen;sfx.tap();
      try{const p=scene.player;if(p&&h.stand!==null){await p.walkTo(h.stand!=null?h.stand:h.x+(p.x<h.x?-(h.gap??52):(h.gap??52)));p.face(h.face??h.x)}await h.act(h)}catch(err){if(err!==CANCEL){console.error(err);window.__err=String(err&&err.stack||err)}}finally{if(g===gen)busy=Math.max(0,busy-1)}});
    el.hots.appendChild(e);hotEls.set(h,e)}
  function clearHot(){hotEls.forEach(e=>e.remove());hotEls.clear()}
  function blocking(){return!!(D||optR||cardR||gotR||miniOn||menuOn)}
  function sync(){const now=performance.now(),dt=Math.min(.1,(now-lastT)/1000);lastT=now;
    if(D&&D.n<D.text.length){const b=D.n|0;D.n=Math.min(D.text.length,D.n+dt*46*Math.max(1,tscale));if((D.n|0)!==b){el.dt.textContent=D.text.slice(0,D.n|0);if((D.n|0)%3===0)sfx.talk()}if(D.n>=D.text.length)$('#dmore').style.visibility='visible'}
    const hide=busy>0||blocking()||+el.fade.style.opacity>.4;hotEls.forEach((e,h)=>{const[sx,sy]=toScreen(h.x,h.y);const vis=h.on&&!hide&&sx>20&&sx<W-20&&sy>70&&sy<H-40;e.style.display=vis?'flex':'none';if(vis){e.style.transform='translate('+sx*CSSU+'px,'+sy*CSSU+'px)';const b=e.lastChild;if(b.textContent!==h.label)b.textContent=h.label}})}
  function reset(){if(D){const d=closeDlg();d.res()}if(optR){const r=optR;optR=null;el.opts.style.display='none';r(0)}if(cardR){const r=cardR;cardR=null;el.card.style.display='none';el.card.classList.remove('in');r.res()}if(gotR){const r=gotR;gotR=null;el.got.style.display='none';r.res()}
    el.tap.style.display='none';endMini();goal('');el.ring.style.display='none'}
  // ---- minigames de um toque ----
  function startMini(html){miniOn=true;el.mini.innerHTML=html;el.mini.style.display='flex';return el.mini}
  function endMini(){miniOn=false;el.mini.style.display='none';el.mini.innerHTML='';if(el.mini._iv){clearInterval(el.mini._iv);el.mini._iv=null}}
  // barra de tempo: toque quando o marcador estiver no verde
  function timing(o){return G(new Promise(res=>{const zone=o.zone||.26,m=startMini('<div class="ttl">'+o.title+'</div><div class="msg"></div><div class="bar"><div class="zone" style="left:'+(50-zone*50)+'%;width:'+zone*100+'%"></div><div class="mk"></div></div><div class="row"><button class="big">'+(o.btn||'TOCAR')+'</button></div><div class="hint">'+(o.hint||'Toque quando a marca passar pelo verde')+'</div>');
    const mk=m.querySelector('.mk'),msg=m.querySelector('.msg'),btn=m.querySelector('.big');let pos=0,dir=1,ok=0,sp=o.speed||.95,done=false,t0=performance.now();msg.textContent='0 / '+o.reps;
    m._iv=setInterval(()=>{const n=performance.now(),dt=Math.min(.05,(n-t0)/1000)*Math.max(1,tscale);t0=n;if(done)return;pos+=dir*sp*dt;if(pos>1){pos=1;dir=-1}if(pos<0){pos=0;dir=1}mk.style.left=pos*100+'%';if(tscale>1&&Math.abs(pos-.5)<zone/2)hitIt()},16);
    function hitIt(){if(done)return;if(Math.abs(pos-.5)<zone/2+.03){ok++;sp*=1.05;sfx.pick();shake=.18;msg.textContent=pick(['Boa!','Isso!','Perfeito!','Arrasou!'])+'  '+ok+' / '+o.reps;o.onHit&&o.onHit(ok);if(ok>=o.reps){done=true;sfx.ok();setTimeout(()=>{endMini();res(true)},750)}}else{sfx.bad();msg.textContent=pick(['Quase!','Por pouco!'])+'  '+ok+' / '+o.reps;o.onMiss&&o.onMiss()}}
    btn.addEventListener('pointerdown',e=>{e.preventDefault();hitIt()})}))}
  // alternar dois botões
  function alt(o){return G(new Promise(res=>{const m=startMini('<div class="ttl">'+o.title+'</div><div class="msg"></div><div class="bar"><div class="fill" style="width:0"></div></div><div class="row"><button class="big" data-k="0">ESQUERDA</button><button class="big dim" data-k="1">DIREITA</button></div><div class="hint">Toque nos botões alternando, no seu ritmo</div>');
    const bs=[...m.querySelectorAll('.big')],fill=m.querySelector('.fill');let n=0,want=0,done=false;const tapk=k=>{if(done||k!==want)return;n++;want=1-want;bs[want].classList.remove('dim');bs[1-want].classList.add('dim');sfx.step();fill.style.width=n/o.target*100+'%';o.onStep&&o.onStep(n);if(n>=o.target){done=true;sfx.ok();setTimeout(()=>{endMini();res(true)},700)}};
    bs.forEach((b,i)=>b.addEventListener('pointerdown',e=>{e.preventDefault();tapk(i)}));if(tscale>1)m._iv=setInterval(()=>tapk(want),40)}))}
  // memória: repetir a sequência
  function seq(o){return G(new Promise(res=>{const m=startMini('<div class="ttl">'+o.title+'</div><div class="msg">Observe…</div><div class="grid">'+o.labels.map((l,i)=>'<button class="big" data-k="'+i+'">'+l+'</button>').join('')+'</div><div class="hint">Veja a sequência e repita na mesma ordem</div>');
    const bs=[...m.querySelectorAll('.big')],msg=m.querySelector('.msg');let round=0,s=[],i=0,input=false,done=false;const T=ms=>ms/Math.max(1,tscale);
    const flash=(k,ms)=>{bs[k].classList.add('lit');beep(330+k*90,.18,'triangle',.12);o.onShow&&o.onShow(k);setTimeout(()=>bs[k].classList.remove('lit'),T(ms))};
    function show(){input=false;msg.textContent='Observe…';let j=0;const next=()=>{if(done||!miniOn)return;if(j<s.length){flash(s[j],380);j++;setTimeout(next,T(620))}else{input=true;i=0;msg.textContent='Sua vez!'}};setTimeout(next,T(700))}
    function newRound(){s=[];for(let k=0;k<o.lens[round];k++){let d;do{d=Math.random()*o.labels.length|0}while(k&&d===s[k-1]);s.push(d)}show()}
    function press(k){if(!input||done)return;flash(k,200);if(k===s[i]){i++;if(i>=s.length){input=false;round++;if(round>=o.lens.length){done=true;msg.textContent='Perfeito!';sfx.ok();setTimeout(()=>{endMini();res(true)},800)}else{msg.textContent='Boa! Mais uma…';sfx.pick();setTimeout(newRound,T(800))}}}else{sfx.bad();msg.textContent='Ops! Olhe de novo…';input=false;setTimeout(show,T(700))}}
    m._iv=setInterval(()=>{if(tscale>1&&input&&!done)press(s[i])},90);
    bs.forEach((b,k)=>b.addEventListener('pointerdown',e=>{e.preventDefault();press(k)}));newRound()}))}
  return{say,talk,choose,card,quote,chapter,fade,loading,goal,toast,got,addHot,clearHot,blocking,sync,reset,timing,alt,seq,startMini,endMini,el,setMenu:v=>menuOn=v}})();
addEventListener('unhandledrejection',e=>{if(e.reason===CANCEL)e.preventDefault()});
const toScreen=()=>[0,0];
