import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Zap, Award, Users } from 'lucide-react';

function SobreNosotrosPage() {
  return (
    <div className="py-20">
      <Helmet>
        <title>Sobre Nosotros | AS COMPUTADORAS</title>
        <meta name="description" content="Conoce a AS Computadoras, expertos en reparación, mantenimiento y venta de equipo de cómputo en Ensenada, B.C. con años de experiencia y garantía en cada servicio." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Sobre Nosotros</h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          En AS Computadoras, somos un equipo de profesionales apasionados por la tecnología. Con años de experiencia en el mercado de Ensenada, nos hemos consolidado como la opción de confianza para la reparación, mantenimiento y venta de equipos de cómputo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Nuestra Misión</h3>
            <p className="text-muted-foreground">
              Proporcionar soluciones tecnológicas eficientes, honestas y de alta calidad que permitan a nuestros clientes alcanzar sus objetivos sin interrupciones técnicas.
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Nuestra Visión</h3>
            <p className="text-muted-foreground">
              Ser la empresa líder en servicios de TI en la región, reconocida por nuestra innovación, excelente servicio al cliente y compromiso con la calidad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
          {[
            { icon: Shield, title: 'Garantía de 6 meses', desc: 'Confianza y respaldo en cada servicio.' },
            { icon: Zap, title: 'Servicio rápido', desc: 'Tiempos de respuesta optimizados.' },
            { icon: Award, title: 'Profesionales certificados', desc: 'Experiencia comprobada en cada reparación.' },
          ].map((item, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl border border-border text-center">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">¿Necesitas un servicio técnico confiable?</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Contáctanos por WhatsApp y recibe atención personalizada para tu equipo de cómputo o pantalla Samsung.
          </p>
          <a
            href="https://wa.link/ano4vq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-lg font-medium transition-colors text-base"
          >
            Solicitar servicio
          </a>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosPage;
