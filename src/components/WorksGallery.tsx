import { Link } from "react-router-dom";
import { getPaintings } from "@/data/artworks";

const WorksGallery = () => {
  const artworks = getPaintings();

  return (
    <section id="works" className="py-12 md:py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-accent tracking-[0.3em] uppercase text-sm mb-4">
            Galerie
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ausgewählte <span className="text-accent">Werke</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Eine eruptive Malerei und provokante Kontraste wechseln mit sanften Farbschleiern 
            in seinen Aquarellen, Bildcollagen und kunsthistorischen Zitaten.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((artwork, index) => (
            <Link
              key={index}
              to={`/work/${artwork.slug}`}
              className="group relative bg-card overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-background/95 p-4 rounded-lg">
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 line-clamp-2 font-semibold">
                    {artwork.title}
                  </h3>
                  <p className="font-body text-base text-accent mb-2 font-medium">{artwork.year}</p>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    {artwork.medium}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {artwork.dimensions}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-base font-medium">
                    Werk ansehen
                  </span>
                </div>
              </div>

              {/* Quick Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-display text-base md:text-lg text-foreground truncate font-semibold">
                  {artwork.title}
                </h3>
                <p className="font-body text-sm text-accent font-medium">{artwork.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;
