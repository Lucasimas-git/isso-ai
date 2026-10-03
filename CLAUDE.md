Você está trabalhando diretamente no VS Code e deve criar, do zero, um protótipo completo e funcional de site para a loja REAL ESPORTES.

IMPORTANTE SOBRE EFICIÊNCIA:
Quero economizar tokens sem reduzir a qualidade do resultado.
- Não escreva explicações longas.
- Não narre cada etapa.
- Não me ensine HTML/CSS/JS.
- Não gere documentação extensa.
- Não peça confirmação a cada decisão.
- Analise primeiro o projeto e depois implemente.
- Só faça perguntas se existir um bloqueio real que impeça a implementação.
- Ao finalizar, responda apenas com um resumo curto do que foi criado, arquivos principais e como executar/publicar.
- Priorize seus tokens na qualidade do código e do design.

==================================================
1. OBJETIVO DO PROJETO
==================================================

Criar um site-vitrine institucional moderno para a REAL ESPORTES.

Não é e-commerce.

O conceito é uma mistura de:
- site institucional;
- catálogo/vitrine;
- landing page;
- experiência semelhante a um Linktree muito mais elaborado.

A pessoa deve conseguir:
- conhecer visualmente a Real Esportes;
- entender o que a loja oferece;
- navegar por categorias;
- visualizar alguns produtos/destaques;
- conhecer brevemente a loja;
- acessar Instagram;
- localizar a loja;
- entrar em contato pelo WhatsApp.

A conversão final acontece no WhatsApp.

NÃO implementar:
- carrinho;
- checkout;
- pagamento;
- login;
- cadastro;
- banco de dados;
- painel administrativo;
- sistema de estoque;
- controle de tamanhos;
- preços;
- disponibilidade em tempo real;
- backend.

O objetivo atual é um protótipo de alta qualidade visual, hospedável gratuitamente no GitHub Pages.

==================================================
2. CONTEXTO DA MARCA
==================================================

Marca: REAL ESPORTES

É uma loja física de artigos esportivos, com forte presença de:
- futebol;
- chuteiras;
- camisas esportivas;
- tênis;
- acessórios esportivos.

A loja já possui identidade própria.

NÃO faça rebranding.

A intenção é criar uma DIREÇÃO DE ARTE DIGITAL mais profissional para a identidade existente.

A estética atual das redes sociais utiliza muitas artes promocionais e imagens com aparência de IA.

O site deve seguir o caminho oposto:

- mais design;
- mais fotografia real;
- mais editorial;
- mais produto;
- menos efeitos artificiais;
- menos aparência de template;
- menos aparência de site gerado por IA.

Quando o usuário visualizar o site, ele deve reconhecer uma loja esportiva consolidada e contemporânea.

==================================================
3. REFERÊNCIAS CONCEITUAIS
==================================================

Use como referências de PRINCÍPIOS DE DESIGN, não para copiar:

Nike Brasil
https://www.nike.com.br/

Adidas Brasil
https://www.adidas.com.br/

New Balance Brasil
https://www.newbalance.com.br/

Samsung Brasil
https://www.samsung.com/br/

Interprete as referências assim:

NIKE:
- fotografia como protagonista;
- grandes áreas visuais;
- produto com presença;
- textos fortes e curtos.

ADIDAS:
- organização;
- categorias claras;
- linguagem esportiva;
- navegação simples.

NEW BALANCE:
- estética editorial;
- mistura de produto + lifestyle + identidade;
- bastante respiro visual.

SAMSUNG:
- apresentação premium de produto;
- seções grandes;
- transições;
- excelente hierarquia visual;
- sensação de experiência durante o scroll.

NÃO copie layout, código, identidade, logo ou composição específica dessas empresas.

Crie uma linguagem própria para a REAL ESPORTES.

==================================================
4. DIREÇÃO VISUAL
==================================================

A interface deve parecer criada por um bom designer digital, não por um gerador automático de landing pages.

Estilo:

- esportivo;
- contemporâneo;
- forte;
- editorial;
- sofisticado sem parecer loja de luxo;
- urbano;
- dinâmico;
- confiável.

Evite:
- excesso de gradientes;
- glow em tudo;
- partículas;
- glassmorphism excessivo;
- cards arredondados em todas as seções;
- excesso de sombras;
- efeitos futuristas gratuitos;
- fundos artificiais;
- elementos típicos de templates de IA;
- dourado exagerado;
- animação em todos os elementos.

