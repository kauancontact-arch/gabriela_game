// ============ ARTE (pixel art procedural) ============
// Aparência única dos personagens (a mesma em todas as cenas; só o figurino muda quando a história pede)
const GABI={id:'gabi',skin:'#f0cdb4',hair:'#1b1311',long:1,top:'#1a1a20',nosleeve:1,bottom:'#3f6aa0',cargo:1,shoes:'#f0ece4',pierce:1,bg:'#3d5148'};
const KAUAN={id:'kauan',skin:'#cf9f76',hair:'#17110e',hairHi:'#3a2a20',curly:1,must:1,goat:1,tat:1,stud:1,top:'#151517',bottom:'#24252c',shoes:'#e6e2da',bg:'#3a4660'};
const WHO={Gabriela:GABI,Kauan:KAUAN};
const sprC={};
function outline(a,col='#17101a'){const o=document.createElement('canvas');o.width=a.width;o.height=a.height;const c=o.getContext('2d');
  for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]])c.drawImage(a,dx,dy);c.globalCompositeOperation='source-in';c.fillStyle=col;c.fillRect(0,0,o.width,o.height);
  c.globalCompositeOperation='source-over';c.drawImage(a,0,0);return o}
function paintPerson(c,L,dir,f,left){const P=mk(c),bob=(f===1||f===3)?-1:0,hy=3+bob,lf=f===1?-1:0,rf=f===3?-1:0,dk='#20140f';
  if(dir==='d'||dir==='u'){
    if(L.long)P(L.hair,4,hy+2,12,14);
    if(L.dress){P(L.bottom,5,19,10,6);P(L.shoes,7,25,2,1);P(L.shoes,11,25,2,1)}
    else{P(L.bottom,7,19,3,5+lf);P(L.bottom,10,19,3,5+rf);P(L.shoes,7,24+lf,3,2);P(L.shoes,10,24+rf,3,2);if(L.shorts){P(L.skin,7,22,3,2+lf);P(L.skin,10,22,3,2+rf)}}
    P(L.top,6,12+bob,8,8);if(L.coat)P(L.top,6,19,8,3);
    P(L.skin,5,13+bob,1,6);P(L.skin,14,13+bob,1,6);P(L.top,5,12+bob,1,L.coat?6:L.nosleeve?0:2);P(L.top,14,12+bob,1,L.coat?6:L.nosleeve?0:2);if(L.nosleeve){P(L.skin,5,12+bob,1,1);P(L.skin,14,12+bob,1,1)}
    if(L.tat){const tx=dir==='d'?14:5;P('#39404a',tx,14+bob,1,1);P('#39404a',tx,16+bob,1,1);P('#5a4632',tx,17+bob,1,1);P('#39404a',tx,18+bob,1,1)}if(L.cargo&&!L.dress){P('#6a94c8',7,21,1,2);P('#6a94c8',12,21,1,2)}
    if(L.shawl){P(L.shawl,5,12+bob,10,3)}
    P(L.skin,6,hy+1,8,8);
    if(dir==='d'){P(L.hair,5,hy,10,3);P(L.hair,5,hy+3,1,L.long?11:3);P(L.hair,14,hy+3,1,L.long?11:3);
      if(L.long){P(L.hair,6,hy+3,1,2);P(L.hair,4,hy+4,1,10);P(L.hair,15,hy+4,1,10)}
      P(dk,7,hy+5,1,2);P(dk,12,hy+5,1,2);P('#a8563f',9,hy+8,2,1);
      if(L.pierce)P('#f2f2ff',11,hy+7,1,1);if(L.beard)P(L.beard,6,hy+7,8,3);if(L.must)P(L.hair,8,hy+7,4,1);if(L.goat)P(L.hair,9,hy+8,2,1);if(L.tat)P('#39404a',9,hy+9,2,1);if(L.stud)P('#ffffff',5,hy+6,1,1);if(L.glass){P('#222',6,hy+5,3,1);P('#222',11,hy+5,3,1)}
    }else{P(L.hair,5,hy,10,L.long?15:7)}
    if(L.curly){P(L.hair,5,hy-1,10,2);P(L.hair,6,hy-2,2,1);P(L.hair,9,hy-2,3,1);P(L.hair,13,hy-2,1,1);P(L.hairHi,7,hy,1,1);P(L.hairHi,11,hy-1,1,1);P(L.hairHi,13,hy+1,1,1)}
    if(L.hat){P(L.hat,4,hy,12,2);P(L.hat,6,hy-3,8,3)}
    if(L.scarf){P(L.scarf,5,hy-1,10,3);P(L.scarf,5,hy+2,1,9);P(L.scarf,14,hy+2,1,9)}
  }else{
    if(L.long)P(L.hair,4,hy+3,5,13);
    const bx=7+(f===1?-1:f===3?1:0),fx=10+(f===1?1:f===3?-1:0);
    if(L.dress){P(L.bottom,6,19,9,6)}
    else{P(L.bottom,bx,19,3,5);P(L.shoes,bx,24,4,2);P(L.bottom,fx,19,3,5);P(L.shoes,fx,24,4,2);if(L.shorts){P(L.skin,bx,22,3,2);P(L.skin,fx,22,3,2)}}
    P(L.top,7,12+bob,6,8);if(L.coat)P(L.top,7,19,6,3);P(L.skin,9,14+bob,2,5);P(L.top,9,12+bob,2,L.coat?6:L.nosleeve?0:2);
    if(L.shawl)P(L.shawl,6,12+bob,8,3);
    P(L.skin,7,hy+1,7,8);P(L.skin,14,hy+5,1,2);P(L.hair,6,hy,8,3);P(L.hair,6,hy+3,3,5);
    P(dk,12,hy+5,1,2);P('#a8563f',12,hy+8,2,1);if(L.pierce)P('#f2f2ff',14,hy+7,1,1);if(L.beard)P(L.beard,9,hy+7,5,3);if(L.must)P(L.hair,12,hy+7,3,1);if(L.goat)P(L.hair,12,hy+8,2,1);
    if(L.curly){P(L.hair,6,hy-1,8,1);P(L.hair,7,hy-2,3,1);P(L.hair,11,hy-2,2,1);P(L.hairHi,8,hy,1,1);P(L.hairHi,12,hy-1,1,1)}if(L.nosleeve)P(L.skin,9,12+bob,2,2);if(L.tat&&left){P('#39404a',9,15+bob,1,1);P('#39404a',10,16+bob,1,1);P('#5a4632',9,17+bob,2,1);P('#39404a',9,18+bob,1,1)}if(L.cargo&&!L.dress)P('#6a94c8',10,21,2,2);
    if(L.hat){P(L.hat,5,hy,11,2);P(L.hat,6,hy-3,8,3)}
    if(L.scarf){P(L.scarf,6,hy-1,8,3);P(L.scarf,6,hy+2,2,9)}
  }}
