# REAL ESPORTES — V3 UX / COMPACTAÇÃO / EXPERIÊNCIA

Esta é a terceira evolução do projeto existente da Real Esportes.

NÃO reconstrua o projeto do zero.

Leia integralmente antes de editar:

1. CLAUDE.md
2. V2_REVIEW.md
3. este V3_UX.md
4. código atual do projeto

A V2 estabeleceu uma boa direção visual.

Nesta rodada, o principal objetivo NÃO é trocar identidade nem refazer imagens.

O objetivo agora é:

- reduzir drasticamente o comprimento vertical;
- melhorar UX principalmente no mobile;
- melhorar ritmo da página;
- criar interações mais interessantes;
- reduzir redundância;
- aumentar velocidade percebida;
- preservar a boa direção visual já alcançada;
- transformar o projeto de "site institucional longo" em uma experiência semelhante a um link-in-bio premium / site-vitrine interativo.

Priorize seus tokens na implementação.

Não narre todas as alterações.
Não faça relatório longo.
Não peça confirmação para decisões seguras.

==================================================
1. NOVO PRINCÍPIO DO SITE
==================================================

Este projeto não deve se comportar como um e-commerce completo.

Também não deve parecer um site institucional longo.

A experiência ideal é:

Instagram
→ site
→ descoberta rápida
→ interação
→ WhatsApp / Instagram / localização.

O usuário deve conseguir compreender a Real Esportes em poucos segundos.

META:

No mobile, a página inteira deve transmitir sensação aproximada de apenas 4 a 5,5 alturas de tela.

Não interprete isso de maneira rígida por pixels.

O princípio é:

cada scroll precisa entregar algo novo.

Evitar:
- seções redundantes;
- enormes espaços vazios;
- uma viewport inteira para pouca informação;
- conteúdo repetido;
- cards excessivamente altos;
- texto institucional longo.

==================================================
2. INSPIRAÇÕES DE UX
==================================================

Use apenas princípios, não copie visualmente nenhuma marca.

ON RUNNING:
- horizontal rails;
- mobile-first;
- cards parcialmente visíveis;
- fotografia como protagonista.

PUMA:
- campanhas fortes seguidas de produto;
- produto apresentado visualmente;
- ritmo entre editorial e produto.

UMBRO:
- lógica natural do futebol:
  Campo
  Society
  Futsal
- chuteiras como categoria importante.

PRO:DIRECT:
- escolha de produto baseada no tipo de jogo/superfície.

RED BULL:
- ritmo;
- movimento;
- horizontal rails;
- alternância entre blocos densos e respiros;
- bastante conteúdo sem transformar cada item em longa seção vertical.

APPLE:
- uma mensagem principal por bloco;
- poucos CTAs;
- hierarquia extremamente clara.

ARC'TERYX:
- lógica de product finder;
- ajudar o usuário a chegar rapidamente ao produto correto.

Não copiar:
- identidade;
- layout específico;
- componentes proprietários;
- textos;
- código.

==================================================
3. NOVA ARQUITETURA

Reduzir a página atual para aproximadamente:

01 HERO

02 CHUTEIRAS EM DESTAQUE

03 QUAL É O SEU JOGO? / EXPLORE A REAL

04 A REAL

05 ENCONTRE A REAL

06 FOOTER MÍNIMO

Eliminar ou fundir as seções antigas necessárias para atingir essa arquitetura.

Não simplesmente esconder conteúdo com CSS.

Refatorar estruturalmente.

==================================================
4. HERO

Preservar a boa direção visual existente.

No mobile:

altura aproximada:
70–85svh

Evitar obrigatoriamente 100vh se gerar excesso de comprimento.

Usar:

min-height baseado em svh/dvh quando apropriado.

Conteúdo:

REAL ESPORTES

VIVA
O JOGO.

Linha pequena:

Chuteiras · Camisas · Tênis · Acessórios

CTAs:

