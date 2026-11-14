import { profile } from "../data";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon to-neon2 blur-xl opacity-60" />
        <img
          src={profile.photo}
          alt={profile.name}
          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-white/20"
        />
      </div>

      <p className="font-mono text-neon text-sm md:text-base mb-4">
        &gt; Hello, World_
      </p>
      <h1 className="text-4xl md:text-7xl font-bold text-gradient">
        {profile.name}
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-slate-200 font-mono">
        {profile.role}
      </p>
      <p className="mt-2 text-slate-400">{profile.tagline}</p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg font-semibold text-slate-900 bg-gradient-to-r from-neon to-neon2 shadow-[0_0_24px_rgba(34,211,238,0.5)] hover:shadow-[0_0_36px_rgba(167,139,250,0.7)] transition-shadow"
        >
          GitHub
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="glass glass-hover px-6 py-3 rounded-lg text-neon font-semibold"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

export default Hero;