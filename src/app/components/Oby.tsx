import React, { useState, useTransition, useCallback, useRef, useEffect } from "react";
import { X, ArrowLeft, EyeOff } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type Estado = "idle" | "pensando" | "feliz";
type Humor =
  | "neutro"
  | "animado"
  | "curioso"
  | "entediado"
  | "bravo"
  | "preocupado"
  | "feliz"
  | "sarcastico"
  | "malicioso"
  | "orgulhoso"
  | "sonolento";
type Screen = "home" | "detail";

interface Action {
  chip: string;
  icon: string;
  title: string;
  desc: string;
}

interface Section {
  label?: string;
  actions: Action[];
}

type ObyCard =
  | { tipo: "kpis"; itens: { label: string; valor: string; cor?: string }[] }
  | { tipo: "lista"; titulo?: string; itens: { texto: string; detalhe?: string; cor?: string; emoji?: string }[] }
  | { tipo: "alerta"; nivel: string; texto: string }
  | { tipo: "barras"; itens: { label: string; valor: number; max: number; cor?: string }[] };

interface DetailResult {
  texto: string;
  cards?: ObyCard[];
  chips?: string[];
}

// ── Ações úteis para a plataforma de pesquisa ───────────────────────────────

const SECTIONS: Section[] = [
  {
    actions: [
      { chip: "proxima-live", icon: "🎥", title: "Próxima Live", desc: "Quando é a próxima ao vivo" },
      { chip: "consultoria", icon: "🤝", title: "Consultoria 1:1", desc: "Marcar atendimento privado" },
      { chip: "eventos", icon: "📅", title: "Próximos Eventos", desc: "Workshops e encontros" },
      { chip: "calendario-cursos", icon: "🗓️", title: "Calendário", desc: "Cursos abrindo em breve" },
    ],
  },
];

// ── Respostas pré-programadas ───────────────────────────────────────────────

function gerarResposta(chip: string): DetailResult {
  switch (chip) {
    case "proxima-live":
      return {
        texto:
          "A próxima live da Dra. Sandri é sobre **SEM no lavaan**, no dia **25 de maio às 20h**. Inscrições abertas na aba Comunidade → Eventos.",
        cards: [
          {
            tipo: "lista",
            titulo: "Próximas 3 lives",
            itens: [
              { texto: "SEM no lavaan", detalhe: "25 mai · 20h", emoji: "🎥" },
              { texto: "AFE & CFA em R", detalhe: "08 jun · 20h", emoji: "🎥" },
              { texto: "Mediação Moderada", detalhe: "22 jun · 20h", emoji: "🎥" },
            ],
          },
        ],
        chips: ["Quero ser lembrado", "Adicionar ao calendário", "Ver gravações anteriores"],
      };
    case "consultoria":
      return {
        texto:
          "Você pode marcar uma **consultoria particular** com a Dra. Sandri de 50 minutos para discutir sua pesquisa. Próximos horários disponíveis:",
        cards: [
          {
            tipo: "lista",
            itens: [
              { texto: "Quarta · 27 mai · 14h", detalhe: "Disponível", cor: "success", emoji: "🟢" },
              { texto: "Quinta · 28 mai · 10h", detalhe: "Disponível", cor: "success", emoji: "🟢" },
              { texto: "Sexta · 29 mai · 16h", detalhe: "Disponível", cor: "success", emoji: "🟢" },
              { texto: "Segunda · 01 jun · 09h", detalhe: "1 vaga", cor: "warning", emoji: "🟡" },
            ],
          },
          {
            tipo: "alerta",
            nivel: "info",
            texto: "Alunos com plano Premium têm 1 consultoria/mês incluída.",
          },
        ],
        chips: ["Quero agendar", "Ver meu plano", "Falar com atendimento"],
      };
    case "eventos":
      return {
        texto: "Eventos agendados para os próximos 30 dias:",
        cards: [
          {
            tipo: "lista",
            itens: [
              { texto: "Live: SEM no lavaan", detalhe: "25 mai · 20h", emoji: "🎥" },
              { texto: "Workshop: Meta-análise", detalhe: "28 mai · 19h", emoji: "🧠" },
              { texto: "Encontro mensal Sandri", detalhe: "02 jun · 20h", emoji: "💬" },
              { texto: "Live: AFE & CFA em R", detalhe: "08 jun · 20h", emoji: "🎥" },
              { texto: "Workshop: PROCESS macro", detalhe: "15 jun · 19h", emoji: "🧠" },
            ],
          },
        ],
        chips: ["Adicionar ao calendário", "Ver gravações"],
      };
    case "calendario-cursos":
      return {
        texto: "Cursos com novas turmas abrindo em breve:",
        cards: [
          {
            tipo: "lista",
            itens: [
              { texto: "TRI Avançado", detalhe: "Início 03 jun", emoji: "🚀" },
              { texto: "Meta-análise com R", detalhe: "Início 10 jun", emoji: "🚀" },
              { texto: "Escrita acadêmica com IA", detalhe: "Início 17 jun", emoji: "🚀" },
              { texto: "SEM com lavaan", detalhe: "Início 24 jun", emoji: "🚀" },
            ],
          },
        ],
        chips: ["Reservar vaga", "Ver pré-requisitos"],
      };
    default:
      return {
        texto:
          "Posso te ajudar com a próxima live, consultoria particular, próximos eventos ou calendário de cursos. Escolha uma opção:",
        chips: ["Próxima live", "Consultoria 1:1", "Eventos", "Calendário"],
      };
  }
}

// ── Speech data ───────────────────────────────────────────────────────────────

type Fala = { texto: string; humor: Humor; duracao?: number };