Falar no WhatsApp
Explorar a Real

Manter fotografia como protagonista.

Não adicionar texto longo.

==================================================
5. HERO — MOTION

Criar uma entrada refinada.

Não criar loading screen.

Sequência aproximada:

imagem:
scale(1.025) → scale(1)

label:
fade

título:
fade + translateY leve

descrição:
fade

CTAs:
fade

Tempo total aproximado:
700–1000ms

Usar delays sutis.

Nada teatral.

Nada que atrase o acesso ao site.

Respeitar prefers-reduced-motion.

==================================================
6. NOVA SEÇÃO: CHUTEIRAS EM DESTAQUE

Logo após o Hero, criar:

CHUTEIRAS
EM DESTAQUE

Esta seção será uma das principais referências visuais do site.

IMPORTANTE:

Os cards têm formato VERTICAL / RETRATO.

O deslocamento do carrossel é HORIZONTAL.

NÃO criar carrossel cujo scroll principal seja vertical.

O scroll vertical pertence à página.

==================================================
7. CHUTEIRAS — MOBILE

No mobile:

usar horizontal rail nativo.

Implementar preferencialmente com:

display: flex ou grid-auto-flow

overflow-x: auto

scroll-snap-type: x mandatory

scroll-snap-align: start

overscroll-behavior-x: contain

-webkit-overflow-scrolling: touch

Cada card deve ocupar aproximadamente:

78–86% da largura disponível.

Mostrar propositalmente:

10–15% do próximo card.

Isso deve comunicar visualmente:

"há mais conteúdo para o lado".

Não precisar escrever instrução grande como:

"arraste para o lado".

Pode haver uma pequena indicação/arrow/progress visual.

==================================================
8. CHUTEIRAS — DESKTOP

No desktop:

mostrar aproximadamente:

3 a 4 cards simultaneamente

dependendo da largura.

O rail pode ter:

- setas discretas;
- drag com mouse;
- trackpad;
- scroll horizontal.

NÃO sequestrar o wheel vertical do usuário.

Não transformar scroll vertical em horizontal automaticamente.

Não criar navegação confusa.

==================================================
9. CHUTEIRAS — CONTEÚDO

Utilizar aproximadamente 4–5 fotografias genéricas representativas de chuteiras.

Podem ser imagens atuais adequadas ou novas imagens reais/gratuitas se necessário.

NÃO inventar:

marca;
modelo;
preço;
estoque;
tamanho;
tecnologia;
linha;
coleção.

Cards podem utilizar tags simples como:

CAMPO

SOCIETY

FUTSAL

Não é necessário inventar um produto para cada foto.

Objetivo principal:
apresentação visual.

CTA discreto:

Consultar →

ou:

Ver chuteiras →

Ao clicar:

WhatsApp contextualizado.

Exemplo:

"Olá! Vim pelo site da Real Esportes e gostaria de conhecer as chuteiras disponíveis."

Se houver tag específica:

"Olá! Vim pelo site da Real Esportes e gostaria de conhecer as chuteiras de Society disponíveis."

==================================================
10. NÃO CRIAR UM CARROSSEL POR CATEGORIA

REGRA IMPORTANTE.

NÃO criar:

carrossel de chuteiras
+
carrossel de camisas
+
carrossel de tênis
+
carrossel de acessórios.

Isso deixaria o site novamente longo e com aparência de e-commerce.

Apenas CHUTEIRAS terá o grande showcase visual.

As demais categorias serão incorporadas na experiência compacta da seção seguinte.

==================================================
11. SUBSTITUIR SEÇÕES REDUNDANTES

O novo carrossel de chuteiras deve SUBSTITUIR conteúdo antigo.

Não apenas adicioná-lo à página existente.

Remover/fundir:

- antiga seção longa de Campo/Society/Futsal;
- parte da seção antiga de Destaques;
- quaisquer blocos que cumpram função semelhante.

A página precisa FICAR MENOR depois desta alteração, não maior.

