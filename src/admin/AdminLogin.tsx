import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function AdminLogin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const { error: signInError, isAdmin } = await signIn(email, password);

    if (signInError) {
      setError("Giriş başarısız. E-posta veya şifre hatalı.");
      setIsSubmitting(false);
      return;
    }

    if (isAdmin) {
      navigate("/admin/panel", { replace: true });
    } else {
      setError("Bu hesap admin yetkisine sahip değil.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-cream p-4">
      <div className="w-full max-w-md rounded-3xl border border-gold/20 bg-parchment p-6 shadow-soft sm:p-8">
        <h1 className="type-section-title mb-2 text-center text-2xl">
          Admin Girişi
        </h1>
        <p className="type-body mb-6 text-center text-espresso/60">
          Avlu Dessert menü yönetimi
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="type-label mb-1 block">
              E-posta
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-gold/20 bg-cream px-4 py-3 text-espresso outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <div>
            <label htmlFor="password" className="type-label mb-1 block">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-gold/20 bg-cream px-4 py-3 text-espresso outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-espresso px-6 py-3 font-medium text-cream transition hover:bg-espresso/90 disabled:opacity-50"
          >
            {isSubmitting ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}
