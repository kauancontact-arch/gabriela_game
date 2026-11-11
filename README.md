# GABRIELA — Entre Páginas e Memórias

Aventura narrativa em pixel art retrô, feita para celular na vertical (só toque). JavaScript puro (Canvas + Web Audio), sem dependências.
Uma história original de Kauan.

- `src/` — código do jogo · `template.html` — página base · `build.py` — gera `dist/index.html`
- `server.js` — servidor estático usado no Railway (`npm start`)

## Músicas e letras
O jogo não inclui as faixas nem as letras. O player procura `media/imprevisto.mp3`, `media/enigma.mp3` e os arquivos de letra
`media/imprevisto.json` / `media/enigma.json` (gerados pelo botão "Copiar dados para publicar" no menu do jogo).
Sem eles, toca uma faixa instrumental demonstrativa.
