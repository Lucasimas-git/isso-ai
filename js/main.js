/* ==========================================================================
   REAL ESPORTES — Scripts principais (V3)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initLogoFallback();
  initWhatsAppLinks();
  initMapsLinks();
  initInstagramConfig();
  initLojaInfo();
  initReveal();
  initHeroVideo();
  initRail();
  initFinder();
  initMobileBar();
  document.getElementById("ano-atual").textContent = new Date().getFullYear();
});

/* Fallback tipográfico do logo: sem handler inline, permite CSP sem unsafe-inline */
function initLogoFallback() {
  const img = document.getElementById("logo-img");
  const fallback = document.getElementById("logo-fallback");
  if (!img || !fallback) return;
  img.addEventListener("error", () => {
    img.classList.add("is-broken");
    fallback.classList.add("is-visible");
  });
}

/* Oculta a barra mobile durante o Hero e enquanto o CTA principal do Finder está próximo do rodapé,
   para nunca cobrir um CTA importante */
function initMobileBar() {
  const bar = document.querySelector(".mobile-bar");
  const hero = document.getElementById("hero");
  const finderCta = document.getElementById("finder-cta");
  if (!bar || !("IntersectionObserver" in window)) return;

  const hiding = new Set();
  const sync = () => bar.classList.toggle("is-hidden", hiding.size > 0);
  const watch = (el, options) => {
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) hiding.add(el);
        else hiding.delete(el);
      });
      sync();
    }, options);
    observer.observe(el);
  };

  watch(hero, { threshold: 0 });
  watch(finderCta, { threshold: 0, rootMargin: "-80% 0px 0px 0px" });
}

/* Header ganha fundo sólido ao rolar */
function initHeaderScroll() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* Preenche todos os links do WhatsApp com a URL correta, ou desativa se não configurado */
function initWhatsAppLinks() {
  const configured = isWhatsAppConfigured();

  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    if (!configured) {
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.removeAttribute("href");
      link.addEventListener("click", (e) => e.preventDefault());
      return;
    }
    updateWhatsAppLink(link);
  });
}

/* Recalcula o href de um link .js-whatsapp a partir dos data-attributes atuais */
function updateWhatsAppLink(link) {
  const key = link.dataset.waKey;
  const produtoNome = link.dataset.waKeyProduto;
  const tag = link.dataset.waTag;

  let mensagem;
  if (produtoNome) {
    mensagem = `Olá! Tenho interesse no produto "${produtoNome}" que vi no site da Real Esportes. Pode me passar mais informações?`;
  } else if (key === "chuteiras" && tag) {
    mensagem = `Olá! Vim pelo site da Real Esportes e gostaria de conhecer as chuteiras de ${tag} disponíveis.`;
  } else {
    mensagem = CONFIG.whatsapp.mensagens[key] || key;
  }

  link.setAttribute("href", getWhatsAppUrl(mensagem));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
}