==================================================
5. CORES
==================================================

Base visual aproximada:

Preto profundo:
#080808

Off-white:
#F4F2ED

Dourado:
aproximadamente #C9A227

O dourado deve funcionar como ASSINATURA, não como cor dominante.

Use aproximadamente:
- 70–75% preto/off-black;
- 15–20% branco/off-white;
- 5–10% dourado e detalhes.

A identidade atual também possui presença de verde no símbolo.

O verde pode aparecer apenas em microdetalhes se contribuir para a composição.

Não deixe o site visualmente verde/amarelo.

Centralize todas as cores em CSS Custom Properties:

:root {
  --color-bg: ...;
  --color-text: ...;
  --color-accent: ...;
  ...
}

para permitir mudança posterior em poucos segundos.

==================================================
6. TIPOGRAFIA
==================================================

Use combinação de:

1. uma tipografia forte/condensada ou pesada para títulos;
2. uma sans-serif extremamente legível para textos/interface.

Queremos títulos editoriais grandes como:

ENTRE
EM CAMPO.

ou:

VIVA
O JOGO.

ou:

ENCONTRE
O SEU JOGO.

Não use dezenas de pesos/fontes.

No máximo duas famílias.

Pode utilizar Google Fonts se necessário, escolhendo alternativas gratuitas e de boa performance.

Não copie tipografia proprietária da Nike/Adidas.

==================================================
7. IMAGENS
==================================================

Não existem assets definitivos neste momento.

Se o ambiente possuir acesso à internet:

1. encontre fotografias REAIS e gratuitas para uso em protótipo;
2. prefira Pexels, Unsplash ou bancos equivalentes com licença adequada;
3. NÃO use Google Images aleatoriamente;
4. NÃO use imagens geradas por IA;
5. evite imagens com watermark;
6. baixe as imagens localmente para o projeto;
7. não faça hotlink das imagens;
8. otimize os arquivos para web quando possível.

Procure imagens para:

assets/images/
  hero.jpg
  categoria-chuteiras.jpg
  categoria-camisas.jpg
  categoria-tenis.jpg
  categoria-acessorios.jpg
  produto-01.jpg
  produto-02.jpg
  produto-03.jpg
  produto-04.jpg
  produto-05.jpg
  produto-06.jpg
  loja-interior.jpg
  loja-fachada.jpg

Procure principalmente:
- chuteiras reais;
- futebol;
- gramado;
- camisas;
- tênis;
- bolas/acessórios;
- loja esportiva;
- prateleiras de tênis/chuteiras.

Escolha imagens que funcionem juntas visualmente.

Prefira fotografia:
- de alto contraste;
- limpa;
- realista;
- editorial;
- com produto em evidência.

Se NÃO houver acesso à internet:
- não interrompa o projeto;
- crie a estrutura completa;
- utilize placeholders visuais elegantes;
- mantenha exatamente os nomes acima;
- deixe extremamente simples substituir as imagens posteriormente.

IMPORTANTE:
Não invente fachada ou história específica da Real Esportes como se fossem verdadeiras.

Uma imagem genérica de loja deve ser tratada apenas como imagem temporária de demonstração.

==================================================
8. LOGO
==================================================

O logo definitivo da Real Esportes ainda será fornecido posteriormente.

Crie:

assets/images/logo-real.png

como caminho esperado para o logo.

Se o arquivo não existir, crie no layout um fallback tipográfico elegante:

REAL
ESPORTES

Não invente um novo símbolo ou logo.

A arquitetura deve permitir substituir o fallback pelo PNG/SVG real sem alterar o layout.

==================================================
9. ARQUITETURA DA HOME
==================================================

O site será predominantemente VERTICAL.

Mobile-first.

Desktop deve aproveitar largura maior sem transformar tudo em grids genéricos.

Estrutura recomendada:

01. HEADER
02. HERO
03. CATEGORIAS
04. DESTAQUES
05. SEÇÃO EDITORIAL / MOTION
06. QUEM SOMOS
07. LOJA FÍSICA
08. INSTAGRAM
09. CONTATO
10. FOOTER

==================================================
10. HEADER
==================================================

Minimalista.

Desktop:
[REAL ESPORTES]       Produtos   A Real   Loja   Contato      [WhatsApp]

Mobile:
logo/nome + botão menu simples.

