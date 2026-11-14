import { profile } from "../data";

function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6">
        <span className="text-neon">01.</span>{" "}
        <span className="text-gradient">About</span>
      </h2>
      <div className="glass rounded-2xl p-6 md:p-8">
        <p className="text-slate-300 leading-relaxed">{profile.about}</p>
      </div>
    </section>
  );
}

export default About;