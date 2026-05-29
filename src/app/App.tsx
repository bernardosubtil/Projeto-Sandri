import { useState, useEffect, useRef, ElementType } from "react";
import { ObyAvatar } from "./components/Oby";
import { useAuth as useAuthContext } from "../contexts/AuthContext";

// ─── BRAND MARK (símbolo oficial "Pesquisa passo a passo") ─────────────────
function BrandMark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 666.18 666.15" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M666.18,0v444.63h-221.52v-223.11h-223.11V89.56C221.54,40.1,261.64,0,311.1,0h355.07Z" fill="#6578c4"/>
      <path d="M444.66,444.63v131.96c0,49.46-40.1,89.56-89.56,89.56H.02s-.02-.01-.02-.02V221.52h221.54v223.11h223.11Z" fill="#6578c4"/>
      <rect x="221.54" y="221.52" width="223.11" height="223.11" fill="#0a0a3a"/>
    </svg>
  );
}
function BrandMarkLight({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 666.18 666.15" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M666.18,0v444.63h-221.52v-223.11h-223.11V89.56C221.54,40.1,261.64,0,311.1,0h355.07Z" fill="#f9f3dd"/>
      <path d="M444.66,444.63v131.96c0,49.46-40.1,89.56-89.56,89.56H.02s-.02-.01-.02-.02V221.52h221.54v223.11h223.11Z" fill="#f9f3dd"/>
      <rect x="221.54" y="221.52" width="223.11" height="223.11" fill="#0a0a3a"/>
    </svg>
  );
}
function BrandSearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 687.48 658.51" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M524.25,446.34l-2.43-1.95c19.13-28.41,33.42-60.76,41.44-96.17C598.07,194.64,501.79,41.93,348.22,7.12,194.64-27.7,41.93,68.58,7.11,222.15c-34.8,153.58,61.48,306.29,215.05,341.11,81.11,18.38,161.97.2,225.37-43.67.33-.23.66-.46.98-.69l2.1,1.69,171.74,137.93,65.13-81.09-163.23-131.08ZM240.1,484.09c-109.86-24.9-178.72-134.14-153.83-244,24.9-109.85,134.14-178.72,243.99-153.81,109.85,24.9,178.72,134.14,153.83,243.98-5.29,23.35-14.4,44.86-26.53,64-19.23,30.41-46.07,54.88-77.27,71.34-41.53,21.92-90.8,29.69-140.2,18.5Z" fill="currentColor"/>
      <circle cx="285.18" cy="285.19" r="62.76" fill="currentColor"/>
    </svg>
  );
}
function MentoriaSymbol({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 461 678" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M298.17,195.24h124.62c20.89,0,37.85,16.96,37.85,37.85v445.16h-200.32V233.09c0-20.89,16.96-37.85,37.85-37.85Z" fill="#6578c4"/>
      <path d="M37.85,345.73h124.62c20.89,0,37.85,16.96,37.85,37.85v294.66H0v-294.66c0-20.89,16.96-37.85,37.85-37.85Z" fill="#0a0a3a"/>
      <circle cx="97.62" cy="227.78" r="81.35" fill="#6578c4"/>
      <circle cx="357.93" cy="81.35" r="81.35" fill="#0a0a3a"/>
    </svg>
  );
}
function WorkshopSymbol({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 603 603" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="2.73" width="272.98" height="272.98" fill="#0a0a3a"/>
      <rect x="0" y="329.41" width="272.98" height="272.98" fill="#0a0a3a"/>
      <rect x="324.67" y="329.41" width="272.98" height="272.98" fill="#0a0a3a"/>
      <circle cx="465.26" cy="137.85" r="137.85" fill="#6578c4"/>
    </svg>
  );
}
import {
  BookOpen,
  Award,
  BarChart2,
  Headphones,
  Bell,
  Search,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ThumbsUp,
  Send,
  Plus,
  LogOut,
  Brain,
  Library,
  MessageSquare,
  FileText,
  Code,
  Calculator,
  Trophy,
  Check,
  Download,
  Star,
  X,
  TrendingUp,
  Users,
  Handshake,
  Rocket,
  User,
  Settings,
  ArrowUp,
  Hash,
  CreditCard,
  Layers,
  Globe,
  Zap,
  Building2,
  Copy,
  Sparkles,
  Bot,
  BookMarked,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Pin,
  Image as ImageIcon,
  MoreHorizontal,
  Tag,
  Clock,
  Filter,
  Menu,
  LayoutDashboard,
  Edit3,
  Trash2,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Activity,
  UserCheck,
  PlusCircle,
  ShieldCheck,
  RefreshCw,
  ArrowUpRight,
  CalendarDays,
  BadgeCheck,
  Upload,
  Save,
  MapPin,
  Pencil,
  Eye,
  EyeOff,
  Mail,
  Lock,
  GraduationCap,
  Video,
  CalendarClock,
  PlayCircle,
  Radio,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { useSupabaseQuery } from "../hooks/useSupabaseQuery";
import * as gptsApi from "../lib/api/gpts";
import * as promptsApi from "../lib/api/prompts";
import * as atendimentoApi from "../lib/api/atendimento";
import * as parceriasApi from "../lib/api/parcerias";
import * as comunidadeApi from "../lib/api/comunidade";
import * as adminApi from "../lib/api/admin";
import * as perfilApi from "../lib/api/perfil";
import * as certificadosApi from "../lib/api/certificados";
import * as cursosApi from "../lib/api/cursos";
import * as storageApi from "../lib/api/storage";
import * as assinaturasApi from "../lib/api/assinaturas";
import * as livrosApi from "../lib/api/livros";
import * as livesApi from "../lib/api/lives";
import type { Live } from "../lib/api/lives";
import { notifyAdmin } from "../lib/api/notifications";
import { StripeCheckout } from "./components/StripeCheckout";

// ─── DATA ──────────────────────────────────────────────────────────────────

const cursosData = [
  {
    id: 1,
    nome: "Análises Bi e Multivariadas (JASP)",
    progress: 100,
    cat: "Estatística",
  },
  {
    id: 2,
    nome: "Análises Bi e Multivariadas (SPSS)",
    progress: 75,
    cat: "Estatística",
  },
  {
    id: 3,
    nome: "Escrita Científica de Alto Impacto",
    progress: 100,
    cat: "Escrita",
  },
  {
    id: 4,
    nome: "Metodologia Científica",
    progress: 40,
    cat: "Metodologia",
  },
  {
    id: 5,
    nome: "Análise de Mediação e Moderação",
    progress: 100,
    cat: "Estatística",
  },
  {
    id: 6,
    nome: "Análise de Redes",
    progress: 15,
    cat: "Estatística",
  },
  {
    id: 7,
    nome: "Objetiv Connect",
    progress: 60,
    cat: "Comunidade",
  },
];

const rankingData = [
  {
    pos: 1,
    nome: "Sandro Alves de Medeiros",
    xp: 129605,
    ativ: 3374,
    badges: ["Destaque", "Referência"],
  },
  {
    pos: 2,
    nome: "Samara Ernandes Adamczuk",
    xp: 119512,
    ativ: 3120,
    badges: ["Destaque"],
  },
  {
    pos: 3,
    nome: "Vinicius Ilha de Arruda",
    xp: 115307,
    ativ: 2990,
    badges: ["Referência"],
  },
  {
    pos: 4,
    nome: "Ana Carolina Fernandes",
    xp: 98400,
    ativ: 2567,
    badges: ["Destaque"],
  },
  {
    pos: 5,
    nome: "Ricardo Monteiro Santos",
    xp: 87230,
    ativ: 2145,
    badges: [],
  },
  {
    pos: 6,
    nome: "Patricia Lima Oliveira",
    xp: 76890,
    ativ: 1989,
    badges: [],
  },
  {
    pos: 7,
    nome: "Marcos Paulo Almeida",
    xp: 65430,
    ativ: 1756,
    badges: [],
  },
];

const sugestoesData = [
  {
    id: 1,
    titulo: "Como reportar análises estatísticas",
    votos: 14,
    status: "Planejado",
    descricao:
      "Guia completo sobre como reportar análises em publicações científicas.",
    autor: "Sandro Alves",
    data: "15 Jan 2026",
  },
  {
    id: 2,
    titulo: "Networking com outros alunos",
    votos: 9,
    status: "Em Análise",
    descricao:
      "Funcionalidade para conectar alunos com interesses acadêmicos similares.",
    autor: "Ana Carolina",
    data: "18 Jan 2026",
  },
  {
    id: 3,
    titulo: "Certificados com assinatura digital",
    votos: 9,
    status: "Em Análise",
    descricao:
      "Emissão de certificados com assinatura digital e verificação online.",
    autor: "Ricardo Santos",
    data: "20 Jan 2026",
  },
  {
    id: 4,
    titulo: "Integração com Zotero",
    votos: 6,
    status: "Planejado",
    descricao:
      "Sincronizar referências bibliográficas diretamente na plataforma.",
    autor: "Patricia Lima",
    data: "22 Jan 2026",
  },
  {
    id: 5,
    titulo: "App mobile offline",
    votos: 4,
    status: "Concluído",
    descricao:
      "Aplicativo para iOS e Android para acesso às aulas offline.",
    autor: "Marcos Paulo",
    data: "10 Dez 2025",
  },
];

const glossaryTerms = [
  {
    term: "Alpha de Cronbach",
    def: "Medida de consistência interna de uma escala psicométrica, variando de 0 a 1. Valores ≥ 0,70 são geralmente considerados aceitáveis.",
    cat: "Psicometria",
  },
  {
    term: "ANOVA",
    def: "Análise de Variância. Teste estatístico para comparar médias de três ou mais grupos.",
    cat: "Inferencial",
  },
  {
    term: "Bootstrapping",
    def: "Técnica de reamostragem que estima a distribuição amostral por meio de simulação computacional.",
    cat: "Métodos",
  },
  {
    term: "d de Cohen",
    def: "Medida de tamanho de efeito para diferença entre duas médias, expresso em desvios-padrão.",
    cat: "Efeito",
  },
  {
    term: "Efeito Mediador",
    def: "Variável que explica o mecanismo pelo qual uma variável independente influencia a dependente.",
    cat: "Modelagem",
  },
  {
    term: "Fator de Inflação da Variância (VIF)",
    def: "Indica multicolinearidade entre variáveis preditoras em regressão. VIF > 10 é problemático.",
    cat: "Regressão",
  },
  {
    term: "g de Hedges",
    def: "Medida de tamanho de efeito corrigida para amostras pequenas, similar ao d de Cohen.",
    cat: "Efeito",
  },
  {
    term: "Homogeneidade de Variâncias",
    def: "Pressuposto de que grupos diferentes possuem variâncias populacionais iguais.",
    cat: "Pressupostos",
  },
  {
    term: "IC 95%",
    def: "Intervalo de Confiança de 95%. Intervalo que contém o parâmetro populacional em 95% das amostras.",
    cat: "Inferencial",
  },
  {
    term: "Kurtosis",
    def: "Medida da forma da distribuição em relação ao achatamento das caudas em comparação à normal.",
    cat: "Descritiva",
  },
  {
    term: "Likert",
    def: "Escala de resposta ordinal tipicamente com 5 ou 7 pontos, da discordância à concordância.",
    cat: "Medida",
  },
  {
    term: "Mediação Moderada",
    def: "Modelo no qual o efeito mediador é condicionado a uma terceira variável moderadora.",
    cat: "Modelagem",
  },
  {
    term: "Normalidade",
    def: "Pressuposto de que os resíduos ou dados seguem distribuição normal. Verificado com Shapiro-Wilk ou K-S.",
    cat: "Pressupostos",
  },
  {
    term: "Odds Ratio (OR)",
    def: "Razão de chances. Medida de associação usada em regressão logística e estudos caso-controle.",
    cat: "Inferencial",
  },
  {
    term: "p-valor",
    def: "Probabilidade de obter um resultado tão extremo quanto o observado sob a hipótese nula.",
    cat: "Inferencial",
  },
  {
    term: "Qui-quadrado (χ²)",
    def: "Teste não-paramétrico para verificar associação entre variáveis categóricas.",
    cat: "Inferencial",
  },
  {
    term: "R²",
    def: "Coeficiente de determinação. Proporção da variância da variável dependente explicada pelo modelo.",
    cat: "Regressão",
  },
  {
    term: "Skewness",
    def: "Medida da assimetria da distribuição em relação à distribuição normal.",
    cat: "Descritiva",
  },
  {
    term: "Tamanho de Efeito",
    def: "Magnitude prática de um resultado estatístico, independente do tamanho amostral.",
    cat: "Efeito",
  },
  {
    term: "V de Cramer",
    def: "Medida de associação para tabelas de contingência maiores que 2×2, baseada no χ².",
    cat: "Efeito",
  },
];

type Aula = { titulo: string; duracao: string };
type Modulo = { titulo: string; aulas: Aula[] };
type Curso = {
  icon: ElementType;
  titulo: string;
  desc: string;
  foto: string;
  duracao: string;
  aulas: number;
  nivel: "Iniciante" | "Intermediário" | "Avançado";
  instrutor: string;
  modulos: Modulo[];
};

const modulosPadrao = (tema: string): Modulo[] => [
  {
    titulo: `Fundamentos de ${tema}`,
    aulas: [
      { titulo: "Apresentação do curso e materiais", duracao: "4:12" },
      { titulo: `Conceitos centrais em ${tema}`, duracao: "18:30" },
      { titulo: "Quando usar e quando evitar", duracao: "12:45" },
    ],
  },
  {
    titulo: "Aplicação prática",
    aulas: [
      { titulo: "Preparação e organização dos dados", duracao: "22:08" },
      { titulo: "Passo a passo no software", duracao: "31:55" },
      { titulo: "Verificação de pressupostos", duracao: "16:20" },
    ],
  },
  {
    titulo: "Interpretação e reporte",
    aulas: [
      { titulo: "Lendo o output corretamente", duracao: "19:42" },
      { titulo: "Redação no padrão APA 7ª", duracao: "14:08" },
      { titulo: "Erros comuns em bancas", duracao: "11:30" },
    ],
  },
];

// Aplica blur uniforme no layout quando um modal está aberto
function useModalBlur(isOpen: boolean) {
  useEffect(() => {
    const el = document.getElementById("app-layout");
    if (!el) return;
    if (isOpen) {
      el.classList.add("modal-blurred");
    } else {
      el.classList.remove("modal-blurred");
    }
    return () => el.classList.remove("modal-blurred");
  }, [isOpen]);
}

// Parse "mm:ss" or "hh:mm" to total minutes
function parseDuracao(d: string): number {
  const parts = d.split(":").map(Number);
  if (parts.length === 2) return parts[0] + parts[1] / 60;
  return 0;
}
function calcDuracaoTotal(modulos: Modulo[]): string {
  const totalMin = modulos.reduce((acc, m) => acc + m.aulas.reduce((a2, a) => a2 + parseDuracao(a.duracao), 0), 0);
  const h = Math.floor(totalMin / 60);
  const m = Math.round(totalMin % 60);
  return h > 0 ? `${h}h ${m > 0 ? m + "min" : ""}`.trim() : `${m}min`;
}

const trilhaCourses: Record<string, Curso[]> = {
  Estatística: [
    {
      icon: Calculator,
      titulo: "Regressão Linear Múltipla",
      desc: "Modelos preditivos com interpretação completa de coeficientes e diagnósticos.",
      foto: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=70",
      duracao: "4h 20min",
      aulas: 12,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Regressão"),
    },
    {
      icon: BarChart2,
      titulo: "ANOVA e MANOVA",
      desc: "Análise de variância uni e multivariada para grupos independentes e repetidos.",
      foto: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=70",
      duracao: "5h 10min",
      aulas: 14,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("ANOVA"),
    },
    {
      icon: Layers,
      titulo: "Análise Fatorial Exploratória",
      desc: "Exploração de estruturas latentes com avaliação de validade convergente.",
      foto: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=600&q=70",
      duracao: "6h 00min",
      aulas: 15,
      nivel: "Avançado",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("AFE"),
    },
    {
      icon: Globe,
      titulo: "Modelagem de Equações Estruturais",
      desc: "SEM, path analysis e CFA com interpretação de índices de ajuste.",
      foto: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=70",
      duracao: "8h 45min",
      aulas: 22,
      nivel: "Avançado",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("SEM"),
    },
  ],
  Metodologia: [
    {
      icon: FileText,
      titulo: "Delineamento de Pesquisa",
      desc: "Tipos de pesquisa, validade interna/externa e controle de variáveis.",
      foto: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=70",
      duracao: "3h 30min",
      aulas: 10,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Delineamento"),
    },
    {
      icon: Rocket,
      titulo: "Amostragem e Poder Estatístico",
      desc: "Cálculo amostral, G*Power e critérios de poder para diferentes testes.",
      foto: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=70",
      duracao: "4h 00min",
      aulas: 11,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Amostragem"),
    },
    {
      icon: Building2,
      titulo: "Revisão Sistemática e Meta-análise",
      desc: "Protocolos PRISMA, extração de dados e síntese quantitativa.",
      foto: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=600&q=70",
      duracao: "7h 20min",
      aulas: 18,
      nivel: "Avançado",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Revisão Sistemática"),
    },
    {
      icon: Award,
      titulo: "Ética em Pesquisa Científica",
      desc: "TCLE, CONEP, diretrizes internacionais e dilemas éticos aplicados.",
      foto: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=70",
      duracao: "2h 50min",
      aulas: 8,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Ética"),
    },
  ],
  "Escrita Científica": [
    {
      icon: FileText,
      titulo: "Estrutura de Artigos IMRaD",
      desc: "Introdução, Método, Resultados e Discussão: cada seção com critérios de qualidade.",
      foto: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=70",
      duracao: "5h 15min",
      aulas: 13,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("IMRaD"),
    },
    {
      icon: Library,
      titulo: "Normas APA 7ª Edição",
      desc: "Citações, referências, tabelas e figuras no padrão APA mais recente.",
      foto: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=70",
      duracao: "3h 40min",
      aulas: 11,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("APA"),
    },
    {
      icon: Hash,
      titulo: "Título, Resumo e Palavras-chave",
      desc: "Como escrever elementos de alta visibilidade para indexação e buscabilidade.",
      foto: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=70",
      duracao: "2h 10min",
      aulas: 7,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Título e Resumo"),
    },
    {
      icon: MessageSquare,
      titulo: "Resposta a Revisores",
      desc: "Estratégias para elaborar respostas profissionais e aumentar chances de aceite.",
      foto: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=70",
      duracao: "3h 00min",
      aulas: 9,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Resposta a Revisores"),
    },
  ],
  Psicometria: [
    {
      icon: Layers,
      titulo: "Construção de Escalas Psicométricas",
      desc: "Da definição do constructo à versão final validada, com itens replicáveis.",
      foto: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=70",
      duracao: "6h 30min",
      aulas: 16,
      nivel: "Avançado",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Escalas"),
    },
    {
      icon: BarChart2,
      titulo: "Análise Fatorial Confirmatória (CFA)",
      desc: "Avaliação de modelos teóricos com índices de ajuste e modificações.",
      foto: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&q=70",
      duracao: "5h 50min",
      aulas: 14,
      nivel: "Avançado",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("CFA"),
    },
    {
      icon: Brain,
      titulo: "Teoria de Resposta ao Item (TRI)",
      desc: "Modelos de 1, 2 e 3 parâmetros com aplicação em testes adaptativos.",
      foto: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=70",
      duracao: "7h 15min",
      aulas: 18,
      nivel: "Avançado",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("TRI"),
    },
    {
      icon: Award,
      titulo: "Confiabilidade e Validade",
      desc: "Alfa, ômega, validade convergente, discriminante e de critério.",
      foto: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=70",
      duracao: "4h 25min",
      aulas: 12,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Confiabilidade"),
    },
  ],
  "Pesquisa Qualitativa": [
    {
      icon: MessageSquare,
      titulo: "Análise Temática Reflexiva",
      desc: "Método de Braun & Clarke aplicado passo a passo a entrevistas e textos.",
      foto: "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=600&q=70",
      duracao: "4h 50min",
      aulas: 13,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Análise Temática"),
    },
    {
      icon: Users,
      titulo: "Grupos Focais",
      desc: "Planejamento, condução e análise de grupos focais em pesquisa social.",
      foto: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=70",
      duracao: "3h 20min",
      aulas: 10,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Grupos Focais"),
    },
    {
      icon: FileText,
      titulo: "Entrevistas Semiestruturadas",
      desc: "Roteiros flexíveis, escuta ativa e análise de conteúdo.",
      foto: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=70",
      duracao: "3h 45min",
      aulas: 11,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Entrevistas"),
    },
    {
      icon: Code,
      titulo: "NVivo e Atlas.ti",
      desc: "Codificação assistida por software com casos reais de pesquisa.",
      foto: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=70",
      duracao: "5h 30min",
      aulas: 15,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Software Qualitativo"),
    },
  ],
  Ferramentas: [
    {
      icon: Code,
      titulo: "JASP para Iniciantes",
      desc: "Interface visual para análises bayesianas e frequentistas sem código.",
      foto: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=70",
      duracao: "4h 00min",
      aulas: 12,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("JASP"),
    },
    {
      icon: BarChart2,
      titulo: "SPSS Completo",
      desc: "Do básico ao avançado: sintaxe, outputs e interpretação de resultados.",
      foto: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=70",
      duracao: "9h 20min",
      aulas: 24,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("SPSS"),
    },
    {
      icon: Layers,
      titulo: "R e RStudio Aplicado",
      desc: "Tidyverse, ggplot2 e pacotes para análises psicológicas e biomédicas.",
      foto: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=70",
      duracao: "11h 40min",
      aulas: 28,
      nivel: "Avançado",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("R"),
    },
    {
      icon: Brain,
      titulo: "Assistentes de Apoio Analítico",
      desc: "Uso ético e estratégico de ferramentas de apoio na produção científica.",
      foto: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=70",
      duracao: "2h 30min",
      aulas: 8,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Assistentes"),
    },
  ],
  Carreira: [
    {
      icon: Trophy,
      titulo: "Construindo um CV Lattes de Impacto",
      desc: "Estruturação estratégica do currículo para editais e seleções.",
      foto: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=70",
      duracao: "2h 20min",
      aulas: 7,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Lattes"),
    },
    {
      icon: Rocket,
      titulo: "Submetendo a Journals Internacionais",
      desc: "Escolha do periódico, cover letter e gestão da submissão.",
      foto: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=70",
      duracao: "3h 50min",
      aulas: 10,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Submissão Internacional"),
    },
    {
      icon: Globe,
      titulo: "Networking Acadêmico",
      desc: "Construindo parcerias internacionais e visibilidade científica.",
      foto: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=70",
      duracao: "2h 00min",
      aulas: 6,
      nivel: "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Networking"),
    },
    {
      icon: Handshake,
      titulo: "Defesa de Qualificação e Tese",
      desc: "Preparação técnica e emocional para bancas exigentes.",
      foto: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=70",
      duracao: "3h 10min",
      aulas: 9,
      nivel: "Intermediário",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao("Defesa"),
    },
  ],
};

const effectTools = [
  {
    name: "d de Cohen",
    desc: "Diferença padronizada entre duas médias. d=0.2 (pequeno), 0.5 (médio), 0.8 (grande).",
    icon: "d",
  },
  {
    name: "Delta de Glass",
    desc: "Usa o desvio-padrão do grupo controle como denominador. Ideal para grupos com variâncias distintas.",
    icon: "Δ",
  },
  {
    name: "g de Hedges",
    desc: "Versão corrigida do d de Cohen para amostras pequenas. Mais conservador e robusto.",
    icon: "g",
  },
  {
    name: "Phi (φ)",
    desc: "Associação em tabelas 2×2. Equivale ao r de Pearson para variáveis dicotômicas.",
    icon: "φ",
  },
  {
    name: "V de Cramer",
    desc: "Extensão do Phi para tabelas maiores. Normalizado entre 0 e 1.",
    icon: "V",
  },
  {
    name: "w de Cohen",
    desc: "Tamanho de efeito para qui-quadrado de aderência e teste de homogeneidade.",
    icon: "w",
  },
];

const catores = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const booksCat: Record<
  string,
  { titulo: string; autor: string; ano: number; cor: string }[]
> = {
  Objetiv: [
    {
      titulo: "Estatística Aplicada às Ciências Humanas",
      autor: "Equipe Objetiv",
      ano: 2024,
      cor: "from-blue-600 to-blue-800",
    },
    {
      titulo: "Guia de Escrita Científica de Alto Impacto",
      autor: "Equipe Objetiv",
      ano: 2023,
      cor: "from-indigo-600 to-indigo-800",
    },
    {
      titulo: "Metodologia da Pesquisa: Da Ideia à Publicação",
      autor: "Equipe Objetiv",
      ano: 2023,
      cor: "from-slate-600 to-slate-800",
    },
    {
      titulo: "SEM e Análise Fatorial Confirmatória",
      autor: "Equipe Objetiv",
      ano: 2024,
      cor: "from-teal-600 to-teal-800",
    },
  ],
  Externos: [
    {
      titulo:
        "Field, A. – Discovering Statistics Using IBM SPSS",
      autor: "Andy Field",
      ano: 2018,
      cor: "from-emerald-600 to-emerald-800",
    },
    {
      titulo: "Hair et al. – Multivariate Data Analysis",
      autor: "Hair et al.",
      ano: 2019,
      cor: "from-rose-600 to-rose-800",
    },
    {
      titulo: "Cohen, J. – Statistical Power Analysis",
      autor: "Jacob Cohen",
      ano: 1988,
      cor: "from-amber-600 to-amber-800",
    },
    {
      titulo:
        "Tabachnick & Fidell – Using Multivariate Statistics",
      autor: "Tabachnick & Fidell",
      ano: 2019,
      cor: "from-purple-600 to-purple-800",
    },
    {
      titulo: "Kline, R. B. – Principles of SEM",
      autor: "Rex Kline",
      ano: 2023,
      cor: "from-cyan-600 to-cyan-800",
    },
  ],
};

