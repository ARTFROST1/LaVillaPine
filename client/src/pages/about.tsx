import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* About Section */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                О La Villa Pine
              </h1>
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>
                  La Villa Pine — это два эксклюзивных гостевых дома, созданных для тех,
                  кто ценит комфорт, стиль и единение с природой. Каждый дом выполнен в
                  современном стиле лофт с качественным дизайнерским ремонтом.
                </p>
                <p>
                  Наши гости получают полную приватность и все удобства для
                  незабываемого отдыха: собственную сауну, бассейн с подогревом и
                  потрясающий вид на лес. Здесь вы сможете отдохнуть от городской суеты
                  и насладиться тишиной природы.
                </p>
                <p>
                  Расположение наших домов уникально — прямо за забором начинается
                  красивый лес, где обитают белки и множество птиц, а поблизости
                  протекает живописный ручей.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <Card className="text-center p-4 bg-white shadow-sm">
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold text-accent mb-1">2</div>
                    <div className="text-sm text-secondary">Гостевых дома</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-white shadow-sm">
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-secondary">Приватность</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              <img
                src="/assets/images/gallery/photos outside/IMG_2628.jpeg"
                alt="Гостевой дом La Villa Pine"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/assets/images/gallery/renders/Screenshot 2025-01-31 150717.png"
                  alt="Интерьер в стиле лофт"
                  className="rounded-lg shadow-md w-full h-32 object-cover"
                />
                <img
                  src="/assets/images/gallery/photos outside/IMG_2637.jpeg"
                  alt="Территория вокруг дома"
                  className="rounded-lg shadow-md w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Наши преимущества
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Что делает отдых в La Villa Pine особенным
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Бассейны с термальной водой Майкопского минерального источника",
                description: "Наслаждайтесь целебными свойствами термальной воды круглый год",
                image: "/assets/images/gallery/renders/Screenshot 2025-01-31 151013.png"
              },
              {
                title: "Барбекю зона для приготовления семейного ужина на открытом огне",
                description: "Уютная зона для приготовления блюд на свежем воздухе с семьей и друзьями",
                image: "/assets/images/gallery/renders/Screenshot 2025-01-31 150948.png"
              },
              {
                title: "Современный дизайн",
                description: "Интерьер в стиле лофт с дизайнерской мебелью и качественной отделкой",
                image: "/assets/images/gallery/renders/Screenshot 2025-01-31 150717.png"
              },
              {
                title: "Собственная сауна",
                description: "Финская сауна с панорамным видом на лес для полного расслабления",
                image: "/assets/images/gallery/renders/Screenshot 2025-01-31 151155.png"
              },
              {
                title: "Единение с природой",
                description: "Лесная тишина, пение птиц и журчание ручья создают атмосферу покоя",
                image: "/assets/images/gallery/photos outside/IMG_2637.jpeg"
              },
              {
                title: "Полная приватность",
                description: "Отдельные дома без соседей для максимального комфорта",
                image: "/assets/images/gallery/photos outside/IMG_2628.jpeg"
              },
            ].map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
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