const MOTIVACIONAIS: Fala[] = [
  { texto: "Bom dia! Bora produzir hoje. 📚", humor: "animado" },
  { texto: "Sua tese não escreve sozinha. Mas eu ajudo.", humor: "sarcastico" },
  { texto: "Pequenos avanços diários = grande pesquisa. ✨", humor: "feliz" },
  { texto: "Um parágrafo por dia. Combinado?", humor: "neutro" },
  { texto: "Foco. Café. Método. ☕", humor: "animado" },
  { texto: "Procrastinar é só adiar a defesa. 🫠", humor: "malicioso" },
  { texto: "Olha quem voltou pra continuar a pesquisa. 👀", humor: "sarcastico" },
  { texto: "Cada referência lida hoje é uma a menos na fila.", humor: "orgulhoso" },
  { texto: "Hoje é um bom dia para escrever uma frase incrível.", humor: "feliz" },
  { texto: "Sua banca vai amar essa metodologia. 🎯", humor: "animado" },
];

const IDLE_FALAS: Fala[] = [
  { texto: "Posso ajudar? Só me chama. 👋", humor: "animado" },
  { texto: "Tô aqui se quiser revisar algo. 📖", humor: "curioso" },
  { texto: "Pssst... lembra da análise pendente? 👀", humor: "malicioso" },
  { texto: "Tá lendo ou só rolando a tela?", humor: "sarcastico" },
  { texto: "Quer uma sugestão de prompt?", humor: "curioso" },
  { texto: "Faz tempo que não vejo você na Comunidade. 💬", humor: "preocupado" },
  { texto: "Próxima live é dia 25. Anota aí.", humor: "neutro" },
  { texto: "Já tomou água? Toma. Eu espero.", humor: "malicioso" },
  { texto: "Silêncio acadêmico suspeito... 🤨", humor: "sarcastico" },
];

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const LOADING_HUMORES: Humor[] = ["curioso", "preocupado", "neutro", "animado"];

// ── Mood color filter ────────────────────────────────────────────────────────

// Mantém na família azul — variações sutis de saturação/brilho/hue dentro do espectro slate-blue
const HUMOR_FILTER: Record<Humor, string> = {
  neutro: "hue-rotate(0deg) saturate(1) brightness(1)",
  animado: "hue-rotate(-8deg) saturate(1.20) brightness(1.14)",
  curioso: "hue-rotate(-16deg) saturate(0.92) brightness(1.06)",
  entediado: "hue-rotate(0deg) saturate(0.30) brightness(0.74)",
  bravo: "hue-rotate(-18deg) saturate(1.25) brightness(0.94)",
  preocupado: "hue-rotate(8deg) saturate(0.78) brightness(0.88)",
  feliz: "hue-rotate(-12deg) saturate(1.15) brightness(1.18)",
  sarcastico: "hue-rotate(-6deg) saturate(1.05) brightness(1.05)",
  malicioso: "hue-rotate(-4deg) saturate(1.15) brightness(1.02)",
  orgulhoso: "hue-rotate(-10deg) saturate(1.25) brightness(1.20)",
  sonolento: "hue-rotate(6deg) saturate(0.55) brightness(0.78)",
};

// ── AI Orb ───────────────────────────────────────────────────────────────────

