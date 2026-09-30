import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Wrench, MapPin, Phone, Clock, Facebook, ArrowRight, Cpu, Laptop, Apple, Gamepad2, Tv, ShoppingCart, HardDrive, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const services = [
  { icon: Laptop, title: 'Reparación y mantenimiento', desc: 'Laptops, PC, limpieza y diagnóstico.' },
  { icon: Cpu, title: 'Reparación a nivel componente', desc: 'Microsoldadura, tarjetas madre y circuitos.' },
  { icon: Apple, title: 'Servicio especializado Mac', desc: 'MacBook, iMac, macOS y migración.' },
  { icon: Monitor, title: 'Servicios para Windows', desc: 'Windows, Office y optimización.' },
  { icon: HardDrive, title: 'Actualización y migración', desc: 'SSD, RAM, clonación y respaldo.' },
  { icon: Gamepad2, title: 'Especialistas Gamer', desc: 'Optimización y control de temperaturas.' },
  { icon: Tv, title: 'Pantallas Samsung', desc: 'Pantallas quebradas de 55" a 85".' },
  { icon: ShoppingCart, title: 'Venta de equipo', desc: 'Laptops, PC Gamer, monitores y Smart TVs.' },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>AS COMPUTADORAS | Reparación y Venta de Computadoras en Ensenada</title>
        <meta name="description" content="Reparación, mantenimiento y venta de equipos de cómputo en Ensenada, B.C. Reparación de componentes, soporte técnico empresarial y soluciones tecnológicas garantizadas." />
      </Helmet>

      {/* Hero + Servicios en una sola pantalla completa */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        {/* Collage de fondo prominente */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-1 md:gap-1.5 p-1 md:p-1.5">
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md md:rounded-lg ring-1 ring-primary/20">
              <img
                src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/892c99af90d4380fca51d084bfe490ad.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md md:rounded-lg ring-1 ring-primary/20">
              <img
                src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/9d9098cef3f12ae152b347a93dbfc08e.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative col-span-2 md:col-span-1 row-span-1 overflow-hidden rounded-md md:rounded-lg ring-1 ring-primary/20">
              <img
                src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/c65f50ce1f9c525e6d0ddabade220458.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md md:rounded-lg ring-1 ring-primary/20">
              <img
                src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/0332ed45ec9f107ba1c5a07bb9f7dcee.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md md:rounded-lg ring-1 ring-primary/20 bg-[#0a0f1a]">
              <img
                src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/f63bd5ecd22d76e8d0480b6de6f60a72.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-contain p-2 md:p-3"
              />
            </div>
            <div className="relative col-span-2 md:col-span-1 row-span-1 overflow-hidden rounded-md md:rounded-lg ring-1 ring-primary/20">
              <img
                src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/c2e2852a799aacf494c09708a2c9deca.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          {/* Overlay moderado: collage visible + texto legible */}
          <div className="absolute inset-0 bg-background/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/45 to-background/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_55%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Columna izquierda: presentación */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 text-primary mb-5">
                <Wrench className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Ensenada, B.C.</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
                Tu Tecnología en <span className="text-primary">Manos Expertas</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-7 leading-relaxed max-w-xl">
                Reparación, mantenimiento y venta de equipos de cómputo. Soluciones rápidas y garantizadas para que nunca te detengas.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Button asChild size="lg" className="text-base px-7 bg-[#25D366] hover:bg-[#20bd5a] text-white">
                  <a href="https://wa.link/ano4vq" target="_blank" rel="noopener noreferrer">Solicitar Servicio</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-7 border-primary/40 text-primary hover:bg-primary/10">
                  <Link to="/servicios" className="inline-flex items-center gap-2">
                    Ver servicios <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> Garantía total</span>
                <span className="inline-flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> Servicio rápido</span>
                <span className="inline-flex items-center gap-1.5"><Wrench className="w-4 h-4 text-primary" /> Reparación especializada</span>
              </div>
            </motion.div>

            {/* Columna derecha: servicios compactos */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {services.map((service, i) => (
                  <Link
                    key={i}
                    to="/servicios"
                    className="group bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/60 hover:-translate-y-1 hover:bg-card transition-all duration-300"
                  >
                    <service.icon className="w-7 h-7 text-primary mb-3" />
                    <h3 className="text-sm font-semibold mb-1 text-foreground leading-tight">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-snug">{service.desc}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Link to="/servicios" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                  Ver todos los servicios <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visítanos en Ensenada</h2>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex gap-3"><MapPin className="w-5 h-5 text-primary shrink-0" /><span>Cortez 1477 local 3 esq. L. Rayon, Ensenada, B.C.</span></li>
                <li className="flex gap-3"><Phone className="w-5 h-5 text-primary shrink-0" /><a href="tel:6469781994" className="hover:text-primary transition-colors">646-978-1994</a></li>
                <li className="flex gap-3"><Clock className="w-5 h-5 text-primary shrink-0" /><span>Lunes a viernes 9:00 - 19:00 · Sábado 11:00 - 19:00</span></li>
              </ul>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a
                  href="https://wa.link/ano4vq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Escríbenos por WhatsApp
                </a>
                <a
                  href="https://www.facebook.com/A.S.COMPUTADORAS.ENS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border hover:border-primary/50 text-foreground hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  Síguenos en Facebook
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border h-[360px]">
              <a
                href="https://maps.app.goo.gl/fKcFVm8roaktLsq68"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <iframe
                  title="Ubicación AS Computadoras"
                  src="https://www.google.com/maps?q=Cortez%201477%20local%203%20esq.%20L.%20Rayon%2C%20Ensenada%2C%20B.C.&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
