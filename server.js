// Servidor estático mínimo (sem dependências) para o Railway.
const http = require('http'), fs = require('fs'), path = require('path'), zlib = require('zlib');
const html = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'));
const gz = zlib.gzipSync(html);
http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/health') { res.writeHead(200, { 'content-type': 'text/plain' }); return res.end('ok'); }
  if (/^\/media\/[\w.-]+\.(mp3|m4a|json)$/.test(url)) {
    const f = path.join(__dirname, url);
    if (fs.existsSync(f)) { res.writeHead(200, { 'content-type': url.endsWith('.json') ? 'application/json' : 'audio/mpeg', 'accept-ranges': 'none' }); return fs.createReadStream(f).pipe(res); }
    res.writeHead(404); return res.end();
  }
  if (url !== '/' && url !== '/index.html') { res.writeHead(302, { location: '/' }); return res.end(); }
  const h = { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache', 'x-robots-tag': 'noindex' };
  if (/\bgzip\b/.test(req.headers['accept-encoding'] || '')) { h['content-encoding'] = 'gzip'; res.writeHead(200, h); return res.end(gz); }
  res.writeHead(200, h); res.end(html);
}).listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('GABRIELA no ar na porta', process.env.PORT || 3000));
