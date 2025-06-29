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
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Модуль Бронирования
              </h1>
              <p className="text-xl text-secondary leading-relaxed">
                Забронируйте свой идеальный отдых в La Villa Pine
              </p>
            </div>

            {/* Booking Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Информация о бронировании
                </h2>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Доступность</h3>
                    <p className="text-secondary">
                      Круглогодично. Рекомендуем бронировать заранее в сезон высокого спроса.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Заезд/Выезд</h3>
                    <p className="text-secondary">
                      Заезд с 15:00, выезд до 12:00. Возможна договоренность о других временах.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Вместимость</h3>
                    <p className="text-secondary">
                      До 6 гостей в каждом доме. Дополнительные спальные места по запросу.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Что включено
                </h2>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-secondary">Полностью оборудованная кухня</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-secondary">Сауна с подогревом</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-secondary">Бассейн с подогревом</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-secondary">Wi-Fi по всей территории</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-secondary">Парковка</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-secondary">Постельное белье и полотенца</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking Platform Notice */}
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Система Бронирования
                </h2>
                
                <div className="bg-white/80 rounded-lg p-6 border-2 border-dashed border-accent/30">
                  <p className="text-accent font-medium text-lg">
                    🏗️ Интеграция с платформой бронирования
                  </p>
                  <p className="text-secondary mt-2">
                    Здесь будет размещен виджет системы бронирования
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for Booking */}
            <div className="bg-primary text-white rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Свяжитесь с нами для бронирования
                </h2>
                <p className="text-gray-200">
                  Наша команда поможет вам выбрать идеальные даты и оформить бронирование
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-4 bg-white/10 rounded-lg p-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-200">+7 918 924 0007</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4 bg-white/10 rounded-lg p-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-200">lavillapine@yandex.ru</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
                  onClick={() => window.location.href = 'tel:+79189240007'}
                >
                  Позвонить сейчас
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8"
                  onClick={() => window.location.href = 'mailto:lavillapine@yandex.ru'}
                >
                  Написать письмо
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}