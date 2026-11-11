function shade2(h){const n=parseInt(h.slice(1),16),f=v=>Math.round(v*.72);return'rgb('+f(n>>16&255)+','+f(n>>8&255)+','+f(n&255)+')'}
// ============ CAPÍTULO IV — SPEAK, O GUARDIÃO DO SOFÁ ============
function paintHome(c){const P=mk(c),r=rng(33),Wd=400;P('#d8c3a5',0,0,Wd,80);for(let x=0;x<Wd;x+=16)P('#d0b998',x,0,1,80);P('#f4e8cf',0,0,Wd,3);P('#8a6a4a',0,76,Wd,5);P('#6b4a32',0,80,Wd,2);
  // janela + cortinas
  P('#17101a',29,13,52,48);vgrad(c,31,15,48,44,'#141c3a','#34406a');for(let i=0;i<10;i++)P('#dfe6ff',32+r()*46,16+r()*24,1,1);P('#f4f0d8',66,20,6,6);P('#17101a',54,15,2,44);P('#17101a',31,36,48,2);
  P('#17101a',21,9,68,4);P('#8a6a2a',22,10,66,2);for(const x of[22,74]){P('#17101a',x-1,12,16,66);P('#c04a5a',x,13,14,64);P('#a83a4a',x+3,13,2,64);P('#a83a4a',x+9,13,2,64)}
  // quadros
  [[108,22,'#4a7ac0'],[262,20,'#3e8f6a']].forEach(([x,y,cc])=>{P('#17101a',x,y,24,20);P('#8a6a2a',x+1,y+1,22,18);P(cc,x+3,y+3,18,14);P('#f6d27a',x+12,y+5,5,5);P('rgba(255,255,255,.3)',x+3,y+12,18,5)});
  // estante
  P('#17101a',285,26,48,56);P('#5a3a22',286,27,46,54);shelf(P,288,29,42,3,r);
  // porta
  P('#17101a',355,18,32,64);P('#7a4a2a',356,19,30,62);P('#8f5a34',359,23,24,24);P('#8f5a34',359,51,24,26);P('#d9b24a',380,50,3,4);
  // piso
  for(let y=82;y<H;y+=12){P((y/12|0)%2?'#a87a4a':'#9e7042',0,y,Wd,12);for(let x=(y*5)%48;x<Wd;x+=48)P('#7a5430',x,y,1,12)}P('#7a5430',0,82,Wd,1);
  // tapete
  P('#17101a',131,101,138,54);P('#3a5a7a',132,102,136,52);P('#4a7a9a',136,106,128,44);P('#f4e8cf',140,110,120,1);P('#f4e8cf',140,145,120,1)}
