// Tipos TypeScript gerados manualmente a partir do schema Supabase.
// Para regenerar automaticamente: npx supabase gen types typescript --linked > src/types/database.types.ts

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      usuarios: {
        Row: {
          id: string;
          nome: string | null;
          email: string;
          foto_url: string | null;
          biografia: string | null;
          ocupacao: string | null;
          role: "aluno" | "admin";
          xp: number;
          stripe_customer_id: string | null;
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id: string;
          nome?: string | null;
          email: string;
          foto_url?: string | null;
          biografia?: string | null;
          ocupacao?: string | null;
          role?: "aluno" | "admin";
          xp?: number;
          criado_em?: string;
          atualizado_em?: string;
        };
        Update: {
          nome?: string | null;
          foto_url?: string | null;
          biografia?: string | null;
          ocupacao?: string | null;
          role?: "aluno" | "admin";
          xp?: number;
          stripe_customer_id?: string | null;
          atualizado_em?: string;
        };
      };

      enderecos: {
        Row: {
          id: string;
          usuario_id: string;
          rua: string | null;
          cidade: string | null;
          estado: string | null;
          cep: string | null;
          pais: string;
          criado_em: string;
        };
        Insert: {
          id?: string;
          usuario_id: string;
          rua?: string | null;
          cidade?: string | null;
          estado?: string | null;
          cep?: string | null;
          pais?: string;
        };
        Update: {
          rua?: string | null;
          cidade?: string | null;
          estado?: string | null;
          cep?: string | null;
          pais?: string;
        };
      };

      planos: {
        Row: {
          id: string;
          nome: string;
          descricao: string | null;
          preco_mensal: number | null;
          ativo: boolean;
          stripe_price_id: string | null;
          criado_em: string;
        };
        Insert: {
          id?: string;
          nome: string;
          descricao?: string | null;
          preco_mensal?: number | null;
          ativo?: boolean;
        };
        Update: {
          nome?: string;
          descricao?: string | null;
          preco_mensal?: number | null;
          ativo?: boolean;
        };
      };

      assinaturas: {
        Row: {
          id: string;
          usuario_id: string;
          plano_id: string;
          status: "ativa" | "cancelada" | "expirada" | "pendente" | "inadimplente";
          stripe_subscription_id: string | null;
          stripe_customer_id: string | null;
          periodo_atual_inicio: string | null;
          periodo_atual_fim: string | null;
          data_inicio: string;
          data_fim: string | null;
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          usuario_id: string;
          plano_id: string;
          status?: "ativa" | "cancelada" | "expirada" | "pendente" | "inadimplente";
          stripe_subscription_id?: string | null;
          stripe_customer_id?: string | null;
          periodo_atual_inicio?: string | null;
          periodo_atual_fim?: string | null;
          data_inicio?: string;
          data_fim?: string | null;
        };
        Update: {
          plano_id?: string;
          status?: "ativa" | "cancelada" | "expirada" | "pendente" | "inadimplente";
          stripe_subscription_id?: string | null;
          stripe_customer_id?: string | null;
          periodo_atual_inicio?: string | null;
          periodo_atual_fim?: string | null;
          data_fim?: string | null;
        };
      };

      cursos: {
        Row: {
          id: string;
          titulo: string;
          descricao: string | null;
          thumbnail_url: string | null;
          materia: string | null;
          nivel: "Iniciante" | "Intermediário" | "Avançado" | null;
          duracao_total_minutos: number | null;
          publicado: boolean;
          ordem: number | null;
          plano_minimo: "essencial" | "consultoria";
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          titulo: string;
          descricao?: string | null;
          thumbnail_url?: string | null;
          materia?: string | null;
          nivel?: "Iniciante" | "Intermediário" | "Avançado" | null;
          duracao_total_minutos?: number | null;
          publicado?: boolean;
          ordem?: number | null;
          plano_minimo?: "essencial" | "consultoria";
        };
        Update: {
          titulo?: string;
          descricao?: string | null;
          thumbnail_url?: string | null;
          materia?: string | null;
          nivel?: "Iniciante" | "Intermediário" | "Avançado" | null;
          duracao_total_minutos?: number | null;
          publicado?: boolean;
          ordem?: number | null;
          plano_minimo?: "essencial" | "consultoria";
        };
      };

      modulos: {
        Row: {
          id: string;
          curso_id: string;
          titulo: string;
          ordem: number;
          criado_em: string;
        };
        Insert: {
          id?: string;
          curso_id: string;
          titulo: string;
          ordem: number;
        };
        Update: {
          titulo?: string;
          ordem?: number;
        };
      };

      aulas: {
        Row: {
          id: string;
          modulo_id: string;
          titulo: string;
          descricao: string | null;
          video_url: string | null;
          duracao_segundos: number | null;
          ordem: number;
          publicada: boolean;
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          modulo_id: string;
          titulo: string;
          descricao?: string | null;
          video_url?: string | null;
          duracao_segundos?: number | null;
          ordem: number;
          publicada?: boolean;
        };
        Update: {
          titulo?: string;
          descricao?: string | null;
          video_url?: string | null;
          duracao_segundos?: number | null;
          ordem?: number;
          publicada?: boolean;
        };
      };

      progresso_aulas: {
        Row: {
          id: string;
          usuario_id: string;
          aula_id: string;
          concluida: boolean;
          posicao_segundos: number;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          usuario_id: string;
          aula_id: string;
          concluida?: boolean;
          posicao_segundos?: number;
        };
        Update: {
          concluida?: boolean;
          posicao_segundos?: number;
        };
      };

      livros: {
        Row: {
          id: string;
          titulo: string;
          area: string | null;
          pdf_url: string | null;
          capa_url: string | null;
          aula_id: string | null;
          publicado: boolean;
          criado_em: string;
        };
        Insert: {
          id?: string;
          titulo: string;
          area?: string | null;
          pdf_url?: string | null;
          capa_url?: string | null;
          aula_id?: string | null;
          publicado?: boolean;
        };
        Update: {
          titulo?: string;
          area?: string | null;
          pdf_url?: string | null;
          capa_url?: string | null;
          aula_id?: string | null;
          publicado?: boolean;
        };
      };

      prompts: {
        Row: {
          id: string;
          categoria: string | null;
          titulo: string;
          descricao: string | null;
          conteudo: string;
          publicado: boolean;
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          categoria?: string | null;
          titulo: string;
          descricao?: string | null;
          conteudo: string;
          publicado?: boolean;
        };
        Update: {
          categoria?: string | null;
          titulo?: string;
          descricao?: string | null;
          conteudo?: string;
          publicado?: boolean;
        };
      };

      gpts: {
        Row: {
          id: string;
          categoria: string | null;
          titulo: string;
          descricao: string | null;
          url: string | null;
          livro_id: string | null;
          plano_minimo: "essencial" | "consultoria";
          publicado: boolean;
          criado_em: string;
        };
        Insert: {
          id?: string;
          categoria?: string | null;
          titulo: string;
          descricao?: string | null;
          url?: string | null;
          livro_id?: string | null;
          plano_minimo?: "essencial" | "consultoria";
          publicado?: boolean;
        };
        Update: {
          categoria?: string | null;
          titulo?: string;
          descricao?: string | null;
          url?: string | null;
          livro_id?: string | null;
          plano_minimo?: "essencial" | "consultoria";
          publicado?: boolean;
        };
      };

      comunidade_posts: {
        Row: {
          id: string;
          usuario_id: string;
          conteudo: string | null;
          imagem_url: string | null;
          documento_url: string | null;
          tags: string[];
          canal: string;
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          usuario_id: string;
          conteudo?: string | null;
          imagem_url?: string | null;
          documento_url?: string | null;
          tags?: string[];
          canal?: string;
        };
        Update: {
          conteudo?: string | null;
          imagem_url?: string | null;
          documento_url?: string | null;
          tags?: string[];
          canal?: string;
        };
      };

      comunidade_comentarios: {
        Row: {
          id: string;
          post_id: string;
          usuario_id: string;
          conteudo: string;
          criado_em: string;
        };
        Insert: {
          id?: string;
          post_id: string;
          usuario_id: string;
          conteudo: string;
        };
        Update: {
          conteudo?: string;
        };
      };

      comunidade_likes: {
        Row: {
          usuario_id: string;
          post_id: string;
          criado_em: string;
        };
        Insert: {
          usuario_id: string;
          post_id: string;
        };
        Update: never;
      };

      conquistas: {
        Row: {
          id: string;
          nome: string;
          descricao: string | null;
          icone_url: string | null;
          tipo: string | null;
          xp_recompensa: number;
          criado_em: string;
        };
        Insert: {
          id?: string;
          nome: string;
          descricao?: string | null;
          icone_url?: string | null;
          tipo?: string | null;
          xp_recompensa?: number;
        };
        Update: {
          nome?: string;
          descricao?: string | null;
          icone_url?: string | null;
          tipo?: string | null;
          xp_recompensa?: number;
        };
      };

      usuario_conquistas: {
        Row: {
          usuario_id: string;
          conquista_id: string;
          obtida_em: string;
        };
        Insert: {
          usuario_id: string;
          conquista_id: string;
          obtida_em?: string;
        };
        Update: never;
      };

      certificados: {
        Row: {
          id: string;
          usuario_id: string;
          curso_id: string;
          emitido_em: string;
          pdf_url: string | null;
          codigo_verificacao: string;
        };
        Insert: {
          id?: string;
          usuario_id: string;
          curso_id: string;
          emitido_em?: string;
          pdf_url?: string | null;
        };
        Update: {
          pdf_url?: string | null;
        };
      };

      atendimento: {
        Row: {
          id: string;
          usuario_id: string;
          assunto: string;
          mensagem: string;
          status: "aberto" | "em_andamento" | "resolvido" | "fechado";
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          usuario_id: string;
          assunto: string;
          mensagem: string;
          status?: "aberto" | "em_andamento" | "resolvido" | "fechado";
        };
        Update: {
          status?: "aberto" | "em_andamento" | "resolvido" | "fechado";
        };
      };

      atendimento_respostas: {
        Row: {
          id: string;
          ticket_id: string;
          usuario_id: string;
          mensagem: string;
          criado_em: string;
        };
        Insert: {
          id?: string;
          ticket_id: string;
          usuario_id: string;
          mensagem: string;
        };
        Update: never;
      };

      lives: {
        Row: {
          id: string;
          titulo: string;
          descricao: string | null;
          data_inicio: string;
          duracao_min: number;
          url_acesso: string | null;
          url_gravacao: string | null;
          thumbnail_url: string | null;
          status: "agendada" | "ao_vivo" | "encerrada";
          plano_minimo: "essencial" | "consultoria" | null;
          publicado: boolean;
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          titulo: string;
          descricao?: string | null;
          data_inicio: string;
          duracao_min?: number;
          url_acesso?: string | null;
          url_gravacao?: string | null;
          thumbnail_url?: string | null;
          status?: "agendada" | "ao_vivo" | "encerrada";
          plano_minimo?: "essencial" | "consultoria" | null;
          publicado?: boolean;
        };
        Update: {
          titulo?: string;
          descricao?: string | null;
          data_inicio?: string;
          duracao_min?: number;
          url_acesso?: string | null;
          url_gravacao?: string | null;
          thumbnail_url?: string | null;
          status?: "agendada" | "ao_vivo" | "encerrada";
          plano_minimo?: "essencial" | "consultoria" | null;
          publicado?: boolean;
        };
      };

      parcerias: {
        Row: {
          id: string;
          nome: string;
          instituicao: string | null;
          cargo: string | null;
          plano: string | null;
          vagas: number | null;
          email: string | null;
          telefone: string | null;
          mensagem: string | null;
          status: "pendente" | "ativa" | "inativa";
          criado_em: string;
          atualizado_em: string;
        };
        Insert: {
          id?: string;
          nome: string;
          instituicao?: string | null;
          cargo?: string | null;
          plano?: string | null;
          vagas?: number | null;
          email?: string | null;
          telefone?: string | null;
          mensagem?: string | null;
        };
        Update: {
          status?: "pendente" | "ativa" | "inativa";
          vagas?: number | null;
        };
      };

      sugestoes: {
        Row: {
          id: string;
          usuario_id: string;
          titulo: string;
          descricao: string | null;
          status: "em_analise" | "planejado" | "concluido" | "rejeitado";
          criado_em: string;
        };
        Insert: {
          id?: string;
          usuario_id: string;
          titulo: string;
          descricao?: string | null;
          status?: "em_analise" | "planejado" | "concluido" | "rejeitado";
        };
        Update: {
          status?: "em_analise" | "planejado" | "concluido" | "rejeitado";
        };
      };

      sugestoes_votos: {
        Row: {
          usuario_id: string;
          sugestao_id: string;
          criado_em: string;
        };
        Insert: {
          usuario_id: string;
          sugestao_id: string;
        };
        Update: never;
      };
    };

    Functions: {
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
    };

    Enums: Record<string, never>;
  };
}

