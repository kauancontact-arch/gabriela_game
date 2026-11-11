// ============ CAPÍTULO I — CRIME E CASTIGO ============
function paintPeter(c){const P=mk(c),r=rng(42),Wd=640;vgrad(c,0,0,Wd,70,'#171c33','#4a4860');
  for(let i=0;i<50;i++)P('#cfd8ff',r()*Wd,r()*30,1,1);
  // silhuetas ao fundo
  const sil='#252a44';for(let x=0;x<Wd;x+=26){const h=10+r()*18;P(sil,x,48-h,26,h+10)}
  [[150,1],[470,1]].forEach(([x])=>{P(sil,x,22,24,30);P(sil,x+4,14,16,8);P(sil,x+8,9,8,6);P(sil,x+11,0,2,10)});P(sil,318,4,3,46);P(sil,312,30,15,20);
  // fachadas
  const cols=['#8a7350','#5d6b62','#8a5d58','#56607a','#9a8448','#6a5a6a','#7a6a5a'],bx=[0,92,172,262,342,422,524,640];
  for(let i=0;i<7;i++){const x=bx[i],w=bx[i+1]-x,top=18+(r()*10|0),col=cols[i];P('#17101a',x,top-2,w,100-top);P(col,x+1,top,w-2,98-top);P('rgba(255,255,255,.08)',x+1,top,w-2,3);P('rgba(0,0,0,.18)',x+1,84,w-2,14);
    P('#f4f6ff',x,top-3,w,2);for(let k=0;k<5;k++)P('#f4f6ff',x+r()*w,top-1,4+r()*6,1);
    for(let wy=top+8;wy<74;wy+=17)for(let wx=x+8;wx<x+w-12;wx+=15){const lit=r()<.4;P('#17101a',wx-1,wy-1,9,12);P(lit?'#f2c96b':'#1d2238',wx,wy,7,10);P('#17101a',wx+3,wy,1,10);if(lit)P('#fff0b0',wx,wy,3,3);P('#f4f6ff',wx-1,wy+10,9,1)}}
  // capela (prédio 5)
  P('#17101a',452,2,40,20);P('#3e6b6a',456,8,32,12);P('#3e6b6a',462,3,20,6);P('#d9b24a',471,-4,2,9);P('#d9b24a',468,-1,8,2);
  // portas e placas
  const door=(x,col)=>{P('#17101a',x-7,76,14,23);P(col,x-6,77,12,22);P('#17101a',x-1,77,1,22);P('#d9b24a',x+2,88,1,2)};
  door(46,'#5a3018');door(132,'#3a2a22');door(217,'#2a3a2a');door(302,'#6a2a22');door(382,'#3a3a4a');door(472,'#4a2a18');
  const sign=(x,w)=>{P('#17101a',x-w/2-1,62,w+2,11);P('#2a1a12',x-w/2,63,w,9);P('#d9b24a',x-w/2,63,w,1)};sign(46,56);sign(217,50);sign(302,46);
  // machado simbólico na casa de penhores
  P('#17101a',246,50,9,14);P('#6b4a32',250,51,1,12);P('#b8c0c8',247,51,4,5);P('#e8eef4',247,52,1,3);
  // muro antigo (prédio 6)
  for(let y=30;y<98;y+=6)for(let x=526+((y/6|0)%2)*5;x<638;x+=10)P('rgba(0,0,0,.14)',x,y,1,6);
  // chão
  P('#7a7680',0,98,Wd,7);P('#5a5660',0,104,Wd,1);P('#4b4852',0,105,Wd,48);
  for(let i=0;i<420;i++){const x=r()*Wd,y=106+r()*46;P(r()<.5?'#56535e':'#423f49',x,y,3+r()*3,2)}
  for(let i=0;i<34;i++){const x=r()*Wd,y=100+r()*52;P('#e8ecf6',x,y,5+r()*12,2);P('#f8faff',x+1,y-1,3+r()*6,1)}
  // parapeito e canal
  P('#17101a',0,152,Wd,7);P('#6a6672',0,153,Wd,3);P('#f4f6ff',0,152,Wd,1);for(let x=4;x<Wd;x+=14)P('#3a3742',x,156,3,6);P('#141d33',0,160,Wd,20)}
