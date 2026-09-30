import React, { useState } from 'react';
import {
  Laptop, Cpu, Apple, Monitor, HardDrive, Gamepad2, Tv, BookOpen, ShoppingCart, ShieldCheck,
  ChevronDown, CheckCircle2, Wrench,
} from 'lucide-react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Laptop,
    title: 'Reparación y mantenimiento de computadoras',
    items: [
      'Mantenimiento preventivo de laptops y PC de escritorio',
      'Limpieza interna y externa',
      'Cambio de pasta térmica',
      'Cambio de thermal pads y thermal putty',
      'Limpieza y mantenimiento de sistemas de enfriamiento',
      'Diagnóstico de fallas',
      'Reparación de computadoras y laptops',
      'Reparación de problemas de encendido',
      'Reparación de problemas de temperatura',
      'Reparación de fallas de BIOS',
      'Optimización y aceleración de equipos',
    ],
  },
  {
    icon: Cpu,
    title: 'Reparación a nivel componente',
    items: [
      'Diagnóstico electrónico',
      'Reparación de tarjetas madre',
      'Reparación a nivel componente',
      'Microsoldadura',
      'Reparación de circuitos electrónicos',
      'Reparación de conectores y puertos',
      'Reparación de problemas de alimentación',
      'Diagnóstico de cortos y fallas electrónicas',
    ],
  },
  {
    icon: Apple,
    title: 'Servicio especializado Mac',
    items: [
      'Mantenimiento de MacBook',
      'Mantenimiento de iMac',
      'Diagnóstico y reparación de equipos Mac',
      'Instalación y configuración de macOS',
      'Instalación de programas para Mac',
      'Actualización de almacenamiento',
      'Migración de información',
      'Optimización de equipos Mac',
    ],
  },
  {
    icon: Monitor,
    title: 'Servicios para Windows',
    items: [
      'Instalación y configuración de Windows',
      'Instalación de controladores',
      'Instalación de Office',
      'Configuración y optimización del sistema',
      'Eliminación de software no deseado',
      'Recuperación y migración de información',
      'Actualización de equipos',
      'Instalación de programas especializados',
    ],
  },
  {
    icon: HardDrive,
    title: 'Actualización y migración',
    items: [
      'Instalación de SSD',
      'Migración de información de HDD a SSD',
      'Clonación de discos',
      'Ampliación de memoria RAM',
      'Actualización de almacenamiento',
      'Actualización de componentes',
      'Transferencia de información',
      'Respaldo y recuperación de información',
      'Optimización de equipos antiguos',
    ],
  },
  {
    icon: Gamepad2,
    title: 'Especialistas en equipos Gamer',
    items: [
      'Mantenimiento de PC Gamer',
      'Mantenimiento de laptops Gamer',
      'Optimización para gaming',
      'Control y reducción de temperaturas',
      'Actualización de RAM',
      'Actualización a SSD',
      'Asesoría para actualización de componentes',
      'Diagnóstico de problemas de rendimiento',
      'Asesoría para armado y actualización de PC Gamer',
    ],
  },
  {
    icon: Tv,
    title: 'Reparación de pantallas Samsung',
    items: [
      'Reparación de pantallas Samsung quebradas',
      'Diagnóstico de pantallas',
      'Reparación especializada para modelos de 55" a 85"',
      'Atención a modelos de los años 2020 a 2026',
      'Diagnóstico de fallas de imagen',
      'Reparación de componentes electrónicos relacionados con pantalla',
    ],
  },
  {
    icon: BookOpen,
    title: 'Programas para profesionales y estudiantes',
    intro: 'Instalación y configuración de software para:',
    items: [
      'Ingeniería',
      'Arquitectura',
      'Diseño gráfico',
      'Diseño 3D',
      'Oficina',
      'Edición de fotografía',
      'Edición de video',
      'Animación',
      'Modelado 3D',
      'Entretenimiento',
      'Productividad',
    ],
    note: 'Disponible para Windows y Mac.',
  },
  {
    icon: ShoppingCart,
    title: 'Venta de equipo y componentes',
    items: [
      'Laptops',
      'Computadoras de escritorio',
      'PC Gamer',
      'Laptops Gamer',
      'Monitores',
      'SSD',
      'Memoria RAM',
      'Componentes para PC',
      'Accesorios y periféricos',
      'Smart TVs Samsung',
    ],
  },
];

function ServiceSection({ category, index }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = category.icon;

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-secondary/40 transition-colors"
        aria-expanded={open}
      >
        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="flex-1 text-lg md:text-xl font-semibold text-foreground">{category.title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 pt-1 border-t border-border">
              {category.intro && (
                <p className="text-muted-foreground mt-4 mb-4">{category.intro}</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-4">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              {category.note && (
                <p className="text-sm text-primary font-medium mt-4">{category.note}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiciosPage() {
  return (
    <div className="py-16 md:py-24">
      <Helmet>
        <title>Servicios | AS COMPUTADORAS</title>
        <meta
          name="description"
          content="Reparación y mantenimiento de computadoras, servicio especializado Mac, Windows, equipos Gamer, reparación a nivel componente, pantallas Samsung, venta de equipo y componentes en Ensenada, B.C."
        />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Wrench className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Servicios</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Soluciones tecnológicas integrales</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reparación, mantenimiento, actualización y venta de equipo de cómputo y pantallas en Ensenada, B.C. Toca cada categoría para ver el detalle.
          </p>
        </div>

        {/* Service sections */}
        <div className="max-w-4xl mx-auto space-y-4">
          {categories.map((category, i) => (
            <ServiceSection key={i} category={category} index={i} />
          ))}
        </div>

        {/* Garantía */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Garantía de 6 meses</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Todos nuestros servicios cuentan con 6 meses de garantía, brindándote mayor seguridad y confianza en cada reparación o servicio realizado.
              </p>
              <p className="text-primary font-semibold mt-4 text-lg">A.S. Computadoras — Tu mejor opción.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="text-base px-8">
            <a href="https://wa.link/ano4vq" target="_blank" rel="noopener noreferrer">Solicitar servicio</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ServiciosPage;