O header pode inicialmente ser transparente sobre o hero e ganhar fundo escuro ao rolar.

Não faça mega menu.

Navegação interna com scroll suave.

==================================================
11. HERO
==================================================

Deve causar impacto imediato.

Preferencialmente altura próxima a 100vh.

Grande fotografia esportiva real.

Possibilidade futura de trocar a imagem por vídeo.

Estruture o código para aceitar:

assets/videos/hero.mp4

mas NÃO faça o site depender do vídeo.

Se não houver vídeo, use hero.jpg normalmente.

Conteúdo curto.

Exemplo de linguagem:

REAL ESPORTES

VIVA
O JOGO.

ou outra frase esportiva curta equivalente.

CTAs:

[Conheça a Real]
[Falar no WhatsApp]

Não escrever parágrafo grande no Hero.

Adicione um pequeno indicador de scroll.

==================================================
12. CATEGORIAS
==================================================

Título:

ENCONTRE O SEU JOGO.

Categorias:

CHUTEIRAS
Campo. Society. Futsal.

CAMISAS
Clubes. Seleções. Esporte.

TÊNIS
Esporte e dia a dia.

ACESSÓRIOS
Complete o seu jogo.

Não quero quatro cards pequenos genéricos.

Crie uma experiência visual mais editorial.

Imagens grandes.

No desktop, explore composições alternadas e assimétricas.

No mobile, mantenha leitura vertical excelente.

Cada categoria terá CTA:

Consultar modelos →

O CTA abre WhatsApp com mensagem contextual correspondente.

Exemplo:

"Olá! Vi a seção de chuteiras no site da Real Esportes e gostaria de conhecer os modelos disponíveis."

==================================================
13. EXPERIÊNCIA STICKY / SCROLL
==================================================

Quero pelo menos UMA seção tecnicamente mais interessante para testar a capacidade de implementação.

Sugestão:

Durante parte do scroll, uma grande imagem de chuteira/produto permanece sticky enquanto textos/categorias mudam.

Exemplo:

CAMPO

scroll

SOCIETY

scroll

FUTSAL

Depois a seção libera e a página continua.

Faça isso de forma elegante.

Não prejudique mobile.

No mobile, se sticky complexo prejudicar usabilidade/performance, simplifique.

==================================================
14. DESTAQUES DA REAL
==================================================

Mostrar aproximadamente 6 produtos.

Eles são DESTAQUES VISUAIS, não produtos de e-commerce.

Cada item pode conter:

imagem
nome genérico/temporário
categoria
CTA

Exemplo:

CHUTEIRA DE CAMPO
Linha Performance

[Tenho interesse]

Não invente marcas/modelos específicos se não puder confirmar.

Não colocar:
- preço;
- estoque;
- tamanho;
- desconto;
- avaliações;
- botão comprar.

Adicionar texto discreto:

"Consulte modelos, tamanhos, disponibilidade e valores diretamente com a loja."

Ao clicar em "Tenho interesse", abrir WhatsApp.

Desktop:
grid editorial ou composição interessante.

Mobile:
carrossel horizontal nativo ou sequência vertical bem resolvida.

Não implemente biblioteca pesada apenas para carrossel.

==================================================
15. SEÇÃO EDITORIAL
==================================================

Adicionar um respiro entre produto e institucional.

Pode utilizar:
- fotografia grande;
- futuro vídeo;
- tipografia enorme;
- movimento suave.

Exemplo:

DO CAMPO
PARA A RUA.

Pouco texto.

Grande impacto visual.

Essa seção existe para construir marca, não vender produto.

==================================================
16. QUEM SOMOS
==================================================

Título:

A REAL.

Como ainda não temos a história oficial da empresa:

NÃO invente:
- ano de fundação;
- número de clientes;
- quantidade de anos;
- números;
- premiações;
- fatos específicos.

Use um texto placeholder claramente identificável no código e fácil de substituir.

Na interface, pode usar uma mensagem neutra, por exemplo:

"Esporte faz parte da nossa rotina. Na Real Esportes, reunimos produtos para quem vive o jogo dentro e fora de campo."

Não transformar em texto corporativo enorme.

Imagem real/genérica de loja ao lado ou ao fundo.

==================================================
17. LOJA FÍSICA
==================================================

Seção importante para gerar confiança.

Título:

VENHA CONHECER A REAL.

