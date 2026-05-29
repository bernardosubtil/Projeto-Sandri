-- ============================================================
-- MIGRATION 006: Tabela de Lives / Aulas ao Vivo
-- Execute no Supabase Dashboard > SQL Editor
-- ============================================================

CREATE TABLE public.lives (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo          text        NOT NULL,
  descricao       text,
  data_inicio     timestamptz NOT NULL,
  duracao_min     integer     NOT NULL DEFAULT 90,
  url_acesso      text,
  url_gravacao    text,
  thumbnail_url   text,
  status          text        NOT NULL DEFAULT 'agendada'
                              CHECK (status IN ('agendada', 'ao_vivo', 'encerrada')),
  plano_minimo    text        CHECK (plano_minimo IN ('essencial', 'consultoria')),
  publicado       boolean     NOT NULL DEFAULT false,
  criado_em       timestamptz NOT NULL DEFAULT now(),
  atualizado_em   timestamptz NOT NULL DEFAULT now()
);

COMMENT ON COLUMN public.lives.url_acesso    IS 'Link Zoom/Google Meet para entrar na live';
COMMENT ON COLUMN public.lives.url_gravacao  IS 'Link da gravação no YouTube após a live';
COMMENT ON COLUMN public.lives.plano_minimo  IS 'NULL = todos os planos; essencial = mínimo essencial; consultoria = apenas consultoria';
COMMENT ON COLUMN public.lives.publicado     IS 'Se false, não aparece para alunos';

CREATE TRIGGER trg_lives_updated_at
  BEFORE UPDATE ON public.lives
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX idx_lives_data    ON public.lives(data_inicio DESC);
CREATE INDEX idx_lives_status  ON public.lives(status);
CREATE INDEX idx_lives_pub     ON public.lives(publicado);

-- RLS
ALTER TABLE public.lives ENABLE ROW LEVEL SECURITY;

-- Alunos: só veem lives publicadas
CREATE POLICY "lives_select_aluno" ON public.lives
  FOR SELECT USING (publicado = true);

-- Admin: tudo
CREATE POLICY "lives_all_admin" ON public.lives
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.usuarios WHERE id = auth.uid() AND role = 'admin')
  );

-- Atualiza status automaticamente baseado na data
-- (Supabase pode rodar isso via cron ou pg_cron, por ora o status é manual)