==================================================
12. QUAL É O SEU JOGO?

Criar uma experiência interativa compacta.

Título:

QUAL É
O SEU JOGO?

ou:

ENCONTRE
O SEU JOGO.

Texto mínimo.

Primeira seleção:

O QUE VOCÊ PROCURA?

Opções:

CHUTEIRAS
CAMISAS
TÊNIS
ACESSÓRIOS

Usar tabs/chips/botões com excelente design.

Não parecer formulário.

Não parecer filtro de e-commerce.

Deve parecer uma experiência de marca.

==================================================
13. COMPORTAMENTO DAS CATEGORIAS

Ao selecionar uma categoria:

- atualizar fotografia;
- atualizar pequeno texto;
- atualizar CTA;
- atualizar estado ativo;
- usar transição suave.

CHUTEIRAS:

mostrar segunda escolha:

ONDE VOCÊ JOGA?

CAMPO
SOCIETY
FUTSAL

Para:

CAMISAS
TÊNIS
ACESSÓRIOS

não exigir seleção de Campo/Society/Futsal.

Mostrar diretamente CTA correspondente.

==================================================
14. FINDER — WHATSAPP

A seleção deverá gerar uma mensagem contextualizada.

Exemplo:

Categoria:
CHUTEIRAS

Modalidade:
SOCIETY

Mensagem:

"Olá! Vim pelo site da Real Esportes. Estou procurando chuteiras para Society e gostaria de conhecer os modelos disponíveis."

CAMISAS:

"Olá! Vim pelo site da Real Esportes e gostaria de conhecer as camisas esportivas disponíveis."

TÊNIS:

mensagem correspondente.

ACESSÓRIOS:

mensagem correspondente.

Centralizar lógica.

Não espalhar strings ou telefone em vários arquivos desnecessariamente.

==================================================
15. FINDER — TRANSIÇÕES

Ao alterar seleção:

Imagem:

opacity
+
scale muito leve

Exemplo conceitual:

opacity 0 → 1
scale 1.015 → 1

Texto:

translateY(6–10px) → 0

Estado ativo:

dourado.

Se possível, criar uma pequena transição visual do indicador ativo entre opções.

Tempo:

200–350ms.

Não exagerar.

A interação deve parecer rápida.

==================================================
16. FINDER — SEM BACKEND

Tudo deve funcionar apenas com JavaScript vanilla.

Não criar:

banco;
API;
formulário enviado a servidor;
framework;
estado complexo;
biblioteca.

O resultado da interação é apenas:

URL contextualizada do WhatsApp.

==================================================
17. A REAL — FUNDIR SEÇÕES

Fundir:

"DO CAMPO PARA A RUA"

+

"QUEM SOMOS"

em uma única seção editorial.

Não manter duas grandes seções independentes para comunicar identidade.

Nova seção:

A REAL.

Pode utilizar uma frase editorial:

DO CAMPO
PARA A RUA.

seguida por um texto institucional curto.

Máximo aproximado:
2–3 frases.

Não inventar história.

Não inventar anos de operação.

Não inventar números.

Fotografia grande.

A seção deve funcionar como RESPIRO.

==================================================
18. QUEBRA VISUAL

Hoje muito do site utiliza preto.

Criar pelo menos UMA mudança estrutural de fundo.

Exemplo:

Hero:
preto

Chuteiras:
preto

Finder:
preto/off-black

A Real:
off-white

Encontre a Real:
preto

Usar off-white:

#F4F2ED

como capítulo visual.

Não adicionar novas cores desnecessárias.

O dourado continua como assinatura.

==================================================
19. RITMO INSPIRADO EM RED BULL

Não copiar o site Red Bull.

Trazer o princípio:

conteúdo → movimento → respiro → conteúdo.

Evitar:

seção enorme
seção enorme
seção enorme
seção enorme

Usar:

grande Hero

↓

rail visual compacto

↓

interação

↓

