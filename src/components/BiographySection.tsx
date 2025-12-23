const BiographySection = () => {
  const timeline = [
    {
      year: "1954",
      title: "Geburt",
      description: "Geboren in Weimar, Deutschland",
    },
    {
      year: "1959",
      title: "Umzug nach Düsseldorf",
      description: "Die Familie übersiedelt nach Düsseldorf, wo der Künstler bis heute lebt und arbeitet",
    },
    {
      year: "1976-1983",
      title: "Studium in Köln",
      description: "Studium der Malerei bei Werner Schriefers an der Kölner Fachhochschule",
    },
    {
      year: "1978",
      title: "Kunstakademie Düsseldorf",
      description: "Beginn des Studiums der Malerei bei Gerhard Hoehme an der Kunstakademie Düsseldorf, Gastschüler bei Joseph Beuys",
    },
    {
      year: "1984",
      title: "Freier Künstler",
      description: "Tätig als freier Künstler in Düsseldorf, Köln und Weimar",
    },
    {
      year: "Heute",
      title: "Dozent & Gastprofessor",
      description: "Ruf als Dozent an die Kölner Fachhochschule und Gastprofessor an die Akademie der Künste der Republik Belarus in Minsk (Meisterklasse)",
    },
  ];

  return (
    <section id="biography" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-accent tracking-[0.3em] uppercase text-sm mb-4">
            Lebenslauf
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            <span className="text-accent">Biografie</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Schon früh zeigte sich das besondere Talent des jungen Bernd Schwarzer. 
            Frühe Bilder im Alter von 12 Jahren zitieren bereits eindrucksvoll van Goghs 
            leidenschaftliche Landschafts- und Naturportraits.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-lg border border-border/50">
            <img
              src="/berndt.webp"
              alt="Bernd Schwarzer"
              className="w-full h-auto object-cover opacity-100 dark:opacity-90"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-border/50">
            <img
              src="/berndtrot.png"
              alt="Bernd Schwarzer"
              className="w-full h-auto object-cover opacity-100 dark:opacity-90"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div className="bg-gradient-card p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300">
                    <span className="font-display text-2xl text-accent">{item.year}</span>
                    <h3 className="font-display text-xl text-foreground mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1/2 md:-translate-x-1/2 shadow-gold" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
