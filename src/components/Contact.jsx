import { profile } from "../data";

function Contact() {
  const waText = encodeURIComponent(
    "Hello Jagad, I saw your portfolio and would like to get in touch / just saying hi."
  );

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6 text-center">
        <span className="text-neon">05.</span>{" "}
        <span className="text-gradient">Contact</span>
      </h2>
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-slate-300 mb-6">
          Interested in working together or just want to say hi? Feel free to
          reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${profile.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg font-semibold text-slate-900 bg-gradient-to-r from-neon to-neon2 shadow-[0_0_24px_rgba(34,211,238,0.5)] hover:shadow-[0_0_36px_rgba(167,139,250,0.7)] transition-shadow"
          >
            Chat on WhatsApp
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover px-6 py-3 rounded-lg text-neon font-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;