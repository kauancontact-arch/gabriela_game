// Servidor estático mínimo (sem dependências) para o Railway.
const http = require('http'), fs = require('fs'), path = require('path'), zlib = require('zlib');
const html = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'));
const gz = zlib.gzipSync(html);
http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/health') { res.writeHead(200, { 'content-type': 'text/plain' }); return res.end('ok'); }
  if (/^\/media\/[\w.-]+\.(mp3|mpeg|m4a|json|lrc|txt)$/.test(url)) {
    const f = path.join(__dirname, decodeURIComponent(url)), ext = url.split('.').pop();
    if (!fs.existsSync(f)) { res.writeHead(404); return res.end(); }
    const type = { json: 'application/json', txt: 'text/plain; charset=utf-8', lrc: 'text/plain; charset=utf-8', m4a: 'audio/mp4' }[ext] || 'audio/mpeg';
    const size = fs.statSync(f).size, m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
    const h = { 'content-type': type, 'accept-ranges': 'bytes', 'cache-control': 'public, max-age=3600' };
    if (m) {
      let a = m[1] === '' ? size - +m[2] : +m[1], b = m[1] !== '' && m[2] !== '' ? +m[2] : size - 1;
      if (a < 0) a = 0; if (b >= size) b = size - 1;
      if (a > b) { res.writeHead(416, { 'content-range': 'bytes */' + size }); return res.end(); }
      res.writeHead(206, Object.assign(h, { 'content-range': 'bytes ' + a + '-' + b + '/' + size, 'content-length': b - a + 1 }));
      return req.method === 'HEAD' ? res.end() : fs.createReadStream(f, { start: a, end: b }).pipe(res);
    }
    res.writeHead(200, Object.assign(h, { 'content-length': size }));
    return req.method === 'HEAD' ? res.end() : fs.createReadStream(f).pipe(res);
  }
  if (url !== '/' && url !== '/index.html') { res.writeHead(302, { location: '/' }); return res.end(); }
  const h = { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache', 'x-robots-tag': 'noindex' };
  if (/\bgzip\b/.test(req.headers['accept-encoding'] || '')) { h['content-encoding'] = 'gzip'; res.writeHead(200, h); return res.end(gz); }
  res.writeHead(200, h); res.end(html);
}).listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('GABRIELA no ar na porta', process.env.PORT || 3000));
