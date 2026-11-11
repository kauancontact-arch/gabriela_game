// ============ CAPÍTULO V — KAUAN E GABI: O JETTA, AS LOMBADAS DE SÃO BERNARDO E A PLAYLIST ============
const hsh=n=>{const s=Math.sin(n*127.1+3.7)*43758.5453;return s-Math.floor(s)};
function paintStreet(c){const P=mk(c),r=rng(77);vgrad(c,0,0,W,64,'#2a2a5a','#e88a6a');for(let i=0;i<20;i++)P('#dfe6ff',r()*W,r()*22,1,1);
  const cols=['#c8a078','#8aa0a8','#c88a80','#a8a878'];let x=0,i=0;while(x<W){const w=70+(r()*30|0),top=26+(r()*12|0);P('#17101a',x,top-2,w,74);P(cols[i%4],x+1,top,w-2,72);P('#17101a',x-2,top-6,w+4,6);P('#7a3a2a',x-1,top-5,w+2,4);
    for(let wy=top+8;wy<70;wy+=20)for(let wx=x+8;wx<x+w-14;wx+=18){const lit=r()<.6;P('#17101a',wx-1,wy-1,11,13);P(lit?'#f6d27a':'#2a2a4a',wx,wy,9,11);P('#17101a',wx+4,wy,1,11)}
    P('#17101a',x+w/2-6,78,12,20);P('#5a3a22',x+w/2-5,79,10,19);x+=w;i++}
  P('#9a96a0',0,98,W,10);P('#7a7680',0,107,W,2);for(let xx=0;xx<W;xx+=20)P('#8a8690',xx,98,1,9);P('#3a3a44',0,109,W,71);for(let k=0;k<300;k++)P(r()<.5?'#42424c':'#33333c',r()*W,110+r()*70,2,1);for(let xx=6;xx<W;xx+=28)P('#c8c0b0',xx,150,14,1)}
