# REAL ESPORTES — V4 FINAL QA / MOBILE / PERFORMANCE / SECURITY

Esta NÃO é uma nova versão de design.

A arquitetura e direção visual da V3 estão aprovadas.

NÃO reconstrua o site.
NÃO crie novas seções.
NÃO troque as fotografias atuais, salvo se estritamente necessário por problema técnico.
NÃO aumente o comprimento da página.

Leia:
- CLAUDE.md
- V2_REVIEW.md
- V3_UX.md
- código atual

Objetivo desta rodada:

FINAL POLISH.

Corrigir:
- UX mobile;
- pequenos problemas responsivos;
- acessibilidade;
- performance;
- segurança front-end;
- metadata;
- limpeza de produção.

Priorize implementação.
Não narre o processo.
Não produza relatório extenso.

==================================================
1. PRESERVAR A V3
==================================================

A estrutura aprovada é:

HERO
CHUTEIRAS EM DESTAQUE
QUAL É O SEU JOGO?
A REAL
ENCONTRE A REAL
FOOTER

NÃO remover ou adicionar grandes seções.

A experiência mobile já está próxima da meta de 4–5 telas.

Não alongar.

==================================================
2. MOBILE BAR — PRIORIDADE ALTA
==================================================

A barra mobile atualmente pode sobrepor conteúdo/CTAs.

Refinar.

No Hero:
NÃO mostrar a mobile bottom bar.

O Hero já possui CTAs próprios.

Após o usuário sair do Hero:
mostrar a barra suavemente.

Ela deve continuar acessível no restante da experiência.

Reduzir sua altura visual se possível, mantendo boa área de toque.

Objetivo aproximado:
58–64px + safe area.

Nunca permitir que a barra cubra um CTA importante.

Adicionar scroll-padding-bottom adequado.

Quando um CTA principal do Finder estiver visível próximo ao rodapé:
avaliar reduzir ou ocultar temporariamente a bottom bar.

Use IntersectionObserver se necessário.

Nada de lógica pesada.

Respeitar:
env(safe-area-inset-bottom).

==================================================
3. MOBILE HEADER
==================================================

Manter header simples no mobile.

Reduzir levemente sua presença se isso melhorar espaço útil.

Não mostrar navegação desktop em tablet estreito.

Mover o breakpoint da navegação completa aproximadamente para:

900–960px

Escolha o valor que produzir melhor resultado.

Em 768/820px:
preferir experiência mobile/tablet limpa.

==================================================
4. FINDER
==================================================

Preservar completamente o conceito.

Refinar mobile para que conteúdo e CTA apareçam mais rapidamente.

Pode reduzir moderadamente:
- altura da imagem;
- gaps;
- padding vertical;

SEM apertar visualmente.

Trocar textos como:

"Chuteiras para campo, society e futsal. Hoje: Campo."

por:

"Chuteiras para Campo."

"Chuteiras para Society."

"Chuteiras para Futsal."

Para Camisas/Tênis/Acessórios manter texto curto.

==================================================
5. ACESSIBILIDADE DO FINDER
==================================================

A implementação atual usa semantics de tabs sem implementar o pattern completo.

NÃO precisamos de tabs.

Refatorar os seletores para buttons normais com:

aria-pressed="true|false"

Criar grupos semanticamente compreensíveis.

Não utilizar role="tablist"/role="tab" se não houver implementação completa de tabs.

Quando categoria/modalidade mudar:
atualizar aria-pressed corretamente.

Criar uma região de resultado com:

aria-live="polite"

para informar mudanças relevantes sem interromper o usuário.

Visual não deve mudar significativamente.

==================================================
6. TOUCH TARGETS
==================================================

Aumentar áreas clicáveis no mobile sem deixar componentes visualmente gigantes.

Preferir aproximadamente 44px de área útil quando possível para:

- chips;
- setas do rail;
- links "Consultar";
- ações secundárias.

Pode aumentar padding invisível/estrutural.

Não alterar dramaticamente o design.

==================================================
7. CONTRASTE NO FUNDO CLARO
==================================================