function personSpr(L,dir,f){const k=L.id+L.top+L.bottom+(L.shorts?'s':'')+dir+f;if(sprC[k])return sprC[k];
  const a=document.createElement('canvas');a.width=22;a.height=30;const c=a.getContext('2d');c.translate(1,1);paintPerson(c,L,dir==='l'?'r':dir,f,dir==='l');return sprC[k]=outline(a)}
function drawPerson(L,x,y,dir,f,sc){const s=personSpr(L,dir,f);x=Math.round(x);y=Math.round(y);sc=sc||1;
  g.fillStyle='rgba(0,0,0,.22)';g.fillRect(x-5*sc,y-1,10*sc,2);
  g.save();g.translate(x,y);g.scale(dir==='l'?-sc:sc,sc);g.drawImage(s,-11,-27);g.restore()}
// pessoa sentada (meio corpo)
function drawSeated(L,x,y){const s=personSpr(L,'d',0);g.drawImage(s,0,0,22,21,Math.round(x)-11,Math.round(y)-20,22,21)}

// --- Speak (salsicha preto e canela) ---
function paintSpeak(c,f,sleep){const P=mk(c),B='#26252b',B2='#3d3c44',T2='#b97a52',Br='#7a4630',K='#0e0d10';
  if(sleep){P(B,2,9,18,6);P(B2,5,9,11,2);P(B,15,7,8,7);P('#1a191e',14,8,3,6);P(T2,20,11,3,3);P(K,22,11,1,1);P(K,18,10,2,1);P(B,1,11,2,3);P(Br,5,14,3,1);P(Br,11,14,3,1)}
  else{P(B,1,4,2,5);P(B,2,8,2,2);P(B,3,8,15,5);P(B2,5,8,11,2);P(B,15,1,8,8);P(B2,17,1,4,1);P('#1a191e',14,3,3,7);
    P(T2,19,5,4,4);P(K,22,5,1,2);P(K,18,3,3,2);P('#fff',19,3,1,2);P(T2,18,2,2,1);P(T2,15,9,3,3);
    const a=f?1:0;P(Br,4,13,2,3-a);P(Br,7,13,2,2+a);P(Br,13,13,2,3-a);P(Br,16,13,2,2+a);P(K,20,8,2,1)}}
