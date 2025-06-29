import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram } from "lucide-react";
import { FaTelegram, FaVk } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AvitoIcon from "@/components/ui/avito-icon";


export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "/about" },
    { name: "Галерея", href: "/gallery" },
    { name: "Бронирование", href: "/booking" },
    { name: "Контакты", href: "/contacts" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/lavillapine/", label: "Instagram" },
    { icon: FaTelegram, href: "https://t.me/LaVillaPine", label: "Telegram" },
    { icon: FaVk, href: "https://vk.com/lavillapine", label: "ВКонтакте" },
    { icon: AvitoIcon, href: "#", label: "Авито" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-width">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold text-primary ml-[10px] mr-[10px]">LaVillaPine</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link font-medium transition-colors duration-300 ${
                  location === item.href
                    ? "text-accent"
                    : "text-primary hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-secondary hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors duration-300 ${
                      location === item.href
                        ? "text-accent"
                        : "text-primary hover:text-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex space-x-4 pt-4 border-t">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="text-secondary hover:text-accent transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