STEPS[4]=async function(){let st=0,checks=0,trail=0,cush=0,remote=false,film=false;const seen={};
  const room=new Room({w:400,start:[330,104],startDir:'l',minY:86,maxY:176,paint:paintHome,walls:[[168,165,64,16]],
    under(){if(room.flag.trail){const pts=[[60,160],[84,168],[110,172],[136,168],[166,160],[196,158],[226,158],[256,162],[286,168],[316,166],[336,150],[342,128],[344,108]];pts.forEach(([x,y],i)=>{if(i<=room.flag.trail*4+1){R('#7a5430',x,y,3,2);R('#7a5430',x-1,y-2,1,1);R('#7a5430',x+1,y-3,1,1);R('#7a5430',x+3,y-2,1,1)}})}},
    over(){const tv=room.flag.tv,f=tv?.5+Math.sin(time*9)*.2+Math.sin(time*23)*.1:0;if(tv){g.globalCompositeOperation='lighter';glow(g,200,150,90,'rgba(120,170,255,'+(.10+f*.08)+')');g.globalCompositeOperation='source-over'}
      R('#17101a',170,160,60,20);R('#22222a',172,162,56,18);R('#33333d',174,164,52,3);R('#17101a',194,176,12,4);if(tv)R('rgba(160,200,255,'+(.5+f*.4)+')',171,159,58,1)}});
  room.pet={x:0,y:0,hidden:true,mode:'stay',f:0,ft:0};
  const sofa=room.add(deco('sofa',150,84,100,12,o=>{R('#17101a',149,54,102,45);R('#7a4a5a',150,55,100,26);R('#8a566a',152,57,96,3);R('#935a6c',150,79,100,14);R('#a86a7c',160,80,39,10);R('#a86a7c',201,80,39,10);R('#6a3a4a',150,66,10,31);R('#6a3a4a',240,66,10,31);R('#5a2a3a',150,93,100,5);
    for(let i=0;i<cush;i++)icon('cushion',[162,226,194][i],68);
    if(room.flag.couch){const P2=[[room.p.look,182],[KAUAN,222]];for(const[L2,x]of P2){drawSeated(L2,x,80);R('#17101a',x-6,78,13,7);R(L2.bottom,x-5,79,11,5);R(shade2(L2.bottom),x-5,83,11,1)}R('#17101a',150,84,100,1);R('#935a6c',150,85,100,8);R('#a86a7c',152,85,96,2);for(const[L2,x]of P2){R('#17101a',x-5,92,4,8);R('#17101a',x+1,92,4,8);R(L2.bottom,x-4,92,2,6);R(L2.bottom,x+2,92,2,6);R(L2.shoes,x-5,97,4,2);R(L2.shoes,x+1,97,4,2)}g.drawImage(speakSpr(0,1),190,64);const t=time%2;if(room.zoom===1)T('z',214+t*3-room.camX,70-t*5,{size:5+t*1.5,c:'#fff',alpha:1-t/2,i:1,sh:1})}},
    async()=>{if(st<6)return say('Gabriela','O sofá mais confortável do mundo. Mas ainda tem coisa pra arrumar antes de sentar.');room.flag.sit=1},{top:42}));
  const spot=(id,x,y,w,h,top,miss,dx,dy)=>({id,x,y,w,h,top,async hide(){if(st>0)return false;if(seen[id]){await say('','Nada novo por aqui.');return true}seen[id]=1;checks++;
    if(checks<3){await say('',miss+(checks===2?' Um rabinho preto some atrás de um móvel…':''));return true}
    const s=room.pet;s.x=dx;s.y=dy;s.hidden=false;s.mode='stay';sfx.bark();shake=.3;await talk([['','…e um focinho comprido aparece, seguido de um corpinho preto e canela. ACHOU!'],['Speak','Au! Au!'],['Gabriela','Speak! Achei você, salsichinha. Tava se escondendo de quem, hein?'],['Kauan','Ele faz isso toda vez que você chega. É o jeito dele de dizer que estava com saudade.']]);
    s.mode='follow';st=1;room.flag.go1=1;return true}});
  const hs={cur:spot('cur',22,84,20,3,60,'A cortina se mexe… era só o vento. Mas tem pelinhos pretos no chão.',40,96),box:spot('box',104,152,16,10,136,'Dentro da caixa: um chinelo mordido. Evidência fresca.',128,160),
    bas:spot('bas',40,140,26,10,128,'A caminha ainda está quentinha. Ele esteve aqui agora há pouco.',72,150),tab:spot('tab',296,130,48,14,112,'Embaixo da mesa: farelos e uma meia desaparecida há semanas.',320,152),pla:spot('pla',338,90,10,6,58,'Atrás da planta: terra revirada. Alguém andou cavando.',330,100)};
  room.add({id:'cur',x:22,y:84,w:20,h:3,top:60,act:async()=>{if(!await hs.cur.hide())await say('Gabriela','Cortina vermelha. O esconderijo oficial do Speak.')}});
  room.add(deco('box',104,152,16,10,o=>{R('#17101a',103,143,18,20);R('#b88a5a',104,144,16,18);R('#a07848',104,144,16,4);R('#8a6a3a',111,144,2,18)},async()=>{if(!await hs.box.hide())await say('','Uma caixa de papelão promovida a brinquedo.')},{top:130}));
  room.add(deco('bas',40,142,26,8,o=>{R('#17101a',39,138,28,13);R('#8a5a2a',40,139,26,11);R('#c04a5a',42,140,22,7);R('#d86a7a',44,141,18,4);if(st>=2&&!remote)sparkle(53,134)},async()=>{if(await hs.bas.hide())return;
    if(st===2&&!remote){remote=true;sfx.pick();await got('remote','Controle remoto','Estava na caminha do Speak. Levemente babado.');await say('Kauan','É claro que estava com ele. O Speak acha que o controle é dele.');return prep()}
    await say('','A caminha do Speak. Tem mais brinquedo aqui do que em loja.')},{top:126}));
  room.add(deco('tab',300,132,40,12,o=>{R('#17101a',299,121,42,24);R('#8a5a2a',300,122,40,14);R('#a06a36',300,122,40,10);R('#5a3a1a',302,136,3,9);R('#5a3a1a',335,136,3,9);R('#f4f4f4',312,124,8,5);R('#e84a3a',326,124,4,5);R('#17101a',290,128,8,14);R('#6b4a32',291,129,6,12);R('#17101a',342,128,8,14);R('#6b4a32',343,129,6,12)},async()=>{if(!await hs.tab.hide())await say('','A mesa de jantar. Hoje o jantar vai ser no sofá mesmo.')},{top:108}));
  room.add(deco('pla',338,90,10,6,o=>{R('#17101a',336,84,14,13);R('#b8643a',337,85,12,11);R('#17101a',340,60,6,26);R('#2e8f4a',334,62,8,8);R('#3aa85a',342,58,8,10);R('#2e8f4a',340,70,10,8);R('#3aa85a',336,72,5,8);if(room.flag.trail===3)sparkle(343,54)},async()=>{if(await hs.pla.hide())return;
    if(room.flag.trail===3){room.flag.trail=4;sfx.pick();await got('bone','Ossinho de borracha','O brinquedo favorito do Speak, enterrado no vaso da planta.');const s=room.pet;await room.petGo(room.p.x+14,room.p.y,130);sfx.bark();await talk([['Speak','Au! Au au!'],['Gabriela','Tá aqui, ó. Seu tesouro está a salvo.'],['Kauan','Aventura encerrada. Agora sim: noite de filme. Me ajuda a arrumar a sala?']]);s.mode='follow';st=2;return prep()}
    await say('','Uma planta que sobreviveu a um filhote de salsicha. Heroína.')},{top:46}));
  room.add(deco('ctab',182,114,36,10,o=>{R('#17101a',181,107,38,19);R('#6b4a32',182,108,36,12);R('#8a6240',182,108,36,8);R('#4a3020',184,120,3,6);R('#4a3020',213,120,3,6);if(room.flag.pizza){R('#17101a',189,104,22,10);R('#d8c8a8',190,105,20,8);R('#c04a3a',196,107,8,3)}else{R('#f4f4f4',190,109,8,5);R('#4a7ac0',191,110,6,1)}},async()=>{await say('',room.flag.pizza?'A caixa da pizza. O cheiro de frango com catupiry toma conta da sala.':st===2&&!remote?'Na mesinha: só uma revista de palavras cruzadas. Nada de controle.':'Mesinha de centro, marcada por muitos copos e muitas noites de filme.')},{top:96}));
  room.add(deco('ph',122,88,12,6,o=>{R('#17101a',121,78,14,17);R('#6b4a32',122,84,12,10);R('#8a6240',122,84,12,3);R('#c04a3a',124,79,8,5);R('#17101a',125,80,6,1)},async()=>{if(st<3)return say('','O telefone. O número da pizzaria está na discagem rápida — prioridades.');if(st>3)return say('','Pedido feito. Agora é esperar.');
    await say('Pizzaria','Pizzaria Massa Nobre, boa noite! Qual vai ser o sabor?');
    for(;;){const i=await choose('Gabriela','Qual sabor pedir?',['Calabresa','Frango com catupiry','Quatro queijos','Portuguesa']);if(i===1)break;sfx.bark();await talk([['Speak','Au!! Au!!'],['Kauan',pick(['O Speak discorda. E eu também. A gente sabe qual é a certa…','Hmm. Tem certeza? Pensa bem. Pensa com o coração.'])]])}
    await talk([['Pizzaria','Frango com catupiry, grande. Chega em trinta minutos!'],['Gabriela','Sempre ela. Não tem erro.']]);st=4;goal='';await wait(1.6);sfx.bell();shake=.3;await say('','DING-DONG!');sfx.bark();const s=room.pet;await room.petGo(362,92,150);await talk([['Speak','Au au au au au!'],['Kauan','Trinta minutos coisa nenhuma. Atende lá, Gabi? O Speak já foi fazer a segurança.']]);st=5;goal='Atenda a porta'},{top:66}));
  room.add({id:'door',x:358,y:83,w:26,h:3,top:8,act:async()=>{if(st!==5)return say('',st<5?'A porta da frente. Lá fora, a noite está tranquila.':'Porta trancada, pizza garantida.');
    await got('pizza','Pizza de frango com catupiry','Item especial. Quentinha, grande, do jeito que tem que ser.');room.flag.pizza=1;room.pet.mode='follow';st=6;await say('Kauan','Tudo pronto: filme, almofadas, pizza e segurança canina. Vem pro sofá!');goal='Sente no sofá'}});
  room.add({id:'tv',x:176,y:160,w:48,h:4,top:146,act:async()=>{if(st<2)return say('','A TV está desligada. Primeiro, o Speak.');if(film)return say('','O filme está pausado, esperando a plateia.');if(!remote)return say('Gabriela','Sem controle remoto não tem filme. Onde foi parar?');
    room.flag.tv=1;sfx.pick();const i=await choose('','A TV acende. O que assistir hoje?',['O Inspetor de São Petersburgo','Salsicha: Uma Aventura Comprida','Amor em 8 Bits']);
    await say('Kauan',['Suspense russo? Depois não reclama se sonhar com machado.','O Speak aprova. Ele acha que é um documentário.','Romance em pixel art. Parece familiar…'][i]);film=true;return prep()}});
  const kau=room.add(npc('kau',270,104,KAUAN,async()=>say('Kauan',st===0?'Ele some toda vez. Cortina, caixa, caminha, embaixo da mesa, atrás da planta… é um desses.':st===1?'Segue as patinhas! Ele sempre deixa rastro.':st===2?'Falta arrumar a sala: almofadas no sofá, achar o controle e escolher o filme na TV.':st===3?'O telefone fica ali do lado do sofá. Você sabe qual pizza pedir.':'Noite perfeita se armando.'),'l'));
  const cs=[[70,112],[262,166],[372,150]].map(([x,y],i)=>room.add({id:'c'+i,x:x-1,y:y-1,w:14,h:10,hidden:true,top:y-12,sy:y-4,draw(){R('rgba(0,0,0,.2)',x,y+9,12,2);icon('cushion',x,y);sparkle(x+6,y-6)},async act(o){o.hidden=true;cush++;sfx.pick();await say('','Almofada resgatada e devolvida ao sofá.');return prep()}}));
  const tr=[[124,166],[240,154],[0,0]].slice(0,2).map(([x,y],i)=>room.add({id:'t'+i,x,y,w:14,h:8,hidden:true,top:y-12,async act(o){if(room.flag.trail!==i+1)return say('','Marcas de patinha no chão. Melhor seguir desde o começo.');o.hidden=true;room.flag.trail=i+2;sfx.pick();await say('',i===0?'Patinhas pequenas, passo apressado. Elas contornam o tapete e seguem para a direita.':'O rastro passa pela mesa de jantar e sobe… em direção à planta, perto da estante.');goal='Siga as patinhas do Speak ('+(i+1)+'/3)'}}));
  async function prep(){if(st!==2)return;if(cush>=3&&remote&&film){st=3;await say('Kauan','Sala pronta. Só falta o principal. O telefone está ali, ao lado do sofá.');goal='Peça a pizza pelo telefone, ao lado do sofá'}
    else goal='Prepare a noite: almofadas ('+cush+'/3)'+(remote?'':', controle')+(film?'':remote?', escolher o filme na TV':' e filme')}
  scene=room;music('home');await fade(0,.9);
  await cut(()=>talk([['','A casa do Kauan. Sala aconchegante, luz baixa, aquele silêncio bom de fim de dia.'],['Kauan','Gabi! Entra. Só tem um probleminha: o Speak sumiu de novo.'],['Gabriela','Um filhote de salsicha desse tamanho não some. Ele se esconde.'],['Kauan','Exato. E ele é muito bom nisso. Me ajuda a procurar?']]));
  goal='Encontre o Speak (procure pelos cantos da sala)';await until(()=>room.flag.go1);
  await cut(async()=>{await wait(.5);const s=room.pet;sfx.bark();await talk([['Kauan','Ih. Olha a cara dele. Ele escondeu o ossinho de borracha e agora não lembra onde.'],['Speak','Au…']]);await room.petGo(60,158,140);room.flag.trail=1;tr.forEach(o=>o.hidden=false);await say('Gabriela','Ele deixou um rastro de patinhas, começando pela caminha. Detetive Gabriela assume o caso.');s.mode='follow'});
  goal='Siga as patinhas do Speak (0/3)';await until(()=>st>=2);cs.forEach(o=>o.hidden=false);
  await until(()=>room.flag.sit);goal='';
  await cut(async()=>{await fade(1,.8);room.flag.couch=1;room.flag.tv=1;room.p.hidden=true;kau.hidden=true;room.pet.hidden=true;room.p.x=200;room.cam=110;room.zoom=2.4;room.focus=[200,76];await wait(.3);await fade(0,1.2);
    for(let t=0;t<=1;t+=.004){room.zoom=1+1.4*(1-t)*(1-t);await wait(.025)}room.zoom=1;await wait(.6);
    await card('“Às vezes, os melhores momentos não precisam de grandes acontecimentos. Basta um sofá, uma televisão, uma pizza e uma companhia que faz tudo parecer mais leve.”',{dim:.62});
    await got('paw','Patinha do Speak','O guardião do sofá aprova esta lembrança.')});
  await endChapter(3,'Uma lembrança do Speak')};