function speakSpr(f,sleep){const k='spk'+f+sleep;if(sprC[k])return sprC[k];const a=document.createElement('canvas');a.width=26;a.height=18;const c=a.getContext('2d');c.translate(1,1);paintSpeak(c,f,sleep);return sprC[k]=outline(a)}
function drawSpeak(x,y,flip,f,sleep,sc){const s=speakSpr(f?1:0,sleep?1:0);x=Math.round(x);y=Math.round(y);sc=sc||1;
  g.fillStyle='rgba(0,0,0,.2)';g.fillRect(x-9*sc,y-1,18*sc,2);g.save();g.translate(x,y);g.scale(flip?-sc:sc,sc);g.drawImage(s,-13,-17);g.restore();
  if(sleep&&sc===1){const t=time%2;T('z',x+8+t*3,y-18-t*5,{size:6+t*1.5,c:'#fff',alpha:1-t/2,i:1,sh:1})}}

// --- ícones 12x12 ---
const ICONS={
  book(P){P('#5c1420',2,1,9,10);P('#8a1f2d',1,1,9,10);P('#e9d9b0',9,2,1,8);P('#d9b24a',3,3,4,1);P('#d9b24a',3,5,3,1);P('#d9b24a',4,8,2,2)},
  medal(P){P('#c0392b',3,0,3,5);P('#2e6fc0',6,0,3,5);P('#b88a1a',3,5,6,6);P('#b88a1a',2,6,8,4);P('#f0c63c',3,6,6,4);P('#f0c63c',4,5,4,6);P('#fff3a0',5,6,2,2)},
  ball(P){P('#17101a',3,1,6,10);P('#17101a',1,3,10,6);P('#17101a',2,2,8,8);P('#f6e04a',3,2,6,8);P('#f6e04a',2,3,8,6);P('#2a6fd0',5,2,2,8);P('#fff',3,3,2,2);P('#e8552f',2,5,3,2);P('#e8552f',7,5,3,2)},
  gball(P){P('#7a5a0a',3,1,6,10);P('#7a5a0a',1,3,10,6);P('#7a5a0a',2,2,8,8);P('#f0c63c',3,2,6,8);P('#f0c63c',2,3,8,6);P('#d9a520',5,2,2,8);P('#fff8c8',3,3,2,2)},
  paw(P){const b='#7a4630';P(b,3,6,6,5);P(b,4,5,4,1);P(b,1,3,2,3);P(b,4,1,2,3);P(b,7,1,2,3);P(b,10,3,2,3);P('#b97a52',5,7,2,2)},
  tape(P){P('#17101a',0,2,12,9);P('#3a3540',1,3,10,7);P('#f4e8cf',2,4,8,3);P('#c0392b',2,4,8,1);P('#17101a',3,8,2,1);P('#17101a',7,8,2,1);P('#888',5,8,2,1)},
  phone(P){P('#17101a',3,0,6,12);P('#2a2a34',4,1,4,10);P('#7fd4ff',4,2,4,6);P('#fff',5,3,2,1);P('#888',5,9,2,1)},
  pizza(P){P('#b8742a',1,2,10,2);P('#f2c14a',2,4,8,2);P('#f2c14a',3,6,6,2);P('#f2c14a',4,8,4,2);P('#f2c14a',5,10,2,1);P('#fff6dc',3,4,2,1);P('#fff6dc',6,5,2,2);P('#fff6dc',5,8,1,1);P('#e8a23a',8,4,1,1)},
  bottle(P){P('#17101a',4,0,4,2);P('#2e86de',3,2,6,9);P('#7fc4ff',4,3,2,6);P('#fff',4,3,1,2)},
  phones(P){P('#222',2,1,8,2);P('#222',1,2,2,5);P('#222',9,2,2,5);P('#e84a6f',0,5,3,5);P('#e84a6f',9,5,3,5)},
  towel(P){P('#f4f4f4',1,3,10,7);P('#4fb0c6',1,4,10,1);P('#4fb0c6',1,8,10,1);P('#ddd',1,9,10,1)},
  glove(P){P('#333',3,2,6,8);P('#333',2,4,1,4);P('#e84a2f',3,7,6,2);P('#555',4,2,1,3);P('#555',6,2,1,3)},
  remote(P){P('#17101a',4,0,5,12);P('#33333d',5,1,3,10);P('#e33',6,2,1,1);P('#aaa',5,4,1,1);P('#aaa',7,4,1,1);P('#aaa',5,6,1,1);P('#aaa',7,6,1,1);P('#aaa',6,8,1,2)},
  bone(P){P('#f4ecd8',2,5,8,2);P('#f4ecd8',1,3,2,2);P('#f4ecd8',1,7,2,2);P('#f4ecd8',9,3,2,2);P('#f4ecd8',9,7,2,2);P('#d9cfb4',3,6,6,1)},
  cushion(P){P('#17101a',1,2,10,8);P('#d98a3a',2,3,8,6);P('#f0b05a',3,4,4,2);P('#b86a22',2,8,8,1)},
  note(P){P('#fff',5,1,2,8);P('#fff',7,1,3,2);P('#fff',2,7,4,3);P('#fff',3,6,2,5)},
  halter(P){P('#555',1,3,3,6);P('#555',8,3,3,6);P('#999',4,5,4,2);P('#777',1,4,3,1)},
  page(P){P('#17101a',2,0,8,12);P('#f4e8cf',3,1,6,10);P('#b8a078',4,3,4,1);P('#b8a078',4,5,4,1);P('#b8a078',4,7,3,1)},
  star(P){P('#ffd75a',5,0,2,12);P('#ffd75a',0,5,12,2);P('#ffd75a',3,3,6,6);P('#fff8c8',5,4,2,3)}
};
const icC={};
function iconCv(n){if(icC[n])return icC[n];const a=document.createElement('canvas');a.width=a.height=12;ICONS[n](mk(a.getContext('2d')));return icC[n]=a}
function icon(n,x,y,sc){sc=sc||1;g.drawImage(iconCv(n),Math.round(x),Math.round(y),12*sc,12*sc)}