const PET={
  livreiro:{id:'liv',skin:'#e0b090',hair:'#8a8a8a',top:'#5a3a22',bottom:'#2a2420',shoes:'#17101a',coat:1,beard:'#b0b0b0',glass:1},
  estud:{id:'est',skin:'#e8c8b0',hair:'#4a3a2a',top:'#3a3a4a',bottom:'#2a2a30',shoes:'#17101a',coat:1,hat:'#2a2a30'},
  tav:{id:'tav',skin:'#d9a080',hair:'#3a2a1a',top:'#8a2a2a',bottom:'#3a2a20',shoes:'#17101a',beard:'#3a2a1a'},
  vend:{id:'ven',skin:'#e0b090',hair:'#6a3a2a',top:'#a86a3a',bottom:'#5a3a4a',shoes:'#17101a',dress:1,scarf:'#c04a3a'},
  coch:{id:'coc',skin:'#d0a080',hair:'#2a2a2a',top:'#2a3a5a',bottom:'#22222a',shoes:'#17101a',coat:1,hat:'#17101a'},
  insp:{id:'ins',skin:'#e0b898',hair:'#5a4a3a',top:'#4a4a3a',bottom:'#2a2a22',shoes:'#17101a',coat:1,glass:1},
  sonia:{id:'son',skin:'#f0d0b8',hair:'#c8a060',top:'#6a7a9a',bottom:'#4a5a7a',shoes:'#17101a',dress:1,shawl:'#3e8f6a',scarf:'#3e8f6a',long:1}};
