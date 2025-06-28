import Gallery from "@/components/ui/gallery";

const galleryImages = [
  // Exterior photos
  {
    src: "/assets/images/gallery/photos outside/IMG_2627.jpeg",
    alt: "Экстерьер гостевого дома",
  },
  {
    src: "/assets/images/gallery/photos outside/IMG_2628.jpeg",
    alt: "Внешний вид дома",
  },
  {
    src: "/assets/images/gallery/photos outside/IMG_2629.jpeg",
    alt: "Гостевой дом с террасой",
  },
  {
    src: "/assets/images/gallery/photos outside/IMG_2630.jpeg",
    alt: "Дом среди природы",
  },
  {
    src: "/assets/images/gallery/photos outside/IMG_2631.jpeg",
    alt: "Бассейн и терраса",
  },
  {
    src: "/assets/images/gallery/photos outside/IMG_2632.jpeg",
    alt: "Зона отдыха на улице",
  },
  // Interior renders
  {
    src: "/assets/images/gallery/renders/Screenshot 2025-01-31 150717.png",
    alt: "Интерьер гостиной в стиле лофт",
  },
  {
    src: "/assets/images/gallery/renders/Screenshot 2025-01-31 150750.png",
    alt: "Дизайн интерьера",
  },
  {
    src: "/assets/images/gallery/renders/Screenshot 2025-01-31 150816.png",
    alt: "Современная кухня",
  },
  {
    src: "/assets/images/gallery/renders/Screenshot 2025-01-31 150848.png",
    alt: "Спальная зона",
  },
  {
    src: "/assets/images/gallery/renders/Screenshot 2025-01-31 150859.png",
    alt: "Ванная комната",
  },
  {
    src: "/assets/images/gallery/renders/Screenshot 2025-01-31 150918.png",
    alt: "Лофт интерьер",
  },
  // More exterior photos
  {
    src: "/assets/images/gallery/photos outside/IMG_2633.jpeg",
    alt: "Окрестности дома",
  },
  {
    src: "/assets/images/gallery/photos outside/IMG_2634.jpeg",
    alt: "Территория гостевого дома",
  },
  {
    src: "/assets/images/gallery/photos outside/IMG_2635.jpeg",
    alt: "Лесная зона рядом с домом",
  },
  {
    src: "/assets/images/gallery/photos outside/IMG_2636.jpeg",
    alt: "Природа вокруг дома",
  },
  // Additional interior renders
  {
    src: "/assets/images/gallery/renders/Screenshot 2025-01-31 150948.png",
    alt: "Интерьер второго дома",
  },
  {
    src: "/assets/images/gallery/renders/Screenshot 2025-01-31 151013.png",
    alt: "Современный дизайн",
  },
];

export default function GalleryPage() {
  return (
    <div className="animate-fade-in">
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Галерея
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Посмотрите на наши уютные гостевые дома и красивые окрестности
            </p>
          </div>

          <Gallery images={galleryImages} className="animate-slide-up" />
        </div>
      </section>
    </div>
  );
}
