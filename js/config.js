/* ==========================================================================
   REAL ESPORTES — Configuração central
   Edite estes valores quando os dados reais da loja estiverem disponíveis.
   ========================================================================== */

const CONFIG = {
  nome: "REAL ESPORTES",

  // Vídeo do hero: troque para true quando assets/videos/hero.mp4 existir no projeto.
  hero: {
    videoEnabled: false,
    videoSrc: "assets/videos/hero.mp4"
  },

  whatsapp: {
    numero: "", // Preencha com o número real, formato internacional apenas dígitos (ex: 55DDDNUMERO). Vazio = ação desativada no site.
    mensagens: {
      hero: "Olá! Vim pelo site da Real Esportes e gostaria de mais informações.",
      chuteiras: "Olá! Vi a seção de chuteiras no site da Real Esportes e gostaria de conhecer os modelos disponíveis.",
      camisas: "Olá! Vi a seção de camisas no site da Real Esportes e gostaria de conhecer os modelos disponíveis.",
      tenis: "Olá! Vi a seção de tênis no site da Real Esportes e gostaria de conhecer os modelos disponíveis.",
      acessorios: "Olá! Vi a seção de acessórios no site da Real Esportes e gostaria de conhecer os modelos disponíveis.",
      loja: "Olá! Gostaria de falar com a Real Esportes.",
      contato: "Olá! Vim pelo site da Real Esportes e gostaria de falar com a loja."
    }
  },

  instagram: {
    handle: "@lojarealesportes",
    url: "https://www.instagram.com/lojarealesportes/"
  },

  // Endereço, horários e link do Maps: deixe vazio ("") enquanto não houver o dado real.
  // Um campo vazio simplesmente não aparece no site — nunca invente um valor aqui.
  loja: {
    endereco: "",
    horarios: "",
    googleMapsUrl: ""
  }
};

/**
 * Gera a URL do WhatsApp com mensagem pré-preenchida.
 * @param {string} chaveOuMensagem - chave em CONFIG.whatsapp.mensagens ou texto livre.
 * @returns {string}
 */
function getWhatsAppUrl(chaveOuMensagem) {
  const mensagem = CONFIG.whatsapp.mensagens[chaveOuMensagem] || chaveOuMensagem || CONFIG.whatsapp.mensagens.hero;
  const digits = (CONFIG.whatsapp.numero || "").replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(mensagem)}`;
}

function isWhatsAppConfigured() {
  return Boolean(CONFIG.whatsapp.numero && CONFIG.whatsapp.numero.replace(/\D/g, "").length >= 10);
}

/* Só considera o Maps configurado se a URL for http(s) válida — nunca javascript: ou outro esquema */
function isMapsConfigured() {
  const url = CONFIG.loja.googleMapsUrl;
  if (!url || !url.trim()) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