respiro editorial

↓

conversão final

Criar sensação de progressão.

==================================================
20. HIERARQUIA / CAPÍTULOS

Testar pequenos labels editoriais:

01 / EXPLORE

02 / SEU JOGO

03 / A REAL

04 / ENCONTRE

ou solução equivalente.

Devem ser pequenos e discretos.

Dourado.

Não criar aparência de apresentação PowerPoint.

Usar somente se melhorar a composição.

==================================================
21. ENCONTRE A REAL — FUNDIR

Unificar em uma única grande seção final:

- loja;
- localização;
- Instagram;
- WhatsApp;
- contato.

Não criar:

Loja
+
Instagram
+
Contato

como três seções verticais enormes.

Tudo deve funcionar como um único destino final.

Título:

ENCONTRE
A REAL.

ou:

VENHA
CONHECER.

Usar fotografia da loja genérica atual ou equivalente.

==================================================
22. INSTAGRAM DENTRO DO BLOCO FINAL

Incorporar Instagram dentro da seção final.

Mostrar no máximo:

3 imagens pequenas

em rail ou composição compacta.

Texto:

@lojarealesportes

CTA:

Ver Instagram

Não criar uma seção inteira só para Instagram.

==================================================
23. LOCALIZAÇÃO

Se endereço/Maps não estiver configurado:

não mostrar placeholder.

Não mostrar link inválido.

Se configurado:

Como chegar →

Se não:

ocultar elegantemente.

==================================================
24. CONTATO FINAL

WhatsApp deve ser o CTA dominante.

Instagram e localização são secundários.

Hierarquia:

1. WhatsApp
2. Instagram
3. Como chegar

Não repetir CTA enorme várias vezes no final.

==================================================
25. FOOTER

Reduzir drasticamente.

Footer mínimo.

Pode conter:

REAL ESPORTES

Instagram

copyright placeholder neutro se necessário.

Evitar múltiplas colunas.

Evitar repetir toda a navegação.

==================================================
26. MOBILE — META PRINCIPAL

A nova V3 deve ser claramente MOBILE-FIRST.

Meta conceitual:

aproximadamente 4–5,5 alturas de viewport para a experiência principal inteira.

Não precisa cumprir exatamente matematicamente.

Mas deve ser MUITO menor que a V2.

Reduzir:

- padding vertical excessivo;
- imagens exageradamente altas;
- blocos redundantes;
- textos;
- seções independentes desnecessárias.

==================================================
27. BOTTOM BAR MOBILE

Preservar:

WhatsApp
Instagram
Como chegar

Porém:

NÃO esconder automaticamente ao rolar para baixo.

Para este projeto ela funciona como o principal componente "link-in-bio".

Deve permanecer disponível.

Pode reduzir levemente altura/opacidade ao scroll, mas não desaparecer.

Respeitar:

env(safe-area-inset-bottom)

Se WhatsApp ou Maps não estiver configurado:

não criar links falsos.

==================================================
28. HEADER MOBILE

Reavaliar se menu hamburger ainda é realmente necessário.

Com a nova arquitetura extremamente curta:

pode ser melhor usar apenas:

logo/nome

e deixar as ações principais na bottom bar.

Se remover hamburger melhorar UX:

remover no mobile.

Desktop pode manter navegação simples.

Não remover apenas para economizar código.

Decidir com base na experiência final.

==================================================
29. CARROSSÉIS

Não utilizar biblioteca.

Não usar:

Swiper
Slick
Owl
framework equivalente

a menos que exista necessidade técnica incontornável.

Preferir CSS scroll-snap + JS mínimo.

==================================================
30. ACESSIBILIDADE DO CARROSSEL

Implementar:

- navegação teclado no desktop;
- focus-visible;
- botões anterior/próximo acessíveis quando houver;
- aria-label;
- elementos semanticamente corretos;
- não depender apenas de drag.

Não autoplay.

Usuário controla o conteúdo.

