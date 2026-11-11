import glob,os
d=os.path.dirname(os.path.abspath(__file__))
js='\n'.join(open(f,encoding='utf-8').read() for f in sorted(glob.glob(d+'/src/*.js')))
html=open(d+'/template.html',encoding='utf-8').read().replace('/*__JS__*/',js)
os.makedirs(d+'/dist',exist_ok=True)
open(d+'/dist/index.html','w',encoding='utf-8').write(html);open(d+'/dist/game.js','w',encoding='utf-8').write(js)
print(len(html),'bytes')
