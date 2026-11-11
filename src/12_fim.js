// ============ EPÍLOGO — A CASA DE ESFIRRAS, DE MADRUGADA ============
function paintEsfOut(c){const P=mk(c),r=rng(61);vgrad(c,0,0,W,80,'#070b22','#232450');for(let i=0;i<60;i++)P('#dfe6ff',r()*W,r()*50,1,1);P('#f4f0d8',262,12,9,9);P('#070b22',265,10,8,8);
  for(let x=0;x<W;x+=46){const h=40+r()*30;P('#12152e',x,98-h,45,h);for(let wy=104-h;wy<90;wy+=10)for(let wx=5;wx<38;wx+=9)if(r()<.18)P('#f6d27a',x+wx,wy,3,4)}
  // fachada
  P('#17101a',88,22,176,78);P('#cdb98c',90,24,172,76);P('#b03a2e',90,24,172,16);P('#8a2a22',90,38,172,2);for(let i=0;i<17;i++)P(i%2?'#f4f1ea':'#b03a2e',91+i*10,48,10,8);P('#17101a',90,56,172,1);
  for(const x of[98,206]){P('#17101a',x,60,48,36);P('#ffd98a',x+1,61,46,34);P('#fff0c0',x+3,63,14,30);P('#17101a',x+23,61,2,34);P('#8a5a2a',x+6,84,12,11);P('#8a5a2a',x+30,84,12,11);P('#5a3418',x+10,76,4,8);P('#5a3418',x+34,76,4,8)}
  P('#17101a',160,58,32,42);P('#7a4a2a',161,59,30,41);P('#ffd98a',164,62,24,20);P('#17101a',175,62,2,20);P('#d9b24a',186,84,2,3);
  c.globalCompositeOperation='lighter';glow(c,176,80,90,'rgba(255,200,120,.30)');c.globalCompositeOperation='source-over';
  // calçada e rua
  P('#8a8690',0,100,W,10);for(let x=0;x<W;x+=20)P('#7a7680',x,100,1,10);P('#5a5660',0,109,W,2);P('#2e2e3a',0,111,W,69);for(let k=0;k<280;k++)P(r()<.5?'#36364a':'#26262f',r()*W,112+r()*68,2,1);for(let x=6;x<W;x+=28)P('#8a8478',x,150,14,1);
  c.globalAlpha=.18;c.fillStyle='#ffd98a';c.fillRect(100,111,150,26);c.globalAlpha=1}
function paintEsfIn(c){const P=mk(c),r=rng(71);P('#e8dcc0',0,0,W,82);for(let y=0;y<82;y+=8)for(let x=((y/8|0)%2)*4;x<W;x+=8){P('rgba(0,0,0,.05)',x,y,8,1);P('rgba(0,0,0,.05)',x,y,1,8)}P('#2f8a64',0,40,W,3);P('#b03a2e',0,45,W,2);P('#6b4a32',0,78,W,4);
  // quadro do cardápio
  P('#17101a',22,8,76,28);P('#1c2a22',24,10,72,24);P('#17101a',226,6,70,62);vgrad(c,228,8,66,58,'#0a1028','#2a2a5a');for(let i=0;i<10;i++)P('#dfe6ff',230+r()*62,10+r()*30,1,1);P('#17101a',260,8,2,58);P('#17101a',228,36,66,2);P('#8a5a2a',224,66,74,4);
  // piso xadrez
  for(let y=82;y<H;y+=10)for(let x=0;x<W;x+=10)P(((x+y)/10|0)%2?'#d8cdb4':'#b8a888',x,y,10,10);P('rgba(0,0,0,.25)',0,82,W,3);
  c.globalCompositeOperation='lighter';for(const x of[60,150,250])glow(c,x,60,60,'rgba(255,200,120,.20)');c.globalCompositeOperation='source-over'}
const ATT={id:'att',skin:'#d9a584',hair:'#2a1c14',top:'#f4f1ea',bottom:'#2a2a34',shoes:'#17101a',hat:'#b03a2e',bg:'#5a3a2c'};WHO.Atendente=ATT;
const FINAL_LETTER=['Para Gabriela,','Existem histórias que encontramos nas páginas de um livro, outras que vivemos sem perceber e algumas que permanecem conosco mesmo depois que o tempo passa.',
 'Lembro das conversas, das músicas no carro, das tardes de televisão, das noites no sofá e do Speak fazendo parte de tudo.','Lembro da praia, das tentativas de futevôlei, das pizzas e de tantos pequenos momentos que talvez parecessem comuns, mas que guardam um significado especial para mim.',
 'Talvez Dostoiévski estivesse certo em uma coisa: somos muito mais complexos do que aquilo que mostramos ao mundo.','Você tem suas próprias histórias, seus desafios, suas conquistas e seus sonhos. E fico feliz por ter feito parte de alguns capítulos delas.',
 'Este pequeno jogo é uma forma de guardar um pouco dessas lembranças e mostrar que elas foram importantes para mim.','Com carinho,\nKauan.'];
