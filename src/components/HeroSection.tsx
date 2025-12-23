const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex w-full flex-col items-center justify-start overflow-hidden pt-20"
    >
      {/* Hero Image */}
      <div className="w-full overflow-hidden">
        <img
          src="/berndtrot.png"
          alt="Bernd Schwarzer"
          className="mx-auto max-h-[60vh] w-auto object-contain object-top opacity-100 dark:opacity-50 2xl:mx-0 2xl:w-full 2xl:max-h-[80vh]"
        />
      </div>

      {/* Hero Content - Centered below image */}
      <div className="mx-auto w-full max-w-5xl px-4 py-8 text-center">
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          {/* Name */}
          <h1 className="animate-fade-up font-display text-5xl font-medium opacity-0 md:text-7xl lg:text-8xl relative inline-block">
            <span className="relative z-10">
              <span className="text-accent">Bernd</span>{" "}
              <span className="text-accent">Schwarzer</span>
            </span>
            <span className="absolute bottom-2 -left-8 -right-8 h-5 bg-[#FFEB3B] transform -rotate-1 rounded-sm" style={{ clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)' }}></span>
          </h1>

          {/* Slogan */}
          <p className="animate-fade-up animation-delay-100 mx-auto max-w-2xl font-body text-lg font-semibold text-foreground opacity-0 md:text-xl uppercase tracking-wider">
            Joseph Beuys Schüler Kunstakademie Düsseldorf
          </p>

          {/* Birth Info */}
          <p className="animate-fade-up animation-delay-200 mx-auto max-w-2xl font-body text-lg text-muted-foreground opacity-0 md:text-xl">
            *1958 in Weimar, Deutschland
          </p>

          {/* Description */}
          <p className="animate-fade-up animation-delay-300 mx-auto max-w-3xl font-body text-base leading-relaxed text-muted-foreground/80 opacity-0 md:text-lg">
            Seine Werke spiegeln die deutsche Geschichte und deutsch-europäische Gegenwart,
            den europäischen Gedanken und den Kosmopolitismus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
