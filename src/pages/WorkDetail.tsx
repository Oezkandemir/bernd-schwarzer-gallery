import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getArtworkBySlug } from "@/data/artworks";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const artwork = slug ? getArtworkBySlug(slug) : undefined;

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background w-full">
        <Navigation />
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">Werk nicht gefunden</h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft size={20} />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background w-full">
      <Navigation />
      <div className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 lg:px-12 pt-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-body text-sm">Zurück</span>
          </button>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="sticky top-24">
                <div className="bg-card shadow-card overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Details */}
              <div>
                <p className="font-body text-primary tracking-[0.3em] uppercase text-sm mb-4">
                  {artwork.category === "painting" ? "Malerei" : "Druckgrafik"}
                </p>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  {artwork.title}
                </h1>

                <div className="space-y-6 mb-8">
                  {artwork.year && (
                    <div>
                      <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-1">
                        Jahr
                      </p>
                      <p className="font-display text-xl text-foreground">{artwork.year}</p>
                    </div>
                  )}

                  <div>
                    <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Technik
                    </p>
                    <p className="font-body text-lg text-foreground">{artwork.medium}</p>
                  </div>

                  <div>
                    <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Maße
                    </p>
                    <p className="font-body text-lg text-foreground">{artwork.dimensions}</p>
                  </div>
                </div>

                {artwork.description && (
                  <div className="pt-8 border-t border-border">
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {artwork.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkDetail;




