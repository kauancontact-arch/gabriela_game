// ============ CAPÍTULO III — PRAIA: só Gabriela e Kauan ============
function paintBeach(c,sun){const P=mk(c),r=rng(21),Wd=480;
  if(sun){vgrad(c,0,0,Wd,44,'#3a2a5a','#f08a4a');P('#ffe9a0',226,26,28,18);P('#fff6d0',230,30,20,14);vgrad(c,0,44,Wd,34,'#c8603a','#5a3a6a');for(let i=0;i<30;i++)P('#ffd08a',200+r()*80-i,46+i,20+r()*30,1)}
  else{vgrad(c,0,0,Wd,44,'#5ab4f0','#c8ecff');[[40,10],[190,18],[330,8],[420,22]].forEach(([x,y])=>{P('#fff',x,y,26,5);P('#fff',x+5,y-3,14,4);P('#eaf6ff',x+2,y+4,22,2)});vgrad(c,0,44,Wd,34,'#2a7ac0','#4ab8d8')}
  P(sun?'#ffd0a0':'#e8fbff',0,43,Wd,1);P(sun?'#d8a878':'#ecd9a0',0,78,Wd,102);P(sun?'#b88a68':'#d8c488',0,78,Wd,5);for(let i=0;i<700;i++)P(r()<.5?(sun?'#c89868':'#e0cc90'):(sun?'#e8b888':'#f6e8b8'),r()*Wd,84+r()*95,1+r()*2,1);
  const L=sun?'#f0d0b0':'#fff8e8';P(L,170,104,160,1);P(L,170,160,160,1);P(L,170,104,1,57);P(L,329,104,1,57);
  P('#17101a',15,36,72,48);P('#8a5a2a',16,52,70,31);P('#6b4420',16,66,70,3);for(let i=0;i<7;i++)P(i%2?'#f4f4f4':'#e84a3a',16+i*10,37,10,15);P('#17101a',16,51,70,1);P('#3a2a1a',24,55,54,10);
  for(const x of[432,462]){P('#17101a',x-1,30,6,56);P('#8a6a3a',x,31,4,54);for(let y=34;y<84;y+=6)P('#6b4a22',x,y,4,1);const lf=sun?'#2a4a3a':'#2e8f4a';[[-18,-4],[-12,-10],[4,-12],[10,-6],[-20,2],[8,2]].forEach(([dx,dy])=>{P('#17101a',x+dx-1,30+dy-1,16,6);P(lf,x+dx,30+dy,14,4)});P('#5a3a1a',x-1,30,3,3)}
  P('#e84a6f',340,168,24,8);P('#f4f4f4',340,170,24,1);P('#f4f4f4',340,173,24,1);P('#fff',136,96,3,2);P('#f0b0a0',452,150,3,2)}
