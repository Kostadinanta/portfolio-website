import { certifications } from "../data";

function Certifications() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6">
        <span className="text-neon">04.</span>{" "}
        <span className="text-gradient">Certifications</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="glass glass-hover rounded-2xl p-6 flex flex-col"
          >
            <h3 className="font-semibold text-slate-100">{cert.title}</h3>
            <p className="text-sm text-slate-400 mt-1">
              {cert.issuer} · {cert.date}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-neon font-mono text-sm hover:underline"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;