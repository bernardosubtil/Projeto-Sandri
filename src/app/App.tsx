import { useState, useEffect, useRef, ElementType } from "react";
import { ObyAvatar } from "./components/Oby";
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
  { id: "duvidas", nome: "Dúvidas Metodológicas", icon: MessageSquare, cor: "text-blue-600" },
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
  { id: 1, nome: "Sandro Alves de Medeiros", email: "sandro@ufrgs.br", plano: "Premium", status: "Ativo", inicio: "Jan 2025", valor: 297 },
  { id: 2, nome: "Samara Ernandes Adamczuk", email: "samara@usp.br", plano: "Pro", status: "Ativo", inicio: "Fev 2025", valor: 197 },
  { id: 3, nome: "Vinicius Ilha de Arruda", email: "vinicius@ufpr.br", plano: "Premium", status: "Ativo", inicio: "Jan 2025", valor: 297 },
  { id: 4, nome: "Ana Carolina Fernandes", email: "ana@fiocruz.br", plano: "Pro", status: "Ativo", inicio: "Mar 2025", valor: 197 },
  { id: 5, nome: "Ricardo Monteiro Santos", email: "ricardo@ufmg.br", plano: "Pro", status: "Ativo", inicio: "Abr 2025", valor: 197 },
  { id: 6, nome: "Patricia Lima Oliveira", email: "patricia@unb.br", plano: "Premium", status: "Pausado", inicio: "Nov 2024", valor: 297 },
  { id: 7, nome: "Marcos Paulo Almeida", email: "marcos@unicamp.br", plano: "Pro", status: "Ativo", inicio: "Mai 2025", valor: 197 },
  { id: 8, nome: "Juliana Costa Ribeiro", email: "juliana@puc.br", plano: "Premium", status: "Ativo", inicio: "Jan 2025", valor: 297 },
  { id: 9, nome: "Bruno Ferreira Nunes", email: "bruno@ufsc.br", plano: "Pro", status: "Ativo", inicio: "Mar 2025", valor: 197 },
  { id: 10, nome: "Camila Souza Borges", email: "camila@ufba.br", plano: "Premium", status: "Cancelado", inicio: "Out 2024", valor: 297 },
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
  { name: "Premium", value: 58, color: "#1e3a5f" },
  { name: "Pro", value: 35, color: "#2563eb" },
  { name: "Institucional", value: 7, color: "#94a3b8" },
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
  const [visibleCats, setVisibleCats] = useState<Set<string>>(
    () => new Set(Object.keys(trilhaCourses))
  );
  const [view, setView] = useState<PlatformView>({ tela: "lista" });
  const trilhas = Object.keys(trilhaCourses);

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
      />
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Mobile filter pills */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-2 flex-wrap">
        {trilhas.map((t) => {
          const ativo = visibleCats.has(t);
          return (
            <button
              key={t}
              onClick={() => toggleCat(t)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                ativo ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Desktop sidebar filter */}
      <aside className="hidden md:block w-48 flex-shrink-0">
        <div className="sticky top-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Módulos
          </div>
          <nav className="space-y-0.5">
            {trilhas.map((t) => {
              const ativo = visibleCats.has(t);
              const count = trilhaCourses[t].length;
              return (
                <button
                  key={t}
                  onClick={() => toggleCat(t)}
                  className={`w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-sm transition-colors text-left ${
                    ativo
                      ? "bg-slate-100 text-slate-900 font-semibold"
                      : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className={`w-3.5 h-3.5 rounded-sm border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                        ativo ? "bg-slate-800 border-slate-800" : "border-slate-300"
                      }`}
                    >
                      {ativo && <Check className="w-2 h-2 text-white" strokeWidth={3} />}
                    </div>
                    <span className="truncate">{t}</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 flex-shrink-0">
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* All course sections stacked */}
      <div className="flex-1 min-w-0 space-y-8">
        {trilhas
          .filter((cat) => visibleCats.has(cat))
          .map((cat) => {
            const cards = trilhaCourses[cat];
            return (
              <section key={cat}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-slate-800">{cat}</h2>
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
                <Clock className="w-3.5 h-3.5" /> {curso.duracao}
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
              className="w-full bg-slate-900 text-white text-sm font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 mb-4"
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
                <span className="text-slate-800 font-medium">{curso.duracao}</span>
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
}: {
  curso: Curso;
  moduloIdx: number;
  aulaIdx: number;
  onBack: () => void;
  onSelect: (moduloIdx: number, aulaIdx: number) => void;
}) {
  const modulo = curso.modulos[moduloIdx];
  const aula = modulo.aulas[aulaIdx];
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
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Nesta aula, a Dra. Sandri apresenta os pontos centrais sobre <span className="font-medium text-slate-800">{aula.titulo.toLowerCase()}</span>, com exemplos práticos do curso de {curso.titulo}. Materiais complementares ficam disponíveis na aba abaixo.
          </p>

          <div className="border-t border-slate-200 pt-4 flex items-center gap-6 text-xs text-slate-500">
            <button className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
              <Download className="w-3.5 h-3.5" /> Material da aula
            </button>
            <button className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
              <FileText className="w-3.5 h-3.5" /> Transcrição
            </button>
            <button className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
              <MessageSquare className="w-3.5 h-3.5" /> Tirar dúvida
            </button>
          </div>
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
                    return (
                      <button
                        key={ai}
                        onClick={() => onSelect(mi, ai)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${ativo ? "bg-slate-900 text-white" : "hover:bg-slate-50 text-slate-700"}`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${ativo ? "bg-white text-slate-900" : "border border-slate-300 text-slate-400"}`}>
                          <Send className="w-2.5 h-2.5 -rotate-45 translate-x-px" strokeWidth={2.5} />
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
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
              Instituição
            </label>
            <input
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nome da instituição"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
            Cargo
          </label>
          <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
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
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
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
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
              Telefone / WhatsApp
            </label>
            <input
              type="tel"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>
        <button className="w-full bg-slate-800 text-white rounded-lg py-3 text-sm font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
          <Send className="w-4 h-4" /> Enviar Solicitação
        </button>
      </div>
    </div>
  );
}

// ─── PAGE: CERTIFICADOS ────────────────────────────────────────────────────

function gerarCertificadoHTML(cursoNome: string) {
  const aluno = "Sandro Alves de Medeiros";
  const cargaHoraria = "40h";
  const data = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const codigo =
    "CERT-" +
    Math.random().toString(36).slice(2, 8).toUpperCase() +
    "-" +
    new Date().getFullYear();

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
  const [aberto, setAberto] = useState<{ cursoNome: string; html: string; codigo: string } | null>(null);
  const [naoOpen, setNaoOpen] = useState(true);
  const [concluidosOpen, setConcluidosOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const concluidos = cursosData.filter((c) => c.progress === 100);
  const nao = cursosData.filter((c) => c.progress < 100);

  const abrirEmissao = (cursoNome: string) => {
    const { html, codigo } = gerarCertificadoHTML(cursoNome);
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
                onClick={() => done && abrirEmissao(c.nome)}
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
          className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex flex-col fx-modal-backdrop"
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
                  className="text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
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
            <div className="md:hidden bg-blue-50 border-b border-blue-100 px-4 py-2.5 text-[11px] text-blue-800 leading-snug flex-shrink-0">
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
  const [sent, setSent] = useState(false);
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
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-slate-700" />
            </div>
            <div className="text-base font-semibold text-slate-800 mb-2">
              Mensagem enviada!
            </div>
            <p className="text-sm text-slate-500 mb-4">
              Nossa equipe entrará em contato em breve.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-sm text-slate-700 hover:underline"
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
              <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
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
                Assunto
              </label>
              <input
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Resumo da sua dúvida"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 block">
                Mensagem
              </label>
              <textarea
                rows={5}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Descreva sua dúvida com detalhes..."
              />
            </div>
            <button
              onClick={() => setSent(true)}
              className="w-full bg-blue-600 text-white rounded-lg py-3 text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Enviar Mensagem
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
  const cats = gptsCategorias.filter((c) => c !== "Todos");
  const [visibleCats, setVisibleCats] = useState<Set<string>>(
    () => new Set(cats),
  );
  const [search, setSearch] = useState("");

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
      gptsData.filter(
        (g) =>
          g.cat === cat &&
          g.nome.toLowerCase().includes(search.toLowerCase()),
      ).length > 0,
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Mobile filter pills */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-2 flex-wrap">
        {cats.map((cat) => {
          const ativo = visibleCats.has(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleCat(cat)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                ativo
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-48 flex-shrink-0">
        <div className="sticky top-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Categorias
          </div>
          <nav className="space-y-0.5">
            {cats.map((cat) => {
              const ativo = visibleCats.has(cat);
              const count = gptsData.filter((g) => g.cat === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => toggleCat(cat)}
                  className={`w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-sm transition-colors text-left ${
                    ativo
                      ? "bg-slate-100 text-slate-900 font-semibold"
                      : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className={`w-3.5 h-3.5 rounded-sm border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                        ativo
                          ? "bg-slate-800 border-slate-800"
                          : "border-slate-300"
                      }`}
                    >
                      {ativo && (
                        <Check className="w-2 h-2 text-white" strokeWidth={3} />
                      )}
                    </div>
                    <span className="truncate">{cat}</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 flex-shrink-0">
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 px-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-7 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 w-full bg-white/70"
                placeholder="Buscar..."
              />
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 px-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Sobre os GPTs
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              GPTs especializados criados pela Dra. Sandri para apoiar pesquisa,
              análise e escrita científica.
            </p>
          </div>
        </div>
      </aside>

      {/* Right content: sections by category */}
      <div className="flex-1 min-w-0 space-y-8">
        {/* Mobile search */}
        <div className="md:hidden relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 w-full bg-white/70"
            placeholder="Buscar GPT..."
          />
        </div>

        {visibleSections.map((cat) => {
          const items = gptsData.filter(
            (g) =>
              g.cat === cat &&
              g.nome.toLowerCase().includes(search.toLowerCase()),
          );
          if (items.length === 0) return null;
          return (
            <section key={cat}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-slate-800">
                  {cat}
                </h2>
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
  const cats = promptsCategorias.filter((c) => c !== "Todos");
  const [visibleCats, setVisibleCats] = useState<Set<string>>(
    () => new Set(cats),
  );
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<typeof promptsData[number] | null>(null);
  const [copied, setCopied] = useState(false);

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
      promptsData.filter(
        (p) =>
          p.cat === cat &&
          (p.titulo.toLowerCase().includes(search.toLowerCase()) ||
            p.desc.toLowerCase().includes(search.toLowerCase())),
      ).length > 0,
  );

  return (<>
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Mobile filter pills */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-2 flex-wrap">
        {cats.map((cat) => {
          const ativo = visibleCats.has(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleCat(cat)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                ativo
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-48 flex-shrink-0">
        <div className="sticky top-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Categorias
          </div>
          <nav className="space-y-0.5">
            {cats.map((cat) => {
              const ativo = visibleCats.has(cat);
              const count = promptsData.filter((p) => p.cat === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => toggleCat(cat)}
                  className={`w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-sm transition-colors text-left ${
                    ativo
                      ? "bg-slate-100 text-slate-900 font-semibold"
                      : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className={`w-3.5 h-3.5 rounded-sm border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                        ativo
                          ? "bg-slate-800 border-slate-800"
                          : "border-slate-300"
                      }`}
                    >
                      {ativo && (
                        <Check className="w-2 h-2 text-white" strokeWidth={3} />
                      )}
                    </div>
                    <span className="truncate">{cat}</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 flex-shrink-0">
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 px-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-7 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 w-full bg-white/70"
                placeholder="Buscar..."
              />
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 px-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Total
            </div>
            <p className="text-2xl font-bold text-slate-800 mb-0.5">
              {promptsData.length}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              prompts prontos para pesquisa e escrita científica
            </p>
          </div>
        </div>
      </aside>

      {/* Right content */}
      <div className="flex-1 min-w-0 space-y-8">
        {/* Mobile search */}
        <div className="md:hidden relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 w-full bg-white/70"
            placeholder="Buscar prompt..."
          />
        </div>

        {visibleSections.map((cat) => {
          const items = promptsData.filter(
            (p) =>
              p.cat === cat &&
              (p.titulo.toLowerCase().includes(search.toLowerCase()) ||
                p.desc.toLowerCase().includes(search.toLowerCase())),
          );
          if (items.length === 0) return null;
          return (
            <section key={cat}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-slate-800">{cat}</h2>
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
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${copied ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-900 text-white hover:bg-slate-800"}`}
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
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Mobile filter pills */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-1 flex-wrap">
        {livrosCategorias.map((c) => {
          const ativo = visibleCats.has(c.id);
          return (
            <button
              key={c.id}
              onClick={() => toggleCat(c.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${ativo ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}
            >
              {c.nome}
            </button>
          );
        })}
      </div>

      {/* Desktop sidebar with checkboxes */}
      <aside className="hidden md:block w-56 flex-shrink-0">
        <div className="sticky top-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Áreas
          </div>
          <nav className="space-y-0.5">
            {livrosCategorias.map((c) => {
              const ativo = visibleCats.has(c.id);
              const count = livrosData[c.id]?.length || 0;
              return (
                <button
                  key={c.id}
                  onClick={() => toggleCat(c.id)}
                  className={`w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-sm transition-colors text-left ${ativo ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className={`w-3.5 h-3.5 rounded-sm border-2 flex-shrink-0 flex items-center justify-center transition-colors ${ativo ? "bg-slate-800 border-slate-800" : "border-slate-300"}`}
                    >
                      {ativo && <Check className="w-2 h-2 text-white" strokeWidth={3} />}
                    </div>
                    <c.icon className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
                    <span className="truncate">{c.nome}</span>
                  </div>
                  <span className={`text-[10px] font-medium ${ativo ? "text-slate-500" : "text-slate-400"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-slate-100 px-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Sobre esta seção
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bibliografia que embasa as trilhas, cursos e GPTs da plataforma. Cada livro indica em qual módulo é referência.
            </p>
          </div>
        </div>
      </aside>

      {/* All book sections stacked */}
      <div className="flex-1 min-w-0 space-y-10">
        {visibleList.map((catInfo) => {
          const livros = livrosData[catInfo.id] || [];
          return (
            <section key={catInfo.id}>
              <div className="mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1">
                  <catInfo.icon className="w-3 h-3" strokeWidth={2} />
                  {catInfo.nome}
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-800">
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
                  className="text-sm font-semibold bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors flex items-center gap-2"
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

function ComunidadePage() {
  const [canalAtivo, setCanalAtivo] = useState("todos");
  const [novoPost, setNovoPost] = useState("");
  const [likes, setLikes] = useState<Record<number, boolean>>({});
  const [comentariosAbertos, setComentariosAbertos] = useState<Record<number, boolean>>({});
  const [comentario, setComentario] = useState<Record<number, string>>({});

  const postsFiltrados = postsComunidade.filter(
    (p) => canalAtivo === "todos" || p.canal === canalAtivo,
  );

  const toggleLike = (id: number) =>
    setLikes((l) => ({ ...l, [id]: !l[id] }));
  const toggleComentarios = (id: number) =>
    setComentariosAbertos((c) => ({ ...c, [id]: !c[id] }));

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Pills de canais no mobile */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-1">
        <button
          onClick={() => setCanalAtivo("todos")}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${canalAtivo === "todos" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}
        >
          Todos
        </button>
        {canaisComunidade.map((c) => {
          const ativo = canalAtivo === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setCanalAtivo(c.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${ativo ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}
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
            <div className="px-2 space-y-2.5 text-xs">
              {[
                { icon: BookOpen, texto: "Novo módulo: Mediação Moderada em R" },
                { icon: Settings, texto: "Atualização do JASP (v0.19)" },
                { icon: Settings, texto: "Novo GPT: Gerador de Sintaxe R" },
                { icon: BookOpen, texto: "Curso de Análise de Redes disponível" },
              ].map((u, i) => (
                <div key={i} className="flex items-start gap-2">
                  <u.icon className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-slate-600 leading-snug">{u.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Feed central */}
      <div className="flex-1 min-w-0">
        {/* Composer estilo LinkedIn */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 mb-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#1e3a5f] border border-white flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              SA
            </div>
            <input
              value={novoPost}
              onChange={(e) => setNovoPost(e.target.value)}
              placeholder="Compartilhe uma dúvida, achado ou recurso…"
              className="flex-1 border border-slate-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-slate-400 hover:bg-slate-50 transition-colors bg-slate-50/50 placeholder:text-slate-400"
            />
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                <ImageIcon className="w-4 h-4 text-blue-500" strokeWidth={1.5} /> Imagem
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                <FileText className="w-4 h-4 text-emerald-500" strokeWidth={1.5} /> Documento
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                <Tag className="w-4 h-4 text-amber-500" strokeWidth={1.5} /> Tags
              </button>
            </div>
            <button
              disabled={!novoPost.trim()}
              onClick={() => setNovoPost("")}
              className="text-xs font-semibold bg-slate-900 text-white rounded-full px-5 py-1.5 hover:bg-slate-800 transition-colors disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
            >
              Publicar
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
            const liked = likes[p.id];
            const totalLikes = p.likes + (liked ? 1 : 0);
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
                        <span key={t} className="text-[11px] font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full px-2.5 py-0.5 cursor-pointer transition-colors">
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
                    <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                      <Share2 className="w-[18px] h-[18px]" strokeWidth={1.5} />
                      <span className="hidden sm:inline">Compartilhar</span>
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
                          SA
                        </div>
                        <div className="flex-1 relative">
                          <input
                            value={comentario[p.id] || ""}
                            onChange={(e) =>
                              setComentario({ ...comentario, [p.id]: e.target.value })
                            }
                            placeholder="Adicione um comentário…"
                            className="w-full border border-slate-200 rounded-full pl-4 pr-12 py-2 text-sm focus:outline-none focus:border-slate-400 bg-slate-50/50 placeholder:text-slate-400"
                          />
                          <button
                            disabled={!comentario[p.id]?.trim()}
                            onClick={() => setComentario({ ...comentario, [p.id]: "" })}
                            className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
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

type AdminTab = "overview" | "assinaturas" | "receita" | "parcerias" | "editor";
type EditorTab = "curso" | "gpt" | "prompt" | "livro";

function StatCard({ label, value, sub, icon: Icon, trend, color = "slate" }: { label: string; value: string; sub: string; icon: ElementType; trend?: string; color?: string; }) {
  const colors: Record<string, string> = { slate: "bg-slate-50 text-slate-700", blue: "bg-blue-50 text-blue-700", emerald: "bg-emerald-50 text-emerald-700", amber: "bg-amber-50 text-amber-700" };
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5">
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
  const [editorTab, setEditorTab] = useState<EditorTab>("curso");
  const [assBusca, setAssBusca] = useState("");
  const [assFiltro, setAssFiltro] = useState("Todos");
  const [assEditando, setAssEditando] = useState<number | null>(null);

  const adminTabs: { id: AdminTab; label: string; icon: ElementType }[] = [
    { id: "overview", label: "Visão Geral", icon: LayoutDashboard },
    { id: "assinaturas", label: "Assinaturas", icon: CreditCard },
    { id: "receita", label: "Receita", icon: TrendingUp },
    { id: "parcerias", label: "Parcerias", icon: Handshake },
    { id: "editor", label: "Editor de Conteúdo", icon: Edit3 },
  ];

  const assFiltered = assinaturasData.filter((a) => (assFiltro === "Todos" || a.plano === assFiltro || a.status === assFiltro) && a.nome.toLowerCase().includes(assBusca.toLowerCase()));
  const totalAtivos = assinaturasData.filter((a) => a.status === "Ativo").length;
  const receitaMes = receitaData[receitaData.length - 1].receita;
  const acessosHoje = acessosData[acessosData.length - 2].acessos;
  const parceirosAtivos = parceirosAdmin.filter((p) => p.status === "Ativo").length;

  const statusBadge = (s: string) => {
    if (s === "Ativo") return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    if (s === "Pausado") return "bg-amber-50 text-amber-700 border border-amber-200";
    if (s === "Cancelado") return "bg-rose-50 text-rose-700 border border-rose-200";
    if (s === "Em Negociação") return "bg-blue-50 text-blue-700 border border-blue-200";
    return "bg-slate-100 text-slate-600";
  };
  const planoBadge = (p: string) => p === "Premium" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700";

  return (
    <div>
      {/* Tab bar */}
      <div className="flex items-center gap-0.5 overflow-x-auto -mx-1 px-1 mb-6 border-b border-slate-200">
        {adminTabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${tab === t.id ? "border-slate-800 text-slate-800" : "border-transparent text-slate-400 hover:text-slate-600"}`}>
            <t.icon className="w-4 h-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      {/* OVERVIEW */}
      {tab === "overview" && (
        <div className="space-y-6 fx-fade">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                      <stop offset="5%" stopColor="#1e3a5f" stopOpacity={0.18} />
                      <stop offset="95%" stopColor="#1e3a5f" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `R$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0", background: "white" }} formatter={(v: number) => [`R$ ${v.toLocaleString("pt-BR")}`, "Receita"]} />
                  <Area type="monotone" dataKey="receita" stroke="#1e3a5f" strokeWidth={2} fill="url(#recGrad)" />
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
                  <Bar dataKey="acessos" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5">
              <div className="text-sm font-semibold text-slate-800 mb-4">Atividade Recente</div>
              <div className="space-y-3">
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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input value={assBusca} onChange={(e) => setAssBusca(e.target.value)} className="pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 w-full bg-white/70" placeholder="Buscar assinante..." />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto">
              {["Todos", "Premium", "Pro", "Ativo", "Pausado", "Cancelado"].map((f) => (
                <button key={f} onClick={() => setAssFiltro(f)} className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${assFiltro === f ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{f}</button>
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
            <div className="divide-y divide-slate-100">
              {assFiltered.map((a) => (
                <div key={a.id} className="px-4 py-3 hover:bg-slate-50/60 transition-colors sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-col gap-1.5">
                  <div className="sm:col-span-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 flex-shrink-0">{getInitials(a.nome)}</div>
                    <div className="min-w-0"><div className="text-sm font-medium text-slate-800 truncate">{a.nome}</div><div className="text-[11px] text-slate-400 truncate">{a.email}</div></div>
                  </div>
                  <div className="sm:col-span-2"><span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${planoBadge(a.plano)}`}>{a.plano}</span></div>
                  <div className="sm:col-span-2 text-xs text-slate-500">{a.inicio}</div>
                  <div className="sm:col-span-2 text-sm font-semibold text-slate-700">R$ {a.valor}</div>
                  <div className="sm:col-span-2 flex items-center justify-between">
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusBadge(a.status)}`}>{a.status}</span>
                    <button onClick={() => setAssEditando(assEditando === a.id ? null : a.id)} className="text-slate-400 hover:text-slate-700 p-1 transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
                  </div>
                  {assEditando === a.id && (
                    <div className="sm:col-span-12 flex flex-wrap gap-2 pt-2 border-t border-slate-100 fx-rise">
                      <button className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Alterar plano</button>
                      <button className="text-xs px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors">Pausar</button>
                      <button className="text-xs px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors">Cancelar</button>
                      <button className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">Enviar e-mail</button>
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
                <Line yAxisId="left" type="monotone" dataKey="receita" stroke="#1e3a5f" strokeWidth={2.5} dot={{ r: 4, fill: "#1e3a5f" }} name="Receita (R$)" />
                <Line yAxisId="right" type="monotone" dataKey="assinaturas" stroke="#2563eb" strokeWidth={2} dot={{ r: 4, fill: "#2563eb" }} strokeDasharray="5 3" name="Assinantes" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
            <div className="grid grid-cols-5 gap-4 px-5 py-3 bg-slate-50 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              <div>Mês</div><div>Receita</div><div>Assinantes</div><div>Variação</div><div>Status</div>
            </div>
            <div className="divide-y divide-slate-100">
              {[...receitaData].reverse().map((r, i) => {
                const prev = receitaData[receitaData.length - 2 - i];
                const pct = prev ? (((r.receita - prev.receita) / prev.receita) * 100).toFixed(1) : null;
                return (
                  <div key={r.mes} className="grid grid-cols-5 gap-4 px-5 py-3.5 items-center hover:bg-slate-50/60 transition-colors">
                    <div className="text-sm font-medium text-slate-700">{r.mes}/26</div>
                    <div className="text-sm font-semibold text-slate-800">R$ {r.receita.toLocaleString("pt-BR")}</div>
                    <div className="text-sm text-slate-600">{r.assinaturas}</div>
                    <div className={`text-sm font-medium ${pct && Number(pct) > 0 ? "text-emerald-600" : "text-slate-400"}`}>{pct ? `+${pct}%` : "—"}</div>
                    <div><span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${i === 0 ? "bg-blue-50 text-blue-700 border border-blue-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>{i === 0 ? "Atual" : "Concluído"}</span></div>
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
            <div className="divide-y divide-slate-100">
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
            <div className="text-sm font-semibold text-slate-800 mb-4 flex items-center gap-2"><PlusCircle className="w-4 h-4 text-blue-600" strokeWidth={1.5} /> Nova Parceria</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Nome da Instituição", "Tipo", "Cidade / Estado", "E-mail de Contato", "Vagas"].map((lbl) => (
                <div key={lbl}><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">{lbl}</label><input type={lbl === "Vagas" ? "number" : "text"} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder={lbl} /></div>
              ))}
              <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Plano</label><select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-slate-400"><option>Pro</option><option>Premium</option><option>Negociar</option></select></div>
            </div>
            <button className="mt-4 flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"><Save className="w-4 h-4" /> Salvar Parceria</button>
          </div>
        </div>
      )}

      {/* EDITOR */}
      {tab === "editor" && (
        <div className="fx-fade">
          <div className="flex items-center gap-1 overflow-x-auto mb-5 bg-slate-100 p-1 rounded-xl w-fit">
            {(["curso", "gpt", "prompt", "livro"] as EditorTab[]).map((et) => (
              <button key={et} onClick={() => setEditorTab(et)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${editorTab === et ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
                {et === "gpt" ? "GPT" : et.charAt(0).toUpperCase() + et.slice(1)}
              </button>
            ))}
          </div>

          {editorTab === "curso" && (
            <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 space-y-4">
              <div className="text-sm font-semibold text-slate-800 flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-600" strokeWidth={1.5} /> Adicionar / Editar Curso</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2"><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Título do Curso</label><input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="Ex: Análise de Mediação em R" /></div>
                <div className="sm:col-span-2"><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Descrição</label><textarea rows={3} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white" placeholder="Descrição breve do conteúdo e objetivos do curso..." /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Categoria</label><select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white">{["Estatística","Metodologia","Escrita Científica","Psicometria","Qualitativa","Ferramentas","Carreira"].map((c) => <option key={c}>{c}</option>)}</select></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Nível</label><select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"><option>Iniciante</option><option>Intermediário</option><option>Avançado</option></select></div>
                {["Instrutor", "Duração Total", "Nº de Aulas", "URL da Capa (Unsplash)"].map((lbl) => (
                  <div key={lbl}><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">{lbl}</label><input type={lbl === "Nº de Aulas" ? "number" : "text"} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder={lbl} /></div>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <button className="flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"><Save className="w-4 h-4" /> Salvar Curso</button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"><Upload className="w-4 h-4" /> Importar JSON</button>
              </div>
            </div>
          )}

          {editorTab === "gpt" && (
            <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 space-y-4">
              <div className="text-sm font-semibold text-slate-800 flex items-center gap-2"><Sparkles className="w-4 h-4 text-blue-600" strokeWidth={1.5} /> Adicionar / Editar GPT</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Nome do GPT</label><input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="Ex: Analista Estatístico" /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Categoria</label><select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white">{["Análise","Metodologia","Escrita"].map((c) => <option key={c}>{c}</option>)}</select></div>
                <div className="sm:col-span-2"><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Descrição</label><textarea rows={2} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white" placeholder="O que esse GPT faz..." /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Link (ChatGPT)</label><input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="https://chat.openai.com/g/..." /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Gradiente do ícone</label><select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white">{["from-blue-500 to-indigo-600","from-emerald-500 to-teal-600","from-rose-500 to-pink-600","from-violet-500 to-purple-600","from-amber-500 to-orange-600"].map((c) => <option key={c}>{c}</option>)}</select></div>
              </div>
              <button className="flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"><Save className="w-4 h-4" /> Salvar GPT</button>
            </div>
          )}

          {editorTab === "prompt" && (
            <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 space-y-4">
              <div className="text-sm font-semibold text-slate-800 flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-600" strokeWidth={1.5} /> Adicionar / Editar Prompt</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Título</label><input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="Ex: Introdução com gancho científico" /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Categoria</label><select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white">{["Escrita","Análise","Metodologia","Submissão"].map((c) => <option key={c}>{c}</option>)}</select></div>
                <div className="sm:col-span-2"><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Descrição breve</label><input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="O que esse prompt produz..." /></div>
                <div className="sm:col-span-2"><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Texto do Prompt</label><textarea rows={5} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white font-mono" placeholder="Use [VARIÁVEL] para campos que o usuário deve preencher..." /></div>
              </div>
              <button className="flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"><Save className="w-4 h-4" /> Salvar Prompt</button>
            </div>
          )}

          {editorTab === "livro" && (
            <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 space-y-4">
              <div className="text-sm font-semibold text-slate-800 flex items-center gap-2"><BookMarked className="w-4 h-4 text-rose-600" strokeWidth={1.5} /> Adicionar / Editar Livro</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2"><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Título</label><input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="Ex: Principles of Structural Equation Modeling" /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Autor</label><input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="Nome do(s) autor(es)" /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Editora</label><input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="Ex: Guilford Press" /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Ano</label><input type="number" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white" placeholder="2024" /></div>
                <div><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Categoria</label><select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white">{["quantitativa","qualitativa","psicometria","escrita","filosofia","ia-pesquisa"].map((c) => <option key={c}>{c}</option>)}</select></div>
                <div className="sm:col-span-2"><label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 block">Contexto / Descrição</label><textarea rows={3} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-white" placeholder="Breve descrição do livro e por que é referência..." /></div>
              </div>
              <button className="flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"><Save className="w-4 h-4" /> Salvar Livro</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── LOGIN PAGE ────────────────────────────────────────────────────────────

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    if (!email || !senha) { setErro("Preencha e-mail e senha."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-700/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-indigo-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-slate-800/40 blur-[80px]" />

      <div className="relative w-full max-w-md px-6">
        {/* Logo / brand */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_8px_30px_rgba(59,130,246,0.4)] mb-4">
            <Star className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Pesquisa <span className="text-blue-400">passo a passo</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">Acesse sua conta para continuar</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
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
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>

            {/* Senha */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type={showSenha ? "text" : "password"}
                  autoComplete="current-password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowSenha((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showSenha ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Erro */}
            {erro && (
              <p className="text-rose-400 text-xs flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> {erro}
              </p>
            )}

            {/* Esqueci senha */}
            <div className="flex justify-end">
              <button type="button" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                Esqueci minha senha
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60 text-white font-semibold py-3 rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_28px_rgba(59,130,246,0.5)] transition-all duration-200 fx-tap"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Entrando...
                </>
              ) : "Entrar"}
            </button>
          </form>
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
  nome: "Sandro Alves de Medeiros",
  email: "sandro.medeiros@email.com",
  bio: "Pesquisador em Metodologia Quantitativa, entusiasta de análise de dados e educação em ciências sociais aplicadas.",
  endereco: "São Paulo, SP — Brasil",
  ocupacao: "Professor & Pesquisador",
  avatar: "SA",
};

function PerfilPage({ fotoUrl, bannerUrl, onUpdateFoto, onUpdateBanner }: {
  fotoUrl: string;
  bannerUrl: string;
  onUpdateFoto: (url: string) => void;
  onUpdateBanner: (url: string) => void;
}) {
  const [editando, setEditando] = useState(false);
  const [dados, setDados] = useState(perfilInicial);
  const [rascunho, setRascunho] = useState(perfilInicial);
  const fotoInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  const salvar = () => { setDados(rascunho); setEditando(false); };
  const cancelar = () => { setRascunho(dados); setEditando(false); };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) onUpdateFoto(URL.createObjectURL(f));
  };
  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) onUpdateBanner(URL.createObjectURL(f));
  };

  const Field = ({ label, value, field, multiline = false }: { label: string; value: string; field: keyof typeof perfilInicial; multiline?: boolean }) => (
    <div className="space-y-1">
      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</label>
      {editando ? (
        multiline ? (
          <textarea
            rows={3}
            value={rascunho[field]}
            onChange={(e) => setRascunho((p) => ({ ...p, [field]: e.target.value }))}
            className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none bg-white"
          />
        ) : (
          <input
            value={rascunho[field]}
            onChange={(e) => setRascunho((p) => ({ ...p, [field]: e.target.value }))}
            className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 bg-white"
          />
        )
      ) : (
        <p className="text-sm text-slate-700 py-2.5 px-3.5 bg-slate-50 rounded-xl border border-slate-100">{value}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Banner + avatar */}
      <div className="relative rounded-2xl overflow-visible">
        {/* Banner clicável */}
        <div className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer" onClick={() => bannerInputRef.current?.click()}>
          <img src={bannerUrl} alt="Capa do perfil" className="w-full h-full object-cover" />
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
              <button onClick={salvar} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-slate-800 hover:bg-slate-100 fx-tap">
                <Save className="w-3.5 h-3.5 inline mr-1" />Salvar
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
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Cursos concluídos", value: "7", color: "text-emerald-600" },
          { label: "Certificados", value: "4", color: "text-blue-600" },
          { label: "XP acumulado", value: "2.840", color: "text-indigo-600" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Editable fields */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-1">Informações pessoais</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nome completo" value={dados.nome} field="nome" />
          <Field label="Ocupação" value={dados.ocupacao} field="ocupacao" />
          <Field label="E-mail" value={dados.email} field="email" />
          <Field label="Endereço" value={dados.endereco} field="endereco" />
        </div>
        <Field label="Bio" value={dados.bio} field="bio" multiline />
      </div>

      {/* Badges */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Conquistas</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Primeiro Curso", color: "bg-blue-100 text-blue-700" },
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
  const planoAtual = "consultoria";

  const planos = [
    {
      id: "essencial",
      nome: "Essencial",
      preco: "R$ 97",
      periodo: "/mês",
      desc: "Acesso completo à plataforma de cursos",
      cor: "from-slate-700 to-slate-900",
      badge: null,
      recursos: [
        { texto: "Plataforma de Aulas completa", ok: true },
        { texto: "Livros Metodológicos", ok: true },
        { texto: "GPTs especializados", ok: true },
        { texto: "Biblioteca de Prompts", ok: true },
        { texto: "Certificados de conclusão", ok: true },
        { texto: "Comunidade", ok: true },
        { texto: "Consultoria individual", ok: false },
        { texto: "Aulas particulares", ok: false },
        { texto: "GPTs personalizados para você", ok: false },
        { texto: "Prompts exclusivos por aluno", ok: false },
      ],
    },
    {
      id: "consultoria",
      nome: "Consultoria",
      preco: "R$ 197",
      periodo: "/mês",
      desc: "Tudo do Essencial + consultoria personalizada",
      cor: "from-blue-600 to-indigo-700",
      badge: "Recomendado",
      recursos: [
        { texto: "Plataforma de Aulas completa", ok: true },
        { texto: "Livros Metodológicos", ok: true },
        { texto: "GPTs especializados", ok: true },
        { texto: "Biblioteca de Prompts", ok: true },
        { texto: "Certificados de conclusão", ok: true },
        { texto: "Comunidade", ok: true },
        { texto: "Consultoria individual", ok: true },
        { texto: "Aulas particulares", ok: true },
        { texto: "GPTs personalizados para você", ok: true },
        { texto: "Prompts exclusivos por aluno", ok: true },
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Plano atual banner */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-blue-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
        <div className="pointer-events-none absolute right-20 bottom-0 w-32 h-32 rounded-full bg-blue-400/10 blur-2xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1">Plano atual</p>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Consultoria Individual
          </h2>
          <p className="text-blue-200 text-sm mt-1">Renovação em 15/06/2025 · <span className="text-white font-semibold">R$ 197/mês</span></p>
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
        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">Alterar</button>
      </div>

      {/* Comparação de planos */}
      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-3 px-1">Compare os planos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {planos.map((p) => {
            const ativo = planoAtual === p.id;
            return (
              <div key={p.id} className={`relative rounded-2xl overflow-hidden border-2 ${ativo ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" : "border-slate-200"} bg-white`}>
                {p.badge && (
                  <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide bg-blue-600 text-white px-2 py-0.5 rounded-full">{p.badge}</div>
                )}
                <div className={`bg-gradient-to-br ${p.cor} p-5 text-white`}>
                  <p className="text-sm font-semibold opacity-80">{p.nome}</p>
                  <p className="text-3xl font-bold mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.preco}<span className="text-sm font-normal opacity-70">{p.periodo}</span></p>
                  <p className="text-xs opacity-70 mt-1">{p.desc}</p>
                </div>
                <div className="p-5 space-y-2.5">
                  {p.recursos.map(({ texto, ok }) => (
                    <div key={texto} className="flex items-center gap-2.5 text-xs">
                      <span className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${ok ? "bg-emerald-100" : "bg-slate-100"}`}>
                        {ok ? <Check className="w-2.5 h-2.5 text-emerald-600" strokeWidth={3} /> : <X className="w-2.5 h-2.5 text-slate-400" strokeWidth={3} />}
                      </span>
                      <span className={ok ? "text-slate-700" : "text-slate-400"}>{texto}</span>
                    </div>
                  ))}
                  <div className="pt-3">
                    {ativo ? (
                      <div className="w-full text-center text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-xl py-2.5">Plano atual</div>
                    ) : (
                      <button className="w-full text-xs font-semibold bg-slate-900 text-white rounded-xl py-2.5 hover:bg-slate-800 transition-colors fx-tap">Fazer upgrade</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Histórico */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Histórico de pagamentos</h3>
        <div className="space-y-2">
          {[
            { data: "15/05/2025", valor: "R$ 197,00", status: "Pago" },
            { data: "15/04/2025", valor: "R$ 197,00", status: "Pago" },
            { data: "15/03/2025", valor: "R$ 197,00", status: "Pago" },
          ].map(({ data, valor, status }) => (
            <div key={data} className="flex items-center justify-between text-xs py-2 border-b border-slate-50 last:border-0">
              <span className="text-slate-500">{data}</span>
              <span className="font-semibold text-slate-700">{valor}</span>
              <span className="bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">{status}</span>
            </div>
          ))}
        </div>
      </div>
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
  },
  {
    nome: "Revisor de Escrita Científica",
    desc: "Revisa e melhora sua escrita acadêmica respeitando normas ABNT, APA e estilo científico.",
    cor: "from-violet-500 to-purple-700",
    icone: FileText,
    tags: ["Escrita", "APA", "ABNT"],
  },
  {
    nome: "Gerador de Sintaxe R",
    desc: "Gera scripts R personalizados para suas análises — desde descritivos até modelos de equações estruturais.",
    cor: "from-emerald-500 to-teal-600",
    icone: Code,
    tags: ["R", "Script", "Análise"],
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
  const [tab, setTab] = useState<ConsultoriaTab>("gpts");
  const [promptAberto, setPromptAberto] = useState<(typeof consultoriaPrompts)[0] | null>(null);

  const tabs: { id: ConsultoriaTab; label: string; icon: ElementType }[] = [
    { id: "gpts", label: "GPTs Pessoais", icon: Bot },
    { id: "aulas", label: "Aulas Individuais", icon: CalendarDays },
    { id: "prompts", label: "Prompts Exclusivos", icon: Sparkles },
  ];

  return (
    <div className="space-y-6">
      {/* Hero personalizado */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-blue-700 to-indigo-700 p-6 text-white shadow-lg">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=40')] bg-cover bg-center opacity-10" />
        <div className="pointer-events-none absolute -right-8 -top-8 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-xl font-bold shadow-inner flex-shrink-0">
            SA
          </div>
          <div className="flex-1">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-0.5">Consultoria Individual</p>
            <h2 className="text-xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Olá, Sandro Alves de Medeiros
            </h2>
            <p className="text-blue-200 text-sm mt-0.5">Seu espaço personalizado com conteúdo exclusivo da Dra. Sandri</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "3 GPTs", icon: Bot },
              { label: "4 Aulas", icon: CalendarDays },
              { label: "3 Prompts", icon: Sparkles },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-xl px-3 py-1.5 text-xs font-semibold">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {consultoriaGPTs.map((gpt) => {
            const Icon = gpt.icone;
            return (
              <div key={gpt.nome} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
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
                  <button className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold bg-slate-900 text-white rounded-xl py-2.5 hover:bg-slate-800 transition-colors fx-tap">
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
        <div className="space-y-3">
          {consultoriaAulas.map((a) => (
            <div key={a.titulo} className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-2 self-stretch rounded-full flex-shrink-0 ${a.cor}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{a.titulo}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.duracao}</span>
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {a.data}</span>
                </div>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${a.status === "Assistida" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                {a.status}
              </span>
            </div>
          ))}
          <button className="w-full flex items-center justify-center gap-2 text-sm font-semibold border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl py-4 hover:border-blue-300 hover:text-blue-500 transition-all">
            <PlusCircle className="w-4 h-4" /> Solicitar nova aula
          </button>
        </div>
      )}

      {/* Prompts */}
      {tab === "prompts" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultoriaPrompts.map((p) => (
              <div key={p.titulo} className={`bg-gradient-to-br ${p.cor} border ${p.bordaCor} rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group`} onClick={() => setPromptAberto(p)}>
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm" onClick={() => setPromptAberto(null)}>
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
                <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-800 transition-colors fx-tap">
                  <Copy className="w-4 h-4" /> Copiar prompt
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
  | "admin"
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
  { divider: true },
  { id: "admin", label: "Painel Admin", icon: ShieldCheck },
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
}: {
  active: string;
  setActive: (p: Page) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  onLogout: () => void;
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
              "perfil",
              "assinatura",
            ].includes(item.id)
          ) {
            setActive(item.id as Page);
            setMobileOpen(false);
          }
        }}
        title={collapsed ? item.label : undefined}
        className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left fx-tap transition-[background-color,color,box-shadow] duration-300 ease-out ${isActive ? "bg-blue-600 text-white shadow-[0_6px_20px_rgba(37,99,235,0.35)]" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
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
        className={`flex items-center gap-2 px-3 py-4 border-b border-white/10 ${sidebarCollapsed ? "md:justify-center" : ""} justify-between`}
      >
        {!sidebarCollapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 bg-white/10 border border-white/15 rounded-md flex items-center justify-center backdrop-blur-sm shadow-sm flex-shrink-0">
              <Star className="w-4 h-4 text-white" />
            </div>
            <div
              className="flex flex-col leading-tight min-w-0"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <span className="text-white font-bold text-sm truncate">
                Pesquisa
              </span>
              <span className="text-slate-300 text-[10px] font-medium uppercase tracking-wider truncate">
                passo a passo
              </span>
            </div>
          </div>
        )}
        {sidebarCollapsed && (
          <div className="hidden md:flex w-7 h-7 bg-white/10 border border-white/15 rounded-md items-center justify-center backdrop-blur-sm shadow-sm">
            <Star className="w-4 h-4 text-white" />
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
          className="pointer-events-none absolute left-0 w-[3px] rounded-r-full bg-white"
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
                className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 pt-2 pb-1"
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
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left fx-tap ${isActive ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-white/10 hover:text-white hover:translate-x-1"}`}
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

function Header({ onOpenMenu, currentTitle, fotoUrl }: { onOpenMenu: () => void; currentTitle: string; fotoUrl: string }) {
  const [notif, setNotif] = useState(true);
  return (
    <header className="h-14 bg-white/72 backdrop-blur-xl border-b border-white/70 flex items-center px-3 sm:px-5 gap-2 sm:gap-3 flex-shrink-0">
      {/* Hambúrguer (mobile) */}
      <button
        onClick={onOpenMenu}
        className="md:hidden w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 fx-tap"
        aria-label="Abrir menu"
      >
        <Menu className="w-4 h-4" />
      </button>
      {/* Título da página visível no mobile */}
      <span
        className="md:hidden text-sm font-semibold text-slate-800 truncate"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {currentTitle}
      </span>
      <div className="flex-1" />
      <div className="relative hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
        <input
          className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
          placeholder="Buscar..."
        />
      </div>
      <button
        onClick={() => setNotif(!notif)}
        className="relative w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:scale-105 transition-all fx-tap"
      >
        <Bell className="w-4 h-4" />
        {notif && (
          <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full fx-pulse-soft" />
        )}
      </button>
      <div className="w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden cursor-pointer hover:scale-105 hover:shadow-md fx-tap transition-all flex-shrink-0">
        <img src={fotoUrl} alt="Perfil" className="w-full h-full object-cover" />
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
  admin: {
    title: "Painel de Administração",
    sub: "Assinaturas, receita, parcerias e editor de conteúdo",
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

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState<Page>("plataforma");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [perfilFoto, setPerfilFoto] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80");
  const [perfilBanner, setPerfilBanner] = useState("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=400&fit=crop&q=80");

  if (!loggedIn) return <LoginPage onLogin={() => setLoggedIn(true)} />;

  const renderPage = () => {
    if (page === "plataforma") return <PlatformPage />;
    if (page === "parceria") return <ParceriaPage />;
    if (page === "livros") return <LivrosPage />;
    if (page === "certificados") return <CertificadosPage />;
    if (page === "atendimento") return <AtendimentoPage />;
    if (page === "consultoria") return <ConsultoriaPage />;
    if (page === "gpts") return <GPTsPage />;
    if (page === "biblioteca") return <BibliotecaPage />;
    if (page === "comunidade") return <ComunidadePage />;
    if (page === "admin") return <AdminPage />;
    if (page === "perfil") return <PerfilPage fotoUrl={perfilFoto} bannerUrl={perfilBanner} onUpdateFoto={setPerfilFoto} onUpdateBanner={setPerfilBanner} />;
    if (page === "assinatura") return <AssinaturaPage />;
    return null;
  };

  const { title, sub } = pageTitles[page];

  return (
    <div className="app-shell flex h-screen overflow-hidden bg-transparent relative isolate">
      <Sidebar
        active={page}
        setActive={setPage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onLogout={() => setLoggedIn(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-white/65 backdrop-blur-xl">
        <Header onOpenMenu={() => setMobileOpen(true)} currentTitle={title} fotoUrl={perfilFoto} />
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