/* Preenche links "Como chegar" com o Google Maps configurado, ou oculta se não houver link */
function initMapsLinks() {
  const configured = isMapsConfigured();

  document.querySelectorAll(".js-maps").forEach((link) => {
    if (!configured) {
      link.style.display = "none";
      return;
    }
    link.setAttribute("href", CONFIG.loja.googleMapsUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

function initInstagramConfig() {
  const handle = document.getElementById("ig-handle");
  const cta = document.getElementById("ig-cta");
  if (handle) handle.textContent = CONFIG.instagram.handle;
  if (cta) cta.setAttribute("href", CONFIG.instagram.url);
}

/* Só exibe endereço/horários quando o dado real existir; some elegantemente quando vazio */
function initLojaInfo() {
  const info = document.getElementById("loja-info");
  const enderecoItem = document.getElementById("loja-endereco-item");
  const horariosItem = document.getElementById("loja-horarios-item");
  const endereco = document.getElementById("loja-endereco");
  const horarios = document.getElementById("loja-horarios");

  const temEndereco = Boolean(CONFIG.loja.endereco && CONFIG.loja.endereco.trim());
  const temHorarios = Boolean(CONFIG.loja.horarios && CONFIG.loja.horarios.trim());

  if (temEndereco && endereco) {
    endereco.textContent = CONFIG.loja.endereco;
  } else if (enderecoItem) {
    enderecoItem.style.display = "none";
  }

  if (temHorarios && horarios) {
    horarios.textContent = CONFIG.loja.horarios;
  } else if (horariosItem) {
    horariosItem.style.display = "none";
  }

  if (!temEndereco && !temHorarios && info) {
    info.style.display = "none";
  }
}

/* Scroll reveal via IntersectionObserver */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

/* Só carrega o vídeo do hero se estiver habilitado em CONFIG; caso contrário usa hero.jpg sem gerar 404 */
function initHeroVideo() {
  const video = document.getElementById("hero-video");
  const img = document.getElementById("hero-img");
  if (!video) return;

  if (!CONFIG.hero.videoEnabled) {
    video.remove();
    return;
  }

  const source = document.createElement("source");
  source.src = CONFIG.hero.videoSrc;
  source.type = "video/mp4";
  video.appendChild(source);

  const useImageFallback = () => {
    video.style.display = "none";
  };

  video.addEventListener("error", useImageFallback, true);
  video.addEventListener("stalled", useImageFallback);
  video.load();

  setTimeout(() => {
    if (video.readyState < 2) useImageFallback();
  }, 2500);

  video.addEventListener("loadeddata", () => {
    img.style.opacity = "0";
  });
}

/* Rail horizontal de chuteiras: setas, indicador de progresso, drag com mouse e teclado */
function initRail() {
  const viewport = document.getElementById("rail-viewport");
  const track = document.getElementById("rail-track");
  const prev = document.querySelector(".rail__arrow--prev");
  const next = document.querySelector(".rail__arrow--next");
  const progressBar = document.getElementById("rail-progress");
  if (!viewport || !track) return;

  const CARD_GAP = 16;

  function scrollByCards(dir) {
    const card = track.querySelector(".rail__card");
    if (!card) return;
    const amount = (card.getBoundingClientRect().width + CARD_GAP) * dir;
    viewport.scrollBy({ left: amount, behavior: "smooth" });
  }

  if (prev) prev.addEventListener("click", () => scrollByCards(-1));
  if (next) next.addEventListener("click", () => scrollByCards(1));

  viewport.setAttribute("tabindex", "0");
  viewport.setAttribute("role", "region");
  viewport.setAttribute("aria-label", "Chuteiras em destaque, use as setas do teclado para navegar");
  viewport.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { scrollByCards(1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { scrollByCards(-1); e.preventDefault(); }
  });

  function updateProgress() {
    if (!progressBar) return;
    const containerWidth = progressBar.parentElement.clientWidth;
    const trackWidth = viewport.scrollWidth;
    const visible = viewport.clientWidth;
    const barWidth = Math.max(24, (visible / trackWidth) * containerWidth);
    const maxScroll = trackWidth - visible;
    const ratio = maxScroll > 0 ? viewport.scrollLeft / maxScroll : 0;
    const maxLeft = containerWidth - barWidth;
    progressBar.style.width = `${barWidth}px`;
    progressBar.style.transform = `translateX(${ratio * maxLeft}px)`;
  }
  viewport.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  /* Drag com mouse/trackpad no desktop — não interfere com touch nativo */
  let isDown = false;
  let startX = 0;
  let startScroll = 0;

  viewport.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    isDown = true;
    startX = e.clientX;
    startScroll = viewport.scrollLeft;
    viewport.classList.add("is-dragging");
  });
  window.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    viewport.scrollLeft = startScroll - (e.clientX - startX);
  });
  window.addEventListener("pointerup", () => {
    isDown = false;
    viewport.classList.remove("is-dragging");
  });
}

/* "Qual é o seu jogo?" — finder de categorias sem backend */
const FINDER_DATA = {
  chuteiras: {
    img: "assets/images/categoria-chuteiras.jpg",
    alt: "Chuteira de futebol em campo gramado",
    desc: "Chuteiras para campo, society e futsal.",
    hasSub: true
  },
  camisas: {
    img: "assets/images/categoria-camisas.jpg",
    alt: "Jogadores em campo vestindo camisas de futebol",
    desc: "Camisas de clubes, seleções e treino.",
    hasSub: false
  },
  tenis: {
    img: "assets/images/categoria-tenis.jpg",
    alt: "Tênis esportivo colorido em uso, cena urbana",
    desc: "Tênis esportivo para o jogo e o dia a dia.",
    hasSub: false
  },
  acessorios: {
    img: "assets/images/categoria-acessorios.jpg",
    alt: "Bola de futebol em destaque sobre o gramado",
    desc: "Bolas, luvas, caneleiras e mais.",
    hasSub: false
  }
};

function initFinder() {
  const chips = document.querySelectorAll(".finder__chip[data-categoria]");
  const subChips = document.querySelectorAll(".finder__chip--sub");
  const subWrap = document.getElementById("finder-sub");
  const img = document.getElementById("finder-img");
  const desc = document.getElementById("finder-desc");
  const cta = document.getElementById("finder-cta");
  if (!chips.length || !img || !cta) return;

  let categoria = "chuteiras";
  let modalidade = "Campo";

  function render() {
    const data = FINDER_DATA[categoria];
    if (subWrap) subWrap.hidden = !data.hasSub;

    img.classList.add("is-fading");
    desc.classList.add("is-fading");
    window.setTimeout(() => {
      img.src = data.img;
      img.alt = data.alt;
      desc.textContent = data.hasSub ? `Chuteiras para ${modalidade}.` : data.desc;
      img.classList.remove("is-fading");
      desc.classList.remove("is-fading");
    }, 180);

    cta.dataset.waKey = categoria;
    if (data.hasSub) {
      cta.dataset.waTag = modalidade;
    } else {
      delete cta.dataset.waTag;
    }
    if (isWhatsAppConfigured()) updateWhatsAppLink(cta);
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      if (chip.classList.contains("is-active")) return;
      categoria = chip.dataset.categoria;
      chips.forEach((c) => {
        const active = c === chip;
        c.classList.toggle("is-active", active);
        c.setAttribute("aria-pressed", String(active));
      });
      render();
    });
  });

  subChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      if (chip.classList.contains("is-active")) return;
      modalidade = chip.dataset.modalidade;
      subChips.forEach((c) => {
        const active = c === chip;
        c.classList.toggle("is-active", active);
        c.setAttribute("aria-pressed", String(active));
      });
      render();
    });
  });

  render();
}