function mixc(a,b,t){const p=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)],A=p(a),B=p(b);return'rgb('+A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')+')'}
function driveScene(){const D={t:0,off:0,v:0,vt:0,night:0,jy:0,rot:0,bump:null,mem:null,sign:260,esf:null,speak:false,camX:0,
  tick(dt){D.t+=dt;D.v=lerp(D.v,D.vt,1-Math.exp(-2.2*dt));const d=D.v*dt;D.off+=d;if(D.bump)D.bump.x-=d;if(D.esf!=null)D.esf-=d;D.sign-=d;if(D.sign<-140)D.sign=900+Math.random()*500;if(D.mem&&D.mem.x>112)D.mem.x-=Math.max(18,D.v*.5)*dt},
  draw(){const off=D.off,n=D.night,cy=shake>0?Math.round(Math.sin(time*60)*shake*3):0;g.save();g.translate(0,cy);
    vgrad(g,0,0,VW,106,mixc('#34346a','#090d28',n),mixc('#f09a6a','#2a2a58',n));if(n>.3)for(let i=0;i<40;i++)if(Math.sin(time*2+i*3)>-.6)R('rgba(223,230,255,'+(n-.3)+')',hsh(i)*VW,hsh(i+50)*60,1,1);
    if(n<.8){R(mixc('#ffe2a0','#f08a4a',n),108,70-n*20,18,18);R(mixc('#fff3c8','#f0a060',n),111,73-n*20,12,12)}
    for(let i=-1;i<8;i++){const k=Math.floor(off*.12/26)+i,x=i*26-(off*.12%26),h=18+hsh(k)*34;R(mixc('#5a4a78','#141833',n),x,106-h,25,h)}
    for(let i=-1;i<6;i++){const k=Math.floor(off*.4/40)+i,x=Math.round(i*40-(off*.4%40)),h=30+Math.floor(hsh(k)*40),col=['#8a7a6a','#6a7a84','#9a6a5a','#7a7a5a','#6a6a80'][Math.floor(hsh(k+3)*5)];R('#17101a',x,105-h,39,h+1);R(mixc(col,'#2a2c44',n*.75),x+1,106-h,37,h);
      for(let wy=110-h;wy<96;wy+=9)for(let wx=4;wx<32;wx+=8){const lit=hsh(k*7+wy+wx)<.25+n*.45;R(lit?'#f6d27a':mixc('#3a4a60','#141a30',n),x+wx,wy,4,5)}
      if(hsh(k+9)>.6){R('#17101a',x+3,94,33,12);R(lit2(k),x+4,95,31,5);R('#2a2a34',x+4,100,31,6)}}
    R(mixc('#8a8690','#3a3a48',n),0,106,VW,7);R(mixc('#6a6670','#2a2a36',n),0,112,VW,1);R(mixc('#44444e','#22222c',n),0,113,VW,52);for(let x=-(off%24);x<VW;x+=24)R(mixc('#c8c0b0','#8a8478',n),x,138,12,1);R(mixc('#c8c0b0','#8a8478',n),0,114,VW,1);R(mixc('#c8c0b0','#8a8478',n),0,163,VW,1);
    for(let i=-1;i<3;i++){const x=Math.round(i*96-(off%96));R('#17101a',x,58,3,54);R('#17101a',x,58,16,2);R(n>.4?'#fff0b0':'#c8c8d0',x+12,60,5,2);if(n>.4){g.globalCompositeOperation='lighter';glow(g,x+14,64,26,'rgba(255,220,140,'+.3*n+')');g.globalCompositeOperation='source-over'}R('rgba(23,16,26,.8)',x+3,66,93,1)}
    if(D.sign>-140&&D.sign<VW+10){const x=Math.round(D.sign);R('#17101a',x,40,3,72);R('#17101a',x+117,40,3,72);R('#17101a',x-1,38,122,20);R('#1f6a3c',x,39,120,18);R('#e8f4ea',x,39,120,1);R('#e8f4ea',x,56,120,1);T('SÃO BERNARDO DO CAMPO',x+60,42,{align:'center',size:6.2,b:1,c:'#f2fbf4'});T('↑ Centro · lombadas a perder de vista',x+60,49.5,{align:'center',size:4.4,c:'#cfeeda'})}
    if(D.esf!=null&&D.esf<VW+10){const x=Math.round(D.esf);R('#17101a',x,40,92,67);R('#c8b48a',x+1,41,90,65);R('#b03a2e',x+1,41,90,12);for(let i=0;i<9;i++)R(i%2?'#f4f1ea':'#b03a2e',x+1+i*10,60,10,6);R('#17101a',x+8,68,34,30);R('#ffd98a',x+9,69,32,28);R('#17101a',x+50,68,34,30);R('#ffd98a',x+51,69,32,28);R('#5a3018',x+42,74,8,32);T('CASA DE ESFIRRAS',x+46,43,{align:'center',size:5.6,b:1,c:'#fff3c8'});g.globalCompositeOperation='lighter';glow(g,x+46,82,60,'rgba(255,210,130,.35)');g.globalCompositeOperation='source-over'}
    if(D.bump){const b=D.bump,x=Math.round(b.x),hh=b.h;for(let i=0;i<b.w;i++){const k=i/(b.w-1),h=Math.round(Math.sin(k*Math.PI)*hh);if(h>0){R('#17101a',x+i,150-h-1,1,h+2);R(((i+h)>>2)%2?'#f2c230':'#22222a',x+i,150-h,1,h)}}
      R('#17101a',x-30,96,2,22);R('#17101a',x-37,82,16,16);R('#f2c230',x-36,83,14,14);R('#17101a',x-33,92,8,2);R('#17101a',x-31,90,4,2)}
    if(D.mem){const m=D.mem,y=66+Math.sin(time*3)*3;g.globalCompositeOperation='lighter';glow(g,m.x,y,18,'rgba(255,225,150,.55)');g.globalCompositeOperation='source-over';R('#17101a',m.x-9,y-9,18,18);R('#2a2033',m.x-8,y-8,16,16);icon(m.ic,m.x-6,y-6);sparkle(m.x+9,y-10)}
    drawJetta(34,122+D.jy,{rot:D.rot,spin:D.v>4,lights:n>.4});
    if(D.speak&&!D.rot){R('#18171b',55,127+D.jy,4,3);R('#b3743f',58,129+D.jy,2,1);R('#fff',57,127+D.jy,1,1)}
    R(mixc('#7a7680','#2e2e3a',n),0,164,VW,16);for(let x=-(off*1.3%40);x<VW;x+=40){R('#17101a',x+8,160,4,12);R(mixc('#f2c230','#8a7020',n),x+9,161,2,3)}
    g.restore()}};
  const lit2=k=>['#b03a2e','#2a6fb0','#2f8a64','#c88a2a'][Math.floor(hsh(k+5)*4)];return D}
