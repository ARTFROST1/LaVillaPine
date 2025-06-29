import { Home, Waves, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/ui/image-carousel";
import { Link } from "wouter";

const heroSlides = [
  {
    image: "/assets/images/hero/IMG_2640.jpeg",
    alt: "Современный гостевой дом La Villa Pine",
  },
  {
    image: "/assets/images/hero/IMG_2672.JPG",
    alt: "Экстерьер гостевого дома",
  },
  {
    image: "/assets/images/hero/IMG_2675.jpeg",
    alt: "Гостевой дом среди природы",
  },
];

const features = [
  {
    icon: Home,
    title: "Лофт дизайн",
    description: "Современный дизайнерский ремонт в стиле лофт с качественной мебелью",
  },
  {
    icon: Waves,
    title: "Бассейн и сауна",
    description: "Частный бассейн с подогревом и сауна для полного расслабления",
  },
  {
    icon: TreePine,
    title: "Природа рядом",
    description: "Прямо за забором красивый лес с белками, птицами и ручьем",
  },
];

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen">
        <ImageCarousel slides={heroSlides} className="h-full">
          <div className="text-center text-white px-4 max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow">
              Добро пожаловать в<br />
              <span className="text-accent" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)' }}>La Villa Pine</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto text-shadow">
              Два эксклюзивных гостевых дома с сауной, бассейном и видом на лес
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                Забронировать сейчас
              </Button>
            </Link>
          </div>
        </ImageCarousel>
      </section>

      {/* Brief Info Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ваш идеальный отдых
            </h3>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Два уникальных гостевых дома в стиле лофт с дизайнерским ремонтом,
              собственной сауной и бассейном с подогревом. Окруженные красивым лесом,
              где живут белки и птицы, а рядом протекает ручей.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card text-center p-6 bg-muted border-none animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                  <p className="text-secondary">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