A seção A REAL possui dourado sobre off-white com contraste insuficiente para alguns textos pequenos.

Criar variável específica, por exemplo:

--color-accent-on-light

Usar um dourado mais escuro aproximadamente na região:

#806510

ou outro valor visualmente equivalente que atinja contraste WCAG AA para texto normal sobre:

#F4F2ED

Não alterar o dourado principal utilizado sobre fundo preto.

==================================================
8. RAIL DE CHUTEIRAS
==================================================

Preservar layout e scroll-snap.

Manter swipe nativo mobile.

Manter alternativa por botões/teclado.

Aumentar setas para área de toque confortável.

No desktop:
evitar native image drag interferindo com o drag do rail.

Pode usar:
draggable="false"
ou tratamento equivalente.

Não adicionar biblioteca.

==================================================
9. PERFORMANCE — PRIORIDADE MUITO ALTA
==================================================

Não trocar fotografias.

OTIMIZAR as existentes.

O site atualmente possui imagens muito maiores que a área onde são exibidas.

Criar versões dimensionadas para uso real.

Preferir:
- WebP quando resultar em redução real;
- JPEG otimizado quando WebP não trouxer vantagem;
- AVIF somente se houver benefício real e fallback adequado.

NÃO converter cegamente tudo.

Objetivo:
reduzir fortemente payload mantendo qualidade visual.

Criar srcset/sizes quando fizer sentido.

Especialmente:

HERO:
versões mobile e desktop adequadas.

RAIL:
não carregar imagens 1600px para cards de ~300px.

INSTAGRAM:
usar arquivos adequados ao pequeno tamanho exibido.

EDITORIAL/LOJA:
usar resolução compatível com área real.

==================================================
10. HERO / LCP
==================================================

Hero deve continuar imagem principal.

Configurar corretamente:

loading="eager"
fetchpriority="high"

Adicionar width/height ou estratégia equivalente contra layout shift quando apropriado.

Usar srcset/sizes se houver variantes.

Não lazy-load Hero.

Não usar preload redundante se a imagem já estiver descoberta imediatamente pelo HTML.

==================================================
11. LAZY LOADING
==================================================

Imagens abaixo da dobra:

loading="lazy"
decoding="async"

Não carregar imagens desnecessariamente antes de o usuário se aproximar da seção.

Finder:
evitar flash/área vazia ao trocar imagem.

Preferir:
- carregar nova imagem;
- aguardar load/decode;
- então executar crossfade.

Não carregar dezenas de assets antecipadamente.

==================================================
12. LIMPEZA DE ASSETS
==================================================

Detectar imagens não utilizadas pela V3.

Remover apenas assets comprovadamente sem referência.

NÃO remover:
assets futuros explicitamente necessários.

Manter projeto limpo.

==================================================
13. GOOGLE FONTS
==================================================

Não redesenhar tipografia nesta rodada.

Manter visual.

Evitar requests/pesos desnecessários.

Não adicionar novas famílias.

Caso seja possível reduzir pesos sem alterar o visual, fazer.

Não introduzir dependências adicionais.

==================================================
14. SECURITY — INLINE CODE
==================================================

Remover JavaScript inline do HTML.

Atualmente o fallback do logo utiliza onerror inline.

Trocar por addEventListener em JS.

Remover também style="" inline relacionado ao fallback.

Usar classes CSS.

Objetivo:
permitir CSP restritiva sem unsafe-inline para JavaScript.

==================================================
15. CONTENT SECURITY POLICY
==================================================

Depois de remover inline JS/style incompatíveis, implementar CSP via:

<meta http-equiv="Content-Security-Policy">

imediatamente no head antes de recursos externos relevantes.

Criar política mínima compatível com o projeto atual.

Referência conceitual:

default-src 'self';
script-src 'self';
style-src 'self' https://fonts.googleapis.com;
font-src https://fonts.gstatic.com;
img-src 'self' data:;
media-src 'self';
connect-src 'none';
object-src 'none';
base-uri 'self';
form-action 'none';
upgrade-insecure-requests;