// ─── Aliases convenientes ─────────────────────────────────────────────────────
type Tables = Database["public"]["Tables"];

export type Usuario        = Tables["usuarios"]["Row"];
export type Endereco       = Tables["enderecos"]["Row"];
export type Plano          = Tables["planos"]["Row"];
export type Assinatura     = Tables["assinaturas"]["Row"];
export type Curso          = Tables["cursos"]["Row"];
export type Modulo         = Tables["modulos"]["Row"];
export type Aula           = Tables["aulas"]["Row"];
export type ProgressoAula  = Tables["progresso_aulas"]["Row"];
export type Livro          = Tables["livros"]["Row"];
export type Prompt         = Tables["prompts"]["Row"];
export type Gpt            = Tables["gpts"]["Row"];
export type Post           = Tables["comunidade_posts"]["Row"];
export type Comentario     = Tables["comunidade_comentarios"]["Row"];
export type Like           = Tables["comunidade_likes"]["Row"];
export type Conquista      = Tables["conquistas"]["Row"];
export type Certificado    = Tables["certificados"]["Row"];
export type Ticket         = Tables["atendimento"]["Row"];
export type Resposta       = Tables["atendimento_respostas"]["Row"];
export type Parceria       = Tables["parcerias"]["Row"];
export type Sugestao       = Tables["sugestoes"]["Row"];

// Tipos compostos usados na UI
export type CursoComModulos = Curso & {
  modulos: (Modulo & { aulas: Aula[] })[];
};

export type PostComAutor = Post & {
  usuarios: Pick<Usuario, "id" | "nome" | "foto_url">;
  comunidade_comentarios: Comentario[];
  comunidade_likes: Like[];
};

export type AssinaturaComPlano = Assinatura & { planos: Plano };
