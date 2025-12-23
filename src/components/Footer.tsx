const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display text-foreground">
            Bernd Schwarzer
          </p>
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