STEPS[6]=async function(){let inn=false,sit=false;
  const out=new Room({start:[112,142],startDir:'r',minY:104,maxY:176,paint:paintEsfOut,over(cam){T('CASA DE ESFIRRAS',176-cam,26,{align:'center',size:8.5,b:1,c:'#fff3c8'});T('aberto 24h',176-cam,36.5,{align:'center',size:5,i:1,c:'#ffd98a'});const r=rng(3);for(let i=0;i<14;i++){const x=r()*W,y=(r()*100+time*(2+r()*3))%100;R('rgba(255,230,170,.35)',x,y,1,1)}}});
  out.add(deco('car',26,136,62,7,o=>drawJetta(24,120),()=>say('','O Speak dorme no banco de trás, enrolado no moletom do Kauan. Melhor não acordar.'),{top:104}));
  out.add(deco('lp',280,106,4,3,o=>{R('#17101a',280,52,4,57);R('#3a3742',281,53,2,55);R('#17101a',276,46,12,8);R('#f6d27a',277,47,10,6);g.globalCompositeOperation='lighter';glow(g,282,50,30,'rgba(255,210,130,.3)');g.globalCompositeOperation='source-over'}));
  out.add(npc('kau',134,146,KAUAN,()=>say('Kauan','Lembra dessa madrugada? A gente veio comer esfirra e ainda levou uma caixa pra sua mãe. Vem, a mesa da janela tá livre.'),'r'));
  out.add({id:'door',x:162,y:100,w:28,h:4,top:70,act:async()=>{inn=true}});
  scene=out;music('night');await fade(0,1.2);
  await cut(()=>talk([['','Madrugada. A rua está vazia, a cidade dorme — e uma casa de esfirras continua acesa, como sempre.'],['Gabriela','Esse lugar… A gente já veio aqui. De madrugada.'],['Kauan','Viemos comer esfirra. E você fez questão de levar uma caixa pra sua mãe.'],['Gabriela','Você lembra disso?'],['Kauan','Eu lembro de tudo que foi simples e bom.']]));
  goal='Entre na casa de esfirras';await until(()=>inn);goal='';await fade(1,.6);
  const items=[],room=new Room({start:[60,160],startDir:'u',minY:92,maxY:176,paint:paintEsfIn,
    over(cam){T('ESFIRRAS',60-cam,12,{align:'center',size:6.5,b:1,c:'#f4f1ea'});T('carne · queijo · calabresa',60-cam,20.5,{align:'center',size:4.4,c:'#cfe8da'});T('suco · guaraná · café',60-cam,26.5,{align:'center',size:4.4,c:'#cfe8da'})}});
  room.add(deco('counter',18,96,150,10,o=>{R('#17101a',17,80,152,27);R('#8a5a2a',18,92,150,14);R('#a06a36',18,90,150,4);R('#17101a',40,74,84,17);R('rgba(200,230,240,.55)',41,75,82,15);for(let i=0;i<7;i++)icon('esfirra',44+i*11,78);R('#17101a',134,78,18,13);R('#3a3a44',135,79,16,8);R('#7fd4ff',137,80,8,4)},
    async()=>talk([['Atendente','Boa noite! O de sempre?'],['Kauan','Duas de carne, duas de queijo… e separa uma caixa pra viagem, por favor.'],['Gabriela','Pra minha mãe.'],['Atendente','Saindo. Mesa da janela, eu levo lá.']]),{top:60}));
  room.add(npc('att',96,92,ATT,null));room.get('att').solid=false;room.get('att').sy=90;
  const tbl=(id,x,y,act)=>room.add(deco(id,x,y,26,10,o=>{R('rgba(0,0,0,.2)',x-2,y+10,30,3);R('#17101a',x-1,y-7,28,18);R('#b03a2e',x,y-6,26,11);R('#f4f1ea',x+2,y-4,22,7);R('#5a3418',x+11,y+5,4,6);for(const cx of[x-9,x+27]){R('#17101a',cx,y-8,8,16);R('#8a5a2a',cx+1,y-7,6,8);R('#5a3418',cx+1,y+1,6,6)}},act,{top:y-22}));
  tbl('t1',40,132,()=>say('','Uma mesa vazia, com o porta-guardanapo perfeitamente alinhado.'));tbl('t2',128,150,()=>say('','Alguém esqueceu um jornal de ontem. As palavras cruzadas estão pela metade.'));
  const sp=room.add(deco('t3',236,118,30,10,o=>{const x=236,y=118;g.globalCompositeOperation='lighter';glow(g,x+15,y,34,'rgba(255,210,130,.28)');g.globalCompositeOperation='source-over';R('rgba(0,0,0,.2)',x-2,y+10,34,3);
      if(sit){drawSeated(GABI,x+5,y-4);drawSeated(KAUAN,x+25,y-4)}R('#17101a',x-1,y-7,32,18);R('#b03a2e',x,y-6,30,11);R('#f4f1ea',x+2,y-4,26,7);R('#5a3418',x+13,y+5,4,6);
      if(!sit)for(const cx of[x-9,x+31]){R('#17101a',cx,y-8,8,16);R('#8a5a2a',cx+1,y-7,6,8);R('#5a3418',cx+1,y+1,6,6)}
      if(room.flag.food){icon('plate',x+9,y-9);icon('esfirra',x+9,y-13)}items.forEach((ic,i)=>{const ix=x-6+i*9+(i>1?6:0),iy=y+2+((i%2)*3);g.drawImage(iconCv(ic),ix,iy,9,9)});if(!sit)sparkle(x+15,y-16)},
    async()=>{sit=true},{top:92}));
  const kau=room.add(npc('kau',214,140,KAUAN,()=>say('Kauan','A nossa mesa é aquela da janela. Senta comigo?'),'l'));
  scene=room;await fade(0,.8);
  await cut(()=>talk([['','Lá dentro: azulejo antigo, cheiro de massa assando e a luz amarela que só existe de madrugada.'],['Kauan','A mesa da janela tá livre. Sempre foi a melhor.']]));
  goal='Sente na mesa da janela';await until(()=>sit);goal='';
  await cut(async()=>{await fade(1,.8);room.p.hidden=true;kau.hidden=true;room.p.x=251;room.camLock=true;room.cam=W-VW;room.zoom=2.3;room.focus=[251,116];room.flag.food=1;await wait(.3);await fade(0,1.4);
    for(let t=0;t<=1;t+=.006){room.zoom=1+1.3*(1-t)*(1-t);await wait(.025)}room.zoom=1;
    await talk([['','As esfirras chegam quentes. Por um tempo, ninguém fala nada — e não precisa.'],['Kauan','Eu trouxe umas coisas. Coloca aí na mesa.']]);
    const obj=[['book','O exemplar de Crime e Castigo. O começo de tudo — e de muita conversa boa.'],['medal','A medalha da academia. Pela disciplina de quem treina até quando não quer.'],['gball','A bola de futevôlei. Pelos primeiros passos na areia.'],['bone','O ossinho do Speak. O guardião do sofá manda lembranças.'],['tape','A fita “Kauan e Gabi”. Cada faixa, um dia que valeu a pena.']];
    for(const[ic,tx]of obj){items.push(ic);sfx.pick();await wait(.5);await say('',tx)}
    await talk([['Gabriela','Um livro, uma medalha, uma bola, um ossinho e uma fita. Parece o inventário de um jogo.'],['Kauan','Parece o inventário de um tempo bom.'],['','Do outro lado da mesa, ele empurra um envelope na direção dela.']]);
    for(const p of FINAL_LETTER)await UI.card('<div class="q" style="font-size:calc(20*var(--u));font-style:normal;line-height:1.55">'+p+'</div>',{bg:'rgba(10,8,14,.93)'});
    await talk([['Gabriela','…Você fez um jogo inteiro pra me dizer isso?'],['Kauan','Fiz. Tinha lombada demais pra caber numa mensagem.']]);
    await UI.quote('A gente pode atravessar quantos mundos quiser. Algumas das melhores lembranças continuam morando nos momentos mais simples: uma mesa, uma esfirra quente e uma boa companhia.');
    save.fin=true;save.ch=6;persist();toast('Memórias que não se apagam','Livro completo');await wait(1.6);
    await UI.card('<div class="k">Fim</div><div class="t">GABRIELA</div><div class="s">Entre Páginas e Memórias</div><div class="s" style="margin-top:calc(26*var(--u));font-size:calc(15*var(--u))">Uma história original de Kauan.<br>Obrigado por jogar, Gabi.</div>',{bg:'rgba(6,5,10,.9)'});await fade(1,1)});
  title()};
