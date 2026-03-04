const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-xl font-bold">
        <span className="text-gradient">Nova</span>
        <span className="text-foreground">Labs</span>
      </div>
      <div className="flex gap-8">
        {["About", "Services", "Projects", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {l}
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 NovaLabs. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
