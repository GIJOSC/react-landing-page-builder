import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { m as moveis4 } from "./router-DaKr8hh1.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
const url$8 = "/src/assets/logo.png";
const logoAsset = {
  url: url$8
};
const url$7 = "/src/assets/moveis1.jpg";
const moveis1 = {
  url: url$7
};
const url$6 = "/src/assets/moveis2.jpg";
const moveis2 = {
  url: url$6
};
const url$5 = "/src/assets/moveis3.jpg";
const moveis3 = {
  url: url$5
};
const url$4 = "/src/assets/video1.mp4";
const video1 = {
  url: url$4
};
const url$3 = "/src/assets/video2.mp4";
const video2 = {
  url: url$3
};
const url$2 = "/src/assets/video3.mp4";
const video3 = {
  url: url$2
};
const url$1 = "/src/assets/video4.mp4";
const video4 = {
  url: url$1
};
const url = "/src/assets/video5.mp4";
const video5 = {
  url
};
const ambientes = [{
  title: "Sala de Jantar",
  subtitle: "Mesa em madeira maciça & cadeiras estofadas",
  image: moveis1.url,
  span: "md:col-span-8",
  aspect: "aspect-[16/10]"
}, {
  title: "Poltronas Orgânicas",
  subtitle: "Curvas suaves em tecido sage",
  image: moveis3.url,
  span: "md:col-span-4 md:mt-12",
  aspect: "aspect-[4/5]"
}];
const produtos = [{
  name: "Poltrona Flora",
  caption: "Estofado em tecido sage",
  image: moveis3.url
}, {
  name: "Cadeira Lunna",
  caption: "Acabamento boucle",
  image: moveis2.url
}, {
  name: "Módulo Horizonte",
  caption: "Sofá modular configurável",
  image: moveis4.url
}, {
  name: "Mesa Gaia",
  caption: "Madeira maciça envernizada",
  image: moveis1.url
}];
const lojas = [{
  nome: "Continente Shopping",
  endereco: "Rod. SC-401 — São José/SC",
  bairro: "Móveis Soltos & Planejados"
}, {
  nome: "Itaguaçu Shopping",
  endereco: "Rod. Gov. Ivo Silveira — São José/SC",
  bairro: "Estofados & Decoração"
}];
const heroVideos = [video1.url, video2.url, video3.url, video4.url, video5.url];
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-brand-beige text-brand-dark font-sans selection:bg-brand-olive selection:text-brand-beige", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Ambientes, {}),
      /* @__PURE__ */ jsx(Produtos, {}),
      /* @__PURE__ */ jsx(Lojas, {})
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [{
    label: "Ambientes",
    href: "#ambientes"
  }, {
    label: "Produtos",
    href: "#produtos"
  }, {
    label: "Lojas",
    href: "#lojas"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  return /* @__PURE__ */ jsx("nav", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-brand-beige/95 backdrop-blur-md border-b border-brand-dark/10 text-brand-dark py-4" : "text-brand-beige py-6 mix-blend-difference"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("img", { src: logoAsset.url, alt: "Ecomade", className: "h-10 w-10 object-contain" }),
      /* @__PURE__ */ jsx("span", { className: "font-serif italic text-2xl tracking-tight", children: "Ecomade" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-medium", children: links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, className: "hover:opacity-60 transition-opacity", children: l.label }, l.href)) })
  ] }) });
}
function Hero() {
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnded = () => setIndex((i) => (i + 1) % heroVideos.length);
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, []);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {
    });
  }, [index]);
  return /* @__PURE__ */ jsxs("section", { className: "relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx("video", { ref: videoRef, className: "absolute inset-0 w-full h-full object-cover", src: heroVideos[index], poster: moveis4.url, autoPlay: true, muted: true, playsInline: true }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-dark/40" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center text-brand-beige px-6 max-w-4xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.4em] font-medium opacity-80 block mb-8", children: "Florianópolis · Santa Catarina" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-balance", children: [
        "Realizando sonhos ",
        /* @__PURE__ */ jsx("br", { className: "hidden md:inline" }),
        "através dos móveis"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-lg mx-auto text-sm md:text-base font-light tracking-wide opacity-90 leading-relaxed", children: "Móveis soltos & planejados de alto padrão — design, conforto e sofisticação para transformar cada ambiente da sua casa." }),
      /* @__PURE__ */ jsx("a", { href: "#contato", className: "inline-block mt-12 border border-brand-beige/60 px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium hover:bg-brand-beige hover:text-brand-dark transition-all duration-500", children: "Solicitar Atendimento" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-px h-14 bg-brand-beige/50 animate-pulse" }) })
  ] });
}
function Ambientes() {
  return /* @__PURE__ */ jsxs("section", { id: "ambientes", className: "py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-brand-olive font-semibold mb-4 block", children: "Curadoria de Espaços" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-serif italic leading-tight", children: "Harmonia em cada detalhe da sua rotina" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#produtos", className: "border-b border-brand-dark pb-1 text-xs uppercase tracking-widest hover:text-brand-olive hover:border-brand-olive transition-colors", children: "Ver todos ambientes" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-6", children: [
      ambientes.map((a) => /* @__PURE__ */ jsxs("article", { className: `group cursor-pointer ${a.span}`, children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden mb-4", children: /* @__PURE__ */ jsx("img", { src: a.image, alt: a.title, loading: "lazy", className: `w-full ${a.aspect} object-cover transition-transform duration-700 group-hover:scale-105` }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif italic", children: a.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-brand-stone uppercase tracking-widest mt-1", children: a.subtitle })
      ] }, a.title)),
      /* @__PURE__ */ jsxs("article", { className: "md:col-span-12 group cursor-pointer mt-6", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden mb-4", children: /* @__PURE__ */ jsx("img", { src: moveis4.url, alt: "Sala de Estar com sofá modular", loading: "lazy", className: "w-full h-[400px] md:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif italic", children: "Sala de Estar" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-brand-stone uppercase tracking-widest mt-1", children: "Sofá modular em tecido nude" })
      ] })
    ] })
  ] });
}
function Produtos() {
  return /* @__PURE__ */ jsx("section", { id: "produtos", className: "bg-brand-dark text-brand-beige py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.4em] text-brand-beige/60 mb-4 block", children: "Curadoria" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-serif italic mb-4", children: "Peças de Destaque" }),
      /* @__PURE__ */ jsx("div", { className: "w-12 h-px bg-brand-beige/30 mx-auto" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12", children: produtos.map((p) => /* @__PURE__ */ jsxs("article", { className: "group cursor-pointer", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden bg-brand-beige/5 mb-5", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] opacity-60 mt-1 font-light", children: p.caption })
      ] })
    ] }, p.name)) })
  ] }) });
}
function Lojas() {
  return /* @__PURE__ */ jsx("section", { id: "lojas", className: "py-24 lg:py-32 px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-serif italic mb-12", children: "Nossas Lojas" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: lojas.map((l) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-[0.25em] font-semibold text-brand-olive mb-4", children: l.nome }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-light", children: l.endereco }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-stone mt-1", children: l.bairro })
      ] }, l.nome)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "contato", className: "bg-brand-olive/5 p-10 lg:p-14 flex flex-col justify-between border border-brand-dark/5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-serif italic mb-6 leading-tight", children: "Deseja um projeto personalizado?" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-light leading-relaxed opacity-80 mb-10", children: "Nossos consultores estão prontos para auxiliar na escolha das melhores texturas e acabamentos para o seu ambiente." }),
        /* @__PURE__ */ jsx("a", { href: "https://wa.me/5548991906288", target: "_blank", rel: "noreferrer", className: "inline-block bg-brand-dark text-brand-beige px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-brand-olive transition-colors", children: "Agendar Consultoria" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-10 border-t border-brand-dark/10 flex gap-8 text-[10px] uppercase tracking-[0.25em]", children: [
        /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/moveis.ecomade/", target: "_blank", rel: "noreferrer", className: "hover:opacity-60 transition-opacity", children: "Instagram" }),
        /* @__PURE__ */ jsx("a", { href: "https://linktr.ee/moveisecomade", target: "_blank", rel: "noreferrer", className: "hover:opacity-60 transition-opacity", children: "Linktree" }),
        /* @__PURE__ */ jsx("a", { href: "https://wa.me/5548991906288", target: "_blank", rel: "noreferrer", className: "hover:opacity-60 transition-opacity", children: "WhatsApp" })
      ] })
    ] })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "px-6 lg:px-8 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-brand-dark/10 pt-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("img", { src: logoAsset.url, alt: "Ecomade", className: "h-8 w-8 object-contain" }),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-serif italic", children: "Ecomade" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] opacity-50", children: "© 2026 Ecomade Mobiliário. Todos os direitos reservados." })
  ] }) });
}
export {
  Index as component
};
