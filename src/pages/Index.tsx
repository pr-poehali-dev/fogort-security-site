import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const services = [
    {
      icon: 'ShieldCheck',
      title: 'Физическая охрана объектов',
      description: 'Круглосуточная охрана бизнес-центров, складов, торговых комплексов и жилых зданий'
    },
    {
      icon: 'Video',
      title: 'Видеонаблюдение и мониторинг',
      description: 'Установка и обслуживание систем видеонаблюдения с круглосуточным контролем'
    },
    {
      icon: 'Lock',
      title: 'Контроль доступа',
      description: 'Современные системы СКУД для безопасного управления доступом на территорию'
    },
    {
      icon: 'AlertTriangle',
      title: 'Охранная сигнализация',
      description: 'Установка и мониторинг охранных и пожарных систем сигнализации'
    },
    {
      icon: 'Users',
      title: 'Личная охрана',
      description: 'Профессиональная защита VIP-персон и сопровождение ценных грузов'
    },
    {
      icon: 'Building',
      title: 'Безопасность мероприятий',
      description: 'Организация охраны корпоративных и массовых мероприятий любого масштаба'
    }
  ];

  const portfolioItems = [
    {
      title: 'Бизнес-центр «Северная столица»',
      category: 'Охрана объектов',
      description: 'Комплексная система безопасности для бизнес-центра класса А на 2500 сотрудников'
    },
    {
      title: 'Логистический комплекс «Транзит»',
      category: 'Видеонаблюдение и СКУД',
      description: 'Установка 150 камер видеонаблюдения и системы контроля доступа на складском комплексе 50 000 м²'
    },
    {
      title: 'ТРЦ «Галерея»',
      category: 'Физическая охрана',
      description: 'Организация охраны торгового центра с посещаемостью 30 000 человек в день'
    }
  ];

  const vacancies = [
    {
      title: 'Охранник 4-6 разряда',
      department: 'Охрана',
      type: 'Посменная работа',
      location: 'Москва'
    },
    {
      title: 'Старший смены',
      department: 'Охрана',
      type: 'Полная занятость',
      location: 'Москва'
    },
    {
      title: 'Инженер систем безопасности',
      department: 'Технический отдел',
      type: 'Полная занятость',
      location: 'Москва / Московская область'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer animate-in fade-in slide-in-from-left-5 duration-700" onClick={() => scrollToSection('home')}>
              <div className="h-12 w-12 relative transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.poehali.dev/files/e70ddd52-420e-4791-abd4-7b3b9fb2fcfa.png" alt="ФОГОРТ" className="h-12 w-12 object-contain" />
              </div>
              <span className="text-2xl font-bold text-secondary transition-colors duration-300 hover:text-primary">ФОГОРТ</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors font-medium">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('careers')} className="text-foreground hover:text-primary transition-colors font-medium">
                Вакансии
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
              Профессиональная охрана<br />и безопасность
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Надежная защита объектов, людей и имущества. Лицензия, опытные сотрудники, современное оборудование
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg px-8">
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="text-lg px-8">
                Портфолио
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-primary" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">15+</h3>
              <p className="text-muted-foreground">лет на рынке</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">200+</h3>
              <p className="text-muted-foreground">довольных клиентов</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" className="text-primary" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">99.9%</h3>
              <p className="text-muted-foreground">гарантия SLA</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">О компании</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ЧОП «ФОГОРТ» — надежный партнер в сфере охранных услуг с 2008 года
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                С 2008 года мы обеспечиваем безопасность бизнеса, государственных учреждений и частных лиц. 
                В нашей команде работают более 350 аттестованных охранников с профильным образованием и опытом работы в силовых структурах.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Мы специализируемся на физической охране объектов, установке систем видеонаблюдения и контроля доступа, 
                а также предоставляем услуги личной охраны и сопровождения грузов.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="font-medium">Лицензия МВД</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="font-medium">ISO 9001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="font-medium">Страхование ответственности</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6">
                <Icon name="TrendingUp" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold text-xl mb-2">Рост 40%</h4>
                <p className="text-sm text-muted-foreground">в год последние 5 лет</p>
              </Card>
              <Card className="p-6">
                <Icon name="Globe" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold text-xl mb-2">15 городов</h4>
                <p className="text-sm text-muted-foreground">присутствия в России</p>
              </Card>
              <Card className="p-6">
                <Icon name="Users2" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold text-xl mb-2">350+</h4>
                <p className="text-sm text-muted-foreground">сотрудников</p>
              </Card>
              <Card className="p-6">
                <Icon name="Briefcase" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold text-xl mb-2">500+</h4>
                <p className="text-sm text-muted-foreground">реализованных проектов</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный комплекс охранных услуг для защиты вашего бизнеса и личной безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реализованные проекты для ведущих компаний различных отраслей
            </p>
          </div>

          <div className="space-y-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon name="FolderOpen" className="text-primary" size={48} />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-bold text-secondary">{item.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                    <div className="flex gap-4 pt-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Calendar" className="text-muted-foreground" size={16} />
                        <span className="text-muted-foreground">2023</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" className="text-muted-foreground" size={16} />
                        <span className="text-muted-foreground">6 месяцев</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" className="text-primary" size={16} />
                        <span className="text-primary font-medium">Завершен</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Вакансии и карьера</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Присоединяйтесь к команде профессионалов и развивайтесь вместе с нами
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-secondary">{vacancy.title}</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Building2" className="text-muted-foreground" size={18} />
                        <span className="text-muted-foreground">{vacancy.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Briefcase" className="text-muted-foreground" size={18} />
                        <span className="text-muted-foreground">{vacancy.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" className="text-muted-foreground" size={18} />
                        <span className="text-muted-foreground">{vacancy.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="md:w-auto">
                    Откликнуться
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="text-center space-y-4">
              <Icon name="Mail" className="text-primary mx-auto" size={40} />
              <h3 className="text-2xl font-bold text-secondary">Не нашли подходящую вакансию?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
              </p>
              <Button variant="outline" className="mt-4">
                Отправить резюме
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-secondary mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-secondary mb-1">Email</p>
                      <p className="text-muted-foreground">info@strazh-security.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-secondary mb-1">Адрес</p>
                      <p className="text-muted-foreground">Москва, ул. Большая Семёновская, д. 40</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-secondary mb-1">Время работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Напишите нам</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={5} />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4 cursor-pointer group">
                <div className="h-12 w-12 relative transition-transform duration-300 group-hover:scale-110">
                  <img src="https://cdn.poehali.dev/files/e70ddd52-420e-4791-abd4-7b3b9fb2fcfa.png" alt="ФОГОРТ" className="h-12 w-12 object-contain" />
                </div>
                <span className="text-xl font-bold transition-opacity duration-300 group-hover:opacity-80">ФОГОРТ</span>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональная охрана и безопасность с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Портфолио</button></li>
                <li><button onClick={() => scrollToSection('careers')} className="hover:text-white transition-colors">Карьера</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="hover:text-white transition-colors cursor-pointer">Физическая охрана</li>
                <li className="hover:text-white transition-colors cursor-pointer">Видеонаблюдение</li>
                <li className="hover:text-white transition-colors cursor-pointer">Контроль доступа</li>
                <li className="hover:text-white transition-colors cursor-pointer">Личная охрана</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (916) 174-01-63</li>
                <li>info@fogort.ru</li>
                <li>Москва, ул. Б. Семёновская, 40</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>© 2024 ЧОП «ФОГОРТ». Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;