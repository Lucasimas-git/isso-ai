# Real Esportes — Protótipo do site

Site-vitrine institucional, mobile-first, HTML/CSS/JS puro (sem frameworks). Conversão via WhatsApp.

## Executar localmente

Abra `index.html` diretamente no navegador, ou sirva a pasta com qualquer servidor estático:

```
python -m http.server 8000
```

e acesse `http://localhost:8000`.

## Estrutura

```
index.html
css/styles.css
js/config.js     ← dados editáveis (WhatsApp, Instagram, endereço, horários)
js/main.js
assets/images/    ← fotos reais (Pexels/Unsplash, uso livre), genéricas até termos material próprio
assets/images/_unused/ ← assets sem uso na V3/V4 (mantidos para referência; podem ser apagados)
assets/icons/
assets/videos/    ← opcional: coloque hero.mp4 aqui e ative CONFIG.hero.videoEnabled em js/config.js
```

## Placeholders a substituir

- `js/config.js`: número real do WhatsApp (`whatsapp.numero`), endereço, horários e link do Google Maps (`loja.*`) — vazios por padrão; cada campo some do site até ser preenchido.
- `assets/images/logo-real.png`: logo oficial (ausente → fallback tipográfico ativo).
- `assets/images/loja-fachada.jpg`: fotografia genérica de referência (não é a loja real) — substituir quando houver fotos próprias.
- Demais imagens em `assets/images/`: fotografia esportiva genérica (Pexels/Unsplash), coerente por seção, usada como direção visual até termos fotos da Real Esportes. Já otimizadas/redimensionadas para o tamanho real de exibição (`hero.jpg` tem variante `hero-mobile.jpg` via `srcset`).
- Texto de "A Real" (Quem Somos): institucional, aguardando história oficial.
- `<meta property="og:url">`: adicionar após o deploy, com a URL real do GitHub Pages (comentário no `index.html`).
- `<meta name="robots" content="noindex,...">`: remover quando o site deixar de ser protótipo.

## Publicar no GitHub Pages

Caminhos relativos já preparados. Basta subir o repositório e ativar Pages na branch desejada. `CLAUDE.md` e os arquivos `V*_*.md` estão no `.gitignore` (não fazem parte do site).
