// ============ PRÓLOGO: A BIBLIOTECA ============
const ROMAN=['I','II','III','IV','V'];
const CH=[{t:'Crime e Castigo',s:'O peso das escolhas',ic:'book',ach:'Entre a Culpa e a Redenção'},{t:'Academia',s:'A força de Gabriela',ic:'medal',ach:'Força de Vontade'},{t:'Praia',s:'A primeira aula de futevôlei',ic:'gball',ach:'Primeiros Passos na Areia'},{t:'Speak',s:'O guardião do sofá',ic:'paw',ach:'O Lugar Mais Aconchegante'},{t:'Kauan e Gabi',s:'Uma playlist pela cidade',ic:'tape',ach:'Nossa Trilha Sonora'}];
function paintLibrary(c){const P=mk(c),r=rng(11);P('#2a1d1c',0,0,W,H);P('#3b2618',0,2,W,80);
  shelf(P,6,6,124,4,r);shelf(P,190,6,124,4,r);
  // janela em arco
  P('#1a120c',134,4,52,76);vgrad(c,138,8,44,68,'#101a3a','#2a3a6a');P('#f4f0d8',166,16,8,8);P('#101a3a',169,15,6,6);
  for(let i=0;i<14;i++)P('#cfd8ff',139+r()*42,10+r()*40,1,1);P('#1a120c',159,8,2,68);P('#1a120c',138,40,44,2);P('#5a3a22',132,78,56,4);
  // piso
  for(let y=82;y<H;y+=10){P((y/10|0)%2?'#6b452b':'#5f3d26',0,y,W,10);for(let x=(y*7)%40;x<W;x+=40)P('#4a2f1d',x,y,1,10)}P('#22140e',0,80,W,3);
  c.globalAlpha=.10;c.fillStyle='#b8c8ff';c.beginPath();c.moveTo(138,82);c.lineTo(182,82);c.lineTo(214,H);c.lineTo(106,H);c.fill();c.globalAlpha=1;
  // tapete
  P('#4a1622',84,104,152,60);P('#6e2433',86,106,148,56);P('#8d3344',92,112,136,44);P('#d9b24a',96,116,128,1);P('#d9b24a',96,151,128,1);P('#d9b24a',96,116,1,36);P('#d9b24a',223,116,1,36);
  glow(c,104,84,46,'rgba(255,200,110,.28)');glow(c,216,84,46,'rgba(255,200,110,.28)')}
function lampDraw(o){const x=o.x+2,y=o.y+4;R('#17101a',x-1,y-30,4,30);R('#8a6a2a',x,y-30,2,29);R('#17101a',x-4,y-1,10,3);R('#17101a',x-6,y-40,14,11);R('#f6d27a',x-5,y-39,12,9);R('#fff3c0',x-3,y-37,8,5)}
function libraryRoom(fin){const room=new Room({start:[160,160],startDir:'u',minY:86,paint:paintLibrary,
    over(cam){const r=rng(5);for(let i=0;i<18;i++){const x=r()*W,y=(r()*120+time*(3+r()*4))%120;R('rgba(255,240,200,.35)',x+Math.sin(time+i)*4,20+y,1,1)}}});
  room.add(deco('lamp1',102,96,4,4,lampDraw));room.add(deco('lamp2',214,96,4,4,lampDraw));
  room.add(deco('table',138,120,44,12,o=>{R('#17101a',137,111,46,22);R('#4a2f1d',138,112,44,12);R('#5f3d26',138,112,44,9);R('#3a2415',140,124,4,8);R('#3a2415',176,124,4,8);
    R('#17101a',150,109,20,9);R('#f4e8cf',151,110,9,7);R('#fff8e8',160,110,9,7);R('#b8a078',160,110,1,7);if(fin||!room.flag.book)sparkle(160,104);if(fin)sparkle(152,107,'#ffd75a')},null,{top:96}));
  room.add(deco('chair',44,128,18,10,o=>{R('#17101a',43,112,20,27);R('#3e6b4a',44,113,18,14);R('#4f8a5e',46,115,14,8);R('#35593e',44,127,18,10);R('#17101a',44,137,3,2);R('#17101a',59,137,3,2)},
    ()=>say('Gabriela','Uma poltrona perfeita para ler até esquecer da hora. Tentador.'),{top:100}));
  room.add(deco('globe',262,130,12,6,o=>{R('#17101a',266,112,5,24);R('#8a6a2a',267,124,3,11);R('#17101a',260,110,17,16);R('#2e6fa8',261,111,15,14);R('#4f9a5e',263,113,5,4);R('#4f9a5e',269,118,5,5);R('#17101a',262,135,13,2)},
    ()=>say('Gabriela','Um globo antigo. Alguém marcou São Petersburgo com um pontinho de tinta.'),{top:98}));
  const sh=(id,x,w,tx)=>room.add({id,x,y:84,w,h:2,top:66,act:()=>say('',tx)});
  sh('s1',10,90,'Romances russos, encadernados em couro. As lombadas estão gastas de tanto serem abertas.');
  sh('s2',230,80,'Entre dois volumes, um marcador de página esquecido: “Volto já.” Ninguém voltou — ainda.');
  return room}

async function endChapter(i,line){UI.goal('');UI.toast(CH[i].ach,'Conquista');await wait(2.4);await UI.fade(1,.9);save.ch=Math.max(save.ch,i+2);persist();
  await UI.card('<div class="k">Página '+ROMAN[i]+' preenchida</div><div class="t" style="font-size:calc(26*var(--u))">'+line+'</div>',{auto:2.8,bg:'rgba(6,5,10,.96)'})}
async function intro(){await fade(1,.1);const room=libraryRoom(false);scene=room;music('title');await fade(0,1.2);
  await cut(()=>talk([['','Uma biblioteca antiga. Silenciosa. O tipo de lugar onde o tempo resolve andar mais devagar.'],['Gabriela','Que lugar é esse…? Cheiro de livro velho e madeira. Eu poderia morar aqui.'],['Gabriela','Tem alguma coisa brilhando em cima daquela mesa.']]));
  goal='Toque no chão para andar e nas setas para interagir';
  room.get('table').act=async()=>{await talk([['','Sobre a mesa, um exemplar aberto de “Crime e Castigo”, de Fiódor Dostoiévski.'],['Gabriela','Espera. Eu conheço esse livro. É o meu — o que eu ganhei de presente.'],['','Na primeira página, uma dedicatória que não estava ali antes:']]);
    await card('“Algumas histórias não terminam quando fechamos um livro.\nAlgumas continuam existindo nas lembranças de quem as viveu.”');
    await talk([['Gabriela','…Ok. Isso é novo.'],['','Ela folheia o livro. No meio dele, cinco páginas completamente em branco.'],['','Ao tocar a primeira, o papel esquenta sob os dedos — e as letras ao redor começam a se mover.'],['Gabriela','Cada página parece levar a algum lugar. Só tem um jeito de descobrir.']]);room.flag.book=1};
  await until(()=>room.flag.book);goal='';sfx.whoosh();await fade(1,1.2);save.ch=Math.max(save.ch,1);persist()}
const STEPS=[intro];
