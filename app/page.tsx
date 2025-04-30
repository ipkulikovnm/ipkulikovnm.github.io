"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Mail = dynamic(() => import("lucide-react").then((mod) => mod.Mail), {
  ssr: false,
});
const MapPin = dynamic(() => import("lucide-react").then((mod) => mod.MapPin), {
  ssr: false,
});
const Zap = dynamic(() => import("lucide-react").then((mod) => mod.Zap), {
  ssr: false,
});
const Shield = dynamic(() => import("lucide-react").then((mod) => mod.Shield), {
  ssr: false,
});
const Clock = dynamic(() => import("lucide-react").then((mod) => mod.Clock), {
  ssr: false,
});
const Star = dynamic(() => import("lucide-react").then((mod) => mod.Star), {
  ssr: false,
});
const Phone = dynamic(() => import("lucide-react").then((mod) => mod.Phone), {
  ssr: false,
});
const Menu = dynamic(() => import("lucide-react").then((mod) => mod.Menu), {
  ssr: false,
});
const CircuitBoard = dynamic(
  () => import("lucide-react").then((mod) => mod.CircuitBoard),
  { ssr: false }
);

// Add this import at the top
import { useState, useEffect } from "react";

// Add import at the top
import { ContactForm } from "@/components/ui/contact-form";

// Change the image import and usage
import Image from "next/image";
import heroImg from "../public/hero.jpg"; // Move the image to public folder