VALIDAR antes de finalizar.

Não adicionar unsafe-eval.

Evitar unsafe-inline.

Se alguma diretiva quebrar recurso legítimo, corrigir a causa, não simplesmente liberar tudo.

==================================================
16. REFERRER POLICY
==================================================

Adicionar:

<meta name="referrer" content="strict-origin-when-cross-origin">

==================================================
17. LINKS EXTERNOS
==================================================

Garantir que todos os links com target="_blank" tenham:

rel="noopener noreferrer"

Validar URLs configuráveis antes de atribuí-las.

Aceitar somente protocolos seguros apropriados.

WhatsApp:
normalizar número para dígitos antes de criar URL.

Maps:
não aceitar javascript: ou protocolo inseguro.

==================================================
18. PROTÓTIPO NÃO INDEXÁVEL
==================================================

Este projeto ainda é um protótipo não oficial.

Adicionar temporariamente:

<meta name="robots" content="noindex,nofollow,noarchive">

Adicionar comentário no código:

<!-- REMOVER noindex se o projeto se tornar o site oficial -->

NÃO criar robots.txt bloqueando tudo, pois o meta noindex deve poder ser lido.

==================================================
19. OPEN GRAPH
==================================================

Preservar metadata atual.

Preparar corretamente:

og:title
og:type
og:description
og:locale
og:site_name
og:image
og:image:alt

Adicionar placeholder/configuração clara para:

og:url

Como ainda não existe URL pública definitiva:
NÃO inventar domínio.

Depois do deploy será substituído pela URL absoluta do GitHub Pages.

Pode adicionar:

twitter:card = summary_large_image

sem inventar perfil Twitter.

==================================================
20. PRIVACIDADE / COOKIES
==================================================

NÃO criar cookie banner nesta versão.

O projeto atualmente não deve adicionar:

Analytics
Meta Pixel
cookies
localStorage
sessionStorage
tracking
fingerprinting

Não criar trackers "só para parecer site real".

Não criar popup de consentimento sem necessidade.

NÃO criar Política de Privacidade fictícia com dados inventados.

Deixar para a versão oficial quando controlador/contatos/serviços reais estiverem definidos.

==================================================
21. SEM NOVOS TRACKERS
==================================================

Proibido nesta rodada:

Google Analytics
GTM
Meta Pixel
TikTok Pixel
Hotjar
Microsoft Clarity
scripts publicitários.

Objetivo é manter:
zero tracking.

==================================================
22. PUBLIC REPOSITORY HYGIENE
==================================================

O projeto será potencialmente hospedado em GitHub Pages.

Adicionar ao .gitignore os arquivos internos de processo:

CLAUDE.md
V2_REVIEW.md
V3_UX.md
V4_QA_SECURITY.md

Não deletar os arquivos locais.

Apenas impedir inclusão acidental se ainda não estiverem rastreados pelo Git.

Nunca inserir:
API keys
tokens
senhas
credenciais
segredos

no frontend ou repositório.

==================================================
23. CSS CLEANUP
==================================================

Depois das mudanças:

remover regras mortas;
não criar dezenas de overrides;
manter custom properties organizadas;
manter breakpoints simples;
não aumentar complexidade desnecessariamente.

==================================================
24. JS CLEANUP
==================================================

Manter Vanilla JS.

Não adicionar dependências.

Revisar:
- listeners duplicados;
- funções não utilizadas;
- manipulações inseguras;
- erros silenciosos;
- lógica antiga da V2/V3.

Não usar innerHTML para dados configuráveis.

Preferir textContent.

==================================================
25. HTML
==================================================

Manter semântico.

Revisar:
- headings;
- alt;
- aria;
- links;
- buttons;
- skip link;
- focus-visible;
- lang;
- viewport;
- title;
- meta description.

Não alterar conteúdo visual aprovado sem motivo.

==================================================
26. FOOTER MOBILE
==================================================

Compactar se houver espaço vertical desnecessário.

Não transformar em footer institucional grande.