function ObyOrb({ uid, estado, humor, size }: { uid: string; estado: Estado; humor: Humor; size: number }) {
  const h = Math.round(size * 1.14);
  const isSmall = size <= 40;
  // Paleta do site — slate/blue (#1e3a5f primário, #2563eb accent)
  const c1 = "#93c5fd",
    c2 = "#3b82f6",
    c3 = "#1e40af",
    c4 = "#1e3a5f";

  let eyes: React.ReactElement;

  if (estado === "feliz" || humor === "feliz") {
    eyes = (
      <>
        <path d="M31 54 Q37 46 43 54" style={{ stroke: "white", fill: "none", strokeWidth: 2.6, strokeLinecap: "round" }} />
        <path d="M57 54 Q63 46 69 54" style={{ stroke: "white", fill: "none", strokeWidth: 2.6, strokeLinecap: "round" }} />
      </>
    );
  } else if (estado === "pensando") {
    eyes = (
      <>
        <circle cx="37" cy="51" r="2.8" style={{ fill: "white", animation: "oby-think-eye 1.3s ease-in-out infinite" }} />
        <circle cx="63" cy="51" r="2.8" style={{ fill: "white", animation: "oby-think-eye 1.3s ease-in-out 0.65s infinite" }} />
      </>
    );
  } else if (humor === "bravo") {
    eyes = (
      <>
        <g style={{ animation: "oby-bravo-pulse 2.6s ease-in-out infinite" }}>
          <line x1="31" y1="52" x2="43" y2="49" style={{ stroke: "white", fill: "none", strokeWidth: 2.6, strokeLinecap: "round" }} />
        </g>
        <g style={{ animation: "oby-bravo-pulse 2.6s ease-in-out 0.3s infinite" }}>
          <line x1="57" y1="49" x2="69" y2="52" style={{ stroke: "white", fill: "none", strokeWidth: 2.6, strokeLinecap: "round" }} />
        </g>
      </>
    );
  } else if (humor === "entediado") {
    eyes = (
      <>
        <g style={{ animation: "oby-sleepy-eye 4.5s ease-in-out infinite" }}>
          <line x1="33" y1="53" x2="41" y2="53" style={{ stroke: "white", fill: "none", strokeWidth: 2.1, strokeLinecap: "round", opacity: 0.55 }} />
        </g>
        <g style={{ animation: "oby-sleepy-eye 4.5s ease-in-out 0.55s infinite" }}>
          <line x1="59" y1="53" x2="67" y2="53" style={{ stroke: "white", fill: "none", strokeWidth: 2.1, strokeLinecap: "round", opacity: 0.55 }} />
        </g>
      </>
    );
  } else if (humor === "preocupado") {
    eyes = (
      <>
        <g style={{ animation: "oby-blink 5.5s ease-in-out infinite" }}>
          <line x1="31" y1="48" x2="43" y2="53" style={{ stroke: "white", fill: "none", strokeWidth: 2.5, strokeLinecap: "round" }} />
        </g>
        <g style={{ animation: "oby-blink 5.5s ease-in-out 0.4s infinite" }}>
          <line x1="57" y1="53" x2="69" y2="48" style={{ stroke: "white", fill: "none", strokeWidth: 2.5, strokeLinecap: "round" }} />
        </g>
      </>
    );
  } else if (humor === "curioso") {
    eyes = (
      <>
        <g style={{ animation: "oby-blink 4.8s ease-in-out 0.5s infinite" }}>
          <line x1="32" y1="51" x2="42" y2="51" style={{ stroke: "white", fill: "none", strokeWidth: 2.3, strokeLinecap: "round" }} />
        </g>
        <g style={{ animation: "oby-curious-pulse 3s ease-in-out infinite" }}>
          <path d="M57 54 Q63 45 69 54" style={{ stroke: "white", fill: "none", strokeWidth: 2.8, strokeLinecap: "round" }} />
        </g>
      </>
    );
  } else if (humor === "sarcastico") {
    eyes = (
      <>
        <line x1="29" y1="44" x2="43" y2="46" style={{ stroke: "white", fill: "none", strokeWidth: 2.0, strokeLinecap: "round", opacity: 0.6 }} />
        <g>
          <line x1="31" y1="52" x2="43" y2="51" style={{ stroke: "white", fill: "none", strokeWidth: 2.5, strokeLinecap: "round" }} />
        </g>
        <g style={{ animation: "oby-blink 5.5s ease-in-out 0.5s infinite" }}>
          <line x1="57" y1="51" x2="69" y2="51" style={{ stroke: "white", fill: "none", strokeWidth: 2.5, strokeLinecap: "round" }} />
        </g>
      </>
    );
  } else if (humor === "malicioso") {
    eyes = (
      <>
        <path d="M30 53 Q37 49 44 51" style={{ stroke: "white", fill: "none", strokeWidth: 2.6, strokeLinecap: "round" }} />
        <path d="M56 51 Q63 49 70 53" style={{ stroke: "white", fill: "none", strokeWidth: 2.6, strokeLinecap: "round" }} />
      </>
    );
  } else if (humor === "orgulhoso") {
    eyes = (
      <>
        <path d="M31 53 Q37 47 43 53" style={{ stroke: "white", fill: "none", strokeWidth: 2.8, strokeLinecap: "round" }} />
        <path d="M57 53 Q63 47 69 53" style={{ stroke: "white", fill: "none", strokeWidth: 2.8, strokeLinecap: "round" }} />
      </>
    );
  } else if (humor === "sonolento") {
    eyes = (
      <>
        <g style={{ animation: "oby-sleepy-eye 3.5s ease-in-out infinite" }}>
          <path d="M31 54 Q37 51 43 54" style={{ stroke: "white", fill: "none", strokeWidth: 2.2, strokeLinecap: "round", opacity: 0.6 }} />
        </g>
        <g style={{ animation: "oby-sleepy-eye 3.5s ease-in-out 0.6s infinite" }}>
          <path d="M57 54 Q63 51 69 54" style={{ stroke: "white", fill: "none", strokeWidth: 2.2, strokeLinecap: "round", opacity: 0.6 }} />
        </g>
      </>
    );
  } else {
    eyes = (
      <>
        <g style={{ animation: "oby-blink 4.4s ease-in-out infinite" }}>
          <line x1="31" y1="51" x2="43" y2="51" style={{ stroke: "white", fill: "none", strokeWidth: 2.5, strokeLinecap: "round" }} />
        </g>
        <g style={{ animation: "oby-blink 4.4s ease-in-out 0.32s infinite" }}>
          <line x1="57" y1="51" x2="69" y2="51" style={{ stroke: "white", fill: "none", strokeWidth: 2.5, strokeLinecap: "round" }} />
        </g>
      </>
    );
  }

  let mouth: React.ReactElement | null = null;
  if (humor === "feliz" || estado === "feliz") {
    mouth = <path d="M40 65 Q50 73 60 65" style={{ stroke: "white", fill: "none", strokeWidth: 2.3, strokeLinecap: "round" }} />;
  } else if (humor === "animado") {
    mouth = <path d="M42 65 Q50 70 58 65" style={{ stroke: "white", fill: "none", strokeWidth: 2.2, strokeLinecap: "round" }} />;
  } else if (humor === "sarcastico") {
    mouth = <path d="M42 67 L51 67 Q55 67 58 63" style={{ stroke: "white", fill: "none", strokeWidth: 2.2, strokeLinecap: "round" }} />;
  } else if (humor === "malicioso") {
    mouth = (
      <>
        <path d="M40 66 Q48 70 60 64" style={{ stroke: "white", fill: "none", strokeWidth: 2.2, strokeLinecap: "round" }} />
        <line x1="50" y1="65" x2="50" y2="67" style={{ stroke: "white", strokeWidth: 1.4, strokeLinecap: "round", opacity: 0.55 }} />
      </>
    );
  } else if (humor === "orgulhoso") {
    mouth = <path d="M40 64 Q50 72 60 64" style={{ stroke: "white", fill: "none", strokeWidth: 2.4, strokeLinecap: "round" }} />;
  } else if (humor === "bravo") {
    mouth = <path d="M42 67 L50 64 L58 67" style={{ stroke: "white", fill: "none", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" }} />;
  } else if (humor === "preocupado") {
    mouth = <path d="M40 67 Q50 62 60 67" style={{ stroke: "white", fill: "none", strokeWidth: 2.2, strokeLinecap: "round" }} />;
  } else if (humor === "curioso") {
    mouth = <ellipse cx="50" cy="66" rx="3" ry="2.5" style={{ stroke: "white", fill: "none", strokeWidth: 1.8 }} />;
  } else if (humor === "entediado") {
    mouth = <line x1="44" y1="66" x2="56" y2="66" style={{ stroke: "white", fill: "none", strokeWidth: 2.0, strokeLinecap: "round", opacity: 0.55 }} />;
  } else if (humor === "sonolento") {
    mouth = <ellipse cx="50" cy="66" rx="4" ry="3" style={{ stroke: "white", fill: "none", strokeWidth: 1.8, opacity: 0.7 }} />;
  } else if (estado === "pensando") {
    mouth = <line x1="46" y1="66" x2="54" y2="66" style={{ stroke: "white", fill: "none", strokeWidth: 2.0, strokeLinecap: "round" }} />;
  } else {
    mouth = <line x1="45" y1="66" x2="55" y2="66" style={{ stroke: "white", fill: "none", strokeWidth: 2.0, strokeLinecap: "round", opacity: 0.85 }} />;
  }

  return (
    <div style={{ width: size, height: h, flexShrink: 0 }}>
      <svg viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={h} overflow="visible">
        <defs>
          <radialGradient id={`orb-${uid}`} cx="33%" cy="26%" r="74%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={c1} />
            <stop offset="24%" stopColor={c2} />
            <stop offset="62%" stopColor={c3} />
            <stop offset="100%" stopColor={c4} />
          </radialGradient>
          <radialGradient id={`amb-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={c2} stopOpacity="0.38" />
            <stop offset="100%" stopColor={c4} stopOpacity="0" />
          </radialGradient>
          <filter id={`sh-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor={c4} floodOpacity="0.48" />
          </filter>
          <clipPath id={`sc-${uid}`}>
            <circle cx="50" cy="50" r="38" />
          </clipPath>
        </defs>

        <g style={{ filter: HUMOR_FILTER[humor], transition: "filter 0.85s ease" }}>
          <circle cx="50" cy="52" r="48" fill={`url(#amb-${uid})`} />
          <ellipse cx="50" cy="57" rx="45" ry="11" fill="none" stroke={c2} strokeWidth="1.2" strokeDasharray="34 22" strokeOpacity="0.38" transform="rotate(-16 50 57)" />
          <circle cx="50" cy="50" r="38" fill={`url(#orb-${uid})`} filter={`url(#sh-${uid})`} style={{ transformBox: "fill-box", transformOrigin: "center", animation: "oby-pulse 3.8s ease-in-out infinite" }} />
          <g clipPath={`url(#sc-${uid})`} opacity="0.1">
            <path d="M70 36 C75 24 82 28 80 35 C78 40 69 41 68 35 Z" fill="white" />
            <path d="M40 64 C32 60 26 50 30 41 C34 32 48 30 57 36 C48 32 36 34 32 43 C28 52 34 62 42 66 Z" fill="white" />
          </g>
          <ellipse cx="33" cy="30" rx="18" ry="12" fill="white" opacity="0.1" transform="rotate(-22 33 30)" />
          <ellipse cx="27" cy="24" rx="10" ry="7" fill="white" opacity="0.32" />
          <circle cx="23" cy="21" r="3.5" fill="white" opacity="0.55" />
          <ellipse cx="81" cy="57" rx="4" ry="11" fill="#60a5fa" opacity="0.18" transform="rotate(10 81 57)" />
        </g>

        {eyes}
        {mouth}

        {!isSmall && <ellipse cx="50" cy="108" rx="25" ry="4" fill="rgba(30,58,95,0.25)" />}
      </svg>
    </div>
  );
}

// ── Speech bubble ────────────────────────────────────────────────────────────

function FalaBubble({ texto, onDismiss }: { texto: string; onDismiss: () => void }) {
  const [phase, setPhase] = useState<"dots" | "text">("dots");
  useEffect(() => {
    const t = setTimeout(() => setPhase("text"), 500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className="fixed bottom-[100px] right-4 sm:right-6 z-[9998] cursor-pointer select-none"
      style={{ animation: "oby-bubble-in 0.32s cubic-bezier(0.34,1.4,0.64,1)" }}
      onClick={onDismiss}
    >
      <div
        className="relative max-w-[230px] px-4 py-2.5 rounded-2xl text-[13px] text-white leading-snug"
        style={{
          background: "rgba(14,10,24,0.96)",
          border: "1px solid rgba(59,130,246,0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 28px rgba(30,58,95,0.4)",
        }}
      >
        {phase === "dots" ? (
          <span className="inline-flex gap-1.5 items-center py-0.5">
            {[0, 0.22, 0.44].map((delay, i) => (
              <span
                key={i}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "white",
                  opacity: 0.8,
                  display: "inline-block",
                  animation: `oby-dot 0.8s ${delay}s ease-in-out infinite`,
                }}
              />
            ))}
          </span>
        ) : (
          <span style={{ animation: "oby-text-in 0.22s ease" }}>{texto}</span>
        )}
        <span
          className="absolute"
          style={{
            bottom: -8,
            right: 22,
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid rgba(59,130,246,0.3)",
          }}
        />
        <span
          className="absolute"
          style={{
            bottom: -6,
            right: 23,
            width: 0,
            height: 0,
            borderLeft: "7px solid transparent",
            borderRight: "7px solid transparent",
            borderTop: "7px solid rgba(14,10,24,0.96)",
          }}
        />
      </div>
    </div>
  );
}

// ── Card renderers ───────────────────────────────────────────────────────────

const COR: Record<string, string> = {
  success: "text-emerald-300",
  warning: "text-amber-300",
  danger: "text-red-300",
  info: "text-blue-300",
  muted: "text-slate-400",
};

function CardKpis({ itens }: { itens: { label: string; valor: string; cor?: string }[] }) {
  return (
    <div className={`grid gap-2 mt-4 ${itens.length <= 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {itens.map((k, i) => (
        <div
          key={i}
          className="rounded-2xl px-3 py-3 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className={`text-base font-bold font-mono tabular-nums leading-tight ${COR[k.cor ?? ""] ?? "text-white"}`}>{k.valor}</p>
          <p className="text-[10px] text-slate-400 mt-1 leading-tight">{k.label}</p>
        </div>
      ))}
    </div>
  );
}

function CardLista({ titulo, itens }: { titulo?: string; itens: { texto: string; detalhe?: string; cor?: string; emoji?: string }[] }) {
  return (
    <div className="mt-4">
      {titulo && <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-semibold">{titulo}</p>}
      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
        {itens.map((it, i) => (
          <div key={i} className={`flex items-center gap-3 px-4 py-3 ${i < itens.length - 1 ? "border-b border-white/5" : ""}`}>
            {it.emoji && <span className="text-base shrink-0">{it.emoji}</span>}
            <p className={`text-[13px] flex-1 min-w-0 truncate leading-snug ${COR[it.cor ?? ""] ?? "text-white"}`}>{it.texto}</p>
            {it.detalhe && <p className="text-[11px] text-slate-400 shrink-0 font-mono tabular-nums">{it.detalhe}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function CardAlerta({ nivel, texto }: { nivel: string; texto: string }) {
  const styles: Record<string, { bg: string; txt: string }> = {
    success: { bg: "bg-emerald-500/8 border-emerald-500/20", txt: "text-emerald-300" },
    danger: { bg: "bg-red-500/8 border-red-500/20", txt: "text-red-300" },
    warning: { bg: "bg-amber-500/8 border-amber-500/20", txt: "text-amber-300" },
    info: { bg: "bg-blue-500/8 border-blue-500/20", txt: "text-blue-300" },
  };
  const s = styles[nivel] ?? styles.info;
  return (
    <div className={`mt-4 rounded-2xl border px-4 py-3 ${s.bg}`}>
      <p className={`text-[13px] leading-relaxed ${s.txt}`}>{texto}</p>
    </div>
  );
}

function CardBarras({ itens }: { itens: { label: string; valor: number; max: number; cor?: string }[] }) {
  return (
    <div className="mt-4 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      {itens.map((b, i) => {
        const pct = b.max > 0 ? Math.min(100, (b.valor / b.max) * 100) : 0;
        return (
          <div key={i} className={`px-4 py-3 ${i < itens.length - 1 ? "border-b border-white/5" : ""}`}>
            <div className="flex justify-between mb-2">
              <span className="text-[12px] text-slate-300">{b.label}</span>
              <span className="text-[12px] text-slate-400 font-mono tabular-nums">{b.valor.toLocaleString("pt-BR")}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: b.cor ?? "#a855f7" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ObyCards({ cards }: { cards: ObyCard[] }) {
  return (
    <>
      {cards.map((c, i) => {
        if (c.tipo === "kpis") return <CardKpis key={i} itens={c.itens} />;
        if (c.tipo === "lista") return <CardLista key={i} titulo={c.titulo} itens={c.itens} />;
        if (c.tipo === "alerta") return <CardAlerta key={i} nivel={c.nivel} texto={c.texto} />;
        if (c.tipo === "barras") return <CardBarras key={i} itens={c.itens} />;
        return null;
      })}
    </>
  );
}

// ── Home / Detail Screens ────────────────────────────────────────────────────

function HomeScreen({ sections, onSelect, pending }: { sections: Section[]; onSelect: (a: Action) => void; pending: boolean }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5" style={{ animation: "oby-screen-in 0.24s cubic-bezier(0.22,1,0.36,1)" }}>
      <div
        className="rounded-2xl p-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(30,58,95,0.32) 0%, rgba(37,99,235,0.16) 100%)",
          border: "1px solid rgba(59,130,246,0.28)",
        }}
      >
        <p className="text-[12px] text-blue-200/80 leading-snug">
          Olá! Sou o <span className="font-semibold text-white">Oby</span>, seu assistente da plataforma. Em que posso te ajudar?
        </p>
      </div>

      {sections.map((sec, si) => (
        <div key={si}>
          {sec.label && (
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-2.5 px-1">{sec.label}</p>
          )}
          <div className="grid grid-cols-2 gap-2">
            {sec.actions.map((action) => (
              <button
                key={action.chip}
                onClick={() => onSelect(action)}
                disabled={pending}
                className="flex flex-col items-start gap-2 rounded-2xl px-4 py-3.5 text-left transition-all duration-200 cursor-pointer disabled:opacity-50"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(59,130,246,0.1)";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <span className="text-xl leading-none">{action.icon}</span>
                <div>
                  <p className="text-[13px] font-semibold text-white leading-tight">{action.title}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DetailScreen({
  action,
  result,
  loading,
  onBack,
  onChipSelect,
}: {
  action: Action;
  result: DetailResult | null;
  loading: boolean;
  onBack: () => void;
  onChipSelect: (chip: string) => void;
}) {
  return (
    <div className="flex flex-col flex-1 min-h-0" style={{ animation: "oby-screen-in 0.24s cubic-bezier(0.22,1,0.36,1)" }}>
      <div className="flex items-center gap-3 px-4 py-3 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <button
          onClick={onBack}
          className="h-7 w-7 rounded-xl flex items-center justify-center hover:bg-white/8 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
        </button>
        <span className="text-xl leading-none">{action.icon}</span>
        <p className="text-[13px] font-semibold text-white flex-1 min-w-0 truncate">{action.title}</p>
        {loading && (
          <span className="inline-flex gap-1 items-center px-2 py-1 rounded-full" style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}>
            {[0, 0.2, 0.4].map((d, i) => (
              <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(59,130,246,0.9)", display: "inline-block", animation: `oby-dot 0.7s ${d}s ease-in-out infinite` }} />
            ))}
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {loading ? (
          <div className="space-y-3 pt-2">
            {[100, 80, 92, 68, 85].map((w, i) => (
              <div key={i} className="h-3 rounded-full animate-pulse" style={{ width: `${w}%`, background: "rgba(255,255,255,0.06)" }} />
            ))}
            <div className="grid grid-cols-2 gap-2 mt-5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 rounded-2xl animate-pulse" style={{ background: "rgba(255,255,255,0.04)" }} />
              ))}
            </div>
          </div>
        ) : result ? (
          <div style={{ animation: "oby-text-in 0.28s ease" }}>
            {result.texto && (
              <p
                className="text-[13px] text-white leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: result.texto.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-200">$1</strong>'),
                }}
              />
            )}
            {result.cards && result.cards.length > 0 && <ObyCards cards={result.cards} />}
            {result.chips && result.chips.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {result.chips.map((c) => (
                  <button
                    key={c}
                    onClick={() => onChipSelect(c)}
                    className="text-[11px] px-3 py-1.5 rounded-full text-slate-300 hover:text-white transition-colors cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────

export function ObyAvatar({ paginaAtual }: { paginaAtual?: string }) {
  const [aberto, setAberto] = useState(false);
  const [screen, setScreen] = useState<Screen>("home");
  const [action, setAction] = useState<Action | null>(null);
  const [result, setResult] = useState<DetailResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [estado, setEstado] = useState<Estado>("idle");
  const [humor, setHumor] = useState<Humor>("neutro");
  const [fala, setFala] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const [isHoveringOrb, setIsHoveringOrb] = useState(false);
  const [pending, startTransition] = useTransition();
  const [motion, setMotion] = useState({ tilt: 0, lag: 0, scaleX: 1, scaleY: 1 });
  const [idleIdx, setIdleIdx] = useState(0);
  const [tapping, setTapping] = useState(false);

  const felizTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const falaTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const scrollRef = useRef({ lastY: 0, resetTimer: 0 as ReturnType<typeof setTimeout> | 0 });
  const recentFalas = useRef<string[]>([]);
  const mountDone = useRef(false);
  // suppress unused warning when not needed
  void paginaAtual;

  const pickUniq = useCallback(<T extends { texto: string }>(arr: T[]): T => {
    const available = arr.filter((f) => !recentFalas.current.includes(f.texto));
    const pool = available.length > 0 ? available : arr;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    recentFalas.current = [chosen.texto, ...recentFalas.current].slice(0, 5);
    return chosen;
  }, []);

  const falar = useCallback((f: Fala) => {
    clearTimeout(falaTimer.current);
    setHumor(f.humor);
    setFala(f.texto);
    falaTimer.current = setTimeout(() => setFala(null), f.duracao ?? 6500);
  }, []);

  // Fala inicial após o mount
  useEffect(() => {
    if (mountDone.current) return;
    mountDone.current = true;
    let msg: Fala | null = null;
    try {
      const today = new Date().toDateString();
      const lastDate = localStorage.getItem("oby-motivacional-date");
      if (lastDate !== today) {
        const idx = Math.floor(Math.random() * MOTIVACIONAIS.length);
        localStorage.setItem("oby-motivacional-date", today);
        msg = MOTIVACIONAIS[idx];
      }
    } catch {}
    if (!msg) return;
    const t = setTimeout(() => falar(msg!), 3500);
    return () => clearTimeout(t);
  }, [falar]);

  // Scroll-driven motion
  useEffect(() => {
    scrollRef.current.lastY = window.scrollY;
    const onScroll = () => {
      const dy = window.scrollY - scrollRef.current.lastY;
      scrollRef.current.lastY = window.scrollY;
      const speed = Math.abs(dy);
      const tilt = Math.max(-15, Math.min(15, dy * 0.85));
      const lag = Math.max(-7, Math.min(7, dy * 0.45));
      const stretch = Math.min(0.08, speed * 0.0035);
      setMotion({ tilt, lag, scaleX: 1 - stretch * 0.7, scaleY: 1 + stretch });
      clearTimeout(scrollRef.current.resetTimer);
      scrollRef.current.resetTimer = setTimeout(() => setMotion({ tilt: 0, lag: 0, scaleX: 1, scaleY: 1 }), 220);
    };
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    document.querySelectorAll("[data-scroll-container], main").forEach((el) => {
      el.addEventListener("scroll", onScroll as EventListener, { passive: true });
    });
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      document.querySelectorAll("[data-scroll-container], main").forEach((el) => {
        el.removeEventListener("scroll", onScroll as EventListener);
      });
    };
  }, []);

  // Idle variations
  useEffect(() => {
    if (estado !== "idle" || aberto || hidden) return;
    const interval = setInterval(
      () => setIdleIdx((prev) => (prev + 1 + Math.floor(Math.random() * 3)) % 5),
      6500 + Math.random() * 4500,
    );
    return () => clearInterval(interval);
  }, [estado, aberto, hidden]);

  // Idle detection
  useEffect(() => {
    const resetIdle = () => {
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        if (!aberto) falar(pickUniq(IDLE_FALAS));
      }, 3 * 60_000);
    };
    window.addEventListener("mousemove", resetIdle, { passive: true });
    window.addEventListener("keydown", resetIdle, { passive: true });
    window.addEventListener("click", resetIdle, { passive: true });
    resetIdle();
    return () => {
      clearTimeout(idleTimer.current);
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("keydown", resetIdle);
      window.removeEventListener("click", resetIdle);
    };
  }, [aberto, falar, pickUniq]);

  const selectAction = useCallback((a: Action) => {
    setAction(a);
    setResult(null);
    setScreen("detail");
    setEstado("pensando");
    setHumor(pick(LOADING_HUMORES));
    setLoading(true);
    setFala(null);
    startTransition(() => {
      // Simula latência de "pensando" para parecer mais vivo
      setTimeout(() => {
        setResult(gerarResposta(a.chip));
        setLoading(false);
        clearTimeout(felizTimer.current);
        setEstado("feliz");
        setHumor("feliz");
        felizTimer.current = setTimeout(() => {
          setEstado("idle");
          setHumor("animado");
        }, 2400);
      }, 650 + Math.random() * 500);
    });
  }, []);

  const chipSelect = useCallback((chip: string) => {
    selectAction({ chip, icon: "🔍", title: chip, desc: "" });
  }, [selectAction]);

  const goHome = () => {
    setScreen("home");
    setEstado("idle");
  };
  const fechar = () => {
    setAberto(false);
    setScreen("home");
    setEstado("idle");
  };

  const IDLE_VARIANTS = [
    "oby-float 3.4s cubic-bezier(0.45,0,0.55,1) infinite",
    "oby-bob 4.2s ease-in-out infinite",
    "oby-sway 5.4s ease-in-out infinite",
    "oby-breathe 4.6s ease-in-out infinite",
    "oby-peek 5.8s ease-in-out infinite",
  ];
  const idleVariant = IDLE_VARIANTS[idleIdx % IDLE_VARIANTS.length];

  const floatAnim = tapping
    ? "oby-tap 0.42s cubic-bezier(0.34,1.4,0.64,1)"
    : !aberto
      ? estado === "idle"
        ? idleVariant
        : estado === "pensando"
          ? "oby-think 1.9s ease-in-out infinite"
          : "oby-happy 0.9s cubic-bezier(0.34,1.4,0.64,1)"
      : estado === "pensando"
        ? "oby-think 1.9s ease-in-out infinite"
        : estado === "feliz"
          ? "oby-happy 0.9s cubic-bezier(0.34,1.4,0.64,1)"
          : "none";

  const handleOrbClick = useCallback(() => {
    setTapping(true);
    setTimeout(() => setTapping(false), 420);
    setAberto((o) => !o);
  }, []);

  return (
    <>
      <style>{`
        @keyframes oby-float {
          0%   { transform: translateY(0)     rotate(-1.2deg) }
          28%  { transform: translateY(-7px)  rotate(0.4deg)  }
          58%  { transform: translateY(-10px) rotate(1.4deg)  }
          100% { transform: translateY(0)     rotate(-1.2deg) }
        }
        @keyframes oby-bob {
          0%,100% { transform: translateY(0)    rotate(0deg)    }
          25%     { transform: translateY(-4px) rotate(2.4deg)  }
          75%     { transform: translateY(-4px) rotate(-2.4deg) }
        }
        @keyframes oby-sway {
          0%,100% { transform: translate(0,    0)    rotate(-2deg) }
          50%     { transform: translate(3px, -3px)  rotate(2deg)  }
        }
        @keyframes oby-breathe {
          0%,100% { transform: scale(1)     translateY(0)    }
          50%     { transform: scale(1.035) translateY(-2px) }
        }
        @keyframes oby-peek {
          0%,100% { transform: translateY(0)    rotate(0deg)   }
          35%     { transform: translateY(-3px) rotate(-7deg)  }
          70%     { transform: translateY(-3px) rotate(7deg)   }
        }
        @keyframes oby-pulse {
          0%,100% { transform: scale(1)     }
          50%     { transform: scale(1.016) }
        }
        @keyframes oby-blink {
          0%, 80%, 100% { opacity: 1 }
          86%, 93%      { opacity: 0 }
        }
        @keyframes oby-think-eye {
          0%,100% { opacity: 1;   transform: scale(1)    }
          50%     { opacity: 0.2; transform: scale(0.85) }
        }
        @keyframes oby-bravo-pulse {
          0%,100% { stroke-width: 2.6; opacity: 0.92 }
          50%     { stroke-width: 3.0; opacity: 1    }
        }
        @keyframes oby-sleepy-eye {
          0%,55%,100% { transform: translateY(0);   opacity: 0.55 }
          75%         { transform: translateY(2px); opacity: 0.3  }
        }
        @keyframes oby-curious-pulse {
          0%,100% { stroke-width: 2.8 }
          50%     { stroke-width: 3.8 }
        }
        @keyframes oby-think {
          0%,100% { transform: rotate(-3.5deg) translateX(-1.5px) }
          50%     { transform: rotate(3.5deg)  translateX(1.5px)  }
        }
        @keyframes oby-happy {
          0%   { transform: translateY(0)    scale(1)    rotate(0deg)   }
          25%  { transform: translateY(-9px) scale(1.04) rotate(-4deg)  }
          50%  { transform: translateY(-4px) scale(1)    rotate(3deg)   }
          75%  { transform: translateY(-7px) scale(1.02) rotate(-1.5deg) }
          100% { transform: translateY(0)    scale(1)    rotate(0deg)   }
        }
        @keyframes oby-tap {
          0%   { transform: scale(1)    }
          40%  { transform: scale(0.86) }
          100% { transform: scale(1)    }
        }
        @keyframes oby-panel-in {
          from { opacity: 0; transform: translateY(16px) scale(0.95) }
          to   { opacity: 1; transform: translateY(0)    scale(1)    }
        }
        @keyframes oby-screen-in {
          from { opacity: 0; transform: translateX(10px) }
          to   { opacity: 1; transform: translateX(0)    }
        }
        @keyframes oby-bubble-in {
          from { opacity: 0; transform: translateY(8px) scale(0.93) }
          to   { opacity: 1; transform: translateY(0)   scale(1)    }
        }
        @keyframes oby-text-in {
          from { opacity: 0; transform: translateY(3px) }
          to   { opacity: 1; transform: translateY(0)   }
        }
        @keyframes oby-dot {
          0%,100% { opacity: 0.35; transform: scale(0.85) }
          50%     { opacity: 1;    transform: scale(1.15) }
        }
      `}</style>

      {!hidden && !aberto && fala && <FalaBubble texto={fala} onDismiss={() => setFala(null)} />}

      {aberto && !hidden && (
        <div
          className="fixed bottom-[100px] right-4 sm:right-6 z-[9998] flex flex-col overflow-hidden"
          style={{
            width: "min(400px, calc(100vw - 32px))",
            height: "min(580px, calc(100vh - 140px))",
            borderRadius: "24px",
            background: "rgba(9,7,16,0.97)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
            backdropFilter: "blur(36px)",
            animation: "oby-panel-in 0.3s cubic-bezier(0.34,1.4,0.64,1)",
          }}
        >
          <div
            className="flex items-center gap-3 px-5 py-3 shrink-0"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              background: "linear-gradient(160deg, rgba(30,58,95,0.32) 0%, rgba(37,99,235,0.14) 100%)",
            }}
          >
            <div
              style={{
                animation:
                  estado === "pensando"
                    ? "oby-think 1.9s ease-in-out infinite"
                    : estado === "feliz"
                      ? "oby-happy 0.8s cubic-bezier(0.34,1.4,0.64,1)"
                      : "none",
              }}
            >
              <ObyOrb uid="panel" estado={estado} humor={humor} size={32} />
            </div>
            <div className="flex-1 flex items-center gap-2">
              <p className="text-[13px] font-bold text-white tracking-wide">Oby</p>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-widest transition-colors ${
                  estado === "pensando"
                    ? "text-blue-300 bg-blue-500/15 border border-blue-500/25"
                    : "text-emerald-300 bg-emerald-500/10 border border-emerald-500/18"
                }`}
              >
                {estado === "pensando" ? "···" : "online"}
              </span>
            </div>
            <button
              onClick={fechar}
              className="h-7 w-7 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/8 transition-colors cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {screen === "home" ? (
            <HomeScreen sections={SECTIONS} onSelect={selectAction} pending={pending} />
          ) : action ? (
            <DetailScreen action={action} result={result} loading={loading} onBack={goHome} onChipSelect={chipSelect} />
          ) : null}
        </div>
      )}

      {!hidden && !aberto && (
        <button
          onClick={() => {
            setAberto(false);
            setHidden(true);
          }}
          onMouseEnter={() => setIsHoveringOrb(true)}
          onMouseLeave={() => setIsHoveringOrb(false)}
          aria-label="Ocultar Oby"
          title="Ocultar Oby"
          className="fixed bottom-6 z-[9999] h-7 w-7 rounded-full flex items-center justify-center cursor-pointer select-none"
          style={{
            right: "calc(1rem + 78px)",
            background: "rgba(14,10,24,0.85)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            color: "rgba(255,255,255,0.55)",
            opacity: isHoveringOrb ? 1 : 0,
            transform: isHoveringOrb ? "translateX(0) scale(1)" : "translateX(8px) scale(0.85)",
            pointerEvents: isHoveringOrb ? "auto" : "none",
            transition: "opacity 0.2s ease, transform 0.28s cubic-bezier(0.34,1.4,0.64,1)",
          }}
        >
          <EyeOff className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      )}

      {hidden && (
        <button
          onClick={() => setHidden(false)}
          className="fixed bottom-4 right-4 sm:right-6 z-[9999] text-[12px] px-3.5 py-2 rounded-full cursor-pointer select-none"
          style={{
            background: "rgba(14,10,24,0.92)",
            border: "1px solid rgba(59,130,246,0.32)",
            backdropFilter: "blur(16px)",
            color: "rgba(255,255,255,0.6)",
            boxShadow: "0 4px 20px rgba(30,58,95,0.32)",
            animation: "oby-bubble-in 0.3s ease",
          }}
        >
          Oby ↑
        </button>
      )}

      <div
        className="fixed bottom-3 right-4 sm:right-6 z-[9999]"
        onMouseEnter={() => setIsHoveringOrb(true)}
        onMouseLeave={() => setIsHoveringOrb(false)}
        style={{
          opacity: hidden ? 0 : 1,
          transform: hidden ? "scale(0.4) translateY(16px)" : "scale(1) translateY(0)",
          transition: "opacity 0.36s ease, transform 0.36s cubic-bezier(0.34,1.4,0.64,1)",
          pointerEvents: hidden ? "none" : "auto",
        }}
      >
        <button
          onClick={handleOrbClick}
          style={{ background: "none", border: "none", padding: 0 }}
          aria-label={aberto ? "Fechar Oby" : "Abrir Oby"}
        >
          <div
            style={{
              transform: `translateY(${motion.lag}px) rotate(${motion.tilt}deg) scale(${motion.scaleX}, ${motion.scaleY})`,
              transition:
                motion.tilt === 0 && motion.lag === 0
                  ? "transform 0.42s cubic-bezier(0.34,1.4,0.64,1)"
                  : "transform 0.09s ease-out",
              transformOrigin: "center bottom",
            }}
          >
            <div
              style={{
                transform: isHoveringOrb && !aberto ? "scale(1.08) translateY(-2px)" : "scale(1) translateY(0)",
                filter: isHoveringOrb && !aberto ? "brightness(1.08) saturate(1.05)" : "brightness(1)",
                transition: "transform 0.28s cubic-bezier(0.34,1.4,0.64,1), filter 0.28s ease",
                transformOrigin: "center bottom",
              }}
            >
              <div style={{ animation: floatAnim, filter: aberto ? "brightness(0.75)" : undefined }}>
                <ObyOrb uid="btn" estado={aberto ? "idle" : estado} humor={humor} size={72} />
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
