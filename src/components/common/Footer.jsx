const Footer = () => {
  return (
    <footer className= "w-full backdrop-blur-lg bg-black/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            BK Career Academy
          </span>. All rights reserved.
        </p>

        <p className="text-xs text-gray-500 tracking-wide">
          Learn • Build • Succeed
        </p>

        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
    </footer>
  );
};

export default Footer;