async function driveMemory(D,ic,tx){D.mem={ic,x:VW+16};await wait(1.6);Player.el.style.visibility='hidden';const m=UI.startMini('<div class="ttl">Uma lembrança no caminho</div><div class="msg"></div><div class="row"><button class="big">GUARDAR LEMBRANÇA</button></div>');let ok=false;m.querySelector('.big').addEventListener('pointerdown',e=>{e.preventDefault();ok=true});
  await until(()=>ok||tscale>1);UI.endMini();Player.el.style.visibility='';sfx.ok();D.mem=null;goal=tx;await wait(4.2);goal=''}
async function lombada(D,big){goal=big?'⚠ A MAIOR LOMBADA DE SÃO BERNARDO À FRENTE':'⚠ LOMBADA GIGANTE À FRENTE — padrão São Bernardo';sfx.bad();D.bump={x:VW+150,w:big?64:46,h:big?20:13};Player.el.style.visibility='hidden';
  const m=UI.startMini('<div class="ttl">'+(big?'Segura, Gabi!':'Reduz, Kauan, reduz!')+'</div><div class="msg">FREIA!</div><div class="bar"><div class="fill" style="width:0"></div></div><div class="row"><button class="big">FREAR</button></div><div class="hint">Toque várias vezes para reduzir a velocidade</div>'),fill=m.querySelector('.fill');let n=0;m.querySelector('.big').addEventListener('pointerdown',e=>{e.preventDefault();n++;sfx.step();D.vt=Math.max(26,D.vt-7);fill.style.width=Math.min(100,n*12)+'%'});
  await until(()=>{if(tscale>1&&n<8){n++;D.vt=Math.max(26,D.vt-7)}return D.bump.x<98});UI.endMini();goal='';
  const hi=(big?58:40)+(n<4?10:0);sfx.whoosh();D.vt=14;tween(D,{rot:-.42},.35,ease.o).catch(()=>{});await tween(D,{jy:-hi},.9,ease.o);goal=big?'✈ Jetta 2011 — autorizado para decolagem':'✈ Senhores passageiros, o Jetta decolou';tween(D,{rot:.2},.9).catch(()=>{});await wait(.5);await tween(D,{jy:0},.6,ease.i);D.rot=0;sfx.thud();shake=1;D.bump=null;
  await tween(D,{jy:-5},.12,ease.o);await tween(D,{jy:0},.16,ease.i);D.vt=64;Player.el.style.visibility='';await wait(.8);goal=''}