==================================================
31. PROGRESSO DO RAIL

Pode criar pequeno indicador de progresso abaixo do carrossel.

Exemplo:

──────●────────

ou uma linha cuja largura/posição acompanha scrollLeft.

Deve ser extremamente discreto.

Isso pode aumentar sensação premium e comunicar posição.

Não usar bolinhas enormes.

==================================================
32. PERFORMANCE — PRIORIDADE

O site será acessado principalmente:

Instagram
→ navegador mobile
→ possivelmente 4G/5G.

Performance é UX.

Revise assets.

Meta desejável:

primeira dobra muito leve.

Se possível:

- converter imagens grandes para WebP;
- criar versões menores para mobile;
- usar srcset/sizes;
- loading="lazy" abaixo da dobra;
- decoding="async";
- width/height ou aspect-ratio;
- evitar layout shift.

Não comprometer qualidade visual.

==================================================
33. PESO TOTAL

O site atual possui muitas fotografias.

Com a redução de seções:

reduzir também quantidade de assets carregados.

Idealmente tentar manter o carregamento total inicial bastante reduzido.

Não carregar imagens de seções invisíveis imediatamente sem necessidade.

Objetivo conceitual:

experiência muito rápida.

==================================================
34. IMAGENS

Nesta rodada:

NÃO precisamos de imagens verdadeiras da Real.

Pode usar:

fotografia genérica real e representativa.

Cada imagem precisa representar corretamente o conteúdo.

Não usar IA.

Não usar watermark.

Não perder tempo buscando fidelidade absoluta à loja.

Esse será trabalho de uma rodada futura.

==================================================
35. IMAGENS DO CARROSSEL DE CHUTEIRAS

Utilizar fotografias reais/genéricas onde:

chuteira seja claramente protagonista.

Preferência:

- fundo limpo;
- gramado;
- quadra;
- estúdio esportivo;
- close de produto.

Evitar:

- multidões;
- atleta distante;
- estádio vazio;
- produto minúsculo;
- contexto que esconda a chuteira.

==================================================
36. MICROINTERAÇÕES

Refinar em vez de aumentar.

Reveal ao scroll:

translateY máximo aproximado:
12–20px

Não usar movimentos grandes.

Duração:
aproximadamente 350–650ms.

Stagger leve entre:

imagem
título
texto
CTA.

==================================================
37. HOVER DESKTOP

Cards:

scale extremamente leve da fotografia.

Exemplo conceitual:

1 → 1.02

Setas:

movimento pequeno.

Botões:

background/border/text refinados.

Nada agressivo.

==================================================
38. CSS

Revisar CSS atual.

Eliminar regras obsoletas criadas para seções removidas.

Evitar acumular:

V1 CSS
+
V2 CSS
+
V3 overrides

indefinidamente.

Refatorar onde necessário.

Preservar variáveis e organização existente que estiverem boas.

O CSS final deve continuar compreensível.

==================================================
39. HTML

Depois de fundir/remover seções:

remover markup morto.

Não manter estruturas invisíveis desnecessárias.

HTML deve representar a nova arquitetura real.

Usar:

main
section
nav
header
footer

semanticamente.

==================================================
40. JAVASCRIPT

Remover lógica de:

- sticky antigo;
- comportamento antigo;
- elementos removidos;

caso não sejam mais utilizados.

Evitar listeners duplicados.

Manter:

IntersectionObserver
configuração
WhatsApp contextualizado
menu se necessário
finder
carrossel apenas se JS for necessário.

==================================================
41. SEM SCROLL HIJACKING

NUNCA impedir o usuário de rolar verticalmente normalmente.

Não converter o scroll vertical da página em scroll horizontal.

Não criar seções que "prendem" o usuário por várias telas.

A navegação deve parecer natural.

==================================================
42. RESPONSIVIDADE

Testar pelo menos:

375px
430px
768px
1024px
1440px
1920px

Prestar atenção especial:

