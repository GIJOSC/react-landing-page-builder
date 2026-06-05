import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import logoAsset from "@/assets/logo.png.asset.json";
import moveis1 from "@/assets/moveis1.jpg.asset.json";
import moveis2 from "@/assets/moveis2.jpg.asset.json";
import moveis3 from "@/assets/moveis3.jpg.asset.json";
import moveis4 from "@/assets/moveis4.jpeg.asset.json";
import video1 from "@/assets/video1.mp4.asset.json";
import video2 from "@/assets/video2.mp4.asset.json";
import video3 from "@/assets/video3.mp4.asset.json";
import video4 from "@/assets/video4.mp4.asset.json";
import video5 from "@/assets/video5.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecomade — Móveis e Estofados de Alto Padrão" },
      {
        name: "description",
        content:
          "Mobiliário de autor: sofás, poltronas, mesas e cadeiras que traduzem design, conforto e sofisticação.",
      },
      { property: "og:title", content: "Ecomade — Móveis e Estofados" },
      {
        property: "og:description",
        content:
          "Curadoria de móveis e estofados de alto padrão para transformar ambientes com elegância.",
      },
      { property: "og:image", content: moveis4.url },
      { name: "twitter:image", content: moveis4.url },
    ],
  }),
  component: Index,
});

const ambientes = [
  {
    title: "Sala de Jantar",
    subtitle: "Mesa em madeira maciça & cadeiras estofadas",
    image: moveis1.url,
    span: "md:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Poltronas Orgânicas",
    subtitle: "Curvas suaves em tecido sage",
    image: moveis3.url,
    span: "md:col-span-4 md:mt-12",
    aspect: "aspect-[4/5]",
  },
];

const produtos = [
  { name: "Poltrona Flora", caption: "Estofado em tecido sage", image: moveis3.url },
  { name: "Cadeira Lunna", caption: "Acabamento boucle", image: moveis2.url },
  { name: "Módulo Horizonte", caption: "Sofá modular configurável", image: moveis4.url },
  { name: "Mesa Gaia", caption: "Madeira maciça envernizada", image: moveis1.url },
];

const lojas = [
  {
    nome: "Continente Shopping",
    endereco: "Rod. SC-401 — São José/SC",
    bairro: "Móveis Soltos & Planejados",
  },
  {
    nome: "Villa Romana Shopping",
    endereco: "Rua Dom Jaime Câmara, 750 — Florianópolis/SC",
    bairro: "Centro",
  },
  {
    nome: "Itaguaçu Shopping",
    endereco: "Rod. Gov. Ivo Silveira — São José/SC",
    bairro: "Estofados & Decoração",
  },
];

const heroVideos = [video1.url, video2.url, video3.url, video4.url, video5.url];

function Index() {
  return (
    <div className="bg-brand-beige text-brand-dark font-sans selection:bg-brand-olive selection:text-brand-beige">
      <Navigation />
      <main>
        <Hero />
        <Ambientes />
        <Produtos />
        <Lojas />
      </main>
      <SiteFooter />
    </div>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Ambientes", href: "#ambientes" },
    { label: "Produtos", href: "#produtos" },
    { label: "Lojas", href: "#lojas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-beige/95 backdrop-blur-md border-b border-brand-dark/10 text-brand-dark py-4"
          : "text-brand-beige py-6 mix-blend-difference"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Ecomade"
            className="h-10 w-10 object-contain"
          />
          <span className="font-serif italic text-2xl tracking-tight">Ecomade</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
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
    v.play().catch(() => {});
  }, [index]);

  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideos[index]}
        poster={moveis4.url}
        autoPlay
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-brand-dark/40" />
      <div className="relative z-10 text-center text-brand-beige px-6 max-w-4xl">
        <span className="text-[11px] uppercase tracking-[0.4em] font-medium opacity-80 block mb-8">
          Florianópolis · Santa Catarina
        </span>
        <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-balance">
          Realizando sonhos <br className="hidden md:inline" />
          através dos móveis
        </h1>
        <p className="max-w-lg mx-auto text-sm md:text-base font-light tracking-wide opacity-90 leading-relaxed">
          Móveis soltos & planejados de alto padrão — design, conforto e
          sofisticação para transformar cada ambiente da sua casa.
        </p>
        <a
          href="#contato"
          className="inline-block mt-12 border border-brand-beige/60 px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium hover:bg-brand-beige hover:text-brand-dark transition-all duration-500"
        >
          Solicitar Atendimento
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-14 bg-brand-beige/50 animate-pulse" />
      </div>
    </section>
  );
}

