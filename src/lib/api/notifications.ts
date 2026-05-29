import { supabase } from "../supabase";

type NotifyPayload =
  | { type: "atendimento"; nome: string; email: string; assunto: string; mensagem: string }
  | { type: "parceria"; nome: string; email: string; instituicao: string; mensagem: string }
  | { type: "comunidade_post"; nome: string; canal: string; conteudo: string };

export async function notifyAdmin(payload: NotifyPayload): Promise<void> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return;

  const res = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/notify-admin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(payload),
    },
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.warn("Notificação não enviada:", err);
  }
}
