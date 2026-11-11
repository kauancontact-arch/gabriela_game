// ============ CAPÍTULO II — ACADEMIA ============
function paintGym(c){const P=mk(c),r=rng(9);P('#34405a',0,0,W,82);P('#2a3348',0,0,W,10);P('#e84a6f',0,10,W,1);P('#22293a',0,78,W,4);
  // armários
  P('#17101a',7,21,74,59);for(let i=0;i<6;i++){const x=8+i*12;P(['#3e8f6a','#e8a23a','#4a7ac0'][i%3],x,22,11,57);P('rgba(0,0,0,.2)',x,22,1,57);P('#17101a',x+2,26,7,1);P('#17101a',x+2,29,7,1);P('#ddd',x+8,50,2,3)}
  // espelho
  P('#17101a',95,13,122,59);vgrad(c,96,14,120,57,'#a8d8e8','#6a9ab8');c.globalAlpha=.35;c.fillStyle='#fff';for(const x of[106,150,186]){c.beginPath();c.moveTo(x,14);c.lineTo(x+10,14);c.lineTo(x-14,71);c.lineTo(x-24,71);c.fill()}c.globalAlpha=1;P('#17101a',136,14,1,57);P('#17101a',176,14,1,57);
  // mural
  P('#17101a',227,15,80,52);P('#f4e8cf',228,16,78,50);P('#e84a6f',228,16,78,7);[[232,28,30,'#4a7ac0'],[266,28,36,'#e8a23a'],[232,46,40,'#3e8f6a'],[276,46,26,'#c04a3a']].forEach(([x,y,w,cc])=>{P(cc,x,y,w,14);P('rgba(255,255,255,.5)',x+3,y+4,w-6,1);P('rgba(255,255,255,.5)',x+3,y+8,w-12,1)});
  // piso
  P('#2c2f38',0,82,W,98);for(let i=0;i<500;i++)P(r()<.5?'#353944':'#25272f',r()*W,83+r()*96,1,1);P('#e8a23a',0,176,W,1);
  // tapete de coreografia
  P('#17101a',191,137,62,34);P('#6a3a8a',192,138,60,32);P('#8a5ab0',195,141,54,26);P('#f4e8cf',220,146,4,4);P('#f4e8cf',212,154,4,4);P('#f4e8cf',228,154,4,4);P('#f4e8cf',220,162,4,4)}
