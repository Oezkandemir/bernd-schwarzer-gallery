export interface Artwork {
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  slug: string;
  category: "painting" | "graphic";
  description?: string;
}

export const artworks: Artwork[] = [
  // Paintings
  {
    title: "Europäisches Weltbild",
    year: "1978-82-84",
    medium: "Öl auf Leinwand",
    dimensions: "128 x 128 x 9,5 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2025/04/30163904/d57fdcae-aadd-4721-9f7a-d0337098d451-768x768.jpg",
    slug: "europaeisches-weltbild",
    category: "painting",
  },
  {
    title: "Europäischer Vulkan, Flammenbild (Gold-Blau)",
    year: "1984-88-94",
    medium: "Acryl und Öl auf Karton, montiert auf Holz",
    dimensions: "68 x 59 x 7 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2025/04/30163552/51a8b62c-0423-468d-8341-67c40f3be71d-679x768.jpg",
    slug: "europaeischer-vulkan-flammenbild-gold-blau",
    category: "painting",
  },
  {
    title: "Europawerk",
    year: "1978-84-88",
    medium: "Öl auf Leinwand",
    dimensions: "81 x 72 x 9 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2025/04/30163445/e24ce305-59cd-48c7-b257-ebfebb59d78d-680x768.jpg",
    slug: "europawerk",
    category: "painting",
  },
  {
    title: "Europa (Gold-Blau)",
    year: "1985-94",
    medium: "Acryl und Öl auf Malkarton auf Holz",
    dimensions: "130 x 110 x 5,5 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2025/04/05122923/c2fb3349-84a7-464a-ae9b-c46d6f84cab3-654x768.jpg",
    slug: "europa-gold-blau",
    category: "painting",
  },
  {
    title: "Europabild (Gold-Blau)",
    year: "1984-88-94",
    medium: "Acryl und Öl auf Karton, montiert auf Leinwand",
    dimensions: "111 x 87 x 5,5 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2025/12/10144523/98d2b021-a130-44e4-a2fe-b49d5e17c07a-646x768.jpg",
    slug: "europabild-gold-blau",
    category: "painting",
  },
  {
    title: "Europäisches Vereinigungsbild blau-gold",
    year: "1978-84-88",
    medium: "Öl auf Karton, montiert auf Holz",
    dimensions: "62 x 70 x 5,5 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2025/04/05121119/6d2da735-8311-4dc6-a0e5-7276050bba13-688x768.jpg",
    slug: "europaeisches-vereinigungsbild-blau-gold",
    category: "painting",
  },
  {
    title: "Deutschlandflagge (schwarz-rot-gold)",
    year: "1982",
    medium: "Öl auf Leinwand",
    dimensions: "48,5 x 52 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2024/07/02145649/f6ea3b39-03b8-4a4a-ad32-f53207148446-745x768.jpg",
    slug: "deutschlandflagge-schwarz-rot-gold",
    category: "painting",
  },
  {
    title: "Europäischer Vulkan, Flammenbild (gelb-blau)",
    year: "1984-88-93",
    medium: "Acryl und Öl auf Malkarton, montiert auf Keilrahmen",
    dimensions: "67 x 79 x 6,5 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2025/07/10102958/f316e81e-79f9-4c12-8696-62c59c5b9702-682x768.jpg",
    slug: "europaeischer-vulkan-flammenbild-gelb-blau",
    category: "painting",
  },
  // Graphics
  {
    title: "Obama",
    year: "",
    medium: "Giclée-Pigmentdruck auf Bütten",
    dimensions: "70 x 72 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2024/07/02145429/265ea5f2-2cef-418e-b83f-c593f1682518.jpg",
    slug: "obama",
    category: "graphic",
  },
  {
    title: "Ich liebe Russland",
    year: "2003",
    medium: "Giclée-Pigmentdruck auf Bütten",
    dimensions: "154,5 x 235 cm",
    image: "https://file.web.artbutler.com/wph24/uploads/sites/9/2024/07/02145354/74617088-00db-41e1-8979-2b0f50d1d7d2-768x565.jpg",
    slug: "ich-liebe-russland",
    category: "graphic",
  },
];

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.slug === slug);
};

export const getPaintings = (): Artwork[] => {
  return artworks.filter((artwork) => artwork.category === "painting");
};

export const getGraphics = (): Artwork[] => {
  return artworks.filter((artwork) => artwork.category === "graphic");
};