375/430:
experiência principal.

768/1024:
não virar uma mistura ruim de desktop/mobile.

Acima de 1024:
aproveitar largura sem espalhar excessivamente conteúdo.

==================================================
43. TOUCH

Todos os componentes interativos mobile devem ter:

área de toque confortável.

Evitar botões pequenos demais.

Rails devem ter:

touch-action apropriado.

Não impedir scroll vertical quando o gesto não for claramente horizontal.

==================================================
44. REDUCED MOTION

Manter excelente suporte:

prefers-reduced-motion: reduce

Desabilitar:

- entrance cinematográfico;
- transitions não essenciais;
- scroll behavior animado;
- efeitos de imagem.

Conteúdo nunca deve depender de animação para aparecer.

==================================================
45. NÃO TRANSFORMAR EM E-COMMERCE

Continua proibido:

preço;
carrinho;
checkout;
estoque;
login;
conta;
filtros complexos;
busca de produtos;
SKU;
frete;
desconto;
reviews.

É uma vitrine + experiência + direcionamento.

==================================================
46. NÃO INVENTAR DADOS

Não inventar:

produtos reais;
marcas vendidas;
endereço;
telefone;
horários;
estoque;
preços;
anos de empresa;
números;
clientes;
avaliações.

==================================================
47. CRITÉRIO DE SUCESSO

Ao terminar, a experiência deve responder SIM:

O usuário entende o que é a Real em 5 segundos?

O site parece curto no celular?

Existe sensação de movimento sem excesso?

As chuteiras chamam atenção imediatamente?

As demais categorias continuam fáceis de encontrar?

"Qual é o seu jogo?" parece uma experiência e não formulário?

O usuário chega ao WhatsApp em poucos toques?

O site parece uma marca esportiva e não e-commerce incompleto?

Cada scroll entrega conteúdo novo?

A bottom bar continua sempre útil?

Desktop continua bonito?

Tablet não ficou excessivamente longo?

==================================================
48. REVISÃO VISUAL OBRIGATÓRIA

Depois da implementação:

renderize/abra o projeto se possível.

Revise:

mobile 375
mobile 430
tablet 768
tablet 1024
desktop 1440
desktop 1920

Verifique:

altura total;
overflow;
carrossel;
touch;
finder;
WhatsApp;
bottom bar;
header;
transições;
contraste;
espaçamentos;
imagens;
console;
404;
layout shift.

Corrija problemas antes de finalizar.

==================================================
49. PRINCÍPIO FINAL

A V3 precisa ser:

MENOR
+
MAIS INTERATIVA
+
MAIS RÁPIDA
+
MAIS VISUAL
+
MAIS ÚTIL.

Não adicionar componentes sem remover ou fundir outros.

Se uma nova interação aumenta o tamanho sem melhorar a experiência:

não implementar.

==================================================
50. EXECUÇÃO

Agora:

1. Leia CLAUDE.md.
2. Leia V2_REVIEW.md.
3. Leia V3_UX.md.
4. Inspecione todo o projeto atual.
5. Planeje internamente a refatoração.
6. Preserve o design que funciona.
7. Refatore a arquitetura para a nova estrutura compacta.
8. Crie o rail de chuteiras.
9. Crie o finder "Qual é o seu jogo?".
10. Funda institucional/editorial.
11. Funda loja/Instagram/contato.
12. Reduza drasticamente comprimento.
13. Otimize performance.
14. Limpe CSS/JS/HTML antigo.
15. Teste responsividade.
16. Faça revisão visual.
17. Corrija problemas.
18. Finalize a V3.

NÃO apenas acrescente novas seções à V2.

Esta é uma REFATORAÇÃO DE UX.

Ao finalizar, responda apenas:

- resumo curto das mudanças;
- redução aproximada do comprimento;
- componentes adicionados/removidos;
- placeholders ainda existentes;
- qualquer limitação relevante.

Não escreva relatório longo.