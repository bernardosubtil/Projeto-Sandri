import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "../lib/supabase";
import type { Session } from "@supabase/supabase-js";
import type { Usuario, Plano, Assinatura, AssinaturaComPlano } from "../types/database.types";

interface AuthContextType {
  session: Session | null;
  usuario: Usuario | null;
  assinatura: AssinaturaComPlano | null;
  plano: "essencial" | "consultoria" | null;
  isAdmin: boolean;
  temPlano: boolean;
  temConsultoria: boolean;
  loading: boolean;
  sendOtp: (email: string) => Promise<void>;
  verifyOtp: (email: string, token: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshUsuario: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [assinatura, setAssinatura] = useState<AssinaturaComPlano | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Timeout de segurança: se nada resolver em 5s, força loading=false
    const timeout = setTimeout(() => {
      if (mounted) setLoading(false);
    }, 5000);

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      if (!mounted) return;
      clearTimeout(timeout);
      setSession(s);
      if (s) {
        fetchTudo(s.user.id);
      } else {
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        if (!mounted) return;
        clearTimeout(timeout);
        setSession(newSession);
        if (newSession) {
          await fetchTudo(newSession.user.id).catch(() => setLoading(false));
        } else {
          setUsuario(null);
          setAssinatura(null);
          setLoading(false);
        }
      }
    );

    return () => {
      mounted = false;
      clearTimeout(timeout);
      subscription.unsubscribe();
    };
  }, []);

  async function fetchTudo(userId: string) {
    try {
      const [{ data: usr }, { data: ass }] = await Promise.all([
        supabase.from("usuarios").select("*").eq("id", userId).single(),
        supabase
          .from("assinaturas")
          .select("*, planos(*)")
          .eq("usuario_id", userId)
          .eq("status", "ativa")
          .order("criado_em", { ascending: false })
          .limit(1)
          .maybeSingle(),
      ]);
      setUsuario(usr ?? null);
      setAssinatura(ass as AssinaturaComPlano | null);
    } finally {
      setLoading(false);
    }
  }

  async function sendOtp(email: string) {
    const res = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-otp-gated`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      },
    );
    const json = await res.json();
    if (!res.ok || json.error) throw new Error(json.error || "Erro ao enviar código");
  }

  async function verifyOtp(email: string, token: string) {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });
    if (error) throw error;
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function refreshUsuario() {
    if (session) await fetchTudo(session.user.id);
  }

  const planoNome = (assinatura?.planos?.nome ?? null) as "essencial" | "consultoria" | null;

  return (
    <AuthContext.Provider
      value={{
        session,
        usuario,
        assinatura,
        plano: planoNome,
        isAdmin: usuario?.role === "admin",
        temPlano: !!assinatura || usuario?.role === "admin",
        temConsultoria: planoNome === "consultoria" || usuario?.role === "admin",
        loading,
        sendOtp,
        verifyOtp,
        signOut,
        refreshUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}