function avatarPx(L){const k='av'+L.id+L.top;if(sprC[k])return sprC[k];const a=document.createElement('canvas');a.width=a.height=56;const c=a.getContext('2d');c.imageSmoothingEnabled=false;c.fillStyle=L.bg||'#3d3a4c';c.fillRect(0,0,56,56);c.fillStyle='rgba(255,255,255,.08)';c.fillRect(0,0,56,28);c.drawImage(personSpr(L,'d',0),3,0,16,16,0,0,56,56);return sprC[k]=a}
function dogAvatarPx(){if(sprC.avdog)return sprC.avdog;const a=document.createElement('canvas');a.width=a.height=56;const c=a.getContext('2d');c.imageSmoothingEnabled=false;c.fillStyle='#6a4a30';c.fillRect(0,0,56,56);c.drawImage(speakSpr(0,0),11,0,14,14,0,0,56,56);return sprC.avdog=a}
// --- Jetta 2011 cinza-chumbo (vista lateral, sedã de três volumes) ---
function jettaCv(){if(sprC.jetta)return sprC.jetta;const a=document.createElement('canvas');a.width=68;a.height=24;const c=a.getContext('2d');c.translate(1,1);const P=mk(c),A='#7d8189',B='#5b5e65',C='#44474e',D='#2a2c31',G1='#18222e',G2='#3f5a74';
  P(B,22,2,21,1);P(B,20,3,25,1);for(let y=4;y<=8;y++){const x0=19-(y-4),x1=46+(y-4)*1.4;P(B,x0,y,x1-x0,1)}
  P(A,3,9,60,1);P(B,2,10,62,5);P(C,2,14,62,3);P(D,4,17,58,1);P(A,3,10,60,1);P('#8f939b',20,3,24,1);
  P(G1,19,5,3,4);P(G1,23,4,9,5);P(G1,34,4,10,5);P(G1,45,5,4,4);P(G1,49,7,2,2);P(B,22,4,1,5);P(B,32,4,2,5);P(B,44,4,1,5);P(G2,24,4,3,1);P(G2,25,5,2,1);P(G2,35,4,4,1);P(G2,36,5,2,1);P(G2,46,6,2,1);
  P(D,33,9,1,7);P(D,46,10,1,6);P(D,21,10,1,6);P('#c9cdd4',29,11,2,1);P('#c9cdd4',41,11,2,1);P(B,49,6,2,2);P(D,50,8,2,1);
  P('#f6f1da',60,10,3,2);P('#ffe9a0',62,10,2,2);P('#15161a',62,13,2,2);P('#c9cdd4',60,12,4,1);P('#b3262b',2,10,2,3);P('#e8554f',2,10,1,1);P(D,2,15,3,2);P(D,60,15,4,2);
  P('#15161a',7,12,11,6);P('#15161a',47,12,11,6);return sprC.jetta=outline(a,'#101014')}
