import { supabase } from "../supabase";

export type Live = {
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

export type LiveInsert = Omit<Live, "id" | "criado_em" | "atualizado_em">;
export type LiveUpdate = Partial<LiveInsert>;

/** Alunos: lista lives publicadas */
export function getLives() {
  return supabase
    .from("lives")
    .select("*")
    .eq("publicado", true)
    .order("data_inicio", { ascending: true });
}

/** Admin: lista todas */
export function getLivesAdmin() {
  return supabase
    .from("lives")
    .select("*")
    .order("data_inicio", { ascending: false });
}

export function getLive(id: string) {
  return supabase.from("lives").select("*").eq("id", id).single();
}

export function createLive(data: LiveInsert) {
  return supabase.from("lives").insert(data).select().single();
}

export function updateLive(id: string, data: LiveUpdate) {
  return supabase.from("lives").update(data).eq("id", id).select().single();
}

export function deleteLive(id: string) {
  return supabase.from("lives").delete().eq("id", id);
}
