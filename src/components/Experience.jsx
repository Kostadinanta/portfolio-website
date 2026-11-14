import { experiences } from "../data";

function Experience() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6">
        <span className="text-neon">03.</span>{" "}
        <span className="text-gradient">Experience</span>
      </h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="glass glass-hover rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-slate-100">{exp.role}</h3>
            <p className="text-neon font-mono">{exp.company}</p>
            <p className="text-sm text-slate-400 mb-4">
              {exp.period} · {exp.location}
            </p>
            <ul className="space-y-2 text-slate-300">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-neon2">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;