function gymBack(){R('#34405a',0,0,W,120);R('#2a3348',0,0,W,34);R('#e84a6f',0,34,W,1);R('#17101a',60,44,200,70);g.fillStyle='#8ab8d0';g.fillRect(62,46,196,66);R('rgba(255,255,255,.25)',90,46,14,66);R('rgba(255,255,255,.25)',200,46,8,66);R('#2c2f38',0,120,W,60);R('#22252c',0,120,W,2)}
STEPS[2]=async function(){let st=0,items=0;const MUR=['“O peso não fica mais leve. Você é que fica mais forte.”','“Hoje é dia de perna.” (É sempre dia de perna.)','“Se o agachamento falasse, pediria desculpas.”','“Beba água. Sim, de novo.”','“Treino pago é treino feito.”'];
  const BIA={id:'bia',skin:'#8a5a3a',hair:'#17101a',long:1,top:'#e84a6f',bottom:'#22222a',shoes:'#fff'},MAR={id:'mar',skin:'#e0b090',hair:'#5a3a1a',top:'#e8e8e8',bottom:'#22222a',shoes:'#c04a3a',beard:'#5a3a1a'};
  WHO['Treinadora Bia']=BIA;WHO['Marombeiro']=MAR;let look=GABI;
  const room=new Room({start:[160,168],startDir:'u',minY:86,paint:paintGym,over(){const room=this;T('CAMPEONATO DA FORÇA',262-room.camX,1.5,{align:'center',size:6.5,b:1,c:Math.sin(time*5)>-.6?'#ffd75a':'#a8842a'})}});
  room.add({id:'lock',x:10,y:84,w:68,h:3,top:62,act:async()=>{if(st>0)return say('Gabriela','Roupa trocada. Agora é foco.');
    await say('','O armário se abre sozinho, com efeito sonoro de videogame. Três conjuntos de treino flutuam lá dentro.');
    const i=await choose('Gabriela','Qual roupa de treino hoje?',['Verde-esmeralda','Preto básico','Rosa-choque']);look=Object.assign({},GABI,{id:'gabigym'+i,top:['#2fa87a','#2a2a34','#e84a8f'][i],bottom:'#1b1b22',shoes:'#f4f4f4',cargo:0});room.p.look=look;sfx.ok();
    await talk([['Gabriela',['Verde. Clássico meu.','Preto: combina com tudo, inclusive com a dor de amanhã.','Rosa-choque. Hoje a academia vai ter que lidar comigo.'][i]],['Treinadora Bia','Boa! Agora organize o equipamento: garrafinha, fones, toalha e luvas. Estão espalhados pela academia.']]);st=1;goal='Encontre os 4 acessórios de treino (0/4)'}});
  room.add({id:'mirror',x:100,y:84,w:112,h:3,top:62,act:()=>say('Gabriela',pick(['Postura: ok. Cabelo: ok. Vontade de treinar: sempre.','Espelho de academia tem uma iluminação que devia ser estudada pela ciência.','Só uma conferida rápida. Tá pago? Vai estar.']))});
  room.add({id:'mural',x:230,y:84,w:76,h:3,top:62,act:()=>say('',pick(MUR))});
  room.add(deco('tread',26,118,34,12,o=>{R('#17101a',25,92,6,28);R('#555',26,93,4,26);R('#17101a',22,88,14,7);R('#7fd4ff',24,89,10,4);R('#17101a',25,116,36,15);R('#3a3a44',26,117,34,10);R('#22222a',28,119,30,6);for(let i=0;i<5;i++)R('#33333d',29+((i*6+(time*20|0))%30),119,1,6);R('#e84a6f',26,127,34,2)},
    async()=>{if(st<3)return say('Gabriela','Esteira. Daqui a pouco a gente conversa.');if(st>3)return say('Gabriela','Essa já foi. Próxima!');
      await say('Treinadora Bia','Estação 1: esteira! Alterne os pés — esquerda, direita — sem parar!');await mashGame({title:'Estação 1 — Esteira',target:36,scene(n,run){gymBack();R('#17101a',96,130,128,14);R('#3a3a44',98,132,124,8);for(let i=0;i<10;i++)R('#22222a',100+((i*13-n*5)%120+120)%120,132,2,8);drawPerson(look,160,132-(run>.5?2:0),'r',n%4,3)}});
      st=4;await say('Treinadora Bia','Aquecida! Estação 2: halteres, ali no rack.');goal='Estação 2: vá até o rack de halteres'},{top:74}));
  room.add(deco('rack',124,94,46,8,o=>{R('#17101a',123,86,48,17);R('#555',124,87,46,3);R('#555',124,95,46,3);R('#3a3a44',126,90,2,12);R('#3a3a44',166,90,2,12);for(let i=0;i<5;i++){const x=128+i*8;R('#17101a',x,84,6,5);R(['#e84a6f','#e8a23a','#4a7ac0','#3e8f6a','#8a5ab0'][i],x+1,85,4,3);R('#17101a',x,92,6,5);R('#888',x+1,93,4,3)}},
    async()=>{if(st<4)return say('Gabriela','Halteres de todas as cores. Parece uma caixa de lápis de cor, só que pesada.');if(st>4)return say('Gabriela','Braço já tá tremendo. Chega de halter.');
      await say('Treinadora Bia','Estação 2: rosca com halteres! Suba o peso no tempo certo. Oito repetições.');
      await timingGame({title:'Estação 2 — Halteres',reps:8,scene(p){gymBack();drawPerson(look,160,131,'d',0,3);const y=99-p*22;for(const x of[136,180]){R('#17101a',x-5,y-1,14,8);R('#e84a6f',x-4,y,4,6);R('#e84a6f',x+4,y,4,6);R('#888',x,y+2,4,2)}}});
      st=5;await say('Treinadora Bia','Forte! Estação 3: o tapete roxo. Memória e coordenação!');goal='Estação 3: vá até o tapete de coreografia'},{top:70}));
  room.add({id:'mat',x:206,y:146,w:32,h:16,top:128,act:async()=>{if(st<5)return say('Gabriela','Um tapete com setas. Parece jogo de dança.');if(st>5)return say('Gabriela','Decorei a coreografia. Vou usar em festa.');
    await say('Treinadora Bia','Estação 3: eu mostro a sequência, você repete. Polichinelo, agachamento e passos laterais!');
    await simonGame({title:'Estação 3 — Coreografia',lens:[3,4,5],names:{u:'polichinelo',d:'agachamento',l:'passo esq.',r:'passo dir.'},scene(lit){gymBack();const ox=lit==='l'?-14:lit==='r'?14:0,oy=lit==='u'?-10:lit==='d'?6:0;g.save();g.globalAlpha=.9;drawPerson(look,60+ox,150+oy,lit==='l'?'l':lit==='r'?'r':'d',lit?1:0,3);g.restore()}});
    st=6;await say('Treinadora Bia','Circuito completo! Só falta o desafio final. Venha falar comigo quando estiver pronta.');goal='Desafio final: fale com a Treinadora Bia'}});
  room.add(deco('bike',268,104,20,8,o=>{R('#17101a',266,96,24,17);R('#3a3a44',268,104,20,6);R('#17101a',270,88,3,10);R('#17101a',266,86,10,3);R('#17101a',282,92,6,4);R('#e8a23a',283,93,4,2);R('#555',274,100,8,8);R('#17101a',276,102,4,4)},()=>say('Gabriela','Bicicleta ergométrica: o único lugar onde você pedala muito e não chega a lugar nenhum.'),{top:74}));
  room.add(deco('cool',84,88,10,6,o=>{R('#17101a',83,70,12,25);R('#e8e8f0',84,80,10,14);R('#7fc4ff',85,71,8,9);R('#bfe4ff',86,72,3,4);R('#4a7ac0',87,84,2,2);R('#c04a3a',90,84,2,2)},()=>say('','Glub, glub. Hidratação em dia.'),{top:58}));
  const item=(id,ic,x,y,tx)=>room.add({id,x:x-2,y:y-2,w:14,h:10,hidden:true,top:y-14,sy:y-6,draw(){R('rgba(0,0,0,.25)',x,y+9,12,2);icon(ic,x,y+Math.sin(time*3+x)*1.2-2);sparkle(x+6,y-8)},async act(o){o.hidden=true;items++;sfx.pick();await say('',tx);goal='Encontre os 4 acessórios de treino ('+items+'/4)';if(items>=4){st=2;await say('Gabriela','Garrafinha, fones, toalha, luvas. Kit completo.');goal='Fale com a Treinadora Bia para começar o circuito'}}});
  const its=[item('i1','bottle',68,148,'Garrafinha de água — cheia e gelada.'),item('i2','phones',150,160,'Fones de ouvido. Sem playlist não existe treino.'),item('i3','towel',236,98,'Toalha. Porque suar faz parte.'),item('i4','glove',296,124,'Luvas de treino, novinhas.')];
  room.add(npc('bia',190,106,BIA,async()=>{if(st===0)return say('Treinadora Bia','Bem-vinda ao Campeonato da Força! Primeiro passo: armário, lá no canto, pra trocar de roupa.');
    if(st===1)return say('Treinadora Bia','Faltam acessórios! Garrafinha, fones, toalha e luvas.');
    if(st===2){await talk([['Treinadora Bia','Tudo pronto! O circuito tem três estações: esteira, halteres e coreografia.'],['Treinadora Bia','Comece pela esteira, ali perto dos armários.']]);st=3;goal='Estação 1: suba na esteira';return}
    if(st<6)return say('Treinadora Bia','Sem pular estação, hein! Eu estou de olho.');
    if(st===6){await talk([['Treinadora Bia','Desafio final: levantamento com a barra. Seis repetições, e a barra fica mais rápida a cada uma.'],['Gabriela','Disciplina é fazer mesmo sem vontade. Bora.']]);
      await timingGame({title:'Desafio Final — A Barra',reps:6,speed:1.45,zone:.2,scene(p){gymBack();drawPerson(look,160,131,'d',0,3);const y=93-p*30;R('#17101a',96,y,128,5);R('#aaa',97,y+1,126,3);for(const x of[96,208]){R('#17101a',x-1,y-9,18,23);R('#3a3a44',x,y-8,6,21);R('#e84a6f',x+7,y-6,5,17);R('#e8a23a',x+13,y-4,3,13)}}});
      await talk([['Treinadora Bia','CAMPEÃ! A medalha do Campeonato da Força é sua.']]);await got('medal','Medalha dourada','Por dedicação, disciplina e por nunca pular o treino.');st=7;
      await talk([['Marombeiro','Ei, Gabriela! Sério agora: você veio treinar ou pretende morar aqui?'],['Gabriela','As duas coisas. Me avisa quando liberarem os quartos.']]);room.flag.end=1}}));
  room.add(npc('mar',292,152,MAR,async()=>say('Marombeiro',st<7?'Gabriela, você veio treinar ou pretende morar aqui? Te vejo mais que o espelho.':'Respeito. Medalha merecida.'),'l'));
  scene=room;music('gym');await fade(0,.9);
  await cut(()=>talk([['','Uma academia que parece ter sido construída dentro de um videogame. Neon, espelhos e um placar piscando.'],['Treinadora Bia','Gabriela! Inscrita no Campeonato da Força. Hoje vale medalha!'],['Gabriela','Finalmente uma fase em que eu já chego com vantagem.']]));
  goal='Vá ao armário e escolha a roupa de treino';
  await until(()=>st>=1);its.forEach(o=>o.hidden=false);
  await until(()=>room.flag.end);await endChapter(1,'Uma medalha dourada')};
