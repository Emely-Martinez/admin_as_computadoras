import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/c2c4bb09115fb12124e7a2a13bf5cc6e.jpg" 
              alt="AS COMPUTADORAS" 
              className="h-12 w-auto mb-6 rounded-lg"
            />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Expertos en reparación, mantenimiento y venta de equipo de cómputo. Soluciones tecnológicas a tu alcance.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/A.S.COMPUTADORAS.ENS" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="text-muted-foreground hover:text-primary text-sm transition-colors">Servicios</Link></li>
              <li><Link to="/sobre-nosotros" className="text-muted-foreground hover:text-primary text-sm transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Cortez 1477 local 3 esq. L. Rayon, Ensenada, B.C.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:6469781994" className="hover:text-primary transition-colors">646-978-1994</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contacto@ascomputadoras.com" className="hover:text-primary transition-colors">contacto@ascomputadoras.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Atención Rápida</h3>
            <p className="text-sm text-muted-foreground mb-4">¿Necesitas ayuda inmediata? Contáctanos por WhatsApp.</p>
            <a
              href="https://wa.link/ano4vq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <img src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/86f4c1c7bf7308511def27650db8b5da.png" alt="WhatsApp" className="w-5 h-5" />
              Enviar Mensaje
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AS COMPUTADORAS. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link to="#" className="hover:text-primary transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;