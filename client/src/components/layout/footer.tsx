import { Link } from "wouter";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { FaTelegram, FaVk } from "react-icons/fa";
import AvitoIcon from "@/components/ui/avito-icon";

export default function Footer() {
  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "/about" },
    { name: "Галерея", href: "/gallery" },
    { name: "Бронирование", href: "/booking" },
    { name: "Контакты", href: "/contacts" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/lavillapine/",
      label: "Instagram",
    },
    {
      icon: FaTelegram,
      href: "https://t.me/LaVillaPine",
      label: "Telegram",
    },
    {
      icon: FaVk,
      href: "https://vk.com/lavillapine",
      label: "ВКонтакте",
    },
    {
      icon: AvitoIcon,
      href: "#", // Заменить на реальную ссылку Авито
      label: "Авито",
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">La Villa Pine</h3>
            <p className="text-gray-300 mb-6">
              Эксклюзивные гостевые дома для незабываемого отдыха на природе
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+7 918 924 0007</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>lavillapine@yandex.ru</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-left">
                  {" "}
                  Республика Адыгея, Майкопский район, посёлок Тульский,
                  Кольцевая улица, 4
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 La Villa Pine. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