Manter:
Real Esportes
Instagram
copyright

Privacidade NÃO será adicionada ainda nesta versão de protótipo.

==================================================
27. TESTE MOBILE OBRIGATÓRIO
==================================================

Renderizar e revisar:

375 × 812
390 × 844
430 × 932

Testar especificamente:

- Hero;
- entrada da bottom bar;
- rail;
- swipe;
- setas;
- Finder;
- troca de categorias;
- Campo/Society/Futsal;
- CTA;
- bottom bar;
- A Real;
- Encontre;
- Instagram;
- footer.

Nenhum CTA deve ficar permanentemente escondido atrás da bottom bar.

Nenhum overflow horizontal acidental.

==================================================
28. TABLET
==================================================

Testar:

768 × 1024
820 × 1180

Não mostrar header desktop apertado.

Não misturar layout desktop prematuramente.

==================================================
29. DESKTOP
==================================================

Testar:

1280
1440
1920

Preservar visual atual.

Esta rodada é mobile-first, não redesenho desktop.

==================================================
30. ACCESSIBILITY QA
==================================================

Testar navegação apenas com teclado.

Verificar:
Tab
Shift+Tab
Enter
Space
Arrow keys onde aplicável.

Focus precisa estar sempre visível.

Testar prefers-reduced-motion.

Nenhuma informação essencial pode depender de hover.

==================================================
31. BROWSER / CONSOLE QA
==================================================

Antes de terminar:

zero erros JS no console;
zero imagens quebradas;
zero 404 evitável;
zero href inválido;
zero asset morto carregado;
zero overflow horizontal.

==================================================
32. PERFORMANCE QA
==================================================

Se o ambiente permitir, executar Lighthouse ou auditoria equivalente.

Prioridades:

Performance
Accessibility
Best Practices

Não perseguir score 100 destruindo o design.

Corrigir problemas com impacto real.

Objetivo de Core Web Vitals:

LCP <= 2.5s
CLS <= 0.1
INP <= 200ms

como referência.

==================================================
33. HTML VALIDATION
==================================================

Validar markup com ferramenta equivalente ao Nu HTML Checker/W3C se disponível.

Corrigir erros reais de HTML.

Não perder tempo com avisos cosméticos sem consequência.

==================================================
34. NÃO ALTERAR
==================================================

NÃO:
- criar nova identidade;
- adicionar e-commerce;
- criar backend;
- criar login;
- criar formulário;
- criar cookie popup;
- instalar framework;
- instalar Bootstrap;
- instalar Tailwind;
- instalar React;
- instalar bibliotecas de slider;
- aumentar conteúdo;
- trocar layout aprovado.

==================================================
35. CRITÉRIO FINAL

Ao terminar, a V4 deve parecer visualmente quase igual à V3.

A diferença deve ser percebida principalmente em:

- suavidade;
- mobile;
- interação;
- rapidez;
- acessibilidade;
- robustez;
- segurança;
- acabamento.

Se a alteração chamar mais atenção que o design:
provavelmente foi exagerada.

==================================================
36. EXECUÇÃO

1. Leia arquivos de contexto.
2. Inspecione código V3.
3. Faça backup mental/diff das alterações.
4. Corrija mobile bar.
5. Corrija tablet breakpoint.
6. Refine Finder.
7. Corrija accessibility semantics.
8. Corrija contraste.
9. Otimize imagens.
10. Remova assets mortos.
11. Remova inline JS/style.
12. Adicione CSP e referrer policy.
13. Adicione noindex temporário.
14. Refine Open Graph.
15. Adicione .gitignore para arquivos internos.
16. Revise HTML/CSS/JS.
17. Renderize mobile/tablet/desktop.
18. Teste interações.
19. Verifique console/rede.
20. Corrija problemas encontrados.
21. Finalize.

Ao terminar responda SOMENTE:

- principais correções;
- peso antes/depois dos assets;
- resultado dos testes mobile;
- problemas ainda pendentes;
- dados reais ainda necessários.

Sem relatório extenso.