function wheel(x,y,spin){R('#101014',x-4,y-3,9,7);R('#101014',x-3,y-4,7,9);R('#26272c',x-3,y-3,7,7);R('#b9bdc5',x-2,y-2,5,5);R('#6b6f77',x-1,y-1,3,3);const k=spin?((time*14)|0)%2:0;if(k){R('#26272c',x-2,y-2,1,1);R('#26272c',x+2,y+2,1,1);R('#26272c',x+2,y-2,1,1);R('#26272c',x-2,y+2,1,1)}else{R('#26272c',x,y-2,1,1);R('#26272c',x,y+2,1,1);R('#26272c',x-2,y,1,1);R('#26272c',x+2,y,1,1)}}
function drawJetta(x,y,o){o=o||{};x=Math.round(x);y=Math.round(y);g.save();g.translate(x+34,y+12);if(o.rot)g.rotate(o.rot);g.translate(-34,-12);if(!o.noShadow)R('rgba(0,0,0,.28)',4,21,60,3);g.drawImage(jettaCv(),0,0);wheel(13,18,o.spin);wheel(53,18,o.spin);if(o.lights){g.globalCompositeOperation='lighter';glow(g,70,12,22,'rgba(255,240,190,.5)');g.globalCompositeOperation='source-over'}g.restore()}
ICONS.esfirra=P=>{const k='#17101a',a='#d9a55a',b='#f0c98a';P(k,5,1,2,1);P(k,4,2,4,1);P(k,3,3,6,2);P(k,2,5,8,2);P(k,1,7,10,3);P(a,5,2,2,1);P(a,4,3,4,2);P(a,3,5,6,2);P(a,2,7,8,2);P(b,5,3,2,1);P(b,4,5,2,1);P('#7a3d22',5,5,2,3);P('#9a5330',5,6,2,1)};
ICONS.plate=P=>{P('#17101a',1,7,10,3);P('#f4f1ea',2,7,8,2);P('#d8d4ca',2,9,8,1)};
const BOOKC=['#8a1f2d','#2e4a7a','#3e6b4a','#7a5a2a','#5a3a6a','#a8842a','#3a3a44','#8a4a2a','#2a5a5a','#6a2a3a'];
function shelf(P,x,y,w,rows,r){for(let i=0;i<rows;i++){const yy=y+i*18;P('#22140e',x,yy,w,15);let bx=x+1;while(bx<x+w-3){const bw=2+(r()*3|0),bh=8+(r()*6|0);if(r()<.07){bx+=3;continue}
  P(BOOKC[r()*BOOKC.length|0],bx,yy+15-bh,bw,bh);if(r()<.35)P('#d9b24a',bx,yy+17-bh,bw,1);bx+=bw}P('#5a3a22',x-2,yy+15,w+4,3)}}
function glow(c,x,y,r,col){const gr=c.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,col);gr.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=gr;c.fillRect(x-r,y-r,r*2,r*2)}
function vgrad(c,x,y,w,h,a,b){const gr=c.createLinearGradient(0,y,0,y+h);gr.addColorStop(0,a);gr.addColorStop(1,b);c.fillStyle=gr;c.fillRect(x,y,w,h)}
