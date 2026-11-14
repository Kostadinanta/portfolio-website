import { skills } from "../data";

function Skills() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6">
        <span className="text-neon">02.</span>{" "}
        <span className="text-gradient">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="glass glass-hover px-4 py-2 rounded-lg font-mono text-sm text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;