Mostrar campos:

Endereço
[ENDEREÇO DA LOJA]

Horários
[HORÁRIO DE FUNCIONAMENTO]

Botões:

[Como chegar]
[Falar no WhatsApp]

Esses dados devem ficar centralizados em um local fácil de editar.

NÃO invente endereço.

NÃO invente horários.

==================================================
18. INSTAGRAM
==================================================

Seção:

SIGA A REAL.

@lojarealesportes

Não tente criar integração complexa com API do Instagram.

Pode criar composição visual com 3–4 imagens locais simulando feed.

CTA:

[Ver Instagram]

Link:
https://www.instagram.com/lojarealesportes/

Abrir em nova aba.

==================================================
19. CONTATO FINAL
==================================================

Grande seção final.

Fundo predominantemente preto.

Texto:

PROCURANDO
O SEU PRÓXIMO
EQUIPAMENTO?

ou frase melhor, desde que simples e esportiva.

CTA forte:

[FALAR COM A REAL]

Também mostrar:

Instagram
WhatsApp
Localização

==================================================
20. MOBILE
==================================================

Mobile é prioridade.

O site deve parecer criado especificamente para smartphone, não apenas encolhido.

Criar barra fixa inferior discreta no mobile:

WhatsApp | Instagram | Como chegar

Ela deve:
- respeitar safe areas;
- não cobrir conteúdo;
- desaparecer ou adaptar-se quando necessário;
- ser elegante;
- não parecer aplicativo genérico.

==================================================
21. WHATSAPP
==================================================

Como ainda não possuímos o número real:

centralize em JS/configuração:

const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";

ou solução equivalente.

Não espalhe o número pelo HTML.

Criar função reutilizável para gerar URL wa.me com encodeURIComponent.

Mensagens diferentes conforme origem:

Hero:
"Olá! Vim pelo site da Real Esportes e gostaria de mais informações."

Chuteiras:
"Olá! Vi a seção de chuteiras no site da Real Esportes e gostaria de conhecer os modelos disponíveis."

Camisas:
mensagem correspondente.

Tênis:
mensagem correspondente.

Acessórios:
mensagem correspondente.

Produto:
mensagem incluindo o nome exibido no card.

==================================================
22. MOVIMENTO E INTERAÇÕES
==================================================

Movimento deve parecer profissional e intencional.

Implementar:

- scroll reveal;
- IntersectionObserver;
- fade + translate sutis;
- pequenas mudanças de escala;
- parallax MUITO leve onde fizer sentido;
- hover refinado em desktop;
- transições em imagens;
- header reagindo ao scroll;
- seção sticky;
- scroll suave.

NÃO usar animação em tudo.

NÃO exagerar.

60fps sempre que possível.

Animar principalmente transform e opacity.

Respeitar:

@media (prefers-reduced-motion: reduce)

Nesse modo, remover/desativar animações não essenciais.

==================================================
23. MICROINTERAÇÕES
==================================================

Botões:
- pequena mudança de fundo;
- movimento de seta;
- feedback claro no hover/focus.

Imagens:
- scale muito leve no hover desktop.

Links:
- underline/linha animada discreta quando apropriado.

Cursor customizado NÃO é necessário.

==================================================
24. RESPONSIVIDADE
==================================================

Validar pelo menos aproximadamente:

375px
430px
768px
1024px
1440px
1920px

Evitar:
- overflow horizontal;
- textos cortados;
- imagens achatadas;
- imagens esticadas;
- áreas vazias enormes sem intenção;
- títulos gigantes quebrando telas pequenas.

Use:
clamp()
min()
max()
aspect-ratio
object-fit
CSS Grid
Flexbox

quando apropriado.

==================================================
25. ACESSIBILIDADE
==================================================

Implementar de forma simples e correta:

- HTML semântico;
- contraste suficiente;
- alt em imagens;
- navegação via teclado;
- estados :focus-visible;
- aria-label quando necessário;
- botão de menu acessível;
- headings em hierarquia correta;
- links e botões semanticamente corretos.

==================================================
26. PERFORMANCE
==================================================

Site deve ser leve.

Não use frameworks grandes.

Não use React.
Não use Next.
Não use Vue.
Não use Bootstrap.
Não use Tailwind.

Stack:

HTML5
CSS3
JavaScript vanilla

Evite bibliotecas externas quando CSS/JS nativo resolver.

