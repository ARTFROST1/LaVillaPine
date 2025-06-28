import Gallery from "@/components/ui/gallery";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Экстерьер дома 1",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Интерьер гостиной",
  },
  {
    src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Бассейн с подогревом",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Спальня в доме",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Лесная тропа",
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Терраса с видом на лес",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Экстерьер дома 2",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Сауна",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Окрестности леса",
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