function lampPost(x){return deco('lp'+x,x-2,126,4,3,o=>{R('#17101a',x-2,84,4,45);R('#3a3742',x-1,85,2,44);R('#17101a',x-5,76,10,10);R('#f6d27a',x-4,77,8,8);R('#fff6d0',x-2,79,4,4);R('#17101a',x-4,128,8,2)})}
Object.assign(WHO,{Livreiro:PET.livreiro,Estudante:PET.estud,Taverneiro:PET.tav,Vendedora:PET.vend,Cocheiro:PET.coch,Inspetor:PET.insp,'Moça de xale verde':PET.sonia,'Sônia':PET.sonia});
STEPS[1]=async function(){let st=0,clues=0,wit=0;const seen={};
  const room=new Room({w:640,start:[26,128],startDir:'r',minY:106,maxY:150,look:Object.assign({},GABI,{id:'gabiw',coat:1,top:'#3a2f3a',nosleeve:0,scarf:null}),paint:paintPeter,
    over(cam){g.globalCompositeOperation='lighter';for(const x of[110,330,560]){glow(g,x,82,34,'rgba(255,200,110,.22)')}g.globalCompositeOperation='source-over';
      if(room.flag.door){const a=.5+Math.sin(time*4)*.3;R('#17101a',592,70,18,29);R('rgba(255,225,150,'+a+')',593,71,16,28);glow(g,601,86,26,'rgba(255,220,140,.35)')}
      for(let x=cam-(cam%20);x<cam+W+20;x+=20){const k=Math.sin(time*1.5+x*.3);R('#2a3a5a',x+k*3,165+((x/20|0)%3)*4,8,1)}
      T('BIBLIOTECA',46-cam,64.5,{align:'center',size:6,b:1,c:'#e8d9b0'});T('PENHORES',217-cam,64.5,{align:'center',size:6,b:1,c:'#e8d9b0'});T('TAVERNA',302-cam,64.5,{align:'center',size:6,b:1,c:'#e8d9b0'})},
    post(){const r=rng(3);for(let i=0;i<70;i++){const sp=14+r()*22,x=(r()*W+Math.sin(time*.8+i)*8+time*-6)%W,y=(r()*H+time*sp)%H;R('rgba(255,255,255,'+(.5+r()*.5)+')',(x+W)%W,y,r()<.3?2:1,1)}}});
  [110,330,560].forEach(x=>room.add(lampPost(x)));
  const pile=(id,x,y,tx)=>room.add(deco(id,x,y,14,6,o=>{R('#17101a',x-1,y-9,16,16);R('#6b4a32',x,y-2,14,8);R('#8a1f2d',x+1,y-5,12,3);R('#2e4a7a',x+2,y-8,10,3);R('#e9d9b0',x+11,y-7,1,2);if(st>=1&&!seen[id])sparkle(x+7,y-14)},async()=>{
    if(st<1)return say('Gabriela','Uma pilha de livros velhos, salpicada de neve. Melhor perguntar ao livreiro antes de mexer.');
    if(seen[id])return say('','Só restam livros comuns aqui.');seen[id]=1;clues++;sfx.pick();await say('',tx);goal='Procure pistas nas pilhas de livros ('+clues+'/3)';
    if(clues>=3){st=2;await say('Gabriela','Três pistas, e todas apontam para o canal. Tem alguém parado lá, olhando a água…');goal='Fale com o Estudante, junto ao canal'}},{top:y-22}));
  pile('p1',96,112,'Um bilhete entre as folhas: “As páginas não foram roubadas. Foram levadas por alguém que não suportava vê-las perdidas.”');
  pile('p2',236,110,'Na margem de um livro, o desenho de um machado. Embaixo, a lápis: “É só um símbolo. O verdadeiro peso vem depois.”');
  pile('p3',352,138,'Um recibo da casa de penhores, nunca usado. No verso: “Quem pensa demais à beira do canal sabe mais do que diz.”');
  room.add(npc('liv',62,110,PET.livreiro,async()=>{if(st===0){await talk([['Livreiro','Ah, uma leitora! Chegou em má hora, minha jovem. Ou talvez na hora exata.'],['Livreiro','Um dos nossos livros perdeu as últimas páginas. Sumiram na noite passada — justo o final da história.'],['Gabriela','Um livro sem final? Isso é quase um crime.'],['Livreiro','E todo crime, dizem por aqui, carrega o seu castigo. Veja as pilhas de livros pela rua. Quem levou as páginas deixou rastros.']]);st=1;goal='Procure pistas nas pilhas de livros (0/3)'}
    else if(st<6)await say('Livreiro',pick(['São Petersburgo guarda segredos nas margens dos livros. Continue procurando.','Um final perdido tira o sono de qualquer leitor. Conto com você.']));
    else await say('Livreiro','As páginas voltaram! E vejo uma luz no muro antigo, lá no fim da rua… Vá ver.')}));
  room.add(npc('est',388,146,PET.estud,async()=>{if(st<2)return say('Estudante','…');
    if(st>2)return say('Estudante','Toda escolha deixa uma marca. Eu ainda estou aprendendo a carregar as minhas.');
    await talk([['Estudante','Você também veio olhar a água? Ela não julga ninguém. As pessoas, sim. E a consciência — essa julga mais do que todos.'],['Gabriela','Você parece alguém que não dorme há dias.'],['Estudante','Tenho uma página que não me pertence. Entrego a você… se me responder três perguntas. Não existe resposta certa. Só a sua.']]);
    let i=await choose('Estudante','Um homem tem fome e vê um pão esquecido numa banca. Ninguém está olhando.',['Pegar o pão e ir embora','Pedir ao padeiro e oferecer trabalho','Deixar o pão e buscar quem possa ajudar']);
    await say('Estudante',['A fome explica. Mas explicar não é o mesmo que absolver, é?','Pedir… exige mais coragem do que tomar. Poucos percebem isso.','Carregar o problema do outro até encontrar ajuda. É um caminho mais longo.'][i]);
    i=await choose('Estudante','Um amigo seu errou. Você guarda um segredo que o livraria do castigo — mas ele é mesmo culpado.',['Guardar o segredo por lealdade','Ficar ao lado dele, mas dizer a verdade','Deixar que ele mesmo decida confessar']);
    await say('Estudante',['A lealdade também pesa. Às vezes, mais do que a culpa.','Ficar ao lado e dizer a verdade… As duas coisas juntas. Quase ninguém consegue.','Dar a alguém a chance de confessar por conta própria é uma forma rara de respeito.'][i]);
    i=await choose('Estudante','E se alguém se julgasse extraordinário — acima das regras que valem para todos?',['Ninguém está acima da própria consciência','Quem decide quem é extraordinário?','Extraordinário é quem cuida dos outros']);
    await say('Estudante',['Eu demorei muito para entender isso. Você disse em uma frase.','Essa pergunta, se eu a tivesse feito antes… teria me poupado muita coisa.','Cuidar. Conheço alguém que pensa exatamente assim.'][i]);
    await talk([['Estudante','Fique com a página. Ela pesa menos na sua mão do que na minha.']]);await got('page','Página recuperada','A primeira das páginas perdidas. Faltam as outras.');
    await say('Estudante','As outras não estão comigo. Pergunte pela rua: o taverneiro, a vendedora, o cocheiro. Alguém viu alguma coisa.');st=3;goal='Investigue: taverneiro, vendedora e cocheiro (0/3)'},'d'));
  const witness=(id,x,y,look,name,idle,tx)=>room.add(npc(id,x,y,look,async()=>{if(st<3)return say(name,idle);if(st===3&&!seen[id]){seen[id]=1;wit++;await say(name,tx);goal='Investigue: taverneiro, vendedora e cocheiro ('+wit+'/3)';if(wit>=3){st=4;await say('Gabriela','Xale verde, a capela, alguém que protege em vez de roubar… Hora de contar ao Inspetor.');goal='Conte ao Inspetor o que você descobriu'}}else await say(name,tx)}));
  witness('tav',318,110,PET.tav,'Taverneiro','Sopa quente e chá preto! Só não me peça fiado.','Páginas? Ontem à noite vi uma moça de xale verde passar com um embrulho junto ao peito. Segurava como quem segura algo frágil.');
  witness('ven',168,142,PET.vend,'Vendedora','Maçãs! Maçãs do campo, baratinhas!','O moço do canal? Não fez mal a livro nenhum. Mas tem uma moça que cuida dele… Ela guarda tudo o que é importante para que não se perca.');
  witness('coc',430,126,PET.coch,'Cocheiro','Carruagem? Hoje não, a neve travou a roda.','Xale verde? Vejo sempre perto da capela, ao lado do lampião. Fica ali, esperando. Paciência de santa.');
  room.add(npc('ins',262,130,PET.insp,async()=>{if(st<4)return say('Inspetor','Um investigador não tem pressa. As pessoas acabam contando tudo sozinhas… Traga-me fatos, não palpites.');
    if(st>4)return say('Inspetor','Capela, lampião, xale verde. Vá, antes que a neve aperte.');
    await say('Inspetor','Então andou fazendo perguntas pela rua. Muito bem. Diga-me: quem está com as páginas?');
    for(;;){const i=await choose('Inspetor','Quem está com as páginas?',['O Estudante, por culpa','O dono da casa de penhores','Uma moça de xale verde, por cuidado']);
      if(i===2)break;sfx.bad();await say('Inspetor',i===0?'Ele carregava uma só — e a entregou. Culpa, sim. Mas não é ele. Pense no que as testemunhas disseram.':'O recibo nunca foi usado. A casa de penhores é só um símbolo nessa história. Tente outra vez.')}
    await talk([['Inspetor','Exato. Nenhum crime aqui — apenas alguém que guardou o final para que não se perdesse.'],['Inspetor','Você tem faro para pessoas, não só para livros. Procure-a perto da capela.']]);st=5;goal='Encontre a moça de xale verde perto da capela'}));
  room.add(npc('son',500,112,PET.sonia,async()=>{if(st<5)return say('Moça de xale verde','A neve hoje está bonita, não está? Ela cobre tudo por igual.');
    if(st>5)return say('Sônia','Vá. A passagem no muro está aberta para você.');
    await talk([['Sônia','Você veio pelas páginas. Eu sabia que alguém viria — só esperava que fosse alguém que soubesse ler.'],['Gabriela','Por que você as guardou?'],['Sônia','Porque um final arrancado vira lixo na neve. E ele… ele ainda não estava pronto para ler o próprio final.'],['Sônia','Ninguém se salva sozinho. Às vezes basta alguém ficar por perto, sem ir embora.'],['Sônia','Tome. Mas as páginas se embaralharam. Coloque a história em ordem — você conhece o caminho.']]);
    const fr=['A teoria: “e se alguns pudessem tudo?”','O peso: a consciência que não deixa dormir','A confissão: dizer a verdade em voz alta','O recomeço: alguém que fica ao lado'];
    for(;;){let left=[2,0,3,1],ok=true;for(let k=0;k<4;k++){const i=await choose('',['O que vem primeiro?','E depois?','Em seguida?','E por fim?'][k],left.map(x=>fr[x]));if(left[i]!==k)ok=false;left.splice(i,1)}
      if(ok)break;sfx.bad();await say('Sônia','Quase. Pense no caminho dele: primeiro a ideia, depois o peso dela, então a coragem de falar… e só no fim, a chance de recomeçar.')}
    sfx.ok();shake=.6;room.flag.door=1;st=6;await talk([['','As páginas se unem. Lá no fim da rua, no muro antigo, uma porta que não existia começa a brilhar.'],['Sônia','Entre a culpa e a redenção existe um caminho. Você acabou de percorrê-lo.']]);goal='Entre na passagem que se abriu no muro antigo'}));
  room.add({id:'door',x:592,y:100,w:18,h:4,top:60,act:async()=>{if(!room.flag.door)return say('Gabriela','Um muro velho, coberto de gelo. Nada aqui… por enquanto.');
    await fade(1);await got('book','Edição especial de Crime e Castigo','Capa de couro, letras douradas — e uma dedicatória escondida.');
    await card('“Para quem lê as pessoas com o mesmo cuidado com que lê os livros.”');room.flag.end=1}});
  scene=room;music('pet');await fade(0,.9);
  await cut(()=>talk([['','São Petersburgo, século XIX. Neve fina, lampiões acesos e ruas estreitas que parecem guardar segredos.'],['Gabriela','Eu estou… dentro do livro? Tá. Sem pânico. Aquele senhor na porta da biblioteca parece saber das coisas.']]));
  goal='Fale com o Livreiro, na porta da biblioteca';await until(()=>room.flag.end);await endChapter(0,'Um exemplar de Crime e Castigo')};