Imagens:
- lazy loading abaixo da dobra;
- width/height ou aspect-ratio para evitar layout shift;
- object-fit;
- formatos otimizados se conseguir converter.

Vídeo:
- autoplay apenas se muted;
- playsinline;
- sem áudio;
- poster;
- carregamento responsável.

==================================================
27. SEO
==================================================

SEO não é prioridade neste protótipo.

Mesmo assim, implemente o básico corretamente:

- title;
- meta description;
- viewport;
- lang="pt-BR";
- Open Graph básico;
- favicon placeholder;
- HTML semântico.

Não perca tempo criando estratégia SEO, blog, schema complexo ou páginas adicionais.

==================================================
28. ESTRUTURA DOS ARQUIVOS
==================================================

Crie algo simples e profissional.

Sugestão:

/
  index.html
  css/
    styles.css
  js/
    main.js
  assets/
    images/
    videos/
    icons/
  README.md

README extremamente curto.

Se julgar que dividir CSS em mais arquivos realmente melhora manutenção, pode fazer, mas evite fragmentação desnecessária.

==================================================
29. CONFIGURAÇÃO EDITÁVEL
==================================================

Centralize informações que serão trocadas posteriormente:

Nome
Instagram
WhatsApp
Endereço
Google Maps
Horários

Pode usar:

js/config.js

ou um objeto CONFIG dentro de main.js.

Priorize simplicidade.

Quero conseguir alterar dados em poucos minutos.

==================================================
30. GITHUB PAGES
==================================================

O projeto deve funcionar perfeitamente como site estático no GitHub Pages.

Não utilize:
- caminhos absolutos dependentes de servidor;
- APIs backend;
- recursos que exijam Node em produção;
- SSR.

Todos os assets devem utilizar caminhos relativos.

O site deverá funcionar potencialmente em:

https://usuario.github.io/real-esportes/

Não faça deploy sem solicitação explícita.

Apenas prepare para isso.

==================================================
31. QUALIDADE DE DESIGN
==================================================

Antes de considerar o trabalho concluído, revise criticamente o site.

Pergunte a si mesmo:

- Parece uma marca esportiva real?
- Parece um site de designer ou um template?
- Está aparecendo como e-commerce incompleto?
- Há cards demais?
- Há dourado demais?
- Há efeitos demais?
- A fotografia domina o suficiente?
- Existe respiro?
- A hierarquia tipográfica está forte?
- Mobile parece realmente bem pensado?
- O usuário encontra WhatsApp rapidamente?
- A loja física transmite confiança?
- Alguma seção parece gerada automaticamente?
- Há inconsistências de espaçamento?
- Alguma animação existe sem motivo?

Corrija o que estiver abaixo do nível visual esperado.

==================================================
32. PRINCÍPIO CENTRAL
==================================================

Produto = conteúdo visual.

WhatsApp = conversão.

O site NÃO vende diretamente.

O site cria desejo, confiança e direciona o usuário para a loja/WhatsApp.

==================================================
33. NÃO INVENTAR INFORMAÇÕES
==================================================

Esta regra é obrigatória.

Não invente:
- telefone;
- endereço;
- horários;
- história;
- marcas comercializadas;
- preços;
- estoque;
- avaliações;
- números;
- anos de operação;
- depoimentos;
- promoções;
- dados comerciais.

Utilize placeholders explícitos quando não houver informação.

==================================================
34. EXECUÇÃO
==================================================

Agora:

1. Inspecione o diretório atual.
2. Planeje internamente a arquitetura.
3. Pesquise/baixe imagens gratuitas e reais se tiver acesso à internet.
4. Crie todos os arquivos necessários.
5. Implemente o site completo.
6. Revise responsividade.
7. Revise erros de console.
8. Revise links e interações.
9. Revise visual e remova qualquer sensação excessivamente genérica/template.
10. Deixe tudo pronto para abrir localmente e posteriormente publicar no GitHub Pages.

Não pare apenas no wireframe.

Quero a implementação funcional completa da primeira versão.

Se puder visualizar o site pelo ambiente disponível, faça uma revisão visual depois da implementação e corrija os principais problemas antes de finalizar.

Ao terminar, NÃO faça um relatório longo.
Diga apenas:
- o que foi criado;
- quais placeholders ainda preciso substituir;
- como abrir/testar;
- qualquer limitação importante encontrada.