const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div>
            <p className="font-body text-accent tracking-[0.3em] uppercase text-sm mb-4">
              Der Künstler
            </p>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Über <span className="text-accent">Bernd Schwarzer</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Der in Düsseldorf lebende und arbeitende Bernd Schwarzer beschäftigt sich seit 
                40 Jahren mit den Themen Europa, die deutsche Wiedervereinigung und das Thema 
                Menschenrechte. Früh erkannte er die Entwicklungen, die in der Folge die 
                deutsche und europäische Vereinigung bewirkten.
              </p>
              
              <p>
                Bernd Schwarzers Werke entstammen dem abstrakten Expressionismus und entfalten 
                neben ihrer historischen Relevanz eine besondere Sinnlichkeit. Mit seinen 
                Gemälden, Zeichnungen und Objekten fordert der Künstler den Betrachter zu 
                eigenen Assoziationsketten heraus.
              </p>

              <p>
                Gleichzeitig bestechen die Öl- und Acrylbilder mit einer geradezu reliefartigen 
                Oberfläche, dem Spiel von Licht und Schatten und der Leuchtkraft der Farben.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-4xl text-accent">40+</p>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  Jahre Schaffen
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-accent">1958</p>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  Geboren in Weimar
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-accent">Düsseldorf</p>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  Lebt & arbeitet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
