import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
const WHATSAPP_URL = 'https://wa.link/ano4vq';

function ContactoPage() {
  return (
    <div className="py-20">
      <Helmet>
        <title>Contacto | AS COMPUTADORAS</title>
        <meta name="description" content="Contacta a AS COMPUTADORAS en Ensenada para solicitar reparación, mantenimiento y soporte técnico." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-muted-foreground">Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos a la brevedad.</p>
        </div>

        <div className="bg-card p-8 rounded-2xl border border-border space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" required className="bg-background text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" required className="bg-background text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" required className="bg-background text-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" rows={5} required className="bg-background text-foreground resize-none" />
          </div>
          <Button asChild className="w-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Enviar Mensaje por WhatsApp</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactoPage;