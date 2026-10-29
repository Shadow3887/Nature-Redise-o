
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  LoaderCircle,
  Leaf
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../supabase/client";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // INICIAR SESIÓN CON CORREO Y CONTRASEÑA
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password
      });

      if (error) throw error;

      navigate("/dashboard", { replace: true });
    } catch (error) {
      setErrorMessage(
        error.message === "Invalid login credentials"
          ? "Correo o contraseña incorrectos."
          : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // INICIAR SESIÓN CON GOOGLE
  const handleGoogleLogin = async () => {
    setErrorMessage("");
    setGoogleLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) throw error;
    } catch (error) {
      setErrorMessage(error.message);
      setGoogleLoading(false);
    }
  };

  return (
    <section
      className="relative min-h-dvh flex items-center
      justify-center bg-[#07110c] overflow-hidden
      px-4 sm:px-6 py-10"
    >
      {/* EFECTOS DE FONDO */}
      <div
        className="absolute top-[-100px] left-[-100px]
        w-72 h-72 bg-green-500/10
        rounded-full blur-3xl pointer-events-none"
      />

      <div
        className="absolute bottom-[-100px] right-[-100px]
        w-80 h-80 bg-emerald-500/10
        rounded-full blur-3xl pointer-events-none"
      />

      {/* TARJETA PRINCIPAL */}
      <div
        className="relative z-10 w-full max-w-md
        bg-[#0d1b13]/95
        border border-green-500/20
        rounded-3xl shadow-2xl
        shadow-green-950/30
        p-6 sm:p-9"
      >
        {/* REGRESAR AL INICIO */}
        <Link
          to="/"
          className="inline-flex items-center gap-2
          text-gray-400 hover:text-green-400
          text-sm transition-colors mb-6"
        >
          <ArrowLeft size={17} />
          Volver al inicio
        </Link>

        {/* LOGO CIRCULAR */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="relative w-28 h-28 sm:w-32 sm:h-32
            rounded-full overflow-hidden
            border-4 border-green-500/60
            shadow-lg shadow-green-500/20
            bg-[#07110c]
            hover:scale-110 hover:border-green-400
            hover:shadow-green-500/40
            transition-all duration-300 mb-5"
          >
            <img
              src="/img/Nature Defender.png"
              alt="Logo de Nature Defender"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h1
            className="text-2xl sm:text-3xl
            font-extrabold text-white text-center"
          >
            Bienvenido de{" "}
            <span className="text-green-400">nuevo</span>
          </h1>

          <p className="text-gray-400 text-sm text-center mt-3">
            Inicia sesión y continúa tu aventura.
          </p>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* CORREO ELECTRÓNICO */}
          <div>
            <label
              htmlFor="login-email"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Correo electrónico
            </label>

            <div className="relative">
              <Mail
                size={19}
                className="absolute left-4 top-1/2
                -translate-y-1/2 text-gray-500"
              />

              <input
                id="login-email"
                type="email"
                required
                autoComplete="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/30
                border border-green-900/60
                rounded-xl py-3.5 pl-12 pr-4
                text-white placeholder:text-gray-600
                outline-none focus:border-green-400
                focus:ring-2 focus:ring-green-500/10
                transition-all"
              />
            </div>
          </div>

          {/* CONTRASEÑA */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="login-password"
                className="text-gray-300 text-sm font-medium"
              >
                Contraseña
              </label>

              <Link
                to="/forgot-password"
                className="text-green-400 text-xs sm:text-sm
                hover:text-green-300 transition"
              >
                ¿La olvidaste?
              </Link>
            </div>

            <div className="relative">
              <Lock
                size={19}
                className="absolute left-4 top-1/2
                -translate-y-1/2 text-gray-500"
              />

              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/30
                border border-green-900/60
                rounded-xl py-3.5 pl-12 pr-12
                text-white placeholder:text-gray-600
                outline-none focus:border-green-400
                focus:ring-2 focus:ring-green-500/10
                transition-all"
              />

              {/* MOSTRAR / OCULTAR CONTRASEÑA */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword
                    ? "Ocultar contraseña"
                    : "Mostrar contraseña"
                }
                className="absolute right-4 top-1/2
                -translate-y-1/2 text-gray-500
                hover:text-green-400 transition"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          {/* MENSAJE DE ERROR */}
          {errorMessage && (
            <p
              role="alert"
              className="text-red-400 text-sm
              bg-red-500/10 border border-red-500/20
              rounded-xl px-4 py-3"
            >
              {errorMessage}
            </p>
          )}

          {/* BOTÓN DE LOGIN */}
          <button
            type="submit"
            disabled={loading || googleLoading}
            className="group w-full flex items-center
            justify-center gap-3
            bg-green-500 hover:bg-green-400
            text-black font-bold
            py-3.5 rounded-xl
            hover:-translate-y-0.5
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <LoaderCircle
                  size={20}
                  className="animate-spin"
                />
                Iniciando sesión...
              </>
            ) : (
              <>
                Iniciar sesión
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </>
            )}
          </button>
        </form>

        {/* SEPARADOR */}
        <div className="flex items-center gap-4 my-7">
          <div className="flex-1 h-px bg-green-900/50" />
          <span className="text-gray-500 text-xs">
            O continúa con
          </span>
          <div className="flex-1 h-px bg-green-900/50" />
        </div>

        {/* INICIAR SESIÓN CON GOOGLE */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading || googleLoading}
          className="w-full flex items-center
          justify-center gap-3
          bg-white hover:bg-gray-100
          text-gray-800 font-semibold
          py-3.5 px-5 rounded-xl
          border border-gray-200
          hover:-translate-y-0.5
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {googleLoading ? (
            <LoaderCircle
              size={21}
              className="animate-spin"
            />
          ) : (
            <FcGoogle size={24} />
          )}

          {googleLoading
            ? "Conectando con Google..."
            : "Continuar con Google"}
        </button>

        {/* ENLACE A REGISTRO */}
        <p className="text-gray-400 text-sm text-center mt-8">
          ¿Todavía no tienes cuenta?{" "}
          <Link
            to="/register"
            className="text-green-400 font-semibold
            hover:text-green-300 transition"
          >
            Regístrate gratis
          </Link>
        </p>

        {/* PIE DE TARJETA */}
        <div
          className="flex items-center justify-center
          gap-2 mt-7 pt-6 border-t border-green-900/40"
        >
          <Leaf size={16} className="text-green-400 shrink-0" />
          <span className="text-gray-500 text-xs text-center">
            Protegiendo el planeta, una aventura a la vez.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Login;
