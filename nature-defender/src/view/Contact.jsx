import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Contacto Nature Defender - ${form.name}`
    );

    const body = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo: ${form.email}\n\n${form.message}`
    );

    // Reemplaza esta dirección por tu correo real.
    window.location.href =
      `mailto:contacto@tudominio.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-12">
        Contáctanos
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-surface p-8 rounded-2xl space-y-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-4 bg-black/50
            rounded-xl border border-green-900"
        />

        <input
          name="email"
          type="email"
          placeholder="Tu correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-4 bg-black/50
            rounded-xl border border-green-900"
        />

        <textarea
          name="message"
          placeholder="Escribe tu mensaje"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-4 bg-black/50
            rounded-xl border border-green-900"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-black
            py-4 rounded-xl font-bold
            hover:bg-green-400"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;