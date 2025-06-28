import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ui/contact-form";

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
                        <div className="font-semibold">+7 (XXX) XXX-XX-XX</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-secondary">Email</div>
                        <div className="font-semibold">info@lavillapine.ru</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-secondary">Адрес</div>
                        <div className="font-semibold">
                          Московская область<br />г. Сергиев Посад
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Module Placeholder */}
              <Card className="p-6 shadow-sm border-2 border-dashed border-gray-300">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    Модуль бронирования
                  </h4>
                  <p className="text-secondary mb-4">
                    Здесь будет размещен сторонний модуль бронирования
                  </p>
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Calendar className="w-16 h-16 mx-auto mb-4" />
                      <p>
                        Модуль бронирования<br />будет интегрирован здесь
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Map */}
            <div className="space-y-8 animate-slide-in-right">
              <ContactForm />

              {/* Yandex Maps Placeholder */}
              <Card className="p-6 shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    Наше расположение
                  </h4>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p>
                        Интерактивная карта<br />Yandex Maps
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
