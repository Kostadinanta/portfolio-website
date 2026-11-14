import { profile } from "../data";

function Footer() {
  return (
    <footer className="py-8 text-center font-mono text-xs text-slate-500 border-t border-white/10">
      © {new Date().getFullYear()} {profile.name} -- This website is meant to be used only for UKM IRC Applications. 
    </footer>
  );
}

export default Footer;