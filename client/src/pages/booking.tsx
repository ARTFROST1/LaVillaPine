import { Calendar, Clock, Users, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/hero/hero1.jpg')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-width section-padding min-h-screen flex items-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
            
            {/* Simple Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                Бронирование номеров
              </h1>
            </div>

            {/* Booking Widget Area */}
            <div className="bg-white rounded-lg border-2 border-dashed border-accent/30 p-8 mb-12 text-center">
              <div className="space-y-4">
                <div className="text-accent font-medium text-lg">
                  Модуль бронирования
                </div>
                <div className="text-secondary">
                  Вставьте HTML код системы бронирования здесь
                </div>
                <div className="text-sm text-gray-400 bg-gray-50 rounded p-4 font-mono">
                  &lt;!-- HTML код модуля бронирования --&gt;
                </div>
              </div>
            </div>

            {/* Booking Information */}
            <div className="space-y-8 mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Доступность</h3>
                  <p className="text-secondary text-sm">
                    Круглогодично. Бронируйте заранее в сезон.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Заезд/Выезд</h3>
                  <p className="text-secondary text-sm">
                    Заезд с 15:00, выезд до 12:00.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Вместимость</h3>
                  <p className="text-secondary text-sm">
                    До 6 гостей в каждом доме.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-4 text-center">Что включено</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-secondary">Полностью оборудованная кухня</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-secondary">Сауна с подогревом</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-secondary">Бассейн с подогревом</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-secondary">Wi-Fi по всей территории</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-secondary">Парковка</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-secondary">Постельное белье и полотенца</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-center mb-6">
                Контакты для бронирования
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-medium">Телефон</div>
                    <div className="text-gray-200">+7 918 924 0007</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-medium">Email</div>
                    <div className="text-gray-200">lavillapine@yandex.ru</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-accent hover:bg-accent/90 text-white font-medium px-6"
                  onClick={() => window.location.href = 'tel:+79189240007'}
                >
                  Позвонить
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hover:text-white font-medium px-6 transition-colors"
                  onClick={() => window.location.href = 'mailto:lavillapine@yandex.ru'}
                >
                  Написать
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}