function umbrella(id,x,y,c1,c2,act){return deco(id,x-2,y-2,4,4,o=>{R('rgba(0,0,0,.15)',x-14,y,28,4);R('#17101a',x-1,y-30,3,31);R('#ddd',x,y-30,1,30);R('#17101a',x-17,y-36,34,9);for(let i=0;i<4;i++)R(i%2?c1:c2,x-16+i*8,y-35,8,7);R('#17101a',x-13,y-39,26,4);R(c1,x-12,y-38,24,3)},act,{top:y-48})}
STEPS[3]=async function(){let st=0,sun=false,end=false;const look=Object.assign({},GABI,{id:'gabib',top:'#2f8a64',bottom:'#3f6aa0',shorts:1,cargo:0,shoes:GABI.skin}),KB=Object.assign({},KAUAN,{id:'kauanb',nosleeve:1,shorts:1,shoes:KAUAN.skin});WHO.Kauan=KB;
  const ball={x:404,y:122,z:0,vis:true,held:null,spin:0},fl={st:{u:0},on:false};
  const room=new Room({w:480,start:[120,150],startDir:'r',look,minY:88,maxY:176,paint:c=>paintBeach(c,sun),walls:[[248,104,4,56]],
    under(cam){for(let x=0;x<480;x+=18){const k=Math.sin(time*1.6+x*.2);R(sun?'#ffd0a0':'#e8fbff',x+k*4,74+k*2,12,1);R(sun?'#e8a080':'#bfeaf6',x+6-k*3,66,8,1)}},
    over(cam){T('QUIOSQUE',51-cam,56.5,{align:'center',size:6,b:1,c:'#f4e8cf'});if(sun)R('rgba(255,120,60,.16)',0,0,480,H);if(ind.on&&fl.on){const u=clamp(fl.st.u,0,1),ok=u>=.55,r=Math.round(lerp(11,5,u)),cx=Math.round(ball.x),cy=Math.round(ball.y-3-ball.z);g.strokeStyle=ok?'#6fe08a':'#ffffff';g.lineWidth=1;g.beginPath();g.arc(cx+.5,cy+.5,r,0,TAU);g.stroke();if(ind.early)T('espera…',cx-cam,cy-r-9,{align:'center',size:5,b:1,sh:1})}},
    ups(dt){if(fl.on){const u=clamp(fl.st.u,0,1);ball.x=lerp(fl.x0,fl.x1,u);ball.y=lerp(fl.y0,fl.y1,u);ball.z=Math.max(0,lerp(fl.z0,fl.z1,u)+4*fl.h*u*(1-u));ball.spin+=dt*9}else if(ball.held){const p=ball.held;ball.x=(p.px!=null?p.px:p.x)+((p.dir==='l')?-7:7);ball.y=(p.py!=null?p.py:p.y)+1;ball.z=9}}});
  room.ball=ball;room.add({id:'ballv',x:0,y:0,w:0,h:0,get sy(){return ball.y+1},draw(){if(!ball.vis)return;R('rgba(0,0,0,.22)',ball.x-4,ball.y-1,8,2);icon('ball',ball.x-6,ball.y-9-ball.z)}});
  for(const[id,y]of[['pa',102],['pb',160]])room.add(deco(id,248,y,4,3,o=>{R('#17101a',247,y-24,6,27);R('#8a6a3a',248,y-23,4,25);R('#f4f4f4',247,y-24,6,2)}));
  room.add({id:'net',x:249,y:104,w:2,h:56,sy:150,draw(){R('#17101a',249,86,2,60);for(let y=88;y<146;y+=4)R('rgba(255,255,255,.75)',249,y,2,2);R('#f4f4f4',249,84,2,2)}});
  room.add(umbrella('u1',398,112,'#e84a3a','#f4f4f4',null));room.add(umbrella('u2',96,172,'#4a7ac0','#f6d27a',()=>say('Gabriela','Sombra, cadeira e vista pro mar. Se eu sentar aqui, não levanto mais.')));
  const bh=room.add({id:'ball',x:398,y:116,w:12,h:8,top:100,act:async o=>{o.hidden=true;sfx.pick();ball.held=room.p;await got('ball','Bola de futevôlei','Estava dormindo na sombra do guarda-sol listrado.');st=1;goal='Leve a bola até o Kauan'}});
  // a bola sempre parte de onde está: nada de teletransporte
  const fly=(x1,y1,z1,h,T)=>{const st={u:0};Object.assign(fl,{x0:ball.x,y0:ball.y,z0:ball.z,x1,y1,z1,h,st,on:true});ball.held=null;return tween(st,{u:1},T,ease.l).then(()=>{if(fl.st!==st)return;fl.on=false;ball.x=x1;ball.y=y1;ball.z=z1})};
  const ind={on:false};
  const Z={H:23,M:14,L:3},NAME={H:'CABEÇA',M:'PEITO',L:'PÉ'};
  const kau=room.add(npc('kau',204,132,KB,async()=>{const p=room.p;
    if(st===0)return say('Kauan','A bola! Acho que deixei perto do guarda-sol listrado, lá pro lado dos coqueiros.');
    await talk([['Kauan','Beleza. Aula número um de futevôlei. Regra de ouro: não pode usar as mãos.'],['Gabriela','Então é vôlei pra quem gosta de sofrer.'],['Kauan','Exatamente. Bola alta: cabeça. Bola no meio: peito. Bola baixa: pé. Eu jogo, você devolve.']]);goal='';
    await fade(1,.4);room.noWalk=true;room.tgt=null;p.x=214;p.y=134;p.dir='r';kau.px=286;kau.py=134;kau.x=281;kau.y=130;kau.dir='l';kau.nomark=true;room.camLock=true;room.cam=250-VW/2;ball.held=kau;await fade(0,.4);
    const GX=p.x+7,GY2=p.y+1,hands=q=>({x:q.px-7,y:q.py+1});
    const toKauHands=async(h,T)=>{const k=hands(kau);await fly(k.x,k.y,9,h,T);ball.held=kau};
    const landAndRoll=async(x,y,dx)=>{await fly(x,y,0,4,.32);sfx.step();await fly(x+dx,y+2,0,3,.28);await fly(x+dx*1.6,y+3,0,0,.25)};
    const gabiMove=t=>{if(t==='H')hopP(p,6);else if(t==='M')hopP(p,3);else{p.f=1;setTimeout(()=>p.f=0,260)}};
    // bola vindo do Kauan até a Gabi; devolve 1 = acertou, 0 = perdeu
    const incoming=async(type,T,check)=>{hopP(kau,3);const f=fly(GX,GY2,Z[type],type==='L'?24:20,T);ind.on=true;let res=null;
      await until(()=>{if(res!==null)return true;const pr=check();if(pr){if(fl.st.u<.55){ind.early=1;return false}res=pr===type||pr===true?1:-1;return true}if(tscale>1&&fl.st.u>.72){res=1;return true}return!fl.on});
      ind.on=false;ind.early=0;if(res===1){f.catch(()=>{});return 1}
      if(res===-1)f.catch(()=>{});else await f;await landAndRoll(GX-12,GY2+3,-7);return 0};
    // Gabi devolve: a bola parte de onde ela tocou, sem saltos
    const gabiReturn=async(type)=>{sfx.hit();gabiMove(type);await fly(kau.px-7,kau.py+1,14,28,1.15)};
    const kauRecover=async()=>{await wait(.35);await toKauHands(8,.45)};
    const gabiKickBack=async()=>{await wait(.4);p.f=1;setTimeout(()=>p.f=0,250);sfx.step();await toKauHands(22,1.1)};
    { // movimentos básicos: três botões grandes
      const m=UI.startMini('<div class="ttl">Movimentos básicos</div><div class="msg">Observe a altura da bola</div><div class="row"><button class="big" data-k="H">CABEÇA</button><button class="big" data-k="M">PEITO</button><button class="big" data-k="L">PÉ</button></div><div class="hint">Espere a bola chegar perto e toque no movimento certo</div>'),msg=m.querySelector('.msg'),bs=[...m.querySelectorAll('.big')];let pressed=null,ok=0,lastT='';
      bs.forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();pressed=b.dataset.k}));
      while(ok<5){let type;do{type=pick(['H','M','L'])}while(type===lastT);lastT=type;pressed=null;bs.forEach(b=>b.classList.toggle('lit',b.dataset.k===type));msg.textContent='Bola '+(type==='H'?'alta':type==='M'?'no meio':'baixa')+' → '+NAME[type]+'  ·  '+ok+' / 5';
        await wait(.5);const r=await incoming(type,2.1,()=>{const x=pressed;pressed=null;return x});
        if(r===1){ok++;msg.textContent=pick(['Boa!','Isso!','Linda!'])+'  ·  '+ok+' / 5';await gabiReturn(type);hopP(kau,2);await toKauHands(6,.35)}
        else{sfx.bad();msg.textContent='Era '+NAME[type]+'! Vamos de novo';await gabiKickBack()}
        await wait(.25)}UI.endMini()}
    await talk([['Kauan','Olha aí! Cinco toques. Você aprende rápido.'],['Gabriela','A areia quase ganhou algumas. Mas eu ganhei mais.'],['Kauan','Então vamos pra um joguinho. Só eu e você, até cinco. Sem pressão.'],['Gabriela','Você fala “sem pressão” com cara de quem quer ganhar.']]);
    for(;;){ // partida recreativa: um toque só, com rally contínuo
      let us=0,them=0,rally=0,tapd=false;const m=UI.startMini('<div class="ttl">Gabi × Kauan · até 5</div><div class="msg">0 × 0</div><div class="row"><button class="big">TOCAR NA BOLA</button></div><div class="hint">Toque quando o círculo em volta da bola ficar verde</div>'),msg=m.querySelector('.msg');m.querySelector('.big').addEventListener('pointerdown',e=>{e.preventDefault();tapd=true});
      const score=t=>msg.textContent=(t?t+'  ·  ':'')+'Gabi '+us+' × '+them+' Kauan';
      while(us<5&&them<5){const type=pick(['H','M','L']);tapd=false;await wait(.35);
        const r=await incoming(type,rally?1.45:1.7,()=>{if(!tapd)return null;tapd=false;return true});
        if(r!==1){them++;rally=0;sfx.bad();hopP(kau,6);score('A bola caiu!');await gabiKickBack();continue}
        rally++;score(pick(['Boa!','Subiu!','Linda!']));await gabiReturn(type);
        if(Math.random()<(rally>1?.45:.3)){sfx.ok();us++;rally=0;score(pick(['Ponto seu!','Ponto da Gabi!']));await landAndRoll(kau.px+8,kau.py+3,7);await kauRecover()}
        else{hopP(kau,4);sfx.hit()}}
      UI.endMini();if(us>=5){hopP(p,8);await wait(.5);await talk([['Kauan','Perdi?! Pra minha própria aluna?!'],['Gabriela','Eu tive um bom professor. Teimoso, mas bom.']]);break}
      await say('Kauan','Ganhei essa. Mas você me fez suar — juro.');const i=await choose('Gabriela','E agora?',['Revanche. Agora.','Deixa pra próxima — hoje foi empate moral']);if(i===1){await say('Kauan','Empate moral aceito. Mas só hoje.');break}}
    await fade(1,.8);sun=true;room.repaint();p.x=292;p.y=96;p.dir='u';kau.px=310;kau.py=96;kau.x=305;kau.y=92;kau.dir='u';ball.held=null;fl.on=false;ball.x=326;ball.y=100;ball.z=0;room.cam=300-VW/2;await wait(.4);await fade(0,1.4);
    await talk([['','O jogo acaba, a praia esvazia, e o sol começa a descer devagar atrás do mar.'],['Kauan','Sabe o que é engraçado? Eu não lembro do placar de quase nenhum jogo que já joguei. Mas desse dia aqui eu vou lembrar.'],['Gabriela','Do dia em que eu levei bolada no rosto?'],['Kauan','Do dia em que você não desistiu em nenhuma delas.'],['','Os dois ficam ali, sem pressa, vendo o mar mudar de cor.']]);
    await got('gball','Bola dourada de futevôlei','Uma lembrança dos primeiros passos na areia.');end=true},'r'));
  scene=room;music('beach');await fade(0,.9);
  await cut(()=>talk([['','Areia clara, mar azul e uma rede de futevôlei esperando no meio da praia.'],['Kauan','Gabi! Chegou na hora. Bora jogar um futevôlei?'],['Gabriela','Eu nunca joguei isso na vida.'],['Kauan','Detalhe. Eu te ensino. Primeiro, acha a bola pra mim? Deixei perto do guarda-sol listrado.']]));
  goal='Encontre a bola, perto do guarda-sol listrado';await until(()=>end);WHO.Kauan=KAUAN;await endChapter(2,'Uma bola de futevôlei')};
