import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: gallery1, title: "অফিস ভবন / Office Building", caption: "বিভাগীয় কার্যালয়ের প্রধান ভবন" },
  { src: gallery2, title: "প্রশাসনিক সভা / Administrative Meeting", caption: "কর্মকর্তাদের মাসিক সমন্বয় সভা" },
  { src: gallery3, title: "জনসেবা কার্যক্রম / Public Services", caption: "নাগরিক সেবা প্রদান কেন্দ্র" },
  { src: gallery4, title: "জনকল্যাণ কার্যক্রম / Community Welfare", caption: "সামাজিক কল্যাণ কার্যক্রম" },
  { src: gallery5, title: "প্রশিক্ষণ কর্মশালা / Staff Training", caption: "কর্মকর্তাদের দক্ষতা উন্নয়ন প্রশিক্ষণ" },
  { src: gallery6, title: "বৃক্ষরোপণ / Tree Planting", caption: "পরিবেশ সংরক্ষণ কার্যক্রম" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + photos.length) % photos.length);
  };

  return (
    <section id="gallery" className="py-14 px-4 bg-card">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-heading text-xl font-bold text-foreground">
            ফটো গ্যালারি / Photo Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded border bg-section-alt aspect-[16/10] focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm font-medium text-left">{p.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[80vh] px-12" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].title}
              className="max-w-full max-h-[75vh] object-contain rounded"
            />
            <p className="text-white text-center mt-3 text-sm">{photos[lightbox].caption}</p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