function getInitials(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const avatarColors = [
  "bg-slate-500",
  "bg-slate-600",
  "bg-slate-700",
  "bg-slate-600",
  "bg-slate-500",
  "bg-slate-700",
  "bg-slate-600",
];

function statusColor(status: string) {
  if (status === "Planejado") return "bg-slate-100 text-slate-700";
  if (status === "Em Análise") return "bg-slate-200 text-slate-700";
  if (status === "Concluído") return "bg-slate-300 text-slate-800";
  return "bg-slate-100 text-slate-600";
}

// ─── DATA: GPTs ────────────────────────────────────────────────────────────

const gptsData = [
  {
    id: 1,
    nome: "Analista Estatístico",
    autora: "Dra. Sandri",
    desc: "Indica o teste estatístico ideal a partir do seu desenho de pesquisa e tipo de variáveis.",
    cat: "Análise",
    icon: BarChart2,
    cor: "from-blue-500 to-indigo-600",
    conversas: "2.4k",
    link: "https://chat.openai.com",
  },
  {
    id: 2,
    nome: "Revisor de Metodologia",
    autora: "Dra. Sandri",
    desc: "Lê seu método e aponta lacunas, vieses e oportunidades de melhoria com referências.",
    cat: "Metodologia",
    icon: FileText,
    cor: "from-emerald-500 to-teal-600",
    conversas: "1.8k",
    link: "https://chat.openai.com",
  },
  {
    id: 3,
    nome: "Gerador de Sintaxe R",
    autora: "Dra. Sandri",
    desc: "Gera código R comentado para análises descritivas, inferenciais e modelagem avançada.",
    cat: "Análise",
    icon: Code,
    cor: "from-slate-700 to-slate-900",
    conversas: "3.1k",
    link: "https://chat.openai.com",
  },
  {
    id: 4,
    nome: "Escritor Acadêmico",
    autora: "Dra. Sandri",
    desc: "Reformula trechos do seu manuscrito mantendo o tom científico e a estrutura IMRaD.",
    cat: "Escrita",
    icon: BookOpen,
    cor: "from-rose-500 to-pink-600",
    conversas: "5.2k",
    link: "https://chat.openai.com",
  },
  {
    id: 5,
    nome: "Buscador de Referências",
    autora: "Dra. Sandri",
    desc: "Sugere referências relevantes em bases indexadas para fundamentar seu argumento.",
    cat: "Escrita",
    icon: Library,
    cor: "from-amber-500 to-orange-600",
    conversas: "1.3k",
    link: "https://chat.openai.com",
  },
  {
    id: 6,
    nome: "Calculadora de Efeito",
    autora: "Dra. Sandri",
    desc: "Calcula e interpreta tamanho de efeito (d, g, η², R²) com texto pronto para artigo.",
    cat: "Análise",
    icon: Calculator,
    cor: "from-cyan-500 to-blue-600",
    conversas: "920",
    link: "https://chat.openai.com",
  },
  {
    id: 7,
    nome: "Respondedor de Revisores",
    autora: "Dra. Sandri",
    desc: "Estrutura respostas profissionais a pareceristas, preservando educação e clareza.",
    cat: "Escrita",
    icon: MessageSquare,
    cor: "from-violet-500 to-purple-600",
    conversas: "740",
    link: "https://chat.openai.com",
  },
  {
    id: 8,
    nome: "Crítico de Pesquisa",
    autora: "Dra. Sandri",
    desc: "Analisa seu projeto sob a ótica de bancas e periódicos exigentes.",
    cat: "Metodologia",
    icon: Brain,
    cor: "from-fuchsia-500 to-rose-600",
    conversas: "1.1k",
    link: "https://chat.openai.com",
  },
  {
    id: 9,
    nome: "Mediação & Moderação",
    autora: "Dra. Sandri",
    desc: "Especialista em modelos de mediação, moderação e mediação moderada com PROCESS macro.",
    cat: "Análise",
    icon: Layers,
    cor: "from-teal-500 to-emerald-600",
    conversas: "560",
    link: "https://chat.openai.com",
  },
];

const gptsCategorias = ["Todos", "Análise", "Metodologia", "Escrita"];

// ─── DATA: PROMPTS ─────────────────────────────────────────────────────────

const promptsData = [
  {
    id: 1,
    titulo: "Introdução com gancho científico",
    cat: "Escrita",
    desc: "Gera uma introdução que parte de um problema real e leva ao gap da literatura.",
    prompt:
      "Escreva uma introdução acadêmica de até 4 parágrafos para o tema [TEMA]. Comece com um problema concreto, mostre a relevância social/científica, faça uma síntese da literatura recente (últimos 5 anos) e termine apresentando o gap e o objetivo do estudo. Tom: formal, terceira pessoa, sem clichês.",
    autor: "Dra. Sandri",
    favoritos: 312,
    cor: "from-rose-500 to-pink-600",
  },
  {
    id: 2,
    titulo: "Justificativa em 3 camadas",
    cat: "Escrita",
    desc: "Estrutura a justificativa em camada teórica, prática e social.",
    prompt:
      "Elabore a justificativa do estudo [TEMA] em três camadas explícitas: (1) relevância teórica, citando lacunas na literatura, (2) relevância prática, com aplicações reais, (3) relevância social, ligando ao impacto coletivo. Cada camada deve ter um parágrafo coeso.",
    autor: "Dra. Sandri",
    favoritos: 198,
    cor: "from-amber-500 to-orange-600",
  },
  {
    id: 3,
    titulo: "Escolha de teste estatístico",
    cat: "Análise",
    desc: "Diagnostica o teste mais adequado a partir do desenho amostral.",
    prompt:
      "Com base no seguinte cenário: [DESCREVA NÚMERO DE GRUPOS, TIPO DE VARIÁVEIS E DESENHO]. Indique: (1) o teste estatístico mais adequado, (2) os pressupostos que precisam ser verificados, (3) o teste alternativo caso pressupostos sejam violados, (4) a métrica de tamanho de efeito apropriada.",
    autor: "Dra. Sandri",
    favoritos: 521,
    cor: "from-blue-500 to-indigo-600",
  },
  {
    id: 4,
    titulo: "Discussão integrada à literatura",
    cat: "Escrita",
    desc: "Constrói uma discussão que dialoga com estudos prévios sem ser repetitiva.",
    prompt:
      "Redija a seção de Discussão para o resultado [RESULTADO]. Estruture em: (1) síntese do achado principal, (2) comparação com 2-3 estudos prévios convergentes, (3) comparação com 1-2 estudos divergentes, (4) explicação teórica plausível, (5) implicações práticas. Evite reescrever os resultados.",
    autor: "Dra. Sandri",
    favoritos: 287,
    cor: "from-violet-500 to-purple-600",
  },
  {
    id: 5,
    titulo: "Resposta cordial a revisor",
    cat: "Submissão",
    desc: "Responde a uma crítica de revisor preservando o argumento.",
    prompt:
      "O revisor escreveu: [COLE O COMENTÁRIO]. Elabore uma resposta cordial, agradecendo a observação, explicando objetivamente sua escolha metodológica e indicando qual ajuste foi feito no manuscrito (com referência à página/linha). Use tom respeitoso e profissional.",
    autor: "Dra. Sandri",
    favoritos: 405,
    cor: "from-emerald-500 to-teal-600",
  },
  {
    id: 6,
    titulo: "Sintaxe R comentada",
    cat: "Análise",
    desc: "Gera código R passo a passo com comentários didáticos.",
    prompt:
      "Gere o código R completo para realizar [ANÁLISE] usando o dataset [NOME]. Inclua: importação, limpeza, verificação de pressupostos, análise principal, tamanho de efeito e visualização. Cada bloco deve ter comentários explicando o que está sendo feito e por quê.",
    autor: "Dra. Sandri",
    favoritos: 612,
    cor: "from-slate-700 to-slate-900",
  },
  {
    id: 7,
    titulo: "Resumo estruturado em 250 palavras",
    cat: "Escrita",
    desc: "Produz abstract no padrão IMRaD com contagem precisa.",
    prompt:
      "Escreva um resumo estruturado de até 250 palavras para o artigo cujo conteúdo é [COLAR/DESCRIÇÃO]. Use seções: Objetivo, Método, Resultados, Conclusão. Cada seção em parágrafo curto, sem repetir o título do estudo.",
    autor: "Dra. Sandri",
    favoritos: 376,
    cor: "from-cyan-500 to-blue-600",
  },
  {
    id: 8,
    titulo: "Crítica metodológica em banca",
    cat: "Metodologia",
    desc: "Faz uma autocrítica antecipando perguntas de banca.",
    prompt:
      "Liste as 5 perguntas mais prováveis que uma banca exigente faria sobre o seguinte método: [DESCREVA O MÉTODO]. Para cada pergunta, escreva uma resposta defensável de 3-4 frases, citando evidência ou literatura.",
    autor: "Dra. Sandri",
    favoritos: 244,
    cor: "from-fuchsia-500 to-rose-600",
  },
  {
    id: 9,
    titulo: "Operacionalização de variável",
    cat: "Metodologia",
    desc: "Define como medir uma variável conceitual de forma replicável.",
    prompt:
      "Operacionalize a variável [CONCEITO] indicando: (1) definição conceitual, (2) definição operacional, (3) instrumento de medida validado, (4) escala e codificação, (5) limites de interpretação. Justifique cada escolha com pelo menos uma referência.",
    autor: "Dra. Sandri",
    favoritos: 167,
    cor: "from-teal-500 to-emerald-600",
  },
  {
    id: 10,
    titulo: "Reescrita formal de parágrafo",
    cat: "Escrita",
    desc: "Eleva um trecho informal para tom acadêmico sem perder o sentido.",
    prompt:
      "Reescreva o parágrafo abaixo em tom formal acadêmico, na terceira pessoa, eliminando coloquialismos e fortalecendo conectivos. Mantenha o sentido original e a estrutura argumentativa. Trecho: [COLE AQUI].",
    autor: "Dra. Sandri",
    favoritos: 489,
    cor: "from-indigo-500 to-blue-600",
  },
  {
    id: 11,
    titulo: "Interpretação de output SPSS",
    cat: "Análise",
    desc: "Traduz tabelas do SPSS em linguagem científica pronta para artigo.",
    prompt:
      "Considere o seguinte output do SPSS: [COLE TABELA]. Escreva o parágrafo de resultados em padrão APA 7ª edição, com estatísticas no texto (F, gl, p, η²), interpretação substantiva e indicação do tamanho de efeito.",
    autor: "Dra. Sandri",
    favoritos: 358,
    cor: "from-amber-500 to-yellow-600",
  },
  {
    id: 12,
    titulo: "Limitações honestas e construtivas",
    cat: "Submissão",
    desc: "Lista limitações sem minar a credibilidade do estudo.",
    prompt:
      "Liste 4 limitações para o estudo [TEMA + DELINEAMENTO]. Para cada limitação: descreva-a em uma frase, explique o impacto no resultado, e indique uma direção futura para resolvê-la. Tom: honesto, mas sem desqualificar os achados.",
    autor: "Dra. Sandri",
    favoritos: 213,
    cor: "from-slate-500 to-slate-700",
  },
];

const promptsCategorias = ["Todos", "Escrita", "Análise", "Metodologia", "Submissão"];

// ─── DATA: COMUNIDADE ─────────────────────────────────────────────────────

const canaisComunidade = [
  { id: "geral", nome: "Geral", icon: Hash, cor: "text-slate-600" },
  { id: "duvidas", nome: "Dúvidas Metodológicas", icon: MessageSquare, cor: "text-[#6578c4]" },
  { id: "analises", nome: "Análises & Estatística", icon: BarChart2, cor: "text-emerald-600" },
  { id: "escrita", nome: "Escrita Científica", icon: BookOpen, cor: "text-rose-600" },
  { id: "vagas", nome: "Vagas & Oportunidades", icon: Rocket, cor: "text-amber-600" },
  { id: "eventos", nome: "Eventos & Lives", icon: Bell, cor: "text-violet-600" },
];

const postsComunidade = [
  {
    id: 1,
    autor: "Sandro Alves de Medeiros",
    cargo: "Doutorando · UFRGS",
    canal: "duvidas",
    canalLabel: "Dúvidas Metodológicas",
    tempo: "há 12 min",
    fixado: true,
    titulo: "Como reportar efeitos de interação em ANOVA fatorial?",
    conteudo:
      "Pessoal, rodei uma ANOVA 2×3 e encontrei interação significativa (p = 0.013, η²p = 0.08). Estou em dúvida se devo apresentar o gráfico de interação antes ou depois das comparações múltiplas. A APA 7ª recomenda alguma ordem específica?",
    tags: ["ANOVA", "APA 7", "Reporte"],
    likes: 47,
    comentarios: 14,
    salvos: 9,
  },
  {
    id: 2,
    autor: "Samara Ernandes Adamczuk",
    cargo: "Mestranda · USP",
    canal: "analises",
    canalLabel: "Análises & Estatística",
    tempo: "há 1 h",
    fixado: false,
    titulo: "Compartilho meu workflow em R para AFE + AFC no mesmo dataset",
    conteudo:
      "Montei um pipeline em R que divide aleatoriamente o dataset, roda AFE no primeiro split e AFC no segundo. Quem quiser, posso compartilhar o script. Já economizou semanas de trabalho aqui no laboratório.",
    tags: ["R", "AFE", "AFC", "Workflow"],
    likes: 89,
    comentarios: 32,
    salvos: 56,
  },
  {
    id: 3,
    autor: "Vinicius Ilha de Arruda",
    cargo: "Doutor · UFPR",
    canal: "escrita",
    canalLabel: "Escrita Científica",
    tempo: "há 3 h",
    fixado: false,
    titulo: "Aceite no Journal of Applied Psychology após 3 rejeições",
    conteudo:
      "Depois de 18 meses e três rejeições, finalmente saiu o aceite. A maior virada foi reescrever a Discussão em três blocos: achado-comparação-implicação. Compartilho aqui o template que usei.",
    tags: ["Publicação", "Discussão", "Template"],
    likes: 156,
    comentarios: 48,
    salvos: 102,
  },
  {
    id: 4,
    autor: "Ana Carolina Fernandes",
    cargo: "Pesquisadora · Fiocruz",
    canal: "eventos",
    canalLabel: "Eventos & Lives",
    tempo: "há 5 h",
    fixado: false,
    titulo: "Live amanhã às 20h: Modelagem de Equações Estruturais na prática",
    conteudo:
      "Sandri vai mostrar passo a passo um SEM completo no lavaan, com interpretação dos índices de ajuste. Inscrições abertas no painel de Eventos. Quem já confirmou presença?",
    tags: ["SEM", "lavaan", "Live"],
    likes: 64,
    comentarios: 21,
    salvos: 38,
  },
  {
    id: 5,
    autor: "Ricardo Monteiro Santos",
    cargo: "Doutorando · UFMG",
    canal: "vagas",
    canalLabel: "Vagas & Oportunidades",
    tempo: "há 8 h",
    fixado: false,
    titulo: "Bolsa de pesquisa em psicometria — UFMG, 24 meses",
    conteudo:
      "Nosso grupo abriu uma vaga de bolsa para mestrado em psicometria avançada (TRI multidimensional). Pré-requisitos: domínio de R e inglês intermediário. Posso enviar o edital por DM.",
    tags: ["Bolsa", "Psicometria", "TRI"],
    likes: 42,
    comentarios: 17,
    salvos: 71,
  },
  {
    id: 6,
    autor: "Patricia Lima Oliveira",
    cargo: "Doutoranda · UnB",
    canal: "geral",
    canalLabel: "Geral",
    tempo: "há 1 d",
    fixado: false,
    titulo: "Qualifiquei essa semana — agradecimento à comunidade",
    conteudo:
      "Só passando para agradecer a galera que respondeu minhas dúvidas no canal de análises nos últimos 6 meses. A banca elogiou bastante a robustez metodológica. Sem essa comunidade eu não teria chegado aqui.",
    tags: ["Qualificação", "Agradecimento"],
    likes: 211,
    comentarios: 64,
    salvos: 12,
  },
];

const eventosProximos = [
  { titulo: "Live: SEM no lavaan", data: "25 mai · 20h", tipo: "Live" },
  { titulo: "Workshop: Meta-análise prática", data: "28 mai · 19h", tipo: "Workshop" },
  { titulo: "Encontro mensal Sandri", data: "02 jun · 20h", tipo: "Encontro" },
];

// ─── DATA: ADMIN ──────────────────────────────────────────────────────────

const assinaturasData = [
  { id: 1, nome: "Sandro Alves de Medeiros", email: "sandro@ufrgs.br", plano: "Consultoria", status: "Ativo", inicio: "Jan 2025", valor: 197 },
  { id: 2, nome: "Samara Ernandes Adamczuk", email: "samara@usp.br", plano: "Essencial", status: "Ativo", inicio: "Fev 2025", valor: 97 },
  { id: 3, nome: "Vinicius Ilha de Arruda", email: "vinicius@ufpr.br", plano: "Consultoria", status: "Ativo", inicio: "Jan 2025", valor: 197 },
  { id: 4, nome: "Ana Carolina Fernandes", email: "ana@fiocruz.br", plano: "Essencial", status: "Ativo", inicio: "Mar 2025", valor: 97 },
  { id: 5, nome: "Ricardo Monteiro Santos", email: "ricardo@ufmg.br", plano: "Essencial", status: "Ativo", inicio: "Abr 2025", valor: 97 },
  { id: 6, nome: "Patricia Lima Oliveira", email: "patricia@unb.br", plano: "Consultoria", status: "Pausado", inicio: "Nov 2024", valor: 197 },
  { id: 7, nome: "Marcos Paulo Almeida", email: "marcos@unicamp.br", plano: "Essencial", status: "Ativo", inicio: "Mai 2025", valor: 97 },
  { id: 8, nome: "Juliana Costa Ribeiro", email: "juliana@puc.br", plano: "Consultoria", status: "Ativo", inicio: "Jan 2025", valor: 197 },
  { id: 9, nome: "Bruno Ferreira Nunes", email: "bruno@ufsc.br", plano: "Essencial", status: "Ativo", inicio: "Mar 2025", valor: 97 },
  { id: 10, nome: "Camila Souza Borges", email: "camila@ufba.br", plano: "Consultoria", status: "Cancelado", inicio: "Out 2024", valor: 197 },
];

const receitaData = [
  { mes: "Jan", receita: 18420, assinaturas: 62 },
  { mes: "Fev", receita: 21150, assinaturas: 71 },
  { mes: "Mar", receita: 24800, assinaturas: 84 },
  { mes: "Abr", receita: 27640, assinaturas: 93 },
  { mes: "Mai", receita: 31200, assinaturas: 105 },
];

const acessosData = [
  { dia: "Seg", acessos: 124 },
  { dia: "Ter", acessos: 156 },
  { dia: "Qua", acessos: 198 },
  { dia: "Qui", acessos: 171 },
  { dia: "Sex", acessos: 243 },
  { dia: "Sáb", acessos: 89 },
  { dia: "Dom", acessos: 67 },
];

const distribuicaoPlanos = [
  { name: "Consultoria", value: 52, color: "#0a0a3a" },
  { name: "Essencial", value: 41, color: "#6578c4" },
  { name: "Institucional", value: 7, color: "#c9a961" },
];

const parceirosAdmin = [
  { id: 1, nome: "UFRGS", tipo: "Universidade Federal", cidade: "Porto Alegre, RS", vagas: 50, plano: "Premium", inicio: "Mar 2025", status: "Ativo", contato: "reitoria@ufrgs.br", totalPago: 14850 },
  { id: 2, nome: "USP", tipo: "Universidade Federal", cidade: "São Paulo, SP", vagas: 120, plano: "Premium", inicio: "Jan 2025", status: "Ativo", contato: "pos@usp.br", totalPago: 35640 },
  { id: 3, nome: "Fiocruz", tipo: "Instituto de Pesquisa", cidade: "Rio de Janeiro, RJ", vagas: 30, plano: "Pro", inicio: "Abr 2025", status: "Ativo", contato: "pesquisa@fiocruz.br", totalPago: 5910 },
  { id: 4, nome: "UFMG", tipo: "Universidade Federal", cidade: "Belo Horizonte, MG", vagas: 40, plano: "Premium", inicio: "Fev 2025", status: "Ativo", contato: "posgr@ufmg.br", totalPago: 11880 },
  { id: 5, nome: "PUC-RS", tipo: "Universidade Privada", cidade: "Porto Alegre, RS", vagas: 25, plano: "Pro", inicio: "Mai 2025", status: "Em Negociação", contato: "inovacao@pucrs.br", totalPago: 0 },
];

const atividadeRecente = [
  { tipo: "assinatura", texto: "Nova assinatura Premium — Bruno Ferreira", tempo: "há 2 min" },
  { tipo: "parceria", texto: "PUC-RS enviou proposta de parceria", tempo: "há 18 min" },
  { tipo: "cancelamento", texto: "Camila Souza cancelou assinatura", tempo: "há 1 h" },
  { tipo: "assinatura", texto: "Nova assinatura Pro — Marcos Paulo", tempo: "há 3 h" },
  { tipo: "parceria", texto: "USP renovou contrato por mais 12 meses", tempo: "há 5 h" },
];

// ─── DATA: LIVROS METODOLÓGICOS ───────────────────────────────────────────

type Livro = {
  titulo: string;
  autor: string;
  ano: number;
  editora: string;
  contexto: string;
  usadoEm: string[];
  cor: string;
  foto: string;
};

const livrosCategorias = [
  { id: "ia-pesquisa", nome: "IA & Pesquisa Acadêmica", icon: Sparkles },
  { id: "quantitativa", nome: "Métodos Quantitativos", icon: BarChart2 },
  { id: "qualitativa", nome: "Métodos Qualitativos", icon: MessageSquare },
  { id: "psicometria", nome: "Psicometria", icon: Layers },
  { id: "escrita", nome: "Escrita Científica", icon: BookOpen },
  { id: "filosofia", nome: "Filosofia da Ciência", icon: Brain },
];

const livrosData: Record<string, Livro[]> = {
  "ia-pesquisa": [
    {
      titulo: "Co-Intelligence: Living and Working with AI",
      autor: "Ethan Mollick",
      ano: 2024,
      editora: "Portfolio",
      contexto: "Base teórica para os módulos de uso ético e produtivo de LLMs na escrita e revisão de artigos.",
      usadoEm: ["Curso de Assistentes Analíticos", "Curso de Escrita Acadêmica com IA"],
      cor: "from-slate-700 to-slate-900",
      foto: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "The Coming Wave",
      autor: "Mustafa Suleyman",
      ano: 2023,
      editora: "Crown",
      contexto: "Fundamenta a discussão sobre o impacto da IA generativa em ciência, pesquisa e instituições.",
      usadoEm: ["Trilha de Carreira Acadêmica", "Módulo de Ética em Pesquisa"],
      cor: "from-indigo-700 to-slate-900",
      foto: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "AI Snake Oil",
      autor: "Arvind Narayanan & Sayash Kapoor",
      ano: 2024,
      editora: "Princeton University Press",
      contexto: "Referência crítica para identificar limitações e armadilhas no uso de IA preditiva em pesquisa.",
      usadoEm: ["Crítica Metodológica", "Avaliação de Ferramentas de IA"],
      cor: "from-rose-800 to-slate-900",
      foto: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Human Compatible",
      autor: "Stuart Russell",
      ano: 2019,
      editora: "Viking",
      contexto: "Embasa as discussões sobre alinhamento, vieses e responsabilidade no uso de IA em pesquisa.",
      usadoEm: ["Ética em Pesquisa Científica"],
      cor: "from-blue-800 to-slate-900",
      foto: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "The Atlas of AI",
      autor: "Kate Crawford",
      ano: 2021,
      editora: "Yale University Press",
      contexto: "Perspectiva crítica sobre dados, poder e infraestrutura da IA. Usado na trilha de Ética.",
      usadoEm: ["Ética em Pesquisa", "Filosofia da Ciência"],
      cor: "from-emerald-800 to-slate-900",
      foto: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Hello World",
      autor: "Hannah Fry",
      ano: 2018,
      editora: "W. W. Norton",
      contexto: "Introdução acessível ao funcionamento de algoritmos. Base do módulo introdutório de IA para pesquisadores.",
      usadoEm: ["Introdução à IA para Pesquisadores"],
      cor: "from-amber-800 to-slate-900",
      foto: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=600&q=70",
    },
  ],
  quantitativa: [
    {
      titulo: "Discovering Statistics Using IBM SPSS",
      autor: "Andy Field",
      ano: 2018,
      editora: "SAGE",
      contexto: "Referência principal de toda a trilha de estatística aplicada e dos cursos de SPSS.",
      usadoEm: ["SPSS Completo", "Regressão Linear Múltipla", "ANOVA e MANOVA"],
      cor: "from-emerald-700 to-emerald-900",
      foto: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Multivariate Data Analysis",
      autor: "Hair, Black, Babin & Anderson",
      ano: 2019,
      editora: "Cengage",
      contexto: "Base teórica para os cursos avançados de análise multivariada e modelagem estrutural.",
      usadoEm: ["Modelagem de Equações Estruturais", "Análise Fatorial"],
      cor: "from-blue-700 to-blue-900",
      foto: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Statistical Power Analysis for the Behavioral Sciences",
      autor: "Jacob Cohen",
      ano: 1988,
      editora: "Routledge",
      contexto: "Referência clássica para os módulos de cálculo amostral e tamanho de efeito.",
      usadoEm: ["Amostragem e Poder Estatístico", "Tamanho de Efeito"],
      cor: "from-amber-700 to-amber-900",
      foto: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Using Multivariate Statistics",
      autor: "Tabachnick & Fidell",
      ano: 2019,
      editora: "Pearson",
      contexto: "Apoio à interpretação e diagnóstico de modelos multivariados nos cursos de análise.",
      usadoEm: ["MANOVA", "Análise Fatorial Exploratória"],
      cor: "from-purple-700 to-purple-900",
      foto: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Introduction to Mediation, Moderation, and Conditional Process Analysis",
      autor: "Andrew F. Hayes",
      ano: 2022,
      editora: "Guilford Press",
      contexto: "Base do GPT de Mediação & Moderação e do curso correspondente.",
      usadoEm: ["Mediação e Moderação", "PROCESS macro"],
      cor: "from-rose-700 to-rose-900",
      foto: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=70",
    },
  ],
  qualitativa: [
    {
      titulo: "Thematic Analysis: A Practical Guide",
      autor: "Virginia Braun & Victoria Clarke",
      ano: 2022,
      editora: "SAGE",
      contexto: "Método base do curso de Análise Temática Reflexiva, usado nas trilhas qualitativas.",
      usadoEm: ["Análise Temática Reflexiva"],
      cor: "from-rose-700 to-rose-900",
      foto: "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Análise de Conteúdo",
      autor: "Laurence Bardin",
      ano: 2016,
      editora: "Edições 70",
      contexto: "Referência clássica brasileira para análise sistemática de dados qualitativos.",
      usadoEm: ["Entrevistas Semiestruturadas", "Análise de Conteúdo"],
      cor: "from-slate-700 to-slate-900",
      foto: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Qualitative Inquiry and Research Design",
      autor: "John W. Creswell",
      ano: 2018,
      editora: "SAGE",
      contexto: "Estrutura teórica dos delineamentos qualitativos abordados nos cursos.",
      usadoEm: ["Pesquisa Qualitativa", "Delineamento de Pesquisa"],
      cor: "from-teal-700 to-teal-900",
      foto: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Case Study Research and Applications",
      autor: "Robert K. Yin",
      ano: 2017,
      editora: "SAGE",
      contexto: "Referência para o módulo de estudos de caso e validade em pesquisas qualitativas.",
      usadoEm: ["Estudos de Caso"],
      cor: "from-blue-700 to-blue-900",
      foto: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=70",
    },
  ],
  psicometria: [
    {
      titulo: "Principles and Practice of Structural Equation Modeling",
      autor: "Rex B. Kline",
      ano: 2023,
      editora: "Guilford Press",
      contexto: "Manual oficial do curso avançado de SEM e da análise fatorial confirmatória.",
      usadoEm: ["SEM", "Análise Fatorial Confirmatória"],
      cor: "from-cyan-700 to-cyan-900",
      foto: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Psychometric Theory",
      autor: "Jum C. Nunnally & Ira H. Bernstein",
      ano: 1994,
      editora: "McGraw-Hill",
      contexto: "Referência clássica para os módulos de confiabilidade, validade e construção de escalas.",
      usadoEm: ["Construção de Escalas", "Confiabilidade e Validade"],
      cor: "from-indigo-700 to-indigo-900",
      foto: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Item Response Theory for Psychologists",
      autor: "Susan E. Embretson & Steven P. Reise",
      ano: 2000,
      editora: "Psychology Press",
      contexto: "Fundamenta o curso de TRI e os módulos de avaliação psicométrica avançada.",
      usadoEm: ["Teoria de Resposta ao Item"],
      cor: "from-violet-700 to-violet-900",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=70",
    },
  ],
  escrita: [
    {
      titulo: "Publication Manual of the APA (7ª ed.)",
      autor: "American Psychological Association",
      ano: 2020,
      editora: "APA",
      contexto: "Norma oficial usada em todos os módulos de escrita, citação e formatação.",
      usadoEm: ["Normas APA 7ª Edição", "Estrutura IMRaD"],
      cor: "from-slate-700 to-slate-900",
      foto: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "How to Write a Lot",
      autor: "Paul J. Silvia",
      ano: 2018,
      editora: "APA",
      contexto: "Base do módulo de produtividade científica e construção de rotina de escrita.",
      usadoEm: ["Produtividade Científica"],
      cor: "from-emerald-700 to-emerald-900",
      foto: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Writing Science",
      autor: "Joshua Schimel",
      ano: 2012,
      editora: "Oxford University Press",
      contexto: "Referência para os cursos de narrativa científica e estrutura argumentativa em artigos.",
      usadoEm: ["Estrutura IMRaD", "Discussão Integrada"],
      cor: "from-amber-700 to-amber-900",
      foto: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Stylish Academic Writing",
      autor: "Helen Sword",
      ano: 2012,
      editora: "Harvard University Press",
      contexto: "Base do módulo de reescrita formal e elevação do tom acadêmico.",
      usadoEm: ["Reescrita Formal", "Escrita Acadêmica"],
      cor: "from-rose-700 to-rose-900",
      foto: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=70",
    },
  ],
  filosofia: [
    {
      titulo: "A Estrutura das Revoluções Científicas",
      autor: "Thomas S. Kuhn",
      ano: 1962,
      editora: "Perspectiva",
      contexto: "Referência para discussões sobre paradigmas e mudança científica, inclusive na era da IA.",
      usadoEm: ["Filosofia da Ciência"],
      cor: "from-slate-700 to-slate-900",
      foto: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "A Lógica da Pesquisa Científica",
      autor: "Karl R. Popper",
      ano: 1959,
      editora: "Cultrix",
      contexto: "Base epistemológica sobre falseabilidade e método científico nos módulos introdutórios.",
      usadoEm: ["Metodologia Científica", "Crítica Metodológica"],
      cor: "from-blue-800 to-slate-900",
      foto: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=70",
    },
    {
      titulo: "Contra o Método",
      autor: "Paul Feyerabend",
      ano: 1975,
      editora: "Unesp",
      contexto: "Provocação metodológica usada em debates sobre pluralismo na pesquisa contemporânea.",
      usadoEm: ["Filosofia da Ciência"],
      cor: "from-rose-800 to-slate-900",
      foto: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=70",
    },
  ],
};

// ─── PAGE: PLATAFORMA ──────────────────────────────────────────────────────

type PlatformView =
  | { tela: "lista" }
  | { tela: "curso"; curso: Curso }
  | { tela: "aula"; curso: Curso; moduloIdx: number; aulaIdx: number };

function PlatformPage() {
  const { data: cursosRaw } = useSupabaseQuery(() => cursosApi.getCursos(), []);

  // Adapta cursos do banco para o formato da UI (mantém mock como fallback)
  const matIcon: Record<string, ElementType> = {
    Estatística: BarChart2, Metodologia: FileText, "Escrita Científica": FileText,
    Psicometria: Layers, "Pesquisa Qualitativa": MessageSquare, Ferramentas: Code, Carreira: Trophy,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dbCursos = ((cursosRaw ?? []) as any[]);
  const dbTrilhas: Record<string, Curso[]> = {};
  dbCursos.forEach((c) => {
    const mat = c.materia ?? "Outros";
    if (!dbTrilhas[mat]) dbTrilhas[mat] = [];
    dbTrilhas[mat].push({
      icon: matIcon[mat] ?? BookOpen,
      titulo: c.titulo,
      desc: c.descricao ?? "",
      foto: c.thumbnail_url ?? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=70",
      duracao: c.duracao_total_minutos ? `${Math.floor(c.duracao_total_minutos / 60)}h ${c.duracao_total_minutos % 60}min` : "—",
      aulas: 0,
      nivel: c.nivel ?? "Iniciante",
      instrutor: "Dra. Sandri",
      modulos: modulosPadrao(c.titulo),
    });
  });
  const liveTrilhas = Object.keys(dbTrilhas).length > 0 ? dbTrilhas : trilhaCourses;

  const [visibleCats, setVisibleCats] = useState<Set<string>>(
    () => new Set(Object.keys(trilhaCourses))
  );
  const [view, setView] = useState<PlatformView>({ tela: "lista" });
  const [progresso, setProgresso] = useState<Set<string>>(new Set());
  const onConcluirAula = (key: string) =>
    setProgresso((prev) => new Set([...prev, key]));
  const trilhas = Object.keys(liveTrilhas);

  useEffect(() => {
    if (Object.keys(dbTrilhas).length > 0) setVisibleCats(new Set(Object.keys(dbTrilhas)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursosRaw]);

  const toggleCat = (cat: string) => {
    setVisibleCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        if (next.size > 1) next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  if (view.tela === "curso") {
    return (
      <CursoDetalhe
        curso={view.curso}
        onBack={() => setView({ tela: "lista" })}
        onPlay={(moduloIdx, aulaIdx) =>
          setView({ tela: "aula", curso: view.curso, moduloIdx, aulaIdx })
        }
      />
    );
  }

  if (view.tela === "aula") {
    return (
      <AulaPlayer
        curso={view.curso}
        moduloIdx={view.moduloIdx}
        aulaIdx={view.aulaIdx}
        onBack={() => setView({ tela: "curso", curso: view.curso })}
        onSelect={(moduloIdx, aulaIdx) =>
          setView({ tela: "aula", curso: view.curso, moduloIdx, aulaIdx })
        }
        progresso={progresso}
        onConcluirAula={onConcluirAula}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Filter navbar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1" style={{ borderBottom: "1px solid rgba(101,120,196,0.12)" }}>
        {trilhas.map((t) => {
          const ativo = visibleCats.has(t);
          const count = liveTrilhas[t].length;
          return (
            <button
              key={t}
              onClick={() => toggleCat(t)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                ativo
                  ? "text-white shadow-sm"
                  : "text-slate-500 hover:text-[#6578c4]"
              }`}
              style={ativo
                ? { background: "#6578c4", boxShadow: "0 2px 8px rgba(101,120,196,0.30)" }
                : { background: "#f9f3dd" }}
            >
              {t}
              <span className={`text-[10px] font-medium ${ativo ? "text-white/70" : "text-slate-400"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* All course sections stacked */}
      <div className="space-y-8">
        {trilhas
          .filter((cat) => visibleCats.has(cat))
          .map((cat) => {
            const cards = liveTrilhas[cat];
            return (
              <section key={cat}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 rounded-full" style={{ background: "#6578c4" }} />
                    <h2 className="text-base font-semibold text-slate-800">{cat}</h2>
                  </div>
                  <span className="text-xs text-slate-400">{cards.length} cursos</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 fx-stagger">
                  {cards.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setView({ tela: "curso", curso: c })}
                      className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm overflow-hidden hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all text-left group fx-tap"
                    >
                      <div className="relative h-36 bg-slate-100 overflow-hidden">
                        <img
                          src={c.foto}
                          alt={c.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 to-transparent" />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-slate-900/60 backdrop-blur-sm rounded-full px-2.5 py-1">
                            {c.nivel}
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-2 text-[11px] text-white/95 font-medium">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {c.duracao}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" /> {c.aulas} aulas
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-slate-800 mb-1 leading-snug line-clamp-2">
                          {c.titulo}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                          {c.desc}
                        </p>
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-100">
                          <span>{c.instrutor}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
}

function CursoDetalhe({
  curso,
  onBack,
  onPlay,
}: {
  curso: Curso;
  onBack: () => void;
  onPlay: (moduloIdx: number, aulaIdx: number) => void;
}) {
  const [aberto, setAberto] = useState<number | null>(0);
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 mb-4 transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" /> Voltar para os cursos
      </button>

      <div className="rounded-2xl overflow-hidden border border-slate-200 mb-6 fx-rise">
        <div className="relative h-44 sm:h-56 bg-slate-200">
          <img src={curso.foto} alt={curso.titulo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-slate-900/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1 w-fit mb-2 sm:mb-3">
              {curso.nivel}
            </span>
            <h1 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">
              {curso.titulo}
            </h1>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-none">
              {curso.desc}
            </p>
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/80 flex-wrap">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> {curso.instrutor}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {calcDuracaoTotal(curso.modulos)}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> {curso.aulas} aulas
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-slate-800 mb-3">
            Conteúdo do curso
          </h2>
          <div className="space-y-2 fx-stagger-fast">
            {curso.modulos.map((m, mi) => {
              const open = aberto === mi;
              return (
                <div
                  key={mi}
                  className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm overflow-hidden"
                >
                  <button
                    onClick={() => setAberto(open ? null : mi)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400 w-5">
                        {String(mi + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {m.titulo}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{m.aulas.length} aulas</span>
                      {open ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {open && (
                    <div className="border-t border-slate-100 fx-stagger-fast">
                      {m.aulas.map((a, ai) => (
                        <button
                          key={ai}
                          onClick={() => onPlay(mi, ai)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors text-left group fx-tap"
                        >
                          <div className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-colors flex-shrink-0">
                            <Send className="w-3 h-3 -rotate-45 translate-x-px" strokeWidth={2} />
                          </div>
                          <span className="flex-1 text-sm text-slate-700">
                            {a.titulo}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {a.duracao}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <aside>
          <div className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-5 sticky top-4">
            <button
              onClick={() => onPlay(0, 0)}
              className="w-full text-white text-sm font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-4"
              style={{ background: "linear-gradient(135deg, #6578c4 0%, #0a0a3a 100%)" }}
            >
              <Send className="w-4 h-4 -rotate-45 translate-x-px" /> Começar curso
            </button>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-slate-500">
                <span>Nível</span>
                <span className="text-slate-800 font-medium">{curso.nivel}</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Duração total</span>
                <span className="text-slate-800 font-medium">{calcDuracaoTotal(curso.modulos)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Aulas</span>
                <span className="text-slate-800 font-medium">{curso.aulas}</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Certificado</span>
                <span className="text-slate-800 font-medium">Sim</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Idioma</span>
                <span className="text-slate-800 font-medium">Português</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function AulaPlayer({
  curso,
  moduloIdx,
  aulaIdx,
  onBack,
  onSelect,
  progresso,
  onConcluirAula,
}: {
  curso: Curso;
  moduloIdx: number;
  aulaIdx: number;
  onBack: () => void;
  onSelect: (moduloIdx: number, aulaIdx: number) => void;
  progresso: Set<string>;
  onConcluirAula: (key: string) => void;
}) {
  const [tab, setTab] = useState<null | "material" | "duvida">(null);
  const [duvida, setDuvida] = useState("");
  const [duvidas, setDuvidas] = useState<{ texto: string; de: "aluno" | "prof" }[]>([
    { texto: "Como interpretar o p-valor nesse contexto específico?", de: "aluno" },
    { texto: "Ótima pergunta! O p-valor indica a probabilidade de obter os resultados observados assumindo H₀ verdadeira. Quando p < 0,05, rejeitamos H₀.", de: "prof" },
  ]);

  const modulo = curso.modulos[moduloIdx];
  const aula = modulo.aulas[aulaIdx];
  const aulaKey = `${moduloIdx}-${aulaIdx}`;
  const jaConcluida = progresso.has(aulaKey);

  const temProxima = aulaIdx < modulo.aulas.length - 1 || moduloIdx < curso.modulos.length - 1;
  const handleProximaAula = () => {
    onConcluirAula(aulaKey);
    if (aulaIdx < modulo.aulas.length - 1) {
      onSelect(moduloIdx, aulaIdx + 1);
    } else if (moduloIdx < curso.modulos.length - 1) {
      onSelect(moduloIdx + 1, 0);
    }
  };

  const materiais = [
    { nome: "Slides da aula", tipo: "PDF" },
    { nome: "Código-exemplo R", tipo: "R" },
    { nome: "Exercício prático", tipo: "PDF" },
  ];

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 mb-4 transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" /> Voltar para {curso.titulo}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div key={`${moduloIdx}-${aulaIdx}`} className="lg:col-span-2 fx-fade">
          {/* Player simulado */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 mb-4 fx-scale">
            <img
              src={curso.foto}
              alt={aula.titulo}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-2xl hover:scale-105 transition-transform fx-pulse-ring">
                <Send className="w-7 h-7 -rotate-45 translate-x-1 text-slate-900" strokeWidth={2.5} />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-12 bg-gradient-to-t from-slate-900/95 to-transparent">
              <div className="h-1 bg-white/20 rounded-full overflow-hidden mb-3">
                <div className="h-full w-1/3 bg-white rounded-full" />
              </div>
              <div className="flex items-center justify-between text-xs text-white/90 font-medium">
                <div className="flex items-center gap-3">
                  <span>00:00</span>
                  <span className="text-white/50">/</span>
                  <span>{aula.duracao}</span>
                </div>
                <span className="text-white/70">
                  Aula {aulaIdx + 1} · Módulo {moduloIdx + 1}
                </span>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1">
            Módulo {moduloIdx + 1} · {modulo.titulo}
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-2">
            {aula.titulo}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Nesta aula, a Dra. Sandri apresenta os pontos centrais sobre <span className="font-medium text-slate-800">{aula.titulo.toLowerCase()}</span>, com exemplos práticos do curso de {curso.titulo}. Materiais complementares ficam disponíveis na aba abaixo.
          </p>

          <div className="border-t border-slate-200 pt-4 flex items-center gap-4 text-xs flex-wrap">
            <button
              onClick={() => setTab(tab === "material" ? null : "material")}
              className={`flex items-center gap-1.5 transition-colors font-medium ${tab === "material" ? "text-[#6578c4]" : "text-slate-500 hover:text-slate-800"}`}
            >
              <Download className="w-3.5 h-3.5" /> Material da aula
            </button>
            <button
              onClick={() => setTab(tab === "duvida" ? null : "duvida")}
              className={`flex items-center gap-1.5 transition-colors font-medium ${tab === "duvida" ? "text-[#6578c4]" : "text-slate-500 hover:text-slate-800"}`}
            >
              <MessageSquare className="w-3.5 h-3.5" /> Tirar dúvida
            </button>
            <div className="flex-1" />
            {temProxima ? (
              <button
                onClick={handleProximaAula}
                className="flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                style={{ background: "#6578c4" }}
              >
                Próxima aula <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => onConcluirAula(aulaKey)}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${jaConcluida ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "border-[#6578c4]/40 text-[#6578c4]"}`}
              >
                <Check className="w-3.5 h-3.5" /> {jaConcluida ? "Concluída ✓" : "Concluir curso"}
              </button>
            )}
          </div>

          {/* Material da aula panel */}
          {tab === "material" && (
            <div className="mt-4 rounded-xl border border-slate-200 bg-white/80 p-4">
              <div className="text-xs font-semibold text-slate-700 mb-3">Materiais desta aula</div>
              <div className="space-y-1">
                {materiais.map((mat, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(101,120,196,0.12)" }}>
                      <Download className="w-4 h-4" style={{ color: "#6578c4" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-slate-800 truncate">{mat.nome}</div>
                      <div className="text-[10px] text-slate-400">{mat.tipo}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-3">Materiais adicionados pela Dra. Sandri para esta aula.</p>
            </div>
          )}

          {/* Tirar dúvida panel */}
          {tab === "duvida" && (
            <div className="mt-4 rounded-xl border border-slate-200 bg-white/80 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100">
                <div className="text-xs font-semibold text-slate-700">Tirar dúvida — {aula.titulo}</div>
                <div className="text-[11px] text-slate-400">Envie sua dúvida. A professora responderá em breve.</div>
              </div>
              <div className="px-4 py-3 space-y-3 max-h-56 overflow-y-auto">
                {duvidas.map((d, i) => (
                  <div key={i} className={`flex gap-2 ${d.de === "aluno" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed"
                      style={d.de === "aluno"
                        ? { background: "#6578c4", color: "#fff" }
                        : { background: "#f1f5f9", color: "#1e293b" }}
                    >
                      {d.de === "prof" && (
                        <div className="text-[10px] font-semibold mb-0.5" style={{ color: "#c9a961" }}>Dra. Sandri</div>
                      )}
                      {d.texto}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-slate-100 flex gap-2">
                <input
                  value={duvida}
                  onChange={(e) => setDuvida(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && duvida.trim()) {
                      setDuvidas((prev) => [...prev, { texto: duvida.trim(), de: "aluno" }]);
                      setDuvida("");
                    }
                  }}
                  placeholder="Escreva sua dúvida..."
                  className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#6578c4]"
                />
                <button
                  onClick={() => {
                    if (!duvida.trim()) return;
                    setDuvidas((prev) => [...prev, { texto: duvida.trim(), de: "aluno" }]);
                    setDuvida("");
                  }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity flex-shrink-0"
                  style={{ background: "#6578c4" }}
                >
                  <Send className="w-3.5 h-3.5 -rotate-45 translate-x-px" />
                </button>
              </div>
            </div>
          )}
        </div>

        <aside>
          <div className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm overflow-hidden sticky top-4 max-h-[calc(100vh-160px)] flex flex-col">
            <div className="px-4 py-3 border-b border-slate-100">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                Curso
              </div>
              <div className="text-sm font-semibold text-slate-800 truncate">
                {curso.titulo}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {curso.modulos.map((m, mi) => (
                <div key={mi} className="border-b border-slate-100 last:border-0">
                  <div className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-50/60">
                    {String(mi + 1).padStart(2, "0")} · {m.titulo}
                  </div>
                  {m.aulas.map((a, ai) => {
                    const ativo = mi === moduloIdx && ai === aulaIdx;
                    const concluida = progresso.has(`${mi}-${ai}`);
                    return (
                      <button
                        key={ai}
                        onClick={() => onSelect(mi, ai)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${ativo ? "bg-slate-900 text-white" : "hover:bg-slate-50 text-slate-700"}`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${ativo ? "bg-white text-slate-900" : concluida ? "bg-emerald-500 border-2 border-emerald-500 text-white" : "border border-slate-300 text-slate-400"}`}>
                          {concluida && !ativo
                            ? <Check className="w-2.5 h-2.5" />
                            : <Send className="w-2.5 h-2.5 -rotate-45 translate-x-px" strokeWidth={2.5} />}
                        </div>
                        <span className="flex-1 text-xs leading-snug">
                          {a.titulo}
                        </span>
                        <span className={`text-[10px] font-mono ${ativo ? "text-white/70" : "text-slate-400"}`}>
                          {a.duracao}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── PAGE: PARCERIA ────────────────────────────────────────────────────────

function ParceriaPage() {
  const [plano, setPlano] = useState<"pro" | "premium">("pro");
  const [faixa, setFaixa] = useState<number | null>(null);
  const [vagas, setVagas] = useState(10);
  const [parcNome, setParcNome] = useState("");
  const [parcInstituicao, setParcInstituicao] = useState("");
  const [parcCargo, setParcCargo] = useState("Professor");
  const [parcTelefone, setParcTelefone] = useState("");
  const [parcMensagem, setParcMensagem] = useState("");
  const [parcEmail, setParcEmail] = useState("");
  const [parcErro, setParcErro] = useState("");
  const [parcEnviado, setParcEnviado] = useState(false);
  const [parcEnviando, setParcEnviando] = useState(false);
  const precos: Record<"pro" | "premium", number> = {
    pro: 997,
    premium: 1497,
  };
  const faixas = [
    { label: "5–9", pct: 20, min: 5, max: 9 },
    { label: "10–24", pct: 30, min: 10, max: 24 },
    { label: "25–49", pct: 40, min: 25, max: 49 },
    { label: "50+", pct: null, min: 50, max: Infinity },
  ];
  const selected = faixa !== null ? faixas[faixa] : null;
  const base = precos[plano];
  const desconto = selected?.pct
    ? base * (selected.pct / 100)
    : 0;
  const final = base - desconto;

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold text-slate-800 mb-1">
        Parceria Institucional
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Ofereça acesso à Objetiv para sua equipe ou instituição
        com condições especiais.
      </p>
      <div className="rounded-lg border border-white/60 bg-white/52 backdrop-blur-xl shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-4 sm:p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
              Nome completo
            </label>
            <input
              value={parcNome}
              onChange={(e) => setParcNome(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4]"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
              Instituição
            </label>
            <input
              value={parcInstituicao}
              onChange={(e) => setParcInstituicao(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4]"
              placeholder="Nome da instituição"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
            Cargo
          </label>
          <select
            value={parcCargo}
            onChange={(e) => setParcCargo(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4] bg-white"
          >
            {[
              "Professor",
              "Coordenador",
              "Diretor",
              "Reitor",
              "Pesquisador",
              "Outro",
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2 block">
            Plano
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(["pro", "premium"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPlano(p)}
                className={`border-2 rounded-xl p-4 text-left transition-all ${plano === p ? "border-slate-800 bg-slate-100" : "border-slate-200 hover:border-slate-300"}`}
              >
                <div className="font-semibold text-slate-800 capitalize">
                  {p === "pro" ? "Pro" : "Premium"}
                </div>
                <div className="text-2xl font-bold text-slate-800 mt-1">
                  R${precos[p].toLocaleString("pt-BR")}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  por pessoa / acesso anual
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2 block">
            Número de Vagas
          </label>
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => setVagas(Math.max(5, vagas - 1))}
              className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
            >
              −
            </button>
            <span className="text-lg font-bold text-slate-800 w-10 text-center">
              {vagas}
            </span>
            <button
              onClick={() => setVagas(vagas + 1)}
              className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
            >
              +
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {faixas.map((f, i) => (
              <button
                key={i}
                onClick={() => {
                  setFaixa(i);
                  setVagas(f.min);
                }}
                className={`rounded-lg py-2 text-xs font-semibold transition-all ${faixa === i ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {f.label}
                <br />
                {f.pct ? `${f.pct}% desc.` : "Negociar"}
              </button>
            ))}
          </div>
        </div>
        {selected && (
          <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
              Resumo do Pedido
            </div>
            <div className="flex justify-between text-sm text-slate-700 mb-1">
              <span>
                Plano {plano === "pro" ? "Pro" : "Premium"} ×{" "}
                {vagas} vagas
              </span>
              <span>
                R${(base * vagas).toLocaleString("pt-BR")}
              </span>
            </div>
            {selected.pct && (
              <div className="flex justify-between text-sm text-slate-600 mb-1">
                <span>Desconto ({selected.pct}%)</span>
                <span>
                  − R$
                  {(desconto * vagas).toLocaleString("pt-BR")}
                </span>
              </div>
            )}
            {selected.pct ? (
              <div className="flex justify-between text-base font-bold text-slate-800 border-t border-slate-200 pt-2 mt-2">
                <span>Total</span>
                <span>
                  R${(final * vagas).toLocaleString("pt-BR")}
                </span>
              </div>
            ) : (
              <div className="text-sm font-semibold text-slate-700 border-t border-slate-200 pt-2 mt-2">
                Condições negociadas diretamente com a equipe.
              </div>
            )}
          </div>
        )}
        <div>
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
            Mensagem / Solicitação
          </label>
          <textarea
            rows={3}
            value={parcMensagem}
            onChange={(e) => { setParcMensagem(e.target.value); if (parcErro) setParcErro(""); }}
            className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4] resize-none ${!parcMensagem.trim() && parcErro ? "border-red-400" : "border-slate-200"}`}
            placeholder="Descreva sua demanda ou dúvidas..."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
              E-mail
            </label>
            <input
              type="email"
              value={parcEmail}
              onChange={(e) => { setParcEmail(e.target.value); if (parcErro) setParcErro(""); }}
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4] ${!parcEmail.trim() && parcErro ? "border-red-400" : "border-slate-200"}`}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
              Telefone / WhatsApp
            </label>
            <input
              type="tel"
              value={parcTelefone}
              onChange={(e) => setParcTelefone(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4]"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>
        {parcErro && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> {parcErro}
          </p>
        )}
        {parcEnviado && (
          <div className="flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-3" style={{ background: "rgba(101,120,196,0.1)", color: "#6578c4" }}>
            <Check className="w-4 h-4 flex-shrink-0" /> Solicitação enviada! Entraremos em contato em breve.
          </div>
        )}
        <button
          onClick={async () => {
            if (!parcNome.trim()) { setParcErro("Informe seu nome."); return; }
            if (!parcEmail.trim() || !parcEmail.includes("@")) { setParcErro("Informe um e-mail válido."); return; }
            if (!parcMensagem.trim()) { setParcErro("Descreva sua demanda antes de enviar."); return; }
            setParcErro("");
            setParcEnviando(true);
            const { error } = await parceriasApi.solicitarParceria({
              nome: parcNome,
              instituicao: parcInstituicao || null,
              cargo: parcCargo || null,
              plano,
              vagas,
              email: parcEmail,
              telefone: parcTelefone || null,
              mensagem: parcMensagem || null,
            });
            setParcEnviando(false);
            if (error) { setParcErro("Erro ao enviar. Tente novamente."); return; }
            notifyAdmin({ type: "parceria", nome: parcNome, email: parcEmail, instituicao: parcInstituicao || "Não informada", mensagem: parcMensagem }).catch(() => {});
            setParcEnviado(true);
          }}
          disabled={parcEnviando}
          className="w-full text-white rounded-lg py-3 text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
          style={{ background: "linear-gradient(135deg, #6578c4 0%, #0a0a3a 100%)" }}
        >
          <Send className="w-4 h-4" /> {parcEnviando ? "Enviando..." : "Enviar Solicitação"}
        </button>
      </div>
    </div>
  );
}

// ─── PAGE: CERTIFICADOS ────────────────────────────────────────────────────

function gerarCertificadoHTML(cursoNome: string, alunoNome?: string, codigoVerificacao?: string) {
  const aluno = alunoNome ?? "Aluno";
  const cargaHoraria = "40h";
  const data = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const codigo = codigoVerificacao ?? (
    "CERT-" +
    Math.random().toString(36).slice(2, 8).toUpperCase() +
    "-" +
    new Date().getFullYear()
  );

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Certificado — ${cursoNome}</title>
<style>
  @page { size: A4 landscape; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Georgia, 'Times New Roman', serif;
    background: #f1f5f9;
    color: #1e293b;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .cert {
    width: 297mm;
    height: 210mm;
    margin: 0 auto;
    background: linear-gradient(135deg, #fbfcfd 0%, #e8efff 100%);
    position: relative;
    padding: 22mm 26mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .cert::before {
    content: '';
    position: absolute; inset: 12mm;
    border: 1.5px solid #1e3a5f;
    pointer-events: none;
  }
  .cert::after {
    content: '';
    position: absolute; inset: 13.5mm;
    border: 0.5px solid #1e3a5f;
    pointer-events: none;
  }
  .ornament {
    position: absolute;
    width: 120mm; height: 120mm;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.35;
    z-index: 0;
  }
  .ornament-1 { top: -60mm; right: -40mm; background: radial-gradient(circle, #2563eb 0%, transparent 70%); }
  .ornament-2 { bottom: -60mm; left: -40mm; background: radial-gradient(circle, #6366f1 0%, transparent 70%); }
  .content { position: relative; z-index: 1; display: flex; flex-direction: column; height: 100%; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; }
  .brand {
    display: flex; align-items: center; gap: 12px;
  }
  .brand-mark {
    width: 38px; height: 38px;
    border-radius: 8px;
    background: #1e3a5f;
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 18px;
  }
  .brand-text { display: flex; flex-direction: column; line-height: 1.1; }
  .brand-name { font-family: 'Helvetica Neue', sans-serif; font-weight: 700; font-size: 14px; color: #1e293b; letter-spacing: 0.5px; }
  .brand-sub { font-family: 'Helvetica Neue', sans-serif; font-size: 9px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-top: 2px; }
  .code {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: #64748b;
    letter-spacing: 1px;
  }
  .body { text-align: center; flex: 1; display: flex; flex-direction: column; justify-content: center; }
  .label {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: #64748b;
    margin-bottom: 10px;
  }
  h1 {
    font-family: Georgia, serif;
    font-size: 44px;
    font-weight: normal;
    color: #1e3a5f;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }
  .desc {
    font-size: 14px;
    color: #475569;
    max-width: 560px;
    margin: 0 auto 24px;
    line-height: 1.7;
  }
  .aluno {
    font-family: Georgia, serif;
    font-size: 36px;
    font-weight: normal;
    color: #1e293b;
    margin: 14px 0 8px;
    padding: 0 40px;
    display: inline-block;
    border-bottom: 1px solid #1e3a5f;
    padding-bottom: 6px;
  }
  .desc-curso {
    font-size: 13px;
    color: #475569;
    max-width: 620px;
    margin: 16px auto 0;
    line-height: 1.7;
  }
  .curso-nome { font-weight: bold; color: #1e3a5f; font-style: italic; }
  .footer {
    display: flex; justify-content: space-between; align-items: flex-end;
    padding-top: 28px;
    margin-top: 32px;
  }
  .sign { text-align: center; min-width: 220px; }
  .sign-line {
    border-top: 1px solid #1e3a5f;
    margin-bottom: 6px;
    height: 0;
  }
  .sign-name {
    font-family: Georgia, serif;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 3px;
  }
  .sign-role {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #64748b;
  }
  .seal {
    width: 110px; height: 110px;
    border-radius: 50%;
    border: 2px solid #1e3a5f;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    background: rgba(30, 58, 95, 0.04);
    text-align: center;
    padding: 4px;
  }
  .seal-top {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #1e3a5f;
    font-weight: bold;
  }
  .seal-hours {
    font-family: Georgia, serif;
    font-size: 26px;
    color: #1e3a5f;
    margin: 2px 0;
  }
  .seal-bottom {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 8px;
    color: #64748b;
    letter-spacing: 1px;
  }
  .data {
    font-family: Georgia, serif;
    font-size: 12px;
    color: #475569;
    text-align: center;
  }
  .verify {
    position: absolute;
    bottom: 8mm;
    left: 0; right: 0;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 8px;
    color: #94a3b8;
    letter-spacing: 1.5px;
  }
  @media print {
    body { background: white; }
    .cert { box-shadow: none; }
  }
</style>
</head>
<body>
<div class="cert">
  <div class="ornament ornament-1"></div>
  <div class="ornament ornament-2"></div>
  <div class="content">
    <div class="header">
      <div class="brand">
        <div class="brand-mark">★</div>
        <div class="brand-text">
          <span class="brand-name">PESQUISA</span>
          <span class="brand-sub">passo a passo</span>
        </div>
      </div>
      <div class="code">${codigo}</div>
    </div>

    <div class="body">
      <div class="label">Certificado de Conclusão</div>
      <h1>Certificamos que</h1>
      <span class="aluno">${aluno}</span>
      <p class="desc-curso">
        concluiu com aproveitamento o curso
        <span class="curso-nome">${cursoNome}</span>,
        ofertado pela plataforma Pesquisa passo a passo,
        com carga horária total de <strong>${cargaHoraria}</strong>.
      </p>
    </div>

    <div class="footer">
      <div class="sign">
        <div class="sign-line"></div>
        <div class="sign-name">Dra. Sandri</div>
        <div class="sign-role">Coordenação Pedagógica</div>
      </div>

      <div class="seal">
        <div class="seal-top">Carga</div>
        <div class="seal-hours">${cargaHoraria}</div>
        <div class="seal-bottom">CERTIFICADA</div>
      </div>

      <div class="sign">
        <div class="data">${data}</div>
        <div class="sign-line" style="margin-top: 6px"></div>
        <div class="sign-role">Data de Emissão</div>
      </div>
    </div>
  </div>
  <div class="verify">VERIFIQUE A AUTENTICIDADE EM PLATAFORMA-SANDRI.VERCEL.APP/VERIFICAR/${codigo}</div>
</div>
</body>
</html>`;

  return { html, codigo };
}

function CertificadosPage() {
  const { usuario } = useAuthContext();
  const { data: certsRaw } = useSupabaseQuery(
    () => usuario ? certificadosApi.getCertificadosUsuario(usuario.id) : Promise.resolve({ data: [], error: null }),
    [usuario?.id]
  );

  const [aberto, setAberto] = useState<{ cursoNome: string; html: string; codigo: string } | null>(null);
  const [naoOpen, setNaoOpen] = useState(true);
  const [concluidosOpen, setConcluidosOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  useModalBlur(!!aberto);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dbCerts = ((certsRaw ?? []) as any[]).map((c) => ({
    id: c.id,
    nome: c.cursos?.titulo ?? "Curso",
    progress: 100,
    cat: c.cursos?.materia ?? "Certificado",
    emitido_em: c.emitido_em,
    codigo: c.codigo_verificacao,
  }));

  const concluidos = dbCerts.length > 0 ? dbCerts : cursosData.filter((c) => c.progress === 100);
  const nao = dbCerts.length > 0 ? [] : cursosData.filter((c) => c.progress < 100);

  const abrirEmissao = (cursoNome: string, codigoReal?: string) => {
    const { html, codigo } = gerarCertificadoHTML(cursoNome, usuario?.nome ?? undefined, codigoReal);
    setAberto({ cursoNome, html, codigo });
  };

  const imprimir = () => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch {
      alert("Não foi possível abrir o diálogo de impressão. Use o botão Baixar HTML.");
    }
  };

  const baixarHTML = () => {
    if (!aberto) return;
    const blob = new Blob([aberto.html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `certificado-${aberto.cursoNome.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const Section = ({
    titulo,
    items,
    done,
    open,
    onToggle,
  }: {
    titulo: string;
    items: typeof cursosData;
    done: boolean;
    open: boolean;
    onToggle: () => void;
  }) => (
    <section className="mb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between mb-3 group px-1"
      >
        <h2 className="text-base font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
          {titulo}
        </h2>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-xs">{items.length} {items.length === 1 ? "curso" : "cursos"}</span>
          {open ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </button>
      {open && (
        <div className="space-y-3 fx-stagger-fast">
          {items.map((c) => (
            <div
              key={c.id}
              className="rounded-lg border border-white/60 bg-white/56 backdrop-blur-xl shadow-[0_14px_35px_rgba(15,23,42,0.07)] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)] hover:-translate-y-0.5 transition-all"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${done ? "bg-emerald-100" : "bg-slate-100"}`}
              >
                {done ? (
                  <Check className="w-5 h-5 text-emerald-600" />
                ) : (
                  <BookOpen className="w-5 h-5 text-slate-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-slate-800 truncate">
                  {c.nome}
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        done
                          ? "bg-emerald-500"
                          : c.progress >= 50
                          ? "bg-amber-400"
                          : "bg-rose-400"
                      }`}
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                  <span className={`text-xs font-semibold flex-shrink-0 ${
                    done ? "text-emerald-600" : c.progress >= 50 ? "text-amber-600" : "text-rose-500"
                  }`}>
                    {c.progress}%
                  </span>
                </div>
              </div>
              <button
                onClick={() => done && abrirEmissao(c.nome, (c as { codigo?: string }).codigo)}
                className={`flex-shrink-0 text-xs font-semibold px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${done ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {done ? (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Emitir Certificado</span>
                    <span className="sm:hidden">Emitir</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Progresso</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
  return (
    <div>
      <Section titulo="Não Concluídos" items={nao} done={false} open={naoOpen} onToggle={() => setNaoOpen((v) => !v)} />
      <Section titulo="Concluídos" items={concluidos} done open={concluidosOpen} onToggle={() => setConcluidosOpen((v) => !v)} />

      {/* Modal de preview do certificado */}
      {aberto && (
        <div
          className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm flex flex-col fx-modal-backdrop"
          onClick={() => setAberto(null)}
        >
          <div
            className="flex flex-col flex-1 bg-slate-100 fx-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-2 px-3 sm:px-5 py-3 bg-white border-b border-slate-200 flex-shrink-0">
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Certificado · {aberto.codigo}
                </div>
                <div className="text-sm font-semibold text-slate-800 truncate">
                  {aberto.cursoNome}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={baixarHTML}
                  className="text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Baixar HTML</span>
                </button>
                <button
                  onClick={imprimir}
                  className="text-xs font-semibold px-3 py-2 rounded-lg text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
                  style={{ background: "#0a0a3a" }}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
                  <span className="sm:hidden">PDF</span>
                </button>
                <button
                  onClick={() => setAberto(null)}
                  className="w-9 h-9 rounded-lg text-slate-500 hover:bg-slate-100 flex items-center justify-center transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Aviso no mobile */}
            <div className="md:hidden bg-[#6578c4]/10 border-b border-blue-100 px-4 py-2.5 text-[11px] text-blue-800 leading-snug flex-shrink-0">
              No celular, use <strong>Imprimir / Salvar PDF</strong> ou <strong>Baixar HTML</strong> e depois abra no computador para salvar como PDF.
            </div>

            {/* Preview */}
            <div className="flex-1 overflow-auto p-3 sm:p-6 flex items-start justify-center">
              <iframe
                ref={iframeRef}
                srcDoc={aberto.html}
                title="Certificado"
                className="w-full max-w-[1200px] h-[80vh] sm:h-[75vh] bg-white border border-slate-200 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PAGE: ATENDIMENTO ─────────────────────────────────────────────────────

function AtendimentoPage() {
  const { usuario } = useAuthContext();
  const [sent, setSent] = useState(false);
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleEnviar = async () => {
    if (!assunto.trim()) { setErro("Preencha o assunto da mensagem."); return; }
    if (!mensagem.trim()) { setErro("Escreva sua mensagem antes de enviar."); return; }
    if (!usuario) { setErro("Você precisa estar logado."); return; }
    setErro("");
    setEnviando(true);
    const { error } = await atendimentoApi.createTicket({
      usuario_id: usuario.id,
      assunto,
      mensagem,
    });
    setEnviando(false);
    if (error) { setErro("Erro ao enviar. Tente novamente."); return; }
    notifyAdmin({ type: "atendimento", nome: usuario.nome ?? usuario.email, email: usuario.email, assunto, mensagem }).catch(() => {});
    setSent(true);
  };

  return (
    <div className="flex items-start justify-center pt-8">
      <div className="rounded-xl border border-white/60 bg-white/58 backdrop-blur-xl shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-8 w-full max-w-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-slate-700" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Central de Atendimento
            </h2>
            <p className="text-sm text-slate-500">
              Resposta em até 24 horas úteis.
            </p>
          </div>
        </div>
        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(101,120,196,0.12)" }}>
              <Check className="w-8 h-8" style={{ color: "#6578c4" }} />
            </div>
            <div className="text-base font-semibold text-slate-800 mb-2">
              Mensagem enviada!
            </div>
            <p className="text-sm text-slate-500 mb-4">
              Nossa equipe entrará em contato em breve.
            </p>
            <button
              onClick={() => { setSent(false); setAssunto(""); setMensagem(""); }}
              className="text-sm hover:underline" style={{ color: "#6578c4" }}
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
                Categoria
              </label>
              <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4] bg-white">
                {[
                  "Dúvida sobre conteúdo",
                  "Problema técnico",
                  "Certificados",
                  "Financeiro",
                  "Sugestão",
                  "Outro",
                ].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
                Assunto <span className="text-red-400">*</span>
              </label>
              <input
                value={assunto}
                onChange={(e) => { setAssunto(e.target.value); if (erro) setErro(""); }}
                className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4] ${!assunto.trim() && erro ? "border-red-400" : "border-slate-200"}`}
                placeholder="Resumo da sua dúvida"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
                Mensagem <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={5}
                value={mensagem}
                onChange={(e) => { setMensagem(e.target.value); if (erro) setErro(""); }}
                className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6578c4] resize-none ${!mensagem.trim() && erro ? "border-red-400" : "border-slate-200"}`}
                placeholder="Descreva sua dúvida com detalhes..."
              />
            </div>
            {erro && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> {erro}
              </p>
            )}
            <button
              onClick={handleEnviar}
              disabled={enviando}
              className="w-full text-white rounded-lg py-3 text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
              style={{ background: "#6578c4" }}
            >
              <Send className="w-4 h-4" /> {enviando ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAGE: ATUALIZAÇÕES ────────────────────────────────────────────────────

function AtualizacoesPage() {
  const [open, setOpen] = useState<string | null>("2026");
  const [openMonth, setOpenMonth] = useState<string | null>(
    "Maio 2026",
  );
  const updates: Record<
    string,
    Record<string, { icon: ElementType; texto: string }[]>
  > = {
    "2026": {
      "Maio 2026": [
        {
          icon: BookOpen,
          texto:
            "Novo módulo: Análise de Mediação Moderada em R",
        },
        {
          icon: BookOpen,
          texto:
            "Atualização completa do curso de JASP (versão 0.19)",
        },
        {
          icon: Settings,
          texto:
            "Novo GPT: Gerador de Sintaxe R com suporte a datasets",
        },
        {
          icon: Settings,
          texto:
            "Emissão automática de certificados com QR Code de validação",
        },
      ],
      "Abril 2026": [
        {
          icon: BookOpen,
          texto:
            "Lançamento do curso: Análise de Redes com R e igraph",
        },
        {
          icon: Settings,
          texto:
            "Nova calculadora amostral com suporte a SEM e CFA",
        },
        {
          icon: Settings,
          texto:
            "Integração com Google Drive para upload de datasets",
        },
      ],
      "Março 2026": [
        {
          icon: BookOpen,
          texto:
            "Webinário gravado: Meta-análise passo a passo",
        },
        {
          icon: BookOpen,
          texto:
            "Glossário expandido com 50 novos termos metodológicos",
        },
        {
          icon: Settings,
          texto:
            "Novo sistema de ranking com badges de conquista",
        },
      ],
    },
    "2025": {
      "Dezembro 2025": [
        {
          icon: BookOpen,
          texto:
            "Curso Objetiv Connect - edição especial de fim de ano",
        },
        {
          icon: Settings,
          texto: "Lançamento do app mobile para iOS e Android",
        },
      ],
      "Novembro 2025": [
        {
          icon: BookOpen,
          texto:
            "Módulo de Escrita Científica completamente reformulado",
        },
        {
          icon: Settings,
          texto: "Novo painel de progresso com metas semanais",
        },
      ],
    },
  };
  return (
    <div className="max-w-2xl">
      <h2 className="text-lg font-semibold text-slate-800 mb-2">
        Atualizações da Plataforma
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Histórico de melhorias, novos recursos e conteúdos
        adicionados.
      </p>
      {Object.keys(updates).map((year) => (
        <div key={year} className="mb-4">
          <button
            onClick={() => setOpen(open === year ? null : year)}
            className="w-full flex items-center justify-between rounded-xl border border-white/60 bg-white/55 backdrop-blur-xl px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:bg-white/70 transition-colors"
          >
            <span className="font-semibold text-slate-800">
              {year}
            </span>
            {open === year ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>
          {open === year && (
            <div className="border border-t-0 border-slate-200 rounded-b-xl bg-white overflow-hidden fx-rise">
              {Object.keys(updates[year]).map((month) => (
                <div
                  key={month}
                  className="border-t border-slate-100"
                >
                  <button
                    onClick={() =>
                      setOpenMonth(
                        openMonth === month ? null : month,
                      )
                    }
                    className="w-full flex items-center justify-between px-5 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-600">
                      {month}
                    </span>
                    {openMonth === month ? (
                      <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>
                  {openMonth === month && (
                    <ul className="px-5 pb-4 space-y-2 fx-stagger-fast">
                      {updates[year][month].map((u, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="flex-shrink-0 rounded-md border border-slate-200 bg-slate-50 p-1 text-slate-500">
                            <u.icon className="w-3.5 h-3.5" />
                          </span>
                          {u.texto}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── PAGE: GPTs ───────────────────────────────────────────────────────────

function GPTsPage() {
  const { data: gptsRaw } = useSupabaseQuery(() => gptsApi.getGpts(), []);

  const catIcon: Record<string, ElementType> = {
    Análise: BarChart2, Metodologia: FileText, Escrita: BookOpen,
    Psicometria: Layers, Geral: Brain,
  };
  const catCor: Record<string, string> = {
    Análise: "from-blue-500 to-indigo-600",
    Metodologia: "from-emerald-500 to-teal-600",
    Escrita: "from-rose-500 to-pink-600",
    Psicometria: "from-violet-500 to-purple-600",
    Geral: "from-slate-500 to-slate-700",
  };

  const dbGpts = (gptsRaw ?? []).map((g) => ({
    id: g.id,
    nome: g.titulo,
    autora: "Dra. Sandri",
    desc: g.descricao ?? "",
    cat: g.categoria ?? "Geral",
    icon: catIcon[g.categoria ?? ""] ?? Brain,
    cor: catCor[g.categoria ?? ""] ?? "from-slate-500 to-slate-700",
    conversas: "",
    link: g.url ?? "#",
  }));
  const liveGpts = dbGpts.length > 0 ? dbGpts : gptsData;
  const liveCats = [...new Set(liveGpts.map((g) => g.cat))];

  const [visibleCats, setVisibleCats] = useState<Set<string>>(
    () => new Set(gptsCategorias.filter((c) => c !== "Todos")),
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (liveCats.length > 0) setVisibleCats(new Set(liveCats));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gptsRaw]);

  const cats = liveCats;

  const toggleCat = (cat: string) => {
    setVisibleCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        if (next.size > 1) next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const visibleSections = cats.filter((cat) => visibleCats.has(cat));
  const hasResults = visibleSections.some(
    (cat) =>
      liveGpts.filter(
        (g) =>
          g.cat === cat &&
          g.nome.toLowerCase().includes(search.toLowerCase()),
      ).length > 0,
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Filter navbar + search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-1 -mx-1 px-1">
          {cats.map((cat) => {
            const ativo = visibleCats.has(cat);
            const count = liveGpts.filter((g) => g.cat === cat).length;
            return (
              <button
                key={cat}
                onClick={() => toggleCat(cat)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  ativo ? "text-white" : "text-slate-500 hover:text-[#6578c4]"
                }`}
              style={ativo
                ? { background: "#6578c4", boxShadow: "0 2px 8px rgba(101,120,196,0.30)" }
                : { background: "#f9f3dd" }}
              >
                {cat}
                <span className={`text-[10px] font-medium ${ativo ? "text-white/70" : "text-slate-400"}`}>{count}</span>
              </button>
            );
          })}
        </div>
        <div className="relative flex-shrink-0">
          <BrandSearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#6578c4]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-3 py-2 border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-[#6578c4]/50 w-full sm:w-48 bg-white/70"
            placeholder="Buscar GPT..."
          />
        </div>
      </div>
      <div className="border-t border-slate-100" />

      <div className="space-y-8">
        {visibleSections.map((cat) => {
          const items = liveGpts.filter(
            (g) =>
              g.cat === cat &&
              g.nome.toLowerCase().includes(search.toLowerCase()),
          );
          if (items.length === 0) return null;
          return (
            <section key={cat}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 rounded-full" style={{ background: "#6578c4" }} />
                  <h2 className="text-base font-semibold text-slate-800">{cat}</h2>
                </div>
                <span className="text-xs text-slate-400">{items.length} GPTs</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 fx-stagger">
                {items.map((g) => (
                  <a
                    key={g.id}
                    href={g.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 transition-all hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 flex flex-col fx-tap"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${g.cor} flex items-center justify-center shadow-sm`}
                      >
                        <g.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors mt-0.5" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800 leading-snug mb-1">
                      {g.nome}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                      {g.desc}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <span className="text-[11px] text-slate-400 font-medium">
                        {g.autora}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MessageCircle className="w-3 h-3" strokeWidth={1.5} />
                        {g.conversas}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}

        {!hasResults && (
          <div className="text-center py-16 text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl">
            Nenhum GPT encontrado para "{search}".
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAGE: BIBLIOTECA DE PROMPTS ──────────────────────────────────────────

function BibliotecaPage() {
  type LivePrompt = { id: string | number; titulo: string; cat: string; desc: string; prompt: string; autor: string; favoritos: number; cor: string };

  const { data: promptsRaw } = useSupabaseQuery(() => promptsApi.getPrompts(), []);
  const catCor: Record<string, string> = {
    Escrita: "from-rose-500 to-pink-600",
    Análise: "from-blue-500 to-indigo-600",
    Metodologia: "from-emerald-500 to-teal-600",
    Submissão: "from-amber-500 to-orange-600",
    Geral: "from-slate-500 to-slate-700",
  };
  const dbPrompts: LivePrompt[] = (promptsRaw ?? []).map((p) => ({
    id: p.id,
    titulo: p.titulo,
    cat: p.categoria ?? "Geral",
    desc: p.descricao ?? "",
    prompt: p.conteudo,
    autor: "Dra. Sandri",
    favoritos: 0,
    cor: catCor[p.categoria ?? ""] ?? "from-slate-500 to-slate-700",
  }));
  const livePrompts: LivePrompt[] = dbPrompts.length > 0 ? dbPrompts : promptsData;
  const liveCatsList = [...new Set(livePrompts.map((p) => p.cat))];

  const [visibleCats, setVisibleCats] = useState<Set<string>>(
    () => new Set(promptsCategorias.filter((c) => c !== "Todos")),
  );
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<LivePrompt | null>(null);
  const [copied, setCopied] = useState(false);
  useModalBlur(!!selected);

  useEffect(() => {
    if (liveCatsList.length > 0) setVisibleCats(new Set(liveCatsList));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptsRaw]);

  const cats = liveCatsList;

  const toggleCat = (cat: string) => {
    setVisibleCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        if (next.size > 1) next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const close = () => {
    setSelected(null);
    setCopied(false);
  };
  const copy = () => {
    if (!selected) return;
    navigator.clipboard.writeText(selected.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const visibleSections = cats.filter((c) => visibleCats.has(c));
  const hasResults = visibleSections.some(
    (cat) =>
      livePrompts.filter(
        (p) =>
          p.cat === cat &&
          (p.titulo.toLowerCase().includes(search.toLowerCase()) ||
            p.desc.toLowerCase().includes(search.toLowerCase())),
      ).length > 0,
  );

  return (<>
    <div className="flex flex-col gap-5">
      {/* Filter navbar + search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-1 -mx-1 px-1">
          {cats.map((cat) => {
            const ativo = visibleCats.has(cat);
            const count = livePrompts.filter((p) => p.cat === cat).length;
            return (
              <button
                key={cat}
                onClick={() => toggleCat(cat)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  ativo ? "text-white" : "text-slate-500 hover:text-[#6578c4]"
                }`}
                style={ativo
                  ? { background: "#6578c4", boxShadow: "0 2px 8px rgba(101,120,196,0.30)" }
                  : { background: "#f9f3dd" }}
              >
                {cat}
                <span className={`text-[10px] font-medium ${ativo ? "text-white/70" : "text-slate-400"}`}>{count}</span>
              </button>
            );
          })}
        </div>
        <div className="relative flex-shrink-0">
          <BrandSearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#6578c4]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-3 py-2 border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 w-full sm:w-48 bg-white/70"
            placeholder="Buscar prompt..."
          />
        </div>
      </div>
      <div className="border-t border-slate-100" />
      <div className="space-y-8">
        {visibleSections.map((cat) => {
          const items = livePrompts.filter(
            (p) =>
              p.cat === cat &&
              (p.titulo.toLowerCase().includes(search.toLowerCase()) ||
                p.desc.toLowerCase().includes(search.toLowerCase())),
          );
          if (items.length === 0) return null;
          return (
            <section key={cat}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 rounded-full" style={{ background: "#6578c4" }} />
                  <h2 className="text-base font-semibold text-slate-800">{cat}</h2>
                </div>
                <span className="text-xs text-slate-400">{items.length} prompts</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 fx-stagger">
                {items.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(p)}
                    className="group rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 text-left transition-all hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 flex flex-col fx-tap"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.cor} flex items-center justify-center mb-3 shadow-sm`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800 leading-snug mb-1.5">
                      {p.titulo}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-3">
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Heart className="w-3 h-3" strokeWidth={1.5} />
                        {p.favoritos}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium group-hover:text-slate-700 transition-colors">
                        Ver prompt
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          );
        })}

        {!hasResults && (
          <div className="text-center py-16 text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl">
            Nenhum prompt encontrado para "{search}".
          </div>
        )}
      </div>{/* /right content */}
    </div>{/* /flex layout */}

    {/* Modal */}
    {selected && (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm fx-modal-backdrop"
        onClick={close}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden border border-slate-200 fx-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-100">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">
                {selected.cat} · por {selected.autor}
              </div>
              <h2 className="text-lg font-semibold text-slate-900 leading-tight">
                {selected.titulo}
              </h2>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                {selected.desc}
              </p>
            </div>
            <button
              onClick={close}
              className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-5">
            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400 mb-2">
              Prompt
            </div>
            <pre className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-mono bg-slate-50 border border-slate-100 rounded-xl p-4">
              {selected.prompt}
            </pre>
          </div>
          <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-slate-100 bg-slate-50/60">
            <button
              onClick={close}
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              Fechar
            </button>
            <button
              onClick={copy}
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${copied ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "text-white hover:opacity-90"}`}
              style={!copied ? { background: "#6578c4" } : {}}
            >
              {copied ? (
                <><Check className="w-4 h-4" /> Copiado</>
              ) : (
                <><Copy className="w-4 h-4" /> Copiar prompt</>
              )}
            </button>
          </div>
        </div>
      </div>
    )}
  </>);
}

// ─── PAGE: LIVROS METODOLÓGICOS ───────────────────────────────────────────

function LivrosPage() {
  const [visibleCats, setVisibleCats] = useState<Set<string>>(
    () => new Set(livrosCategorias.map((c) => c.id))
  );
  const [selecionado, setSelecionado] = useState<Livro | null>(null);
  useModalBlur(!!selecionado);

  const toggleCat = (id: string) => {
    setVisibleCats((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const catDoLivro = selecionado
    ? livrosCategorias.find((c) => livrosData[c.id]?.some((l) => l.titulo === selecionado.titulo))
    : null;

  const visibleList = livrosCategorias.filter((c) => visibleCats.has(c.id));

  return (
    <div className="flex flex-col gap-5">
      {/* Filter navbar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100 -mx-1 px-1">
        {livrosCategorias.map((c) => {
          const ativo = visibleCats.has(c.id);
          const count = livrosData[c.id]?.length || 0;
          return (
            <button
              key={c.id}
              onClick={() => toggleCat(c.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                ativo ? "text-white" : "text-slate-500 hover:text-[#6578c4]"
              }`}
              style={ativo
                ? { background: "#6578c4", boxShadow: "0 2px 8px rgba(101,120,196,0.30)" }
                : { background: "#f9f3dd" }}
            >
              <c.icon className="w-3 h-3 flex-shrink-0" strokeWidth={2} />
              {c.nome}
              <span className={`text-[10px] font-medium ${ativo ? "text-white/70" : "text-slate-400"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* All book sections stacked */}
      <div className="space-y-10">
        {visibleList.map((catInfo) => {
          const livros = livrosData[catInfo.id] || [];
          return (
            <section key={catInfo.id}>
              <div className="mb-4 sm:mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1 h-4 rounded-full" style={{ background: "#6578c4" }} />
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#6578c4" }}>
                    <catInfo.icon className="w-3 h-3" strokeWidth={2} />
                    {catInfo.nome}
                  </div>
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-800 pl-3">
                  {livros.length} {livros.length === 1 ? "obra de referência" : "obras de referência"}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 fx-stagger">
                {livros.map((l, i) => (
                  <button
                    key={i}
                    onClick={() => setSelecionado(l)}
                    className="group text-left rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm overflow-hidden hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all fx-tap"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={l.foto}
                        alt={l.titulo}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${l.cor} opacity-80`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                        <BookMarked className="w-4 h-4 text-white/50" strokeWidth={1.5} />
                        <span className="text-[10px] font-mono text-white/50 tracking-widest">
                          {l.ano}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="text-[10px] font-medium uppercase tracking-wider text-white/70 mb-1">
                          {l.editora}
                        </div>
                        <div className="text-sm font-semibold text-white leading-snug line-clamp-3 mb-2">
                          {l.titulo}
                        </div>
                        <div className="text-[11px] text-white/80 leading-tight line-clamp-1">
                          {l.autor}
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 border-t border-slate-100">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Usado em
                      </div>
                      <div className="text-xs text-slate-700 leading-snug line-clamp-1">
                        {l.usadoEm.join(" · ")}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Modal */}
      {selecionado && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm fx-modal-backdrop"
          onClick={() => setSelecionado(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] flex flex-col md:flex-row overflow-hidden border border-slate-200 fx-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hidden md:flex flex-col justify-between w-64 flex-shrink-0 relative overflow-hidden">
              <img
                src={selecionado.foto}
                alt={selecionado.titulo}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${selecionado.cor} opacity-80`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              <div className="relative p-6 flex flex-col h-full justify-between">
                <BookMarked className="w-6 h-6 text-white/60" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-white/60 mb-2">
                    {selecionado.editora} · {selecionado.ano}
                  </div>
                  <div className="text-lg font-semibold text-white leading-snug mb-3">
                    {selecionado.titulo}
                  </div>
                  <div className="text-xs text-white/75">
                    {selecionado.autor}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col min-w-0">
              <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-slate-100">
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400 mb-1">
                    {catDoLivro?.nome}
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 leading-tight">
                    {selecionado.titulo}
                  </h2>
                  <div className="text-sm text-slate-500 mt-1">
                    {selecionado.autor} · {selecionado.editora}, {selecionado.ano}
                  </div>
                </div>
                <button
                  onClick={() => setSelecionado(null)}
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Por que está aqui
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selecionado.contexto}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Referência em
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selecionado.usadoEm.map((u) => (
                      <span key={u} className="text-xs font-medium text-slate-700 bg-slate-100 rounded-full px-3 py-1">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-100 bg-slate-50/60">
                <button
                  onClick={() => setSelecionado(null)}
                  className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Fechar
                </button>
                <a
                  href={`https://scholar.google.com/scholar?q=${encodeURIComponent(selecionado.titulo + " " + selecionado.autor)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white rounded-lg px-4 py-2 hover:opacity-90 transition-opacity flex items-center gap-2"
                  style={{ background: "#6578c4" }}
                >
                  Buscar no Scholar <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PAGE: COMUNIDADE ──────────────────────────────────────────────────────

function ComunidadePage({ onNavigate }: { onNavigate?: (page: Page) => void }) {
  const { usuario } = useAuthContext();
  const [canalAtivo, setCanalAtivo] = useState("todos");
  const [novoPost, setNovoPost] = useState("");
  const [publicando, setPublicando] = useState(false);
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [likesCount, setLikesCount] = useState<Record<string, number>>({});
  const [comentariosAbertos, setComentariosAbertos] = useState<Record<string, boolean>>({});
  const [comentario, setComentario] = useState<Record<string, string>>({});

  const { data: postsRaw, refetch: refetchPosts } = useSupabaseQuery(
    () => comunidadeApi.getPosts(canalAtivo === "todos" ? undefined : canalAtivo),
    [canalAtivo]
  );

  const canalLabel = (canal: string) =>
    canaisComunidade.find((c) => c.id === canal)?.nome ?? canal;

  type LivePost = {
    id: string; autor: string; cargo: string; canal: string; canalLabel: string;
    tempo: string; fixado: boolean; titulo: string; conteudo: string;
    tags: string[]; likes: number; comentarios: number; salvos: number;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dbPosts: LivePost[] = ((postsRaw ?? []) as any[]).map((p) => {
    const user = p.usuarios as { id?: string; nome?: string; foto_url?: string } | null;
    const likesList = (p.comunidade_likes ?? []) as { usuario_id: string }[];
    const comentsList = (p.comunidade_comentarios ?? []) as { id: string }[];
    const conteudo = p.conteudo ?? "";
    const titulo = conteudo.length > 80 ? conteudo.slice(0, 80) + "..." : conteudo;
    return {
      id: p.id,
      autor: user?.nome ?? "Membro",
      cargo: "",
      canal: p.canal,
      canalLabel: canalLabel(p.canal),
      tempo: new Date(p.criado_em).toLocaleDateString("pt-BR"),
      fixado: false,
      titulo,
      conteudo,
      tags: p.tags ?? [],
      likes: likesList.length,
      comentarios: comentsList.length,
      salvos: 0,
    };
  });

  const livePosts: LivePost[] = dbPosts.length > 0
    ? dbPosts
    : postsComunidade.map((p) => ({ ...p, id: String(p.id) }));

  // Inicializa contagem de likes a partir dos dados do banco
  useEffect(() => {
    if (dbPosts.length > 0) {
      const counts: Record<string, number> = {};
      const userLiked: Record<string, boolean> = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((postsRaw ?? []) as any[]).forEach((p) => {
        const likesList = (p.comunidade_likes ?? []) as { usuario_id: string }[];
        counts[p.id] = likesList.length;
        userLiked[p.id] = usuario ? likesList.some((l) => l.usuario_id === usuario.id) : false;
      });
      setLikesCount(counts);
      setLikes(userLiked);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsRaw]);

  // Composer attachments
  const [postImagem, setPostImagem] = useState<string | null>(null);
  const [postImagemFile, setPostImagemFile] = useState<File | null>(null);
  const [postDocumento, setPostDocumento] = useState<string | null>(null);
  const [postDocumentoFile, setPostDocumentoFile] = useState<File | null>(null);
  const [postTags, setPostTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [showTagInput, setShowTagInput] = useState(false);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPostImagemFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPostImagem(ev.target?.result as string);
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleDocSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { setPostDocumentoFile(file); setPostDocumento(file.name); }
    e.target.value = "";
  };

  const adicionarTag = () => {
    const t = tagInput.trim().replace(/^#/, "");
    if (t && !postTags.includes(t) && postTags.length < 5) {
      setPostTags((prev) => [...prev, t]);
    }
    setTagInput("");
  };

  const publicar = async () => {
    if (!novoPost.trim() || !usuario) return;
    setPublicando(true);

    const postId = crypto.randomUUID();
    let imagemUrl: string | null = null;
    let documentoUrl: string | null = null;

    if (postImagemFile) {
      imagemUrl = await storageApi.uploadComunidadeImagem(postId, postImagemFile);
    }
    if (postDocumentoFile) {
      documentoUrl = await storageApi.uploadComunidadeDoc(postId, postDocumentoFile);
    }

    await comunidadeApi.createPost({
      usuario_id: usuario.id,
      conteudo: novoPost,
      tags: postTags,
      canal: canalAtivo === "todos" ? "geral" : canalAtivo,
      imagem_url: imagemUrl,
      documento_url: documentoUrl,
    });
    setNovoPost("");
    setPostImagem(null);
    setPostImagemFile(null);
    setPostDocumento(null);
    setPostDocumentoFile(null);
    setPostTags([]);
    setShowTagInput(false);
    setPublicando(false);
    refetchPosts();
  };

  const postsFiltrados = livePosts;

  const toggleLike = async (id: string) => {
    const liked = likes[id] ?? false;
    setLikes((l) => ({ ...l, [id]: !liked }));
    setLikesCount((c) => ({ ...c, [id]: (c[id] ?? 0) + (liked ? -1 : 1) }));
    if (usuario) {
      await comunidadeApi.toggleLike(usuario.id, id, liked);
    }
  };
  const toggleComentarios = (id: string) =>
    setComentariosAbertos((c) => ({ ...c, [id]: !c[id] }));

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Pills de canais no mobile */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-1">
        <button
          onClick={() => setCanalAtivo("todos")}
          className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
          style={canalAtivo === "todos"
            ? { background: "#6578c4", color: "white", boxShadow: "0 2px 8px rgba(101,120,196,0.30)" }
            : { background: "#f9f3dd", color: "#64748b" }}
        >
          Todos
        </button>
        {canaisComunidade.map((c) => {
          const ativo = canalAtivo === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setCanalAtivo(c.id)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all"
              style={ativo
                ? { background: "#6578c4", color: "white", boxShadow: "0 2px 8px rgba(101,120,196,0.30)" }
                : { background: "#f9f3dd", color: "#64748b" }}
            >
              {c.nome}
            </button>
          );
        })}
      </div>

      {/* Sidebar discreta de canais (desktop) */}
      <aside className="hidden md:block w-52 flex-shrink-0">
        <div className="sticky top-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Canais
          </div>
          <nav className="space-y-0.5">
            <button
              onClick={() => setCanalAtivo("todos")}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${canalAtivo === "todos" ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`}
            >
              <Hash className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Todos</span>
            </button>
            {canaisComunidade.map((c) => {
              const ativo = canalAtivo === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCanalAtivo(c.id)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${ativo ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`}
                >
                  <Hash className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span className="truncate">{c.nome}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2">
              Acontece agora
            </div>
            <div className="px-2 space-y-3 text-xs">
              {eventosProximos.map((e, i) => (
                <div key={i}>
                  <div className="text-slate-700 font-medium leading-snug">{e.titulo}</div>
                  <div className="text-slate-400 mt-0.5">{e.data}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2 flex items-center gap-1.5">
              <Bell className="w-3 h-3" strokeWidth={2} />
              Atualizações
            </div>
            <div className="px-2 space-y-1 text-xs">
              {([
                { icon: BookOpen, texto: "Novo módulo: Mediação Moderada em R", page: "plataforma" as Page },
                { icon: Settings, texto: "Atualização do JASP (v0.19)", page: null },
                { icon: Settings, texto: "Novo GPT: Gerador de Sintaxe R", page: "gpts" as Page },
                { icon: BookOpen, texto: "Curso de Análise de Redes disponível", page: "plataforma" as Page },
              ]).map((u, i) =>
                u.page ? (
                  <button
                    key={i}
                    onClick={() => onNavigate?.(u.page!)}
                    className="w-full flex items-start gap-2 py-1.5 rounded-lg hover:bg-slate-50 px-1 text-left transition-colors group"
                  >
                    <u.icon className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0 group-hover:text-[#6578c4] transition-colors" strokeWidth={2} />
                    <span className="text-slate-600 leading-snug group-hover:text-[#6578c4] transition-colors">{u.texto}</span>
                  </button>
                ) : (
                  <div key={i} className="flex items-start gap-2 py-1.5 px-1">
                    <u.icon className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-slate-500 leading-snug">{u.texto}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Feed central */}
      <div className="flex-1 min-w-0">
        {/* Composer */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 mb-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          {/* Inputs ocultos para arquivo */}
          <input ref={imgInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageSelect} />
          <input ref={docInputRef} type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx" className="hidden" onChange={handleDocSelect} />

          <div className="flex items-start gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#1e3a5f] border border-white flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
              SA
            </div>
            <textarea
              value={novoPost}
              onChange={(e) => setNovoPost(e.target.value)}
              placeholder="Compartilhe uma dúvida, achado ou recurso…"
              rows={novoPost ? 3 : 1}
              className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#6578c4] focus:ring-1 focus:ring-[#6578c4] hover:bg-slate-50 transition-colors bg-slate-50/50 placeholder:text-slate-400 resize-none"
            />
          </div>

          {/* Preview de imagem */}
          {postImagem && (
            <div className="relative mb-3 ml-14 rounded-xl overflow-hidden border border-slate-200">
              <img src={postImagem} alt="preview" className="w-full max-h-48 object-cover" />
              <button
                onClick={() => setPostImagem(null)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-900/60 flex items-center justify-center text-white hover:bg-slate-900"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Chip de documento */}
          {postDocumento && (
            <div className="flex items-center gap-2 ml-14 mb-3 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 w-fit max-w-full">
              <FileText className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-xs text-slate-700 truncate max-w-[200px]">{postDocumento}</span>
              <button onClick={() => setPostDocumento(null)} className="text-slate-400 hover:text-slate-600 flex-shrink-0">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Tags adicionadas */}
          {postTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 ml-14 mb-3">
              {postTags.map((t) => (
                <span key={t} className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full" style={{ background: "rgba(101,120,196,0.12)", color: "#6578c4" }}>
                  #{t}
                  <button onClick={() => setPostTags((prev) => prev.filter((x) => x !== t))} className="hover:opacity-70">
                    <X className="w-2.5 h-2.5" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Campo de nova tag inline */}
          {showTagInput && (
            <div className="flex items-center gap-2 ml-14 mb-3">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === ",") { e.preventDefault(); adicionarTag(); }
                  if (e.key === "Escape") { setShowTagInput(false); setTagInput(""); }
                }}
                placeholder="Digite uma tag e pressione Enter"
                autoFocus
                className="border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#6578c4] w-52"
              />
              <button onClick={adicionarTag} className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ background: "#6578c4" }}>
                Adicionar
              </button>
              <button onClick={() => { setShowTagInput(false); setTagInput(""); }} className="text-xs text-slate-400 hover:text-slate-600">
                Cancelar
              </button>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1">
              <button
                onClick={() => imgInputRef.current?.click()}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${postImagem ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:bg-slate-100"}`}
              >
                <ImageIcon className="w-4 h-4 text-blue-500" strokeWidth={1.5} /> Imagem
              </button>
              <button
                onClick={() => docInputRef.current?.click()}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${postDocumento ? "text-emerald-600 bg-emerald-50" : "text-slate-600 hover:bg-slate-100"}`}
              >
                <FileText className="w-4 h-4 text-emerald-500" strokeWidth={1.5} /> Documento
              </button>
              <button
                onClick={() => setShowTagInput((v) => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${postTags.length > 0 || showTagInput ? "text-amber-600 bg-amber-50" : "text-slate-600 hover:bg-slate-100"}`}
              >
                <Tag className="w-4 h-4 text-amber-500" strokeWidth={1.5} /> Tags{postTags.length > 0 ? ` (${postTags.length})` : ""}
              </button>
            </div>
            <button
              disabled={!novoPost.trim() || publicando}
              onClick={publicar}
              className="text-xs font-semibold text-white rounded-full px-5 py-1.5 hover:opacity-90 transition-opacity disabled:!bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
              style={{ background: "#6578c4" }}
            >
              {publicando ? "Publicando..." : "Publicar"}
            </button>
          </div>
        </div>

        {/* Indicador de canal/quantidade */}
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs text-slate-500">
            {canalAtivo === "todos"
              ? "Mostrando todos os posts"
              : `Em #${canaisComunidade.find((c) => c.id === canalAtivo)?.nome}`}
          </span>
          <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors">
            Mais recentes <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Feed */}
        <div key={canalAtivo} className="space-y-3 fx-stagger">
          {postsFiltrados.map((p, idx) => {
            const liked = likes[p.id] ?? false;
            const totalLikes = likesCount[p.id] ?? p.likes;
            const comOpen = comentariosAbertos[p.id];
            return (
              <article
                key={p.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_4px_12px_rgba(15,23,42,0.06)] transition-shadow"
              >
                {p.fixado && (
                  <div className="flex items-center gap-1.5 px-5 py-1.5 text-[11px] font-medium text-amber-700 bg-amber-50/70 border-b border-amber-100">
                    <Pin className="w-3 h-3" strokeWidth={2} /> Fixado pela equipe Sandri
                  </div>
                )}

                <div className="p-5">
                  {/* Header autor */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${avatarColors[idx % avatarColors.length]}`}>
                      {getInitials(p.autor)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-900 leading-tight">
                        {p.autor}
                      </div>
                      <div className="text-xs text-slate-500 leading-tight mt-0.5">
                        {p.cargo}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <span>{p.tempo}</span>
                        <span>·</span>
                        <span className="flex items-center gap-0.5">
                          <Hash className="w-2.5 h-2.5" strokeWidth={2} />
                          {p.canalLabel}
                        </span>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-700 transition-colors p-1 -m-1">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                    {p.titulo}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-3">
                    {p.conteudo}
                  </p>

                  {p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] font-medium text-[#5568b3] bg-[#6578c4]/10 hover:bg-[#6578c4]/15 rounded-full px-2.5 py-0.5 cursor-pointer transition-colors">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 py-2 border-y border-slate-100">
                    <div className="flex items-center gap-1.5">
                      {totalLikes > 0 && (
                        <>
                          <div className="w-4 h-4 rounded-full bg-rose-100 border border-white flex items-center justify-center">
                            <Heart className="w-2 h-2 text-rose-600 fill-rose-600" strokeWidth={0} />
                          </div>
                          <span>{totalLikes}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleComentarios(p.id)}
                        className="hover:text-slate-800 hover:underline transition-colors"
                      >
                        {p.comentarios} comentários
                      </button>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex items-center justify-around pt-1">
                    <button
                      onClick={() => toggleLike(p.id)}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-colors ${liked ? "text-rose-600 bg-rose-50" : "text-slate-600 hover:bg-slate-100"}`}
                    >
                      <Heart className={`w-[18px] h-[18px] ${liked ? "fill-rose-600" : ""}`} strokeWidth={1.5} />
                      <span className="hidden sm:inline">Curtir</span>
                    </button>
                    <button
                      onClick={() => toggleComentarios(p.id)}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      <MessageCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
                      <span className="hidden sm:inline">Comentar</span>
                    </button>
                  </div>

                  {/* Comentários expandidos */}
                  {comOpen && (
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-3 fx-rise">
                      {/* Comentário fake exemplo */}
                      <div className="flex items-start gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-semibold text-white flex-shrink-0 ${avatarColors[(idx + 2) % avatarColors.length]}`}>
                          {getInitials(rankingData[(idx + 1) % rankingData.length].nome)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-slate-50 rounded-2xl px-3.5 py-2">
                            <div className="text-xs font-semibold text-slate-800">
                              {rankingData[(idx + 1) % rankingData.length].nome}
                            </div>
                            <div className="text-sm text-slate-700 leading-snug mt-0.5">
                              Excelente ponto! Eu costumo apresentar o gráfico de interação primeiro, justamente para guiar a leitura das comparações.
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mt-1 px-3 text-[11px] text-slate-400">
                            <button className="hover:text-slate-700 transition-colors">Curtir</button>
                            <button className="hover:text-slate-700 transition-colors">Responder</button>
                            <span>2 min</span>
                          </div>
                        </div>
                      </div>

                      {/* Input de comentário */}
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                          {usuario?.nome ? usuario.nome.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() : "??"}
                        </div>
                        <div className="flex-1 relative">
                          <input
                            value={comentario[p.id] || ""}
                            onChange={(e) =>
                              setComentario({ ...comentario, [p.id]: e.target.value })
                            }
                            onKeyDown={async (e) => {
                              if (e.key === "Enter" && comentario[p.id]?.trim() && usuario) {
                                await comunidadeApi.createComentario({ post_id: p.id, usuario_id: usuario.id, conteudo: comentario[p.id].trim() });
                                setComentario({ ...comentario, [p.id]: "" });
                                refetchPosts();
                              }
                            }}
                            placeholder="Adicione um comentário…"
                            className="w-full border border-slate-200 rounded-full pl-4 pr-12 py-2 text-sm focus:outline-none focus:border-slate-400 bg-slate-50/50 placeholder:text-slate-400"
                          />
                          <button
                            disabled={!comentario[p.id]?.trim()}
                            onClick={async () => {
                              if (!comentario[p.id]?.trim() || !usuario) return;
                              await comunidadeApi.createComentario({ post_id: p.id, usuario_id: usuario.id, conteudo: comentario[p.id].trim() });
                              setComentario({ ...comentario, [p.id]: "" });
                              refetchPosts();
                            }}
                            className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:!bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                            style={{ background: "#6578c4" }}
                          >
                            <Send className="w-3.5 h-3.5 -rotate-45 translate-x-px" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {postsFiltrados.length === 0 && (
          <div className="text-center py-16 text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl">
            Nenhum post neste canal ainda.
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAGE: ADMIN ──────────────────────────────────────────────────────────

type AdminTab = "overview" | "assinaturas" | "receita" | "parcerias";
type EditorTab = "curso" | "gpt" | "prompt" | "livro" | "live";

function StatCard({ label, value, sub, icon: Icon, trend, color = "slate" }: { label: string; value: string; sub: string; icon: ElementType; trend?: string; color?: string; }) {
  const colors: Record<string, string> = { slate: "bg-slate-50 text-slate-700", blue: "bg-[#6578c4]/10 text-[#5568b3]", emerald: "bg-emerald-50 text-emerald-700", amber: "bg-amber-50 text-amber-700" };
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 fx-hover-lift cursor-default">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colors[color]}`}><Icon className="w-4 h-4" strokeWidth={1.5} /></div>
        {trend && (<span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"><ArrowUpRight className="w-3 h-3" />{trend}</span>)}
      </div>
      <div className="text-2xl font-bold text-slate-800 mb-0.5">{value}</div>
      <div className="text-xs font-medium text-slate-700 mb-0.5">{label}</div>
      <div className="text-[11px] text-slate-400">{sub}</div>
    </div>
  );
}

function AdminPage() {
  const [tab, setTab] = useState<AdminTab>("overview");
  const [assBusca, setAssBusca] = useState("");
  const [assFiltro, setAssFiltro] = useState("Todos");
  const [assEditando, setAssEditando] = useState<string | null>(null);
  const [metricas, setMetricas] = useState<{
    totalAlunos: number; totalAssinaturasAtivas: number; totalParcerias: number; receitaMensal: number;
  } | null>(null);
  const [assRealData, setAssRealData] = useState<{
    id: string; status: string;
    usuarios: { nome: string | null; email: string } | null;
    planos: { nome: string; preco_mensal: number } | null;
    criado_em: string;
  }[]>([]);
  const [planosList, setPlanosList] = useState<{ id: string; nome: string }[]>([]);
  const [acaoCarregando, setAcaoCarregando] = useState<string | null>(null);
  const [acaoFeedback, setAcaoFeedback] = useState<{ id: string; msg: string; ok: boolean } | null>(null);

  useEffect(() => {
    adminApi.getMetricasAdmin().then((m) => setMetricas(m)).catch(() => {});
    assinaturasApi.getAssinaturasAdmin().then(({ data }) => {
      if (data) setAssRealData(data as typeof assRealData);
    }).catch(() => {});
    assinaturasApi.getPlanos().then(({ data }) => {
      if (data) setPlanosList(data.map((p) => ({ id: p.id, nome: p.nome })));
    }).catch(() => {});
  }, []);

  const handleCancelar = async (id: string) => {
    setAcaoCarregando(id + "_cancelar");
    const { error } = await assinaturasApi.cancelarAssinatura(id);
    setAcaoCarregando(null);
    if (!error) {
      setAssRealData((prev) => prev.map((a) => a.id === id ? { ...a, status: "cancelada" } : a));
      setAcaoFeedback({ id, msg: "Assinatura cancelada.", ok: true });
    } else {
      setAcaoFeedback({ id, msg: "Erro ao cancelar.", ok: false });
    }
    setTimeout(() => setAcaoFeedback(null), 3000);
  };

  const handleAlterarPlano = async (id: string, novoPlanoId: string) => {
    setAcaoCarregando(id + "_plano");
    const { supabase } = await import("../lib/supabase");
    const { error } = await supabase.from("assinaturas").update({ plano_id: novoPlanoId }).eq("id", id);
    setAcaoCarregando(null);
    if (!error) {
      const novoPLano = planosList.find((p) => p.id === novoPlanoId);
      setAssRealData((prev) => prev.map((a) => a.id === id ? { ...a, planos: { ...a.planos!, nome: novoPLano?.nome ?? a.planos?.nome ?? "" } } : a));
      setAcaoFeedback({ id, msg: "Plano alterado com sucesso.", ok: true });
    } else {
      setAcaoFeedback({ id, msg: "Erro ao alterar plano.", ok: false });
    }
    setTimeout(() => setAcaoFeedback(null), 3000);
  };

  const adminTabs: { id: AdminTab; label: string; icon: ElementType }[] = [
    { id: "overview", label: "Visão Geral", icon: LayoutDashboard },
    { id: "assinaturas", label: "Assinaturas", icon: CreditCard },
    { id: "receita", label: "Receita", icon: TrendingUp },
    { id: "parcerias", label: "Parcerias", icon: Handshake },
  ];

  const assFiltered = assRealData.filter((a) => {
    const nome = a.usuarios?.nome ?? "";
    const status = a.status;
    const plano = a.planos?.nome ?? "";
    return (assFiltro === "Todos" || plano === assFiltro || status === assFiltro) && nome.toLowerCase().includes(assBusca.toLowerCase());
  });
  const totalAtivos = metricas?.totalAssinaturasAtivas ?? assinaturasData.filter((a) => a.status === "Ativo").length;
  const receitaMes = metricas?.receitaMensal ?? receitaData[receitaData.length - 1].receita;
  const acessosHoje = acessosData[acessosData.length - 2].acessos;
  const parceirosAtivos = metricas?.totalParcerias ?? parceirosAdmin.filter((p) => p.status === "Ativo").length;

  const statusBadge = (s: string) => {
    if (s === "Ativo") return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    if (s === "Pausado") return "bg-amber-50 text-amber-700 border border-amber-200";
    if (s === "Cancelado") return "bg-rose-50 text-rose-700 border border-rose-200";
    if (s === "Em Negociação") return "bg-[#6578c4]/10 text-[#5568b3] border border-[#6578c4]/30";
    return "bg-slate-100 text-slate-600";
  };
  const planoBadge = (p: string) => p === "Consultoria" ? "bg-[#c9a961]/20 text-[#8a6210] border border-[#c9a961]/30" : "bg-slate-100 text-slate-700";

  return (
    <div>
      {/* Tab bar */}
      <div className="flex items-center gap-0.5 overflow-x-auto -mx-1 px-1 mb-6 border-b border-[#6578c4]/15">
        {adminTabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${tab === t.id ? "border-[#6578c4] text-[#6578c4]" : "border-transparent text-slate-400 hover:text-slate-600"}`}>
            <t.icon className="w-4 h-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      {/* OVERVIEW */}
      {tab === "overview" && (
        <div className="space-y-6 fx-fade">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 fx-stagger-grid">
            <StatCard label="Assinantes Ativos" value={String(totalAtivos)} sub="dos últimos 30 dias" icon={UserCheck} trend="+12%" color="blue" />
            <StatCard label="Receita Mensal" value={`R$ ${receitaMes.toLocaleString("pt-BR")}`} sub="Mai 2026" icon={DollarSign} trend="+13%" color="emerald" />
            <StatCard label="Acessos Hoje" value={String(acessosHoje)} sub="pico às 18h" icon={Activity} trend="+8%" color="amber" />
            <StatCard label="Parcerias Ativas" value={String(parceirosAtivos)} sub={`${parceirosAdmin.filter((p) => p.status === "Em Negociação").length} em negociação`} icon={Handshake} color="slate" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <div><div className="text-sm font-semibold text-slate-800">Receita Mensal</div><div className="text-xs text-slate-400 mt-0.5">Jan – Mai 2026</div></div>
                <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full"><ArrowUpRight className="w-3 h-3" /> +69% no período</span>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={receitaData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="recGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6578c4" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#6578c4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `R$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0", background: "white" }} formatter={(v: number) => [`R$ ${v.toLocaleString("pt-BR")}`, "Receita"]} />
                  <Area type="monotone" dataKey="receita" stroke="#6578c4" strokeWidth={2} fill="url(#recGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5">
              <div className="text-sm font-semibold text-slate-800 mb-1">Distribuição de Planos</div>
              <div className="text-xs text-slate-400 mb-3">por % de assinantes</div>
              <div className="flex justify-center mb-3">
                <PieChart width={150} height={150}>
                  <Pie data={distribuicaoPlanos} cx={70} cy={70} innerRadius={44} outerRadius={68} paddingAngle={3} dataKey="value">
                    {distribuicaoPlanos.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </div>
              <div className="space-y-2">
                {distribuicaoPlanos.map((p) => (
                  <div key={p.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} /><span className="text-slate-600">{p.name}</span></div>
                    <span className="font-semibold text-slate-700">{p.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5">
              <div className="text-sm font-semibold text-slate-800 mb-1">Acessos Diários</div>
              <div className="text-xs text-slate-400 mb-4">Últimos 7 dias</div>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={acessosData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="dia" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0", background: "white" }} formatter={(v: number) => [v, "Acessos"]} />
                  <Bar dataKey="acessos" fill="#6578c4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5">
              <div className="text-sm font-semibold text-slate-800 mb-4">Atividade Recente</div>
              <div className="space-y-3 fx-stagger-fast">
                {atividadeRecente.map((a, i) => {
                  const isPos = a.tipo === "assinatura" || a.tipo === "parceria";
                  return (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${isPos ? "bg-emerald-50" : "bg-rose-50"}`}>
                        {a.tipo === "assinatura" && <UserCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />}
                        {a.tipo === "parceria" && <Handshake className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />}
                        {a.tipo === "cancelamento" && <AlertCircle className="w-3.5 h-3.5 text-rose-600" strokeWidth={1.5} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-700 leading-snug">{a.texto}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{a.tempo}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ASSINATURAS */}
      {tab === "assinaturas" && (
        <div className="space-y-4 fx-fade">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <BrandSearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#6578c4]" />
              <input value={assBusca} onChange={(e) => setAssBusca(e.target.value)} className="pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 w-full bg-white/70" placeholder="Buscar assinante..." />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto">
              {["Todos", "Essencial", "Consultoria", "Ativo", "Pausado", "Cancelado"].map((f) => (
                <button key={f} onClick={() => setAssFiltro(f)} className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${assFiltro === f ? "text-white" : "text-slate-500 hover:text-[#6578c4]"}`} style={assFiltro === f ? { background: "#6578c4", boxShadow: "0 2px 8px rgba(101,120,196,0.30)" } : { background: "#f9f3dd" }}>{f}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Ativos", v: assinaturasData.filter((a) => a.status === "Ativo").length, c: "text-emerald-700" },
              { label: "Pausados", v: assinaturasData.filter((a) => a.status === "Pausado").length, c: "text-amber-700" },
              { label: "Cancelados", v: assinaturasData.filter((a) => a.status === "Cancelado").length, c: "text-rose-700" },
            ].map((k) => (
              <div key={k.label} className="rounded-xl border border-slate-200/80 bg-white/70 p-4 text-center">
                <div className={`text-2xl font-bold mb-1 ${k.c}`}>{k.v}</div>
                <div className="text-xs text-slate-500">{k.label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 gap-4 px-4 py-2.5 bg-slate-50 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              <div className="col-span-4">Assinante</div><div className="col-span-2">Plano</div><div className="col-span-2">Desde</div><div className="col-span-2">Valor/mês</div><div className="col-span-2">Status</div>
            </div>
            <div className="divide-y divide-slate-100 fx-stagger-fast">
              {assFiltered.map((a) => (
                <div key={a.id} className="px-4 py-3 hover:bg-slate-50/60 transition-colors sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-col gap-1.5">
                  <div className="sm:col-span-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 flex-shrink-0">
                      {(a.usuarios?.nome ?? "?").split(" ").map((n: string) => n[0]).slice(0, 2).join("").toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-slate-800 truncate">{a.usuarios?.nome ?? "—"}</div>
                      <div className="text-[11px] text-slate-400 truncate">{a.usuarios?.email ?? "—"}</div>
                    </div>
                  </div>
                  <div className="sm:col-span-2"><span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${planoBadge(a.planos?.nome ?? "")}`}>{a.planos?.nome ?? "—"}</span></div>
                  <div className="sm:col-span-2 text-xs text-slate-500">{new Date(a.criado_em).toLocaleDateString("pt-BR")}</div>
                  <div className="sm:col-span-2 text-sm font-semibold text-slate-700">R$ {Number(a.planos?.preco_mensal ?? 0).toFixed(2).replace(".", ",")}</div>
                  <div className="sm:col-span-2 flex items-center justify-between">
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusBadge(a.status === "ativa" ? "Ativo" : a.status === "cancelada" ? "Cancelado" : a.status)}`}>{a.status}</span>
                    <button onClick={() => setAssEditando(assEditando === a.id ? null : a.id)} className="text-slate-400 hover:text-slate-700 p-1 transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
                  </div>
                  {assEditando === a.id && (
                    <div className="sm:col-span-12 space-y-2 pt-2 border-t border-slate-100 fx-rise">
                      {acaoFeedback?.id === a.id && (
                        <p className={`text-xs px-3 py-1.5 rounded-lg ${acaoFeedback.ok ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>{acaoFeedback.msg}</p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        <select
                          className="text-xs px-2 py-1.5 rounded-lg border border-[#6578c4]/30 text-[#5568b3] bg-[#6578c4]/5 focus:outline-none"
                          defaultValue=""
                          onChange={(e) => { if (e.target.value) handleAlterarPlano(a.id, e.target.value); }}
                        >
                          <option value="" disabled>Alterar plano...</option>
                          {planosList.map((p) => <option key={p.id} value={p.id}>{p.nome}</option>)}
                        </select>
                        <button
                          onClick={() => handleCancelar(a.id)}
                          disabled={acaoCarregando === a.id + "_cancelar" || a.status === "cancelada"}
                          className="text-xs px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors disabled:opacity-50"
                        >
                          {acaoCarregando === a.id + "_cancelar" ? "Cancelando..." : "Cancelar"}
                        </button>
                        <a
                          href={`mailto:${a.usuarios?.email ?? ""}`}
                          className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                        >
                          Enviar e-mail
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {assFiltered.length === 0 && <div className="text-center py-12 text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl">Nenhum assinante encontrado.</div>}
        </div>
      )}

      {/* RECEITA */}
      {tab === "receita" && (
        <div className="space-y-5 fx-fade">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard label="Receita Mai/26" value="R$ 31.200" sub="+13% vs Abr" icon={DollarSign} trend="+13%" color="emerald" />
            <StatCard label="MRR Acumulado" value="R$ 123.210" sub="Jan–Mai 2026" icon={TrendingUp} color="blue" />
            <StatCard label="Ticket Médio" value="R$ 247" sub="Premium + Pro" icon={CreditCard} color="slate" />
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5">
            <div className="text-sm font-semibold text-slate-800 mb-1">Evolução de Receita &amp; Assinantes</div>
            <div className="text-xs text-slate-400 mb-4">Jan – Mai 2026</div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={receitaData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `R$${(v / 1000).toFixed(0)}k`} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0", background: "white" }} />
                <Line yAxisId="left" type="monotone" dataKey="receita" stroke="#0a0a3a" strokeWidth={2.5} dot={{ r: 4, fill: "#0a0a3a" }} name="Receita (R$)" />
                <Line yAxisId="right" type="monotone" dataKey="assinaturas" stroke="#6578c4" strokeWidth={2} dot={{ r: 4, fill: "#6578c4" }} strokeDasharray="5 3" name="Assinantes" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
            <div className="grid grid-cols-5 gap-4 px-5 py-3 bg-slate-50 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              <div>Mês</div><div>Receita</div><div>Assinantes</div><div>Variação</div><div>Status</div>
            </div>
            <div className="divide-y divide-slate-100 fx-stagger-fast">
              {[...receitaData].reverse().map((r, i) => {
                const prev = receitaData[receitaData.length - 2 - i];
                const pct = prev ? (((r.receita - prev.receita) / prev.receita) * 100).toFixed(1) : null;
                return (
                  <div key={r.mes} className="grid grid-cols-5 gap-4 px-5 py-3.5 items-center hover:bg-slate-50/60 transition-colors">
                    <div className="text-sm font-medium text-slate-700">{r.mes}/26</div>
                    <div className="text-sm font-semibold text-slate-800">R$ {r.receita.toLocaleString("pt-BR")}</div>
                    <div className="text-sm text-slate-600">{r.assinaturas}</div>
                    <div className={`text-sm font-medium ${pct && Number(pct) > 0 ? "text-emerald-600" : "text-slate-400"}`}>{pct ? `+${pct}%` : "—"}</div>
                    <div><span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${i === 0 ? "bg-[#6578c4]/10 text-[#5568b3] border border-[#6578c4]/30" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>{i === 0 ? "Atual" : "Concluído"}</span></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* PARCERIAS */}
      {tab === "parcerias" && (
        <div className="space-y-4 fx-fade">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard label="Parceiros Ativos" value={String(parceirosAdmin.filter((p) => p.status === "Ativo").length)} sub="instituições" icon={Building2} color="blue" />
            <StatCard label="Vagas Totais" value={String(parceirosAdmin.reduce((acc, p) => acc + p.vagas, 0))} sub="assentos institucionais" icon={Users} color="emerald" />
            <StatCard label="Receita Parcerias" value={`R$ ${parceirosAdmin.reduce((acc, p) => acc + p.totalPago, 0).toLocaleString("pt-BR")}`} sub="acumulado" icon={DollarSign} color="amber" />
            <StatCard label="Em Negociação" value={String(parceirosAdmin.filter((p) => p.status === "Em Negociação").length)} sub="propostas abertas" icon={RefreshCw} color="slate" />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
            <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-5 py-3 bg-slate-50 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              <div className="col-span-3">Instituição</div><div className="col-span-2">Tipo</div><div className="col-span-2">Plano · Vagas</div><div className="col-span-2">Receita</div><div className="col-span-2">Desde</div><div className="col-span-1">Status</div>
            </div>
            <div className="divide-y divide-slate-100 fx-stagger-fast">
              {parceirosAdmin.map((p) => (
                <div key={p.id} className="px-5 py-4 hover:bg-slate-50/60 transition-colors sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-col gap-1.5">
                  <div className="sm:col-span-3"><div className="text-sm font-semibold text-slate-800">{p.nome}</div><div className="text-[11px] text-slate-400">{p.cidade}</div></div>
                  <div className="sm:col-span-2 text-xs text-slate-500">{p.tipo}</div>
                  <div className="sm:col-span-2"><span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full mr-1.5 ${planoBadge(p.plano)}`}>{p.plano}</span><span className="text-xs text-slate-500">{p.vagas} vagas</span></div>
                  <div className="sm:col-span-2 text-sm font-semibold text-slate-700">{p.totalPago > 0 ? `R$ ${p.totalPago.toLocaleString("pt-BR")}` : "—"}</div>
                  <div className="sm:col-span-2 text-xs text-slate-500">{p.inicio}</div>
                  <div className="sm:col-span-1"><span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusBadge(p.status)}`}>{p.status}</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5">
            <div className="text-sm font-semibold text-slate-800 mb-4 flex items-center gap-2"><PlusCircle className="w-4 h-4 text-[#6578c4]" strokeWidth={1.5} /> Nova Parceria</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Nome da Instituição", "Tipo", "Cidade / Estado", "E-mail de Contato", "Vagas"].map((lbl) => (
                <div key={lbl}><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">{lbl}</label><input type={lbl === "Vagas" ? "number" : "text"} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder={lbl} /></div>
              ))}
              <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Plano</label><select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-slate-400"><option>Pro</option><option>Premium</option><option>Negociar</option></select></div>
            </div>
            <button className="mt-4 flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity" style={{ background: "#0a0a3a" }}><Save className="w-4 h-4" /> Salvar Parceria</button>
          </div>
        </div>
      )}

    </div>
  );
}

// ─── EDITOR PAGE ────────────────────────────────────────────────────────────

function CategoriaSelector({
  cats,
  setCats,
  placeholder = "Nova categoria...",
}: {
  cats: string[];
  setCats: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder?: string;
}) {
  const [nova, setNova] = useState("");
  const adicionar = () => {
    const c = nova.trim();
    if (c && !cats.includes(c)) setCats((p) => [...p, c]);
    setNova("");
  };
  return (
    <div>
      <div className="flex gap-2">
        <select className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white">
          {cats.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="flex gap-1 flex-1">
          <input
            value={nova}
            onChange={(e) => setNova(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && adicionar()}
            className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
            placeholder={placeholder}
          />
          <button onClick={adicionar} className="px-3 py-2 text-white rounded-lg text-sm hover:opacity-90 transition-opacity flex-shrink-0" style={{ background: "#6578c4" }}>
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {cats.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {cats.map((c) => (
            <span key={c} className="text-[11px] bg-slate-100 text-slate-600 border border-slate-200 rounded-full px-2.5 py-0.5 flex items-center gap-1">
              {c}
              <button onClick={() => setCats((p) => p.filter((x) => x !== c))} className="hover:text-rose-600 transition-colors"><X className="w-2.5 h-2.5" /></button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ImageUploadField({
  label,
  url,
  setUrl,
  inputRef,
  height = "h-36",
}: {
  label: string;
  url: string | null;
  setUrl: (v: string | null) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  height?: string;
}) {
  return (
    <div>
      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">{label}</label>
      {url ? (
        <div className={`relative ${height} rounded-xl overflow-hidden border border-slate-200 group`}>
          <img src={url} alt={label} className="w-full h-full object-cover" />
          <button
            onClick={() => { setUrl(null); if (inputRef.current) inputRef.current.value = ""; }}
            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-slate-600 hover:text-rose-600 rounded-lg p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-900 rounded-lg px-2.5 py-1.5 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Upload className="w-3 h-3" /> Trocar
          </button>
          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) setUrl(URL.createObjectURL(f)); }} />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-2 ${height} w-full border-2 border-dashed border-slate-300 rounded-xl text-slate-400 hover:border-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all`}
        >
          <ImageIcon className="w-6 h-6" strokeWidth={1.5} />
          <span className="text-sm">Clique para enviar imagem</span>
          <span className="text-xs text-slate-400">PNG, JPG, WEBP</span>
          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) setUrl(URL.createObjectURL(f)); }} />
        </button>
      )}
    </div>
  );
}

// ─── SELETOR DE ALUNOS ─────────────────────────────────────────────────────
function SeletorAlunos({
  selecionados,
  setSelecionados,
}: {
  selecionados: number[];
  setSelecionados: (ids: number[]) => void;
}) {
  const [busca, setBusca] = useState("");
  const ativos = assinaturasData.filter((a) => a.status !== "Cancelado");
  const filtrados = ativos.filter((a) =>
    a.nome.toLowerCase().includes(busca.toLowerCase())
  );
  const toggle = (id: number) =>
    setSelecionados(
      selecionados.includes(id)
        ? selecionados.filter((s) => s !== id)
        : [...selecionados, id]
    );
  const todosIds = filtrados.map((a) => a.id);
  const todosMarcados =
    todosIds.length > 0 && todosIds.every((id) => selecionados.includes(id));

  return (
    <div className="mt-2 border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
      <div className="px-3 py-2 border-b border-slate-100 flex items-center gap-2 bg-slate-50">
        <BrandSearchIcon className="w-3.5 h-3.5 text-[#6578c4] shrink-0" />
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="text-sm outline-none w-full bg-transparent placeholder:text-slate-400"
          placeholder="Buscar aluno por nome..."
        />
        {busca && (
          <button type="button" onClick={() => setBusca("")} className="text-slate-400 hover:text-slate-600">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <span className="text-xs text-slate-500">
          {selecionados.length === 0
            ? "Nenhum aluno selecionado"
            : `${selecionados.length} aluno${selecionados.length > 1 ? "s" : ""} selecionado${selecionados.length > 1 ? "s" : ""}`}
        </span>
        <button
          type="button"
          onClick={() => setSelecionados(todosMarcados ? [] : todosIds)}
          className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          {todosMarcados ? "Desmarcar todos" : "Selecionar todos"}
        </button>
      </div>
      <div className="max-h-52 overflow-y-auto divide-y divide-slate-50">
        {filtrados.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-5">Nenhum aluno encontrado</p>
        ) : (
          filtrados.map((aluno) => (
            <label
              key={aluno.id}
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={selecionados.includes(aluno.id)}
                onChange={() => toggle(aluno.id)}
                className="rounded border-slate-300 accent-slate-800"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-800 font-medium truncate">{aluno.nome}</p>
                <p className="text-xs text-slate-400 truncate">{aluno.email}</p>
              </div>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                  aluno.plano === "Consultoria"
                    ? "bg-violet-100 text-violet-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {aluno.plano}
              </span>
            </label>
          ))
        )}
      </div>
    </div>
  );
}

function EditorPage() {
  const [editorTab, setEditorTab] = useState<EditorTab>("curso");
  const [salvando, setSalvando] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ tipo: "ok" | "erro"; texto: string } | null>(null);

  // ── Estado dos formulários ──
  const [cursoForm, setCursoForm] = useState({ titulo: "", descricao: "", nivel: "Iniciante", plano_minimo: "essencial" as "essencial" | "consultoria" });
  const [gptForm, setGptForm] = useState({ titulo: "", descricao: "", url: "", categoria: "" });
  const [promptForm, setPromptForm] = useState({ titulo: "", descricao: "", conteudo: "", categoria: "" });
  const [livroForm, setLivroForm] = useState({ titulo: "", area: "" });
  const [liveForm, setLiveForm] = useState({
    titulo: "", descricao: "", data_inicio: "", duracao_min: 90,
    url_acesso: "", url_gravacao: "", plano_minimo: "essencial" as "essencial" | "consultoria",
    publicado: false,
  });

  const mostrarFeedback = (tipo: "ok" | "erro", texto: string) => {
    setFeedbackMsg({ tipo, texto });
    setTimeout(() => setFeedbackMsg(null), 3500);
  };

  const salvarCurso = async () => {
    if (!cursoForm.titulo.trim()) { mostrarFeedback("erro", "Título obrigatório."); return; }
    setSalvando(true);
    const plano_minimo = visibilidadeCurso === "consultoria" ? "consultoria" : "essencial" as "essencial" | "consultoria";
    const { error } = await cursosApi.createCurso({
      titulo: cursoForm.titulo,
      descricao: cursoForm.descricao || null,
      nivel: cursoForm.nivel as "Iniciante" | "Intermediário" | "Avançado",
      plano_minimo,
    });
    setSalvando(false);
    if (error) { mostrarFeedback("erro", "Erro ao salvar curso."); return; }
    mostrarFeedback("ok", "Curso salvo com sucesso!");
    setCursoForm({ titulo: "", descricao: "", nivel: "Iniciante", plano_minimo: "essencial" });
  };

  const salvarGPT = async () => {
    if (!gptForm.titulo.trim()) { mostrarFeedback("erro", "Nome obrigatório."); return; }
    setSalvando(true);
    const plano_minimo = visibilidadeGPT === "consultoria" ? "consultoria" : "essencial" as "essencial" | "consultoria";
    const { error } = await gptsApi.createGpt({
      titulo: gptForm.titulo,
      descricao: gptForm.descricao || null,
      url: gptForm.url || null,
      categoria: gptForm.categoria || catsCursoPrimeiroItem(catsGPT),
      plano_minimo,
    });
    setSalvando(false);
    if (error) { mostrarFeedback("erro", "Erro ao salvar GPT."); return; }
    mostrarFeedback("ok", "GPT salvo com sucesso!");
    setGptForm({ titulo: "", descricao: "", url: "", categoria: "" });
  };

  const salvarPrompt = async () => {
    if (!promptForm.titulo.trim() || !promptForm.conteudo.trim()) { mostrarFeedback("erro", "Título e conteúdo obrigatórios."); return; }
    setSalvando(true);
    const { error } = await promptsApi.createPrompt({
      titulo: promptForm.titulo,
      descricao: promptForm.descricao || null,
      conteudo: promptForm.conteudo,
      categoria: promptForm.categoria || catsCursoPrimeiroItem(catsPrompt),
    });
    setSalvando(false);
    if (error) { mostrarFeedback("erro", "Erro ao salvar prompt."); return; }
    mostrarFeedback("ok", "Prompt salvo com sucesso!");
    setPromptForm({ titulo: "", descricao: "", conteudo: "", categoria: "" });
  };

  const salvarLivro = async () => {
    if (!livroForm.titulo.trim()) { mostrarFeedback("erro", "Título obrigatório."); return; }
    setSalvando(true);
    const { error } = await livrosApi.createLivro({
      titulo: livroForm.titulo,
      area: livroForm.area || null,
    });
    setSalvando(false);
    if (error) { mostrarFeedback("erro", "Erro ao salvar livro."); return; }
    mostrarFeedback("ok", "Livro salvo com sucesso!");
    setLivroForm({ titulo: "", area: "" });
  };

  const salvarLive = async () => {
    if (!liveForm.titulo.trim()) { mostrarFeedback("erro", "Título obrigatório."); return; }
    if (!liveForm.data_inicio) { mostrarFeedback("erro", "Data e hora obrigatórias."); return; }
    setSalvando(true);
    const { error } = await livesApi.createLive({
      titulo: liveForm.titulo,
      descricao: liveForm.descricao || null,
      data_inicio: new Date(liveForm.data_inicio).toISOString(),
      duracao_min: liveForm.duracao_min,
      url_acesso: liveForm.url_acesso || null,
      url_gravacao: liveForm.url_gravacao || null,
      thumbnail_url: null,
      status: "agendada",
      plano_minimo: liveForm.plano_minimo,
      publicado: liveForm.publicado,
    });
    setSalvando(false);
    if (error) { mostrarFeedback("erro", "Erro ao salvar live."); return; }
    mostrarFeedback("ok", "Live agendada com sucesso!");
    setLiveForm({ titulo: "", descricao: "", data_inicio: "", duracao_min: 90, url_acesso: "", url_gravacao: "", plano_minimo: "essencial", publicado: false });
  };

  // categorias expansíveis por tipo
  const [catsCurso, setCatsCurso] = useState(["Estatística","Metodologia","Escrita Científica","Psicometria","Pesquisa Qualitativa","Ferramentas","Carreira"]);
  const [catsGPT, setCatsGPT] = useState(["Análise","Metodologia","Escrita","Produtividade"]);
  const [catsPrompt, setCatsPrompt] = useState(["Escrita","Análise","Metodologia","Submissão","Revisão"]);
  const [catsLivro, setCatsLivro] = useState(["quantitativa","qualitativa","psicometria","escrita","filosofia","ia-pesquisa"]);
  const catsCursoPrimeiroItem = (cats: string[]) => cats[0] ?? null;

  // imagens
  const [capaCurso, setCapaCurso] = useState<string | null>(null);
  const [capaGPT, setCapaGPT] = useState<string | null>(null);
  const [capaLivro, setCapaLivro] = useState<string | null>(null);

  // visibilidade e seleção de alunos
  const [visibilidadeCurso, setVisibilidadeCurso] = useState("todos");
  const [visibilidadeGPT, setVisibilidadeGPT] = useState("todos");
  const [visibilidadePrompt, setVisibilidadePrompt] = useState("todos");
  const [alunosCurso, setAlunosCurso] = useState<number[]>([]);
  const [alunosGPT, setAlunosGPT] = useState<number[]>([]);
  const [alunosPrompt, setAlunosPrompt] = useState<number[]>([]);

  const capaCursoRef = useRef<HTMLInputElement>(null);
  const capaGPTRef = useRef<HTMLInputElement>(null);
  const capaLivroRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const materialCursoRef = useRef<HTMLInputElement>(null);
  const materialPromptRef = useRef<HTMLInputElement>(null);

  const Label = ({ children }: { children: React.ReactNode }) => (
    <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">{children}</label>
  );
  const Input = ({ placeholder, type = "text", value, onChange }: { placeholder: string; type?: string; value?: string; onChange?: (v: string) => void }) => (
    <input type={type} value={value ?? ""} onChange={(e) => onChange?.(e.target.value)} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder={placeholder} />
  );
  const VisibilidadeField = ({
    vis, setVis, alunos, setAlunos,
  }: {
    vis: string; setVis: (v: string) => void;
    alunos: number[]; setAlunos: (ids: number[]) => void;
  }) => (
    <div className="sm:col-span-2">
      <Label>Visibilidade</Label>
      <select
        value={vis}
        onChange={(e) => setVis(e.target.value)}
        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
      >
        <option value="todos">Público (todos os alunos)</option>
        <option value="consultoria">Apenas Consultoria</option>
        <option value="especificos">Alunos específicos</option>
      </select>
      {vis === "especificos" && (
        <SeletorAlunos selecionados={alunos} setSelecionados={setAlunos} />
      )}
    </div>
  );

  return (
    <div className="space-y-5">
      {/* Tab selector */}
      <div className="flex items-center gap-1 overflow-x-auto bg-slate-100 p-1 rounded-xl w-fit">
        {(["curso", "gpt", "prompt", "livro", "live"] as EditorTab[]).map((et) => (
          <button key={et} onClick={() => setEditorTab(et)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${editorTab === et ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
            {et === "gpt" ? "GPT" : et === "live" ? "Aula ao Vivo" : et.charAt(0).toUpperCase() + et.slice(1)}
          </button>
        ))}
      </div>

      {/* ── CURSO ── */}
      {editorTab === "curso" && (
        <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-6 space-y-5 fx-fade">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <BookOpen className="w-4 h-4 text-slate-600" strokeWidth={1.5} />
            Adicionar / Editar Curso
          </div>

          <ImageUploadField label="Foto / Capa do Curso" url={capaCurso} setUrl={setCapaCurso} inputRef={capaCursoRef} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2"><Label>Título do Curso</Label><Input placeholder="Ex: Análise de Mediação em R" value={cursoForm.titulo} onChange={(v) => setCursoForm((f) => ({ ...f, titulo: v }))} /></div>
            <div className="sm:col-span-2"><Label>Descrição</Label><textarea rows={3} value={cursoForm.descricao} onChange={(e) => setCursoForm((f) => ({ ...f, descricao: e.target.value }))} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white" placeholder="Descrição breve do conteúdo e objetivos do curso..." /></div>

            <div className="sm:col-span-2">
              <Label>Categoria</Label>
              <CategoriaSelector cats={catsCurso} setCats={setCatsCurso} placeholder="Nova categoria de curso..." />
            </div>

            <div><Label>Nível</Label><select value={cursoForm.nivel} onChange={(e) => setCursoForm((f) => ({ ...f, nivel: e.target.value }))} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"><option>Iniciante</option><option>Intermediário</option><option>Avançado</option></select></div>
            <div><Label>URL personalizada</Label><Input placeholder="ex: analise-mediacao-r" /></div>
            <VisibilidadeField vis={visibilidadeCurso} setVis={setVisibilidadeCurso} alunos={alunosCurso} setAlunos={setAlunosCurso} />
          </div>

          <div>
            <Label>Vídeos das Aulas</Label>
            <p className="text-xs text-slate-400 mb-2">A duração de cada aula é detectada automaticamente do vídeo enviado.</p>
            <button type="button" onClick={() => videoRef.current?.click()} className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-slate-300 rounded-xl text-sm text-slate-500 hover:border-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all w-full justify-center">
              <Upload className="w-4 h-4" /> Enviar vídeos das aulas (MP4, MOV, MKV...)
              <input ref={videoRef} type="file" accept="video/*" multiple className="hidden" />
            </button>
          </div>

          <div>
            <Label>Materiais de Apoio</Label>
            <button type="button" onClick={() => materialCursoRef.current?.click()} className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-slate-300 rounded-xl text-sm text-slate-500 hover:border-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all w-full justify-center">
              <FileText className="w-4 h-4" /> Enviar arquivos de apoio (PDF, DOCX, PPTX, ZIP...)
              <input ref={materialCursoRef} type="file" accept=".pdf,.doc,.docx,.zip,.pptx,.xlsx" multiple className="hidden" />
            </button>
          </div>

          {feedbackMsg && editorTab === "curso" && (
            <p className={`text-xs font-semibold flex items-center gap-1 ${feedbackMsg.tipo === "ok" ? "text-emerald-600" : "text-red-500"}`}>
              {feedbackMsg.tipo === "ok" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />} {feedbackMsg.texto}
            </p>
          )}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            <button onClick={salvarCurso} disabled={salvando} className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60" style={{ background: "#0a0a3a" }}><Save className="w-4 h-4" /> {salvando ? "Salvando..." : "Salvar Curso"}</button>
          </div>
        </div>
      )}

      {/* ── GPT ── */}
      {editorTab === "gpt" && (
        <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-6 space-y-5 fx-fade">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Sparkles className="w-4 h-4 text-[#6578c4]" strokeWidth={1.5} />
            Adicionar / Editar GPT
          </div>

          <ImageUploadField label="Ícone / Imagem do GPT (opcional)" url={capaGPT} setUrl={setCapaGPT} inputRef={capaGPTRef} height="h-28" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><Label>Nome do GPT</Label><Input placeholder="Ex: Analista Estatístico" value={gptForm.titulo} onChange={(v) => setGptForm((f) => ({ ...f, titulo: v }))} /></div>
            <div><Label>URL personalizada</Label><Input placeholder="ex: analista-estatistico" /></div>
            <div className="sm:col-span-2">
              <Label>Categoria</Label>
              <CategoriaSelector cats={catsGPT} setCats={setCatsGPT} placeholder="Nova categoria de GPT..." />
            </div>
            <div className="sm:col-span-2"><Label>Descrição</Label><textarea rows={3} value={gptForm.descricao} onChange={(e) => setGptForm((f) => ({ ...f, descricao: e.target.value }))} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white" placeholder="O que esse GPT faz e para quem é útil..." /></div>
            <div className="sm:col-span-2"><Label>Link do GPT (ChatGPT)</Label><Input placeholder="https://chat.openai.com/g/g-..." value={gptForm.url} onChange={(v) => setGptForm((f) => ({ ...f, url: v }))} /></div>
            <div>
              <Label>Cor do ícone</Label>
              <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white">
                {[
                  ["Azul → Índigo", "from-blue-500 to-indigo-600"],
                  ["Verde → Teal", "from-emerald-500 to-teal-600"],
                  ["Rosa → Pink", "from-rose-500 to-pink-600"],
                  ["Violeta → Roxo", "from-violet-500 to-purple-600"],
                  ["Âmbar → Laranja", "from-amber-500 to-orange-600"],
                ].map(([nome, val]) => <option key={val} value={val}>{nome}</option>)}
              </select>
            </div>
            <VisibilidadeField vis={visibilidadeGPT} setVis={setVisibilidadeGPT} alunos={alunosGPT} setAlunos={setAlunosGPT} />
          </div>

          {feedbackMsg && editorTab === "gpt" && (
            <p className={`text-xs font-semibold flex items-center gap-1 ${feedbackMsg.tipo === "ok" ? "text-emerald-600" : "text-red-500"}`}>
              {feedbackMsg.tipo === "ok" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />} {feedbackMsg.texto}
            </p>
          )}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            <button onClick={salvarGPT} disabled={salvando} className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60" style={{ background: "#0a0a3a" }}><Save className="w-4 h-4" /> {salvando ? "Salvando..." : "Salvar GPT"}</button>
          </div>
        </div>
      )}

      {/* ── PROMPT ── */}
      {editorTab === "prompt" && (
        <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-6 space-y-5 fx-fade">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <FileText className="w-4 h-4 text-emerald-600" strokeWidth={1.5} />
            Adicionar / Editar Prompt
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><Label>Título</Label><Input placeholder="Ex: Introdução com gancho científico" value={promptForm.titulo} onChange={(v) => setPromptForm((f) => ({ ...f, titulo: v }))} /></div>
            <div><Label>URL personalizada</Label><Input placeholder="ex: introducao-gancho-cientifico" /></div>
            <div className="sm:col-span-2">
              <Label>Categoria</Label>
              <CategoriaSelector cats={catsPrompt} setCats={setCatsPrompt} placeholder="Nova categoria de prompt..." />
            </div>
            <div className="sm:col-span-2"><Label>Descrição breve</Label><Input placeholder="O que esse prompt produz e quando usar..." value={promptForm.descricao} onChange={(v) => setPromptForm((f) => ({ ...f, descricao: v }))} /></div>
            <div className="sm:col-span-2">
              <Label>Texto do Prompt</Label>
              <p className="text-xs text-slate-400 mb-1.5">Use <code className="bg-slate-100 px-1 rounded text-slate-600">[VARIÁVEL]</code> para campos que o aluno deve preencher.</p>
              <textarea rows={7} value={promptForm.conteudo} onChange={(e) => setPromptForm((f) => ({ ...f, conteudo: e.target.value }))} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white font-mono leading-relaxed" placeholder="Ex: Atue como um especialista em [ÁREA]. Meu tema de pesquisa é [TEMA]..." />
            </div>
            <VisibilidadeField vis={visibilidadePrompt} setVis={setVisibilidadePrompt} alunos={alunosPrompt} setAlunos={setAlunosPrompt} />
            <div>
              <Label>Material de referência (opcional)</Label>
              <button type="button" onClick={() => materialPromptRef.current?.click()} className="flex items-center gap-2 px-3 py-2 border border-dashed border-slate-300 rounded-lg text-xs text-slate-500 hover:border-slate-400 hover:bg-slate-50 transition-all w-full justify-center">
                <Upload className="w-3.5 h-3.5" /> Anexar arquivo de apoio
                <input ref={materialPromptRef} type="file" accept=".pdf,.doc,.docx" className="hidden" />
              </button>
            </div>
          </div>

          {feedbackMsg && editorTab === "prompt" && (
            <p className={`text-xs font-semibold flex items-center gap-1 ${feedbackMsg.tipo === "ok" ? "text-emerald-600" : "text-red-500"}`}>
              {feedbackMsg.tipo === "ok" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />} {feedbackMsg.texto}
            </p>
          )}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            <button onClick={salvarPrompt} disabled={salvando} className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60" style={{ background: "#0a0a3a" }}><Save className="w-4 h-4" /> {salvando ? "Salvando..." : "Salvar Prompt"}</button>
          </div>
        </div>
      )}

      {/* ── LIVRO ── */}
      {editorTab === "livro" && (
        <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-6 space-y-5 fx-fade">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <BookMarked className="w-4 h-4 text-rose-600" strokeWidth={1.5} />
            Adicionar / Editar Livro
          </div>

          <ImageUploadField label="Capa do Livro" url={capaLivro} setUrl={setCapaLivro} inputRef={capaLivroRef} height="h-44" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2"><Label>Título</Label><Input placeholder="Ex: Principles of Structural Equation Modeling" value={livroForm.titulo} onChange={(v) => setLivroForm((f) => ({ ...f, titulo: v }))} /></div>
            <div><Label>Autor(es)</Label><Input placeholder="Ex: Rex Kline" /></div>
            <div><Label>Editora</Label><Input placeholder="Ex: Guilford Press" /></div>
            <div><Label>Ano de publicação</Label><Input placeholder="2024" type="number" /></div>
            <div><Label>URL personalizada</Label><Input placeholder="ex: kline-sem-2024" /></div>
            <div className="sm:col-span-2">
              <Label>Categoria / Área</Label>
              <CategoriaSelector cats={catsLivro} setCats={setCatsLivro} placeholder="Nova categoria de livro..." />
            </div>
            <div className="sm:col-span-2"><Label>Em quais trilhas/cursos é referência</Label><Input placeholder="Ex: SEM, Análise Fatorial, Psicometria Avançada" /></div>
            <div className="sm:col-span-2"><Label>Contexto / Por que este livro</Label><textarea rows={3} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white" placeholder="Breve descrição do livro e por que é referência na plataforma..." /></div>
            <div className="sm:col-span-2"><Label>Link de acesso / compra (opcional)</Label><Input placeholder="https://..." /></div>
          </div>

          {feedbackMsg && editorTab === "livro" && (
            <p className={`text-xs font-semibold flex items-center gap-1 ${feedbackMsg.tipo === "ok" ? "text-emerald-600" : "text-red-500"}`}>
              {feedbackMsg.tipo === "ok" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />} {feedbackMsg.texto}
            </p>
          )}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            <button onClick={salvarLivro} disabled={salvando} className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60" style={{ background: "#0a0a3a" }}><Save className="w-4 h-4" /> {salvando ? "Salvando..." : "Salvar Livro"}</button>
          </div>
        </div>
      )}

      {/* ── LIVE ── */}
      {editorTab === "live" && (
        <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-6 space-y-5 fx-fade">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Video className="w-4 h-4 text-[#6578c4]" strokeWidth={1.5} />
            Agendar / Editar Aula ao Vivo
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Label>Título da Live</Label>
              <Input placeholder="Ex: Modelagem de Equações Estruturais na prática" value={liveForm.titulo} onChange={(v) => setLiveForm((f) => ({ ...f, titulo: v }))} />
            </div>
            <div className="sm:col-span-2">
              <Label>Descrição (opcional)</Label>
              <textarea rows={2} value={liveForm.descricao} onChange={(e) => setLiveForm((f) => ({ ...f, descricao: e.target.value }))}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white"
                placeholder="O que será abordado nessa live..." />
            </div>
            <div>
              <Label>Data e Hora</Label>
              <input type="datetime-local" value={liveForm.data_inicio} onChange={(e) => setLiveForm((f) => ({ ...f, data_inicio: e.target.value }))}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" />
            </div>
            <div>
              <Label>Duração (minutos)</Label>
              <input type="number" min={30} max={360} value={liveForm.duracao_min} onChange={(e) => setLiveForm((f) => ({ ...f, duracao_min: Number(e.target.value) }))}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" />
            </div>
            <div className="sm:col-span-2">
              <Label>Link de Acesso (Zoom / Google Meet / YouTube)</Label>
              <Input placeholder="https://zoom.us/j/..." value={liveForm.url_acesso} onChange={(v) => setLiveForm((f) => ({ ...f, url_acesso: v }))} />
            </div>
            <div className="sm:col-span-2">
              <Label>Link da Gravação (YouTube — preencher após a live)</Label>
              <Input placeholder="https://youtube.com/watch?v=..." value={liveForm.url_gravacao} onChange={(v) => setLiveForm((f) => ({ ...f, url_gravacao: v }))} />
            </div>
            <div>
              <Label>Acesso mínimo</Label>
              <select value={liveForm.plano_minimo} onChange={(e) => setLiveForm((f) => ({ ...f, plano_minimo: e.target.value as "essencial" | "consultoria" }))}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white">
                <option value="essencial">Todos os planos</option>
                <option value="consultoria">Apenas Consultoria</option>
              </select>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <input type="checkbox" id="live-pub" checked={liveForm.publicado} onChange={(e) => setLiveForm((f) => ({ ...f, publicado: e.target.checked }))}
                className="w-4 h-4 accent-[#6578c4]" />
              <label htmlFor="live-pub" className="text-sm text-slate-700 font-medium">Publicar (visível para alunos)</label>
            </div>
          </div>

          {feedbackMsg && editorTab === "live" && (
            <p className={`text-xs font-semibold flex items-center gap-1 ${feedbackMsg.tipo === "ok" ? "text-emerald-600" : "text-red-500"}`}>
              {feedbackMsg.tipo === "ok" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />} {feedbackMsg.texto}
            </p>
          )}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            <button onClick={salvarLive} disabled={salvando} className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60" style={{ background: "#0a0a3a" }}>
              <Save className="w-4 h-4" /> {salvando ? "Salvando..." : "Agendar Live"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── LIVES PAGE ────────────────────────────────────────────────────────────

function LivesPage() {
  const { data: lives, loading } = useSupabaseQuery(() => livesApi.getLives(), []);

  const agora = new Date();
  const proximas = (lives ?? []).filter((l) => l.status !== "encerrada" && new Date(l.data_inicio) >= agora);
  const gravacoes = (lives ?? []).filter((l) => l.status === "encerrada" && l.url_gravacao);
  const aoVivo = (lives ?? []).find((l) => l.status === "ao_vivo");

  function fmtData(iso: string) {
    return new Date(iso).toLocaleString("pt-BR", {
      weekday: "long", day: "2-digit", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo",
    });
  }

  function fmtDataCurta(iso: string) {
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit", month: "short", year: "numeric", timeZone: "America/Sao_Paulo",
    });
  }

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <RefreshCw className="w-6 h-6 text-[#6578c4] animate-spin" />
    </div>
  );

  return (
    <div className="space-y-8 max-w-4xl mx-auto">

      {/* Live agora */}
      {aoVivo && (
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0a3a] via-[#1e2a6e] to-[#6578c4] p-6 text-white shadow-xl">
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-500 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
            <Radio className="w-3 h-3" /> AO VIVO
          </div>
          <h2 className="text-xl font-bold mb-1 pr-24">{aoVivo.titulo}</h2>
          {aoVivo.descricao && <p className="text-[#c5cdf0] text-sm mb-4">{aoVivo.descricao}</p>}
          {aoVivo.url_acesso && (
            <a href={aoVivo.url_acesso} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0a0a3a] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-slate-100 transition-colors">
              <PlayCircle className="w-4 h-4" /> Entrar na Live
            </a>
          )}
        </div>
      )}

      {/* Próximas lives */}
      <div>
        <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
          <CalendarClock className="w-4 h-4 text-[#6578c4]" /> Próximas Aulas ao Vivo
        </h3>
        {proximas.length === 0 ? (
          <div className="text-center py-12 rounded-2xl bg-white border border-slate-100 text-slate-400 text-sm">
            Nenhuma live agendada no momento. Fique de olho nas novidades!
          </div>
        ) : (
          <div className="space-y-3">
            {proximas.map((live) => (
              <div key={live.id} className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#f4f1e8] flex flex-col items-center justify-center border border-slate-200">
                  <span className="text-xs font-bold text-[#6578c4] uppercase">
                    {new Date(live.data_inicio).toLocaleDateString("pt-BR", { month: "short", timeZone: "America/Sao_Paulo" })}
                  </span>
                  <span className="text-xl font-extrabold text-[#0a0a3a] leading-none">
                    {new Date(live.data_inicio).toLocaleDateString("pt-BR", { day: "2-digit", timeZone: "America/Sao_Paulo" })}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-800 text-sm truncate">{live.titulo}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{fmtData(live.data_inicio)}</p>
                  {live.descricao && <p className="text-xs text-slate-400 mt-1 line-clamp-2">{live.descricao}</p>}
                </div>
                <div className="flex-shrink-0">
                  {live.url_acesso ? (
                    <a href={live.url_acesso} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl text-white hover:opacity-90 transition-opacity"
                      style={{ background: "#6578c4" }}>
                      <Video className="w-3.5 h-3.5" /> Acessar
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium px-3 py-2 rounded-xl bg-slate-100">Em breve</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Gravações */}
      {gravacoes.length > 0 && (
        <div>
          <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-[#6578c4]" /> Gravações Anteriores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gravacoes.map((live) => (
              <a key={live.id} href={live.url_gravacao!} target="_blank" rel="noopener noreferrer"
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all block">
                <div className="relative h-36 bg-slate-900 flex items-center justify-center">
                  {live.thumbnail_url
                    ? <img src={live.thumbnail_url} alt={live.titulo} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    : <Video className="w-10 h-10 text-white/40" />
                  }
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <PlayCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-slate-800 line-clamp-2">{live.titulo}</h4>
                  <p className="text-xs text-slate-400 mt-1">{fmtDataCurta(live.data_inicio)} · {live.duracao_min} min</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── LOGIN PAGE ────────────────────────────────────────────────────────────

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const { sendOtp, verifyOtp } = useAuthContext();
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");
  const [linkExpirado, setLinkExpirado] = useState(false);
  const [reenviadoOk, setReenviadoOk] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    const isExpired = hash.includes("error_code=otp_expired") || hash.includes("error_code=otp_disabled") || hash.includes("error=access_denied");
    if (isExpired) {
      const emailSalvo = localStorage.getItem("otp_email") ?? "";
      if (emailSalvo) {
        setEmail(emailSalvo);
        setLinkExpirado(true);
      } else {
        setErro("Seu link expirou. Digite seu e-mail para receber um novo código.");
      }
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    if (!email.trim() || !email.includes("@")) { setErro("Informe um e-mail válido."); return; }
    setLoading(true);
    try {
      localStorage.setItem("otp_email", email);
      await sendOtp(email);
      setEnviado(true);
    } catch (err: unknown) {
      const msg = err instanceof Error
        ? (err.message || JSON.stringify(err))
        : JSON.stringify(err);
      setErro(msg || "Erro desconhecido ao enviar o código.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerificar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    if (codigo.length < 6) { setErro("Digite o código de 6 dígitos recebido por e-mail."); return; }
    setLoading(true);
    try {
      await verifyOtp(email, codigo);
      localStorage.removeItem("otp_email");
      onLogin();
    } catch {
      setErro("Código inválido ou expirado. Verifique e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleReenviar = async () => {
    setErro("");
    setCodigo("");
    setReenviadoOk(false);
    setLoading(true);
    try {
      await sendOtp(email);
      setLinkExpirado(false);
      setEnviado(true);
      setReenviadoOk(true);
    } catch {
      setErro("Não foi possível reenviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0a0a3a]">
      {/* background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full blur-[120px]" style={{ background: "rgba(101,120,196,0.28)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-[480px] h-[480px] rounded-full blur-[120px]" style={{ background: "rgba(201,169,97,0.15)" }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-slate-800/40 blur-[80px]" />
      {/* decorative brand mark watermark */}
      <div className="pointer-events-none absolute -right-24 top-1/4 opacity-[0.04]">
        <BrandMarkLight className="w-[480px] h-[480px]" />
      </div>

      <div className="relative w-full max-w-md px-6">
        {/* Logo / brand */}
        <div className="flex flex-col items-center mb-10 fx-rise">
          <div className="mb-5 p-4 rounded-2xl" style={{ background: "rgba(249,243,221,0.06)", border: "1px solid rgba(249,243,221,0.12)" }}>
            <BrandMarkLight className="w-16 h-16" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="text-[#f9f3dd]">Pesquisa</span>{" "}
            <span className="text-[#6578c4]">passo a passo</span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-10" style={{ background: "rgba(201,169,97,0.5)" }} />
            <p className="text-[#c9a961]/80 text-xs font-medium tracking-widest uppercase">Plataforma de pesquisa</p>
            <div className="h-px w-10" style={{ background: "rgba(201,169,97,0.5)" }} />
          </div>
        </div>

        {/* Card */}
        <div className="backdrop-blur-xl rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] fx-rise" style={{ background: "rgba(249,243,221,0.04)", border: "1px solid rgba(249,243,221,0.10)", animationDelay: "80ms" }}>
          {linkExpirado ? (
            <div className="space-y-5 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ background: "rgba(201,169,97,0.12)", border: "1px solid rgba(201,169,97,0.3)" }}>
                <AlertCircle className="w-7 h-7 text-[#c9a961]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-1">Link expirado</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  O link enviado para <span className="text-[#c0c8ec] font-medium">{email}</span> não é mais válido.
                </p>
              </div>
              {erro && <p className="text-rose-400 text-xs flex items-center justify-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> {erro}</p>}
              <button
                onClick={handleReenviar}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#6578c4] to-[#0a0a3a] hover:from-[#7689d4] hover:to-[#141457] disabled:opacity-60 text-white font-semibold py-3 rounded-xl shadow-[0_4px_20px_rgba(101,120,196,0.40)] transition-all duration-200 fx-tap"
              >
                {loading ? <><RefreshCw className="w-4 h-4 animate-spin" /> Enviando...</> : <><Send className="w-4 h-4 -rotate-45" /> Enviar novo código</>}
              </button>
              <button
                type="button"
                onClick={() => { setLinkExpirado(false); setEmail(""); setErro(""); }}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                Usar outro e-mail
              </button>
            </div>
          ) : enviado ? (
            <form onSubmit={handleVerificar} className="space-y-5">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(101,120,196,0.15)", border: "1px solid rgba(101,120,196,0.3)" }}>
                  <Mail className="w-7 h-7 text-[#6578c4]" />
                </div>
                <h2 className="text-lg font-bold text-white mb-1">Verifique seu e-mail</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Enviamos um código de 6 dígitos para <span className="text-[#c0c8ec] font-medium">{email}</span>
                </p>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Código de acesso</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value.replace(/\D/g, ""))}
                  placeholder="000000"
                  className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#6578c4] focus:ring-1 focus:ring-[#6578c4]/50 transition-all text-center tracking-[0.4em] text-base font-semibold"
                />
              </div>
              {erro && <p className="text-rose-400 text-xs flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> {erro}</p>}
              <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#6578c4] to-[#0a0a3a] hover:from-[#7689d4] hover:to-[#141457] disabled:opacity-60 text-white font-semibold py-3 rounded-xl shadow-[0_4px_20px_rgba(101,120,196,0.40)] transition-all duration-200 fx-tap">
                {loading ? <><RefreshCw className="w-4 h-4 animate-spin" /> Verificando...</> : <><Check className="w-4 h-4" /> Entrar</>}
              </button>
              <button
                type="button"
                onClick={handleReenviar}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-sm font-medium transition-all disabled:opacity-50"
                style={{ color: "#c0c8ec", background: "rgba(101,120,196,0.08)" }}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                Reenviar código
              </button>
              <button type="button" onClick={() => { setEnviado(false); setCodigo(""); setErro(""); }} className="mt-1 text-xs text-slate-500 hover:text-slate-300 transition-colors block mx-auto text-center w-full">
                Usar outro e-mail
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center mb-2">
                <h2 className="text-base font-semibold text-white">Entrar com e-mail</h2>
                <p className="text-xs text-slate-400 mt-1">Enviaremos um link de acesso seguro para você</p>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full bg-white/8 border border-white/12 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#6578c4] focus:ring-1 focus:ring-[#6578c4]/50 transition-all"
                  />
                </div>
              </div>
              {erro && <p className="text-rose-400 text-xs flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> {erro}</p>}
              <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#6578c4] to-[#0a0a3a] hover:from-[#7689d4] hover:to-[#141457] disabled:opacity-60 text-white font-semibold py-3 rounded-xl shadow-[0_4px_20px_rgba(101,120,196,0.40)] transition-all duration-200 fx-tap">
                {loading ? <><RefreshCw className="w-4 h-4 animate-spin" /> Enviando...</> : <><Send className="w-4 h-4 -rotate-45" /> Enviar código de acesso</>}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          © 2025 Pesquisa Passo a Passo · Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}

// ─── PERFIL PAGE ────────────────────────────────────────────────────────────

const perfilInicial = {
  nome: "",
  email: "",
  bio: "",
  endereco: "",
  ocupacao: "",
  avatar: "",
};

function PerfilField({ label, value, field, editando, rascunho, onChange, multiline = false }: {
  label: string; value: string; field: string; editando: boolean;
  rascunho: Record<string, string>; onChange: (f: string, v: string) => void; multiline?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</label>
      {editando ? (
        multiline ? (
          <textarea rows={3} value={rascunho[field] ?? ""} onChange={(e) => onChange(field, e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#6578c4]/40 resize-none bg-white" />
        ) : (
          <input value={rascunho[field] ?? ""} onChange={(e) => onChange(field, e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#6578c4]/40 bg-white" />
        )
      ) : (
        <p className="text-sm text-slate-700 py-2.5 px-3.5 bg-slate-50 rounded-xl border border-slate-100">{value || "—"}</p>
      )}
    </div>
  );
}

function PerfilPage({ fotoUrl, bannerUrl, onUpdateFoto, onUpdateBanner }: {
  fotoUrl: string;
  bannerUrl: string;
  onUpdateFoto: (url: string) => void;
  onUpdateBanner: (url: string) => void;
}) {
  const { usuario, session, refreshUsuario } = useAuthContext();
  const dadosInicial = {
    nome: usuario?.nome ?? perfilInicial.nome,
    email: usuario?.email ?? perfilInicial.email,
    bio: usuario?.biografia ?? perfilInicial.bio,
    endereco: perfilInicial.endereco,
    ocupacao: perfilInicial.ocupacao,
    avatar: perfilInicial.avatar,
  };
  const [editando, setEditando] = useState(false);
  const [dados, setDados] = useState(dadosInicial);
  const [rascunho, setRascunho] = useState(dadosInicial);
  const [salvando, setSalvando] = useState(false);
  const [fotoFile, setFotoFile] = useState<File | null>(null);

  useEffect(() => {
    if (usuario) {
      const novo = {
        ...dadosInicial,
        nome: usuario.nome ?? "",
        email: usuario.email,
        bio: usuario.biografia ?? "",
        ocupacao: (usuario as { ocupacao?: string | null }).ocupacao ?? "",
      };
      setDados(novo);
      setRascunho(novo);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuario]);
  const fotoInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  const salvar = async () => {
    if (!session) return;
    setSalvando(true);

    let fotoUrl: string | undefined;
    if (fotoFile) {
      fotoUrl = await storageApi.uploadAvatar(session.user.id, fotoFile) ?? undefined;
      if (fotoUrl) onUpdateFoto(fotoUrl);
    }

    await perfilApi.updatePerfil(session.user.id, {
      nome: rascunho.nome,
      biografia: rascunho.bio,
      ocupacao: rascunho.ocupacao || null,
      ...(fotoUrl ? { foto_url: fotoUrl } : {}),
    });

    if (rascunho.endereco) {
      const partes = rascunho.endereco.split(",").map((s: string) => s.trim());
      await perfilApi.upsertEndereco(session.user.id, {
        rua: partes[0] || null,
        cidade: partes[1] || null,
        estado: partes[2] || null,
        cep: null,
      });
    }

    await refreshUsuario();
    setSalvando(false);
    setDados(rascunho);
    setFotoFile(null);
    setEditando(false);
  };
  const cancelar = () => { setRascunho(dados); setFotoFile(null); setEditando(false); };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) { setFotoFile(f); onUpdateFoto(URL.createObjectURL(f)); }
  };
  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) onUpdateBanner(URL.createObjectURL(f));
  };
  const handleFieldChange = (f: string, v: string) => setRascunho((p) => ({ ...p, [f]: v }));

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Banner + avatar */}
      <div className="relative rounded-2xl overflow-visible">
        {/* Banner clicável */}
        <div className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer" onClick={() => bannerInputRef.current?.click()}>
          {bannerUrl ? (
            <img src={bannerUrl} alt="Capa do perfil" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0a0a3a] via-[#1e2a6e] to-[#6578c4]" />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/30">
              <Upload className="w-3.5 h-3.5" /> Alterar capa
            </span>
          </div>
          <input ref={bannerInputRef} type="file" accept="image/*" className="hidden" onChange={handleBannerChange} />
        </div>

        {/* Avatar redondo sobreposto ao banner */}
        <div className="absolute -bottom-10 left-6 group">
          <div
            className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden relative cursor-pointer"
            onClick={() => fotoInputRef.current?.click()}
          >
            <img src={fotoUrl} alt="Foto de perfil" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-center justify-center">
              <Upload className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <input ref={fotoInputRef} type="file" accept="image/*" className="hidden" onChange={handleFotoChange} />
        </div>

        {/* Botão editar campos */}
        <div className="absolute top-3 right-3">
          {!editando ? (
            <button
              onClick={() => setEditando(true)}
              className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-white/30 transition-all fx-tap border border-white/30"
            >
              <Pencil className="w-3.5 h-3.5" /> Editar
            </button>
          ) : (
            <div className="flex gap-2">
              <button onClick={cancelar} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 border border-white/30 fx-tap">Cancelar</button>
              <button onClick={salvar} disabled={salvando} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-slate-800 hover:bg-slate-100 fx-tap disabled:opacity-60">
                <Save className="w-3.5 h-3.5 inline mr-1" />{salvando ? "Salvando..." : "Salvar"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Name / role below cover */}
      <div className="pt-8 px-1">
        <h2 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{dados.nome}</h2>
        <p className="text-sm text-slate-500 mt-0.5">{dados.ocupacao}</p>
        <div className="flex flex-wrap gap-3 mt-3">
          {[
            { icon: Mail, text: dados.email },
            { icon: MapPin, text: dados.endereco },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              <Icon className="w-3 h-3" /> {text}
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 gap-3 fx-stagger-grid">
        <div className="border rounded-2xl p-4 text-center" style={{ background: "#f9f3dd", borderColor: "rgba(101,120,196,0.15)" }}>
          <p className="text-2xl font-bold text-[#6578c4]">7</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Cursos concluídos</p>
        </div>
        <div className="border rounded-2xl p-4 text-center" style={{ background: "rgba(201,169,97,0.10)", borderColor: "rgba(201,169,97,0.25)" }}>
          <p className="text-2xl font-bold" style={{ color: "#8a6210" }}>4</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Certificados</p>
        </div>
      </div>

      {/* Editable fields */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-1">Informações pessoais</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PerfilField label="Nome completo" value={dados.nome} field="nome" editando={editando} rascunho={rascunho} onChange={handleFieldChange} />
          <PerfilField label="Ocupação" value={dados.ocupacao} field="ocupacao" editando={editando} rascunho={rascunho} onChange={handleFieldChange} />
          <PerfilField label="E-mail" value={dados.email} field="email" editando={editando} rascunho={rascunho} onChange={handleFieldChange} />
          <PerfilField label="Endereço" value={dados.endereco} field="endereco" editando={editando} rascunho={rascunho} onChange={handleFieldChange} />
        </div>
        <PerfilField label="Bio" value={dados.bio} field="bio" editando={editando} rascunho={rascunho} onChange={handleFieldChange} multiline />
      </div>

      {/* Badges */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Conquistas</h3>
        <div className="flex flex-wrap gap-2 fx-stagger-fast">
          {[
            { label: "Primeiro Curso", color: "bg-[#6578c4]/15 text-[#5568b3]" },
            { label: "5 Certificados", color: "bg-emerald-100 text-emerald-700" },
            { label: "Metodólogo", color: "bg-indigo-100 text-indigo-700" },
            { label: "Pesquisador Ativo", color: "bg-amber-100 text-amber-700" },
          ].map(({ label, color }) => (
            <span key={label} className={`${color} text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1`}>
              <BadgeCheck className="w-3 h-3" /> {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── ASSINATURA PAGE ────────────────────────────────────────────────────────

function AssinaturaPage() {
  const { plano, assinatura, refreshUsuario } = useAuthContext();
  const planoAtual: "essencial" | "consultoria" = plano ?? "essencial";
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [consultoriaPlanoId, setConsultoriaPlanoId] = useState<string | null>(null);
  const [abrindoPortal, setAbrindoPortal] = useState(false);
  useModalBlur(showUpgrade);

  const abrirPortalStripe = async () => {
    setAbrindoPortal(true);
    try {
      const { data: { session } } = await (await import("../lib/supabase")).supabase.auth.getSession();
      if (!session) return;
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-portal-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.access_token}` },
          body: JSON.stringify({ return_url: window.location.href }),
        }
      );
      const json = await res.json();
      if (json.url) window.open(json.url, "_blank");
    } catch {
      alert("Não foi possível abrir o portal de pagamentos. Tente novamente.");
    } finally {
      setAbrindoPortal(false);
    }
  };

  useEffect(() => {
    assinaturasApi.getPlanos().then(({ data }) => {
      const consultoria = data?.find((p) => p.nome === "consultoria");
      if (consultoria) setConsultoriaPlanoId(consultoria.id);
    });
  }, []);

  const beneficiosExtras = [
    { texto: "Consultoria individual com a Dra. Sandri", icon: GraduationCap },
    { texto: "Aulas particulares agendadas", icon: CalendarDays },
    { texto: "GPTs personalizados para o seu projeto", icon: Sparkles },
    { texto: "Prompts exclusivos criados para você", icon: FileText },
  ];

  const renovacao = assinatura?.data_fim
    ? new Date(assinatura.data_fim).toLocaleDateString("pt-BR")
    : "—";
  const preco = assinatura?.planos?.preco_mensal
    ? `R$ ${Number(assinatura.planos.preco_mensal).toFixed(2).replace(".", ",")}`
    : planoAtual === "consultoria" ? "R$ 99,90" : "R$ 49,90";
  const planoBanner = planoAtual === "consultoria"
    ? { nome: "Consultoria Individual", preco, renovacao, cor: "from-[#0a0a3a] to-[#6578c4]" }
    : { nome: "Plano Essencial", preco, renovacao, cor: "from-[#0a0a3a] to-slate-800" };

  const historicoEssencial = [
    { data: "15/05/2025", valor: "R$ 97,00", status: "Pago" },
    { data: "15/04/2025", valor: "R$ 97,00", status: "Pago" },
    { data: "15/03/2025", valor: "R$ 97,00", status: "Pago" },
  ];
  const historicoConsultoria = [
    { data: "15/05/2025", valor: "R$ 197,00", status: "Pago" },
    { data: "15/04/2025", valor: "R$ 197,00", status: "Pago" },
    { data: "15/03/2025", valor: "R$ 197,00", status: "Pago" },
  ];
  const historico = planoAtual === "consultoria" ? historicoConsultoria : historicoEssencial;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Plano atual banner */}
      <div className={`bg-gradient-to-r ${planoBanner.cor} rounded-2xl p-6 text-white shadow-lg relative overflow-hidden`}>
        <div className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
        <div className="pointer-events-none absolute right-20 bottom-0 w-32 h-32 rounded-full bg-blue-400/10 blur-2xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-1">Plano atual</p>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {planoBanner.nome}
          </h2>
          <p className="text-white/70 text-sm mt-1">Renovação em {planoBanner.renovacao} · <span className="text-white font-semibold">{planoBanner.preco}/mês</span></p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Ativo", "Pagamento em dia"].map((tag) => (
              <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-white/15 rounded-full border border-white/20">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Forma de pagamento */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-slate-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Cartão de crédito •••• 4321</p>
            <p className="text-xs text-slate-400">Vence em 08/2027</p>
          </div>
        </div>
        <button onClick={abrirPortalStripe} disabled={abrindoPortal} className="text-xs font-semibold text-[#6578c4] hover:text-[#5568b3] transition-colors disabled:opacity-50">
          {abrindoPortal ? "Abrindo..." : "Alterar"}
        </button>
      </div>

      {/* Se Essencial: mostrar card de upgrade para Consultoria */}
      {planoAtual === "essencial" && (
        <div className="bg-gradient-to-br from-[#0a0a3a] via-[#1a1f5e] to-[#6578c4] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="pointer-events-none absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
          <div className="pointer-events-none absolute right-4 bottom-0 opacity-10">
            <MentoriaSymbol className="w-24 h-24" />
          </div>
          <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full" style={{ background: "rgba(201,169,97,0.25)", color: "#c9a961", border: "1px solid rgba(201,169,97,0.35)" }}>Upgrade disponível</div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#c9a961] mb-1">Mentoria Individual</p>
          <p className="text-3xl font-bold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>R$ 197<span className="text-sm font-normal text-[#c5cdf0]">/mês</span></p>
          <p className="text-sm text-[#c5cdf0] mb-5">Tudo que você já tem, mais acesso direto e personalizado com a Dra. Sandri.</p>
          <div className="space-y-2.5 mb-6">
            {beneficiosExtras.map(({ texto, icon: Icon }) => (
              <div key={texto} className="flex items-center gap-2.5 text-sm">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,169,97,0.2)", border: "1px solid rgba(201,169,97,0.3)" }}>
                  <Icon className="w-3 h-3 text-[#c9a961]" />
                </span>
                <span className="text-white/90">{texto}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowUpgrade(true)}
            className="w-full font-semibold text-sm py-3 rounded-xl transition-all fx-tap"
            style={{ background: "rgba(201,169,97,0.15)", border: "1px solid rgba(201,169,97,0.35)", color: "#c9a961" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,169,97,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201,169,97,0.15)")}
          >
            Fazer upgrade para Mentoria Individual
          </button>
        </div>
      )}

      {/* Histórico */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Histórico de pagamentos</h3>
        <div className="space-y-2 fx-stagger-fast">
          {historico.map(({ data, valor, status }) => (
            <div key={data} className="flex items-center justify-between text-xs py-2 border-b border-slate-50 last:border-0">
              <span className="text-slate-500">{data}</span>
              <span className="font-semibold text-slate-700">{valor}</span>
              <span className="bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">{status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de upgrade — Stripe Embedded Checkout */}
      {showUpgrade && consultoriaPlanoId && (
        <StripeCheckout
          planoId={consultoriaPlanoId}
          onClose={() => setShowUpgrade(false)}
          onSucesso={() => { refreshUsuario(); setShowUpgrade(false); }}
        />
      )}
      {showUpgrade && !consultoriaPlanoId && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
            <p className="text-slate-600 text-sm">Carregando plano...</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CONSULTORIA PAGE ───────────────────────────────────────────────────────

const consultoriaGPTs = [
  {
    nome: "Assistente de Metodologia",
    desc: "GPT treinado com sua base teórica e os materiais do curso para tirar dúvidas metodológicas específicas.",
    cor: "from-blue-500 to-indigo-600",
    icone: Bot,
    tags: ["Quantitativa", "SEM", "R"],
    url: "https://chatgpt.com/g/g-metodologia",
  },
  {
    nome: "Revisor de Escrita Científica",
    desc: "Revisa e melhora sua escrita acadêmica respeitando normas ABNT, APA e estilo científico.",
    cor: "from-violet-500 to-purple-700",
    icone: FileText,
    tags: ["Escrita", "APA", "ABNT"],
    url: "https://chatgpt.com/g/g-revisor-escrita",
  },
  {
    nome: "Gerador de Sintaxe R",
    desc: "Gera scripts R personalizados para suas análises — desde descritivos até modelos de equações estruturais.",
    cor: "from-emerald-500 to-teal-600",
    icone: Code,
    tags: ["R", "Script", "Análise"],
    url: "https://chatgpt.com/g/g-sintaxe-r",
  },
];

const consultoriaAulas = [
  {
    titulo: "Introdução ao SEM no R",
    duracao: "55 min",
    data: "12/05/2025",
    status: "Assistida",
    cor: "bg-emerald-500",
  },
  {
    titulo: "Modelagem de Mediação",
    duracao: "48 min",
    data: "19/05/2025",
    status: "Assistida",
    cor: "bg-emerald-500",
  },
  {
    titulo: "Análise Fatorial Confirmatória",
    duracao: "60 min",
    data: "26/05/2025",
    status: "Agendada",
    cor: "bg-amber-400",
  },
  {
    titulo: "Relatório Final de Pesquisa",
    duracao: "45 min",
    data: "02/06/2025",
    status: "Agendada",
    cor: "bg-amber-400",
  },
];

const consultoriaPrompts = [
  {
    titulo: "Framework de Revisão Sistemática",
    desc: "Prompt estruturado para conduzir revisões sistemáticas com critérios de inclusão/exclusão e síntese narrativa.",
    categoria: "Pesquisa",
    cor: "from-blue-50 to-indigo-50",
    bordaCor: "border-blue-200",
  },
  {
    titulo: "Gerador de Hipóteses Quantitativas",
    desc: "Transforma variáveis e construtos em hipóteses testáveis com direcionamento estatístico adequado.",
    categoria: "Quantitativa",
    cor: "from-violet-50 to-purple-50",
    bordaCor: "border-violet-200",
  },
  {
    titulo: "Estruturador de Discussão Científica",
    desc: "Organiza seus resultados em discussão acadêmica coesa, com comparação com literatura e implicações práticas.",
    categoria: "Escrita",
    cor: "from-emerald-50 to-teal-50",
    bordaCor: "border-emerald-200",
  },
];

type ConsultoriaTab = "gpts" | "aulas" | "prompts";

function ConsultoriaPage() {
  const { usuario } = useAuthContext();
  const [tab, setTab] = useState<ConsultoriaTab>("gpts");
  const [promptAberto, setPromptAberto] = useState<(typeof consultoriaPrompts)[0] | null>(null);
  const [promptCopiado, setPromptCopiado] = useState(false);
  const [aulaAberta, setAulaAberta] = useState<(typeof consultoriaAulas)[0] | null>(null);
  useModalBlur(!!aulaAberta || !!promptAberto);

  const handleCopiarPrompt = () => {
    if (promptAberto) {
      navigator.clipboard.writeText(`Atue como especialista em ${promptAberto.categoria.toLowerCase()}. Analise o seguinte contexto e forneça orientações metodológicas precisas, baseadas em evidências científicas recentes. Considere as especificidades do aluno e adapte sua resposta ao nível de profundidade necessário...`).catch(() => {});
      setPromptCopiado(true);
      setTimeout(() => setPromptCopiado(false), 2000);
    }
  };

  const tabs: { id: ConsultoriaTab; label: string; icon: ElementType }[] = [
    { id: "gpts", label: "GPTs Pessoais", icon: Bot },
    { id: "aulas", label: "Aulas Individuais", icon: CalendarDays },
    { id: "prompts", label: "Prompts Exclusivos", icon: Sparkles },
  ];

  return (
    <div className="space-y-6">
      {/* Hero personalizado */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0a3a] via-[#1e2a6e] to-[#6578c4] p-6 text-white shadow-lg">
        <div className="pointer-events-none absolute -right-12 -top-12 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-[#6578c4]/20 blur-2xl" />
        <div className="pointer-events-none absolute right-1/3 top-0 w-24 h-24 rounded-full bg-[#c9a961]/10 blur-2xl" />
        {/* brand mark watermark */}
        <div className="pointer-events-none absolute right-6 bottom-0 opacity-10">
          <MentoriaSymbol className="w-28 h-28" />
        </div>
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-xl font-bold shadow-inner">
              {getInitials(usuario?.nome ?? "")}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "rgba(201,169,97,0.25)", color: "#c9a961", border: "1px solid rgba(201,169,97,0.3)" }}>
                Mentoria Individual
              </span>
            </div>
            <h2 className="text-xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Olá, {usuario?.nome ?? ""}
            </h2>
            <p className="text-[#c5cdf0] text-sm mt-0.5">Seu espaço personalizado com conteúdo exclusivo da Dra. Sandri</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "3 GPTs", icon: Bot },
              { label: "4 Aulas", icon: CalendarDays },
              { label: "3 Prompts", icon: Sparkles },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold" style={{ background: "rgba(249,243,221,0.12)", border: "1px solid rgba(249,243,221,0.18)" }}>
                <Icon className="w-3.5 h-3.5" /> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab control */}
      <div className="flex gap-1 bg-slate-100 rounded-xl p-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg transition-all fx-tap ${tab === id ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            <Icon className="w-3.5 h-3.5" /> {label}
          </button>
        ))}
      </div>

      {/* GPTs */}
      {tab === "gpts" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 fx-stagger-grid">
          {consultoriaGPTs.map((gpt) => {
            const Icon = gpt.icone;
            return (
              <div key={gpt.nome} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group fx-hover-glow">
                <div className={`h-2 bg-gradient-to-r ${gpt.cor}`} />
                <div className="p-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gpt.cor} flex items-center justify-center mb-3 shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">{gpt.nome}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{gpt.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {gpt.tags.map((t) => (
                      <span key={t} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open(gpt.url, "_blank", "noopener,noreferrer")}
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-white rounded-xl py-2.5 hover:opacity-90 transition-opacity fx-tap"
                    style={{ background: "#6578c4" }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Abrir GPT
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Aulas */}
      {tab === "aulas" && (
        <div className="space-y-3 fx-stagger-fast">
          {consultoriaAulas.map((a) => (
            <button
              key={a.titulo}
              onClick={() => setAulaAberta(a)}
              className="w-full bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all text-left fx-hover-lift cursor-pointer group"
            >
              <div className={`w-2 self-stretch rounded-full flex-shrink-0 ${a.cor}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-[#6578c4] transition-colors">{a.titulo}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.duracao}</span>
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {a.data}</span>
                </div>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${a.status === "Assistida" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                {a.status}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#6578c4] transition-colors flex-shrink-0" />
            </button>
          ))}
          <button className="w-full flex items-center justify-center gap-2 text-sm font-semibold border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl py-4 hover:border-[#6578c4]/40 hover:text-[#6578c4] transition-all">
            <PlusCircle className="w-4 h-4" /> Solicitar nova aula
          </button>
        </div>
      )}

      {/* Modal de aula individual */}
      {aulaAberta && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-sm" onClick={() => setAulaAberta(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Aula Individual · Dra. Sandri</p>
                <h3 className="text-base font-bold text-slate-800 mt-0.5">{aulaAberta.titulo}</h3>
              </div>
              <button onClick={() => setAulaAberta(null)} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100">
                <X className="w-4 h-4" />
              </button>
            </div>
            {aulaAberta.status === "Assistida" ? (
              <div>
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                      <Send className="w-6 h-6 -rotate-45 translate-x-px text-slate-900" strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-slate-900/90 to-transparent">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden mb-2">
                      <div className="h-full w-full bg-white/60 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-white/80">
                      <span>{aulaAberta.duracao}</span>
                      <span>{aulaAberta.data}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-sm text-slate-600">
                  Sessão concluída com a Dra. Sandri. Você pode revisitar o conteúdo aqui.
                </div>
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(201,169,97,0.12)" }}>
                  <CalendarDays className="w-7 h-7" style={{ color: "#c9a961" }} />
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Aula agendada</p>
                <p className="text-sm text-slate-500 mb-1">Data: <strong>{aulaAberta.data}</strong></p>
                <p className="text-sm text-slate-500 mb-5">Duração prevista: <strong>{aulaAberta.duracao}</strong></p>
                <p className="text-xs text-slate-400">Você receberá um link de acesso por e-mail antes da sessão.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Prompts */}
      {tab === "prompts" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 fx-stagger-grid">
            {consultoriaPrompts.map((p) => (
              <div key={p.titulo} className={`bg-gradient-to-br ${p.cor} border ${p.bordaCor} rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group fx-hover-lift`} onClick={() => setPromptAberto(p)}>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/70 px-2 py-0.5 rounded-full">{p.categoria}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 mb-2">{p.titulo}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Prompt modal */}
          {promptAberto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/45 backdrop-blur-sm" onClick={() => setPromptAberto(null)}>
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{promptAberto.categoria}</span>
                    <h3 className="text-base font-bold text-slate-800 mt-0.5">{promptAberto.titulo}</h3>
                  </div>
                  <button onClick={() => setPromptAberto(null)} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{promptAberto.desc}</p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 font-mono leading-relaxed mb-4">
                  Atue como especialista em {promptAberto.categoria.toLowerCase()}. Analise o seguinte contexto e forneça orientações metodológicas precisas, baseadas em evidências científicas recentes. Considere as especificidades do aluno e adapte sua resposta ao nível de profundidade necessário...
                </div>
                <button
                  onClick={handleCopiarPrompt}
                  className={`w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl transition-all fx-tap ${promptCopiado ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "text-white hover:opacity-90"}`}
                  style={!promptCopiado ? { background: "#6578c4" } : {}}
                >
                  {promptCopiado ? <><Check className="w-4 h-4" /> Copiado</> : <><Copy className="w-4 h-4" /> Copiar prompt</>}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── SIDEBAR ───────────────────────────────────────────────────────────────

type Page =
  | "plataforma"
  | "parceria"
  | "livros"
  | "certificados"
  | "atendimento"
  | "consultoria"
  | "gpts"
  | "biblioteca"
  | "comunidade"
  | "lives"
  | "admin"
  | "editor"
  | "perfil"
  | "assinatura";

const navItems = [
  { section: "Menu Principal" },
  {
    id: "plataforma",
    label: "Plataforma de Aulas",
    icon: BookOpen,
  },
  {
    id: "parceria",
    label: "Parceria Institucional",
    icon: Handshake,
  },
  { id: "livros", label: "Livros Metodológicos", icon: BookMarked },
  { id: "certificados", label: "Certificados", icon: Award },
  { id: "atendimento", label: "Atendimento", icon: Headphones },
  { id: "consultoria", label: "Consultoria", icon: GraduationCap },
  { divider: true },
  { id: "gpts", label: "GPTs", icon: Sparkles },
  {
    id: "biblioteca",
    label: "Biblioteca de Prompts",
    icon: Library,
  },
  { id: "comunidade", label: "Comunidade", icon: Users },
  { id: "lives", label: "Aulas ao Vivo", icon: Video },
  { divider: true },
  { id: "admin", label: "Painel Admin", icon: ShieldCheck },
  { id: "editor", label: "Editor de Conteúdo", icon: Edit3 },
] as const;

const bottomItems = [
  {
    id: "assinatura",
    label: "Minha Assinatura",
    icon: CreditCard,
  },
  { id: "perfil", label: "Perfil", icon: User },
  { id: "sair", label: "Sair", icon: LogOut },
] as const;

function Sidebar({
  active,
  setActive,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  onLogout,
  isAdmin,
  temConsultoria,
}: {
  active: string;
  setActive: (p: Page) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  onLogout: () => void;
  isAdmin: boolean;
  temConsultoria: boolean;
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ top: number; height: number; ready: boolean }>({
    top: 0,
    height: 0,
    ready: false,
  });

  useEffect(() => {
    const update = () => {
      if (!navRef.current) return;
      const activeEl = navRef.current.querySelector(
        '[data-nav-active="true"]',
      ) as HTMLElement | null;
      if (activeEl) {
        setIndicator({
          top: activeEl.offsetTop,
          height: activeEl.offsetHeight,
          ready: true,
        });
      }
    };
    update();
    // Pequeno atraso para garantir layout final após collapse/expand
    const t = setTimeout(update, 320);
    return () => clearTimeout(t);
  }, [active, collapsed]);

  const NavBtn = ({
    item,
  }: {
    item: { id: string; label: string; icon: ElementType };
  }) => {
    const Icon = item.icon;
    const isActive = active === item.id;
    return (
      <button
        data-nav-active={isActive}
        onClick={() => {
          if (
            [
              "plataforma",
              "parceria",
              "livros",
              "certificados",
              "atendimento",
              "consultoria",
              "gpts",
              "biblioteca",
              "comunidade",
              "admin",
              "editor",
              "perfil",
              "assinatura",
            ].includes(item.id)
          ) {
            setActive(item.id as Page);
            setMobileOpen(false);
          }
        }}
        title={collapsed ? item.label : undefined}
        className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left fx-tap transition-[background-color,color,box-shadow] duration-300 ease-out ${isActive ? "bg-[#6578c4]/90 text-white shadow-[0_6px_20px_rgba(101,120,196,0.40)]" : "text-slate-300 hover:bg-white/8 hover:text-white"}`}
      >
        <Icon
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ease-out ${isActive ? "scale-110" : ""}`}
        />
        {!collapsed && (
          <span className="text-sm font-medium truncate">
            {item.label}
          </span>
        )}
      </button>
    );
  };

  // No mobile a sidebar nunca fica colapsada — sempre expande quando aberta
  const sidebarCollapsed = collapsed;

  return (
    <>
      {/* Backdrop mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm md:hidden"
          style={{ animation: "fx-fade 220ms ease both" }}
        />
      )}
      <aside
        className={`flex flex-col border-r border-white/10 bg-slate-950/90 md:bg-slate-950/80 backdrop-blur-2xl text-white
          fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:flex-shrink-0
          ${sidebarCollapsed ? "md:w-16" : "md:w-56"}`}
        style={{ height: "100vh" }}
      >
      <div
        className={`flex items-center gap-2 px-3 py-4 ${sidebarCollapsed ? "md:justify-center" : ""} justify-between`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        {!sidebarCollapsed && (
          <div className="flex items-center gap-2.5 min-w-0">
            <BrandMark className="w-8 h-8 flex-shrink-0" />
            <div
              className="flex flex-col leading-tight min-w-0"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="text-[#f9f3dd] font-bold text-sm truncate tracking-tight">
                Pesquisa
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest truncate" style={{ color: "#c9a961" }}>
                passo a passo
              </span>
            </div>
          </div>
        )}
        {sidebarCollapsed && (
          <div className="hidden md:flex items-center justify-center">
            <BrandMark className="w-8 h-8" />
          </div>
        )}
        {/* Fechar (mobile) */}
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden text-slate-400 hover:text-white hover:bg-white/10 rounded-md p-1 -m-1 transition-all fx-tap"
          aria-label="Fechar menu"
        >
          <X className="w-4 h-4" />
        </button>
        {/* Colapsar (desktop) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:inline-flex text-slate-400 hover:text-white hover:bg-white/10 rounded-md p-1 -m-1 transition-all fx-tap"
        >
          <ChevronLeft
            className={`w-4 h-4 transition-transform duration-300 ease-out ${sidebarCollapsed ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        ref={navRef}
        className="relative flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-0.5"
      >
        {/* Indicador deslizante */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 w-[3px] rounded-r-full bg-[#c9a961]"
          style={{
            top: indicator.top + 6,
            height: Math.max(0, indicator.height - 12),
            opacity: indicator.ready ? 1 : 0,
            transition:
              "top 380ms cubic-bezier(0.22, 1, 0.36, 1), height 380ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease",
          }}
        />
        {navItems.map((item, i) => {
          if ("section" in item)
            return !sidebarCollapsed ? (
              <div
                key={i}
                className="text-xs font-semibold uppercase tracking-widest px-2 pt-2 pb-1" style={{ color: "rgba(201,169,97,0.55)" }}
              >
                {item.section}
              </div>
            ) : null;
          if ("divider" in item)
            return (
              <div
                key={i}
                className="border-t border-white/10 my-2"
              />
            );
          // Admin/Editor: só para admins
          if ("id" in item && (item.id === "admin" || item.id === "editor") && !isAdmin)
            return null;
          // Consultoria: só para plano consultoria ou admin
          if ("id" in item && item.id === "consultoria" && !temConsultoria && !isAdmin)
            return null;
          return <NavBtn key={item.id} item={item} />;
        })}
      </div>

      <div className="border-t border-white/10 px-2 py-3 space-y-0.5">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              title={sidebarCollapsed ? item.label : undefined}
              onClick={() => {
                if (item.id === "sair") { onLogout(); return; }
                if (["perfil", "assinatura"].includes(item.id)) {
                  setActive(item.id as Page);
                  setMobileOpen(false);
                }
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left fx-tap ${isActive ? "bg-[#6578c4] text-white" : "text-slate-400 hover:bg-white/10 hover:text-white hover:translate-x-1"}`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {!sidebarCollapsed && (
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </aside>
    </>
  );
}

// ─── HEADER ────────────────────────────────────────────────────────────────

const notificacoesData: { id: number; texto: string; tempo: string; lida: boolean; icon: ElementType; pagina: Page }[] = [
  { id: 1, texto: "Novo módulo disponível: Mediação Moderada em R", tempo: "2h atrás", lida: false, icon: BookOpen, pagina: "plataforma" },
  { id: 2, texto: "Novo GPT disponível: Gerador de Sintaxe R", tempo: "5h atrás", lida: false, icon: Bot, pagina: "gpts" },
  { id: 3, texto: "Novo livro adicionado à biblioteca", tempo: "1d atrás", lida: true, icon: Library, pagina: "livros" },
  { id: 4, texto: "Seu certificado foi emitido! Clique para baixar.", tempo: "2d atrás", lida: true, icon: Award, pagina: "certificados" },
];

const globalSearchItems = [
  ...Object.values(trilhaCourses).flat().map((c) => ({ tipo: "Curso", nome: c.titulo })),
  { tipo: "GPT", nome: "Assistente de Metodologia" },
  { tipo: "GPT", nome: "Revisor APA 7ª Edição" },
  { tipo: "GPT", nome: "Analisador de Dados SPSS" },
  { tipo: "Prompt", nome: "Estrutura IMRaD" },
  { tipo: "Prompt", nome: "Análise de Resultados" },
  { tipo: "Livro", nome: "Métodos de Pesquisa em Ciências Sociais" },
];

function Header({ onOpenMenu, currentTitle, fotoUrl, onNavigatePerfil, onNavigate }: { onOpenMenu: () => void; currentTitle: string; fotoUrl: string; onNavigatePerfil: () => void; onNavigate: (page: Page) => void }) {
  const { usuario, assinatura } = useAuthContext();
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);
  const [notifs, setNotifs] = useState(notificacoesData);
  const searchRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const perfilRef = useRef<HTMLDivElement>(null);

  const naoLidas = notifs.filter((n) => !n.lida).length;

  const resultados = query.trim().length > 1
    ? globalSearchItems.filter((i) => i.nome.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setShowSearch(false);
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setShowNotif(false);
      if (perfilRef.current && !perfilRef.current.contains(e.target as Node)) setShowPerfil(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="relative z-[100] h-14 bg-white/72 backdrop-blur-xl border-b border-white/70 flex items-center px-3 sm:px-5 gap-2 sm:gap-3 flex-shrink-0">
      <button
        onClick={onOpenMenu}
        className="md:hidden w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 fx-tap"
        aria-label="Abrir menu"
      >
        <Menu className="w-4 h-4" />
      </button>
      <span
        className="md:hidden text-sm font-semibold text-slate-800 truncate"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {currentTitle}
      </span>
      <div className="flex-1" />

      {/* Search */}
      <div ref={searchRef} className="relative hidden md:block">
        <BrandSearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#6578c4]" />
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setShowSearch(true); }}
          onFocus={() => setShowSearch(true)}
          className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#6578c4] w-56 transition-all"
          placeholder="Buscar cursos, GPTs, prompts..."
        />
        {showSearch && resultados.length > 0 && (
          <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl border border-slate-200 shadow-lg z-[9999] overflow-hidden">
            {resultados.map((r, i) => (
              <button
                key={i}
                onClick={() => { setQuery(""); setShowSearch(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-left transition-colors"
              >
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ background: "rgba(101,120,196,0.12)", color: "#6578c4" }}>{r.tipo}</span>
                <span className="text-sm text-slate-700 truncate">{r.nome}</span>
              </button>
            ))}
          </div>
        )}
        {showSearch && query.trim().length > 1 && resultados.length === 0 && (
          <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl border border-slate-200 shadow-lg z-[9999] px-4 py-3 text-sm text-slate-500">
            Nenhum resultado para "{query}"
          </div>
        )}
      </div>

      {/* Notifications */}
      <div ref={notifRef} className="relative">
        <button
          onClick={() => setShowNotif(!showNotif)}
          className="relative w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:scale-105 transition-all fx-tap"
        >
          <Bell className="w-4 h-4" />
          {naoLidas > 0 && (
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full fx-pulse-soft" />
          )}
        </button>
        {showNotif && (
          <div className="fixed top-14 right-14 w-80 bg-white rounded-xl border border-slate-200 shadow-xl z-[9999] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-800">Notificações</span>
              {naoLidas > 0 && (
                <button
                  onClick={() => setNotifs((prev) => prev.map((n) => ({ ...n, lida: true })))}
                  className="text-xs hover:underline" style={{ color: "#6578c4" }}
                >
                  Marcar todas como lidas
                </button>
              )}
            </div>
            <div className="max-h-72 overflow-y-auto">
              {notifs.map((n) => {
                const Icon = n.icon;
                return (
                  <button
                    key={n.id}
                    onClick={() => {
                      setNotifs((prev) => prev.map((x) => x.id === n.id ? { ...x, lida: true } : x));
                      setShowNotif(false);
                      onNavigate(n.pagina);
                    }}
                    className={`w-full flex items-start gap-3 px-4 py-3 text-left border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50 ${!n.lida ? "bg-[#6578c4]/5" : ""}`}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(101,120,196,0.12)" }}>
                      <Icon className="w-4 h-4" style={{ color: "#6578c4" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs leading-snug ${!n.lida ? "text-slate-800 font-medium" : "text-slate-600"}`}>{n.texto}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{n.tempo}</p>
                    </div>
                    {!n.lida && <div className="w-2 h-2 rounded-full bg-[#6578c4] flex-shrink-0 mt-1.5" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Foto de perfil com dropdown */}
      <div ref={perfilRef} className="relative flex-shrink-0">
        <button
          onClick={() => setShowPerfil((v) => !v)}
          className="w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden hover:scale-105 hover:shadow-md fx-tap transition-all"
        >
          <img src={fotoUrl} alt="Perfil" className="w-full h-full object-cover" />
        </button>

        {showPerfil && (
          <div className="fixed top-14 right-3 w-72 rounded-2xl border border-slate-200 shadow-2xl z-[9999] bg-white" style={{ boxShadow: "0 8px 40px rgba(10,10,58,0.18)" }}>
            {/* Banner */}
            <div className="h-16 rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#0a0a3a] via-[#1e2a6e] to-[#6578c4] relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_70%)]" />
            </div>
            {/* Avatar sobreposto */}
            <div className="px-5 pb-4">
              <div className="relative -mt-7 mb-3 w-fit">
                <div className="w-14 h-14 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-slate-100">
                  <img src={fotoUrl} alt="Perfil" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
              </div>
              <p className="text-sm font-bold text-slate-800 leading-tight">{usuario?.nome ?? "Usuário"}</p>
              <p className="text-xs text-slate-500 mt-0.5">{assinatura?.planos?.nome === "consultoria" ? "Plano Consultoria" : assinatura ? "Plano Essencial" : "Sem plano ativo"}</p>
              <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(101,120,196,0.1)", color: "#6578c4" }}>
                  <Award className="w-2.5 h-2.5" /> Conquistas
                </span>
              </div>
            </div>
            <div className="border-t border-slate-100 px-2 py-2 space-y-0.5">
              <button
                onClick={() => { setShowPerfil(false); onNavigatePerfil(); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 transition-colors text-left"
              >
                <User className="w-4 h-4" style={{ color: "#6578c4" }} /> Ver perfil completo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ─── PAGE TITLES ───────────────────────────────────────────────────────────

const pageTitles: Record<
  string,
  { title: string; sub: string }
> = {
  plataforma: {
    title: "Plataforma de Aulas",
    sub: "Explore trilhas e cursos disponíveis",
  },
  parceria: {
    title: "Parceria Institucional",
    sub: "Licenças corporativas e acadêmicas",
  },
  livros: {
    title: "Livros Metodológicos",
    sub: "Bibliografia que embasa cada metodologia ensinada",
  },
  certificados: {
    title: "Certificados",
    sub: "Acompanhe seu progresso e emita certificados",
  },
  atendimento: {
    title: "Atendimento",
    sub: "Fale com nossa equipe de suporte",
  },
  gpts: {
    title: "Repositório de GPTs",
    sub: "GPTs especializados criados pela Dra. Sandri",
  },
  biblioteca: {
    title: "Biblioteca de Prompts",
    sub: "Prompts prontos para pesquisa, escrita e análise",
  },
  comunidade: {
    title: "Comunidade",
    sub: "Discussões, dúvidas e trocas entre pesquisadores",
  },
  lives: {
    title: "Aulas ao Vivo",
    sub: "Próximas lives, gravações e calendário de eventos",
  },
  admin: {
    title: "Painel de Administração",
    sub: "Assinaturas, receita e parcerias",
  },
  editor: {
    title: "Editor de Conteúdo",
    sub: "Gerencie cursos, GPTs, prompts e livros da plataforma",
  },
  consultoria: {
    title: "Consultoria Individual",
    sub: "Seu espaço personalizado com GPTs, aulas e prompts exclusivos",
  },
  perfil: {
    title: "Meu Perfil",
    sub: "Gerencie suas informações pessoais",
  },
  assinatura: {
    title: "Minha Assinatura",
    sub: "Plano atual e comparação de planos disponíveis",
  },
};

// ─── APP ───────────────────────────────────────────────────────────────────

function SemPlanoGate({ onVerPlanos }: { onVerPlanos: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(101,120,196,0.12)", border: "1px solid rgba(101,120,196,0.25)" }}>
        <Lock className="w-8 h-8 text-[#6578c4]" />
      </div>
      <h2 className="text-xl font-bold text-slate-800 mb-2">Conteúdo exclusivo para assinantes</h2>
      <p className="text-sm text-slate-500 mb-6 max-w-sm">Para acessar a plataforma você precisa de um plano ativo. Escolha o melhor para você.</p>
      <button
        onClick={onVerPlanos}
        className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all fx-tap"
        style={{ background: "linear-gradient(135deg, #6578c4, #0a0a3a)" }}
      >
        Ver planos
      </button>
    </div>
  );
}

function SemConsultoriaGate({ onVerPlanos }: { onVerPlanos: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(201,169,97,0.12)", border: "1px solid rgba(201,169,97,0.25)" }}>
        <GraduationCap className="w-8 h-8 text-[#c9a961]" />
      </div>
      <h2 className="text-xl font-bold text-slate-800 mb-2">Disponível no plano Consultoria</h2>
      <p className="text-sm text-slate-500 mb-6 max-w-sm">Este conteúdo é exclusivo para assinantes do plano Consultoria. Faça um upgrade para ter acesso.</p>
      <button
        onClick={onVerPlanos}
        className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all fx-tap"
        style={{ background: "linear-gradient(135deg, #c9a961, #a07c30)" }}
      >
        Fazer upgrade
      </button>
    </div>
  );
}

export default function App() {
  const { session, loading, signOut, isAdmin, temPlano, temConsultoria } = useAuthContext();
  const [page, setPage] = useState<Page>("plataforma");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [perfilFoto, setPerfilFoto] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80");
  const [perfilBanner, setPerfilBanner] = useState("");

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a3a]">
      <RefreshCw className="w-8 h-8 text-[#6578c4] animate-spin" />
    </div>
  );

  if (!session) return <LoginPage onLogin={() => {}} />;

  // Páginas que qualquer logado acessa (mesmo sem plano)
  const paginasLivres: Page[] = ["assinatura", "perfil", "parceria", "atendimento"];

  const renderPage = () => {
    // Proteção de admin
    if ((page === "admin" || page === "editor") && !isAdmin)
      return <SemPlanoGate onVerPlanos={() => setPage("assinatura")} />;

    // Proteção de plano (todas as páginas de conteúdo)
    if (!temPlano && !paginasLivres.includes(page))
      return <SemPlanoGate onVerPlanos={() => setPage("assinatura")} />;

    // Proteção de consultoria
    if (page === "consultoria" && !temConsultoria)
      return <SemConsultoriaGate onVerPlanos={() => setPage("assinatura")} />;

    if (page === "plataforma") return <PlatformPage />;
    if (page === "parceria") return <ParceriaPage />;
    if (page === "livros") return <LivrosPage />;
    if (page === "certificados") return <CertificadosPage />;
    if (page === "atendimento") return <AtendimentoPage />;
    if (page === "consultoria") return <ConsultoriaPage />;
    if (page === "gpts") return <GPTsPage />;
    if (page === "biblioteca") return <BibliotecaPage />;
    if (page === "comunidade") return <ComunidadePage onNavigate={setPage} />;
    if (page === "lives") return <LivesPage />;
    if (page === "admin") return <AdminPage />;
    if (page === "editor") return <EditorPage />;
    if (page === "perfil") return <PerfilPage fotoUrl={perfilFoto} bannerUrl={perfilBanner} onUpdateFoto={setPerfilFoto} onUpdateBanner={setPerfilBanner} />;
    if (page === "assinatura") return <AssinaturaPage />;
    return null;
  };

  const { title, sub } = pageTitles[page];

  return (
    <div id="app-layout" className="app-shell flex h-screen overflow-hidden bg-transparent relative isolate">
      <Sidebar
        active={page}
        setActive={setPage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onLogout={signOut}
        isAdmin={isAdmin}
        temConsultoria={temConsultoria}
      />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-white/65 backdrop-blur-xl">
        <Header onOpenMenu={() => setMobileOpen(true)} currentTitle={title} fotoUrl={perfilFoto} onNavigatePerfil={() => setPage("perfil")} onNavigate={setPage} />
        <main className="flex-1 overflow-y-auto bg-transparent px-3 sm:px-5 lg:px-7 py-4 sm:py-6">
          <div className="page-swap relative overflow-hidden rounded-2xl border border-slate-200 bg-white/88 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.06))]" />
            <div className="pointer-events-none absolute -top-20 right-10 h-40 w-40 rounded-full bg-slate-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-slate-300/22 blur-3xl" />
            <div key={page} className="page-content relative px-4 sm:px-7 pt-5 sm:pt-6 pb-6 sm:pb-8">
              <h1
                className="text-lg sm:text-xl font-bold text-slate-800 leading-tight fx-slide-right"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {title}
              </h1>
              <p
                className="text-xs sm:text-sm text-slate-400 mt-0.5 fx-slide-right"
                style={{ animationDelay: "60ms" }}
              >
                {sub}
              </p>
              <div className="mt-5 sm:mt-6 fx-fade" style={{ animationDelay: "120ms" }}>
                {renderPage()}
              </div>
            </div>
          </div>
        </main>
      </div>
      <ObyAvatar paginaAtual={page} />
    </div>
  );
}