STEPS[5]=async function(){let go=false;
  const room=new Room({start:[250,146],startDir:'l',minY:104,maxY:176,paint:paintStreet,over(){g.globalCompositeOperation='lighter';glow(g,100,70,40,'rgba(255,210,130,.22)');g.globalCompositeOperation='source-over'}});
  room.add(deco('lp',98,106,4,3,o=>{R('#17101a',98,62,4,47);R('#3a3742',99,63,2,45);R('#17101a',94,56,12,8);R('#f6d27a',95,57,10,6);R('#fff6d0',97,58,6,4)}));
  room.add(deco('car',132,136,62,7,o=>{drawJetta(130,120)},async()=>{await talk([['Gabriela','O Jetta. Cinza-chumbo, 2011, com cheiro de playlist antiga.'],['Kauan','Entra aí. Hoje a DJ é você.']]);go=true},{top:104}));
  room.add(npc('kau',212,140,KAUAN,async()=>say('Kauan','Bora? Eu dirijo, você cuida da trilha sonora. Só não me distrai nas lombadas.'),'l'));
  scene=room;music('driveB');await fade(0,.9);
  await cut(()=>talk([['','Fim de tarde numa rua tranquila de São Bernardo. Um Jetta cinza-chumbo estacionado, com o rádio ligado baixinho.'],['Kauan','Finalmente! Tava te esperando. Hoje a gente não tem destino — só playlist.'],['Gabriela','Deixa eu adivinhar: “Kauan e Gabi”.'],['Kauan','Existe outra?']]));
  goal='Toque no Jetta para entrar';await until(()=>go);goal='';await fade(1,.6);
  const D=driveScene();scene=D;if(!Player.playing){ambient(null);Player.load(0)}Player.show(true);await fade(0,.8);
  await talk([['','O painel acende. No celular, a playlist “Kauan e Gabi” já está na tela.'],['Kauan','Dá o play, DJ.']]);
  if(!Player.playing)goal='Toque em ▶ para tocar a playlist';await until(()=>Player.playing||(tscale>1&&(Player.play(),true)));goal='';D.vt=64;sfx.whoosh();
  await wait(4);goal='Vidros abertos, volume alto, São Bernardo passando devagar.';await wait(4.5);goal='';
  await driveMemory(D,'book','As conversas sobre livros que iam longe — e sempre acabavam em Dostoiévski.');await wait(2.5);
  await driveMemory(D,'halter','“Só mais uma série.” A disciplina dela na academia, que nunca era só mais uma.');await wait(2);
  await lombada(D,false);
  await talk([['Gabriela','A GENTE VOOU! Eu vi a rua de cima, Kauan!'],['Kauan','Lombada de São Bernardo não é lombada. É rampa de lançamento.'],['Speak','Au!'],['Gabriela','Espera. O Speak tá no banco de trás esse tempo todo?!'],['Kauan','Ele insistiu. Disse que a playlist também é dele.']]);D.speak=true;
  const i=await choose('Kauan','E a trilha? Troca ou deixa?',['Deixa essa tocando','Próxima: '+TRACKS[1].title]);if(i===1)Player.next(false,1);
  tween(D,{night:1},16,ease.l).catch(()=>{});await wait(3);
  await driveMemory(D,'ball','A primeira aula de futevôlei. A areia ganhou algumas. Ela ganhou mais.');await wait(2.5);
  await driveMemory(D,'pizza','Frango com catupiry, sofá e o Speak pedindo colo na melhor parte do filme.');await wait(2);
  await lombada(D,true);
  await talk([['Kauan','Essa é famosa. Dizem que dá pra ver Santo André lá de cima.'],['Gabriela','Eu deixei meu estômago uns dois quarteirões atrás.'],['Kauan','Faz parte do passeio. Sem lombada não é São Bernardo.']]);
  goal='A cidade acende as luzes, uma por uma.';await wait(5);goal='';D.esf=VW+120;await until(()=>D.esf<74);D.vt=0;await wait(1.6);
  await talk([['','O Jetta encosta devagar. Do outro lado da calçada, uma luz quente e um letreiro conhecido.'],['Gabriela','Não acredito. A casa de esfirras?'],['Kauan','Toda playlist boa termina no lugar certo.']]);
  await got('tape','Fita “Kauan e Gabi”','A playlist inteira, gravada do jeito antigo. Para tocar quando der saudade.');Player.show(false);await endChapter(4,'Uma fita com a playlist')};
async function freeRide(){const D=driveScene();scene=D;D.speak=true;D.vt=60;ambient(null);Player.show(true);await UI.fade(0,.8);UI.goal('Passeio livre — abra o menu para sair');tween(D,{night:1},60,ease.l).catch(()=>{});
  for(;;){await wait(24+Math.random()*10);await lombada(D,Math.random()<.4)}}
