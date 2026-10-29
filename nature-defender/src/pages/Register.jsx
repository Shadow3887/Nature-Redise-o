
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  LoaderCircle,
  Leaf,
  CheckCircle2
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../supabase/client";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // REGISTRO CON CORREO Y CONTRASEÑA
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage(
        "La contraseña debe tener al menos 6 caracteres."
      );
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: name.trim()
          },
          emailRedirectTo: `${window.location.origin}/login`
        }
      });

      if (error) throw error;

      if (data.session) {
        setSuccessMessage(
          "¡Cuenta creada correctamente! Ya puedes iniciar sesión."
        );
      } else {
        setSuccessMessage(
          "¡Registro recibido! Revisa tu correo electrónico para confirmar tu cuenta."
        );
      }

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // REGISTRO CON GOOGLE
  const handleGoogleRegister = async () => {
    setErrorMessage("");
    setSuccessMessage("");
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
            Crear <span className="text-green-400">cuenta</span>
          </h1>

          <p className="text-gray-400 text-sm text-center mt-3">
            Únete a Nature Defender y comienza tu aventura.
          </p>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NOMBRE COMPLETO */}
          <div>
            <label
              htmlFor="register-name"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Nombre completo
            </label>

            <div className="relative">
              <User
                size={19}
                className="absolute left-4 top-1/2
                -translate-y-1/2 text-gray-500"
              />

              <input
                id="register-name"
                type="text"
                required
                autoComplete="name"
                placeholder="Ingresa tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

          {/* CORREO ELECTRÓNICO */}
          <div>
            <label
              htmlFor="register-email"
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
                id="register-email"
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
            <label
              htmlFor="register-password"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Contraseña
            </label>

            <div className="relative">
              <Lock
                size={19}
                className="absolute left-4 top-1/2
                -translate-y-1/2 text-gray-500"
              />

              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                autoComplete="new-password"
                placeholder="Crea una contraseña"
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

            <p className="text-gray-500 text-xs mt-2">
              Mínimo 6 caracteres.
            </p>
          </div>

          {/* CONFIRMAR CONTRASEÑA */}
          <div>
            <label
              htmlFor="register-confirm-password"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Confirmar contraseña
            </label>

            <div className="relative">
              <Lock
                size={19}
                className="absolute left-4 top-1/2
                -translate-y-1/2 text-gray-500"
              />

              <input
                id="register-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                minLength={6}
                autoComplete="new-password"
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-black/30
                border border-green-900/60
                rounded-xl py-3.5 pl-12 pr-12
                text-white placeholder:text-gray-600
                outline-none focus:border-green-400
                focus:ring-2 focus:ring-green-500/10
                transition-all"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword
                    ? "Ocultar confirmación de contraseña"
                    : "Mostrar confirmación de contraseña"
                }
                className="absolute right-4 top-1/2
                -translate-y-1/2 text-gray-500
                hover:text-green-400 transition"
              >
                {showConfirmPassword ? (
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

          {/* MENSAJE DE ÉXITO */}
          {successMessage && (
            <div
              role="status"
              className="flex items-start gap-3
              text-green-400 text-sm
              bg-green-500/10 border border-green-500/20
              rounded-xl px-4 py-3"
            >
              <CheckCircle2 size={20} className="shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* BOTÓN REGISTRARSE */}
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
                Creando cuenta...
              </>
            ) : (
              <>
                Crear cuenta
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
            O regístrate con
          </span>
          <div className="flex-1 h-px bg-green-900/50" />
        </div>

        {/* REGISTRO CON GOOGLE */}
        <button
          type="button"
          onClick={handleGoogleRegister}
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

        {/* ENLACE AL LOGIN */}
        <p className="text-gray-400 text-sm text-center mt-8">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="text-green-400 font-semibold
            hover:text-green-300 transition"
          >
            Inicia sesión
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

export default Register;