export default function HomePage() {
  // Add state for contact form
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // Add scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  // Add active service state
  const [activeService, setActiveService] = useState("Электромонтаж");

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Update the header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <CircuitBoard
                  className={`h-6 w-6 ${
                    isScrolled ? "text-blue-600" : "text-orange-500"
                  }`}
                />
                <span
                  className={`text-lg font-bold ${
                    isScrolled ? "text-blue-600" : "text-orange-500"
                  }`}
                >
                  <span className="text-blue-600">Электро</span>
                  <span className="text-orange-500">Монтаж</span>
                </span>
              </a>
            </div>
            <nav className="hidden lg:flex space-x-8">
              {[
                { title: "Услуги", href: "#services" },
                { title: "О нас", href: "#about" },
                { title: "Контакты", href: "#contacts" },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray hover:text-orange-200"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <a href="tel:+79028871580">8 (902) 887-15-80</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Электромонтажные работы"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-8">
                <CircuitBoard className="h-16 w-16 sm:h-24 sm:w-24 text-orange-500" />
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Pro
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-32">
                <span className="text-blue-600">Электро</span>
                <span className="text-orange-500">Монтаж</span>
              </h1>
              <p className="text-lg sm:text-xl text-black mb-32 sm:mb-32 max-w-2xl">
                Качественные электромонтажные работы для вашего дома и бизнеса
              </p>
              {/* Update the button */}
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 max-w-[280px]"
                onClick={() => setContactFormOpen(true)}
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-orange-500" />,
                title: "Гарантия качества",
                description: "Сертифицированные специалисты",
              },
              {
                icon: <Clock className="h-8 w-8 text-orange-500" />,
                title: "Точные сроки",
                description: "Соблюдение графика работ",
              },
              {
                icon: <Zap className="h-8 w-8 text-orange-500" />,
                title: "Любая сложность",
                description: "От квартир до промышленных объектов",
              },
              {
                icon: <Phone className="h-8 w-8 text-orange-500" />,
                title: "Поддержка 24/7",
                description: "Всегда на связи",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 border-none shadow-lg bg-white">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Наши</span>
            <span className="text-orange-500"> услуги</span>
          </h2>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Электромонтаж",
              "Проектирование",
              "Обслуживание",
              "Умный дом",
              "Промышленные объекты",
              "Аварийные работы",
              "Слаботочные системы",
            ].map((service) => (
              <Button
                key={service}
                variant={activeService === service ? "default" : "outline"}
                className={`${
                  activeService === service
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "hover:bg-orange-100"
                }`}
                onClick={() => setActiveService(service)}
              >
                {service}
              </Button>
            ))}
          </div>

          {/* Service Content */}
          {[
            {
              title: "Электромонтаж",
              description:
                "Выполняем полный комплекс электромонтажных работ в квартирах, домах и офисах. Установка розеток, выключателей, монтаж электропроводки, сборка электрощитов.",
              bg: "bg-white",
              list: [
                "Монтаж электропроводки",
                "Установка розеток и выключателей",
                "Сборка электрощитов",
                "Подключение бытовой техники",
                "Замена старой проводки",
              ],
            },
            {
              title: "Проектирование",
              description:
                "Профессиональная разработка электрических схем любой сложности. Расчет нагрузок, выбор оборудования, составление технической документации.",
              bg: "bg-gray-50",
              list: [
                "Разработка электросхем",
                "Расчет нагрузок",
                "Подбор оборудования",
                "Составление документации",
                "Согласование проектов",
              ],
            },
            {
              title: "Обслуживание",
              description:
                "Регулярное техническое обслуживание электросетей. Диагностика, ремонт и замена электрооборудования. Оперативный выезд по заявкам.",
              bg: "bg-white",
              list: [
                "Диагностика электросетей",
                "Плановое обслуживание",
                "Ремонт оборудования",
                "Замена комплектующих",
                "Аварийные выезды",
              ],
            },
            {
              title: "Умный дом",
              description:
                "Установка и настройка систем умного дома. Автоматизация освещения, климата и безопасности. Интеграция с мобильными устройствами.",
              bg: "bg-gray-50",
              list: [
                "Автоматизация освещения",
                "Управление климатом",
                "Системы безопасности",
                "Мобильное управление",
                "Интеграция устройств",
              ],
            },
            {
              title: "Промышленные объекты",
              description:
                "Электромонтажные работы на производственных и промышленных объектах. Монтаж силового оборудования, прокладка кабельных линий.",
              bg: "bg-white",
              list: [
                "Монтаж силового оборудования",
                "Прокладка кабельных линий",
                "Установка трансформаторов",
                "Системы освещения",
                "Заземление",
              ],
            },
            {
              title: "Аварийные работы",
              description:
                "Круглосуточное устранение аварийных ситуаций. Быстрый выезд специалистов, оперативный ремонт электросетей любой сложности.",
              bg: "bg-gray-50",
              list: [
                "Срочный выезд",
                "Устранение КЗ",
                "Замена автоматов",
                "Восстановление электроснабжения",
                "Поиск неисправностей",
              ],
            },
            {
              title: "Слаботочные системы",
              description:
                "Монтаж и настройка слаботочных систем для дома и бизнеса. Установка систем видеонаблюдения, охранной сигнализации, систем контроля доступа и пожарной безопасности.",
              bg: "bg-white",
              list: [
                "Видеонаблюдение",
                "Охранная сигнализация",
                "Системы контроля доступа",
                "Пожарная сигнализация",
                "Структурированные кабельные сети",
              ],
            },
          ].map(
            (service, index) =>
              service.title === activeService && (
                <div
                  key={service.title}
                  className={`${service.bg} p-8 rounded-lg transition-all duration-300`}
                >
                  <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {service.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-4">Что включает:</h4>
                      <ul className="space-y-2">
                        {service.list.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CircuitBoard className="h-5 w-5 text-orange-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <h4 className="font-bold mb-4">Преимущества:</h4>
                      <p className="text-gray-600">
                        Профессиональный подход, современное оборудование и
                        гарантия качества на все виды работ.
                      </p>
                      <Button
                        className="mt-6 bg-orange-500 hover:bg-orange-600"
                        onClick={() => setContactFormOpen(true)}
                      >
                        Заказать услугу
                      </Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">О</span>
            <span className="text-orange-500"> нас</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                Мы профессиональная команда электромонтажников с более чем
                10-летним опытом работы в сфере электромонтажных услуг. Наши
                специалисты регулярно проходят обучение и повышают квалификацию,
                чтобы предоставлять услуги высочайшего качества.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Все работы выполняются в строгом соответствии с действующими
                нормами и стандартами. Мы используем только сертифицированные
                материалы и современное оборудование, предоставляя гарантию на
                все виды работ.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">
                    500+
                  </h3>
                  <p className="text-gray-600">Выполненных проектов</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-orange-500 mb-2">
                    15+
                  </h3>
                  <p className="text-gray-600">Профессионалов в команде</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">10</h3>
                  <p className="text-gray-600">Лет на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Контактная</span>
            <span className="text-orange-500"> информация</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Наши контакты</h3>
                <div className="space-y-3">
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-orange-500" />
                    <a href="tel:+79028871580">
                      <span>8 (902) 887-15-80</span>
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5 text-orange-500" />
                    <a href="mailto:89028871580@mail.ru">
                      <span>89028871580@mail.ru</span>
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span>
                      улица Советская, д. 50, кв./оФ. 84, Владимирская область,
                      г. Муром
                    </span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Время работы</h3>
                <div className="space-y-2">
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб: 10:00 - 16:00</p>
                  <p>Вс: Выходной</p>
                </div>
              </div>
              <div className="mt-12 text-sm text-gray-500">
                <p className="text-center">
                  © 2025 ИП КУЛИКОВ НИКОЛАЙ МИХАЙЛОВИЧ. Все права защищены
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add contact form at the end of the component */}
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </div>
  );
}
