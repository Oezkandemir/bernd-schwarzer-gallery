import { ExternalLink, Instagram, Facebook, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-accent tracking-[0.3em] uppercase text-sm mb-4">
            Kontakt
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
            Interesse an einem <span className="text-accent">Werk?</span>
          </h2>
          <p className="font-body text-muted-foreground mb-12 max-w-2xl mx-auto">
            Kontaktieren Sie die Galerie Kellermann für Anfragen zu Werken von Bernd Schwarzer 
            oder besuchen Sie die Galerie in Düsseldorf.
          </p>

          {/* Gallery Info */}
          <div className="bg-gradient-card border border-border/50 p-8 md:p-12 mb-12">
            <img
              src="https://file.web.artbutler.com/wph24/uploads/sites/9/2024/04/22110605/Web-Logo-Kellermann.png"
              alt="Galerie Kellermann"
              className="h-12 mx-auto mb-8 opacity-90"
            />
            
            <h3 className="font-display text-2xl text-foreground mb-6">
              Galerie Kellermann
            </h3>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a
                href="mailto:contact@galerie-kellermann.de"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span className="font-body text-sm">contact@galerie-kellermann.de</span>
              </a>
              <a
                href="tel:+4921141662792"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span className="font-body text-sm">+49 211 41 66 27 92</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://www.instagram.com/galeriekellermann/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/GalerieKellermann"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            <a
              href="https://galerie-kellermann.de/artists/bernd-schwarzer-3d0a2041/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 shadow-gold"
            >
              Zur Galerie
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