function Ambientes() {
  return (
    <section id="ambientes" className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-brand-olive font-semibold mb-4 block">
            Curadoria de Espaços
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">
            Harmonia em cada detalhe da sua rotina
          </h2>
        </div>
        <a
          href="#produtos"
          className="border-b border-brand-dark pb-1 text-xs uppercase tracking-widest hover:text-brand-olive hover:border-brand-olive transition-colors"
        >
          Ver todos ambientes
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {ambientes.map((a) => (
          <article key={a.title} className={`group cursor-pointer ${a.span}`}>
            <div className="overflow-hidden mb-4">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className={`w-full ${a.aspect} object-cover transition-transform duration-700 group-hover:scale-105`}
              />
            </div>
            <h3 className="text-xl font-serif italic">{a.title}</h3>
            <p className="text-xs text-brand-stone uppercase tracking-widest mt-1">
              {a.subtitle}
            </p>
          </article>
        ))}

        <article className="md:col-span-12 group cursor-pointer mt-6">
          <div className="overflow-hidden mb-4">
            <img
              src={moveis4.url}
              alt="Sala de Estar com sofá modular"
              loading="lazy"
              className="w-full h-[400px] md:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-serif italic">Sala de Estar</h3>
          <p className="text-xs text-brand-stone uppercase tracking-widest mt-1">
            Sofá modular em tecido nude
          </p>
        </article>
      </div>
    </section>
  );
}

function Produtos() {
  return (
    <section id="produtos" className="bg-brand-dark text-brand-beige py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[11px] uppercase tracking-[0.4em] text-brand-beige/60 mb-4 block">
            Curadoria
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Peças de Destaque</h2>
          <div className="w-12 h-px bg-brand-beige/30 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {produtos.map((p) => (
            <article key={p.name} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-brand-beige/5 mb-5">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest">{p.name}</p>
                <p className="text-[11px] opacity-60 mt-1 font-light">{p.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lojas() {
  return (
    <section id="lojas" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-12">Nossas Lojas</h2>
          <div className="space-y-12">
            {lojas.map((l) => (
              <div key={l.nome}>
                <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-olive mb-4">
                  {l.nome}
                </h4>
                <p className="text-lg font-light">{l.endereco}</p>
                <p className="text-sm text-brand-stone mt-1">{l.bairro}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="contato"
          className="bg-brand-olive/5 p-10 lg:p-14 flex flex-col justify-between border border-brand-dark/5"
        >
          <div>
            <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-tight">
              Deseja um projeto personalizado?
            </p>
            <p className="text-sm font-light leading-relaxed opacity-80 mb-10">
              Nossos consultores estão prontos para auxiliar na escolha das melhores texturas
              e acabamentos para o seu ambiente.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-brand-dark text-brand-beige px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-brand-olive transition-colors"
            >
              Agendar Consultoria
            </a>
          </div>
          <div className="mt-12 pt-10 border-t border-brand-dark/10 flex gap-8 text-[10px] uppercase tracking-[0.25em]">
            <a
              href="https://www.instagram.com/moveis.ecomade/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://linktr.ee/moveisecomade"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              Linktree
            </a>
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="px-6 lg:px-8 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-brand-dark/10 pt-8">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Ecomade" className="h-8 w-8 object-contain" />
          <span className="text-xl font-serif italic">Ecomade</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">
          © 2026 Ecomade Mobiliário. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
