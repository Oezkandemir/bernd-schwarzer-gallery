import { Link } from "react-router-dom";
import { getGraphics } from "@/data/artworks";

const GraphicsSection = () => {
  const graphics = getGraphics();

  return (
    <section className="py-12 md:py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-accent tracking-[0.3em] uppercase text-sm mb-4">
            Druckgrafik
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            <span className="text-accent">Graphik</span>
          </h2>
        </div>

        {/* Graphics Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {graphics.map((item, index) => (
            <Link
              key={index}
              to={`/work/${item.slug}`}
              className="group relative bg-card overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6 border-t border-border/30">
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                {item.year && (
                  <p className="font-body text-sm text-accent mb-2">{item.year}</p>
                )}
                <p className="font-body text-xs text-muted-foreground mb-1">
                  {item.medium}
                </p>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  {item.dimensions}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Werk ansehen
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicsSection;
