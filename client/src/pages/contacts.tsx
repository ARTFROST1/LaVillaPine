import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ui/contact-form";
import YandexMap from "@/components/ui/yandex-map";

export default function ContactsPage() {
  return (
    <div className="animate-fade-in">
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Контакты
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Свяжитесь с нами для бронирования или получения дополнительной информации
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <Card className="p-6 shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    Контактная информация
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-secondary">Телефон</div>
                        <div className="font-semibold">+7 918 924 0007</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-secondary">Email</div>
                        <div className="font-semibold">lavillapine@yandex.ru</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-secondary">Адрес</div>
                        <div className="font-semibold">
                          Кольцевая улица, 4, посёлок Тульский<br />Майкопский район, Республика Адыгея
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              
            </div>

            {/* Contact Form and Map */}
            <div className="space-y-8 animate-slide-in-right">
              <ContactForm />

              {/* Yandex Maps */}
              <Card className="shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 pb-4">
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      Наше расположение
                    </h4>
                    <p className="text-secondary text-sm">
                      Республика Адыгея, Майкопский район, посёлок Тульский, Кольцевая улица, 4
                    </p>
                  </div>
                  <YandexMap 
                    center={[44.6076, 40.1128]}
                    zoom={13}
                    markerCoords={[44.6076, 40.1128]}
                    markerText="La Villa Pine - Гостевые дома"
                    className="border-0"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
