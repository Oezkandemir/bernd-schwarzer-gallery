const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col items-center justify-start overflow-hidden pt-20 min-h-[85vh]"
    >
      {/* Hero Image - Full width, partially visible in height, positioned directly under header */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src="/berndtrot.png"
          alt="Bernd Schwarzer"
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
      </div>

      {/* Abstract Background Art */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10 pointer-events-none">
        {/* Geometric shapes inspired by contemporary art */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFEB3B] rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-400 rounded-full blur-3xl"></div>
        
        {/* Artistic lines and shapes */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="25%" stroke="currentColor" strokeWidth="2" className="text-foreground/10" />
          <line x1="0" y1="60%" x2="100%" y2="55%" stroke="currentColor" strokeWidth="2" className="text-foreground/10" />
          <circle cx="15%" cy="40%" r="100" fill="none" stroke="currentColor" strokeWidth="3" className="text-foreground/5" />
          <circle cx="85%" cy="70%" r="150" fill="none" stroke="currentColor" strokeWidth="3" className="text-foreground/5" />
          <rect x="70%" y="15%" width="200" height="200" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/5" transform="rotate(45 80 20)" />
        </svg>
      </div>

      {/* Hero Content - Positioned below the image */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 md:py-12 lg:py-16">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center">
          {/* Name with artistic underline */}
          <h1 className="animate-fade-up font-display text-6xl font-medium opacity-0 md:text-8xl lg:text-9xl relative inline-block">
            <span className="relative z-10">
              <span className="text-accent">Bernd</span>{" "}
              <span className="text-accent">Schwarzer</span>
            </span>
            <span className="absolute bottom-3 -left-12 -right-12 h-6 bg-[#FFEB3B] transform -rotate-1 rounded-sm md:h-8" style={{ clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)' }}></span>
          </h1>

          {/* Artistic divider */}
          <div className="animate-fade-up animation-delay-50 opacity-0 flex items-center justify-center gap-4 my-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-foreground/20"></div>
            <div className="w-3 h-3 bg-[#FFEB3B] rotate-45"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-foreground/20"></div>
          </div>

          {/* Slogan */}
          <p className="animate-fade-up animation-delay-100 mx-auto max-w-3xl font-body text-xl font-semibold text-foreground opacity-0 md:text-2xl uppercase tracking-wider">
            Joseph Beuys Schüler Kunstakademie Düsseldorf
          </p>

          {/* Birth Info */}
          <p className="animate-fade-up animation-delay-200 mx-auto max-w-2xl font-body text-xl text-muted-foreground opacity-0 md:text-2xl">
            *1958 in Weimar, Deutschland
          </p>

          {/* Description */}
          <p className="animate-fade-up animation-delay-300 mx-auto max-w-4xl font-body text-lg leading-relaxed text-muted-foreground/90 opacity-0 md:text-xl px-4">
            Seine Werke spiegeln die deutsche Geschichte und deutsch-europäische Gegenwart,
            den europäischen Gedanken und den Kosmopolitismus.
          </p>

          {/* Artistic accent at bottom */}
          <div className="animate-fade-up animation-delay-400 opacity-0 pt-8">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FFEB3B] rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
