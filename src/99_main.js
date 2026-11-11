// ============ FLUXO, MENU E INICIALIZAÇÃO ============
async function flow(i){try{for(let k=i;k<STEPS.length;k++){if(!STEPS[k])break;if(k>=1&&k<=5)await UI.chapter('Capítulo '+ROMAN[k-1],CH[k-1].t,CH[k-1].s);await STEPS[k]()}}catch(e){if(e!==CANCEL){console.error(e);window.__err=String(e&&e.stack||e)}}}
function jump(i){cancelAll();closeMenu();if(!BGM.want)Player.stop();Player.show(false);$('#fade').style.transition='none';$('#fade').style.opacity=1;scene=null;flow(i)}
const menu=$('#menu');
function closeMenu(){menu.style.display='none';UI.setMenu(false)}
function openMenu(){UI.setMenu(true);menu.style.display='block';const names=['Prólogo — A biblioteca',...CH.map((c,i)=>'Capítulo '+ROMAN[i]+' — '+c.t),'Epílogo — A casa de esfirras'];
  menu.innerHTML='<button class="x glass">✕</button><h2>Gabriela</h2><p>Entre Páginas e Memórias</p><h3>Capítulos</h3>'+names.map((n,i)=>'<button class="it'+(i>save.ch?' lock':'')+'" data-c="'+i+'"><span>'+n+'<small>'+(i>save.ch?'Ainda em branco':i<save.ch?'Página preenchida — toque para rever':'Continuar daqui')+'</small></span><em>'+(i>save.ch?'🔒':'›')+'</em></button>').join('')+
    '<h3>Playlist · Kauan e Gabi</h3>'+TRACKS.map((t,i)=>'<button class="it" data-m="'+i+'"><span>'+t.title+'<small>'+t.artist+' · '+(Player.blobs[t.id]?'áudio ✔':'sem áudio')+' · '+((Player.lyr[t.id]||[]).some(x=>x.t>0)?'letra sincronizada ✔':'letra não sincronizada')+'</small></span><em>›</em></button>').join('')+
    (save.ch>=6?'<button class="it" data-a="ride"><span>Passeio livre<small>Só o Jetta, a rua e a playlist</small></span><em>›</em></button>':'')+
    '<h3>Opções</h3><button class="it" data-a="mute"><span>Som: '+(muted?'desligado':'ligado')+'</span></button><button class="it" data-a="reset"><span>Recomeçar do zero<small>Apaga o progresso (as músicas ficam)</small></span></button>';
  menu.querySelector('.x').onclick=closeMenu;menu.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{const i=+b.dataset.c;if(i<=save.ch)jump(i)});
  menu.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>mediaEditor(menu,+b.dataset.m,openMenu));
  const q=a=>menu.querySelector('[data-a='+a+']');q('mute').onclick=()=>{AudioSys.unlock();AudioSys.mute(!muted);openMenu()};
  let armed=0;q('reset').onclick=e=>{if(Date.now()-armed<4000){save={ch:0,fin:false};persist();jump(0)}else{armed=Date.now();e.currentTarget.querySelector('span').innerHTML='Toque de novo para confirmar<small>Isso apaga o progresso</small>'}};
  if(q('ride'))q('ride').onclick=()=>{cancelAll();closeMenu();$('#fade').style.opacity=1;scene=null;freeRide().catch(e=>{if(e!==CANCEL)console.error(e)})}}
$('#bMenu').addEventListener('click',()=>{AudioSys.unlock();openMenu()});
async function title(){const bg=document.createElement('canvas');bg.width=W;bg.height=H;paintLibrary(bg.getContext('2d'));
  scene={camX:0,draw(){const o=Math.round(70+Math.sin(time*.12)*60);g.drawImage(bg,-o,0);R('rgba(11,8,16,.5)',0,0,VW,H);const r=rng(5);for(let i=0;i<22;i++){const x=r()*VW,y=(r()*H+time*(4+r()*5))%H;R('rgba(255,230,170,.55)',x+Math.sin(time+i)*5,y,1,1)}}};ambient('title');UI.fade(0,1.6);
  const cont=save.ch>0,c=$('#card');c.innerHTML='<div class="k">Uma história original de Kauan</div><div class="t" style="font-size:calc(46*var(--u));letter-spacing:.12em">GABRIELA</div><div class="s" style="font-size:calc(21*var(--u))">Entre Páginas e Memórias</div><div class="s" style="font-size:calc(14.5*var(--u));opacity:.75;margin-top:calc(26*var(--u))">Algumas histórias merecem ser lembradas.</div>'+
    '<div style="margin-top:calc(46*var(--u));display:flex;flex-direction:column;gap:calc(10*var(--u));width:76%"><button id="bGo" style="min-height:calc(58*var(--u));border-radius:99px;background:#f3ece0;color:#17131c;font-weight:700;font-size:calc(18*var(--u))">'+(cont?'Continuar':'Começar')+'</button>'+(cont?'<button id="bNew" style="min-height:calc(50*var(--u));border-radius:99px;border:1px solid rgba(255,255,255,.3);font-size:calc(15.5*var(--u))">Recomeçar do início</button>':'')+'</div>';
  c.style.display='flex';c.style.background='linear-gradient(rgba(6,5,10,.25),rgba(6,5,10,.8) 60%)';requestAnimationFrame(()=>c.classList.add('in'));
  const go=i=>{if(BGM.start())ambient(null);AudioSys.unlock();sfx.ok();c.classList.remove('in');setTimeout(()=>{c.style.display='none';c.style.background=''},500);jump(i)};
  $('#bGo').onclick=()=>go(Math.min(save.ch,6));if(cont)$('#bNew').onclick=()=>{save={ch:0,fin:false};persist();go(0)}}
async function boot(){resize();await Player.init();requestAnimationFrame(frame);const m=/^#c(\d)$/.exec(location.hash);if(m){save.ch=Math.max(save.ch,+m[1]);return flow(+m[1])}title().catch(e=>{if(e!==CANCEL)console.error(e)})}
window.__g={get scene(){return scene},get busy(){return busy},set speed(v){tscale=v},save,Player,UI};
boot();
