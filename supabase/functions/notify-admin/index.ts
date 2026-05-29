import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ADMIN_EMAIL = "sandripesquisa@gmail.com";

type NotifyPayload =
  | { type: "atendimento"; nome: string; email: string; assunto: string; mensagem: string }
  | { type: "parceria"; nome: string; email: string; instituicao: string; mensagem: string }
  | { type: "comunidade_post"; nome: string; canal: string; conteudo: string };

function buildEmail(payload: NotifyPayload): { subject: string; html: string } {
  const base = (titulo: string, corpo: string) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"/><style>
  body{background:#f4f1e8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:0}
  .wrap{max-width:560px;margin:40px auto;padding:0 16px}
  .card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(10,10,58,.08)}
  .header{background:#0a0a3a;padding:24px 32px;display:flex;align-items:center;gap:12px}
  .logo-text{color:#f9f3dd;font-size:14px;font-weight:600}
  .logo-text span{display:block;color:#6578c4;font-size:11px;font-weight:400;text-transform:uppercase;letter-spacing:.1em}
  .body{padding:32px}
  .title{font-size:20px;font-weight:700;color:#0a0a3a;margin-bottom:8px}
  .subtitle{font-size:14px;color:#6b6b8f;margin-bottom:24px}
  .field{margin-bottom:16px}
  .field-label{font-size:11px;font-weight:700;color:#6578c4;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px}
  .field-value{font-size:14px;color:#1e1e4a;background:#f4f1e8;border-radius:8px;padding:10px 14px}
  .accent{height:4px;background:linear-gradient(90deg,#6578c4 0%,#0a0a3a 100%)}
  .footer{background:#faf8f2;border-top:1px solid #f0ece0;padding:16px 32px;font-size:12px;color:#b0aac8;text-align:center}
</style></head>
<body>
<div class="wrap"><div class="card">
  <div class="accent"></div>
  <div class="header">
    <svg width="28" height="28" viewBox="0 0 666.18 666.15" xmlns="http://www.w3.org/2000/svg">
      <path d="M666.18,0v444.63h-221.52v-223.11h-223.11V89.56C221.54,40.1,261.64,0,311.1,0h355.07Z" fill="#6578c4"/>
      <path d="M444.66,444.63v131.96c0,49.46-40.1,89.56-89.56,89.56H.02V221.52h221.54v223.11h223.11Z" fill="#6578c4"/>
      <rect x="221.54" y="221.52" width="223.11" height="223.11" fill="#f9f3dd"/>
    </svg>
    <div class="logo-text">Pesquisa Passo a Passo<span>com Dra. Sandri</span></div>
  </div>
  <div class="body">
    <div class="title">${titulo}</div>
    <div class="subtitle">Nova notificação da plataforma — ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</div>
    ${corpo}
  </div>
  <div class="footer">Pesquisa Passo a Passo &mdash; Dra. Sandri &copy; ${new Date().getFullYear()}</div>
</div></div>
</body></html>`;

  if (payload.type === "atendimento") {
    return {
      subject: `📩 Novo chamado de suporte — ${payload.assunto}`,
      html: base(
        "Novo chamado de suporte",
        `
        <div class="field"><div class="field-label">Aluno</div><div class="field-value">${payload.nome}</div></div>
        <div class="field"><div class="field-label">E-mail</div><div class="field-value">${payload.email}</div></div>
        <div class="field"><div class="field-label">Assunto</div><div class="field-value">${payload.assunto}</div></div>
        <div class="field"><div class="field-label">Mensagem</div><div class="field-value">${payload.mensagem}</div></div>
        `,
      ),
    };
  }

  if (payload.type === "parceria") {
    return {
      subject: `🤝 Nova solicitação de parceria — ${payload.instituicao}`,
      html: base(
        "Nova solicitação de parceria",
        `
        <div class="field"><div class="field-label">Responsável</div><div class="field-value">${payload.nome}</div></div>
        <div class="field"><div class="field-label">E-mail</div><div class="field-value">${payload.email}</div></div>
        <div class="field"><div class="field-label">Instituição</div><div class="field-value">${payload.instituicao}</div></div>
        <div class="field"><div class="field-label">Mensagem</div><div class="field-value">${payload.mensagem}</div></div>
        `,
      ),
    };
  }

  // comunidade_post
  return {
    subject: `💬 Novo post na comunidade — #${(payload as { canal: string }).canal}`,
    html: base(
      "Novo post na comunidade",
      `
      <div class="field"><div class="field-label">Aluno</div><div class="field-value">${payload.nome}</div></div>
      <div class="field"><div class="field-label">Canal</div><div class="field-value">#${(payload as { canal: string }).canal}</div></div>
      <div class="field"><div class="field-label">Conteúdo</div><div class="field-value">${(payload as { conteudo: string }).conteudo}</div></div>
      `,
    ),
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    // Verifica autenticação
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 401, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 401, headers: corsHeaders });
    }

    const payload: NotifyPayload = await req.json();
    const { subject, html } = buildEmail(payload);

    const gmailUser = Deno.env.get("GMAIL_USER")!;
    const gmailPass = Deno.env.get("GMAIL_APP_PASSWORD")!;

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: { username: gmailUser, password: gmailPass },
      },
    });

    await client.send({
      from: `Plataforma Sandri <${gmailUser}>`,
      to: ADMIN_EMAIL,
      subject,
      html,
    });

    await client.close();

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Erro ao enviar notificação:", e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
